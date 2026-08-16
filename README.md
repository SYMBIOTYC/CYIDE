# CYIDE — CY coding agent for VS Code

**CYIDE** (`cy.su`) is a maintained fork of OpenAI's `openai.chatgpt` extension,
rebranded and rewired to run the local **Codex** binary against the **CY / Kilo
gateway** instead of OpenAI.

## What it is

- A VS Code extension that adds a CY sidebar/panel, chat, and agentic coding.
- Ships the real Rust `codex` binary, but routes it through a local adapter
  (`bin/su-adapter.mjs`) that translates OpenAI's **Responses API** into the
  CY gateway's **Chat Completions API**.
- Visible "Codex" text is swapped to "CY" at runtime via
  `webview/assets/rebrand-CY.js`.

## Architecture

```
VS Code (cy.su)
  └─ su.cliExecutable ─▶ bin/su-codex-wrapper.sh
                            ├─ starts bin/su-adapter.mjs (:8788)
                            ├─ fetches bin/<platform>/codex if missing
                            └─ exec bin/<platform>/codex
  codex (Rust) ─▶ POST /v1/responses ─▶ su-adapter.mjs ─▶ POST /v1/chat/completions ─▶ CY gateway
```

## Quick start (development)

```bash
cd codex-clone
bash ./release.sh            # packages su-<ver>.vsix (auto-bumps patch)
INSTALL=1 bash ./release.sh  # also installs into VS Code / VSCodium
```

Set the CY gateway connection via environment before launching VS Code:

```bash
export CY_API_BASE_URL=http://127.0.0.1:8787/v1
export CY_API_KEY=...
```

The `codex` binary is fetched automatically on first launch
(`bin/fetch-codex.sh`) — it is **not** committed to git.

## CI/CD — fundament auto-updates

A daily GitHub Actions workflow (`.github/workflows/fundament-update.yml`)
downloads the latest `openai.chatgpt` VSIX, rebrands it into `cy.su`
(`scripts/rebrand.js`), builds the VSIX, and opens a PR when the fundament
changes. See [`docs/FUNDAMENT_UPDATE.md`](docs/FUNDAMENT_UPDATE.md) for the full
pipeline.

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
| `AGENTS.md` | Single source of truth for agents |

## Notes

- The large `codex` binary is intentionally **excluded from git** (`.gitignore`)
  and the VSIX (`.vscodeignore`); it is fetched at runtime.
- Secrets are never committed — `CY_API_KEY` is read from the environment only.
