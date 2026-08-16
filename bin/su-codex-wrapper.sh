#!/bin/bash
# SU Codex wrapper: runs the bundled `codex` against the local CY adapter.
# Invoked by the SU (cloned Codex) extension via su.cliExecutable.
#
# All paths are resolved relative to this script's own location so the
# extension works on any machine (no hardcoded /Volumes/... paths).
set -u

# Resolve the directory this script lives in (.../bin).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Default CODEX_HOME: a sibling of the extension root, or overridable via env.
CODEX_HOME="${SU_CODEX_HOME:-$SCRIPT_DIR/../codex-home}"

PORT="${SU_ADAPTER_PORT:-8788}"
NODE_BIN="$(command -v node || true)"
ADAPTER="$SCRIPT_DIR/su-adapter.mjs"
CODEX="$SCRIPT_DIR/macos-x86_64/codex"

export CODEX_HOME

# Ensure the local CY adapter (Responses API -> CY gateway) is listening.
if ! bash -c "exec 3<>/dev/tcp/127.0.0.1/$PORT" 2>/dev/null; then
  if [ -z "$NODE_BIN" ]; then
    echo "su-codex-wrapper: node not found on PATH; cannot start adapter" >&2
    exit 1
  fi
  nohup "$NODE_BIN" "$ADAPTER" >/tmp/su-adapter.log 2>&1 &
  disown 2>/dev/null
  sleep 1.5
fi

# Lazily fetch the platform codex binary if it is missing.
if [ ! -x "$CODEX" ]; then
  echo "su-codex-wrapper: codex binary missing at $CODEX; fetching..." >&2
  if [ -x "$SCRIPT_DIR/fetch-codex.sh" ]; then
    "$SCRIPT_DIR/fetch-codex.sh" || {
      echo "su-codex-wrapper: failed to fetch codex binary" >&2
      exit 1
    }
  else
    echo "su-codex-wrapper: fetch-codex.sh helper is missing" >&2
    exit 1
  fi
fi

exec "$CODEX" "$@"
