const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-DCkp6eY1.js","./rolldown-runtime-DAXXjFlN.js","./app-initial-C5z1CkGQ.js","./app-initial-C9Cpcu6X.js","./app-initial-BwifStiO.css","./app-initial-BuVb9CXI.css","./wallet-onboarding-announcement-modal-BNbVOaNH.css"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{AG as n,CG as r,Cz as i,EG as a,IY as o,JP as s,MY as c,NY as l,TG as u,VY as d,XP as f,_G as p,aI as m,aX as h,bz as g,dG as _,eX as v,hK as y,iG as b,iX as x,kK as S,oX as ee,sX as C,tF as te,xz as ne}from"./app-initial-C5z1CkGQ.js";import{$K as w,A4 as T,BK as re,F4 as ie,GK as E,H4 as ae,HK as oe,K4 as se,L3 as D,L4 as ce,LK as le,M3 as ue,M4 as de,P4 as O,R3 as k,RK as A,UK as j,V4 as fe,VK as pe,W4 as me,WK as M,YK as N,alt as he,eq as P,gct as F,hct as I,ilt as ge,j3 as L,j4 as _e,k4 as ve,nq as R,q4 as z,rq as B,zK as V}from"./app-initial-C9Cpcu6X.js";function ye(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      html, body { min-height: 100%; margin: 0; background: var(--color-background-primary, #fff); }
      body { color: var(--color-text-primary, #171717); font-family: var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif); }
      * { box-sizing: border-box; }
      form { display: flex; flex-direction: column; width: 100%; min-height: 100vh; padding: 28px 24px 8px; }
      .enrollment-content { display: flex; flex: 1; flex-direction: column; justify-content: center; }
      h1 { margin: 0 0 28px; color: var(--color-text-primary, #171717); font-size: 20px; font-weight: var(--font-weight-semibold, 600); line-height: 25px; letter-spacing: -0.45px; text-align: center; }
      .fields { overflow: hidden; border: 1px solid var(--color-border-primary, #d8d8d8); border-radius: 13px; background: var(--color-background-secondary, #fff); }
      label { display: grid; min-width: 0; padding: 7px 16px 6px; color: var(--color-text-primary, #171717); font-size: 13px; line-height: 17px; }
      label:focus-within { outline: none; box-shadow: inset 0 0 0 2px var(--color-ring-primary, #6b6b6b); }
      .row { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--color-border-secondary, #d8d8d8); }
      .row label + label { border-left: 1px solid var(--color-border-secondary, #d8d8d8); }
      .field { position: relative; height: 24px; overflow: hidden; }
      .hosted { position: absolute; inset: 0; opacity: 0; }
      .field::before { position: absolute; top: 7px; left: 0; width: 42%; height: 10px; border-radius: 999px; background: var(--color-background-disabled, #dedede); content: ""; opacity: 0.8; }
      [data-fields-ready="true"] .hosted { opacity: 1; }
      [data-fields-ready="true"] .field::before { content: none; }
      .privacy { margin: 24px 0 0; color: var(--color-text-tertiary, #8f8f8f); font-size: 12px; line-height: 16px; text-align: center; }
      .actions { display: flex; flex-shrink: 0; flex-direction: column; }
      .status { min-height: 16px; margin: 16px 0 0; color: var(--color-text-secondary, #666); font-size: 14px; line-height: 16px; text-align: center; }
      .error { display: none; margin-top: 16px; padding: 12px; border: 1px solid var(--color-border-danger, #efc4c4); border-radius: 12px; background: var(--color-background-danger, #fff5f5); color: var(--color-text-danger, #a12020); font-size: 14px; line-height: 20px; text-align: center; }
      .error[data-visible="true"] { display: block; }
      button { width: 100%; min-height: 44px; margin-top: 16px; border: 0; border-radius: 999px; background: var(--color-background-inverse, #171717); color: var(--color-text-inverse, #fff); font: inherit; font-size: 15px; font-weight: var(--font-weight-medium, 500); cursor: var(--cursor-interaction); }
      button:disabled { background: var(--color-background-disabled, #dedede); color: var(--color-text-disabled, #8a8a8a); cursor: not-allowed; }
      .retry { display: none; }
      .retry[data-visible="true"] { display: block; }
      [hidden] { display: none !important; }
      html[data-theme="dark"], html[data-theme="dark"] body { background: var(--color-background-primary, #171717); }
      html[data-theme="dark"] body, html[data-theme="dark"] h1, html[data-theme="dark"] label { color: var(--color-text-primary, #f5f5f5); }
      html[data-theme="dark"] .fields { border-color: var(--color-border-primary, #555); background: var(--color-background-secondary, #242424); }
      html[data-theme="dark"] .row, html[data-theme="dark"] .row label + label { border-color: var(--color-border-secondary, #555); }
      html[data-theme="dark"] .privacy { color: var(--color-text-tertiary, #a3a3a3); }
      html[data-theme="dark"] .status { color: var(--color-text-secondary, #c7c7c7); }
      html[data-theme="dark"] label:focus-within { box-shadow: inset 0 0 0 2px var(--color-ring-primary, #b8b8b8); }
      html[data-theme="dark"] button { background: var(--color-background-inverse, #f5f5f5); color: var(--color-text-inverse, #171717); }
      html[data-theme="dark"] button:disabled { background: var(--color-background-disabled, #484848); color: var(--color-text-disabled, #999); }
      html[data-theme="dark"] .error { border-color: var(--color-border-danger, #744343); background: var(--color-background-danger, #342424); color: var(--color-text-danger, #f3b6b6); }
      @media (max-width: 420px) { form { padding: 22px 18px 8px; } label { padding-right: 14px; padding-left: 14px; } }
    </style>
  </head>
  <body>
    <form id="form" data-fields-ready="false">
      <div class="enrollment-content">
        <h1 id="title"></h1>
        <div class="fields" id="fields" aria-busy="true">
          <label><span id="card-number-label"></span><span class="field"><span class="hosted" id="vgs-card-number"></span></span></label>
          <div class="row">
            <label><span id="expiration-label"></span><span class="field"><span class="hosted" id="vgs-card-expiration"></span></span></label>
            <label><span id="cvc-label"></span><span class="field"><span class="hosted" id="vgs-card-cvc"></span></span></label>
          </div>
        </div>
        <p class="privacy" id="privacy"></p>
      </div>
      <div class="actions">
        <p class="status" id="status" role="status"></p>
        <div class="error" id="error" role="alert"></div>
        <button id="submit" type="submit" disabled></button>
        <button class="retry" id="retry" type="button"></button>
      </div>
    </form>
    <script>
      (() => {
        const messages = ${JSON.stringify(e).replaceAll(`<`,`\\u003c`)};
        const initialStyleVariables = ${JSON.stringify(t).replaceAll(`<`,`\\u003c`)};
        const initialTheme = ${JSON.stringify(n)};
        const sdkUrl = ${JSON.stringify(G)};
        const fieldInitializationTimeoutMs = ${JSON.stringify(K)};
        const retryTool = ${JSON.stringify(H)};
        const saveTool = ${JSON.stringify(U)};
        const stageTool = ${JSON.stringify(W)};
        const formRoot = document.getElementById("form");
        const fieldsRoot = document.getElementById("fields");
        const status = document.getElementById("status");
        const error = document.getElementById("error");
        const submit = document.getElementById("submit");
        const retry = document.getElementById("retry");
        let sdkPromise = null;
        let sdkError = false;
        let activeAttempt = null;
        let form = null;
        let fields = [];
        let fieldValidity = [false, false, false];
        let vaultedCard = null;

        const applyHostStyles = () => {
          const root = document.documentElement;
          const theme = globalThis.openai?.theme === "dark" || globalThis.openai?.theme === "light"
            ? globalThis.openai.theme
            : initialTheme;
          root.dataset.theme = theme;
          root.style.colorScheme = theme;
          const styleVariables = globalThis.openai?.toolInput?.style_variables ?? initialStyleVariables;
          for (const [name, value] of Object.entries(styleVariables)) {
            if (typeof value === "string") root.style.setProperty(name, value);
          }
        };

        applyHostStyles();

        document.getElementById("title").textContent = messages.title;
        document.getElementById("card-number-label").textContent = messages.cardNumber;
        document.getElementById("expiration-label").textContent = messages.expiration;
        document.getElementById("cvc-label").textContent = messages.cvc;
        document.getElementById("privacy").textContent = messages.privacy;
        submit.textContent = messages.submit;

        const reportStage = (stage, startedAt, result) => {
          const api = globalThis.openai;
          if (!api || typeof api.callTool !== "function") return;
          void api.callTool(stageTool, {
            duration_ms: Math.max(0, Math.round(performance.now() - startedAt)),
            result,
            stage,
          }).catch(() => undefined);
        };

        const showError = (message, retryLabel) => {
          fieldsRoot.setAttribute("aria-busy", "false");
          status.textContent = "";
          error.textContent = message;
          error.dataset.visible = "true";
          submit.hidden = true;
          retry.textContent = retryLabel;
          retry.dataset.visible = "true";
        };

        const showLoading = () => {
          formRoot.hidden = false;
          formRoot.dataset.fieldsReady = "false";
          fieldsRoot.setAttribute("aria-busy", "true");
          status.textContent = messages.initializing;
          error.textContent = "";
          error.dataset.visible = "false";
          submit.hidden = false;
          submit.disabled = true;
          submit.textContent = messages.submit;
          retry.dataset.visible = "false";
        };

        const resetForm = () => {
          form = null;
          fields = [];
          fieldValidity = [false, false, false];
          vaultedCard = null;
          for (const id of ["vgs-card-number", "vgs-card-expiration", "vgs-card-cvc"]) {
            document.getElementById(id).replaceChildren();
          }
          showLoading();
        };

        const getStyle = (name, fallback) => {
          const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
          return value || fallback;
        };

        const getFieldBackground = () => {
          const background = getComputedStyle(fieldsRoot).backgroundColor;
          if (background.startsWith("rgb(")) return background;

          const canvas = document.createElement("canvas");
          canvas.width = 1;
          canvas.height = 1;
          const context = canvas.getContext("2d");
          if (!context) return background;

          for (const element of [document.documentElement, document.body, fieldsRoot]) {
            context.fillStyle = getComputedStyle(element).backgroundColor;
            context.fillRect(0, 0, 1, 1);
          }
          const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;
          return "rgb(" + red + ", " + green + ", " + blue + ")";
        };

        const getFieldCss = () => {
          const isDark = document.documentElement.dataset.theme === "dark";
          return {
            "&::placeholder": { color: getStyle("--color-text-tertiary", isDark ? "#a3a3a3" : "#8b8b8b") },
            "background-color": getFieldBackground(),
            border: "0",
            "box-sizing": "border-box",
            color: getStyle("--color-text-primary", isDark ? "#f5f5f5" : "#171717"),
            "font-family": getStyle("--font-sans", "-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"),
            "font-size": "16px",
            height: "24px",
            "line-height": "24px",
            padding: "0",
            width: "100%",
          };
        };

        const loadSdk = () => {
          if (globalThis.VGSCollect && typeof globalThis.VGSCollect.create === "function") {
            return Promise.resolve(globalThis.VGSCollect);
          }
          if (sdkPromise) return sdkPromise;
          const startedAt = performance.now();
          sdkPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.async = true;
            script.src = sdkUrl;
            script.onload = () => {
              if (globalThis.VGSCollect && typeof globalThis.VGSCollect.create === "function") {
                sdkError = false;
                reportStage("sdk_load", startedAt, "success");
                resolve(globalThis.VGSCollect);
              } else {
                reject(new Error("VGS Collect did not initialize"));
              }
            };
            script.onerror = () => reject(new Error("VGS Collect failed to load"));
            document.head.appendChild(script);
          }).catch((loadError) => {
            sdkError = true;
            sdkPromise = null;
            reportStage("sdk_load", startedAt, "failure");
            throw loadError;
          });
          return sdkPromise;
        };

        const parseBootstrap = () => {
          const bootstrap = globalThis.openai?.toolResponseMetadata?.vgs_collect_bootstrap;
          if (!bootstrap || typeof bootstrap !== "object") return null;
          if (typeof bootstrap.vault_id !== "string" || !bootstrap.vault_id.trim()) return null;
          if (typeof bootstrap.access_token !== "string" || !bootstrap.access_token.trim()) return null;
          if (bootstrap.environment !== "sandbox" && bootstrap.environment !== "live") return null;
          if (typeof bootstrap.force_staging_env !== "boolean") return null;
          return bootstrap;
        };

        const saveCard = async () => {
          if (!vaultedCard) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          try {
            const response = await globalThis.openai.callTool(saveTool, {
              force_staging_env: vaultedCard.forceStagingEnv,
              vgs_card_id: vaultedCard.id,
            });
            const structuredContent = response?.structuredContent ?? response?.structured_content;
            const card = structuredContent?.card;
            if (response?.isError === true || structuredContent?.ok !== true || !card || typeof card.last4 !== "string") {
              throw new Error("Wallet did not confirm the saved card");
            }
            vaultedCard = null;
            reportStage("save", startedAt, "success");
          } catch {
            reportStage("save", startedAt, "failure");
            showError(messages.saveError, messages.retrySave);
          }
        };

        const initializeFields = async (attempt, bootstrap) => {
          const startedAt = performance.now();
          resetForm();
          let initializationTimeout;
          let timedOut = false;
          try {
            await Promise.race([
              (async () => {
                const collect = await loadSdk();
                if (activeAttempt !== attempt || timedOut) return;
                form = collect.create(bootstrap.vault_id, bootstrap.environment, () => undefined);
                form.on?.("enterPress", () => {
                  if (!submit.disabled) formRoot.requestSubmit(submit);
                });
                const css = getFieldCss();
                fields = [
                  form.cardNumberField("#vgs-card-number", { css, placeholder: messages.numberPlaceholder }),
                  form.cardExpirationDateField("#vgs-card-expiration", { css, placeholder: messages.expirationPlaceholder }),
                  form.cardCVCField("#vgs-card-cvc", { css, placeholder: messages.cvcPlaceholder }),
                ];
                fields.forEach((field, index) => {
                  field.on("update", (state) => {
                    fieldValidity[index] = state?.isValid === true;
                    submit.disabled = fieldValidity.some((valid) => !valid);
                  });
                });
                await Promise.all(fields.map((field) => field.promise ?? Promise.resolve()));
                if (activeAttempt !== attempt || timedOut) return;
                if (fields.some((field) => field.loadingState !== "loaded")) {
                  throw new Error("A VGS field did not finish loading");
                }
                formRoot.dataset.fieldsReady = "true";
                fieldsRoot.setAttribute("aria-busy", "false");
                status.textContent = "";
                reportStage("fields_ready", startedAt, "success");
              })(),
              new Promise((_, reject) => {
                initializationTimeout = setTimeout(() => {
                  timedOut = true;
                  reject(new Error("VGS fields did not finish loading in time"));
                }, fieldInitializationTimeoutMs);
              }),
            ]);
          } catch {
            if (activeAttempt !== attempt) return;
            reportStage("fields_ready", startedAt, "failure");
            showError(sdkError ? messages.error : messages.bootstrapError, messages.retry);
          } finally {
            clearTimeout(initializationTimeout);
          }
        };

        const syncGlobals = () => {
          applyHostStyles();
          const css = getFieldCss();
          for (const field of fields) {
            field.update?.({ css });
          }
          const input = globalThis.openai?.toolInput;
          if (!input || input.enrollment_requested !== true) {
            if (activeAttempt !== null) {
              activeAttempt = null;
              resetForm();
            }
            return;
          }
          const attempt = String(input.enrollment_attempt) + ":" + String(input.bootstrap_retry);
          if (input.bootstrap_status === "error") {
            activeAttempt = attempt;
            showError(messages.bootstrapError, messages.retry);
            return;
          }
          if (input.bootstrap_status !== "ready") {
            showLoading();
            return;
          }
          if (activeAttempt === attempt) return;
          const bootstrap = parseBootstrap();
          if (!bootstrap) {
            activeAttempt = attempt;
            showError(messages.bootstrapError, messages.retry);
            return;
          }
          activeAttempt = attempt;
          void initializeFields(attempt, bootstrap);
        };

        formRoot.addEventListener("submit", (event) => {
          event.preventDefault();
          const bootstrap = parseBootstrap();
          if (!form || !bootstrap || fieldValidity.some((valid) => !valid)) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          error.dataset.visible = "false";
          try {
            form.createCard(
              { auth: bootstrap.access_token, data: { cardholder: {} } },
              (statusCode, payload) => {
                if (statusCode === 401 || statusCode === 403) {
                  reportStage("submit", startedAt, "failure");
                  showError(messages.bootstrapError, messages.retry);
                  return;
                }
                const card = payload?.data;
                if (statusCode < 200 || statusCode >= 300 || !card || typeof card.id !== "string" || !card.id.trim()) {
                  reportStage("submit", startedAt, "failure");
                  showError(messages.error, messages.retry);
                  return;
                }
                vaultedCard = { forceStagingEnv: bootstrap.force_staging_env, id: card.id };
                reportStage("submit", startedAt, "success");
                void saveCard();
              },
              () => {
                reportStage("submit", startedAt, "failure");
                error.textContent = messages.validationError;
                error.dataset.visible = "true";
                submit.disabled = fieldValidity.some((valid) => !valid);
                submit.textContent = messages.submit;
              },
            );
          } catch {
            reportStage("submit", startedAt, "failure");
            showError(messages.error, messages.retry);
          }
        });

        retry.addEventListener("click", () => {
          if (vaultedCard) {
            error.dataset.visible = "false";
            retry.dataset.visible = "false";
            submit.hidden = false;
            void saveCard();
            return;
          }
          showLoading();
          void globalThis.openai.callTool(retryTool, {}).catch(() => {
            showError(messages.bootstrapError, messages.retry);
          });
        });

        globalThis.addEventListener("openai:set_globals", syncGlobals);
        void loadSdk().catch(() => undefined);
        syncGlobals();
      })();
    <\/script>
  </body>
</html>`}var H,U,W,be,G,K,q=e((()=>{H=`__wallet_onboarding_retry_bootstrap`,U=`__wallet_onboarding_save_vgs_card`,W=`__wallet_onboarding_stage`,be={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},G=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,K=15e3}));function J(e){let t=(0,Ie.c)(88),{active:n,enrollmentAttempt:r,enrollmentView:i,onComplete:a,onPreparationError:o,onPrepared:s,preparing:c,targetElement:l}=e,u=f(ge),p=d(),m=te(pe),h=(0,Y.useId)(),_=(0,Y.useRef)(n),v=(0,Y.useRef)(!1),y=(0,Y.useRef)(null),b;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(b=new Map,t[0]=b):b=t[0];let x=(0,Y.useRef)(b),[S,ee]=(0,Y.useState)(0),[C,w]=(0,Y.useState)(null),[T,re]=(0,Y.useState)(null),[E,oe]=(0,Y.useState)(null),[D,ue]=(0,Y.useState)(!1),O,k,A;if(t[1]!==i.server||t[2]!==i.tool||t[3]!==p.locale||t[4]!==h){O=_e({server:i.server,tool:i.tool});let e=de({connectorId:O,instanceFallbackId:`wallet-onboarding-${h}`,server:i.server});k=ae({locale:p.locale,originScope:e,widgetDomain:null}),A=fe({originScope:e,sourceUrl:k,widgetDomain:null}),t[1]=i.server,t[2]=i.tool,t[3]=p.locale,t[4]=h,t[5]=O,t[6]=k,t[7]=A}else O=t[5],k=t[6],A=t[7];let j=A,M=`wallet-onboarding-${h}`,N;t[8]!==n||t[9]!==C?.metadata||t[10]!==O||t[11]!==i.hostId||t[12]!==i.server||t[13]!==i.serverTools||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==u?(N=async(e,t)=>{if(e===`__wallet_onboarding_stage`){let e=Ve.parse(t);return F.info(`wallet_onboarding_sandbox.stage`,{safe:e}),c&&e.stage===`fields_ready`&&(e.result===`success`?s():o()),{}}if(e===`__wallet_onboarding_retry_bootstrap`){if(!n)throw Error(`Wallet onboarding enrollment is not active`);return He.parse(t),ee(Pe),{}}if(e!==`__wallet_onboarding_save_vgs_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!n)throw Error(`Wallet onboarding enrollment is not active`);let r=ze.parse(t),l=Re.safeParse(C?.metadata);if(!l.success||r.force_staging_env!==l.data.vgs_collect_bootstrap.force_staging_env)throw Error(`Wallet card environment does not match enrollment`);let d=i.serverTools.find(Ne);if(d==null)throw Error(`Wallet save tool is unavailable`);let f=ce({connectorId:O,server:i.server,toolName:d.name,tools:i.serverTools}),p=await ve(u,i.hostId,i.server,f.name,r),m=me({isCodexAppsServer:ie(i.server),toolResult:p});return m.isError!==!0&&Be.safeParse(m.structuredContent).success&&(_.current?a():v.current=!0),m},t[8]=n,t[9]=C?.metadata,t[10]=O,t[11]=i.hostId,t[12]=i.server,t[13]=i.serverTools,t[14]=a,t[15]=o,t[16]=s,t[17]=c,t[18]=u,t[19]=N):N=t[19];let he=(0,Y.useEffectEvent)(N),P;t[20]===o?P=t[21]:(P=()=>{o()},t[20]=o,t[21]=P);let I=(0,Y.useEffectEvent)(P),L;t[22]!==n||t[23]!==a?(L=()=>{n&&v.current&&(v.current=!1,a())},t[22]=n,t[23]=a,t[24]=L):L=t[24];let R=(0,Y.useEffectEvent)(L),z,B;t[25]===j?(z=t[26],B=t[27]):(z=()=>{let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,g(j)),oe(e),()=>{e.remove(),e.destroy?.(),oe(t=>t===e?null:t)}},B=[j],t[25]=j,t[26]=z,t[27]=B),(0,Y.useLayoutEffect)(z,B);let V;t[28]!==n||t[29]!==R||t[30]!==E||t[31]!==l?(V=()=>{if(_.current=n,R(),E==null)return;let e=n?l:y.current;e!=null&&E.parentElement!==e&&e.appendChild(E)},t[28]=n,t[29]=R,t[30]=E,t[31]=l,t[32]=V):V=t[32];let H;t[33]!==n||t[34]!==E||t[35]!==l?(H=[n,E,l],t[33]=n,t[34]=E,t[35]=l,t[36]=H):H=t[36],(0,Y.useLayoutEffect)(V,H);let U;t[37]!==I||t[38]!==he||t[39]!==p||t[40]!==E||t[41]!==j||t[42]!==u||t[43]!==k||t[44]!==M?(U=()=>{if(E==null)return;let e=ne(k,{requireSkybridge:!0});if(e==null){F.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),I();return}let t=new AbortController,n,r=performance.now();ue(!1);let i=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`,a=u.get(pe),o=ye({bootstrapError:p.formatMessage(X.bootstrapError),cardNumber:p.formatMessage(X.cardNumber),cvc:p.formatMessage(X.cvc),cvcPlaceholder:p.formatMessage(X.cvcPlaceholder),error:p.formatMessage(X.error),expiration:p.formatMessage(X.expiration),expirationPlaceholder:p.formatMessage(X.expirationPlaceholder),initializing:p.formatMessage(X.initializing),numberPlaceholder:p.formatMessage(X.numberPlaceholder),privacy:p.formatMessage(X.privacy),retry:p.formatMessage(X.retry),retrySave:p.formatMessage(X.retrySave),saveError:p.formatMessage(X.saveError),submit:p.formatMessage(X.submit),submitting:p.formatMessage(X.submitting),title:p.formatMessage(X.title),validationError:p.formatMessage(X.validationError)},{styleVariables:a,theme:i});return le({hostApiHandlers:{callMcp:Me,callTool:(e,t)=>he(e,t),notifyBackgroundColor:je,notifyEnvironmentError:()=>{F.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),I()},notifyIntrinsicHeight:Ae,notifyIntrinsicWidth:ke,notifyNavigation:Oe,notifySecurityPolicyViolation:()=>{F.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),I()},openExternal:De,requestDisplayMode:Ee,sendFollowUpMessage:Te,sendInstrument:we,updateWidgetState:Ce},origin:e,sandboxId:j,signal:t.signal,sourceUrl:k,webview:E}).then(async e=>{if(t.signal.aborted)return;re(e);let s=e.runWidgetCode({csp:be,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:be}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:p.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:M,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(F.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),I(),t.abort())},Ue),await Fe(s,t.signal,()=>{clearTimeout(n),ue(!0),F.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}})})===`ended`&&(clearTimeout(n),t.signal.aborted||(F.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),I()))}).catch(e=>{t.signal.aborted||(F.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),I())}),()=>{clearTimeout(n),t.abort(),ue(!1),re(null)}},t[37]=I,t[38]=he,t[39]=p,t[40]=E,t[41]=j,t[42]=u,t[43]=k,t[44]=M,t[45]=U):U=t[45];let W;t[46]!==p||t[47]!==E||t[48]!==j||t[49]!==u||t[50]!==k||t[51]!==M?(W=[p,E,j,u,k,M],t[46]=p,t[47]=E,t[48]=j,t[49]=u,t[50]=k,t[51]=M,t[52]=W):W=t[52],(0,Y.useLayoutEffect)(U,W);let G;t[53]!==S||t[54]!==O||t[55]!==r||t[56]!==i.hostId||t[57]!==i.server||t[58]!==i.tool.name||t[59]!==I||t[60]!==c||t[61]!==u?(G=()=>{if(!c||r===0)return;let e=JSON.stringify([O,i.hostId,i.server,i.tool.name,r,S]);w({attempt:r,metadata:null,retry:S,status:`loading`});let t=x.current.get(e);if(t==null){let n=performance.now();t=ve(u,i.hostId,i.server,i.tool.name,{force_staging_env:!1}).then(e=>(F.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-n))}}),e)),x.current.set(e,t)}let n=!1,a=setTimeout(()=>{n||(n=!0,F.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),w({attempt:r,metadata:null,retry:S,status:`error`}),I())},Ue);return t.then(e=>{if(n)return;let t=se({toolResult:me({isCodexAppsServer:ie(i.server),toolResult:e})}),a=Re.safeParse(t);w({attempt:r,metadata:a.success?a.data:null,retry:S,status:a.success?`ready`:`error`}),a.success||I()}).catch(e=>{n||(F.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),w({attempt:r,metadata:null,retry:S,status:`error`}),I())}).finally(()=>{clearTimeout(a)}),()=>{n=!0,clearTimeout(a)}},t[53]=S,t[54]=O,t[55]=r,t[56]=i.hostId,t[57]=i.server,t[58]=i.tool.name,t[59]=I,t[60]=c,t[61]=u,t[62]=G):G=t[62];let K;t[63]!==S||t[64]!==O||t[65]!==r||t[66]!==i.hostId||t[67]!==i.server||t[68]!==i.tool.name||t[69]!==c||t[70]!==u?(K=[S,O,r,i.hostId,i.server,i.tool.name,c,u],t[63]=S,t[64]=O,t[65]=r,t[66]=i.hostId,t[67]=i.server,t[68]=i.tool.name,t[69]=c,t[70]=u,t[71]=K):K=t[71],(0,Y.useEffect)(G,K);let q,J;t[72]!==m||t[73]!==p.locale||t[74]!==D||t[75]!==T?(q=()=>{if(!D||T==null)return;let e=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`;Promise.all([T.setTheme({theme:e}),T.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:p.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:m},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(Se)},J=[m,p.locale,D,T],t[72]=m,t[73]=p.locale,t[74]=D,t[75]=T,t[76]=q,t[77]=J):(q=t[76],J=t[77]),(0,Y.useEffect)(q,J);let Z,We;t[78]!==C||t[79]!==r||t[80]!==m||t[81]!==D||t[82]!==c||t[83]!==T||t[84]!==M?(Z=()=>{if(!D||T==null)return;let e=c&&C?.attempt===r?C:null;T.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:m},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:M,widgetState:null}).catch(xe)},We=[C,r,m,D,c,T,M],t[78]=C,t[79]=r,t[80]=m,t[81]=D,t[82]=c,t[83]=T,t[84]=M,t[85]=Z,t[86]=We):(Z=t[85],We=t[86]),(0,Y.useEffect)(Z,We);let Ge;return t[87]===Symbol.for(`react.memo_cache_sentinel`)?(Ge=(0,Le.jsx)(`div`,{ref:y,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`}),t[87]=Ge):Ge=t[87],Ge}function xe(){}function Se(){}function Ce(){}function we(){}function Te(){return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`))}function Ee(){return{mode:`inline`}}function De(){}function Oe(){}function ke(){}function Ae(){}function je(){}function Me(){return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`))}function Ne(e){return/(?:^|[._])(?:wallet_)?save_vgs_card$/.test(e.name)}function Pe(e){return e+1}async function Fe(e,t,n){for await(let r of e){if(t.aborted)return`aborted`;if(V.safeParse(r).success)return n(),`running`}return`ended`}var Ie,Y,Le,Re,ze,Be,Ve,He,Ue,X,Z=e((()=>{Ie=v(),s(),m(),i(),Y=t(h(),1),l(),b(),re(),A(),z(),O(),T(),he(),I(),q(),Le=x(),Re=a({vgs_collect_bootstrap:a({access_token:n().trim().min(1),environment:_([`sandbox`,`live`]),force_staging_env:p(),vault_id:n().trim().min(1)})}),ze=a({force_staging_env:p(),vgs_card_id:n().trim().min(1)}),Be=a({card:a({last4:n()}),ok:r(!0)}),Ve=a({duration_ms:u().nonnegative(),result:_([`failure`,`success`]),stage:_([`fields_ready`,`save`,`sdk_load`,`submit`])}),He=a({}).strict(),Ue=15e3,X=c({bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`}})}));function We(e){let t=(0,Je.c)(2),n;return t[0]===e?n=t[1]:(n=(0,$.jsx)(Ge,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function Ge(e){let t=(0,Je.c)(20),{dismissAnnouncement:n,enrollmentView:r}=e,[i,a]=(0,Q.useState)(`introduction`),[o,s]=(0,Q.useState)(1),[c,l]=(0,Q.useState)(!1),[u,d]=(0,Q.useState)(`loading`),[f,p]=(0,Q.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==u||t[3]!==i?(m=i===`introduction`?(0,$.jsx)(Ye,{dismissAnnouncement:n,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&a(`enrollment`)}}):(0,$.jsx)(qe,{completed:i===`success`,dismissAnnouncement:n,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),a(`introduction`)},onRetry:()=>{d(`loading`),s(Ke)}}),t[0]=n,t[1]=c,t[2]=u,t[3]=i,t[4]=m):m=t[4];let h=i===`enrollment`&&u!==`error`,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a(`success`)},t[5]=g):g=t[5];let _,v;t[6]===c?(_=t[7],v=t[8]):(_=()=>{d(`error`),c&&a(`enrollment`)},v=()=>{d(`ready`),c&&a(`enrollment`)},t[6]=c,t[7]=_,t[8]=v);let y=i!==`success`&&u!==`error`,b;t[9]!==o||t[10]!==r||t[11]!==f||t[12]!==h||t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,$.jsx)(J,{active:h,enrollmentAttempt:o,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},o),t[9]=o,t[10]=r,t[11]=f,t[12]=h,t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;return t[17]!==m||t[18]!==b?(x=(0,$.jsxs)($.Fragment,{children:[m,b]}),t[17]=m,t[18]=b,t[19]=x):x=t[19],x}function Ke(e){return e+1}function qe(e){let t=(0,Je.c)(22),{completed:n,dismissAnnouncement:r,onBack:i,onRetry:a,preparationFailed:s,setSandboxTarget:c}=e,l=s!==void 0&&s,u=k(),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d={"aria-describedby":void 0},t[0]=d):d=t[0];let f;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[1]=f):f=t[1];let p;t[2]===r?p=t[3]:(p=e=>{e||r()},t[2]=r,t[3]=p);let m;t[4]!==n||t[5]!==a||t[6]!==l||t[7]!==c||t[8]!==u?(m=n?(0,$.jsx)(S.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!u&&{opacity:0,y:12},transition:{duration:u?0:.28},children:(0,$.jsx)(N,{className:`items-center text-center`,icon:(0,$.jsx)(S.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!u&&{rotate:-18,scale:0},transition:u?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,$.jsx)(oe,{className:`icon-base`})}),iconBackgroundClassName:`bg-chart-green/20`,iconClassName:`mx-auto text-chart-green`,title:(0,$.jsx)(R,{children:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):l?(0,$.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,$.jsx)(R,{children:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(`p`,{role:`alert`,className:`text-secondary`,children:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(L,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:a,children:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(R,{className:`sr-only`,children:(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,$.jsx)(`div`,{ref:c,className:`relative min-h-0 flex-1 overflow-hidden bg-surface`})]}),t[4]=n,t[5]=a,t[6]=l,t[7]=c,t[8]=u,t[9]=m):m=t[9];let h=n?`primary`:`ghostTertiary`,g=n?r:i,_;t[10]===n?_=t[11]:(_=n?(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,$.jsx)(o,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[10]=n,t[11]=_);let v;t[12]!==h||t[13]!==g||t[14]!==_?(v=(0,$.jsx)(`div`,{className:`shrink-0 bg-surface px-6 pb-6`,children:(0,$.jsx)(L,{className:`w-full justify-center`,color:h,size:`large`,onClick:g,children:_})}),t[12]=h,t[13]=g,t[14]=_,t[15]=v):v=t[15];let y;t[16]!==m||t[17]!==v?(y=(0,$.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[m,v]}),t[16]=m,t[17]=v,t[18]=y):y=t[18];let b;return t[19]!==y||t[20]!==p?(b=(0,$.jsx)(P,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,contentProps:d,dialogCloseClassName:`z-10`,dialogCloseLabel:f,onOpenChange:p,size:`feature`,children:y}),t[19]=y,t[20]=p,t[21]=b):b=t[21],b}var Je,Q,$,Ye;e((()=>{Je=v(),y(),Q=t(h(),1),l(),ue(),B(),w(),M(),D(),j(),Z(),$=x(),C(),Ye=E(async()=>(await ee(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-DCkp6eY1.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).WalletOnboardingAnnouncementModal)}))();export{We as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-Dxoz6BKD.js.map