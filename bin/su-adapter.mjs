#!/usr/bin/env node
// SU gateway adapter: exposes the OpenAI Responses API (`/v1/responses`) and
// translates to/from the CY/Kilo gateway's OpenAI-compatible Chat Completions API.
// This lets the real Rust `codex` backend (which only speaks the Responses wire API)
// run against the local CY gateway.
//
//   Codex (Rust) ---POST /v1/responses---> this adapter ---POST /v1/chat/completions---> CY gateway
//
// Config via env:
//   SU_ADAPTER_PORT        listen port (default 8788)
//   CY_API_BASE_URL        CY gateway base URL (default http://127.0.0.1:8787/v1)
//   CY_API_KEY             CY gateway api key (default empty)
//   CY_MODEL               model id to send to CY (default from incoming request)
//   SU_ADAPTER_MAX_RETRIES  retry attempts against CY (default 3)
//   SU_ADAPTER_RETRY_BASE   base delay ms for exponential backoff (default 300)
//   SU_ADAPTER_CONFIG       optional JSON config file path

import http from "node:http";
import fs from "node:fs";
import os from "node:os";

function loadConfig() {
  const p = process.env.SU_ADAPTER_CONFIG || (os.homedir() + "/.config/su/adapter.json");
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return {}; }
}
const cfg = loadConfig();

const PORT = Number(process.env.SU_ADAPTER_PORT || cfg.port || 8788);
const CY_BASE = (process.env.CY_API_BASE_URL || cfg.cyApiBaseUrl || "http://127.0.0.1:8787/v1").replace(/\/+$/, "");
const CY_KEY = process.env.CY_API_KEY || cfg.cyApiKey || "";
const DEFAULT_MODEL = process.env.CY_MODEL || cfg.cyModel || "";
const MAX_RETRIES = Number(process.env.SU_ADAPTER_MAX_RETRIES || cfg.maxRetries || 3);
const RETRY_BASE = Number(process.env.SU_ADAPTER_RETRY_BASE || cfg.retryBase || 300);

function sendJson(res, status, obj) {
  if (res.headersSent) {
    try { res.end(); } catch {}
    return;
  }
  const body = JSON.stringify(obj);
  res.writeHead(status, { "content-type": "application/json" });
  res.end(body);
}

function rid(prefix) {
  return prefix + "_" + Math.random().toString(36).slice(2, 12);
}

// Convert a Responses `input` (string | item[]) into Chat Completions messages.
function inputToMessages(input, instructions) {
  const messages = [];
  if (instructions && typeof instructions === "string" && instructions.trim()) {
    messages.push({ role: "system", content: instructions });
  }
  const items = typeof input === "string" ? [{ type: "message", role: "user", content: input }] : Array.isArray(input) ? input : [];
  for (const item of items) {
    if (item.type === "message") {
      const text = Array.isArray(item.content)
        ? item.content.map((c) => (c.type === "input_text" || c.type === "output_text" ? c.text : c.type === "input_image" ? "[image]" : "")).join("")
        : String(item.content || "");
      messages.push({ role: item.role || "user", content: text });
    } else if (item.type === "function_call") {
      messages.push({
        role: "assistant",
        content: null,
        tool_calls: [{ id: item.call_id || item.id, type: "function", function: { name: item.name, arguments: item.arguments || "{}" } }],
      });
    } else if (item.type === "function_call_output") {
      messages.push({ role: "tool", tool_call_id: item.call_id || item.id, content: item.output || "" });
    } else if (item.role && item.content) {
      const text = typeof item.content === "string" ? item.content : JSON.stringify(item.content);
      messages.push({ role: item.role, content: text });
    }
  }
  return messages;
}

function responsesToolsToChat(tools) {
  if (!Array.isArray(tools)) return undefined;
  return tools
    .filter((t) => t && (t.type === "function" || t.type === "custom_tool"))
    .map((t) => ({
      type: "function",
      function: { name: t.name, description: t.description || "", parameters: t.parameters || { type: "object", properties: {} } },
    }));
}

// Build a Responses API `output` item list from an assistant Chat Completions message.
function chatMessageToResponseItems(msg) {
  const items = [];
  const text = typeof msg.content === "string" ? msg.content : "";
  if (text) {
    items.push({
      type: "message",
      id: rid("msg"),
      status: "completed",
      role: "assistant",
      content: [{ type: "output_text", text, annotations: [] }],
    });
  }
  if (Array.isArray(msg.tool_calls)) {
    for (const tc of msg.tool_calls) {
      items.push({
        type: "function_call",
        id: tc.id || rid("fc"),
        call_id: tc.id || rid("fc"),
        status: "completed",
        name: tc.function?.name || "tool",
        arguments: tc.function?.arguments || "{}",
      });
    }
  }
  return items;
}

