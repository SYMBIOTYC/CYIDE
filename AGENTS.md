# CYIDE Agent Instructions — Single Source of Truth

> Repo: `Symbiotyc/CYIDE` · Extension id: `cy.su` · Publisher: `cy`

## Project Overview
**CYIDE = CY + IDE.** A maintained fork of OpenAI's `openai.chatgpt` VS Code
extension, rebranded and rewired to run the local Codex binary against the
**CY / Kilo gateway** instead of OpenAI.

The upstream "fundament" (the `openai.chatgpt` extension) ships a Rust `codex`
binary that only speaks OpenAI's **Responses API**. We keep that binary but route
it through a local adapter (`bin/su-adapter.mjs`) that translates Responses ↔
Chat Completions for the CY gateway.

## Architecture

```
 VS Code (cy.su)
   └─ su.cliExecutable ──> bin/su-codex-wrapper.sh
                               ├─ ensures bin/su-adapter.mjs is listening (:8788)
                               ├─ lazily fetches bin/<platform>/codex (if missing)
                               └─ exec bin/<platform>/codex
   codex (Rust) ──POST /v1/responses──> su-adapter.mjs (:8788)
                                     ──POST /v1/chat/completions──> CY gateway
```

- **`out/extension.js`** — pre-built extension bundle (minified). Rebranded from
  upstream: `chatgpt.*` → `su.*`, `ChatGPT` → `CY`, plus a portable
  `cliExecutable` patch in `uP()` so the default `bin/su-codex-wrapper.sh`
  resolves relative to the extension install dir on any machine.
- **`webview/`** — bundled UI assets. `webview/assets/rebrand-CY.js` (a
  MutationObserver) swaps visible "Codex" → "CY" at runtime, and
  `webview/index.html` sets `<title>CY</title>`.
- **`bin/su-codex-wrapper.sh`** — launcher invoked by the extension. Portable
  (resolves paths via `BASH_SOURCE`), starts the adapter, and fetches the codex
  binary if absent.
- **`bin/su-adapter.mjs`** — Responses ↔ Chat Completions translator. Config via
  env: `SU_ADAPTER_PORT`, `CY_API_BASE_URL`, `CY_API_KEY`, `CY_MODEL`.
- **`bin/fetch-codex.sh`** — downloads the platform `codex` binary from the
  latest `openai.chatgpt` VSIX (download-at-runtime, avoids a 235 MB git blob).
- **`bin/<platform>/codex`** — the large binary. **Git-ignored**; fetched at
  runtime/build.
- **`release.sh`** — packages the VSIX (`@vscode/vsce package`). Portable.
- **`scripts/rebrand.js`** — deterministic rebrand of a fresh upstream fundament.
- **`scripts/update-fundament.sh`** — pulls upstream VSIX, copies fundament,
  rebrands, builds.
- **`.github/workflows/fundament-update.yml`** — daily + manual CI that runs the
  update and opens a PR.

## Key environment variables
| Var | Default | Purpose |
|-----|---------|---------|
| `CY_API_BASE_URL` | `http://127.0.0.1:8787/v1` | CY gateway base |
| `CY_API_KEY` | _(empty)_ | CY gateway key |
| `CY_MODEL` | _(from request)_ | model sent to CY |
| `SU_ADAPTER_PORT` | `8788` | adapter listen port |
| `SU_CODEX_HOME` | `<ext>/../codex-home` | CODEX_HOME for the binary |
| `SU_CODEX_VSIX_URL` | marketplace latest | source VSIX for the binary |

## Agent Commands

### Build & release (local)
```bash
cd codex-clone
bash ./release.sh            # auto-bump patch version, package su-<ver>.vsix
bash ./release.sh 1.2.3      # explicit version
INSTALL=1 bash ./release.sh  # also install into VS Code / VSCodium
```

### Refresh the fundament from upstream (local)
```bash
bash scripts/update-fundament.sh
# then review the diff, build, and commit
```

### Test a built VSIX
```bash
code --install-extension su-<version>.vsix --force
```

## Fundament update process (CI)
1. Scheduled daily (02:00 UTC) + manual dispatch.
2. `update-fundament.sh` downloads `openai.chatgpt` VSIX, extracts
   `out/extension.js`, `webview/`, and `bin/<platform>/`, preserves
   `rebrand-CY.js`, then runs `rebrand.js`.
3. `rebrand.js` patches extension.js, injects the webview rebrand, bumps the
   patch version, and records `UPSTREAM_VERSION`.
4. `release.sh --no-bump` builds the VSIX.
5. If the working tree changed, CI opens a PR `fundament/<timestamp>` labeled
   `fundament-update` and uploads the VSIX as an artifact.

**Never** commit the 235 MB `codex` binary. It is fetched at runtime via
`bin/fetch-codex.sh`.

## Troubleshooting
| Symptom | Cause / Fix |
|---------|-------------|
| Extension can't find `codex` | Run `bin/fetch-codex.sh`; ensure `bin/<platform>/codex` exists. |
| Adapter connection refused | Wrapper auto-starts it on `:8788`; check `/tmp/su-adapter.log`. |
| Wrong model / 401 from CY | Set `CY_API_KEY` / `CY_API_BASE_URL` in the environment. |
| `cliExecutable` not resolving | Must be an absolute path or relative to the extension install dir (the `uP()` patch handles relative). |
| VSIX too large to publish | Confirm `.vscodeignore` excludes `bin/<platform>/`. |

## Repo hygiene
- `.gitignore` excludes `bin/*/` (platform binaries), `*.vsix`, `codex-home/`,
  `node_modules/`.
- `.vscodeignore` keeps the VSIX small by excluding binaries + dev files.
- Secrets are never committed: `CY_API_KEY` is read from the environment only.
