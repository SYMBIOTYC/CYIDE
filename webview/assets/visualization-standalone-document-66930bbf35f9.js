import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{l as t,n}from"./visualization-sandbox-config-6b6f7f81aeb3.js";import{a as r,t as i}from"./visualization-theme-5e6eb0bf8790.js";import{n as a,t as o}from"./visualization-sandbox-html-9a36b990a933.js";var s;function c(){return(c=e((()=>{s=`(() => {
  const root = document.documentElement;
  const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
  const apply = Reflect.apply;
  const isArray = Array.isArray;
  const hasOwn = Object.hasOwn;
  const parentWindow = globalThis.parent;
  const stringify = JSON.stringify;
  const parse = JSON.parse;
  const encode = TextEncoder.prototype.encode.bind(new TextEncoder());
  const initialStateElement = document.getElementById(
    "codex-visualization-widget-state",
  );
  const initialGlobals = parse(initialStateElement?.textContent ?? "{}");
  initialStateElement?.remove();
  /** @type {Record<string, unknown> | null} */
  let state = initialGlobals.widgetState ?? null;
  const statePersistence = initialGlobals.statePersistence ?? "none";
  let nextStateRequestId = 0;
  /** @type {Map<number, { resolve: () => void; reject: (error: Error) => void; timeout: ReturnType<typeof globalThis.setTimeout>; serializedState: string }>} */
  const pendingStateWrites = new Map();
  const persistenceError = () =>
    Object.assign(
      new Error("The host could not persist the widget state update"),
      {
        code: -32000,
        data: { code: "widget_state_persistence_failed", retryable: false },
      },
    );
  /**
   * @param {object} prototype
   * @param {string} property
   */
  const getPrototypeGetter = (prototype, property) => {
    // oxlint-disable-next-line typescript/unbound-method -- invoked through captured Reflect.apply
    const getter = Object.getOwnPropertyDescriptor(prototype, property)?.get;
    if (getter == null) {
      throw new Error(\`Missing \${property} getter\`);
    }
    return getter;
  };
  const getMessageData = getPrototypeGetter(MessageEvent.prototype, "data");
  const getMessagePorts = getPrototypeGetter(MessageEvent.prototype, "ports");
  const getMessageSource = getPrototypeGetter(MessageEvent.prototype, "source");
  // oxlint-disable-next-line typescript/unbound-method -- captured before the untrusted fragment runs
  const addHostMessageListener = MessagePort.prototype.addEventListener;
  // oxlint-disable-next-line typescript/unbound-method -- captured before the untrusted fragment runs
  const postHostMessage = MessagePort.prototype.postMessage;
  // oxlint-disable-next-line typescript/unbound-method -- captured before the untrusted fragment runs
  const startHostPort = MessagePort.prototype.start;
  // oxlint-disable-next-line typescript/unbound-method -- captured before the untrusted fragment runs
  const stopMessagePropagation = Event.prototype.stopImmediatePropagation;
  /** @type {MessagePort | null} */
  let hostPort = null;
  const postToHost = (type, payload) => {
    if (hostPort != null) {
      apply(postHostMessage, hostPort, [{ type, ...payload }]);
    }
  };
  const openExternal = ({ href }) => {
    if (globalThis.navigator.userActivation?.isActive === true) {
      postToHost("open-external", { href });
    }
  };
  const sendFollowUpMessage = ({ context, prompt, title }) => {
    if (globalThis.navigator.userActivation?.isActive === true) {
      postToHost("follow-up", { context, prompt, title });
    }
    return Promise.resolve();
  };
  /**
   * @param {Record<string, unknown> | ((previous: Record<string, unknown> | null) => Record<string, unknown>)} next
   * @returns {Promise<void>}
   */
  const setWidgetState = async (next) => {
    const nextState = typeof next === "function" ? next(state) : next;
    if (
      nextState == null ||
      typeof nextState !== "object" ||
      isArray(nextState)
    ) {
      throw new TypeError("Widget state must be a JSON object");
    }
    const inputState = stringify(
      nextState,
      (_key, /** @type {unknown} */ value) => {
        if (
          typeof value === "undefined" ||
          typeof value === "function" ||
          typeof value === "symbol" ||
          (typeof value === "number" && !Number.isFinite(value))
        ) {
          throw new TypeError("Widget state must be a JSON object");
        }
        return value;
      },
    );
    const parsedState = parse(inputState);
    if (
      parsedState == null ||
      typeof parsedState !== "object" ||
      isArray(parsedState)
    ) {
      throw new TypeError("Widget state must be a JSON object");
    }
    const storedState = {
      modelContent: null,
      privateContent: null,
      ...parsedState,
    };
    const serializedState = stringify(storedState);
    if (encode(serializedState).length > 16 * 1024) {
      throw new TypeError(
        "Widget state must be a JSON object of at most 16 KiB",
      );
    }
    if (
      hasOwn(storedState, "imageIds") &&
      (!isArray(storedState.imageIds) ||
        storedState.imageIds.some(
          (/** @type {unknown} */ id) => typeof id !== "string",
        ))
    ) {
      throw new TypeError("Widget state imageIds must be an array of strings");
    }
    if (storedState.imageIds?.length > 0) {
      throw Object.assign(
        new TypeError("Visualization state does not support image attachments"),
        { code: -32602, data: { code: "images_unsupported" } },
      );
    }
    state = storedState;
    globalThis.openai.widgetState = state;
    globalThis.dispatchEvent(
      new CustomEvent("openai:set_globals", {
        detail: { globals: { widgetState: state } },
      }),
    );
    if (statePersistence === "none") {
      throw persistenceError();
    }
    const id = ++nextStateRequestId;
    return new Promise((resolve, reject) => {
      const timeout = globalThis.setTimeout(() => {
        pendingStateWrites.delete(id);
        reject(persistenceError());
      }, 30_000);
      pendingStateWrites.set(id, { resolve, reject, timeout, serializedState });
      postToHost("widget-state-write", { id, state: serializedState });
    });
  };
  const syncTheme = () => {
    const theme = mediaQuery.matches ? "dark" : "light";
    root.dataset.theme = theme;
    globalThis.openai = {
      ...globalThis.openai,
      openExternal,
      sendFollowUpMessage,
      setWidgetState,
      theme,
      visualizationStyleVariables: {},
      visualizationTheme: theme,
      widgetState: state,
      statePersistence,
      stateModelContext: "none",
    };
    globalThis.dispatchEvent(
      new CustomEvent("openai:set_globals", {
        detail: { globals: globalThis.openai },
      }),
    );
  };
  const sendHeight = () => {
    postToHost("height", {
      height: Math.ceil(
        Math.max(
          document.body.scrollHeight,
          document.body.getBoundingClientRect().height,
        ),
      ),
    });
  };

  globalThis.addEventListener(
    "message",
    (event) => {
      const data = apply(getMessageData, event, []);
      const ports = apply(getMessagePorts, event, []);
      const source = apply(getMessageSource, event, []);
      if (
        hostPort != null ||
        source !== parentWindow ||
        typeof data !== "object" ||
        data?.type !== "codex-visualization-initialize" ||
        !isArray(ports) ||
        ports.length !== 1
      ) {
        return;
      }
      apply(stopMessagePropagation, event, []);
      const nextHostPort = ports[0];
      try {
        apply(addHostMessageListener, nextHostPort, [
          "message",
          (event) => {
            const data = apply(getMessageData, event, []);
            if (typeof data === "object" && data?.type === "measure") {
              sendHeight();
            } else if (
              typeof data === "object" &&
              data?.type === "widget-state-result"
            ) {
              /** @type {unknown} */
              const id = data.id;
              if (typeof id !== "number") {
                return;
              }
              const pending = pendingStateWrites.get(id);
              if (pending != null) {
                pendingStateWrites.delete(id);
                globalThis.clearTimeout(pending.timeout);
                if (data.ok === true) {
                  pending.resolve();
                } else {
                  pending.reject(persistenceError());
                }
              }
            }
          },
        ]);
        apply(startHostPort, nextHostPort, []);
      } catch {
        return;
      }
      hostPort = nextHostPort;
      for (const [id, { serializedState }] of pendingStateWrites) {
        postToHost("widget-state-write", { id, state: serializedState });
      }
      sendHeight();
    },
    { capture: true },
  );
  document.currentScript?.remove();
  mediaQuery.addEventListener("change", syncTheme);
  globalThis.addEventListener("click", (event) => {
    if (event.defaultPrevented) {
      return;
    }
    let element = null;
    if (event.target instanceof globalThis.Element) {
      element = event.target;
    } else if (event.target instanceof globalThis.Node) {
      element = event.target.parentElement;
    }
    const link = element?.closest("a[href]");
    const href = link?.getAttribute("href");
    if (href == null) {
      return;
    }
    if (href.startsWith("#")) {
      let id;
      try {
        id = decodeURIComponent(href.slice(1));
      } catch {
        return;
      }
      const target = id.length === 0 ? root : document.getElementById(id);
      if (
        target == null ||
        globalThis.navigator.userActivation?.isActive !== true
      ) {
        return;
      }
      event.preventDefault();
      postToHost("scroll-to", {
        top: target.getBoundingClientRect().top + globalThis.scrollY,
      });
      return;
    }
    event.preventDefault();
    openExternal({ href });
  });
  new ResizeObserver(sendHeight).observe(document.body);
  syncTheme();
})();
`})))()}var l;function u(){return(u=e((()=>{l=`(() => {
  const frame = document.getElementById("codex-visualization");
  if (!(frame instanceof HTMLIFrameElement)) {
    return;
  }
  let viewportHeight = globalThis.innerHeight;
  const storageKey = \`codex:visualization-widget-state-v2:\${JSON.stringify([
    globalThis.location.pathname,
    globalThis.location.search,
  ])}\`;
  const parseState = (serializedState) => {
    if (
      typeof serializedState !== "string" ||
      new TextEncoder().encode(serializedState).length > 16 * 1024
    ) {
      throw new TypeError(
        "Widget state must be a JSON object of at most 16 KiB",
      );
    }
    /** @type {unknown} */
    const state = JSON.parse(serializedState);
    if (
      state == null ||
      typeof state !== "object" ||
      Array.isArray(state) ||
      ("imageIds" in state &&
        (!Array.isArray(state.imageIds) || state.imageIds.length > 0))
    ) {
      throw new TypeError("Widget state must be a JSON object");
    }
    const storedState = { modelContent: null, privateContent: null, ...state };
    const canonicalState = JSON.stringify(
      storedState,
      (_key, /** @type {unknown} */ value) => {
        if (typeof value === "number" && !Number.isFinite(value)) {
          throw new TypeError("Widget state must contain finite numbers");
        }
        return value;
      },
    );
    if (new TextEncoder().encode(canonicalState).length > 16 * 1024) {
      throw new TypeError(
        "Widget state must be a JSON object of at most 16 KiB",
      );
    }
    return storedState;
  };
  let storage = null;
  let state = null;
  try {
    const localStorage = globalThis.localStorage;
    const probeKey = \`\${storageKey}:probe\`;
    localStorage.setItem(probeKey, "1");
    localStorage.removeItem(probeKey);
    storage = localStorage;
    const savedState = storage.getItem(storageKey);
    if (savedState != null) {
      try {
        state = parseState(savedState);
      } catch {
        // Invalid saved state does not disable future writes.
      }
    }
  } catch {
    storage = null;
  }
  const initialGlobals = {
    widgetState: state,
    statePersistence: storage == null ? "none" : "local",
  };

  const channel = new MessageChannel();
  channel.port1.addEventListener("message", (event) => {
    const data = event.data;
    if (typeof data !== "object" || data == null) {
      return;
    }
    if (data.type === "widget-state-write") {
      if (!Number.isSafeInteger(data.id) || data.id <= 0) {
        return;
      }
      let ok = false;
      try {
        if (storage != null) {
          const state = parseState(data.state);
          storage.setItem(storageKey, JSON.stringify(state));
          ok = true;
        }
      } catch {
        // Storage denial, quota limits, and invalid state return a failed receipt.
      }
      channel.port1.postMessage({
        type: "widget-state-result",
        id: data.id,
        ok,
      });
      return;
    }
    if (data.type === "height") {
      const height = data.height;
      if (
        typeof height === "number" &&
        Number.isFinite(height) &&
        height >= 0 &&
        height <= 10_000
      ) {
        frame.style.height = Math.ceil(height) + "px";
      }
      return;
    }
    if (data.type === "scroll-to") {
      const top = data.top;
      if (
        typeof top === "number" &&
        Number.isFinite(top) &&
        top >= 0 &&
        globalThis.navigator.userActivation?.isActive === true
      ) {
        globalThis.scrollTo({
          top: Math.ceil(
            globalThis.scrollY + frame.getBoundingClientRect().top + top,
          ),
        });
      }
      return;
    }
    if (data.type === "open-external") {
      const rawHref = data.href;
      if (typeof rawHref !== "string") {
        return;
      }
      let href;
      try {
        const url = new URL(rawHref, document.baseURI);
        if (url.protocol !== "https:") {
          return;
        }
        href = url.href;
      } catch {
        return;
      }
      if (globalThis.navigator.userActivation?.isActive === true) {
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.rel = "noopener noreferrer";
        anchor.target = "_blank";
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
      }
      return;
    }
    if (data.type === "follow-up") {
      const prompt = data.prompt;
      if (
        typeof prompt !== "string" ||
        globalThis.navigator.userActivation?.isActive !== true
      ) {
        return;
      }
      const title = data.title;
      globalThis.prompt(typeof title === "string" ? title : prompt, prompt);
    }
  });
  channel.port1.start();
  const srcdoc = frame.dataset.srcdoc;
  if (srcdoc == null) {
    return;
  }
  globalThis.addEventListener("resize", () => {
    const height = Number.parseFloat(frame.style.height);
    if (!Number.isFinite(height) || height <= viewportHeight) {
      frame.style.removeProperty("height");
    }
    viewportHeight = globalThis.innerHeight;
    channel.port1.postMessage({ type: "measure" });
  });
  frame.addEventListener(
    "load",
    () => {
      frame.contentWindow?.postMessage(
        { type: "codex-visualization-initialize" },
        "*",
        [channel.port2],
      );
    },
    { once: true },
  );
  // Match the trusted bootstrap element, not the same text in an authored title.
  frame.srcdoc = srcdoc.replace(
    '<script type="application/json" id="codex-visualization-widget-state">__CODEX_VISUALIZATION_WIDGET_STATE__<\/script>',
    () =>
      '<script type="application/json" id="codex-visualization-widget-state">' +
      JSON.stringify(initialGlobals).replaceAll("<", "\\\\u003c") +
      "<\/script>",
  );
  delete frame.dataset.srcdoc;
})();
`})))()}function d(e,{locale:t,treatment:n=!1,styles:r=`:root {
  color-scheme: light dark;
  background-color: var(
    --background,
    var(--color-background-primary, light-dark(rgb(255 255 255), rgb(24 24 24)))
  ) !important;

  /* Agent-facing contract; keep in sync with SKILL.md. */
  --background: var(
    --color-background-primary,
    light-dark(rgb(255 255 255), rgb(24 24 24))
  );
  --foreground: var(
    --color-text-primary,
    light-dark(rgb(26 28 31), rgb(255 255 255))
  );
  --card: color-mix(in oklab, var(--foreground) 5%, var(--background));
  --card-foreground: var(
    --color-text-primary,
    light-dark(rgb(26 28 31), rgb(255 255 255))
  );
  --popover: var(
    --color-background-secondary,
    light-dark(rgb(255 255 255), rgb(45 45 45))
  );
  --popover-foreground: var(
    --color-text-primary,
    light-dark(rgb(26 28 31), rgb(255 255 255))
  );
  --primary: var(
    --color-text-info,
    light-dark(rgb(51 156 255), rgb(131 195 255))
  );
  --primary-foreground: var(
    --color-text-inverse,
    light-dark(rgb(255 255 255), rgb(13 13 13))
  );
  --secondary: var(
    --color-background-secondary,
    light-dark(rgb(255 255 255 / 96%), rgb(54 54 54 / 96%))
  );
  --secondary-foreground: var(
    --color-text-primary,
    light-dark(rgb(26 28 31), rgb(255 255 255))
  );
  --muted: color-mix(in srgb, var(--foreground) 10%, transparent);
  --muted-foreground: var(
    --color-text-secondary,
    light-dark(rgb(26 28 31 / 49.4%), rgb(255 255 255 / 49.8%))
  );
  --accent: var(
    --color-background-info,
    light-dark(rgb(229 242 255), rgb(13 39 63))
  );
  --accent-foreground: var(
    --color-text-info,
    light-dark(rgb(51 156 255), rgb(131 195 255))
  );
  --destructive: var(
    --color-text-warning,
    light-dark(rgb(226 85 7), rgb(255 133 73))
  );
  --border: var(
    --color-border-secondary,
    light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))
  );
  --input: var(
    --color-border-primary,
    light-dark(
      rgb(26 28 31 / 11.8%),
      color-mix(in oklab, rgb(0 0 0) 10%, transparent)
    )
  );
  --ring: var(
    --color-ring-primary,
    light-dark(rgb(51 156 255), rgb(131 195 255 / 76%))
  );
  --font-size-base: var(--font-text-md-size, 14px);
  --blue: light-dark(rgb(51 156 255), rgb(51 156 255));
  --orange: light-dark(rgb(226 85 7), rgb(251 106 34));
  --green: light-dark(rgb(0 162 64), rgb(64 201 119));
  --red: light-dark(rgb(224 46 42), rgb(255 103 100));
  --purple: light-dark(rgb(146 79 247), rgb(173 123 249));
  --yellow: light-dark(rgb(255 195 0), rgb(255 210 64));
  --viz-series-1: var(--primary);
  --viz-series-2: light-dark(rgb(243 136 59), rgb(245 154 86));
  --viz-series-3: light-dark(rgb(93 201 119), rgb(116 213 139));
  --viz-series-4: light-dark(rgb(235 119 177), rgb(240 143 192));
  --viz-series-5: light-dark(rgb(155 121 236), rgb(170 145 239));
  --viz-series-6: light-dark(rgb(58 185 177), rgb(90 203 194));

  /* Internal implementation variables; not part of the agent contract. */
  --font-sans: -apple-system, system-ui, "Segoe UI", sans-serif;
  --font-mono:
    ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono",
    monospace;
  --font-size-normal: max(11px, var(--font-size-base));
  --font-size-tooltip: calc(var(--font-size-base) - 1px);
  --font-size-small: max(11px, calc(var(--font-size-base) - 2px));
  --font-size-h1: calc(var(--font-size-normal) * 1.7142857143);
  --font-size-h2: calc(var(--font-size-normal) * 1.4285714286);
  --font-size-h3: calc(var(--font-size-normal) * 1.2857142857);
  --font-weight-normal: 430;
  --font-weight-medium: 500;
  --icon-size: 16px;
  --line-height-normal: calc(var(--font-size-normal) * 1.5);
  --line-height-tooltip: calc(var(--font-size-tooltip) * 1.4285714286);
  --line-height-small: calc(var(--font-size-small) + 4px);
  --corner-shape: round;
  --radius: var(--border-radius-lg, 10px);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-2xl: calc(var(--radius) * 1.6);
  --radius-full: 9999px;
  --shadow-sm: 0 1px 2px -1px rgb(0 0 0 / 8%);
  --checkmark-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17'%3E%3Cpath d='M12.8961 3.64101C13.1297 3.41418 13.4984 3.37523 13.7779 3.56581C14.0571 3.75635 14.1554 4.11331 14.0299 4.41347L13.9615 4.53847L7.71151 13.7045C7.59411 13.8767 7.4063 13.9877 7.19881 14.0072C6.99136 14.0267 6.78564 13.9533 6.63826 13.806L2.88826 10.056L2.79842 9.9457C2.6192 9.67407 2.64927 9.30496 2.88826 9.06581C3.12738 8.82669 3.49647 8.79676 3.76815 8.97597L3.8785 9.06581L7.03084 12.2182L12.8053 3.74941L12.8961 3.64101Z'/%3E%3C/svg%3E");

  /* Legacy aliases; not part of the current agent contract. */
  --viz-bg: transparent;
  --viz-panel: var(--card);
  --viz-border: var(--border);
  --viz-text: var(--foreground);
  --viz-muted: var(--muted-foreground);
  --viz-accent: var(--primary);
  --viz-accent-text: var(--primary-foreground);
  --viz-accent-bg: var(--accent);
  --viz-font-size: var(--font-size-base);
  --viz-warning: var(--destructive);
}

:root[data-theme="light"] {
  color-scheme: light;
}

:root[data-theme="dark"] {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html > body {
  /* Preserve MCP aliases for older inline renderers without creating :root cycles. */
  --color-background-primary: var(
    --background,
    light-dark(rgb(255 255 255), rgb(24 24 24))
  );
  --color-text-primary: var(
    --foreground,
    light-dark(rgb(26 28 31), rgb(255 255 255))
  );
  --color-border-secondary: var(
    --border,
    light-dark(rgb(26 28 31 / 8%), rgb(255 255 255 / 8.2%))
  );

  margin: 0;
  padding: var(--visualize-paint-gutter, 0px);
  color: var(--foreground);
  background: transparent !important;
  font-family: var(--font-sans) !important;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
}

.cursor-interaction {
  cursor: var(--cursor-interaction, pointer);
}

a {
  color: color-mix(in srgb, var(--viz-accent) 80%, var(--viz-text) 20%);
  cursor: var(--cursor-interaction, pointer);
  font-weight: var(--font-weight-medium, 500);
  text-decoration: none;
  text-underline-offset: 2px;
}

a:is(:hover, :focus-visible) {
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-decoration-thickness: 0.5px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-block: 0;
}

h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-medium);
  line-height: 1.25;
}

h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  line-height: 1.25;
}

h3,
h4,
h5,
h6 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  line-height: 1.3;
}

b,
strong,
th {
  font-weight: var(--font-weight-medium);
}

code:not(pre code) {
  display: inline;
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  corner-shape: var(--corner-shape);
  background: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.92em;
  overflow-wrap: anywhere;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  word-break: break-word;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
}

.table {
  width: 100%;
  border-collapse: collapse;
  color: var(--foreground);
  font: inherit;
  text-align: start;
}

.table :is(th, td) {
  padding-block: 10px;
  padding-inline: 0 24px;
  overflow-wrap: anywhere;
  border-bottom: 1px solid var(--border);
  text-align: start;
  vertical-align: top;
}

.table-responsive > .table :is(th, td) {
  overflow-wrap: break-word;
}

.table :is(th, td):last-child {
  padding-inline-end: 0;
}

.table :is(caption, thead th) {
  font-weight: 600;
}

.table thead th {
  padding-block: 8px;
  border-bottom-color: color-mix(in srgb, var(--foreground) 16%, transparent);
}

.table tbody tr:last-child :is(th, td) {
  border-bottom: 0;
}

.table.table-sm :is(th, td) {
  padding-block: 6px;
}

.table.table-sm :is(th, td):not(:last-child) {
  padding-inline-end: 16px;
}

.table :is(.text-end, [align="right"]) {
  text-align: end;
  font-variant-numeric: tabular-nums;
}

.table :is(.text-center, [align="center"]) {
  text-align: center;
}

.table .text-nowrap {
  white-space: nowrap;
}

#widget {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 0;
  background: transparent !important;
}

.card {
  min-width: 0;
  padding: 12px;
  overflow: hidden;
  overflow-wrap: break-word;
  border-radius: var(--radius-2xl);
  corner-shape: var(--corner-shape);
  color: var(--card-foreground);
  background: var(--card);
}

.widget {
  min-width: 0;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-lg);
  corner-shape: var(--corner-shape);
  box-shadow: 0 0 0 0.5px var(--border-strong, var(--border));
  color: var(--foreground);
  background: var(--background);
}

#widget > :not(.card, .widget, .progress) {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.tooltip {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: max-content;
  max-width: min(
    20rem,
    var(--tooltip-available-width, calc(100vw - 10px)),
    calc(100vw - 10px)
  );
  max-height: min(
    var(--tooltip-available-height, calc(100vh - 10px)),
    calc(100vh - 10px)
  );
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  corner-shape: var(--corner-shape);
  color: var(--popover-foreground);
  background: var(--popover);
  box-shadow: none;
  font-size: var(--font-size-tooltip);
  line-height: var(--line-height-tooltip);
  overflow-wrap: break-word;
  white-space: normal;
  pointer-events: none;
  user-select: none;
}

.viz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(180px, 24%), 1fr));
  gap: 10px;
}

.viz-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.viz-stat-value {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  line-height: 1.25;
}

.viz-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

hr {
  width: 100%;
  height: 1px;
  margin-block: 6px;
  border: 0;
  background: var(--border);
}

.nav {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 4px;
}

.progress {
  display: flex;
  height: 8px;
  margin-block: calc((var(--line-height-normal, 1.5em) - 8px) / 2);
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--muted);
}

.progress-bar:only-child {
  border-radius: var(--radius-full);
}

.progress-bar {
  height: 100%;
  flex-shrink: 0;
  border: 0;
  background: var(--viz-series-1);
}

.viz-badge {
  padding: 3px 8px;
  border-radius: var(--radius-full);
  color: var(--accent-foreground);
  background: var(--accent);
  font-weight: var(--font-weight-medium);
}

small,
.text-small,
.viz-badge {
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.text-muted {
  color: var(--muted-foreground);
}

.tabular-nums {
  font-variant-numeric: tabular-nums;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.viz-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.viz-controls > .form-label {
  display: grid;
  min-width: min(100%, 260px);
  flex: 1 1 280px;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 2px 12px;
  margin-bottom: 0;
}

.viz-controls > .form-label > :is(.form-control, .form-range, .form-select) {
  grid-column: 1 / -1;
}

.btn,
.nav-link,
.form-check-input,
.form-control,
.form-range,
.form-select {
  font: inherit;
}

.btn,
.nav-link {
  appearance: button;
  display: inline-flex;
  inline-size: fit-content;
  max-inline-size: 100%;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0;
  padding: 0 8px;
  -webkit-app-region: no-drag;
  border: 1px solid var(--input);
  border-radius: var(--radius-lg);
  corner-shape: var(--corner-shape);
  color: var(--secondary-foreground);
  background: var(--secondary);
  cursor: var(--cursor-interaction, pointer);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
}

.btn:is(.btn-block, .viz-tile) {
  inline-size: 100%;
}

.btn.viz-tile {
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

a.btn {
  cursor: var(--cursor-interaction, pointer);
  text-decoration: none;
}

.btn:not(:disabled):hover,
.nav-link:not(:disabled):not([aria-disabled="true"]):hover {
  background: color-mix(in srgb, var(--foreground) 6%, var(--secondary));
}

.btn-primary {
  border-color: transparent;
  color: var(--primary-foreground);
  background: var(--foreground);
  background-clip: padding-box;
}

.btn-primary .text-muted {
  color: color-mix(in srgb, var(--primary-foreground) 50%, transparent);
}

.btn-primary:not(:disabled):hover {
  background: color-mix(in srgb, var(--foreground) 80%, transparent);
  background-clip: padding-box;
}

.btn-ghost {
  border-color: transparent;
  color: var(--muted-foreground);
  background: transparent;
}

.btn-ghost:not(:disabled):hover {
  color: var(--foreground);
  background: color-mix(in srgb, var(--foreground) 6%, var(--secondary));
}

.nav-pills .nav-link {
  min-width: 0;
  border-color: transparent;
  color: var(--muted-foreground);
  background: transparent;
}

.nav-justified .nav-link {
  flex: 1 1 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

.nav-pills .nav-link.active {
  color: var(--foreground);
  background: var(--muted);
}

/* Shared preview chrome; product styles stay inside each variant. */
.viz-dotted-background {
  background-image: radial-gradient(
    circle,
    color-mix(in srgb, var(--foreground) 14%, transparent) 0.8px,
    transparent 0.8px
  );
  background-position: center;
  background-size: 16px 16px;
}

.viz-carousel {
  position: relative;
  min-width: 0;
}

.viz-carousel:has(> .viz-carousel-controls) {
  min-height: calc(60px + var(--viz-carousel-picker-height, 0px));
  padding-bottom: 60px;
}

.viz-carousel > [data-variant][hidden] {
  display: none !important;
}

.viz-carousel > [data-variant] {
  isolation: isolate;
}

.viz-carousel-controls {
  --viz-carousel-hover: light-dark(
    color-mix(in srgb, var(--foreground) 5.4%, transparent),
    color-mix(in srgb, var(--foreground) 7.8%, transparent)
  );
  position: absolute;
  z-index: 2;
  bottom: 8px;
  left: 50%;
  display: flex;
  width: max-content;
  /* Leave room for the host's design-controls launcher at the trailing edge. */
  max-width: calc(100% - 96px);
  align-items: center;
  gap: 0;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 16px;
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-sans);
  /* Match the settings dropdown chrome independently of the content font size. */
  font-size: 13px;
  font-weight: var(--font-weight-normal);
  line-height: 18px;
  transform: translateX(-50%);
  user-select: none;
}

/* Keep authored mockup button styles out of the shared carousel chrome. */
.viz-carousel-controls button,
.viz-carousel-picker > summary {
  display: flex !important;
  height: auto !important;
  min-height: 30px;
  align-items: center !important;
  justify-content: center !important;
  gap: 4px;
  padding: 0 6px !important;
  -webkit-app-region: no-drag;
  border: 0 !important;
  border-radius: 14px !important;
  color: inherit !important;
  background: transparent !important;
  font: inherit !important;
  -webkit-tap-highlight-color: transparent;
}

.viz-carousel-controls > button,
.viz-carousel-picker > summary {
  position: relative;
  isolation: isolate;
}

.viz-carousel-controls > button {
  --icon-size: 16px;
  width: 30px !important;
  padding: 0 !important;
}

.viz-carousel-picker > summary {
  padding-inline: 12px !important;
}

.viz-carousel-controls .viz-carousel-caret {
  width: 14px;
  height: 14px;
  flex: none;
  margin: 0;
  color: inherit;
  transform: rotate(180deg);
}

.viz-carousel-controls > button > svg,
.viz-carousel-controls .viz-carousel-caret,
.viz-carousel-count {
  opacity: 0.5;
}

.viz-carousel-controls > button::before,
.viz-carousel-picker > summary::before {
  position: absolute;
  z-index: -1;
  inset: 3px;
  border-radius: 12px;
  content: "";
  pointer-events: none;
}

.viz-carousel-controls > button:hover::before,
.viz-carousel-picker > summary:hover::before {
  background: var(--viz-carousel-hover);
}

.viz-carousel-controls > button,
.viz-carousel-controls [data-lucide],
.viz-carousel-controls .lucide {
  flex-shrink: 0;
}

.viz-carousel-picker {
  min-width: 0;
}

.viz-carousel-picker > summary {
  min-width: 0;
  list-style: none;
}

.viz-carousel-picker > summary::-webkit-details-marker {
  display: none;
}

.viz-carousel-count {
  flex-shrink: 0;
  white-space: nowrap;
}

.viz-carousel-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.viz-carousel-options {
  position: absolute;
  right: 0;
  bottom: calc(100% + 4px);
  left: 0;
  display: flex;
  max-height: 240px;
  flex-direction: column;
  gap: 2px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--background);
  box-shadow: 0 4px 12px light-dark(rgb(0 0 0 / 6%), rgb(0 0 0 / 25%));
}

.viz-carousel-options > button {
  border-radius: max(0px, calc(var(--radius-lg) - 5px)) !important;
  width: 100% !important;
  min-height: 28px;
  justify-content: flex-start !important;
  padding: 4px 8px !important;
  font-size: var(--font-size-small) !important;
  text-align: start;
  white-space: normal;
  overflow-wrap: anywhere;
}

.viz-carousel-options > [aria-current="true"],
.viz-carousel-options > button:hover {
  background: var(--viz-carousel-hover) !important;
}

.btn:disabled,
.nav-link:disabled,
.nav-link[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.4;
}

[data-lucide] {
  stroke-width: 1.6;
}

.form-label {
  display: block;
  margin-bottom: 6px;
  color: var(--foreground);
}

.form-control {
  display: block;
  width: 100%;
  min-height: 28px;
  padding: 0 8px;
  outline: none;
  border: 1px solid var(--input);
  border-radius: var(--radius-lg);
  corner-shape: var(--corner-shape);
  color: var(--foreground);
  background: var(--secondary);
}

.form-control::placeholder {
  color: var(--muted-foreground);
}

.form-control[type="file"] {
  padding: 0;
  overflow: hidden;
  cursor: var(--cursor-interaction, pointer);
}

.form-control[type="file"]::file-selector-button {
  min-height: 26px;
  margin-right: 8px;
  padding: 0 8px;
  border: 0;
  border-right: 1px solid var(--input);
  color: var(--secondary-foreground);
  background: var(--secondary);
  cursor: inherit;
  font: inherit;
}

.form-control[type="file"]:not(:disabled):hover::file-selector-button {
  background: color-mix(in srgb, var(--foreground) 6%, var(--secondary));
}

.form-control-color[type="color"] {
  width: 40px;
  height: 28px;
  padding: 3px;
  cursor: var(--cursor-interaction, pointer);
}

.form-control-color[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

.form-control-color[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--radius-lg) - 4px);
  corner-shape: var(--corner-shape);
}

textarea.form-control {
  height: auto;
  min-height: 72px;
  padding: 8px 10px;
  resize: vertical;
}

.form-control:focus-visible {
  border-color: var(--ring);
  box-shadow: inset 0 0 0 1px var(--ring);
}

.form-control:disabled,
.form-select:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.form-select {
  appearance: none;
  display: block;
  width: 100%;
  min-height: 28px;
  margin: 0;
  padding: 0 32px 0 8px;
  outline: none;
  border: 1px solid var(--input);
  border-radius: var(--radius-lg);
  corner-shape: var(--corner-shape);
  color: var(--foreground);
  background-color: var(--secondary);
  background-image:
    linear-gradient(45deg, transparent 50%, var(--muted-foreground) 50%),
    linear-gradient(135deg, var(--muted-foreground) 50%, transparent 50%);
  background-position:
    calc(100% - 14px) 50%,
    calc(100% - 10px) 50%;
  background-repeat: no-repeat;
  background-size: 4px 4px;
  cursor: var(--cursor-interaction, default);
}

.form-select:not(:disabled):hover {
  background-color: color-mix(in srgb, var(--foreground) 6%, var(--secondary));
}

.form-select:focus-visible {
  border-color: var(--ring);
  box-shadow: inset 0 0 0 1px var(--ring);
}

.form-check {
  display: flex;
  min-height: 20px;
  align-items: center;
  gap: 6px;
}

.form-check-input {
  appearance: none;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
  margin: 0;
  border: 1px solid var(--input);
  color: var(--primary-foreground);
  background-color: transparent;
  cursor: var(--cursor-interaction, default);
  transition:
    background-color 150ms,
    border-color 150ms,
    box-shadow 150ms;
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"] {
  border-color: var(--input);
  border-radius: var(--radius-sm);
  corner-shape: var(--corner-shape);
  background-color: var(--secondary);
  box-shadow: var(--shadow-sm);
}

.form-check:not(.form-switch)
  .form-check-input:not(:disabled):not(:checked):hover {
  background-color: var(--card);
}

.form-check:not(.form-switch) .form-check-input[type="checkbox"]:checked {
  border-color: var(--primary);
  background-color: var(--primary);
}

.form-check:not(.form-switch)
  .form-check-input[type="checkbox"]:checked::before {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--primary-foreground);
  content: "";
  mask: var(--checkmark-image) center / 12px 12px no-repeat;
}

.form-check-input[type="radio"] {
  width: 14px;
  height: 14px;
  border-radius: var(--radius-full);
}

.form-check-input[type="radio"]:checked {
  border: 2px solid var(--primary);
  background:
    radial-gradient(circle, var(--primary-foreground) 0 2.5px, transparent 3px),
    var(--primary);
}

.form-check:not(.form-switch) .form-check-input:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.form-check:not(.form-switch) .form-check-input:disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.form-check:not(.form-switch) .form-check-input:disabled + .form-check-label {
  cursor: not-allowed;
}

.form-switch .form-check-input:disabled,
.form-switch .form-check-input:disabled + .form-check-label {
  cursor: not-allowed;
  opacity: 0.6;
}

.form-check-label {
  color: var(--foreground);
  cursor: var(--cursor-interaction, default);
}

.form-switch .form-check-input {
  position: relative;
  width: 32px;
  height: 20px;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--muted);
  box-shadow: none;
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1);
}

.form-switch .form-check-input::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid light-dark(var(--primary-foreground), var(--foreground));
  border-radius: var(--radius-full);
  background: light-dark(var(--primary-foreground), var(--foreground));
  box-shadow: var(--shadow-sm);
  content: "";
  transform: translate(2px, -50%);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}

.form-switch .form-check-input:checked {
  background: var(--primary);
}

.form-switch .form-check-input:checked::before {
  transform: translate(14px, -50%);
}

.form-switch .form-check-input:focus-visible {
  box-shadow: 0 0 0 2px var(--ring);
}

.form-range {
  appearance: none;
  display: block;
  width: 100%;
  height: 28px;
  flex: 1;
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  accent-color: var(--primary);
  background: linear-gradient(
      color-mix(in srgb, var(--foreground) 7%, transparent),
      color-mix(in srgb, var(--foreground) 7%, transparent)
    )
    center / 100% 2px no-repeat;
}

.form-range::-webkit-slider-runnable-track {
  height: 28px;
  background: transparent;
}

.form-range::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  margin-top: 4px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: light-dark(var(--primary-foreground), var(--foreground));
}

.form-range:focus-visible::-webkit-slider-thumb {
  border-color: var(--ring);
  box-shadow: inset 0 0 0 1px var(--ring);
}

.form-range::-moz-range-track {
  height: 28px;
  background: transparent;
}

.form-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  background: light-dark(var(--primary-foreground), var(--foreground));
}

.form-range:focus-visible::-moz-range-thumb {
  border-color: var(--ring);
  box-shadow: inset 0 0 0 1px var(--ring);
}

.form-range:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.btn:not(.btn-primary, .viz-tile):is(
  [aria-pressed="true"],
  [aria-selected="true"],
  .is-selected
) {
  border-color: var(--primary);
  color: var(--primary-foreground);
  background: var(--primary);
}

.btn.viz-tile:is([aria-pressed="true"], [aria-selected="true"], .is-selected) {
  border-color: var(--primary);
  box-shadow: inset 0 0 0 1px var(--primary);
}

.btn:focus-visible,
.nav-link:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.viz-carousel-controls :is(button, summary):focus-visible {
  outline: 2px solid var(--ring) !important;
  outline-offset: 2px !important;
}

@media (pointer: coarse) {
  .viz-carousel:has(> .viz-carousel-controls) {
    min-height: calc(76px + var(--viz-carousel-picker-height, 0px));
    padding-bottom: 76px;
  }

  .btn,
  .nav-link,
  .viz-carousel-controls button,
  .viz-carousel-picker > summary,
  .form-control,
  .form-select {
    min-width: 44px;
    min-height: 44px;
  }

  /* Keep small-screen WebKit from zooming when a text field receives focus. */
  .form-control,
  .form-select {
    font-size: max(16px, var(--font-size-normal));
  }

  .form-control[type="file"]::file-selector-button {
    min-width: 44px;
    min-height: 44px;
  }

  .form-control-color[type="color"] {
    width: 44px;
    height: 44px;
  }

  .form-control:is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
    min-width: 0;
    max-width: 100%;
    padding-block: 8px;
  }

  .form-check {
    min-height: 44px;
    padding-inline: 15px;
  }

  .form-check-input {
    position: relative;
  }

  .form-check-input::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 44px;
    height: 44px;
    content: "";
    transform: translate(-50%, -50%);
  }

  .form-check-label {
    display: inline-flex;
    min-width: 44px;
    min-height: 44px;
    align-items: center;
  }

  .form-range {
    height: 44px;
    touch-action: pan-y;
  }

  .form-range::-webkit-slider-runnable-track {
    height: 44px;
  }

  .form-range::-moz-range-track {
    height: 44px;
  }

  .form-range::-webkit-slider-thumb {
    margin-top: 12px;
  }
}

svg {
  display: block;
  max-width: 100%;
  height: auto;
}

#widget > svg {
  width: 100%;
}

/* Model-authored chart rules can otherwise stretch icons after these styles load. */
svg.lucide {
  display: block;
  width: var(--icon-size) !important;
  height: var(--icon-size) !important;
  flex: none;
  margin: 0 !important;
  stroke-width: 1.6;
}

.text-warning,
.text-destructive {
  color: var(--destructive);
}
`,title:a}){let c=`<!doctype html>
<html lang="${f(t)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<meta http-equiv="Content-Security-Policy" content="${m}">
<title>${f(a)}</title>
</head>
<body>
<script type="application/json" id="codex-visualization-widget-state">__CODEX_VISUALIZATION_WIDGET_STATE__<\/script>
<script>${s.replaceAll(`<\/script`,`<\\/script`)}<\/script>
${o(e,{treatment:n,lockDocumentOverflow:!1,reportToHost:!1,styles:`${r}\nhtml>body{padding:0}`})}
</body>
</html>
`;return`<!doctype html>
<html lang="${f(t)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="referrer" content="no-referrer">
<meta http-equiv="Content-Security-Policy" content="${h}">
<title>${f(a)}</title>
<style>:root{color-scheme:light dark;background:${i}}html,body{margin:0}body{box-sizing:border-box;padding:1rem;background:inherit}iframe{display:block;width:100%;max-width:736px;height:calc(100vh - 2rem);margin:0 auto;border:0}</style>
</head>
<body>
<iframe id="codex-visualization" sandbox="allow-scripts" scrolling="no" referrerpolicy="no-referrer" title="${f(a)}" data-srcdoc="${f(c)}"></iframe>
<script>${l.replaceAll(`<\/script`,`<\\/script`)}<\/script>
</body>
</html>
`}function f(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}var p,m,h;function g(){return(g=e((()=>{c(),u(),t(),a(),r(),p=n.resourceDomains.join(` `),m=[`default-src 'none'`,`script-src 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' ${p}`,`style-src 'unsafe-inline' ${p}`,`img-src ${p}`,`font-src ${p}`,`media-src ${p}`,`worker-src blob:`,`connect-src blob: data:`,`frame-src 'none'`,`object-src 'none'`,`base-uri 'none'`,`form-action 'none'`].join(`; `),h=m.replace(`frame-src 'none'`,`frame-src 'self'`)})))()}g();export{d as getStandaloneVisualizationHtml};
//# sourceMappingURL=visualization-standalone-document-66930bbf35f9.js.map