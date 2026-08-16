#!/usr/bin/env bash
# scripts/update-fundament.sh
#
# Pulls the latest openai.chatgpt VSIX from the VSCode Marketplace, extracts the
# "fundament" (extension.js, webview, and the platform codex binaries), rebrands
# it into the cy.su extension, and builds a fresh VSIX.
#
# After this runs, the repo working tree contains the updated fundament. The
# CI workflow (or a human) is responsible for committing and opening a PR.
#
# Usage: bash scripts/update-fundament.sh
set -euo pipefail

export PATH="$PATH:/usr/local/bin"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

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
  # Fallback to the legacy vspackage redirect endpoint.
  echo "https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${pub}/vsextensions/${ext}/latest/vspackage"
}

VSIX_URL="${SU_CODEX_VSIX_URL:-$(resolve_vsix_url openai chatgpt)}"
echo "==> VSIX source: $VSIX_URL"

echo "==> downloading openai.chatgpt VSIX ..."
curl -fL --compressed "$VSIX_URL" -o "$TMP/ext.vsix"

echo "==> verifying archive ..."
if [ "$(head -c2 "$TMP/ext.vsix")" != "PK" ]; then
  echo "update-fundament: downloaded file is not a VSIX/zip (magic=$(head -c4 "$TMP/ext.vsix" | od -An -tx1 | tr -d ' '))" >&2
  exit 1
fi

echo "==> extracting ..."
if command -v python3 >/dev/null 2>&1; then
  python3 - "$TMP/ext.vsix" "$TMP/extracted" <<'PY'
import sys, zipfile, os
zf, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
with zipfile.ZipFile(zf) as z:
    z.extractall(out)
PY
else
  command -v unzip >/dev/null 2>&1 || { echo "update-fundament: no extractor (python3/unzip) available" >&2; exit 1; }
  unzip -o -q "$TMP/ext.vsix" -d "$TMP/extracted"
fi

# --- Locate fundament files (layout-agnostic) -------------------------------
EXTJS="$(find "$TMP/extracted" -path '*/out/extension.js' | head -1)"
PKG="$(find "$TMP/extracted" -maxdepth 3 -name package.json | grep -v node_modules | head -1)"
WEBVIEW="$(find "$TMP/extracted" -maxdepth 4 -type d -name webview | head -1)"
BINDIR="$(find "$TMP/extracted" -maxdepth 4 -type d -name bin | head -1)"

if [ -z "$EXTJS" ] || [ -z "$PKG" ]; then
  echo "update-fundament: could not locate fundament in VSIX. Extracted layout:" >&2
  find "$TMP/extracted" -maxdepth 2 | sed 's#^#  #' >&2
  exit 1
fi

UPSTREAM_VERSION="$(node -e "console.log(require('$PKG').version)" 2>/dev/null || echo unknown)"
echo "==> upstream version: $UPSTREAM_VERSION"

echo "==> copying fundament (extension.js, webview, bin) ..."
cp -f "$EXTJS" "$ROOT/out/extension.js"
# Preserve our runtime rebrand script across the webview swap.
REBRAND_BACKUP="$TMP/rebrand-CY.js"
cp -f "$ROOT/webview/assets/rebrand-CY.js" "$REBRAND_BACKUP" 2>/dev/null || true
rm -rf "$ROOT/webview"
[ -n "$WEBVIEW" ] && cp -R "$WEBVIEW" "$ROOT/webview"
mkdir -p "$ROOT/webview/assets"
cp -f "$REBRAND_BACKUP" "$ROOT/webview/assets/rebrand-CY.js"
# Platform codex binaries (gitignored locally; fetched at runtime otherwise).
rm -rf "$ROOT/bin/macos-x86_64" "$ROOT/bin/macos-arm64" "$ROOT/bin/linux-x64" \
       "$ROOT/bin/linux-arm64" "$ROOT/bin/win32-x64" "$ROOT/bin/win32-arm64"
[ -n "$BINDIR" ] && cp -R "$BINDIR/." "$ROOT/bin/"

echo "==> rebranding ..."
node scripts/rebrand.js "$UPSTREAM_VERSION"

echo "==> building VSIX ..."
bash ./release.sh --no-bump

echo "==> update-fundament complete (upstream $UPSTREAM_VERSION, local $(node -e "console.log(require('./package.json').version)"))"
