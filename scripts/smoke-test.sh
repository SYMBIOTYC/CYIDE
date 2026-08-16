#!/usr/bin/env bash
# scripts/smoke-test.sh
#
# Smoke test for the SU extension:
#   - Install the built VSIX
#   - Launch VS Code with a temporary user data directory
#   - Wait for activation and check exthost.log for activation message
#   - Check for errors
#   - Clean up

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Find the latest VSIX in the parent directory (su/)
VSIX=$(ls -1t ../su-*.vsix | head -1)
if [[ -z "$VSIX" ]]; then
  echo "Error: No VSIX found in ../"
  exit 1
fi
echo "Using VSIX: $VSIX"

# Create a temporary directory for VS Code user data
TMPDIR=$(mktemp -d)
echo "Using temporary user data directory: $TMPDIR"
cleanup() {
  rm -rf "$TMPDIR"
}
trap cleanup EXIT

# Install the extension
echo "Installing extension..."
code --install-extension "$VSIX" --force --user-data-dir="$TMPDIR" >/dev/null 2>&1

# Launch VS Code in the background
echo "Launching VS Code..."
code --user-data-dir="$TMPDIR" --wait >/dev/null 2>&1 &
VSCODE_PID=$!

# Wait for VS Code to start and the extension to activate
# We'll wait for the exthost.log to appear and then check for the activation message
LOG_FILE="$TMPDIR/logs/exthost.log"
echo "Waiting for exthost.log to appear..."
for i in {1..30}; do  # wait up to 30 seconds
  if [[ -f "$LOG_FILE" ]]; then
    break
  fi
  sleep 1
done

if [[ ! -f "$LOG_FILE" ]]; then
  echo "Error: exthost.log not found after waiting"
  kill $VSCODE_PID 2>/dev/null || true
  exit 1
fi

echo "Checking exthost.log for activation message..."
if grep -q "Activating CY extension" "$LOG_FILE"; then
  echo "SUCCESS: Extension activated successfully"
else
  echo "ERROR: Extension activation message not found in exthost.log"
  echo "Last 20 lines of exthost.log:"
  tail -20 "$LOG_FILE"
  kill $VSCODE_PID 2>/dev/null || true
  exit 1
fi

# Check for any errors in the log
if grep -i "error" "$LOG_FILE" | grep -v "Exporting worker" | grep -v "Failed to fetch" ; then
  echo "WARNING: Errors found in exthost.log:"
  grep -i "error" "$LOG_FILE"
fi

# Gracefully shut down VS Code
echo "Shutting down VS Code..."
kill $VSCODE_PID 2>/dev/null || true
wait $VSCODE_PID 2>/dev/null || true

echo "Smoke test passed"
