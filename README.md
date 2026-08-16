# CYIDE — CY coding agent for VS Code

**CYIDE** (`cy.su`) is a maintained fork of OpenAI's `openai.chatgpt` extension,
rebranded and rewired to run the local **Codex** binary against the **CY / Kilo
gateway** instead of OpenAI.

## What it is

- A VS Code extension that adds a CY sidebar/panel, chat, and agentic coding.
- Ships the real Rust `codex` binary, but routes it through a local adapter
  (`bin/su-adapter.mjs`) that translates OpenAI's **Responses API** into the
  CY gateway's **Chat Completions API`.
- Visible "Codex" text is swapped to "CY" at runtime via
  `webview/assets/rebrand-CY.js`.
- Includes resilience in the adapter: retry with exponential backoff,
  circuit-breaker, config file loading, streaming, and tool/function call
  translation.

## Architecture

```
VS Code (cy.su)
  └─ su.cliExecutable ─▶ bin/su-codex-wrapper.sh
                            ├─ ensures bin/su-adapter.mjs is listening (:8788)
                            ├─ lazily fetches bin/<platform>/codex if missing
                            └─ exec bin/<platform>/codex
  codex (Rust) ─▶ POST /v1/responses ─▶ su-adapter.mjs ─▶ POST /v1/chat/completions ─▶ CY gateway
```

## Quick start (development)

```bash
git clone https://github.com/SYMBIOTYC/CYIDE.git
cd CYIDE
npm ci
bash ./release.sh            # packages su-<ver>.vsix
INSTALL=1 bash ./release.sh  # also installs into VS Code / VSCodium
```

Set the CY gateway connection via environment before launching VS Code:

```bash
export CY_API_BASE_URL=http://127.0.0.1:8787/v1
export CY_API_KEY=...
export CY_MODEL=stepfun/step-3.7-flash:free
```

The `codex` binary is fetched automatically on first launch
(`bin/fetch-codex.sh`) — it is **not** committed to git.

## Documentation

- `AGENTS.md` — single source of truth for architecture, env vars, commands, and repo hygiene.
- `docs/DEVELOPER.md` — local setup, build, test, and publishing.
- `docs/FUNDAMENT_UPDATE.md` — automated upstream sync pipeline details.

## CI/CD

- `.github/workflows/fundament-update.yml` — daily 02:00 UTC + manual dispatch.
- `.github/workflows/publish.yml` — publish VSIX on tag push or manual dispatch.

## Repository layout

| Path | Purpose |
|------|---------|
| `out/extension.js` | Rebranded extension bundle |
| `webview/` | UI assets (+ `assets/rebrand-CY.js`) |
| `bin/su-codex-wrapper.sh` | Portable launcher |
| `bin/su-adapter.mjs` | Responses ↔ Chat Completions adapter |
| `bin/fetch-codex.sh` | Downloads the `codex` binary at runtime |
| `release.sh` | VSIX packaging |
| `scripts/rebrand.js` | Deterministic rebrand of upstream fundament |
| `scripts/update-fundament.sh` | Pull + rebrand + build upstream |
| `tests/adapter.test.js` | Adapter smoke checks |
| `AGENTS.md` | Single source of truth for agents |

## Notes

- The large `codex` binary is intentionally **excluded from git** (`.gitignore`)
  and the VSIX (`.vscodeignore`); it is fetched at runtime.
- Secrets are never committed — `CY_API_KEY` is read from the environment only.
