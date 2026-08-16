# Changelog

All notable changes to this project are documented in this file. The format is
based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `bin/fetch-codex.sh` — download-at-runtime for the platform `codex` binary
  (macos-x86_64 / macos-arm64 / linux-x64 / linux-arm64 / win32-x64 / win32-arm64).
- `scripts/rebrand.js` — deterministic openai.chatgpt → cy.su rebrand
  (extension.js `chatgpt.*→su.*`, `ChatGPT→CY`, portable `uP()` patch).
- `scripts/update-fundament.sh` — pull latest openai.chatgpt VSIX, rebrand, build.
- `.github/workflows/fundament-update.yml` — daily 02:00 UTC + manual dispatch,
  opens a `fundament-update` PR when upstream changes.
- `bin/su-adapter.mjs` resilience: retry with exponential backoff, circuit
  breaker, `/health` endpoint, optional JSON config file
  (`~/.config/su/adapter.json`).
- `tests/adapter.test.js` — vitest unit checks.
- `scripts/smoke-test.sh` — install VSIX, grep exthost.log for activation,
  check for `cy.su`/`openai.chatgpt` collisions.
- Branch protection (PR reviews + strict status checks) on `main`.
- GitHub Actions secrets: `CY_API_BASE_URL`, `CY_API_KEY`, `SU_CODEX_VSIX_URL`.

### Changed
- `bin/su-codex-wrapper.sh` is now fully portable (paths resolved relative to
  the script via `BASH_SOURCE`; no hardcoded `/Volumes/...`).
- `su.cliExecutable` default is `bin/su-codex-wrapper.sh` (relative, resolved
  against the extension install URI by the patched `uP()`).

### Removed
- The 235 MB `codex` binary is no longer vendored; fetched at runtime/by CI.
