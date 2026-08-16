# Developer Guide

## Prerequisites

- Node.js >= 18
- npm
- VS Code or VSCodium
- `code` or `codium` CLI on PATH
- Git

## Local Setup

```bash
git clone https://github.com/SYMBIOTYC/CYIDE.git
cd CYIDE
npm ci
```

## Build & Test

```bash
npm test
bash ./release.sh
```

## Install Locally

```bash
INSTALL=1 bash ./release.sh
```

## Architecture

See `AGENTS.md` for the full architecture diagram and environment variables.

## Updating the Fundament

```bash
bash scripts/update-fundament.sh
# review the diff, then commit and push
```

## Publishing

Tag a release:

```bash
bash ./release.sh 1.2.3
git tag v1.2.3
git push --tags
```

The `Publish` workflow will build, test, package, and publish the VSIX.
