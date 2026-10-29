const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./visualization-sandbox-html-867f46ffc8e2.js","./visualization-sandbox-html-d02d8c3209a0.js","./rolldown-runtime-2d059c5e81f4.js","./visualization-sandbox-config-d6a8d5057bf3.js","./dist-15e5c1229202.js","./dist-c49309ceeb35.js","./dist-ad7e2bb8433e.js","./protocol-9054ed7ddaad.js","./app-initial-13f932cb2f13.js","./app-initial-b2ef6e3b3412.css","./browser-annotation-controls-45282851e1fa.js","./offline-tailwind-a6a6b60f3c6c.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{Xx as t,Yx as n,rS as r,ym as i}from"./app-initial-13f932cb2f13.js";import{t as a}from"./compiler-runtime-2015039f3c68.js";import{n as o,t as s}from"./clsx-4831e7669c42.js";import{G as c,qf as l}from"./chatgpt-conversation-queries-fed923318f92.js";import{n as ee}from"./useIntl-63f4d3dae0a0.js";import{s as u}from"./lib-72ce426c00b2.js";import{a as d,c as f,r as p,u as m}from"./app-scope-2dce3358324c.js";import{n as h,r as g}from"./statsig-gate-signal-4df082acfadb.js";import{c as _,t as te}from"./route-scope-38f8c9923d9d.js";import{n as v,t as y}from"./client-turn-telemetry-b418bd7ea328.js";import{n as b,t as x}from"./chatgpt-follow-up-42489fbfb244.js";import{n as S,t as ne}from"./internal-render-context-432f6e3aa44f.js";import{n as C,t as re}from"./external-resource-policy-context-9e3926b4fc6e.js";import{r as w,t as ie}from"./visualization-loading-placeholder-67125e7c929e.js";import{n as T,t as ae}from"./execution-policy-status-b6ec6423b643.js";import{n as oe,t as se}from"./code-execution-account-policy-8ba553e8866b.js";import{n as E,u as D}from"./visualization-sandbox-config-d6a8d5057bf3.js";import{r as ce,t as le}from"./visualization-directive-renderer-9764c2f9efdf.js";var O;function k(){return(k=e((()=>{O=`// Runs inside the App Block sandbox after its host bridge has been installed.
(() => {
  /** @param {unknown} surface */
  const updateSurface = (surface) => {
    const root = document.documentElement;
    if (
      !root.hasAttribute("data-app-block-surface") ||
      (surface !== "inline" && surface !== "stage")
    ) {
      return;
    }
    root.setAttribute("data-app-block-surface", surface);
    // Open style omits the palette; match ChatGPT web's stage fallback.
    const stageBackground = root.classList.contains("dark")
      ? "#212121"
      : "#ffffff";
    root.style.backgroundColor =
      surface === "inline" && root.dataset.appBlockStyleMode === "open"
        ? "transparent"
        : \`var(--main-surface-primary, \${stageBackground})\`;
  };
  window.addEventListener("openai:set_globals", (event) => {
    updateSurface(event.detail?.globals?.__appBlockSurface);
  });
  updateSurface(window.openai?.__appBlockSurface);

  let ready = false;
  const timeout = setTimeout(() => {
    throw new Error("App Block did not become ready");
  }, 20000);
  const markReady = () => {
    if (ready) {
      return;
    }
    ready = true;
    clearTimeout(timeout);
    // oxlint-disable-next-line typescript/no-unsafe-call -- The isolated sandbox installs this host bridge before executing the document.
    void globalThis.openai.callTool("__codex_inline_visualization_ready__", {});
  };
  const tailwind = document.getElementById("app-block-tailwind");
  if (tailwind == null) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", markReady, { once: true });
    } else {
      markReady();
    }
    return;
  }
  tailwind.addEventListener(
    "error",
    () => {
      clearTimeout(timeout);
      throw new Error("App Block styles failed to load");
    },
    { once: true },
  );
  const checkTailwindReady = () => {
    const probe = document.createElement("div");
    probe.className = "hidden";
    probe.setAttribute("aria-hidden", "true");
    const checkStyles = () => {
      if (getComputedStyle(probe).display === "none") {
        observer.disconnect();
        probe.remove();
        markReady();
      }
    };
    const observer = new MutationObserver(checkStyles);
    observer.observe(document.head, {
      childList: true,
      characterData: true,
      subtree: true,
    });
    document.body.append(probe);
    checkStyles();
  };
  if (tailwind.hasAttribute("src")) {
    tailwind.addEventListener("load", checkTailwindReady, { once: true });
  } else {
    checkTailwindReady();
  }
})();
`})))()}var A;function j(){return(j=e((()=>{A=String.raw`(() => {
  const root = document.querySelector("main");
  if (!(root instanceof HTMLElement)) {
    return;
  }

  let hasFinalized = false;
  let previousHtml = null;

  function getRenderableHtml(html, isFinal) {
    if (isFinal) {
      return html;
    }

    let renderableHtml = html;
    const trailingTagStart = renderableHtml.lastIndexOf("<");
    if (trailingTagStart >= 0) {
      const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
      if ("</appblock>".startsWith(trailingTag)) {
        renderableHtml = renderableHtml.slice(0, trailingTagStart);
      }
    }

    const lowercaseHtml = renderableHtml.toLowerCase();
    const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
    const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
    if (lastStyleStart > lastStyleEnd) {
      return renderableHtml.slice(0, lastStyleStart);
    }

    return renderableHtml;
  }

  function removePartialExecutionAttributes(fragment) {
    for (const element of fragment.querySelectorAll("*")) {
      for (const attribute of Array.from(element.attributes)) {
        const attributeName = attribute.name.toLowerCase();
        if (attributeName.startsWith("on") || attributeName === "srcdoc") {
          element.removeAttribute(attribute.name);
          continue;
        }

        if (
          /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
          /^\s*javascript:/i.test(attribute.value)
        ) {
          element.removeAttribute(attribute.name);
        }
      }

      if (element.matches("button, input, select, textarea, fieldset")) {
        element.setAttribute("disabled", "");
      }
      if (element.matches("a[href]")) {
        element.removeAttribute("href");
        element.setAttribute("aria-disabled", "true");
      }
      if (element.hasAttribute("contenteditable")) {
        element.setAttribute("contenteditable", "false");
      }
    }
  }

  function markNewElement(node) {
    if (!(node instanceof Element) || node.tagName === "STYLE") {
      return;
    }

    node.setAttribute("data-app-block-stream-enter", "");
    node.addEventListener(
      "animationend",
      () => node.removeAttribute("data-app-block-stream-enter"),
      { once: true }
    );
  }

  function synchronizeAttributes(currentElement, nextElement) {
    for (const attribute of Array.from(currentElement.attributes)) {
      if (
        attribute.name !== "data-app-block-stream-enter" &&
        !nextElement.hasAttribute(attribute.name)
      ) {
        currentElement.removeAttribute(attribute.name);
      }
    }

    for (const attribute of Array.from(nextElement.attributes)) {
      if (currentElement.getAttribute(attribute.name) !== attribute.value) {
        currentElement.setAttribute(attribute.name, attribute.value);
      }
    }
  }

  function synchronizeChildren(currentParent, nextParent, isFinal) {
    let currentChild = currentParent.firstChild;

    for (const nextChild of Array.from(nextParent.childNodes)) {
      if (currentChild === null) {
        const insertedChild = nextChild.cloneNode(true);
        currentParent.appendChild(insertedChild);
        markNewElement(insertedChild);
        continue;
      }

      const isMatchingNode =
        currentChild.nodeType === nextChild.nodeType &&
        currentChild.nodeName === nextChild.nodeName;
      if (!isMatchingNode) {
        const insertedChild = nextChild.cloneNode(true);
        currentParent.replaceChild(insertedChild, currentChild);
        markNewElement(insertedChild);
        currentChild = insertedChild.nextSibling;
        continue;
      }

      if (currentChild instanceof Element && nextChild instanceof Element) {
        synchronizeAttributes(currentChild, nextChild);
        synchronizeChildren(currentChild, nextChild, isFinal);
      } else if (currentChild.nodeValue !== nextChild.nodeValue) {
        currentChild.nodeValue = nextChild.nodeValue;
      }

      currentChild = currentChild.nextSibling;
    }

    if (!isFinal) {
      return;
    }

    while (currentChild !== null) {
      const nextCurrentChild = currentChild.nextSibling;
      currentChild.remove();
      currentChild = nextCurrentChild;
    }
  }

  function applyStreamUpdate(update) {
    if (
      hasFinalized ||
      update === null ||
      typeof update !== "object" ||
      typeof update.html !== "string"
    ) {
      return;
    }

    const isFinal = update.isFinal === true;
    if (!isFinal && previousHtml === update.html) {
      return;
    }
    previousHtml = update.html;

    const template = document.createElement("template");
    template.innerHTML = getRenderableHtml(update.html, isFinal);
    const scripts = Array.from(template.content.querySelectorAll("script"));
    for (const script of scripts) {
      script.remove();
    }

    if (!isFinal) {
      removePartialExecutionAttributes(template.content);
    }

    synchronizeChildren(root, template.content, isFinal);

    if (!isFinal) {
      return;
    }

    hasFinalized = true;
    for (const sourceScript of scripts) {
      const executableScript = document.createElement("script");
      for (const attribute of Array.from(sourceScript.attributes)) {
        executableScript.setAttribute(attribute.name, attribute.value);
      }
      executableScript.textContent = sourceScript.textContent;
      root.appendChild(executableScript);
    }
  }

  window.addEventListener("openai:set_globals", (event) => {
    const globals = event.detail && event.detail.globals;
    if (globals && Object.hasOwn(globals, "__appBlockStream")) {
      applyStreamUpdate(globals.__appBlockStream);
    }
  });

  if (window.openai && window.openai.__appBlockStream) {
    applyStreamUpdate(window.openai.__appBlockStream);
  }
})();
`})))()}var M;function N(){return(N=e((()=>{M=`:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})))()}var ue;function P(){return(P=e((()=>{ue=`:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}:root[data-codex-window-type=electron]{--main-surface-primary:var(--background)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])){appearance:base-select}:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:24px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:2px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:24px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:24px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})))()}function F(e,t){let r=e===`open`?M:ue;return{requiresReadySignal:!0,csp:{...E,disableNetworkRequests:!t,resourceDomains:t?[...E.resourceDomains,`https://cdn.tailwindcss.com`,`https://images.openai.com`]:[]},updateHtml(e,t){return e.setAdditionalGlobals({additionalGlobals:{__appBlockStream:t}})},updateDisplayMode(e,t){return e.setAdditionalGlobals({additionalGlobals:{__appBlockSurface:t===`fullscreen`?`stage`:`inline`}})},async buildHtml(i,a,o){let{getVisualizationSandboxHtml:s}=await n(async()=>{let{getVisualizationSandboxHtml:e}=await import(`./visualization-sandbox-html-867f46ffc8e2.js`);return{getVisualizationSandboxHtml:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);if(/<!doctype\b|<html[\s>]/i.test(i)){let e=/<body\b[^>]*>/i.test(i)?i.replace(/<body\b[^>]*>/i,e=>e+I):i+I;return s(`<script>${O}<\/script>`,{...a,innerKit:e,styles:``})}let c=o.replace(/[^a-zA-Z0-9-]/g,``)||`en`,l=a?.initialGlobals?.visualizationTheme??`light`,ee=`<!doctype html>
<html lang="${c}" class="${l}" data-codex-window-type="extension" data-chat-theme="default" data-app-block-surface="inline" data-app-block-style-mode="${e}" style="background-color: ${e===`open`?`transparent`:`var(--main-surface-primary)`};">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="${l}">
  ${t?`<script>window.tailwind = { config: { darkMode: "class" } };<\/script>
  <script id="app-block-tailwind" src="https://cdn.tailwindcss.com" defer><\/script>`:`<script id="app-block-tailwind">${(await n(async()=>{let{offlineTailwind:e}=await import(`./offline-tailwind-a6a6b60f3c6c.js`);return{offlineTailwind:e}},__vite__mapDeps([11,2]),import.meta.url)).offlineTailwind}<\/script>
  <script>window.tailwind.config = { darkMode: "class" };<\/script>`}
  <style>${r}</style>
</head>
<body>${I}</body>
</html>`;return s(`<main>${i}</main><script>${A}\n${O}<\/script>`,{...a,innerKit:ee,styles:``})}}}var I,de;function L(){return(L=e((()=>{D(),k(),j(),N(),P(),t(),I=`<!--__INLINE_VISUALIZATION_FRAGMENT__-->`,de={default:{networkEnabled:F(`default`,!0),networkDisabled:F(`default`,!1)},open:{networkEnabled:F(`open`,!0),networkDisabled:F(`open`,!1)}}})))()}function fe(e){let t=performance.now(),n=!1,r=!1;return i=>({onRunStart({content:a,isStreaming:o,signal:s}){let{count:c,hist:l}=e.get(y),ee=performance.now(),u={network_policy:i,surface:`inline`,variant:`inline`,render_mode:o?`progressive`:`static`},d=null,f=null,p=!1,m=!o,h=!1,g=!1,_=null,te=()=>{_!=null&&cancelAnimationFrame(_)};s.addEventListener(`abort`,te,{once:!0}),c(`app_blocks`,`app_block.render.start`,u);let v=e=>{n||(n=!0,l(`app_blocks`,`app_block.payload_size_kb`,u,new TextEncoder().encode(e).byteLength/1024))};o||v(a);let b=()=>{if(s.aborted||g||!m||!p||d==null||f==null||_!=null)return;let e=d,n=f;_=requestAnimationFrame(()=>{if(s.aborted||g)return;let i=performance.now();l(`app_blocks`,`app_block.ready_to_first_paint_ms`,{...u,ready_signal:n},i-e),r||(r=!0,l(`app_blocks`,`app_block.first_render_time_ms`,u,i-t))})};return{onContentUpdated({html:e,isFinal:t}){s.aborted||g||(m=e.trim().length>0,t&&v(e),b())},onReady(e){s.aborted||g||d!=null||(d=performance.now(),f=e,l(`app_blocks`,`app_block.sandbox_eval_to_ready_ms`,{...u,ready_signal:f},d-ee),b())},onContentMeasured(){p=!0,b()},onFailure(e,t){s.aborted||g||(g=!0,te(),c(`app_blocks`,`app_block.load.failure`,{...u,error_source:e,error_type:t}),h||(h=!0,c(`app_blocks`,`app_block.render.outcome`,{...u,outcome:`failure`})))},onComplete(){!s.aborted&&!h&&(h=!0,c(`app_blocks`,`app_block.render.outcome`,{...u,outcome:`success`,ready_signal:`run_complete`}))}}}})}function R(){return(R=e((()=>{v()})))()}function z(e){let t=(0,me.c)(50),{bind:n,onBindInteraction:r,collapsed:i,collapsedPreview:a,content:o,header:c,isStreaming:u,loading:p,readOnly:h,sandboxDocument:_,sandboxDocumentState:v,sharedFrameKey:y,sharedWidgetState:x,sharedFrameSourceRevision:S,title:C,styleMode:w,turnContext:T,withTopMargin:oe}=e,E=i!==void 0&&i,D=p!==void 0&&p,ce=h!==void 0&&h,O=w===void 0?`default`:w,k=oe===void 0||oe,A=d(te),j=(0,B.useContext)(ne),M=m(j?null:se),N=f(l,T?.conversationId??null),ue=f(g,`4070967303`),P=T!=null&&ue&&(T.conversationOrigin===`tpp`||T.conversationOrigin===`flora`),F=(0,B.useId)(),I=ee(),L;t[0]===u?L=t[1]:(L=()=>({status:u?`streaming`:`static`}),t[0]=u,t[1]=L);let[R,z]=(0,B.useState)(L),H;t[2]===A?H=t[3]:(H=()=>fe(A),t[2]=A,t[3]=H);let[U]=(0,B.useState)(H);(R.status===`failed`&&!u||R.status===`finalized`&&R.html!==o)&&z({status:`static`});let W=R.status!==`static`,he=(0,B.useContext)(re),G=T?.shouldBlockExternalEgress===!0||he===`restricted`;if(j==null&&G&&T?.renderRestrictedWidgets!==!0)return null;if(M!=null&&M.status!==`allowed`){let e;return t[4]===M.status?e=t[5]:(e=(0,V.jsx)(ae,{status:M.status}),t[4]=M.status,t[5]=e),e}let K=j==null?!G&&M?.networkAccessEnabled===!0:j.networkPolicy===`deps-only`,q=ce||T==null||G||j!=null,J=_??de[O][K?`networkEnabled`:`networkDisabled`];if(!K&&!J.csp?.disableNetworkRequests){let e;t[6]===J.csp?e=t[7]:(e={...J.csp,disableNetworkRequests:!0},t[6]=J.csp,t[7]=e);let n;t[8]!==J||t[9]!==e?(n={...J,csp:e},t[8]=J,t[9]=e,t[10]=n):n=t[10],J=n}let Y=E?a:null,ge=k&&`mt-4`,_e=c!=null&&`not-prose overflow-hidden rounded-3xl border border-default bg-surface shadow-xs`,X;t[11]!==_e||t[12]!==ge?(X=s(`mb-1`,ge,_e),t[11]=_e,t[12]=ge,t[13]=X):X=t[13];let ve=u||D,Z;t[14]!==q||t[15]!==n||t[16]!==P||t[17]!==E||t[18]!==o||t[19]!==U||t[20]!==J||t[21]!==G||t[22]!==F||t[23]!==j||t[24]!==I||t[25]!==u||t[26]!==D||t[27]!==K||t[28]!==r||t[29]!==M?.accountId||t[30]!==M?.userId||t[31]!==W||t[32]!==v||t[33]!==A||t[34]!==N||t[35]!==y||t[36]!==S||t[37]!==x||t[38]!==C||t[39]!==T?(Z=D?(0,V.jsx)(ie,{}):(0,V.jsx)(le,{isActive:!E,allowInteractions:!G&&j==null,appBlockBind:n,onAppBlockBindInteraction:r,appBlockTitle:C,attributes:{path:P||T?.messageId==null?`app-block-${T?.messageId??F}.html`:`app-block-${T.messageId}-${F}.html`},createRenderObserver:()=>U(K?`deps_only`:`disabled`),embeddedHtml:W?``:o,hostId:T?.hostId,shareSource:T==null||!P||T.isReadOnly||q||u||N==null?void 0:{kind:`chatgpt`,threadId:N,messageId:T.messageId,turnId:T.turnId},onOpenEmbeddedLink:G||j!=null?pe:void 0,onSendFollowUpMessage:q||T==null?null:async e=>{let{prompt:t}=e;u||await b(A,{conversationId:T.conversationId,parentMessageId:T.messageId,prompt:t})},onStreamComplete:e=>z({status:`finalized`,html:e}),onStreamFailure:()=>z({status:`failed`}),presentation:`app-block`,sandboxDocument:J,sandboxDocumentState:v,sharedWidgetState:x,sharedFrame:y==null?void 0:{key:y,surface:`inline`,sourceRevision:S},streamingHtml:W?{html:o,isFinal:!u}:void 0,threadId:T?.browserConversationId??T?.conversationId,title:C??I.formatMessage({id:`chatgpt.appBlock.frame.title`,defaultMessage:`Interactive app`,description:`Accessible title of the isolated frame containing an inline App Block in a ChatGPT conversation`}),turnId:T?.turnId},JSON.stringify([W,j?.requestId,M?.accountId,M?.userId,K])),t[14]=q,t[15]=n,t[16]=P,t[17]=E,t[18]=o,t[19]=U,t[20]=J,t[21]=G,t[22]=F,t[23]=j,t[24]=I,t[25]=u,t[26]=D,t[27]=K,t[28]=r,t[29]=M?.accountId,t[30]=M?.userId,t[31]=W,t[32]=v,t[33]=A,t[34]=N,t[35]=y,t[36]=S,t[37]=x,t[38]=C,t[39]=T,t[40]=Z):Z=t[40];let Q;t[41]!==E||t[42]!==c||t[43]!==X||t[44]!==ve||t[45]!==Z?(Q=(0,V.jsxs)(`div`,{hidden:E,className:X,"aria-busy":ve,children:[c,Z]}),t[41]=E,t[42]=c,t[43]=X,t[44]=ve,t[45]=Z,t[46]=Q):Q=t[46];let $;return t[47]!==Q||t[48]!==Y?($=(0,V.jsxs)(V.Fragment,{children:[Y,Q]}),t[47]=Q,t[48]=Y,t[49]=$):$=t[49],$}function pe(){return!0}var me,B,V;function H(){return(H=e((()=>{me=a(),o(),p(),B=r(),u(),C(),_(),h(),ce(),w(),x(),c(),oe(),S(),L(),T(),R(),V=i()})))()}H();export{z as InlineAppBlock};
//# sourceMappingURL=inline-impl-72cc377e51bc.js.map