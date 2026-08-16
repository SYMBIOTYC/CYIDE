#!/usr/bin/env bash
# Build -> (optional) install -> verify for the CY (CY.ai) extension.
#
# Usage:
#   ./release.sh              # auto-bump patch version, package VSIX
#   ./release.sh 1.2.3        # explicit version
#   ./release.sh --no-bump    # keep current version
#   INSTALL=1 ./release.sh    # also install into VS Code / VSCodium
#
# The script operates on the repository root it lives in, so it is fully
# portable (no hardcoded machine paths).
set -euo pipefail

export PATH="$PATH:/usr/local/bin"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

BUMP=1
for a in "$@"; do
  case "$a" in
    --no-bump) BUMP=0 ;;
    *) VER_OVERRIDE="$a" ;;
  esac
done

if [ -n "${VER_OVERRIDE:-}" ]; then
  node -e "const fs=require('fs');const p='package.json';const d=JSON.parse(fs.readFileSync(p));d.version=process.argv[1];fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');" "$VER_OVERRIDE"
elif [ "$BUMP" = "1" ]; then
  node -e "const fs=require('fs');const p='package.json';const d=JSON.parse(fs.readFileSync(p));const a=d.version.split('.');a[2]=String((+a[2])+1);d.version=a.join('.');fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');"
fi

VER=$(node -e "console.log(require('./package.json').version)")
PKG_NAME=$(node -e "console.log(require('./package.json').name)")
echo "==> version: $VER"

echo "==> packaging VSIX ..."
npx --yes @vscode/vsce package --no-dependencies --allow-missing-repository -o "${PKG_NAME}-$VER.vsix"

if [ "${INSTALL:-0}" = "1" ]; then
  CODE_BIN="$(command -v code || command -v codium || true)"
  if [ -n "$CODE_BIN" ]; then
    echo "==> installing via $CODE_BIN ..."
    "$CODE_BIN" --install-extension "ai-$VER.vsix" --force
  else
    echo "==> 'code'/'codium' CLI not found; skipping install." >&2
  fi
fi

echo "==> done: ai-$VER.vsix"