function buildResponsesResponse(model, outputItems, status = "completed") {
  return {
    id: rid("resp"),
    object: "response",
    created_at: Math.floor(Date.now() / 1000),
    model,
    status,
    output: outputItems,
    tool_choice: "auto",
    tools: [],
    parallel_tool_calls: true,
  };
}

// Translate a streamed Chat Completions chunk into Responses streaming events.
function* chatChunkToResponsesEvents(chunk, model, state) {
  const choice = chunk.choices && chunk.choices[0];
  if (!choice) return;
  const delta = choice.delta || {};

  if (!state.started) {
    state.started = true;
    state.respId = rid("resp");
    yield { type: "response.created", response: buildResponsesResponse(model, [], "in_progress") };
    yield { type: "response.in_progress", response: { id: state.respId } };
    // open an assistant message item
    state.msgItemId = rid("msg");
    yield {
      type: "response.output_item.added",
      output_index: 0,
      item: { type: "message", id: state.msgItemId, status: "in_progress", role: "assistant", content: [] },
    };
    yield { type: "response.content_part.added", output_index: 0, content_index: 0, part: { type: "output_text", text: "", annotations: [] } };
  }

  if (delta.content) {
    yield { type: "response.output_text.delta", output_index: 0, content_index: 0, delta: delta.content, item_id: state.msgItemId };
    state.text = (state.text || "") + delta.content;
  }

  if (Array.isArray(delta.tool_calls)) {
    for (const tc of delta.tool_calls) {
      const idx = tc.index ?? 0;
      if (!state.toolItems) state.toolItems = {};
      let t = state.toolItems[idx];
      if (!t) {
        t = state.toolItems[idx] = { id: tc.id || rid("fc"), name: "", args: "" };
        // close the text message item if it was open and empty
        yield { type: "response.content_part.done", output_index: 0, content_index: 0, part: { type: "output_text", text: state.text || "", annotations: [] } };
        yield { type: "response.output_item.done", output_index: 0, item: { type: "message", id: state.msgItemId, status: "completed", role: "assistant", content: [{ type: "output_text", text: state.text || "", annotations: [] }] } };
        yield {
          type: "response.output_item.added",
          output_index: 1,
          item: { type: "function_call", id: t.id, call_id: t.id, status: "in_progress", name: t.name, arguments: "" },
        };
      }
      if (tc.function?.name) {
        t.name += tc.function.name;
        yield { type: "response.function_call_arguments.delta", output_index: 1, name: t.name, call_id: t.id, delta: "" };
      }
      if (tc.function?.arguments) {
        t.args += tc.function.arguments;
        yield { type: "response.function_call_arguments.delta", output_index: 1, name: t.name, call_id: t.id, delta: tc.function.arguments };
      }
    }
  }

  if (choice.finish_reason) {
    state.finishReason = choice.finish_reason;
  }
}

function finalizeResponsesEvents(model, state, outputItems) {
  const events = [];
  if (state.toolItems) {
    for (const idx of Object.keys(state.toolItems)) {
      const t = state.toolItems[idx];
      events.push({ type: "response.output_item.done", output_index: 1, item: { type: "function_call", id: t.id, call_id: t.id, status: "completed", name: t.name, arguments: t.args } });
    }
  } else {
    events.push({ type: "response.content_part.done", output_index: 0, content_index: 0, part: { type: "output_text", text: state.text || "", annotations: [] } });
    events.push({ type: "response.output_item.done", output_index: 0, item: { type: "message", id: state.msgItemId, status: "completed", role: "assistant", content: [{ type: "output_text", text: state.text || "", annotations: [] }] } });
  }
  events.push({ type: "response.completed", response: buildResponsesResponse(model, outputItems, "completed") });
  return events;
}

// Circuit breaker state
let breaker = { failures: 0, openUntil: 0 };
const BREAKER_THRESHOLD = Number(process.env.SU_ADAPTER_BREAKER_THRESHOLD || 5);
const BREAKER_COOLDOWN_MS = Number(process.env.SU_ADAPTER_BREAKER_COOLDOWN || 15000);

function circuitOpen() {
  return breaker.openUntil > Date.now();
}

