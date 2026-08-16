# Fundament Update — Technical Reference

The "fundament" is the upstream **`openai.chatgpt`** VS Code extension published
by OpenAI. CYIDE is a rebrand of it. This document explains the automated
update pipeline in detail.

## Why a pipeline?
OpenAI ships new Codex functionality (and a new `codex` binary) inside the
`openai.chatgpt` VSIX. Rather than hand-porting each release, we:

1. Download the latest `openai.chatgpt` VSIX.
2. Extract the parts we depend on (the bundle, the webview, the binaries).
3. Rebrand them into `cy.su`.
4. Build and ship.

This keeps CYIDE in lockstep with upstream while preserving our CY gateway
wiring.

## Source VSIX
Default URL (override with `SU_CODEX_VSIX_URL`):

```
https://marketplace.visualstudio.com/_apis/public/gallery/publishers/openai/vsextensions/chatgpt/latest/vspackage
```

It is a `.vsix` (zip) that redirects; `curl -fL` follows it.

## What gets extracted
| Path in VSIX | Action |
|--------------|--------|
| `out/extension.js` | Overwrites `out/extension.js`, then rebranded by `rebrand.js`. |
| `webview/` | Replaces `webview/`; our `assets/rebrand-CY.js` is preserved. |
| `bin/<platform>/` | Replaces platform binaries (`codex`, `codex-code-mode-host`, `rg`, resources). Git-ignored. |

## Rebrand rules (`scripts/rebrand.js`)
1. **extension.js**
   - `chatgpt.` → `su.` (command/setting/identifier prefix).
   - `ChatGPT` → `CY` (visible brand text).
   - Re-applies the portable `cliExecutable` resolution in `uP()` so the default
     value `bin/su-codex-wrapper.sh` resolves relative to the extension install
     directory on any machine.
2. **webview/index.html**
   - `<title>` forced to `CY`.
   - Injects `<script src="./assets/rebrand-CY.js">` before `</head>` (idempotent).
3. **Version**
   - Our `package.json` patch version is bumped on every run.
   - Upstream version is written to `UPSTREAM_VERSION`.

## Build
`release.sh --no-bump` packages the VSIX with `@vscode/vsce`. The VSIX excludes
the large binaries (`.vscodeignore`), so it is small; the `codex` binary is
fetched at runtime by `bin/fetch-codex.sh`.

## CI (`.github/workflows/fundament-update.yml`)
- **Trigger**: `cron` daily 02:00 UTC + `workflow_dispatch`.
- **Runner**: `macos-latest` (Node 20).
- **Steps**: checkout → setup node → `update-fundament.sh` → detect diff →
  if changed, push branch `fundament/<ts>` and open a PR labeled
  `fundament-update`; upload the VSIX as an artifact.
- **Tokens**: uses the default `GITHUB_TOKEN` (no PAT required for same-repo PRs).
- **Config**: optional `SU_CODEX_VSIX_URL` repo variable to pin a source.

## Rollback
Each fundament update is a PR. To roll back, revert the PR merge. Because the
binary is fetched at runtime (not pinned in git), also consider pinning
`SU_CODEX_VSIX_URL` to a known-good upstream version if a specific release
misbehaves.

## Manual run
```bash
bash scripts/update-fundament.sh
git diff        # review
bash ./release.sh --no-bump
```
