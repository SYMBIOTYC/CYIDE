#!/bin/bash
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

# Override the source VSIX URL with SU_CODEX_VSIX_URL if provided.
VSIX_URL="${SU_CODEX_VSIX_URL:-https://marketplace.visualstudio.com/_apis/public/gallery/publishers/openai/vsextensions/chatgpt/latest/vspackage}"

echo "==> downloading openai.chatgpt VSIX (platform=$PLATFORM) ..."
curl -fL "$VSIX_URL" -o "$TMP/ext.vsix"

echo "==> extracting bin/$PLATFORM ..."
command -v unzip >/dev/null 2>&1 || { echo "fetch-codex: unzip required" >&2; exit 1; }
unzip -o -q "$TMP/ext.vsix" "bin/$PLATFORM/*" -d "$TMP/extracted"

mkdir -p "$OUT_DIR/$PLATFORM"
cp -R "$TMP/extracted/bin/$PLATFORM/." "$OUT_DIR/$PLATFORM/"
chmod +x "$OUT_DIR/$PLATFORM/codex" 2>/dev/null || true
chmod +x "$OUT_DIR/$PLATFORM/codex-code-mode-host" 2>/dev/null || true
chmod +x "$OUT_DIR/$PLATFORM/rg" 2>/dev/null || true

echo "==> codex installed to $OUT_DIR/$PLATFORM/codex"