async function callCy(model, body) {
  if (circuitOpen()) {
    throw new Error("cy.adapter: circuit breaker open");
  }
  const url = CY_BASE + "/chat/completions";
  let attempt = 0;
  // retry loop with exponential backoff
  while (true) {
    attempt++;
    let res;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json", authorization: CY_KEY ? `Bearer ${CY_KEY}` : undefined },
        body: JSON.stringify(body),
      });
    } catch (e) {
      breaker.failures++;
      if (attempt < MAX_RETRIES) { await new Promise(r => setTimeout(r, RETRY_BASE * attempt)); continue; }
      throw e;
    }
    if (res.ok || attempt >= MAX_RETRIES) {
      if (res.ok) breaker.failures = 0; else breaker.failures++;
      if (breaker.failures >= BREAKER_THRESHOLD) breaker.openUntil = Date.now() + BREAKER_COOLDOWN_MS;
      return res;
    }
    breaker.failures++;
    await new Promise(r => setTimeout(r, RETRY_BASE * attempt));
  }
}

async function handleResponses(req, res, parsed) {
  const model = parsed.model || DEFAULT_MODEL || "stepfun/step-3.7-flash:free";
  const messages = inputToMessages(parsed.input, parsed.instructions);
  const tools = responsesToolsToChat(parsed.tools);
  const cyBody = {
    model,
    messages,
    stream: !!parsed.stream,
    temperature: parsed.temperature,
    top_p: parsed.top_p,
  };
  if (tools) cyBody.tools = tools;
  if (parsed.parallel_tool_calls === false) cyBody.parallel_tool_calls = false;
  if (parsed.tool_choice) cyBody.tool_choice = parsed.tool_choice;
  if (parsed.user) cyBody.user = parsed.user;

  if (!parsed.stream) {
    const r = await callCy(model, cyBody);
    const data = await r.json();
    const msg = data.choices?.[0]?.message || { role: "assistant", content: "" };
    const output = chatMessageToResponseItems(msg);
    return sendJson(res, r.status === 200 ? 200 : r.status || 200, buildResponsesResponse(model, output));
  }

  // streaming
  const r = await callCy(model, cyBody);
  if (!r.ok) {
    const err = await r.text();
    return sendJson(res, r.status || 502, { error: { message: "CY gateway error: " + err } });
  }
  res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
  const state = {};
  const send = (obj) => res.write("data: " + JSON.stringify(obj) + "\n\n");

  try {
    const reader = r.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop();
      for (const line of lines) {
        const t = line.trim();
        if (!t.startsWith("data:")) continue;
        const payload = t.slice(5).trim();
        if (payload === "[DONE]") continue;
        let chunk;
        try {
          chunk = JSON.parse(payload);
        } catch {
          continue;
        }
        for (const ev of chatChunkToResponsesEvents(chunk, model, state)) send(ev);
      }
    }
    const outputItems = [];
    if (state.toolItems) {
      for (const idx of Object.keys(state.toolItems)) {
        const t = state.toolItems[idx];
        outputItems.push({ type: "function_call", id: t.id, call_id: t.id, status: "completed", name: t.name, arguments: t.args });
      }
    } else {
      outputItems.push({ type: "message", id: state.msgItemId, status: "completed", role: "assistant", content: [{ type: "output_text", text: state.text || "", annotations: [] }] });
    }
    for (const ev of finalizeResponsesEvents(model, state, outputItems)) send(ev);
    res.write("data: [DONE]\n\n");
    res.end();
  } catch (e) {
    res.write("data: " + JSON.stringify({ type: "response.failed", response: { id: state.respId || rid("resp") } }) + "\n\n");
    res.end();
  }
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url === "/health") return sendJson(res, 200, { ok: true, cy: CY_BASE, breaker: { failures: breaker.failures, openUntil: breaker.openUntil, threshold: BREAKER_THRESHOLD } });
    if (req.method === "GET" && req.url.startsWith("/v1/models")) {
      return sendJson(res, 200, { object: "list", data: [{ id: DEFAULT_MODEL || "model", object: "model" }] });
    }
    if (req.method === "POST" && req.url.startsWith("/v1/responses")) {
      const raw = await readBody(req);
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        return sendJson(res, 400, { error: { message: "invalid json" } });
      }
      return await handleResponses(req, res, parsed);
    }
    return sendJson(res, 404, { error: { message: "not found: " + req.method + " " + req.url } });
  } catch (e) {
    return sendJson(res, 500, { error: { message: String(e && e.message || e) } });
  }
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

server.listen(PORT, () => {
  console.log(`[su-adapter] Responses API -> CY gateway at ${CY_BASE} on port ${PORT}`);
});
