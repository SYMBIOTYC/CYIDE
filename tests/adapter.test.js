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

describe("su-adapter", () => {
  let src;
  beforeAll(() => {
    src = fs.readFileSync(ADAPTER, "utf8");
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
});
