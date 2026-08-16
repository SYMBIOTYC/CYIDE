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

VSIX_URL="${SU_CODEX_VSIX_URL:-https://marketplace.visualstudio.com/_apis/public/gallery/publishers/openai/vsextensions/chatgpt/latest/vspackage}"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "==> downloading openai.chatgpt VSIX ..."
curl -fL "$VSIX_URL" -o "$TMP/ext.vsix"

echo "==> extracting ..."
command -v unzip >/dev/null 2>&1 || { echo "update-fundament: unzip required" >&2; exit 1; }
unzip -o -q "$TMP/ext.vsix" -d "$TMP/extracted"

UPSTREAM_VERSION="$(node -e "console.log(require('./$TMP/extracted/package.json').version)" 2>/dev/null || echo unknown)"
echo "==> upstream version: $UPSTREAM_VERSION"

echo "==> copying fundament (extension.js, webview, bin) ..."
cp -f "$TMP/extracted/out/extension.js" "$ROOT/out/extension.js"
# Preserve our runtime rebrand script across the webview swap.
REBRAND_BACKUP="$TMP/rebrand-CY.js"
cp -f "$ROOT/webview/assets/rebrand-CY.js" "$REBRAND_BACKUP" 2>/dev/null || true
rm -rf "$ROOT/webview"
cp -R "$TMP/extracted/webview" "$ROOT/webview"
mkdir -p "$ROOT/webview/assets"
cp -f "$REBRAND_BACKUP" "$ROOT/webview/assets/rebrand-CY.js"
# Platform codex binaries (gitignored locally; fetched at runtime otherwise).
rm -rf "$ROOT/bin/macos-x86_64" "$ROOT/bin/macos-arm64" "$ROOT/bin/linux-x64" \
       "$ROOT/bin/linux-arm64" "$ROOT/bin/win32-x64" "$ROOT/bin/win32-arm64"
cp -R "$TMP/extracted/bin/." "$ROOT/bin/"

echo "==> rebranding ..."
node scripts/rebrand.js "$UPSTREAM_VERSION"

echo "==> building VSIX ..."
bash ./release.sh --no-bump

echo "==> update-fundament complete (upstream $UPSTREAM_VERSION, local $(node -e "console.log(require('./package.json').version)"))"
