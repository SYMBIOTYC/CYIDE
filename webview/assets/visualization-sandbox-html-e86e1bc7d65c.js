import{n as e}from"./rolldown-runtime-428824ca0286.js";import{a_ as t,dZ as n,i_ as r}from"./app-initial-ef83d79c5fa7.js";import{c as i,f as a,i as o,l as s,m as c,o as l,p as u,s as d,t as f,u as p}from"./visualization-sandbox-config-b59304d7c13f.js";import{a as m,n as h,o as g,t as ee}from"./protocol-6260186825ab.js";import{n as te,t as _}from"./runtime-9de4705ad655.js";var v;function y(){return(y=e((()=>{v=`(() => {
  const blocks = "dash-block, experimental-dash-block, [data-dashboard-block]";
  const marker = "[data-annotate]";
  const hovered = "data-codex-dashboard-annotation-hover";
  const tool = "__codex_visualization_annotations__";
  const style = document.createElement("style");
  style.textContent = \`[\${hovered}], [\${hovered}] * {
    cursor: var(--codex-dashboard-review-cursor, crosshair) !important;
  }
  @supports not (top: anchor(top)) {
    [\${hovered}] {
      outline: 2px dashed var(--color-text-info, #339cff) !important;
      outline-offset: -2px;
    }
  }\`;

  let mode = window.openai?.sandboxDocumentState;
  let listeners;
  let highlight;
  let anchor;
  let lastClick;

  function identifier(value) {
    return typeof value === "string" &&
      value &&
      value.trim() === value &&
      value.length <= 160
      ? value
      : null;
  }

  const content = "h1,h2,h3,h4,h5,h6,p,label,output,span,caption,figcaption,li";
  const selectors = {
    block: blocks,
    text: marker,
    tab: '[role="tab"]',
    table: "table",
    row: "tr",
    cell: "th,td",
    content,
  };
  const candidates = Object.values(selectors).join(",");
  let indexes = new WeakMap();

  function textOf(element) {
    return (element.innerText ?? "").replace(/\\s+/g, " ").trim();
  }

  function semanticTarget(kind, parts, label) {
    // Keys carry authored identities. An ambiguous or oversized key falls back
    // to a meaningful ancestor rather than selecting by DOM position.
    const id = JSON.stringify(parts);
    return identifier(id) && label
      ? { kind, id, label: displayLabel(label, id) }
      : null;
  }

  function tabTarget(element) {
    const list = element.closest('[role="tablist"]');
    if (!list) return null;
    const component = list.closest("experimental-dash-tabs,dash-tabs");
    const listName =
      component?.id || list.id || list.getAttribute("aria-label");
    const label = textOf(element) || element.getAttribute("aria-label");
    const value =
      element.getAttribute("value") ||
      element.getAttribute("aria-controls") ||
      element.id ||
      label;
    return (
      value &&
      semanticTarget("tab", [listName ?? "tabs", value], label || value)
    );
  }

  function contentTarget(element) {
    const label = textOf(element) || element.getAttribute("aria-label");
    if (
      !label ||
      (element.matches("span") && element.querySelector(candidates))
    )
      return null;
    const tag = element.localName;
    const section = element.closest(
      'section[id],article[id],figure[id],[role="tabpanel"][id]',
    );
    const scope = section ? [section.id] : [];
    if (element.id)
      return semanticTarget("content", [tag, "id", element.id], label);
    if (element.matches("label[for]"))
      return semanticTarget("content", [tag, "for", element.htmlFor], label);
    if (tag === "output")
      return semanticTarget("content", [...scope, tag], label);
    return semanticTarget(
      "content",
      [...scope, tag, label.slice(0, 88)],
      label,
    );
  }

  function authored(element) {
    if (!(element instanceof HTMLElement)) return false;
    if (
      element.closest(
        'svg,canvas,[data-codex-dashboard-review-overlay],[data-viz-container],.recharts-wrapper,[slot="viz-block-info"],[slot="viz-block-source"],[slot="layout-controls"]',
      )
    )
      return false;
    for (let ancestor = element; ancestor; ancestor = ancestor.parentElement) {
      if (
        ancestor.localName === "viz-chart" ||
        ancestor.localName.startsWith("viz-chart-")
      )
        return false;
    }
    return true;
  }

  function describe(element) {
    if (!authored(element)) return null;
    const block = element.closest(blocks);
    if (
      block &&
      (!identifier(block.id) || document.getElementById(block.id) !== block)
    )
      return null;
    let target;
    if (element === block) {
      const label =
        block.getAttribute("heading") ||
        block.getAttribute("aria-label") ||
        block.querySelector("h1,h2,h3,h4,h5,h6")?.innerText ||
        block.id;
      return {
        kind: "block",
        id: block.id,
        label: displayLabel(label, block.id),
      };
    }
    const marked = identifier(element.getAttribute("data-annotate"));
    if (marked) {
      target = {
        kind: "text",
        id: marked,
        label: displayLabel(
          element.getAttribute("aria-label") || element.innerText,
          marked,
        ),
      };
    } else if (element.matches(selectors.tab)) {
      target = tabTarget(element);
    } else if (element.matches("table,tr,th,td")) {
      target = tableTarget(element);
    } else if (
      element.matches(content) &&
      !element.closest('button,[role="tab"],[contenteditable="true"]')
    ) {
      target = contentTarget(element);
    }
    return target && { ...target, ...(block && { blockId: block.id }) };
  }

  function locate(key) {
    if (!key || !Object.hasOwn(selectors, key.kind) || !identifier(key.id))
      return null;
    if (key.kind === "block") {
      const found = document.querySelectorAll("#" + CSS.escape(key.id));
      return found.length === 1 && found[0].matches(blocks) ? found[0] : null;
    }
    const scope = key.blockId
      ? locate({ kind: "block", id: key.blockId })
      : document;
    if (!scope || (key.blockId && !scope.matches(blocks))) return null;
    let kinds = indexes.get(scope);
    if (!kinds) indexes.set(scope, (kinds = new Map()));
    if (!kinds.has(key.kind)) {
      const index = new Map();
      for (const candidate of scope.querySelectorAll(selectors[key.kind])) {
        if (candidate.closest(blocks) !== (scope === document ? null : scope))
          continue;
        const target = describe(candidate);
        if (target?.kind === key.kind) {
          index.set(target.id, index.has(target.id) ? null : candidate);
        }
      }
      kinds.set(key.kind, index);
    }
    const found = kinds.get(key.kind).get(key.id);
    if (found && (key.kind === "row" || key.kind === "cell")) {
      const table = found.closest("table");
      if (locate(describe(table)) !== table) return null;
      const row = found.closest("tr");
      const rowTarget = row && describe(row);
      if (key.kind === "cell" && rowTarget && locate(rowTarget) !== row)
        return null;
    }
    return found ?? null;
  }

  function unique(element) {
    const target = element && describe(element);
    return target && locate(target) === element ? element : null;
  }

  function selectedTarget(element) {
    const target = describe(element);
    if (!target) return null;
    const declared =
      element.getAttribute("sources") ||
      element.closest(blocks)?.getAttribute("sources");
    const sources = declared
      ?.trim()
      .split(/\\s+/)
      .filter((name) => name && name.length <= 120)
      .slice(0, 8);
    return sources?.length
      ? { ...target, sources: [...new Set(sources)] }
      : target;
  }

  function pick(element) {
    if (!(element instanceof Element)) return null;
    const block = element.closest(blocks);
    const marked = element.closest(marker);
    if (marked?.closest(blocks) === block && unique(marked)) return marked;
    const tab = element.closest(selectors.tab);
    if (tab && unique(tab)) return tab;
    // A formatted number inside a cell belongs to its row and column. Keep
    // headings, captions and authored text selectable elsewhere in the document.
    const cell = element.closest("th,td");
    const start = cell ?? element;
    for (let current = start; current; current = current.parentElement) {
      if (current.matches(candidates) && unique(current)) return current;
      if (current === block) break;
    }
    return null;
  }

  // The caller walks ancestors from the hit and verifies the key is unique
  // within its block. An unidentifiable cell can therefore select its row/table.
  function tableTarget(element) {
    if (!element.matches("table, tr, th, td")) return null;
    const table = element.closest("table");
    if (!table) return null;
    const section = table.closest("section[id], article[id], figure[id]");
    const caption =
      table.getAttribute("aria-label")?.trim() ||
      (table.caption && textOf(table.caption));
    const heading = section?.querySelector(
      ":scope > :is(h1,h2,h3,h4,h5,h6,figcaption)",
    );
    const title =
      caption || (heading && textOf(heading)) || table.id || "Table";
    const tableKey = table.id
      ? ["id", table.id]
      : caption
        ? ["name", caption]
        : section
          ? ["section", section.id]
          : ["table"];
    if (element === table) return semanticTarget("table", tableKey, title);

    const row = element.closest("tr");
    if (!row || row.closest("table") !== table) return null;
    const headerRow =
      table.tHead?.rows.length === 1
        ? table.tHead.rows[0]
        : !table.tHead &&
            Array.from(table.rows[0]?.cells ?? []).every((cell) =>
              cell.matches("th:not([scope=row])"),
            )
          ? table.rows[0]
          : null;
    function columnKey(cell) {
      const name = textOf(cell);
      return cell.id ? ["id", cell.id] : name ? ["name", name] : null;
    }
    if (
      element.matches("th") &&
      (row === headerRow ||
        element.scope === "col" ||
        (row.parentElement === table.tHead && element.scope !== "row"))
    ) {
      const key = columnKey(element);
      return (
        key &&
        semanticTarget(
          "cell",
          [...tableKey, "column", ...key],
          \`\${title} · \${textOf(element) || element.id}\`,
        )
      );
    }
    if (row === headerRow || row.parentElement === table.tHead) return null;

    const first = row.cells[0];
    const header =
      Array.from(row.cells).find((cell) => cell.matches("th[scope=row]")) ||
      (first?.matches("th:not([scope=col])") ? first : null);
    const firstText = first && textOf(first);
    // Plain generated tables conventionally put a dimension or date first.
    // A measurement alone is too volatile to identify its row across refreshes.
    const dimension =
      firstText &&
      (/^\\p{L}/u.test(firstText) || /^\\d{4}-\\d{2}-\\d{2}\\b/.test(firstText))
        ? firstText
        : null;
    const rowName =
      row.getAttribute("aria-label")?.trim() ||
      (header && textOf(header)) ||
      dimension ||
      row.id;
    const rowKey = row.id ? ["id", row.id] : rowName ? ["name", rowName] : null;
    if (!rowKey) return null;
    const rowParts = [...tableKey, "row", ...rowKey];
    if (element === row)
      return semanticTarget("row", rowParts, \`\${title} · \${rowName}\`);

    // Positional matching is only meaningful for a simple rectangular table.
    // The *stored* key is the column heading, so moving the column is safe.
    const column = headerRow?.cells[element.cellIndex];
    const rectangular =
      column &&
      headerRow.cells.length === row.cells.length &&
      [...headerRow.cells, ...row.cells].every(
        (cell) => cell.colSpan === 1 && cell.rowSpan === 1,
      );
    const columnName = rectangular && textOf(column);
    const cellKey = element.id
      ? ["id", element.id]
      : rectangular && columnKey(column);
    if (!cellKey) return null;
    return semanticTarget(
      "cell",
      [...rowParts, "cell", ...cellKey],
      [title, rowName, columnName || element.id, textOf(element)]
        .filter(Boolean)
        .join(" · "),
    );
  }

  function displayLabel(value, fallback) {
    return value?.replace(/\\s+/g, " ").trim().slice(0, 240) || fallback;
  }

  function mark(element) {
    if (element === highlight) return;
    highlight?.removeAttribute(hovered);
    highlight = element;
    highlight?.setAttribute(hovered, "");
    syncOverlays();
  }

  function report(target, rect, tracking = false, additional = false, point) {
    void window.openai
      .callTool(tool, {
        type: "dashboard-select",
        target,
        rect,
        ...(point && { point }),
        ...(tracking && { tracking: true }),
        ...(additional && { additional: true }),
      })
      .catch(() => {});
  }

  function select(element, additional, pointer) {
    const target = selectedTarget(element);
    if (!target) return;
    const { x, y, width, height } = element.getBoundingClientRect();
    if (!width || !height) return;
    const relative = pointer && {
      x: Math.max(0, Math.min(1, (pointer.clientX - x) / width)),
      y: Math.max(0, Math.min(1, (pointer.clientY - y) / height)),
    };
    lastClick = { target, relative };
    if (sameTarget(anchor?.key, target)) anchor.relative = relative;
    const rect = { x, y, width, height };
    report(target, rect, false, additional, pointInRect(rect, relative));
  }

  function pointInRect(rect, relative) {
    return relative && {
      x: rect.x + relative.x * rect.width,
      y: rect.y + relative.y * rect.height,
    };
  }

  function sameTarget(a, b) {
    return a?.kind === b?.kind && a?.id === b?.id && a?.blockId === b?.blockId;
  }

  function track(key) {
    if (sameTarget(anchor?.key, key)) return;
    if (key == null && anchor) lastClick = undefined;
    anchor?.stop();
    anchor = undefined;
    if (!key || !identifier(key.id)) return;
    const controller = new AbortController();
    const resize = new ResizeObserver(schedule);
    let element;
    let target;
    let frame;
    let previous;
    let dirty = true;
    function schedule() {
      if (frame == null) frame = requestAnimationFrame(measure);
    }
    function measure() {
      frame = undefined;
      if (dirty || !element?.isConnected) {
        dirty = false;
        const next = locate(key);
        if (next !== element) {
          resize.disconnect();
          element = next;
          if (element) resize.observe(element);
        }
        if (!element) {
          previous = undefined;
          return;
        }
        target = selectedTarget(element);
      }
      let { x, y, width, height } = element.getBoundingClientRect();
      if (!width || !height || !innerWidth || !innerHeight) return;
      if (
        x + width <= 0 ||
        y + height <= 0 ||
        x >= innerWidth ||
        y >= innerHeight
      ) {
        x = Math.max(0, Math.min(innerWidth - 1, x + width / 2));
        y = Math.max(0, Math.min(innerHeight - 1, y + height / 2));
        width = height = 1;
      }
      const rect = { x, y, width, height };
      if (
        previous &&
        Object.keys(rect).every((name) => rect[name] === previous[name])
      )
        return;
      previous = rect;
      report(target, rect, true, false, pointInRect(rect, anchor.relative));
    }
    const options = { signal: controller.signal, capture: true };
    window.addEventListener("scroll", schedule, options);
    window.addEventListener("resize", schedule, options);
    anchor = {
      key,
      relative: sameTarget(lastClick?.target, key) ? lastClick.relative : undefined,
      rebind(records) {
        const scope = element?.closest(blocks);
        if (
          !scope ||
          !element?.isConnected ||
          records.some(
            ({ target }) => scope.contains(target) || target.contains(scope),
          )
        ) {
          dirty = true;
          schedule();
        }
      },
      stop() {
        controller.abort();
        resize.disconnect();
        if (frame != null) cancelAnimationFrame(frame);
      },
    };
    schedule();
  }

  function intercept(event) {
    if (!event.isTrusted || event.button !== 0) return;
    const element = pick(event.target);
    if (!element) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (event.type === "click") select(element, event.shiftKey, event);
  }

  function enableKeyboardTargets(signal) {
    const originalTabIndex = new Map();
    function update(element) {
      if (element.matches(candidates) && describe(element)) {
        if (element.tabIndex < 0 && !originalTabIndex.has(element)) {
          originalTabIndex.set(element, element.getAttribute("tabindex"));
          element.setAttribute("tabindex", "0");
        }
      } else {
        restore(element);
      }
    }
    function restore(element) {
      if (
        originalTabIndex.has(element) &&
        element.getAttribute("tabindex") === "0"
      ) {
        const original = originalTabIndex.get(element);
        if (original == null) element.removeAttribute("tabindex");
        else element.setAttribute("tabindex", original);
      }
      originalTabIndex.delete(element);
    }
    function scan(node) {
      if (!(node instanceof Element)) return;
      if (node.matches(candidates)) update(node);
      node.querySelectorAll(candidates).forEach(update);
    }
    scan(document.documentElement);
    const observer = new MutationObserver((mutations) => {
      const records = mutations.filter((record) => {
        if (
          record.target.parentElement?.closest(
            "[data-codex-dashboard-review-overlay]",
          )
        )
          return false;
        if (
          record.target instanceof Element &&
          record.target.closest("[data-codex-dashboard-review-overlay]")
        )
          return false;
        return (
          record.type !== "childList" ||
          [...record.addedNodes, ...record.removedNodes].some(
            (node) =>
              !(
                node instanceof Element &&
                node.matches("[data-codex-dashboard-review-overlay]")
              ),
          )
        );
      });
      if (!records.length) return;
      indexes = new WeakMap();
      anchor?.rebind(records);
      syncOverlays();
      for (const record of records) {
        if (record.type === "attributes") update(record.target);
        else record.addedNodes.forEach(scan);
      }
      if (records.some((record) => record.removedNodes.length)) {
        for (const element of originalTabIndex.keys()) {
          if (!element.isConnected) restore(element);
        }
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
      attributeFilter: [
        "id",
        "role",
        "value",
        "aria-label",
        "aria-controls",
        "scope",
        "for",
        "data-annotate",
        "data-dashboard-block",
      ],
    });
    signal.addEventListener("abort", () => {
      observer.disconnect();
      for (const element of originalTabIndex.keys()) restore(element);
    });
  }

  // Keep the Slides highlight and pin in the guest's coordinate space. A
  // top-layer overlay follows its CSS anchor through scrolling and resizing
  // without changing the selected element's border, background, or layout.
  const overlays = new Map();
  style.textContent += \`
    [data-codex-dashboard-review-overlay]:popover-open {
      all: initial;
      position: fixed;
      position-anchor: auto;
      inset: auto;
      left: anchor(left);
      top: anchor(top);
      width: anchor-size(width);
      height: anchor-size(height);
      position-visibility: anchors-visible;
      box-sizing: border-box;
      --review-stroke: var(--color-text-info, var(--color-token-text-link-foreground, #339cff));
      background: color-mix(in srgb, var(--review-stroke) 10%, transparent);
      outline: 2px dashed var(--review-stroke);
      outline-offset: -2px;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.28);
      overflow: visible;
      pointer-events: none;
    }
    [data-codex-dashboard-note-marker] {
      all: initial;
      position: absolute;
      left: 100%;
      top: 0;
      transform: translate(-50%, -50%);
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 3px;
      background: var(--color-background-info-solid, var(--review-stroke));
      box-shadow: 0 0 0 1px white, 0 4px 8px -2px rgb(0 0 0 / 16%);
    }
    [data-codex-dashboard-review-overlay="saved"] > button {
      cursor: pointer;
      pointer-events: auto;
    }
    [data-codex-dashboard-review-overlay="saved"] > button:is(:hover,:focus-visible) {
      scale: 1.08;
      transform-origin: bottom left;
    }
  \`;

  function syncOverlays() {
    const wanted = new Map();
    if (listeners && document.body && "showPopover" in HTMLElement.prototype && CSS.supports("top: anchor(top)")) {
      if (highlight?.isConnected) wanted.set(highlight, "hover");
      const markers = mode?.dashboardAnnotationMarkers;
      for (const note of Array.isArray(markers) ? markers : []) {
        const source = locate(note?.target);
        if (source) wanted.set(source, "saved");
      }
      const editing = locate(mode?.dashboardAnnotationTarget);
      if (editing) wanted.set(editing, "draft");
    }
    for (const [source, overlay] of overlays) {
      if (!wanted.has(source) || !overlay.isConnected) {
        overlay.remove();
        overlays.delete(source);
      }
    }
    for (const [source, kind] of wanted) {
      let overlay = overlays.get(source);
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.setAttribute("data-codex-dashboard-review-overlay", kind);
        overlay.popover = "manual";
        document.body.append(overlay);
        overlay.showPopover({ source });
        overlays.set(source, overlay);
      }
      if (overlay.getAttribute("data-codex-dashboard-review-overlay") !== kind) {
        overlay.setAttribute("data-codex-dashboard-review-overlay", kind);
      }
      if (kind === "hover") {
        overlay.firstElementChild?.remove();
      } else {
        let pin = overlay.firstElementChild;
        if (!pin) {
          pin = document.createElement("button");
          pin.type = "button";
          pin.setAttribute("data-codex-dashboard-note-marker", "");
          pin.addEventListener("click", (event) => {
            if (!event.isTrusted) return;
            event.stopPropagation();
            select(source, false);
          });
          overlay.append(pin);
        }
        const disabled = kind === "draft";
        if (pin.disabled !== disabled) pin.disabled = disabled;
        const label = selectedTarget(source)?.label ?? "";
        if (pin.getAttribute("aria-label") !== label) pin.setAttribute("aria-label", label);
      }
    }
  }

  function sync() {
    const active =
      !document.hidden &&
      mode?.dashboardVisible !== false &&
      mode?.dashboardAnnotateMode === true &&
      mode.dashboardEditMode !== true;
    track(active ? mode.dashboardAnnotationTarget : null);
    if (active === Boolean(listeners)) {
      syncOverlays();
      return;
    }
    if (!active) {
      listeners.abort();
      listeners = undefined;
      mark(null);
      syncOverlays();
      lastClick = undefined;
      indexes = new WeakMap();
      style.remove();
      return;
    }
    listeners = new AbortController();
    const options = { capture: true, signal: listeners.signal };
    document.head.append(style);
    enableKeyboardTargets(listeners.signal);
    syncOverlays();
    window.addEventListener(
      "pointerover",
      (event) => mark(pick(event.target)),
      options,
    );
    window.addEventListener(
      "pointerout",
      (event) => {
        if (event.relatedTarget == null) mark(null);
      },
      options,
    );
    window.addEventListener(
      "focusin",
      (event) => mark(pick(event.target)),
      options,
    );
    window.addEventListener("focusout", () => mark(null), options);
    for (const name of ["pointerdown", "mousedown", "click"]) {
      window.addEventListener(name, intercept, options);
    }
    window.addEventListener(
      "keydown",
      (event) => {
        if (!event.isTrusted || event.isComposing || event.repeat) return;
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopImmediatePropagation();
          void window.openai
            .callTool(tool, { type: "dashboard-escape" })
            .catch(() => {});
        } else if (event.key === "Enter" || event.key === " ") {
          const element = pick(event.target);
          if (!element) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          select(element, event.shiftKey);
        }
      },
      options,
    );
  }

  window.addEventListener("openai:set_globals", (event) => {
    const globals = event.detail?.globals;
    if (globals && "sandboxDocumentState" in globals) {
      mode = globals.sandboxDocumentState;
      sync();
    }
  });
  document.addEventListener("visibilitychange", sync);
  sync();
})();
`})))()}var b;function x(){return(x=e((()=>{b=`(() => {
  let documentState = window.openai?.sandboxDocumentState;

  function connect(grid) {
    let content = window.openai?.widgetState?.modelContent ?? null;
    let generation = 0;
    let pending;
    let queued = 0;

    function canMergeLayout() {
      return (
        content == null ||
        (typeof content === "object" &&
          !Array.isArray(content) &&
          (!Object.hasOwn(content, "layout") || Array.isArray(content.layout)))
      );
    }

    function restoreLayout() {
      grid.layout = Array.isArray(content?.layout) ? content.layout : [];
    }

    function syncMode() {
      grid.active =
        !document.hidden && documentState?.dashboardVisible !== false;
      grid.editable =
        grid.active &&
        documentState?.dashboardEditMode === true &&
        canMergeLayout();
    }

    function receiveState(state) {
      // The SDK echoes this exact object before the host accepts the write.
      if (
        state === pending ||
        (state != null && !Object.hasOwn(state, "modelContent"))
      )
        return;
      generation++;
      content = state?.modelContent ?? null;
      restoreLayout();
      syncMode();
    }

    function changed(event) {
      const layout = event.detail?.layout;
      if (
        event.target !== grid ||
        !grid.editable ||
        !Array.isArray(layout) ||
        layout === content?.layout
      ) {
        return;
      }
      // An authored listener can save its own state. The SDK echoes that write
      // synchronously. Wait for those listeners before providing the default.
      const observed = generation;
      const latest = ++queued;
      queueMicrotask(() => {
        if (
          latest === queued &&
          observed === generation &&
          grid.editable &&
          canMergeLayout()
        ) {
          void reportLayout(layout);
        }
      });
    }

    async function reportLayout(layout) {
      const current = ++generation;
      const state = { modelContent: { ...content, layout } };
      pending = state;
      try {
        await window.openai.setWidgetState(state);
        if (current === generation) {
          content = state.modelContent;
        }
      } catch {
        if (current === generation) {
          restoreLayout();
        }
      } finally {
        if (pending === state) {
          pending = undefined;
        }
      }
    }

    // Older pinned grids treat a pointer press on chart marks and text as a drag.
    // Suspend the grid's input handlers for that press so the authored target
    // receives the original event. The grip and blank card edges stay draggable.
    let restoreEditing;
    function pressContent(event) {
      if (
        !documentState?.dashboardDirectEditing ||
        !grid.editable ||
        event.button !== 0 ||
        !event.isPrimary
      )
        return;
      const path = event.composedPath();
      const block = path.find(
        (node) => node instanceof Element && node.parentElement === grid,
      );
      const target = path[0];
      if (
        !(target instanceof Node) ||
        !block ||
        target === block ||
        target.getRootNode() === block.shadowRoot
      )
        return;
      if (
        path.some(
          (node) =>
            node instanceof Element &&
            (node.slot === "layout-controls" ||
              node.hasAttribute("data-viz-drag") ||
              node.matches(
                "button,a,input,select,textarea,summary,[contenteditable]",
              )),
        )
      )
        return;
      grid.editable = false;
      restoreEditing = setTimeout(syncMode, 0);
    }
    grid.addEventListener("pointerdown", pressContent, true);

    function disconnect() {
      generation++;
      grid.active = false;
      grid.editable = false;
      clearTimeout(restoreEditing);
      grid.removeEventListener("pointerdown", pressContent, true);
      window.removeEventListener("layoutchange", changed, true);
    }

    window.addEventListener("layoutchange", changed, true);
    restoreLayout();
    return { grid, syncMode, receiveState, disconnect };
  }

  const names = ["experimental-dash-layout", "dash-layout"];
  const selector = names.map((name) => name + ":defined").join(",");
  let binding;
  let reported = false; // A new host session starts with Edit hidden.
  let stopped = false;

  async function sync() {
    binding?.syncMode();
    if (document.hidden || documentState?.dashboardVisible === false) {
      reported = undefined; // The host ignores inactive guests. Re-report on return.
      return;
    }
    const available = binding?.grid.getRootNode() === document;
    if (available === reported || !window.openai?.callTool) return;
    reported = available;
    try {
      await window.openai.callTool("__codex_dashboard_layout_availability__", {
        available,
      });
    } catch {
      // Older hosts do not consume this UI signal.
    }
  }

  function bind(grid) {
    if (grid !== binding?.grid) {
      binding?.disconnect();
      binding = grid && connect(grid);
    }
    observer.disconnect();
    if (grid) {
      // Only removal or reparenting matters. Updates inside a chart cannot wake this observer.
      for (let parent = grid.parentNode; parent; parent = parent.parentNode) {
        observer.observe(parent, { childList: true });
      }
    } else {
      observer.observe(document, { childList: true, subtree: true });
    }
    void sync();
  }

  function findGrid() {
    if (stopped) return;
    const grid = binding?.grid;
    bind(
      grid?.getRootNode() === document
        ? grid
        : document.querySelector(selector),
    );
  }

  const observer = new MutationObserver((records) => {
    if (binding) {
      findGrid();
      return;
    }
    // Until a grid mounts, search just the inserted subtrees.
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof Element) || node.getRootNode() !== document)
          continue;
        const candidate = node.matches(selector)
          ? node
          : node.querySelector(selector);
        if (candidate) {
          bind(candidate);
          return;
        }
      }
    }
  });

  function receive(event) {
    const globals = event.detail?.globals;
    if (!globals) return;
    if ("sandboxDocumentState" in globals) {
      const previous = documentState;
      documentState = globals.sandboxDocumentState;
      void sync();
      if (
        previous?.dashboardDirectEditing &&
        documentState?.dashboardDirectEditing &&
        documentState.dashboardFocusRequest > 0 &&
        documentState.dashboardFocusRequest !== previous.dashboardFocusRequest &&
        binding?.grid.editable
      ) {
        // Focusing the host frame alone does not enter the nested Page's tab order.
        if (!document.body.hasAttribute("tabindex")) document.body.tabIndex = -1;
        window.focus();
        document.body.focus({ preventScroll: true });
      }
    }
    if ("widgetState" in globals) binding?.receiveState(globals.widgetState);
  }

  function hide(event) {
    reported = undefined;
    if (event.persisted) return;
    stopped = true;
    observer.disconnect();
    binding?.disconnect();
    binding = null;
    window.removeEventListener("openai:set_globals", receive);
    document.removeEventListener("visibilitychange", sync);
    window.removeEventListener("pageshow", sync);
    window.removeEventListener("pagehide", hide);
  }

  window.addEventListener("openai:set_globals", receive);
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("pageshow", sync);
  window.addEventListener("pagehide", hide);
  // Static dashboards need no DOM observer. Start watching only after a supported
  // module has actually registered its custom element in this guest.
  for (const name of names)
    void customElements.whenDefined(name).then(findGrid);
})();
`})))()}var S;function C(){return(C=e((()=>{S=`(() => {
  const callTool = globalThis.openai?.callTool?.bind(globalThis.openai);
  const panels = new Map();
  const targetIds = new WeakMap();
  let nextPanelId = 0;
  let nextTargetId = 0;
  let stopped = false;
  let command = null;
  let previews = new Map();

  const send = (message) =>
    Promise.resolve()
      .then(() => callTool("__codex_visualization_annotations__", message))
      .catch(() => null);
  const liveTarget = (panel) => {
    const target = panel.target.deref();
    return target?.isConnected && target.ownerDocument === document
      ? target
      : null;
  };

  function owners() {
    const result = new Map();
    for (const panel of panels.values()) {
      const target = liveTarget(panel);
      if (target != null && panel.accepted != null) {
        result.set(target, panel);
      }
    }
    return result;
  }

  function isValue(control, value) {
    switch (control.type) {
      case "range":
        return (
          Number.isFinite(value) && value >= control.min && value <= control.max
        );
      case "color":
        return (
          typeof value === "string" &&
          /^#(?:[\\da-f]{3}|[\\da-f]{4}|[\\da-f]{6}|[\\da-f]{8})$/i.test(value)
        );
      case "toggle":
        return typeof value === "boolean";
      case "select":
        return (
          typeof value === "string" &&
          control.options.some((option) => option.value === value)
        );
      default:
        return false;
    }
  }

  function setValue(binding, value) {
    if (liveTarget(binding.panel) == null) {
      return;
    }
    try {
      if (binding.object[binding.property] === value) {
        return;
      }
      binding.object[binding.property] = value;
      binding.panel.onChange?.();
    } catch (error) {
      globalThis.reportError(error);
    }
  }

  function syncPreviews() {
    const desired = new Map();
    const activeOwners = owners();
    for (const change of command?.changes ?? []) {
      const panel = panels.get(change.registrationId);
      if (
        panel == null ||
        panel.targetId !== change.targetId ||
        activeOwners.get(liveTarget(panel)) !== panel
      ) {
        continue;
      }
      // Globals may precede an update's acknowledgement. Keep accepted previews
      // while adding bindings, without recapturing their edited values.
      if (panel.inFlight) {
        for (const [binding, value] of previews) {
          if (binding.panel === panel) {
            desired.set(binding, value);
          }
        }
        continue;
      }
      for (const edit of change.annotationControlChanges) {
        const binding = panel.bindings.get(edit.callback);
        const control = panel.accepted.find(
          (candidate) => candidate.callback === edit.callback,
        );
        if (
          binding != null &&
          control != null &&
          edit.previousValue === control.currentValue &&
          edit.value !== control.currentValue &&
          isValue(control, edit.value)
        ) {
          desired.set(binding, edit.value);
        }
      }
    }
    const previous = previews;
    previews = desired;
    for (const [binding] of previous) {
      if (previews !== desired) {
        return;
      }
      if (!desired.has(binding)) {
        setValue(binding, binding.control.currentValue);
      }
    }
    for (const [binding, value] of desired) {
      // onChange can synchronously dispose a panel or register another one.
      if (previews !== desired) {
        return;
      }
      if (previous.get(binding) !== value) {
        setValue(binding, value);
      }
    }
  }

  function targetSnapshot(panel) {
    const target = liveTarget(panel);
    if (target == null) {
      throw new TypeError("Tweak container is unavailable");
    }
    const parts = [];
    for (
      let element = target;
      element != null && parts.length < 12;
      element = element.parentElement
    ) {
      const id = element.id && globalThis.CSS?.escape?.(element.id);
      if (id && id.length < 256) {
        parts.unshift(\`#\${id}\`);
        break;
      }
      let index = 1;
      for (
        let sibling = element.previousElementSibling;
        sibling != null;
        sibling = sibling.previousElementSibling
      ) {
        if (sibling.localName === element.localName) {
          index += 1;
        }
      }
      parts.unshift(\`\${element.localName}:nth-of-type(\${index})\`);
    }
    const label = [
      target.getAttribute("aria-label"),
      target.getAttribute("title"),
      target.id,
      target.localName,
    ]
      .map((value) =>
        value
          ?.replace(
            // oxlint-disable-next-line no-control-regex -- Match the host metadata bounds.
            /[\\u0000-\\u001f\\u007f-\\u009f\\u061c\\u200e\\u200f\\u2028-\\u202e\\u2066-\\u2069]/gu,
            " ",
          )
          .replace(/\\s+/g, " ")
          .trim(),
      )
      .find((value) => value);
    const { x, y, width, height } = target.getBoundingClientRect();
    return {
      id: panel.targetId,
      label: label.slice(0, 80),
      selector: parts.join(" > ").slice(0, 1024),
      tagName: target.localName.toLowerCase(),
      visible: panel.visible,
      rect: { x, y, width, height },
    };
  }

  function dispose(panel) {
    if (panel.disposed) {
      return;
    }
    panel.disposed = true;
    if (panels.delete(panel.id)) {
      syncPreviews();
      void panel.pending.then(() =>
        send({ type: "dispose", registrationId: panel.id }),
      );
    }
    panel.bindings.clear();
    panel.controls = [];
    panel.accepted = null;
  }

  function queue(panel, control, target) {
    panel.pending = panel.pending.then(async () => {
      if (panel.disposed || stopped) {
        return;
      }
      if (liveTarget(panel) == null) {
        dispose(panel);
        return;
      }
      // Rejected bindings must not leak into additions that are already queued.
      const type = panel.accepted == null ? "register" : "update";
      panel.inFlight = true;
      const result = await send({
        type,
        registrationId: panel.id,
        annotationControls: {
          controlsMode: "replace",
          controls: [...(panel.accepted ?? []), control],
        },
        targets: [{ ...target, visible: panel.visible }],
      });
      panel.inFlight = false;
      if (panel.disposed) {
        return;
      }
      if (Array.isArray(result?.annotationControls?.controls)) {
        panel.accepted = result.annotationControls.controls;
      } else {
        panel.controls = panel.controls.filter(
          (candidate) => candidate.callback !== control.callback,
        );
        panel.bindings.delete(control.callback);
        if (type === "register") {
          dispose(panel);
          return;
        }
      }
      syncPreviews();
    });
  }

  // Object bindings and the sandbox bridge; the host owns all controls UI.
  globalThis.Tweak = class Tweak {
    #panel;
    #disposed = false;

    constructor({ container, onChange }) {
      if (!this.supported) {
        return;
      }
      if (
        !(container instanceof Element) ||
        container.ownerDocument !== document
      ) {
        throw new TypeError("Tweak needs a component element as its container");
      }
      let targetId = targetIds.get(container);
      if (targetId == null) {
        targetId = String(++nextTargetId);
        targetIds.set(container, targetId);
      }
      this.#panel = {
        id: \`tweak-\${++nextPanelId}\`,
        targetId,
        target: new WeakRef(container),
        onChange,
        bindings: new Map(),
        nextControlId: 0,
        controls: [],
        visible:
          container.closest(".viz-carousel > [data-variant][hidden]") == null,
        accepted: null,
        pending: Promise.resolve(),
        inFlight: false,
        disposed: false,
      };
    }

    get supported() {
      return callTool != null && !stopped;
    }

    addSlider(
      object,
      property,
      { min, max, step = 1, unit, label, reference } = {},
    ) {
      return this.#bind(object, property, {
        type: "range",
        label: unit ? \`\${label ?? property} (\${unit})\` : (label ?? property),
        reference,
        currentValue: object[property],
        min,
        max,
        step,
      });
    }

    addColorPicker(object, property, { label = property, reference } = {}) {
      return this.#bind(object, property, {
        type: "color",
        label,
        reference,
        currentValue: object[property],
      });
    }

    addToggle(object, property, { label = property, reference } = {}) {
      return this.#bind(object, property, {
        type: "toggle",
        label,
        reference,
        currentValue: object[property],
      });
    }

    addSelect(object, property, { options, label = property, reference }) {
      return this.#bind(object, property, {
        type: "select",
        label,
        reference,
        currentValue: object[property],
        options: options.map((option) =>
          typeof option === "string"
            ? { label: option, value: option }
            : { label: option.label, value: option.value },
        ),
      });
    }

    dispose() {
      this.#disposed = true;
      if (this.#panel != null) {
        dispose(this.#panel);
      }
    }

    #bind(object, property, definition) {
      const panel = this.#panel;
      if (this.#disposed || panel?.disposed) {
        throw new Error("Tweak has been disposed");
      }
      if (!this.supported) {
        return this;
      }
      if (!isValue(definition, definition.currentValue)) {
        throw new TypeError("Tweak bindings require a valid current value");
      }
      if (
        panel.controls.length >= 12 ||
        (!panels.has(panel.id) && panels.size >= 64)
      ) {
        throw new RangeError("Too many Tweak controls");
      }
      const callback = \`\${panel.id}-\${++panel.nextControlId}\`;
      const payload = JSON.stringify({
        controlsMode: "replace",
        controls: [...panel.controls, { ...definition, callback }],
      });
      if (payload.length > 16_384) {
        throw new RangeError("Tweak controls exceed the maximum size");
      }
      const annotationControls = JSON.parse(payload);
      const control = annotationControls.controls.at(-1);
      const target = targetSnapshot(panel);
      panel.controls = annotationControls.controls;
      panel.bindings.set(callback, {
        panel,
        object,
        property,
        control,
      });
      panels.set(panel.id, panel);
      queue(panel, control, target);
      return this;
    }
  };

  function onGlobals(event) {
    const globals = event.detail?.globals;
    if (globals == null || !Object.hasOwn(globals, "visualizationAnnotation")) {
      return;
    }
    const next = globals.visualizationAnnotation;
    if (
      next != null &&
      (typeof next.active !== "boolean" ||
        !Array.isArray(next.changes) ||
        next.changes.length > 1024 ||
        next.changes.some(
          (change) =>
            change == null ||
            typeof change.registrationId !== "string" ||
            typeof change.targetId !== "string" ||
            !Array.isArray(change.annotationControlChanges) ||
            change.annotationControlChanges.length > 12 ||
            change.annotationControlChanges.some(
              (edit) => edit == null || typeof edit.callback !== "string",
            ),
        ))
    ) {
      return;
    }
    command = next;
    syncPreviews();
  }

  function close() {
    command = { ...command, active: false };
    void send({ type: "escape" });
  }

  function onPointerEvent(event) {
    if (!command?.active || event.button !== 0 || event.defaultPrevented) {
      return;
    }
    if (
      event.target instanceof Element &&
      event.target.closest(".viz-carousel > .viz-carousel-controls") != null
    ) {
      return;
    }
    const activeOwners = owners();
    for (const target of event.composedPath()) {
      const panel = activeOwners.get(target);
      if (panel != null) {
        if (event.type === "click") {
          void send({
            type: "select",
            registrationId: panel.id,
            targetId: panel.targetId,
          });
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
    }
    if (event.type === "click") {
      close();
    }
  }

  function onKeyDown(event) {
    if (
      !command?.active ||
      event.key !== "Escape" ||
      event.defaultPrevented ||
      event.isComposing
    ) {
      return;
    }
    event.preventDefault();
    close();
  }

  function onPageHide(event) {
    if (!event.isTrusted) {
      return;
    }
    stopped = true;
    command = null;
    syncPreviews();
    for (const panel of panels.values()) {
      dispose(panel);
    }
    observer.disconnect();
    globalThis.removeEventListener("openai:set_globals", onGlobals);
    globalThis.removeEventListener("pointerdown", onPointerEvent, true);
    globalThis.removeEventListener("mousedown", onPointerEvent, true);
    globalThis.removeEventListener("click", onPointerEvent, true);
    globalThis.removeEventListener("keydown", onKeyDown);
    globalThis.removeEventListener("pagehide", onPageHide);
  }

  const observer = new MutationObserver(() => {
    for (const panel of panels.values()) {
      const target = liveTarget(panel);
      if (target == null) {
        if (command?.active && command.selection?.registrationId === panel.id) {
          close();
        }
        dispose(panel);
        continue;
      }
      const visible =
        target.closest(".viz-carousel > [data-variant][hidden]") == null;
      if (visible === panel.visible) {
        continue;
      }
      panel.visible = visible;
      panel.pending = panel.pending.then(async () => {
        if (panel.disposed || stopped || panel.accepted == null) {
          return;
        }
        if (liveTarget(panel) == null) {
          dispose(panel);
          return;
        }
        await send({
          type: "update",
          registrationId: panel.id,
          annotationControls: {
            controlsMode: "replace",
            controls: panel.accepted,
          },
          targets: [targetSnapshot(panel)],
        });
      });
    }
  });
  if (callTool != null) {
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["hidden"],
    });
    globalThis.addEventListener("openai:set_globals", onGlobals);
    globalThis.addEventListener("pointerdown", onPointerEvent, true);
    globalThis.addEventListener("mousedown", onPointerEvent, true);
    globalThis.addEventListener("click", onPointerEvent, true);
    globalThis.addEventListener("keydown", onKeyDown);
    globalThis.addEventListener("pagehide", onPageHide);
    onGlobals({ detail: { globals: globalThis.openai } });
  }
})();
`})))()}var w;function T(){return(T=e((()=>{w=`// Bundled into the sandbox only when the fragment references viz-calendar.
// Register before parsing the fragment: connectedCallback builds the styled
// shadow tree synchronously, without a network request or hydration frame.
(() => {
  if (customElements.get("viz-calendar")) return;

  const style = \`
    :host{display:block;min-width:0;padding:12px;font:400 14px/1.5 Inter,system-ui,sans-serif;color:var(--foreground);container-type:inline-size}
    *{box-sizing:border-box}
    .layout{display:grid;grid-template-columns:88px minmax(0,1fr);gap:24px}
    .date{display:flex;flex-direction:column;gap:8px;padding-top:8px;border-right:1px solid var(--border)}
    .weekday,.context{color:color-mix(in srgb,var(--foreground) 65%,var(--background))}
    .day{font-size:48px;line-height:1.1;letter-spacing:-.03em}
    .context{font-size:12px;line-height:16px;overflow-wrap:anywhere}
    .axis{--hour:max(48px,var(--minimum-hour));position:relative;height:calc(var(--hours)*var(--hour) + 16px);margin-top:8px;min-width:0}
    .axis.compact{--hour:max(32px,var(--minimum-hour))}
    .hour{position:absolute;top:calc(var(--at)*var(--hour));inset-inline:0;color:var(--muted-foreground)}
    .hour span{display:block;width:36px;text-align:right;transform:translateY(-50%);font-variant-numeric:tabular-nums}
    .hour::after{content:"";position:absolute;top:0;left:48px;right:0;border-top:1px solid var(--border)}
    .events{position:absolute;inset:0 0 16px 48px;margin:0;padding:0;list-style:none;overflow:hidden}
    .event{position:absolute;top:calc(var(--at)*var(--hour) + 2px);height:calc(var(--duration)*var(--hour) - 4px);left:calc(var(--lane)*100%/var(--lanes) + var(--lane)*8px/var(--lanes));width:calc((100% - (var(--lanes) - 1)*8px)/var(--lanes));border-radius:8px;background:linear-gradient(110deg,color-mix(in srgb,var(--tone) 24%,var(--background)),color-mix(in srgb,var(--tone) 32%,var(--background)));overflow:hidden;container-type:size}
    .event.past{background:color-mix(in srgb,var(--tone) 12%,var(--background));color:color-mix(in srgb,var(--foreground) 70%,var(--background))}
    .event-body{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;height:100%;padding:4px 12px;font:inherit;color:inherit;text-align:left}
    button.event-body{appearance:none;border:0;border-radius:inherit;background:transparent}
    .cursor-interaction{cursor:var(--cursor-interaction,pointer)}
    button.event-body:hover{background:color-mix(in srgb,var(--foreground) 2%,transparent)}
    button.event-body:focus-visible{outline:2px solid var(--ring);outline-offset:-2px}
    /* Optically center Inter's glyphs within the unchanged line boxes. */
    .event-content{min-width:0;transform:translateY(-1px)}
    .title{display:block;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .detail{display:block;font-size:12px;line-height:16px;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    @container(max-height:48px){.detail{display:none}.event-body{padding-block:0}}
    .video{width:16px;height:16px;flex:none}
    .now{position:absolute;top:calc(var(--at)*var(--hour));left:48px;right:0;border-top:2px solid var(--red);pointer-events:none}
    .now::before{content:"";position:absolute;left:-4px;top:-5px;width:8px;height:8px;border-radius:50%;background:var(--red)}
    .now span{position:absolute;right:calc(100% + 12px);transform:translateY(-50%);color:var(--red);font:400 12px/16px Inter,system-ui,sans-serif;font-variant-numeric:tabular-nums}
    .empty{position:absolute;top:24px;left:64px;color:var(--muted-foreground)}
    @media(pointer:coarse){:host .axis{--hour:max(48px,var(--minimum-hour),var(--minimum-target-hour))}}
    @container(max-width:520px){.layout{grid-template-columns:minmax(0,1fr)}.date{flex-direction:row;align-items:baseline;border:0;padding:0}.event-body{padding-inline:8px}}
  \`;
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const minutes = (value) => {
    if (
      typeof value !== "string" ||
      !/^(?:[01]\\d|2[0-3]):[0-5]\\d$|^24:00$/.test(value)
    ) {
      throw new Error("Use HH:MM times between 00:00 and 24:00.");
    }
    return Number(value.slice(0, 2)) * 60 + Number(value.slice(3));
  };

  class Calendar extends HTMLElement {
    #initialized = false;
    #events;
    static observedAttributes = [
      "date",
      "start",
      "end",
      "now",
      "events",
      "lang",
      "time-zone",
      "empty-label",
      "interactive",
    ];

    constructor() {
      super();
      // Replay data assigned before the custom element was registered.
      if (Object.hasOwn(this, "events")) {
        const events = this.events;
        delete this.events;
        this.events = events;
      }
    }

    get events() {
      return this.#events === undefined
        ? JSON.parse(this.getAttribute("events") ?? "[]")
        : this.#events;
    }

    set events(events) {
      this.#events = events;
      if (this.#initialized) this.render();
    }

    connectedCallback() {
      // Keep the shared widget surface outside Shadow DOM; only layout is private.
      this.classList.add("widget");
      // Preserve a server-rendered declarative shadow root when upgrading it.
      // https://web.dev/articles/declarative-shadow-dom
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open", serializable: true });
        this.render();
      } else if (!this.#initialized && this.#events !== undefined) {
        this.render();
      }
      if (!this.#initialized) {
        this.shadowRoot.addEventListener("click", (event) => {
          const button = event.target.closest?.("button[data-event-index]");
          if (!button) return;
          const index = Number(button.dataset.eventIndex);
          this.dispatchEvent(
            new CustomEvent("eventselect", {
              bubbles: true,
              composed: true,
              detail: { event: this.events[index], index },
            }),
          );
        });
      }
      this.#initialized = true;
    }

    attributeChangedCallback(name, before, after) {
      if (before !== after && this.#initialized && this.shadowRoot)
        this.render();
    }

    render() {
      const shadow = this.shadowRoot;
      try {
        const date = this.getAttribute("date") ?? "";
        const calendarDate = new Date(\`\${date}T12:00:00Z\`);
        if (
          !/^\\d{4}-\\d{2}-\\d{2}$/.test(date) ||
          !Number.isFinite(calendarDate.getTime()) ||
          calendarDate.toISOString().slice(0, 10) !== date
        ) {
          throw new Error("Supply a valid calendar date as YYYY-MM-DD.");
        }
        const start = minutes(this.getAttribute("start") ?? "09:00");
        const end = minutes(this.getAttribute("end") ?? "17:00");
        if (end <= start)
          throw new Error("The visible end must be later than the start.");
        const now = this.hasAttribute("now")
          ? minutes(this.getAttribute("now"))
          : null;
        const input = this.events;
        if (!Array.isArray(input) || input.length > 200)
          throw new Error("Supply an array of at most 200 events.");
        const tones = new Set([
          "blue",
          "green",
          "red",
          "orange",
          "purple",
          "yellow",
        ]);
        const events = input
          .map((event, index) => {
            if (
              event == null ||
              typeof event !== "object" ||
              typeof event.title !== "string"
            ) {
              throw new Error("Each event needs a title, start and end.");
            }
            const from = minutes(event.start),
              to = minutes(event.end);
            if (to <= from)
              throw new Error("An event must end after it starts.");
            if (event.detail != null && typeof event.detail !== "string")
              throw new Error("Event detail must be text.");
            return {
              ...event,
              index,
              from,
              to,
              tone: tones.has(event.tone) ? event.tone : "blue",
              lane: 0,
              lanes: 1,
            };
          })
          .filter((event) => event.from < end && event.to > start)
          .sort((a, b) => a.from - b.from || b.to - a.to);

        // Allocate interval lanes within each connected overlap group. Adjacent
        // events share a lane; a chain of overlaps shares one column count.
        let group = [],
          laneEnds = [],
          groupEnd = -1;
        const finishGroup = () => {
          for (const event of group) event.lanes = laneEnds.length;
        };
        for (const event of events) {
          if (event.from >= groupEnd) {
            finishGroup();
            group = [];
            laneEnds = [];
          }
          let lane = laneEnds.findIndex((until) => until <= event.from);
          if (lane < 0) lane = laneEnds.length;
          event.lane = lane;
          laneEnds[lane] = event.to;
          group.push(event);
          groupEnd = Math.max(event.to, groupEnd);
        }
        finishGroup();

        const locale = this.lang || document.documentElement.lang || "en";
        const weekday = new Intl.DateTimeFormat(locale, {
          weekday: "short",
          timeZone: "UTC",
        }).format(calendarDate);
        const fullDate = new Intl.DateTimeFormat(locale, {
          dateStyle: "full",
          timeZone: "UTC",
        }).format(calendarDate);
        const timeZone = this.getAttribute("time-zone");
        const ticks = [start];
        for (
          let tick = (Math.floor(start / 60) + 1) * 60;
          tick < end;
          tick += 60
        )
          ticks.push(tick);
        ticks.push(end);
        const labelTime = (time) =>
          \`\${String(Math.floor(time / 60)).padStart(2, "0")}:\${String(time % 60).padStart(2, "0")}\`;
        const compact = end - start > 240;
        // Size from full event durations; the window clips partial events
        // without letting a one-minute sliver stretch the entire time axis.
        const minimumHour = Math.max(
          0,
          ...events.map((event) => (28 * 60) / (event.to - event.from)),
        );
        const minimumTargetHour = Math.max(
          0,
          ...events.map((event) => (48 * 60) / (event.to - event.from)),
        );
        const hourMarkup = ticks
          .map(
            (tick) =>
              \`<div class="hour" style="--at:\${(tick - start) / 60}">\${now != null && now >= start && now <= end && Math.abs(tick - now) < 15 ? "" : \`<span>\${tick % 60 ? labelTime(tick) : tick / 60}</span>\`}</div>\`,
          )
          .join("");
        const interactive = this.hasAttribute("interactive");
        const eventMarkup = events
          .map((event) => {
            const label = escape(
              \`\${event.title}, \${event.start}-\${event.end}\${event.detail ? \`, \${event.detail}\` : ""}\`,
            );
            const body = \`button type="button"\${interactive ? \` data-event-index="\${event.index}"\` : ""} aria-label="\${label}" data-tooltip="\${label}"\`;
            return \`<li class="event\${now != null && event.to <= now ? " past" : ""}" style="--at:\${(event.from - start) / 60};--duration:\${(event.to - event.from) / 60};--lane:\${event.lane};--lanes:\${event.lanes};--tone:var(--\${event.tone})"><\${body} class="event-body cursor-interaction"><span class="event-content"><span class="title">\${escape(event.title)}</span>\${event.detail ? \`<span class="detail">\${escape(event.detail)}</span>\` : ""}</span>\${event.video ? '<svg class="video" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>' : ""}</button></li>\`;
          })
          .join("");
        const nowMarkup =
          now != null && now >= start && now <= end
            ? \`<div class="now" style="--at:\${(now - start) / 60}" role="img" aria-label="\${escape(labelTime(now))}"><span>\${labelTime(now)}</span></div>\`
            : "";
        shadow.innerHTML = \`<style>\${style}</style><section class="calendar" aria-label="\${escape(fullDate)}"><div class="layout"><div class="date"><span class="weekday">\${escape(weekday)}</span><span class="day">\${Number(date.slice(-2))}</span>\${timeZone ? \`<span class="context">\${escape(timeZone)}</span>\` : ""}</div><div class="axis\${compact ? " compact" : ""}" style="--hours:\${(end - start) / 60};--minimum-hour:\${minimumHour}px;--minimum-target-hour:\${minimumTargetHour}px">\${hourMarkup}<ol class="events">\${eventMarkup}</ol>\${nowMarkup}\${events.length ? "" : \`<span class="empty">\${escape(this.getAttribute("empty-label") ?? "No events")}</span>\`}</div></div></section>\`;
      } catch (error) {
        // Invalid model-authored input remains visible and recoverable through
        // the same attributes; never silently invent dates or drop events.
        shadow.innerHTML = \`<style>\${style}</style><div class="calendar" role="alert">\${escape(error instanceof Error ? error.message : "Invalid calendar data.")}</div>\`;
      }
    }
  }
  customElements.define("viz-calendar", Calendar);
})();
`})))()}var E;function D(){return(D=e((()=>{E=`// Standalone previews inspect declarations here. A Dashboard Page can present its own panel.
(() => {
  if (customElements.get("dash-sources")) return;

  const blocks = "dash-block[id], experimental-dash-block[id], [data-dashboard-block][id]";
  const template = document.createElement("template");
  template.innerHTML = \`
    <style>
      :host { display: inline-block; font: 400 14px/1.45 var(--font-sans, system-ui);
        color: var(--foreground, CanvasText); }
      *, *::before, *::after { box-sizing: border-box; }
      [hidden] { display: none !important; }
      button { font: inherit; color: inherit; background: transparent; border: 0; cursor: pointer; }
      button:focus-visible { outline: 2px solid var(--ring, Highlight); outline-offset: 2px; }
      .trigger { display: inline-flex; align-items: center; gap: 7px; padding: 5px 12px;
        border: 1px solid var(--border, #d5d5d5); border-radius: 99px;
        background: var(--background, Canvas); font-weight: 500; }
      button:hover { background: var(--secondary, ButtonFace); }
      svg { width: 16px; height: 16px; fill: none; stroke: currentColor;
        stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
      .panel { position: fixed; inset: 12px 12px 12px auto; margin: 0; padding: 0;
        width: min(350px, calc(100% - 24px)); height: calc(100% - 24px);
        overflow: auto; overscroll-behavior: contain; scrollbar-gutter: stable;
        background: var(--background, Canvas); color: var(--foreground, CanvasText);
        border: 1px solid var(--border, #d5d5d5); border-radius: 16px;
        box-shadow: 0 8px 32px #0002, 0 2px 8px #0001; z-index: 50; }
      @media (prefers-reduced-motion: no-preference) {
        .panel:popover-open { animation: slide-in 160ms ease-out; }
        @keyframes slide-in { from { opacity: 0; transform: translateX(16px); } }
      }
      header { position: sticky; top: 0; display: flex; align-items: center;
        justify-content: space-between; gap: 12px; padding: 14px 16px 10px;
        background: var(--background, Canvas); }
      h2, h3, h4, p { margin: 0; }
      h2, h3 { font-size: 16px; font-weight: 600; }
      h4, .kind, .back, .description { color: var(--muted-foreground, GrayText); }
      h4 { margin: 16px 0 6px; font-size: 12px; font-weight: 500; }
      .close { display: grid; place-items: center; width: 30px; height: 30px;
        border-radius: 99px; background: var(--secondary, ButtonFace); }
      main { padding: 2px 12px 20px; overflow-wrap: anywhere; }
      .back { display: flex; align-items: center; gap: 6px; margin: 0 0 12px;
        padding: 5px 7px; border-radius: 7px; font-size: 12px; }
      .back::before, .row::after { content: ""; width: 5px; height: 5px; flex: none;
        border-block-start: 1px solid; border-inline-end: 1px solid; transform: rotate(45deg); }
      .back::before { transform: rotate(-135deg); }
      .heading, .description, h4, pre, details { margin-inline: 6px; }
      .description { margin-top: 4px; }
      .row { width: 100%; display: flex; align-items: center; gap: 8px;
        padding: 10px 8px; border-radius: 8px; text-align: start; }
      .row::after { margin-inline-start: auto; color: var(--muted-foreground, GrayText); }
      .kind { font-size: 12px; }
      pre { margin-block: 0; padding: 10px; max-height: 220px; overflow: auto;
        white-space: pre-wrap; overflow-wrap: anywhere; font: 12px/1.5 ui-monospace, monospace;
        background: var(--secondary, ButtonFace); border-radius: 8px; }
      .table-wrap { overflow: auto; margin: 0 6px; border: 1px solid var(--border, #d5d5d5);
        border-radius: 8px; }
      table { width: 100%; border-collapse: collapse; font-size: 12px; }
      th, td { padding: 5px 7px; text-align: start; max-width: 24ch; white-space: nowrap;
        text-overflow: ellipsis; overflow: hidden; }
      th { font-weight: 500; background: var(--secondary, ButtonFace); }
      tr + tr { border-top: 1px solid var(--border, #d5d5d5); }
      .count { margin: 4px 6px; color: var(--muted-foreground, GrayText); font-size: 12px; }
      details { margin-block-start: 10px; }
      summary { cursor: pointer; }
      details pre { margin: 6px 0 0; }
    </style>
    <button class="trigger" type="button" aria-haspopup="dialog" aria-expanded="false">
      <svg aria-hidden="true" viewBox="0 0 20 20"><ellipse cx="10" cy="4.5" rx="6.5" ry="2.5"/>
        <path d="M3.5 4.5v5c0 3.3 13 3.3 13 0v-5M3.5 9.5v5c0 3.3 13 3.3 13 0v-5"/></svg>
      Sources
    </button>
    <section class="panel" role="dialog" aria-labelledby="sources-title" popover="manual" hidden>
      <header><h2 id="sources-title" tabindex="-1">Sources</h2>
        <button type="button" class="close" aria-label="Close sources">
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="m5 5 10 10M15 5 5 15"/></svg>
        </button>
      </header>
      <main></main>
    </section>\`;

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text != null) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function button(label, onClick, className = "row") {
    const node = element("button", label, className);
    node.type = "button";
    node.addEventListener("click", onClick);
    return node;
  }

  function blockBindings(block) {
    return new Set((block.getAttribute("sources") || "").split(/\\s+/).filter(Boolean));
  }

  function blockTitle(block) {
    return (
      block.getAttribute("heading") ||
      block.getAttribute("aria-label") ||
      block.querySelector("h1,h2,h3,h4,h5,h6")?.textContent?.trim() ||
      block.id
    );
  }

  function sourceKind(binding) {
    if (binding.type === "tool") {
      return binding.tool.startsWith("mcp__codex_apps__kepler_") ? "Kepler" : "Connector";
    }
    return { file: "File", image: "Image", json: "Inline JSON", library: "Library" }[binding.type];
  }

  function clipped(value, limit) {
    return value.length > limit ? value.slice(0, limit - 1) + "…" : value;
  }

  function isScalar(value) {
    return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
  }

  function renderPreview(section, value, rowsField) {
    section.replaceChildren();
    let records;
    if (rowsField === undefined && Array.isArray(value)) {
      records = value;
    } else {
      const key = rowsField === undefined ? "results" : rowsField.trim();
      if (!key || key.length > 64 || value == null || typeof value !== "object"
        || Array.isArray(value) || !Object.hasOwn(value, key)) return;
      records = value[key];
    }
    if (!Array.isArray(records)) return;
    // Include the final bucket, which often feeds the headline metric.
    const sample = records.length > 10 ? [...records.slice(0, 9), records.at(-1)] : records;
    const rows = sample.filter((row) => row && typeof row === "object" && !Array.isArray(row));
    const columns = new Set();
    for (const row of rows) {
      for (const key of Object.keys(row)) {
        if (isScalar(row[key])) columns.add(key);
        if (columns.size === 8) break;
      }
      if (columns.size === 8) break;
    }
    if (!columns.size) return;
    const table = element("table");
    table.setAttribute("aria-label", "Data preview");
    const header = table.createTHead().insertRow();
    for (const key of columns) {
      const label = element("th", clipped(key, 48));
      label.scope = "col";
      header.append(label);
    }
    const body = table.createTBody();
    for (const row of rows) {
      const record = body.insertRow();
      for (const key of columns) {
        record.insertCell().textContent =
          Object.hasOwn(row, key) && isScalar(row[key]) ? clipped(String(row[key]), 80) : "—";
      }
    }
    const container = element("div", null, "table-wrap");
    container.append(table);
    section.append(element("h4", "Data preview"), container);
    if (records.length > rows.length) {
      section.append(element("p", rows.length + " of " + records.length + " rows", "count"));
    }
  }

  class DashboardSources extends HTMLElement {
    #root = this.attachShadow({ mode: "open" });
    #panel;
    #body;
    #trigger;
    #returnFocus;
    #events;
    #unsubscribe;

    constructor() {
      super();
      this.#root.append(template.content.cloneNode(true));
      this.#panel = this.#root.querySelector(".panel");
      this.#body = this.#root.querySelector("main");
      this.#trigger = this.#root.querySelector(".trigger");
      this.#trigger.addEventListener("click", () => this.showAll());
      this.#root.querySelector(".close").addEventListener("click", () => this.close());
    }

    connectedCallback() {
      this.#events = new AbortController();
      const options = { signal: this.#events.signal };
      document.addEventListener(
        "sourceinspect",
        (event) => {
          if (window.openai?.sandboxDocumentState?.dashboardSourcePanel === true
            || event.defaultPrevented || document.querySelector("dash-sources") !== this) return;
          const block = event.target instanceof Element ? event.target.closest(blocks) : null;
          if (block != null && block.id === event.detail?.id) this.showBlock(block.id);
        },
        options,
      );
      window.addEventListener("openai:set_globals", (event) => {
        const state = event.detail?.globals?.sandboxDocumentState;
        if (state?.dashboardSourcePanel === true) {
          this.#trigger.setAttribute("aria-expanded", String(state.dashboardSourcesOpen === true));
        }
      }, options);
      document.addEventListener(
        "keydown",
        (event) => {
          if (event.key !== "Escape" || event.defaultPrevented || this.#panel.hidden) return;
          event.preventDefault();
          this.close();
        },
        options,
      );
    }

    disconnectedCallback() {
      this.#events.abort();
      this.#stopPreview();
      this.#panel.hidden = true;
      this.#trigger.setAttribute("aria-expanded", "false");
      this.#returnFocus = null;
    }

    close() {
      if (this.#panel.hidden) return;
      this.#stopPreview();
      this.#panel.hidePopover?.();
      this.#panel.hidden = true;
      this.#trigger.setAttribute("aria-expanded", "false");
      const focus = this.#returnFocus?.isConnected ? this.#returnFocus : this.#trigger;
      focus.focus({ preventScroll: true });
      this.#returnFocus = null;
    }

    #stopPreview() {
      this.#unsubscribe?.();
      this.#unsubscribe = null;
    }

    #open() {
      this.#stopPreview();
      const focused = this.#root.activeElement ?? document.activeElement;
      if (
        focused === this.#trigger ||
        (focused && !this.#root.contains(focused) && focused !== document.body)
      ) {
        this.#returnFocus = focused;
      }
      if (this.#panel.hidden) {
        this.#panel.hidden = false;
        this.#panel.showPopover?.();
        this.#trigger.setAttribute("aria-expanded", "true");
      }
      this.#body.replaceChildren();
      this.#panel.scrollTop = 0;
    }

    #heading(title) {
      const heading = element("h3", title, "heading");
      heading.tabIndex = -1;
      this.#body.append(
        button("All sources", () => this.showAll(), "back"),
        heading,
      );
      heading.focus({ preventScroll: true });
    }

    #bindings() {
      return window.openai?.visualization?.bindings ?? {};
    }

    #metadata(name) {
      return Array.from(document.querySelectorAll('meta[name="visualize-source"]')).find(
        (meta) => meta.content === name,
      )?.dataset;
    }

    #sourceRows(names) {
      const bindings = this.#bindings();
      let found = false;
      for (const name of names) {
        if (!Object.hasOwn(bindings, name)) continue;
        found = true;
        const row = button(this.#metadata(name)?.title || name, () => this.showSource(name));
        row.append(element("span", sourceKind(bindings[name]), "kind"));
        this.#body.append(row);
      }
      if (!found) this.#body.append(element("p", "No sources declared.", "description"));
    }

    #requestInspection(selection) {
      if (window.openai?.sandboxDocumentState?.dashboardSourcePanel !== true) return false;
      return !this.dispatchEvent(new CustomEvent("dashboard-source-inspection", {
        bubbles: true, composed: true, cancelable: true, detail: selection,
      }));
    }

    showAll() {
      if (this.#requestInspection({ kind: "all" })) return;
      this.#open();
      this.#sourceRows(Object.keys(this.#bindings()));
      this.#root.querySelector("h2").focus({ preventScroll: true });
    }

    showBlock(id) {
      const block = document.getElementById(id);
      if (!block?.matches(blocks) || this.#requestInspection({ kind: "block", id })) return;
      this.#open();
      this.#heading(blockTitle(block));
      const description = block.getAttribute("description");
      if (description) this.#body.append(element("p", description, "description"));
      this.#sourceRows(blockBindings(block));
    }

    showSource(name) {
      const bindings = this.#bindings();
      if (!Object.hasOwn(bindings, name) || this.#requestInspection({ kind: "source", id: name })) return;
      const binding = bindings[name];
      const metadata = this.#metadata(name);
      this.#open();
      this.#heading(metadata?.title || name);
      if (metadata?.description)
        this.#body.append(element("p", metadata.description, "description"));
      const entity = metadata?.entity?.trim();
      if (entity && entity.length <= 256) this.#body.append(element("p", entity, "kind description"));
      const field = (label, value) =>
        this.#body.append(element("h4", label), element("pre", value));
      if (metadata?.title && metadata.title !== name) field("Binding", name);
      if (binding.type === "tool") {
        const kind = sourceKind(binding);
        if (kind === "Kepler") this.#body.append(element("p", kind, "description"));
        else field("Connector tool", binding.tool);
        const { query } = binding.arguments;
        if (typeof query === "string") {
          field("Query", query);
        } else {
          field("Arguments", JSON.stringify(binding.arguments, null, 2));
        }
        const detail = element("details");
        detail.append(
          element("summary", "Tool details"),
          element("pre", JSON.stringify(binding, null, 2)),
        );
        this.#body.append(detail);
      } else if (binding.type === "file") {
        field("File", binding.path);
      } else if (binding.type === "image") {
        field("Image URL", binding.url);
      } else if (binding.type === "library") {
        field("Library file", binding.libraryFileId);
      } else if (binding.type === "json") {
        field("Inline JSON", JSON.stringify(binding.value, null, 2));
      }

      if (binding.type === "tool" || binding.type === "json") {
        const preview = element("section");
        this.#body.append(preview);
        this.#unsubscribe = window.openai?.visualization?.onData?.(name, (value) =>
          renderPreview(preview, value, metadata?.rows),
        );
      }

      const consumers = Array.from(document.querySelectorAll(blocks)).filter((block) =>
        blockBindings(block).has(name),
      );
      this.#body.append(element("h4", "Used by"));
      if (!consumers.length)
        this.#body.append(element("p", "No blocks declare this source.", "description"));
      for (const block of consumers) {
        this.#body.append(button(blockTitle(block), () => this.showBlock(block.id)));
      }
    }
  }

  customElements.define("dash-sources", DashboardSources);
})();
`})))()}var O;function k(){return(k=e((()=>{O=`/* oxlint-disable typescript/no-unsafe-argument, typescript/no-unsafe-call, typescript/no-unsafe-return */
// Runs inside the visualization sandbox, not the host webview.
(() => {
  const capability = "__CODEX_INLINE_VISUALIZATION_DOWNLOAD_CAPABILITY__";
  const callTool = globalThis.openai.callTool.bind(globalThis.openai);
  const anchorClick = Reflect.get(
    globalThis.HTMLAnchorElement.prototype,
    "click",
  );
  globalThis.document.currentScript?.remove();
  let isHandlingTrustedClick = false;
  let didDownload = false;

  const handleDownload = (anchor, event, waitForPropagation) => {
    const isUserActivated =
      event.isTrusted ||
      isHandlingTrustedClick ||
      globalThis.navigator.userActivation?.isActive === true;
    const startDownload = () => {
      if (
        event.defaultPrevented ||
        !isUserActivated ||
        didDownload ||
        !anchor.hasAttribute("download")
      ) {
        return;
      }

      let url;
      try {
        url = new globalThis.URL(anchor.href, globalThis.location.href);
      } catch {
        return;
      }
      if (url.protocol !== "blob:" && url.protocol !== "data:") {
        return;
      }

      const name = anchor.download.trim() || "download";
      didDownload = true;
      void globalThis
        .fetch(url.href)
        .then((response) => response.blob())
        .then((blob) =>
          callTool("__codex_inline_visualization_download__", {
            blob,
            capability,
            name,
          }),
        )
        .catch(() => {});
    };

    if (waitForPropagation) {
      globalThis.queueMicrotask(startDownload);
    } else {
      startDownload();
    }
  };

  globalThis.addEventListener(
    "click",
    (event) => {
      if (event.isTrusted) {
        isHandlingTrustedClick = true;
        didDownload = false;
        globalThis.queueMicrotask(() => {
          isHandlingTrustedClick = false;
        });
      }

      const anchor = event
        .composedPath()
        .find((target) => target instanceof globalThis.HTMLAnchorElement);
      if (anchor != null) {
        handleDownload(anchor, event, true);
      }
    },
    { capture: true },
  );

  globalThis.HTMLAnchorElement.prototype.click = function () {
    let event;
    const observeClick = (clickEvent) => {
      event = clickEvent;
    };
    this.addEventListener("click", observeClick, { capture: true, once: true });
    try {
      return Reflect.apply(anchorClick, this, []);
    } finally {
      this.removeEventListener("click", observeClick, true);
      if (event != null) {
        handleDownload(this, event, false);
      }
    }
  };
})();
`})))()}var A;function j(){return(j=e((()=>{A=`<!--__INLINE_VISUALIZATION_FRAGMENT__-->
<script>
(() => {
  let positioningReady = window.FloatingUIDOM
    ? Promise.resolve(window.FloatingUIDOM)
    : null;
  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => {
      script.remove();
      reject(new Error("Could not load tooltip positioning"));
    };
    document.head.appendChild(script);
  });
  const loadPositioning = async () => {
    const domUrl = "https://unpkg.com/@floating-ui/dom@1.7.4/dist/floating-ui.dom.umd.min.js";
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.as = "script";
    preload.href = domUrl;
    document.head.appendChild(preload);
    try {
      if (window.FloatingUICore == null) {
        await loadScript("https://unpkg.com/@floating-ui/core@1.7.3/dist/floating-ui.core.umd.min.js");
      }
      await loadScript(domUrl);
      return window.FloatingUIDOM;
    } finally {
      preload.remove();
    }
  };
  const getPositioning = () => positioningReady ??= loadPositioning().catch((error) => {
    positioningReady = null;
    throw error;
  });
  const tooltipPlacements = new Set(["top", "right", "bottom", "left"]);
  const tooltipId = \`codex-visualization-tooltip-\${
    window.crypto?.randomUUID?.() ?? Date.now().toString(36)
  }\`;
  const tooltipGap = 5;
  const hoverDelay = 700;
  const skipDelay = 300;
  let activeTrigger = null;
  let pendingTrigger = null;
  let tooltip = null;
  let openTimeout = null;
  let autoUpdateCleanup = null;
  let positionRequest = 0;
  let skipDelayUntil = 0;
  let lastPointerWasTouch = false;
  let pinnedByTouch = false;

  const getTrigger = (event) => {
    for (const target of event.composedPath()) {
      if (target?.nodeType === Node.ELEMENT_NODE) {
        const trigger = target.closest("[data-tooltip]");
        if (trigger) return trigger;
      }
    }
    return null;
  };
  const containsTarget = (trigger, target) =>
    target?.nodeType != null && trigger.contains(target);
  const getContent = (trigger) =>
    trigger.getAttribute("data-tooltip")?.trim() ?? "";
  const getPlacement = (trigger) => {
    const placement = trigger.getAttribute("data-tooltip-placement");
    return tooltipPlacements.has(placement) ? placement : "top";
  };
  const getTooltip = () => {
    if (tooltip == null) {
      tooltip = document.createElement("div");
      tooltip.id = tooltipId;
      tooltip.className = "tooltip";
      tooltip.setAttribute("role", "tooltip");
    }
    return tooltip;
  };
  const setDescribedBy = (trigger, described) => {
    const ids = new Set(
      (trigger.getAttribute("aria-describedby") ?? "")
        .split(/\\s+/)
        .filter(Boolean),
    );
    if (described) {
      ids.add(tooltipId);
    } else {
      ids.delete(tooltipId);
    }
    if (ids.size === 0) {
      trigger.removeAttribute("aria-describedby");
    } else {
      trigger.setAttribute("aria-describedby", [...ids].join(" "));
    }
  };
  const clearOpenTimeout = () => {
    if (openTimeout != null) {
      window.clearTimeout(openTimeout);
      openTimeout = null;
    }
    pendingTrigger = null;
  };
  const closeTooltip = (activateSkipDelay = true) => {
    clearOpenTimeout();
    pinnedByTouch = false;
    positionRequest += 1;
    autoUpdateCleanup?.();
    autoUpdateCleanup = null;
    if (activeTrigger == null) {
      return;
    }
    setDescribedBy(activeTrigger, false);
    activeTrigger = null;
    tooltip?.remove();
    if (activateSkipDelay) {
      skipDelayUntil = Date.now() + skipDelay;
    }
  };
  const updatePosition = (trigger, floating, { computePosition, flip, offset, shift, size }) => {
    const request = ++positionRequest;
    void computePosition(trigger, floating, {
      middleware: [
        offset(tooltipGap),
        flip({ padding: tooltipGap }),
        shift({ padding: tooltipGap }),
        size({
          padding: tooltipGap,
          apply({ availableHeight, availableWidth, elements }) {
            elements.floating.style.setProperty(
              "--tooltip-available-width",
              \`\${Math.max(0, availableWidth)}px\`,
            );
            elements.floating.style.setProperty(
              "--tooltip-available-height",
              \`\${Math.max(0, availableHeight)}px\`,
            );
          },
        }),
      ],
      placement: getPlacement(trigger),
      strategy: "fixed",
    })
      .then(({ x, y }) => {
        if (activeTrigger !== trigger || request !== positionRequest) {
          return;
        }
        const scale = window.devicePixelRatio || 1;
        floating.style.transform = \`translate(\${Math.round(x * scale) / scale}px, \${Math.round(y * scale) / scale}px)\`;
        floating.style.visibility = "visible";
      })
      .catch(() => {
        if (activeTrigger === trigger && request === positionRequest) {
          closeTooltip(false);
        }
      });
  };
  const openTooltip = (trigger) => {
    const content = getContent(trigger);
    if (!trigger.isConnected || content.length === 0) {
      return;
    }
    clearOpenTimeout();
    if (activeTrigger === trigger) {
      return;
    }
    closeTooltip();
    const floating = getTooltip();
    floating.textContent = content;
    floating.style.visibility = "hidden";
    floating.style.transform = "translate(0, 0)";
    document.body.appendChild(floating);
    activeTrigger = trigger;
    setDescribedBy(trigger, true);
    const request = positionRequest;
    void getPositioning().then((positioning) => {
      if (request !== positionRequest || !trigger.isConnected) return;
      autoUpdateCleanup = positioning.autoUpdate(trigger, floating, () => {
        updatePosition(trigger, floating, positioning);
      });
    }).catch(() => {
      if (request === positionRequest) closeTooltip(false);
    });
  };
  const requestOpen = (trigger, immediate = false) => {
    if (
      getContent(trigger).length === 0 ||
      activeTrigger === trigger ||
      pendingTrigger === trigger
    ) {
      return;
    }
    clearOpenTimeout();
    pendingTrigger = trigger;
    const delay =
      immediate || activeTrigger != null || Date.now() < skipDelayUntil
        ? 0
        : hoverDelay;
    if (delay === 0) {
      openTooltip(trigger);
      return;
    }
    openTimeout = window.setTimeout(() => {
      openTimeout = null;
      pendingTrigger = null;
      openTooltip(trigger);
    }, delay);
  };
  const handlePointerOpen = (event) => {
    if (event.pointerType === "touch") {
      return;
    }
    const trigger = getTrigger(event);
    if (trigger == null || containsTarget(trigger, event.relatedTarget)) {
      return;
    }
    requestOpen(trigger);
  };
  const handlePointer = (event) => {
    lastPointerWasTouch =
      event.type === "pointerdown" && event.pointerType === "touch";
  };
  const handleTouchClick = (event) => {
    const isTouch = event.pointerType === "touch" || lastPointerWasTouch;
    lastPointerWasTouch = false;
    if (!isTouch || event.detail === 0) {
      return;
    }
    const trigger = getTrigger(event);
    if (
      trigger == null ||
      !trigger.isConnected ||
      getContent(trigger).length === 0 ||
      (pinnedByTouch && activeTrigger === trigger)
    ) {
      if (pinnedByTouch) {
        closeTooltip();
      }
      return;
    }
    openTooltip(trigger);
    pinnedByTouch = activeTrigger === trigger;
    window.setTimeout(() => {
      if (activeTrigger === trigger && !trigger.isConnected) {
        closeTooltip(false);
      }
    }, 0);
  };
  const handleLeave = (event) => {
    if (pinnedByTouch) {
      return;
    }
    const trigger = getTrigger(event);
    if (trigger == null || containsTarget(trigger, event.relatedTarget)) {
      return;
    }
    if (activeTrigger === trigger || pendingTrigger === trigger) {
      closeTooltip();
    }
  };
  const handleFocusIn = (event) => {
    const trigger = getTrigger(event);
    if (trigger?.matches(":focus-visible")) {
      requestOpen(trigger, true);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeTooltip();
    }
  };
  const handleContextMenu = (event) => {
    lastPointerWasTouch = false;
    const trigger = getTrigger(event);
    if (activeTrigger === trigger || pendingTrigger === trigger) {
      closeTooltip();
    }
  };
  const handlers = {
    pointerover: handlePointerOpen,
    pointerdown: handlePointer,
    pointercancel: handlePointer,
    click: handleTouchClick,
    pointerout: handleLeave,
    focusin: handleFocusIn,
    focusout: handleLeave,
    keydown: handleKeyDown,
    contextmenu: handleContextMenu,
  };
  const roots = new Map();
  const handledEvents = new WeakSet();
  const handleEvent = (event) => {
    if (handledEvents.has(event)) return;
    handledEvents.add(event);
    handlers[event.type](event);
  };
  const discoverRoots = (node) => {
    if (node.shadowRoot) listen(node.shadowRoot);
    for (const element of node.querySelectorAll("*")) {
      if (element.shadowRoot) listen(element.shadowRoot);
    }
  };
  const listen = (root) => {
    if (roots.has(root)) return;
    for (const type of Object.keys(handlers)) root.addEventListener(type, handleEvent);
    const observer = new window.MutationObserver((records) => {
      for (const { addedNodes } of records) {
        for (const node of addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) discoverRoots(node);
        }
      }
      for (const [root, cleanup] of roots) {
        if (root.host && !root.host.isConnected) {
          cleanup();
          roots.delete(root);
        }
      }
      if (activeTrigger && !activeTrigger.isConnected) closeTooltip(false);
    });
    observer.observe(root, { childList: true, subtree: true });
    roots.set(root, () => {
      observer.disconnect();
      for (const type of Object.keys(handlers)) root.removeEventListener(type, handleEvent);
    });
    discoverRoots(root);
  };
  const destroy = () => {
    closeTooltip(false);
    lastPointerWasTouch = false;
    for (const cleanup of roots.values()) cleanup();
    roots.clear();
    tooltip = null;
  };

  // Events between children of one shadow root never reach the document.
  listen(document);
  window.addEventListener("pagehide", destroy, { once: true });
})();
<\/script>
<script id="codex-visualization-tabs">
(() => {
  const selector = '.nav[role="tablist"] [role="tab"]';
  const disabled = ':disabled,[aria-disabled="true"]';
  const selectTab = (selected) => {
    const panelId = selected.getAttribute("aria-controls");
    for (const tab of selected.closest('[role="tablist"]').querySelectorAll('[role="tab"]')) {
      const active = tab === selected;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      const id = tab.getAttribute("aria-controls");
      const panel = id && document.getElementById(id);
      if (panel != null) {
        panel.hidden = id !== panelId;
        if (!panel.hidden && selected.id) {
          panel.setAttribute("aria-labelledby", selected.id);
        }
      }
    }
  };
  const interact = (event) => {
    const tab = event.target?.closest?.(selector);
    if (event.defaultPrevented || tab == null || tab.matches(disabled)) {
      return;
    }
    if (event.type === "click") {
      selectTab(tab);
      return;
    }
    const tabs = Array.from(
      tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]'),
    ).filter((candidate) => !candidate.matches(disabled));
    const current = tabs.indexOf(tab);
    let next;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (current + 1) % tabs.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (current + tabs.length - 1) % tabs.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = tabs.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    tabs[next].focus();
    selectTab(tabs[next]);
  };

  for (const list of document.querySelectorAll('.nav[role="tablist"]')) {
    const selected =
      list.querySelector('[role="tab"][aria-selected="true"]') ??
      list.querySelector('[role="tab"].active') ??
      list.querySelector('[role="tab"]');
    if (selected != null) {
      selectTab(selected);
    }
  }
  document.addEventListener("click", interact);
  document.addEventListener("keydown", interact);
  window.addEventListener("pagehide", () => {
    document.removeEventListener("click", interact);
    document.removeEventListener("keydown", interact);
  }, { once: true });
})();
<\/script>
<script id="codex-visualization-carousel">
  (() => {
    for (const root of document.querySelectorAll(".viz-carousel")) {
      const panels = Array.from(
        root.querySelectorAll(":scope > [data-variant]"),
      );
      if (panels.length === 0) {
        continue;
      }
      root.setAttribute("role", "group");
      panels.forEach((panel, index) => {
        panel.hidden = index !== 0;
        panel.setAttribute("role", "group");
        if (!panel.hasAttribute("aria-label")) {
          panel.setAttribute("aria-label", panel.dataset.variant);
        }
      });
      root.dataset.activeVariant = panels[0].dataset.variant;
      if (panels.length === 1) {
        continue;
      }

      const controls = document.createElement("div");
      controls.className = "viz-carousel-controls";
      // Portable copy of the settings dropdown's legacy glyph; no 14px icon-package preset matches it.
      // https://github.com/openai/openai/blob/master/codex/codex-apps/webview/src/icons/chevron.svg
      controls.innerHTML = \`
      <button type="button" class="viz-carousel-previous cursor-interaction"><i data-lucide="chevron-left" aria-hidden="true"></i></button>
      <details class="viz-carousel-picker">
        <summary class="cursor-interaction">
          <span class="viz-carousel-count tabular-nums"></span>
          <span class="viz-carousel-name"></span>
          <svg class="viz-carousel-caret" width="14" height="14" viewBox="0 0 20 21" fill="none" aria-hidden="true" focusable="false">
            <path d="M15.2793 7.71101C15.539 7.45131 15.961 7.45131 16.2207 7.71101C16.4804 7.97071 16.4804 8.39272 16.2207 8.65242L10.4707 14.4024C10.211 14.6621 9.78902 14.6621 9.52932 14.4024L3.77932 8.65242L3.69436 8.54792C3.52385 8.28979 3.55205 7.93828 3.77932 7.71101C4.00659 7.48374 4.3581 7.45554 4.61623 7.62605L4.72073 7.71101L10 12.9903L15.2793 7.71101Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" />
          </svg>
        </summary>
        <div class="viz-carousel-options"></div>
      </details>
      <button type="button" class="viz-carousel-next cursor-interaction"><i data-lucide="chevron-right" aria-hidden="true"></i></button>\`;
      const previous = controls.querySelector(".viz-carousel-previous");
      const next = controls.querySelector(".viz-carousel-next");
      const picker = controls.querySelector(".viz-carousel-picker");
      const summary = picker.querySelector("summary");
      const count = controls.querySelector(".viz-carousel-count");
      const name = controls.querySelector(".viz-carousel-name");
      const options = controls.querySelector(".viz-carousel-options");
      const status = document.createElement("span");
      status.className = "sr-only";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      status.setAttribute("aria-atomic", "true");
      previous.setAttribute(
        "aria-label",
        root.dataset.previousLabel ?? "Previous variant",
      );
      next.setAttribute("aria-label", root.dataset.nextLabel ?? "Next variant");

      let active = 0;
      let mousePointerId = null;
      let summaryPointerHandled = false;
      summary.addEventListener("pointerdown", (event) => {
        summaryPointerHandled =
          event.pointerType === "mouse" && event.button === 0 && !event.ctrlKey;
        if (!summaryPointerHandled) {
          return;
        }
        event.preventDefault();
        summary.focus({ preventScroll: true });
        picker.open = !picker.open;
        mousePointerId = picker.open ? event.pointerId : null;
      });
      summary.addEventListener("click", (event) => {
        if (summaryPointerHandled && event.detail > 0) {
          event.preventDefault();
        }
      });
      const choices = panels.map((panel, index) => {
        const choice = document.createElement("button");
        choice.type = "button";
        choice.className = "cursor-interaction";
        choice.textContent = panel.dataset.variant;
        choice.addEventListener("click", () => {
          select(index);
          summary.focus();
        });
        choice.addEventListener("pointerup", (event) => {
          if (
            picker.open &&
            event.pointerType === "mouse" &&
            event.button === 0 &&
            event.pointerId === mousePointerId
          ) {
            choice.click();
          }
        });
        options.appendChild(choice);
        return choice;
      });
      const select = (index) => {
        const changed = active !== index;
        active = index;
        panels.forEach((panel, position) => {
          panel.hidden = position !== active;
          choices[position].setAttribute(
            "aria-current",
            String(position === active),
          );
        });
        root.dataset.activeVariant = panels[active].dataset.variant;
        count.textContent = \`\${active + 1} / \${panels.length}\`;
        name.textContent = panels[active].dataset.variant;
        picker.open = false;
        mousePointerId = null;
        if (changed) {
          status.textContent = \`\${count.textContent}: \${name.textContent}\`;
        }
      };
      previous.addEventListener("click", () =>
        select((active + panels.length - 1) % panels.length),
      );
      next.addEventListener("click", () =>
        select((active + 1) % panels.length),
      );
      picker.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && picker.open) {
          event.preventDefault();
          picker.open = false;
          mousePointerId = null;
          summary.focus();
          return;
        }
        if (event.altKey || event.ctrlKey || event.metaKey) {
          return;
        }
        const index = choices.indexOf(document.activeElement);
        let nextIndex;
        if (event.key === "ArrowDown") {
          nextIndex = index < 0 ? active : (index + 1) % choices.length;
        } else if (event.key === "ArrowUp") {
          nextIndex = index < 0 ? active : (index + choices.length - 1) % choices.length;
        } else if (picker.open && event.key === "Home") {
          nextIndex = 0;
        } else if (picker.open && event.key === "End") {
          nextIndex = choices.length - 1;
        } else {
          return;
        }
        event.preventDefault();
        picker.open = true;
        choices[nextIndex].focus();
      });
      picker.addEventListener("focusout", (event) => {
        if (!picker.contains(event.relatedTarget)) {
          picker.open = false;
          mousePointerId = null;
        }
      });
      const dismiss = (event) => {
        if (!summary.contains(event.target)) {
          mousePointerId = null;
        }
        if (!picker.contains(event.target)) {
          picker.open = false;
        }
      };
      const endPointerSelection = () => {
        mousePointerId = null;
      };
      const sizePicker = () => {
        root.style.setProperty(
          "--viz-carousel-picker-height",
          \`\${picker.open ? options.offsetHeight : 0}px\`,
        );
      };
      picker.addEventListener("toggle", sizePicker);
      window.addEventListener("resize", sizePicker);
      document.addEventListener("pointerdown", dismiss);
      document.addEventListener("pointerup", endPointerSelection);
      document.addEventListener("pointercancel", endPointerSelection);
      window.addEventListener("blur", endPointerSelection);
      window.addEventListener(
        "pagehide",
        () => {
          document.removeEventListener("pointerdown", dismiss);
          document.removeEventListener("pointerup", endPointerSelection);
          document.removeEventListener("pointercancel", endPointerSelection);
          window.removeEventListener("blur", endPointerSelection);
          window.removeEventListener("resize", sizePicker);
        },
        { once: true },
      );
      root.append(controls, status);
      select(0);
    }
  })();
<\/script>
<script id="codex-visualization-lucide" async src="https://unpkg.com/lucide@1.17.0/dist/umd/lucide.js"><\/script>
<script>
(() => {
  const initialize = () => {
    globalThis.lucide?.createIcons({ attrs: { width: 16, height: 16 } });
  };
  if (globalThis.lucide != null) {
    initialize();
    return;
  }
  document
    .getElementById("codex-visualization-lucide")
    ?.addEventListener("load", initialize, { once: true });
})();
<\/script>
`})))()}function ne(e,t){if(!e.includes(`data-srcdoc`)||!e.includes(`codex-visualization-widget-state`))return e;let n=(0,M.parse)(e,{comment:!0}),i=n.querySelector(`iframe#codex-visualization[data-srcdoc]`);if(i?.getAttribute(`sandbox`)!==`allow-scripts`||i.hasAttribute(`src`)||i.hasAttribute(`srcdoc`))return e;let a=i.getAttribute(`data-srcdoc`);if(a==null)return e;let o=(0,M.parse)(a,{comment:!0}),s=o.querySelector(`script#codex-visualization-widget-state[type="application/json"]`),c=o.querySelector(`style`);if(s==null||c==null||!c.textContent.includes(`--background`)||!c.textContent.includes(`--foreground`)||o.getElementById(N)!=null)return e;let l=JSON.stringify(t==null?null:{visualizationTheme:t.visualizationTheme,visualizationStyleVariables:t.visualizationStyleVariables}).replaceAll(`<`,`\\u003c`);return c.insertAdjacentHTML(`afterend`,`<script id="${N}">${F.replace(P,()=>l)}<\/script>`),i.setAttributes(Object.fromEntries(Object.entries(i.attributes).map(([e,t])=>[e,r(e.toLowerCase()===`data-srcdoc`?o.toString():t).replaceAll(`\\`,`&#92;`)]))),i.insertAdjacentHTML(`afterend`,`<script>${I.replace(P,()=>l)}<\/script>`),n.toString()}var M,N,P,F,I;function L(){return(L=e((()=>{t(),M=n(),N=`codex-visualization-standalone-theme`,P=`__CODEX_STANDALONE_INITIAL_THEME__`,F=String.raw`
(() => {
  let theme = __CODEX_STANDALONE_INITIAL_THEME__;
  const style = document.createElement("style");
  style.textContent = ":root {}";
  document.currentScript.before(style);
  const defaults = style.sheet.cssRules[0].style;
  const apply = (globals) => {
    if (theme == null) return;
    for (const property of Array.from(defaults)) {
      defaults.removeProperty(property);
    }
    for (const [property, value] of Object.entries(theme.visualizationStyleVariables)) {
      defaults.setProperty(property, value);
    }
    document.documentElement.dataset.theme = theme.visualizationTheme;
    document.documentElement.style.colorScheme = theme.visualizationTheme;
    Object.assign(globals, theme, { theme: theme.visualizationTheme });
  };
  // Older exports republish their system theme when it changes. Keep their
  // state/link bridge, but expose the embedding host's theme to chart listeners.
  globalThis.addEventListener("openai:set_globals", (event) => {
    if (event.detail?.globals != null) apply(event.detail.globals);
  }, { capture: true });
  globalThis.addEventListener("message", (event) => {
    if (event.source !== globalThis.parent ||
        event.data?.type !== "codex-visualization-standalone-theme") return;
    const next = event.data.theme;
    if ((next?.visualizationTheme !== "light" && next?.visualizationTheme !== "dark") ||
        next.visualizationStyleVariables == null ||
        typeof next.visualizationStyleVariables !== "object") return;
    const entries = Object.entries(next.visualizationStyleVariables);
    if (entries.length > 128 || entries.some(([key, value]) =>
      !/^--[a-z0-9-]+$/i.test(key) || typeof value !== "string" || value.length > 4096)) return;
    theme = {
      visualizationTheme: next.visualizationTheme,
      visualizationStyleVariables: Object.fromEntries(entries),
    };
    globalThis.openai ??= {};
    apply(globalThis.openai);
    globalThis.dispatchEvent(new CustomEvent("openai:set_globals", {
      detail: { globals: globalThis.openai },
    }));
  });
  globalThis.openai ??= {};
  apply(globalThis.openai);
})();`,I=String.raw`
(() => {
  const frame = document.getElementById("codex-visualization");
  let theme = __CODEX_STANDALONE_INITIAL_THEME__;
  const send = () => {
    if (theme != null) frame.contentWindow?.postMessage({
      type: "codex-visualization-standalone-theme", theme,
    }, "*");
  };
  const update = (event) => {
    const globals = event.detail?.globals;
    if (globals?.visualizationTheme == null || globals.visualizationStyleVariables == null) return;
    theme = {
      visualizationTheme: globals.visualizationTheme,
      visualizationStyleVariables: globals.visualizationStyleVariables,
    };
    send();
  };
  frame.addEventListener("load", send);
  globalThis.addEventListener("openai:set_globals", update);
  globalThis.addEventListener("pagehide", () => {
    frame.removeEventListener("load", send);
    globalThis.removeEventListener("openai:set_globals", update);
  }, { once: true });
})();`})))()}var R;function z(){return(z=e((()=>{R=`/* oxlint-disable typescript/no-unsafe-call -- openai.callTool is supplied by the isolated sandbox, not the host webview. */
(() => {
  /** @param {WheelEvent} event */
  const forwardWheel = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    void globalThis.openai
      .callTool("__codex_inline_visualization_wheel__", {
        clientX: event.clientX,
        clientY: event.clientY,
        deltaX: event.deltaX,
        deltaY: event.deltaY,
        deltaMode: event.deltaMode,
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
      })
      .catch(() => {});
  };
  globalThis.addEventListener("wheel", forwardWheel, {
    capture: true,
    passive: false,
  });
  globalThis.addEventListener(
    "pagehide",
    () => {
      globalThis.removeEventListener("wheel", forwardWheel, true);
    },
    { once: true },
  );
})();
`})))()}function B(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function re(e){if(!/<dash-sources(?=[\s/>])/i.test(e))return``;let t=document.createElement(`template`);return t.innerHTML=e,t.content.querySelector(`dash-sources`)==null?``:`<script>${(e.includes(`/plugins/visualize/widgets/`)&&u(e)?`document.addEventListener("DOMContentLoaded", () => {${E}}, { once: true });`:E).replaceAll(`<\/script`,`<\\/script`)}<\/script>`}function ie(e,{allowAnnotations:t=!1,calendarRuntime:n=w,dashboard:r=!1,initialGlobals:i,downloadCapability:o,innerKit:s=A,dataBindings:c,lockDocumentOverflow:l=!0,reportToHost:u=!0,forwardWheel:d=!1,streaming:f=!1,styles:p=`:root {
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
  --font-size-base: var(--font-text-md-size, 16px);
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
  --font-sans:
    -apple-system-body, ui-sans-serif, -apple-system, system-ui, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  --font-mono:
    ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono",
    monospace;
  --font-size-normal: max(11px, var(--font-size-base));
  --font-size-tooltip: calc(var(--font-size-base) - 1px);
  --font-size-small: max(11px, calc(var(--font-size-base) - 2px));
  --font-size-h1: calc(var(--font-size-normal) * 1.7142857143);
  --font-size-h2: calc(var(--font-size-normal) * 1.4285714286);
  --font-size-h3: calc(var(--font-size-normal) * 1.2857142857);
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --icon-size: 16px;
  --line-height-normal: calc(var(--font-size-normal) * 1.5);
  --line-height-tooltip: calc(var(--font-size-tooltip) * 1.4285714286);
  --line-height-small: calc(var(--font-size-small) + 4px);
  --corner-shape: round;
  --radius: var(--border-radius-lg, 8px);
  --radius-sm: calc(var(--radius) * 0.5);
  --radius-md: calc(var(--radius) * 0.75);
  --radius-lg: var(--radius);
  --radius-2xl: calc(var(--radius) * 2);
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
  -webkit-font-smoothing: antialiased;
  font-size: var(--font-size-base);
  line-height: calc(var(--font-size-base) * 1.625);
  font-weight: var(--font-weight-normal);
}

.cursor-interaction {
  cursor: var(--cursor-interaction, pointer);
}

a {
  color: color-mix(in srgb, var(--viz-accent) 80%, var(--viz-text) 20%);
  cursor: var(--cursor-interaction, pointer);
  text-decoration: none;
  text-underline-offset: 2px;
  font-weight: inherit;
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
p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
.table {
  font-family: var(--font-sans);
}

h1 {
  font-size: calc(var(--font-size-base) * 1.5);
  line-height: 1.3333333333;
}

h2 {
  font-size: calc(var(--font-size-base) * 1.25);
  line-height: 1.4;
}
h3 {
  font-size: calc(var(--font-size-base) * 1.125);
  line-height: 1.5555555556;
}
h4 {
  font-size: var(--font-size-base);
  line-height: 1.5;
}
h5,
h6 {
  font-size: var(--font-size-base);
  line-height: calc(var(--font-size-base) * 1.625);
}

h1,
h2,
h3,
h4,
h5,
h6,
b,
strong,
th {
  font-weight: 600;
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
pre,
pre code {
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 20px;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
}

.table {
  width: 100%;
  color: var(--foreground);
  font: inherit;
  text-align: start;
  border-collapse: separate;
  border-spacing: 0;
  font-size: calc(var(--font-size-base) * 0.875);
  line-height: calc(var(--font-size-base) * 1.625);
  font-family: var(--font-sans);
}

.table :is(th, td) {
  padding-block: 10px;
  padding-inline: 0 24px;
  overflow-wrap: anywhere;
  border-bottom: 1px solid var(--border);
  text-align: start;
  vertical-align: top;
  border-bottom-color: color-mix(in srgb, var(--foreground) 5%, transparent);
}
.table :is(th, td):not(:last-child) {
  padding-inline-end: calc(var(--font-size-base) * 1.5);
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

.table thead :is(th, td) {
  border-bottom-color: var(--border-strong, var(--input));
  padding-block: calc(var(--font-size-base) / 2);
  line-height: var(--font-size-base);
}

.table tbody tr:last-child :is(th, td) {
  border-bottom: 0;
}
.table tbody :is(th, td) {
  padding-block: calc(var(--font-size-base) * 0.625);
}

.table.table-sm :is(th, td) {
  padding-block: 8px;
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
  border: 1px solid var(--border);
  corner-shape: var(--corner-shape);
  overflow-wrap: break-word;
  white-space: normal;
  pointer-events: none;
  user-select: none;
  font-family: var(--font-sans);
  padding: 5px 12px;
  border-color: color-mix(
    in oklab,
    light-dark(var(--primary-foreground), var(--foreground)) 5%,
    transparent
  );
  border-radius: var(--radius-2xl);
  color: light-dark(var(--primary-foreground), var(--foreground));
  background: light-dark(var(--foreground), var(--popover));
  box-shadow: 0 8px 18px rgb(15 23 42 / 20%);
  letter-spacing: -0.15px;
  font-size: calc(var(--font-size-base) * 14 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 14 / 16), 1px);
  font-weight: 600;
  line-height: 18px;
  text-align: center;
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
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  color: color-mix(in srgb, var(--foreground) 40%, var(--muted-foreground));
  background: color-mix(in srgb, var(--foreground) 5%, transparent);
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-base) * 14 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 14 / 16), 1px);
  font-weight: var(--font-weight-normal);
  line-height: 1;
}

small,
.text-small {
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

/* Match inline alignment without overriding a containing flex or grid layout. */
.btn,
.nav-link,
.form-control,
.form-select,
.form-range,
.form-check {
  vertical-align: middle;
}

.btn,
.nav-link {
  --btn-size: calc(12px + 2 * var(--control-spacing, 12px));
  appearance: button;
  display: inline-flex;
  inline-size: fit-content;
  max-inline-size: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0;
  padding: 0 8px;
  -webkit-app-region: no-drag;
  border: 1px solid var(--input);
  corner-shape: var(--corner-shape);
  cursor: var(--cursor-interaction, pointer);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: inherit;
  font-family: var(--font-sans);
  height: fit-content;
  min-height: var(--btn-size);
  padding-inline: var(--control-spacing, 12px);
  border-color: transparent;
  border-radius: var(--radius-full);
  color: var(--foreground);
  background: color-mix(in srgb, var(--foreground) 5%, transparent);
  font-size: calc(var(--font-size-base) * 14 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 14 / 16), 1px);
  font-weight: var(--font-weight-normal);
  line-height: 18px;
}

.btn {
  border-color: var(--border);
  color: var(--secondary-foreground);
  background: var(--secondary);
}

/* Codex Button size="compact"; appearance stays with the button variant. */
.btn-sm {
  --btn-size: 24px;
  padding-inline: 8px;
  font-size: calc(var(--font-size-base) * 12 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 12 / 16), 1px);
  line-height: 16px;
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

.btn:not(:disabled):hover {
  background: light-dark(
    color-mix(in srgb, var(--foreground) 5.5%, transparent),
    color-mix(in srgb, var(--foreground) 8%, transparent)
  );
}

.nav-link:not(:disabled):not([aria-disabled="true"]):hover {
  background: color-mix(in srgb, var(--foreground) 10%, transparent);
}

.btn-primary {
  border-color: var(--border);
  color: var(--primary-foreground);
  background: var(--foreground);
  background-clip: border-box;
}

.btn-primary .text-muted {
  color: color-mix(in srgb, var(--primary-foreground) 50%, transparent);
}

.btn-primary:not(:disabled):hover {
  background: color-mix(in srgb, var(--foreground) 80%, transparent);
  background-clip: border-box;
}

.btn-ghost {
  border-color: transparent;
  color: var(--muted-foreground);
  background: transparent;
}

.btn-ghost:not(:disabled):hover {
  color: var(--muted-foreground);
  background: light-dark(
    color-mix(in srgb, var(--foreground) 5.5%, transparent),
    color-mix(in srgb, var(--foreground) 8%, transparent)
  );
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
  padding: 0 8px;
  outline: none;
  border: 1px solid var(--input);
  corner-shape: var(--corner-shape);
  color: var(--foreground);
  font-family: var(--font-sans);
  height: calc(12px + 2 * var(--control-spacing, 12px));
  min-height: calc(12px + 2 * var(--control-spacing, 12px));
  padding-inline: calc(4px + var(--control-spacing, 12px) / 2);
  border-color: var(--input);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--popover) 96%, transparent);
  font-size: calc(var(--font-size-base) * 14 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 14 / 16), 1px);
  font-weight: var(--font-weight-normal);
  line-height: 1.4285714286;
}
.form-control:is(
  [type="file"],
  [type="date"],
  [type="datetime-local"],
  [type="month"],
  [type="week"],
  [type="color"]
) {
  height: calc(12px + 2 * var(--control-spacing, 12px));
  min-height: calc(12px + 2 * var(--control-spacing, 12px));
  line-height: 18px;
}
.form-control:is(
  [type="date"],
  [type="datetime-local"],
  [type="month"],
  [type="week"]
) {
  padding-inline: var(--control-spacing, 12px);
}

.form-control::placeholder {
  color: var(--muted-foreground);
}

.form-control[type="file"] {
  overflow: hidden;
  cursor: var(--cursor-interaction, pointer);
  padding: 0;
}

.form-control[type="file"]::file-selector-button {
  padding: 0 8px;
  border: 0;
  border-right: 1px solid var(--input);
  color: var(--secondary-foreground);
  background: var(--secondary);
  cursor: inherit;
  font: inherit;
  min-height: calc(10px + 2 * var(--control-spacing, 12px));
  padding-inline: var(--control-spacing, 12px);
  margin-inline-end: var(--control-spacing, 12px);
}

.form-control[type="file"]:not(:disabled):hover::file-selector-button {
  background: color-mix(in srgb, var(--foreground) 6%, var(--secondary));
}

.form-control-color[type="color"] {
  width: 40px;
  height: calc(12px + 2 * var(--control-spacing, 12px));
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
  resize: vertical;
  min-height: 96px;
  padding: 8px 10px;
}

.form-control:focus-visible {
  border-color: var(--ring);
  box-shadow: none;
}
.form-control:disabled {
  color: var(--muted-foreground);
  background: color-mix(in srgb, var(--foreground) 5%, transparent);
  opacity: 1;
}
.form-control[aria-invalid="true"] {
  border-color: var(--red);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--red) 20%, transparent);
}

.form-control:disabled,
.form-select:disabled {
  cursor: not-allowed;
}

.form-select {
  appearance: none;
  display: block;
  width: 100%;
  height: fit-content;
  min-height: calc(12px + 2 * var(--control-spacing, 12px));
  margin: 0;
  /* The secondary icon role is 14px at compact density and 16px at web density. */
  --icon-size: calc(10px + var(--control-spacing, 12px) / 2);
  /* Settings dropdowns retain a 12px inset and a 4px text-to-chevron gap. */
  padding: 0 calc(16px + var(--icon-size)) 0 12px;
  outline: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  corner-shape: var(--corner-shape);
  color: var(--foreground);
  background-color: var(--secondary);
  background-image:
    linear-gradient(
      45deg,
      transparent calc(50% - 0.6px),
      var(--muted-foreground) calc(50% - 0.6px) calc(50% + 0.6px),
      transparent calc(50% + 0.6px)
    ),
    linear-gradient(
      135deg,
      transparent calc(50% - 0.6px),
      var(--muted-foreground) calc(50% - 0.6px) calc(50% + 0.6px),
      transparent calc(50% + 0.6px)
    );
  background-position:
    calc(100% - 12px - var(--icon-size) / 2) 50%,
    calc(100% - 12px - var(--icon-size) * 0.18) 50%;
  background-repeat: no-repeat;
  background-size: calc(var(--icon-size) * 0.32) calc(var(--icon-size) * 0.32);
  cursor: var(--cursor-interaction, default);
  font-size: calc(var(--font-size-base) * 14 / 16);
  font-size: round(nearest, calc(var(--font-size-base) * 14 / 16), 1px);
  font-weight: var(--font-weight-normal);
  line-height: 18px;
}

.form-select :is(option, optgroup) {
  color: var(--popover-foreground);
  background-color: var(--popover);
}

.form-select :is(option, optgroup):disabled {
  color: var(--muted-foreground);
}

.form-select:not(:disabled):hover {
  background-color: light-dark(
    color-mix(in srgb, var(--foreground) 5.5%, transparent),
    color-mix(in srgb, var(--foreground) 8%, transparent)
  );
}

.form-select:focus-visible {
  box-shadow: 0 0 0 2px var(--ring);
}
.form-select:disabled {
  opacity: 0.4;
}

.form-check {
  display: flex;
  min-height: calc(12px + 2 * var(--control-spacing, 12px));
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
  corner-shape: round;
  box-shadow: var(--shadow-sm);
  position: relative;
  width: calc(10px + var(--control-spacing, 12px) / 2);
  height: calc(10px + var(--control-spacing, 12px) / 2);
  border-color: var(--border-strong, var(--input));
  border-radius: calc(var(--radius-sm) / 2);
  background-color: transparent;
  color: var(--foreground);
}

.form-check:not(.form-switch)
  .form-check-input:not(:disabled):not(:checked):hover {
  background-color: var(--card);
}

.form-check:not(.form-switch)
  .form-check-input[type="checkbox"]:is(:checked, :indeterminate) {
  border-color: var(--border-strong, var(--input));
  background-color: color-mix(in srgb, var(--popover) 96%, transparent);
}

.form-check:not(.form-switch)
  .form-check-input[type="checkbox"]:checked::before {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--primary-foreground);
  content: "";
  mask: var(--checkmark-image) center / 12px 12px no-repeat;
  background-color: var(--foreground);
}
.form-check:not(.form-switch)
  .form-check-input[type="checkbox"]:indeterminate::before {
  position: absolute;
  inset: 0;
  display: block;
  width: 65%;
  height: 6.65%;
  margin: auto;
  border-radius: var(--radius-full);
  background: var(--foreground);
  mask: none;
  content: "";
}

.form-check-input[type="radio"] {
  border-radius: var(--radius-full);
  width: 16px;
  height: 16px;
  border: 0;
  box-shadow: inset 0 0 0 1px var(--input);
}

.form-check-input[type="radio"]:checked {
  border: 0;
  background: radial-gradient(
    circle,
    var(--primary-foreground) 0 3px,
    var(--foreground) 3px
  );
  box-shadow: none;
}

.form-check:not(.form-switch) .form-check-input:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
.form-check:not(.form-switch) .form-check-input[type="checkbox"]:focus-visible {
  border-color: var(--ring);
  outline: none;
  box-shadow: 0 0 0 2px var(--ring);
}

.form-check:not(.form-switch) .form-check-input:disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.form-check:not(.form-switch) .form-check-input:disabled + .form-check-label {
  cursor: not-allowed;
}
.form-check:not(.form-switch) .form-check-input[type="radio"]:disabled,
.form-check:not(.form-switch)
  .form-check-input[type="radio"]:disabled
  + .form-check-label {
  opacity: 0.5;
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
  box-shadow: var(--shadow-sm);
  content: "";
  transform: translate(2px, -50%);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
  border-color: #fff;
  background: #fff;
}

.form-switch .form-check-input:checked {
  background: var(--blue);
}

.form-switch .form-check-input:checked::before {
  transform: translate(14px, -50%);
}

.form-switch .form-check-input:focus-visible {
  box-shadow: 0 0 0 2px var(--ring);
  outline: none;
}

.form-range {
  appearance: none;
  display: block;
  width: 100%;
  flex: 1;
  margin: 0;
  padding: 0;
  border: 0;
  accent-color: var(--primary);
  height: calc(12px + 2 * var(--control-spacing, 12px));
  min-height: calc(12px + 2 * var(--control-spacing, 12px));
  outline: none;
  border-radius: var(--radius-full);
  color: var(--foreground);
  background: transparent;
}

.form-range::-webkit-slider-runnable-track {
  background: var(--form-range-track, var(--border));
  height: 2px;
  border-radius: var(--radius-full);
}

.form-range::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  margin-top: -9px;
  border-color: transparent;
  background: currentColor;
  box-shadow: var(--shadow-sm);
}

/* Outline the native track and thumb, preserving the larger input hit area. */
.form-range:focus-visible::-webkit-slider-runnable-track {
  outline: 2px auto Highlight;
  outline-color: -webkit-focus-ring-color;
}

.form-range::-moz-range-track {
  background: var(--form-range-track, var(--border));
  height: 2px;
  border-radius: var(--radius-full);
}

.form-range::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  border-color: transparent;
  background: currentColor;
  box-shadow: var(--shadow-sm);
}

.form-range:focus-visible::-moz-range-thumb {
  outline: 2px solid Highlight;
  outline-offset: 2px;
}

.form-range:disabled {
  opacity: 1;
  cursor: default;
}

.btn:not(.btn-primary, .viz-tile):is(
  [aria-pressed="true"],
  [aria-selected="true"],
  .is-selected
) {
  border-color: transparent;
  color: var(--primary-foreground);
  background: var(--blue);
}

.btn.viz-tile:is([aria-pressed="true"], [aria-selected="true"], .is-selected) {
  border-color: var(--primary);
  box-shadow: inset 0 0 0 1px var(--primary);
}

.btn:focus-visible,
.nav-link:focus-visible {
  outline-offset: 2px;
  outline: none;
  box-shadow: 0 0 0 2px var(--ring);
}

.viz-carousel-controls :is(button, summary):focus-visible {
  outline: 2px solid var(--ring) !important;
  outline-offset: 2px !important;
}

/* Web recipes are the default, including on renderers without inline style queries. */
@supports (border-radius: if(style(--corner-shape: round): 1px; else: 2px)) {
  /* Match the host's proportional text-sm scale at every text preference. */
  .tooltip,
  .viz-badge,
  .btn,
  .nav-link,
  .form-control,
  .form-select {
    font-size: if(
      style(--corner-shape: round): round(
          nearest,
          calc(var(--font-size-base) * 14 / 16),
          1px
        );
        else: round(nearest, calc(var(--font-size-base) * 13 / 14), 1px)
    );
  }

  .btn-sm {
    font-size: if(
      style(--corner-shape: round): round(
          nearest,
          calc(var(--font-size-base) * 12 / 16),
          1px
        );
        else: round(nearest, calc(var(--font-size-base) * 12 / 14), 1px)
    );
  }

  .btn,
  .nav-link,
  .form-select {
    border-radius: if(
      style(--corner-shape: round): var(--radius-full); else: var(--radius-lg)
    );
  }

  .form-check:not(.form-switch) .form-check-input[type="checkbox"] {
    border-radius: if(
      style(--corner-shape: round): calc(var(--radius-sm) / 2);
        else: calc(var(--radius-lg) * 0.4)
    );
  }

  .tooltip {
    font-weight: if(
      style(--corner-shape: round): 600; else: var(--font-weight-normal)
    );
  }
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
    --btn-size: 44px;
    min-width: 44px;
    min-height: 44px;
  }

  /* Keep small-screen WebKit from zooming when a text field receives focus. */
  .form-control,
  .form-select {
    font-size: max(16px, calc(var(--font-size-base) * 14 / 16));
    font-size: max(
      16px,
      round(nearest, calc(var(--font-size-base) * 14 / 16), 1px)
    );
  }
  .form-control:is(
    [type="file"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="week"],
    [type="time"],
    [type="color"]
  ) {
    height: 44px;
    min-height: 44px;
    font-size: max(16px, calc(var(--font-size-base) * 14 / 16));
    font-size: max(
      16px,
      round(nearest, calc(var(--font-size-base) * 14 / 16), 1px)
    );
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
`,syncHostStyles:m=!0}={}){let h=u&&m?ne(e,i):e,g=n!=null&&(f||/\bviz-calendar(?![-\w])/i.test(e))&&!a(e),ee=f?`<main>${h}</main><script>${te}<\/script>`:h,_=i==null?``:`<script>globalThis.__codexVisualizationInitialGlobals=${JSON.stringify(i).replaceAll(`<`,`\\u003c`)};<\/script>\n`,y=i?.visualizationStyleVariables[`--font-line-height-base`]==null?``:`<style>
html > body { line-height: var(--font-line-height-base); }
table, .table { font: inherit; }
small, .text-small { font-size: inherit; line-height: inherit; }
.table thead :is(th, td) { line-height: inherit; }
</style>`,x=u&&o!=null?`\n${ae(o)}`:``,C=r?`<style>html[data-visualize-page-header] { padding-block-start: var(--page-header-clearance); scroll-padding-block-start: var(--page-header-clearance); }</style>`:``,T=u?`${G}\n${K}\n${q}\n${J}\n${Y}\n${Z}${x}`:``;return`${p===``?``:`<style>${p}</style>\n`}${s.replace(U,()=>`${_}${Q.replace(`__CODEX_VISUALIZATION_SYNC_HOST_STYLES__`,JSON.stringify(m))}
${y}
${C}

${u&&r?`\n<script id="codex-visualization-dashboard-annotations">${v.replaceAll(`<\/script`,`<\\/script`)}<\/script>`:``}
${T}
${u&&d?`<script>${R}<\/script>`:``}
${u&&t?`<script>${S.replaceAll(`<\/script`,`<\\/script`)}<\/script>`:``}
${re(e)}
${g?`<script>${n.replaceAll(`<\/script`,`<\\/script`)}<\/script>`:``}
${ee}${u&&r?`\n<script id="codex-visualization-dashboard-layout">${b.replaceAll(`<\/script`,`<\\/script`)}<\/script>`:``}

${u?X.replace(`__CODEX_STREAM_CONTENT_READINESS__`,JSON.stringify(f)):``}
${H}
${l?V:``}`)}`}function ae(e){return`<script>${O.replace(JSON.stringify(W),JSON.stringify(e).replaceAll(`<`,`\\u003c`)).replaceAll(`<\/script`,`<\\/script`)}<\/script>`}var oe,se,ce,le,ue,de,fe,pe,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{g(),y(),x(),C(),T(),D(),h(),_(),k(),j(),c(),L(),z(),V=`<style id="codex-visualization-document-overflow">html,body{overflow-y:hidden!important}</style>`,H=`<style id="codex-visualization-document-scrollbar">html,body{scrollbar-width:none!important}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none!important}</style>`,U=`<!--__INLINE_VISUALIZATION_FRAGMENT__-->`,W=`__CODEX_INLINE_VISUALIZATION_DOWNLOAD_CAPABILITY__`,G=String.raw(oe||=B([`<script>
(() => {
  const reportEnvironmentError = (value) => {
    const error = value instanceof Error ? value : new Error(String(value));
    void globalThis.openai
      .callTool(
        "`,`",
        {
          message: error.message,
          name: error.name,
          stack: error.stack,
        },
      )
      .catch(() => {});
  };

  globalThis.addEventListener("error", (event) => {
    if (event.target?.localName === "script") {
      // A script's own onerror may render a fallback or load an alternative.
      // Let that handler run; failures it throws still reach the global error path.
      const handlesError = typeof event.target.onerror === "function";
      globalThis.queueMicrotask(() => {
        if (!handlesError && !event.defaultPrevented) {
          reportEnvironmentError("Visualization script could not be loaded");
        }
      });
    } else if (event.target === globalThis) {
      // The browser defers resize notifications to another frame; no script threw.
      if (event.error == null && (
        event.message === "ResizeObserver loop completed with undelivered notifications." ||
        event.message === "ResizeObserver loop limit exceeded"
      )) {
        return;
      }
      reportEnvironmentError(event.error ?? event.message);
    }
  }, true);
  globalThis.addEventListener("unhandledrejection", (event) => {
    reportEnvironmentError(event.reason);
  });
})();
<\/script>`]),o),K=String.raw(se||=B([`<script id="codex-visualization-variants">
(() => {
  let previousSnapshot = "[]";
  let roots = [];
  const report = () => {
    roots = Array.from(
      document.querySelectorAll(".viz-carousel[data-active-variant]"),
    ).slice(0, 32);
    const selectedVariants = roots.flatMap((root, carousel) => {
      const variant = root.dataset.activeVariant;
      const label = root.getAttribute("aria-label")?.slice(0, 256);
      return variant ? [{
        carousel,
        ...(label == null ? {} : { label }),
        variant: variant.slice(0, 256),
      }] : [];
    });
    const snapshot = JSON.stringify(selectedVariants);
    if (snapshot !== previousSnapshot) {
      previousSnapshot = snapshot;
      void globalThis.openai.callTool("`,`", {
        type: "variants",
        selectedVariants,
      }).catch(() => {});
    }
  };
  const observer = new MutationObserver((records) => {
    if (records.some((record) => record.type === "attributes") || roots.some((root) => !root.isConnected)) {
      report();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["data-active-variant"],
  });
  report();
  globalThis.addEventListener("pagehide", () => observer.disconnect(), { once: true });
})();
<\/script>`]),ee),q=String.raw(ce||=B([`<script>
(() => {
  const selectorInRoot = (target, root) => {
    const parts = [];
    for (let element = target; element != null && parts.length < 64; element = element.parentElement) {
      const id = element.id && globalThis.CSS?.escape?.(element.id);
      if (id && id.length <= 256) {
        const selector = ["#" + id, ...parts].join(" > ");
        const matches = root.querySelectorAll(selector);
        if (matches.length === 1 && matches[0] === target) {
          return selector;
        }
      }
      let index = 1;
      for (let sibling = element.previousElementSibling; sibling != null; sibling = sibling.previousElementSibling) {
        if (sibling.localName === element.localName) { index += 1; }
      }
      const tag = globalThis.CSS?.escape?.(element.localName) ?? element.localName;
      parts.unshift(tag + ":nth-of-type(" + index + ")");
      if (parts.join(" > ").length > 1024) { return null; }
      if (element.parentElement == null) {
        const selector = parts.join(" > ");
        const matches = root.querySelectorAll(selector);
        return matches.length === 1 && matches[0] === target ? selector : null;
      }
    }
    return null;
  };
  const describeTarget = (element) => {
    if (element == null || !element.isConnected) { return undefined; }
    const tagName = element.localName.toLowerCase();
    if (!/^[a-z][a-z0-9-]{0,63}$/.test(tagName)) { return undefined; }
    const parts = [];
    let current = element;
    for (let depth = 0; depth < 16; depth += 1) {
      const root = current.getRootNode();
      const selector = selectorInRoot(current, root);
      if (selector == null) { return undefined; }
      parts.unshift(selector);
      if (root === document) {
        const selector = parts.length === 1 ? parts[0] : "shadow:" + parts.join(">>>");
        if (selector.length > 1024) { return undefined; }
        const label = (element.getAttribute("aria-label") || element.getAttribute("title") || "")
          .replace(/[\0--؜‎‏\u2028-‮⁦-⁩]/gu, " ")
          .replace(/s+/g, " ").trim().slice(0, 160);
        return { selector, tagName, ...(label ? { label } : {}) };
      }
      if (!(root instanceof ShadowRoot) || root.mode !== "open") { return undefined; }
      current = root.host;
    }
    return undefined;
  };
  let previousSnapshot = JSON.stringify({ isHovering: false });
  const reportHover = (event, isHovering, isTouch = false, target) => {
    const report = isTouch
      ? { isHovering: false, pointerType: "touch" }
      : { isHovering, ...(isHovering && target != null ? { target } : {}) };
    const snapshot = JSON.stringify(report);
    if (snapshot === previousSnapshot) {
      return;
    }
    previousSnapshot = snapshot;
    void globalThis.openai
      .callTool(
        "`,`",
        { ...report, eventTime: globalThis.performance.timeOrigin + event.timeStamp },
      )
      .catch(() => {});
  };

  let hoveredElement;
  let isTouchHover = false;
  let latestHover = null;
  let latestResetTime = 0;
  const handlePointerHover = (event) => {
    const isTouch = event.pointerType === "touch";
    const element = isTouch ? undefined : event.composedPath().find((element) => element instanceof Element);
    latestHover = { event, element, isTouch };
    if (event.type === "pointermove" && element === hoveredElement && isTouch === isTouchHover) {
      return;
    }
    hoveredElement = element;
    isTouchHover = isTouch;
    reportHover(event, !isTouch, isTouch, isTouch ? undefined : describeTarget(element));
  };
  const clearHover = (event) => {
    hoveredElement = undefined;
    isTouchHover = false;
    latestHover = null;
    reportHover(event, false);
  };
  globalThis.addEventListener("openai:set_globals", (event) => {
    const resetTime = event.detail?.globals?.visualizationHoverReset;
    if (typeof resetTime !== "number" || !Number.isFinite(resetTime) || resetTime <= latestResetTime) {
      return;
    }
    latestResetTime = resetTime;
    const latest = latestHover;
    hoveredElement = undefined;
    isTouchHover = false;
    latestHover = null;
    previousSnapshot = JSON.stringify({ isHovering: false });
    // A host-observed exit can arrive after the pointer has already reentered.
    if (latest != null && globalThis.performance.timeOrigin + latest.event.timeStamp > resetTime) {
      latestHover = latest;
      hoveredElement = latest.element;
      isTouchHover = latest.isTouch;
      reportHover(latest.event, !latest.isTouch, latest.isTouch,
        latest.isTouch ? undefined : describeTarget(latest.element));
    }
  });
  globalThis.addEventListener("pointerover", handlePointerHover, { capture: true });
  // Moves between descendants in one shadow root do not emit pointerover outside
  // that root. The identity guard avoids selector work while a target is unchanged.
  globalThis.addEventListener("pointermove", handlePointerHover, { capture: true });
  globalThis.addEventListener(
    "pointerout",
    (event) => {
      if (event.pointerType !== "touch" && event.relatedTarget == null) {
        clearHover(event);
      }
    },
    { capture: true },
  );
  globalThis.addEventListener("pagehide", clearHover);
})();
<\/script>`],[`<script>
(() => {
  const selectorInRoot = (target, root) => {
    const parts = [];
    for (let element = target; element != null && parts.length < 64; element = element.parentElement) {
      const id = element.id && globalThis.CSS?.escape?.(element.id);
      if (id && id.length <= 256) {
        const selector = ["#" + id, ...parts].join(" > ");
        const matches = root.querySelectorAll(selector);
        if (matches.length === 1 && matches[0] === target) {
          return selector;
        }
      }
      let index = 1;
      for (let sibling = element.previousElementSibling; sibling != null; sibling = sibling.previousElementSibling) {
        if (sibling.localName === element.localName) { index += 1; }
      }
      const tag = globalThis.CSS?.escape?.(element.localName) ?? element.localName;
      parts.unshift(tag + ":nth-of-type(" + index + ")");
      if (parts.join(" > ").length > 1024) { return null; }
      if (element.parentElement == null) {
        const selector = parts.join(" > ");
        const matches = root.querySelectorAll(selector);
        return matches.length === 1 && matches[0] === target ? selector : null;
      }
    }
    return null;
  };
  const describeTarget = (element) => {
    if (element == null || !element.isConnected) { return undefined; }
    const tagName = element.localName.toLowerCase();
    if (!/^[a-z][a-z0-9-]{0,63}$/.test(tagName)) { return undefined; }
    const parts = [];
    let current = element;
    for (let depth = 0; depth < 16; depth += 1) {
      const root = current.getRootNode();
      const selector = selectorInRoot(current, root);
      if (selector == null) { return undefined; }
      parts.unshift(selector);
      if (root === document) {
        const selector = parts.length === 1 ? parts[0] : "shadow:" + parts.join(">>>");
        if (selector.length > 1024) { return undefined; }
        const label = (element.getAttribute("aria-label") || element.getAttribute("title") || "")
          .replace(/[\\u0000-\\u001f\\u007f-\\u009f\\u061c\\u200e\\u200f\\u2028-\\u202e\\u2066-\\u2069]/gu, " ")
          .replace(/\\s+/g, " ").trim().slice(0, 160);
        return { selector, tagName, ...(label ? { label } : {}) };
      }
      if (!(root instanceof ShadowRoot) || root.mode !== "open") { return undefined; }
      current = root.host;
    }
    return undefined;
  };
  let previousSnapshot = JSON.stringify({ isHovering: false });
  const reportHover = (event, isHovering, isTouch = false, target) => {
    const report = isTouch
      ? { isHovering: false, pointerType: "touch" }
      : { isHovering, ...(isHovering && target != null ? { target } : {}) };
    const snapshot = JSON.stringify(report);
    if (snapshot === previousSnapshot) {
      return;
    }
    previousSnapshot = snapshot;
    void globalThis.openai
      .callTool(
        "`,`",
        { ...report, eventTime: globalThis.performance.timeOrigin + event.timeStamp },
      )
      .catch(() => {});
  };

  let hoveredElement;
  let isTouchHover = false;
  let latestHover = null;
  let latestResetTime = 0;
  const handlePointerHover = (event) => {
    const isTouch = event.pointerType === "touch";
    const element = isTouch ? undefined : event.composedPath().find((element) => element instanceof Element);
    latestHover = { event, element, isTouch };
    if (event.type === "pointermove" && element === hoveredElement && isTouch === isTouchHover) {
      return;
    }
    hoveredElement = element;
    isTouchHover = isTouch;
    reportHover(event, !isTouch, isTouch, isTouch ? undefined : describeTarget(element));
  };
  const clearHover = (event) => {
    hoveredElement = undefined;
    isTouchHover = false;
    latestHover = null;
    reportHover(event, false);
  };
  globalThis.addEventListener("openai:set_globals", (event) => {
    const resetTime = event.detail?.globals?.visualizationHoverReset;
    if (typeof resetTime !== "number" || !Number.isFinite(resetTime) || resetTime <= latestResetTime) {
      return;
    }
    latestResetTime = resetTime;
    const latest = latestHover;
    hoveredElement = undefined;
    isTouchHover = false;
    latestHover = null;
    previousSnapshot = JSON.stringify({ isHovering: false });
    // A host-observed exit can arrive after the pointer has already reentered.
    if (latest != null && globalThis.performance.timeOrigin + latest.event.timeStamp > resetTime) {
      latestHover = latest;
      hoveredElement = latest.element;
      isTouchHover = latest.isTouch;
      reportHover(latest.event, !latest.isTouch, latest.isTouch,
        latest.isTouch ? undefined : describeTarget(latest.element));
    }
  });
  globalThis.addEventListener("pointerover", handlePointerHover, { capture: true });
  // Moves between descendants in one shadow root do not emit pointerover outside
  // that root. The identity guard avoids selector work while a target is unchanged.
  globalThis.addEventListener("pointermove", handlePointerHover, { capture: true });
  globalThis.addEventListener(
    "pointerout",
    (event) => {
      if (event.pointerType !== "touch" && event.relatedTarget == null) {
        clearHover(event);
      }
    },
    { capture: true },
  );
  globalThis.addEventListener("pagehide", clearHover);
})();
<\/script>`]),d),J=String.raw(le||=B([`<script>
(() => {
  const report = (method) => {
    void globalThis.openai.callTool("`,`", { method }).catch(() => {});
  };
  globalThis.addEventListener("pointerdown", () => report("pointer"), { capture: true });
  globalThis.addEventListener("keydown", (event) => {
    if (!event.isComposing && event.key !== "Shift" && !event.altKey && !event.ctrlKey && !event.metaKey) {
      report(`,`.includes(event.key) ? "keyboard-navigation" : "keyboard");
    }
  }, { capture: true });
})();
<\/script>`]),i,JSON.stringify(m)),Y=String.raw(ue||=B([`<script>
(() => {
  const bubbledClicks = new WeakSet();
  const interactiveSelector = [
    "button", "input", "select", "textarea", "label", "summary", "a[href]",
    "audio[controls]", "video[controls]", "[onclick]", "[data-visualization-interactive]",
    '[contenteditable]:not([contenteditable="false"])',
    ...[
      "button", "checkbox", "combobox", "gridcell", "link", "listbox",
      "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio",
      "scrollbar", "searchbox", "slider", "spinbutton", "switch", "tab",
      "textbox", "treeitem",
    ].map((role) => '[role~="' + role + '"]'),
  ].join(",");

  globalThis.addEventListener("click", (event) => bubbledClicks.add(event));
  globalThis.addEventListener("click", (event) => {
    // Capture the path before a control can remove itself. Custom delegated
    // controls can opt in with data-visualization-interactive.
    const elements = event.composedPath().filter((target) => target instanceof Element);
    const control = elements.find((element) => element.matches(interactiveSelector));
    const widgetControl = event.isTrusted && control != null &&
      !control.matches('img, [role~="img"]') &&
      !elements.some((element) => element.matches('a[href], [role~="link"]'));
    const isInteractiveTarget = control != null || elements.some((element) =>
      element.hasAttribute("tabindex") && element.tabIndex >= 0) ||
      (elements[0] != null && getComputedStyle(elements[0]).cursor === "pointer");
    // Use a task, not a microtask: native dispatch can run microtasks between
    // listeners. Propagation flags are reset when dispatch finishes:
    // https://dom.spec.whatwg.org/#concept-event-dispatch
    globalThis.setTimeout(() => {
      void globalThis.openai.callTool("`,`", {
        ...(widgetControl ? {widgetControl: true} : {}),
        isInteractive: isInteractiveTarget || event.defaultPrevented ||
          (event.bubbles && !bubbledClicks.has(event)),
      }).catch(() => {});
    }, 0);
  }, { capture: true });
})();
<\/script>`]),f),X=String.raw(de||=B([`<script>
(() => {
  const contentRange = document.createRange();
  let waitingForStreamRoot = __CODEX_STREAM_CONTENT_READINESS__ ? document.querySelector("main") : null;
  const markStreamReady = () => {
    waitingForStreamRoot = null;
    globalThis.removeEventListener("openai:set_globals", onStreamGlobals);
    void globalThis.openai.callTool("`,`", {}).catch(() => {});
  };
  const onStreamGlobals = (event) => {
    const update = event.detail?.globals?.__appBlockStream;
    if (update?.isFinal) {
      markStreamReady();
    } else if (update != null) {
      scheduleHeightReport();
    }
  };
  let previousMeasurement = null;
  let heightReportTimer = null;
  const reportHeight = () => {
    const bodyChildren = Array.from(document.body.children).filter(
      (element) =>
        element.tagName !== "SCRIPT" &&
        element.tagName !== "STYLE" &&
        element.getAttribute("role") !== "tooltip",
    );
    const bodyStyle = globalThis.getComputedStyle(document.body);
    const contentWidth = Math.max(
      0,
      Math.round(
        globalThis.innerWidth -
          parseFloat(bodyStyle.paddingLeft) -
          parseFloat(bodyStyle.paddingRight),
      ),
    );
    let contentHeight;
    if (bodyChildren.length === 0) {
      contentRange.selectNodeContents(document.body);
      contentHeight = contentRange.getBoundingClientRect().height;
    } else if (bodyChildren.length === 1) {
      const [bodyChild] = bodyChildren;
      const childRect = bodyChild.getBoundingClientRect();
      // Child margins can collapse above the root without adding to its height.
      // The host adds body padding separately.
      contentHeight =
        Math.max(bodyChild.scrollHeight, childRect.height) +
        Math.max(
          0,
          childRect.top -
            document.body.getBoundingClientRect().top -
            parseFloat(bodyStyle.paddingTop),
        );
    } else {
      const bodyTop = document.body.getBoundingClientRect().top;
      contentHeight = Math.max(
        ...bodyChildren.map(
          (bodyChild) => bodyChild.getBoundingClientRect().bottom - bodyTop,
        ),
      );
    }
    // A short first line is drawable before the chart is tall enough for a graphical preview.
    // Check before deduplicating height: text can arrive inside a fixed-height empty box.
    if (waitingForStreamRoot != null && contentWidth > 0 && (
      contentHeight >= 32 ||
      (contentHeight > 0 && waitingForStreamRoot.innerText.trim() !== "")
    )) {
      markStreamReady();
    }
    const viewportHeight = globalThis.innerHeight;
    const previous = previousMeasurement;
    previousMeasurement = { contentHeight, contentWidth, viewportHeight };
    if (
      previous != null &&
      contentWidth === previous.contentWidth &&
      contentHeight - previous.contentHeight ===
        viewportHeight - previous.viewportHeight
    ) {
      return;
    }

    void globalThis.openai
      .callTool(
        "`,`",
        { height: contentHeight, width: contentWidth },
      )
      .catch(() => {});
  };
  const scheduleHeightReport = () => {
    if (heightReportTimer != null) {
      return;
    }
    // Offscreen frames can suspend animation callbacks while their content loads.
    heightReportTimer = globalThis.setTimeout(() => {
      heightReportTimer = null;
      reportHeight();
    }, 0);
  };

  const resizeObserver = new ResizeObserver(scheduleHeightReport);
  const observeBodyChildren = () => {
    for (const element of document.body.children) {
      resizeObserver.observe(element);
    }
  };
  resizeObserver.observe(document.body);
  observeBodyChildren();
  new MutationObserver(() => {
    observeBodyChildren();
    scheduleHeightReport();
  }).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class", "height", "width"],
  });
  globalThis.addEventListener("resize", scheduleHeightReport);
  if (waitingForStreamRoot != null) {
    globalThis.addEventListener("openai:set_globals", onStreamGlobals);
    if (globalThis.openai?.__appBlockStream?.isFinal) {
      markStreamReady();
    }
  }
  reportHeight();
})();
<\/script>`]),p,l),Z=String.raw(fe||=B([`<script>
(() => {
  globalThis.addEventListener("keydown", (event) => {
    if (event.isComposing || event.altKey || event.ctrlKey || event.metaKey ||
      event.shiftKey || !["ArrowLeft", "ArrowRight", "Escape"].includes(event.key)) {
      return;
    }
    const target = event.composedPath().find((element) => element instanceof HTMLElement);
    const editable = target?.closest("[contenteditable]");
    const editing = target && (target.isContentEditable ||
      (editable && editable.getAttribute("contenteditable") !== "false") ||
      target.closest('input, textarea, select, [role="slider"], [role="spinbutton"], [role="combobox"], [role="listbox"], [role="grid"], [role="tree"], [role="tablist"], [role="menu"]'));
    if (event.key !== "Escape" && editing) { return; }
    // Let the widget handle the key before forwarding it across the sandbox.
    globalThis.setTimeout(() => {
      if (!event.defaultPrevented && globalThis.openai?.displayMode === "fullscreen") {
        void globalThis.openai.callTool("`,`", {
          key: event.key,
        }).catch(() => {});
      }
    }, 0);
  });
})();
<\/script>`]),s),Q=String.raw(pe||=B([`<style id="codex-visualization-host-theme">
:root {}
html[data-visualize-page-inline-inset] > body { padding-inline: var(--page-content-inline-inset); }
</style>
<script>
(() => {
  // Host colors are defaults; later authored styles can give the same names
  // their own meaning (for example, --muted as a chart's label color).
  const hostStyles = document.getElementById("codex-visualization-host-theme");
  const hostStyle = hostStyles.sheet.cssRules[0].style;
  // Typography, geometry and interaction cursors still follow the host.
  const styleForProperty = (property) =>
    /^--(?:font-|radius|corner-shape$|control-spacing$|cursor-interaction$|icon-size$|page-content-inline-inset$|page-header-clearance$|visualize-paint-gutter$)/.test(property)
      ? document.documentElement.style
      : hostStyle;
  const initialGlobals =
    globalThis.__codexVisualizationInitialGlobals ?? globalThis.openai;
  delete globalThis.__codexVisualizationInitialGlobals;
  if (initialGlobals?.statePersistence != null) {
    globalThis.openai ??= {};
    globalThis.openai.statePersistence = initialGlobals.statePersistence;
    globalThis.openai.stateModelContext = initialGlobals.stateModelContext ?? "none";
  }
  if (!__CODEX_VISUALIZATION_SYNC_HOST_STYLES__) {
    return;
  }
  let appliedProperties = [];
  const applyHostStyleVariables = (styleVariables) => {
    if (styleVariables == null || typeof styleVariables !== "object") {
      return;
    }
    document.documentElement.toggleAttribute(
      "data-visualize-page-inline-inset", typeof styleVariables["--page-content-inline-inset"] === "string",
    );
    document.documentElement.toggleAttribute(
      "data-visualize-page-header", typeof styleVariables["--page-header-clearance"] === "string",
    );
    for (const property of appliedProperties) {
      styleForProperty(property).removeProperty(property);
    }
    appliedProperties = [];
    for (const [property, value] of Object.entries(styleVariables)) {
      if (property.startsWith("--") && typeof value === "string") {
        styleForProperty(property).setProperty(property, value);
        appliedProperties.push(property);
      }
    }
  };

  const syncHostStyles = (globals) => {
    applyHostStyleVariables(globals?.visualizationStyleVariables);
    const sandboxDocument = globalThis.frameElement?.ownerDocument;
    if (sandboxDocument != null && globals?.visualizationTheme != null) {
      let colorSchemeMeta = sandboxDocument.querySelector(
        'meta[name="color-scheme"]',
      );
      if (colorSchemeMeta == null) {
        colorSchemeMeta = sandboxDocument.createElement("meta");
        colorSchemeMeta.name = "color-scheme";
        sandboxDocument.head.appendChild(colorSchemeMeta);
      }
      colorSchemeMeta.content = globals.visualizationTheme;
      sandboxDocument.documentElement.style.colorScheme =
        globals.visualizationTheme;
      // Paint the host surface behind transparent saved visualization documents.
      sandboxDocument.documentElement.style.backgroundColor =
        hostStyle.getPropertyValue("--background");
    }
  };

  syncHostStyles(initialGlobals);
  globalThis.addEventListener("openai:set_globals", (event) => {
    syncHostStyles(event.detail?.globals);
  });
})();
<\/script>`]))})))()}export{$ as n,ie as t};
//# sourceMappingURL=visualization-sandbox-html-e86e1bc7d65c.js.map