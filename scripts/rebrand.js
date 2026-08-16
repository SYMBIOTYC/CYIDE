#!/usr/bin/env node
// scripts/rebrand.js
//
// Rebrands a freshly-extracted openai.chatgpt fundament into the cy.su
// extension and makes the result portable. Designed to be run after
// `scripts/update-fundament.sh` has copied the upstream `out/extension.js`,
// `webview/`, and `bin/` into the repo.
//
// Steps:
//   1. Patch out/extension.js:  `chatgpt.` -> `su.`, `ChatGPT` -> `CY`,
//      and re-apply the portable cliExecutable resolution in uP().
//   2. Inject webview/assets/rebrand-CY.js into webview/index.html and
//      force <title>CY</title>.
//   3. Bump our package.json patch version and record the upstream version.
//
// Usage: node scripts/rebrand.js [upstreamVersion]
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const UPSTREAM_VERSION = process.argv[2] || null;

// ---------------------------------------------------------------------------
// 1. extension.js rebrand
// ---------------------------------------------------------------------------
const EXT = path.join(ROOT, "out", "extension.js");
if (!fs.existsSync(EXT)) {
  console.error("rebrand: missing out/extension.js — run update-fundament.sh first");
  process.exit(1);
}
let js = fs.readFileSync(EXT, "utf8");

const before = js.length;
js = js.split("chatgpt.").join("su."); // command/setting/identifier prefix
js = js.split("ChatGPT").join("CY"); // visible brand text
if (js.length === before) {
  console.warn("rebrand: no chatgpt.* tokens found in extension.js (already rebranded?)");
}

// Re-apply the portable cliExecutable resolution if missing.
const PATCH_MARKER = 'if(!/^[/~]/.test(r))r=Gs.Uri.joinPath(t,r).fsPath';
const ORIGINAL_UP =
  'function uP(t,e){let r=Dn("cliExecutable");if(r&&r.trim().length>0)return r;';
const PATCHED_UP =
  'function uP(t,e){let r=Dn("cliExecutable");if(r&&r.trim().length>0){if(!/^[/~]/.test(r))r=Gs.Uri.joinPath(t,r).fsPath;return r}';
if (js.includes(ORIGINAL_UP) && !js.includes(PATCH_MARKER)) {
  js = js.replace(ORIGINAL_UP, PATCHED_UP);
  console.log("rebrand: applied portable cliExecutable patch to uP()");
} else if (js.includes(PATCH_MARKER)) {
  console.log("rebrand: uP() portable patch already present");
} else {
  console.warn("rebrand: could not locate uP() to patch (extension.js shape changed?)");
}

fs.writeFileSync(EXT, js);

// ---------------------------------------------------------------------------
// 2. webview rebrand injection
// ---------------------------------------------------------------------------
const IDX = path.join(ROOT, "webview", "index.html");
const REBRAND_SRC = "./assets/rebrand-CY.js";
if (fs.existsSync(IDX)) {
  let html = fs.readFileSync(IDX, "utf8");

  // Force the document title.
  html = html.replace(/<title>[^<]*<\/title>/i, "<title>CY</title>");

  // Inject the rebrand script once, just before </head>.
  if (!html.includes(REBRAND_SRC)) {
    const tag = `<script crossorigin src="${REBRAND_SRC}"></script>`;
    if (html.includes("</head>")) {
      html = html.replace("</head>", `${tag}\n  </head>`);
    } else {
      html = `${tag}\n${html}`;
    }
    console.log("rebrand: injected rebrand-CY.js into webview/index.html");
  } else {
    console.log("rebrand: rebrand-CY.js already referenced in webview/index.html");
  }
  fs.writeFileSync(IDX, html);
} else {
  console.warn("rebrand: webview/index.html missing — skipping webview rebrand");
}

// Ensure the rebrand script itself exists in assets.
const ASSET = path.join(ROOT, "webview", "assets", "rebrand-CY.js");
if (!fs.existsSync(ASSET)) {
  console.error("rebrand: webview/assets/rebrand-CY.js is missing — it must be committed");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 3. version bookkeeping
// ---------------------------------------------------------------------------
const PKG = path.join(ROOT, "package.json");
const pkg = JSON.parse(fs.readFileSync(PKG, "utf8"));

// Bump our own patch version for every fundament update.
const parts = pkg.version.split(".");
parts[2] = String((parseInt(parts[2], 10) || 0) + 1);
pkg.version = parts.join(".");
fs.writeFileSync(PKG, JSON.stringify(pkg, null, 2) + "\n");
console.log(`rebrand: bumped version -> ${pkg.version}`);

if (UPSTREAM_VERSION) {
  fs.writeFileSync(path.join(ROOT, "UPSTREAM_VERSION"), UPSTREAM_VERSION + "\n");
  console.log(`rebrand: recorded upstream version ${UPSTREAM_VERSION}`);
}

console.log("rebrand: done");
