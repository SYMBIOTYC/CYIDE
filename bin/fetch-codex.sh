#!/usr/bin/env bash
# fetch-codex.sh — download the platform-specific `codex` binary (and friends)
# from the latest openai.chatgpt VSIX published on the VSCode Marketplace.
#
# This implements the "download at build/runtime" strategy so the repo and the
# built VSIX stay small (no 235MB binary committed to git).
#
# Usage: fetch-codex.sh [target_dir]
#   target_dir defaults to the directory containing this script (.../bin).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="${1:-$SCRIPT_DIR}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --- platform -> openai.chatgpt bin subdirectory -----------------------------
OS="$(uname -s)"; ARCH="$(uname -m)"
case "$OS:$ARCH" in
  Darwin:x86_64)  PLATFORM="macos-x86_64" ;;
  Darwin:arm64)   PLATFORM="macos-arm64" ;;
  Linux:x86_64)   PLATFORM="linux-x64" ;;
  Linux:aarch64)  PLATFORM="linux-arm64" ;;
  MINGW*|MSYS*|CYGWIN*|Windows_NT:x86_64) PLATFORM="win32-x64" ;;
  MINGW*|MSYS*|CYGWIN*|Windows_NT:arm64)  PLATFORM="win32-arm64" ;;
  *) echo "fetch-codex: unsupported platform $OS:$ARCH" >&2; exit 1 ;;
esac

# --- Resolve the real VSIX download URL via the Gallery REST API ------------
resolve_vsix_url() {
  local pub="$1" ext="$2"
  local meta
  meta="$(curl -fsSL -H "Accept: application/json;api-version=3.0-preview.1" \
    "https://marketplace.visualstudio.com/_apis/public/gallery/extensions/${pub}.${ext}/latest" 2>/dev/null)" || true
  if [ -n "$meta" ]; then
    local url
    url="$(printf '%s' "$meta" | node -e '
      let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{
        try{
          const j=JSON.parse(d);
          const r=(j&&j.results||[])[0]||{};
          let files=[];
          (r.extensions||[]).forEach(e=>{(e.versions||[]).forEach(v=>{files=files.concat(v.files||[]);});});
          (r.versions||[]).forEach(v=>{files=files.concat(v.files||[]);});
          const f=files.find(x=>x&&x.assetType==="Microsoft.VisualStudio.Services.VSIXPackage");
          const u=f&&(f.source||f.fallbackAssetUri);
          process.stdout.write(u||"");
        }catch(e){process.stdout.write("");}
      });' 2>/dev/null)" || true
    [ -n "$url" ] && { echo "$url"; return 0; }
  fi
  echo "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${pub}/vsextensions/${ext}/latest/vspackage"
}

# Override the source VSIX URL with SU_CODEX_VSIX_URL if provided.
VSIX_URL="${SU_CODEX_VSIX_URL:-$(resolve_vsix_url openai chatgpt)}"
echo "==> VSIX source: $VSIX_URL"

echo "==> downloading openai.chatgpt VSIX (platform=$PLATFORM) ..."
curl -fL --compressed --max-time 600 "$VSIX_URL" -o "$TMP/ext.vsix"

if [ "$(head -c2 "$TMP/ext.vsix")" != "PK" ]; then
  echo "fetch-codex: downloaded file is not a VSIX/zip (magic=$(head -c4 "$TMP/ext.vsix" | od -An -tx1 | tr -d ' '))" >&2
  exit 1
fi

echo "==> extracting VSIX ..."
if command -v python3 >/dev/null 2>&1; then
  python3 - "$TMP/ext.vsix" "$TMP/extracted" <<'PY'
import sys, zipfile, os
zf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
with zipfile.ZipFile(zf) as z:
    z.extractall(out)
PY
else
  command -v unzip >/dev/null 2>&1 || { echo "fetch-codex: no extractor (python3/unzip) available" >&2; exit 1; }
  unzip -o -q "$TMP/ext.vsix" -d "$TMP/extracted"
fi

BINDIR="$(find "$TMP/extracted" -maxdepth 4 -type d -name bin | head -1)"
if [ -z "$BINDIR" ] || [ ! -d "$BINDIR/$PLATFORM" ]; then
  echo "fetch-codex: bin/$PLATFORM not found in VSIX. Extracted layout:" >&2
  find "$TMP/extracted" -maxdepth 2 | sed 's#^#  #' >&2
  exit 1
fi

mkdir -p "$OUT_DIR/$PLATFORM"
cp -R "$BINDIR/$PLATFORM/." "$OUT_DIR/$PLATFORM/"
chmod +x "$OUT_DIR/$PLATFORM/codex" 2>/dev/null || true
chmod +x "$OUT_DIR/$PLATFORM/codex-code-mode-host" 2>/dev/null || true
chmod +x "$OUT_DIR/$PLATFORM/rg" 2>/dev/null || true

echo "==> codex installed to $OUT_DIR/$PLATFORM/codex"
