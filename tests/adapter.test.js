import { describe, test, expect, beforeAll } from 'vitest';
/**
 * Unit tests for the SU adapter helpers.
 * Run with: npx --yes vitest run
 *
 * These are lightweight import-free checks: they validate that the adapter
 * source contains the expected resilience + translation logic. Full
 * integration tests require a running CY gateway.
 */
const fs = require("fs");
const path = require("path");

const ADAPTER = path.resolve(__dirname, "..", "bin", "su-adapter.mjs");
const EXT = path.resolve(__dirname, "..", "out", "extension.js");
const PKG = path.resolve(__dirname, "..", "package.json");

describe("su-adapter", () => {
  let src;
  let pkg;
  beforeAll(() => {
    src = fs.readFileSync(ADAPTER, "utf8");
    pkg = JSON.parse(fs.readFileSync(PKG, "utf8"));
  });

  test("exposes /health endpoint", () => {
    expect(src).toContain('"/health"');
  });

  test("has retry with exponential backoff", () => {
    expect(src).toContain("MAX_RETRIES");
    expect(src).toContain("RETRY_BASE");
  });

  test("has circuit-breaker", () => {
    expect(src).toContain("circuitOpen");
    expect(src).toContain("breaker.failures");
  });

  test("has config file loading", () => {
    expect(src).toContain("loadConfig");
  });

  test("extension.js is rebranded (no chatgpt.* cmd prefix)", () => {
    const ext = fs.readFileSync(EXT, "utf8");
    expect(ext).not.toMatch(/chatgpt\.improve/);
    expect(ext).not.toMatch(/chatgpt\.showLspMcpCliArgs/);
  });

  // NEW TESTS

  test("contains streaming logic (Server-Sent Events)", () => {
    // Look for SSE headers and event formatting
    expect(src).toContain("text/event-stream");
    expect(src).toContain("data: ");
    expect(src).toContain("[DONE]");
  });

  test("contains tool/function call translation logic", () => {
    // Check for functions that handle tool translation
    expect(src).toContain("responsesToolsToChat");
    expect(src).toContain("chatMessageToResponseItems");
    // Check for actual tool call handling in the streaming logic
    expect(src).toContain("delta.tool_calls");
    expect(src).toContain("function_call");
  });

  test("health endpoint returns breaker info", () => {
    // Check the health endpoint response includes breaker details
    expect(src).toMatch(/breaker:\s*\{/);
    expect(src).toContain("breaker.failures");
    expect(src).toContain("breaker.openUntil");
    expect(src).toContain("threshold");
  });

  test("model fallback chain exists", () => {
    // Check for the fallback sequence: parsed.model, DEFAULT_MODEL, hardcoded fallback
    expect(src).toMatch(/parsed\.model\s*\|\|\s*DEFAULT_MODEL\s*\|\|/);
    // Also check for the hardcoded fallback in the handleResponses function
    expect(src).toContain("stepfun/step-3.7-flash:free");
  });

  test("package.json has correct repository URL", () => {
    expect(pkg.repository).toBeDefined();
    expect(pkg.repository.url).toBe("https://github.com/Symbiotyc/CYIDE.git");
  });
});
