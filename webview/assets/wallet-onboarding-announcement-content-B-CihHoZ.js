const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-CgPSqcJa.js","./rolldown-runtime-DAXXjFlN.js","./app-initial-DHmg8n4v.js","./app-initial-B0lk-dMx.js","./app-initial-BmtSKx-9.css","./app-initial-BuVb9CXI.css","./wallet-onboarding-announcement-modal-BNbVOaNH.css"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{$P as n,Cz as r,EG as i,Ez as a,FY as o,IY as s,MK as c,NG as l,OG as u,WY as d,ZP as f,bG as p,cI as m,cX as h,iF as g,kG as _,lX as v,mG as y,rX as b,sG as x,sX as ee,uX as S,vK as te,wz as ne,zY as C}from"./app-initial-DHmg8n4v.js";import{Flt as w,GK as T,Gct as re,JK as E,KK as ie,Kct as D,Plt as ae,S3 as oe,T3 as O,UK as se,WK as ce,XK as k,YK as A,ZK as j,aq as M,b3 as le,c3 as N,cq as P,f3 as ue,g6 as F,h3 as de,h6 as I,l3 as fe,l6 as L,lq as pe,oq as R,p3 as me,qK as he,s3 as ge,tq as z,u3 as _e,u6 as B,w3 as ve,y3 as ye}from"./app-initial-B0lk-dMx.js";function be(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
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
        const sdkUrl = ${JSON.stringify(W)};
        const fieldInitializationTimeoutMs = ${JSON.stringify(G)};
        const retryTool = ${JSON.stringify(V)};
        const saveTool = ${JSON.stringify(H)};
        const stageTool = ${JSON.stringify(U)};
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
</html>`}var V,H,U,xe,W,G,K=e((()=>{V=`__wallet_onboarding_retry_bootstrap`,H=`__wallet_onboarding_save_vgs_card`,U=`__wallet_onboarding_stage`,xe={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},W=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,G=15e3}));function q(e){let t=(0,Le.c)(88),{active:i,enrollmentAttempt:a,enrollmentView:o,onComplete:s,onPreparationError:c,onPrepared:l,preparing:u,targetElement:f}=e,p=n(ae),m=d(),h=g(he),_=(0,J.useId)(),v=(0,J.useRef)(i),y=(0,J.useRef)(!1),b=(0,J.useRef)(null),x;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(x=new Map,t[0]=x):x=t[0];let ee=(0,J.useRef)(x),[S,te]=(0,J.useState)(0),[C,w]=(0,J.useState)(null),[T,re]=(0,J.useState)(null),[E,ie]=(0,J.useState)(null),[O,ce]=(0,J.useState)(!1),k,A,j;if(t[1]!==o.server||t[2]!==o.tool||t[3]!==m.locale||t[4]!==_){k=fe({server:o.server,tool:o.tool});let e=_e({connectorId:k,instanceFallbackId:`wallet-onboarding-${_}`,server:o.server});A=le({locale:m.locale,originScope:e,widgetDomain:null}),j=ye({originScope:e,sourceUrl:A,widgetDomain:null}),t[1]=o.server,t[2]=o.tool,t[3]=m.locale,t[4]=_,t[5]=k,t[6]=A,t[7]=j}else k=t[5],A=t[6],j=t[7];let M=j,N=`wallet-onboarding-${_}`,P;t[8]!==i||t[9]!==C?.metadata||t[10]!==k||t[11]!==o.hostId||t[12]!==o.server||t[13]!==o.serverTools||t[14]!==s||t[15]!==c||t[16]!==l||t[17]!==u||t[18]!==p?(P=async(e,t)=>{if(e===`__wallet_onboarding_stage`){let e=He.parse(t);return D.info(`wallet_onboarding_sandbox.stage`,{safe:e}),u&&e.stage===`fields_ready`&&(e.result===`success`?l():c()),{}}if(e===`__wallet_onboarding_retry_bootstrap`){if(!i)throw Error(`Wallet onboarding enrollment is not active`);return Ue.parse(t),te(Fe),{}}if(e!==`__wallet_onboarding_save_vgs_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!i)throw Error(`Wallet onboarding enrollment is not active`);let n=Be.parse(t),r=ze.safeParse(C?.metadata);if(!r.success||n.force_staging_env!==r.data.vgs_collect_bootstrap.force_staging_env)throw Error(`Wallet card environment does not match enrollment`);let a=o.serverTools.find(Pe);if(a==null)throw Error(`Wallet save tool is unavailable`);let d=de({connectorId:k,server:o.server,toolName:a.name,tools:o.serverTools}),f=await ge(p,o.hostId,o.server,d.name,n),m=oe({isCodexAppsServer:me(o.server),toolResult:f});return m.isError!==!0&&Ve.safeParse(m.structuredContent).success&&(v.current?s():y.current=!0),m},t[8]=i,t[9]=C?.metadata,t[10]=k,t[11]=o.hostId,t[12]=o.server,t[13]=o.serverTools,t[14]=s,t[15]=c,t[16]=l,t[17]=u,t[18]=p,t[19]=P):P=t[19];let ue=(0,J.useEffectEvent)(P),F;t[20]===c?F=t[21]:(F=()=>{c()},t[20]=c,t[21]=F);let I=(0,J.useEffectEvent)(F),L;t[22]!==i||t[23]!==s?(L=()=>{i&&y.current&&(y.current=!1,s())},t[22]=i,t[23]=s,t[24]=L):L=t[24];let pe=(0,J.useEffectEvent)(L),R,z;t[25]===M?(R=t[26],z=t[27]):(R=()=>{let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,r(M)),ie(e),()=>{e.remove(),e.destroy?.(),ie(t=>t===e?null:t)}},z=[M],t[25]=M,t[26]=R,t[27]=z),(0,J.useLayoutEffect)(R,z);let B;t[28]!==i||t[29]!==pe||t[30]!==E||t[31]!==f?(B=()=>{if(v.current=i,pe(),E==null)return;let e=i?f:b.current;e!=null&&E.parentElement!==e&&e.appendChild(E)},t[28]=i,t[29]=pe,t[30]=E,t[31]=f,t[32]=B):B=t[32];let V;t[33]!==i||t[34]!==E||t[35]!==f?(V=[i,E,f],t[33]=i,t[34]=E,t[35]=f,t[36]=V):V=t[36],(0,J.useLayoutEffect)(B,V);let H;t[37]!==I||t[38]!==ue||t[39]!==m||t[40]!==E||t[41]!==M||t[42]!==p||t[43]!==A||t[44]!==N?(H=()=>{if(E==null)return;let e=ne(A,{requireSkybridge:!0});if(e==null){D.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),I();return}let t=new AbortController,n,r=performance.now();ce(!1);let i=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`,a=p.get(he),o=be({bootstrapError:m.formatMessage(Y.bootstrapError),cardNumber:m.formatMessage(Y.cardNumber),cvc:m.formatMessage(Y.cvc),cvcPlaceholder:m.formatMessage(Y.cvcPlaceholder),error:m.formatMessage(Y.error),expiration:m.formatMessage(Y.expiration),expirationPlaceholder:m.formatMessage(Y.expirationPlaceholder),initializing:m.formatMessage(Y.initializing),numberPlaceholder:m.formatMessage(Y.numberPlaceholder),privacy:m.formatMessage(Y.privacy),retry:m.formatMessage(Y.retry),retrySave:m.formatMessage(Y.retrySave),saveError:m.formatMessage(Y.saveError),submit:m.formatMessage(Y.submit),submitting:m.formatMessage(Y.submitting),title:m.formatMessage(Y.title),validationError:m.formatMessage(Y.validationError)},{styleVariables:a,theme:i});return se({hostApiHandlers:{callMcp:Ne,callTool:(e,t)=>ue(e,t),notifyBackgroundColor:Me,notifyEnvironmentError:()=>{D.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),I()},notifyIntrinsicHeight:je,notifyIntrinsicWidth:Ae,notifyNavigation:ke,notifySecurityPolicyViolation:()=>{D.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),I()},openExternal:Oe,requestDisplayMode:De,sendFollowUpMessage:Ee,sendInstrument:Te,updateWidgetState:we},origin:e,sandboxId:M,signal:t.signal,sourceUrl:A,webview:E}).then(async e=>{if(t.signal.aborted)return;re(e);let s=e.runWidgetCode({csp:xe,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:xe}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:m.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:N,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(D.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),I(),t.abort())},We),await Ie(s,t.signal,()=>{clearTimeout(n),ce(!0),D.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}})})===`ended`&&(clearTimeout(n),t.signal.aborted||(D.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),I()))}).catch(e=>{t.signal.aborted||(D.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),I())}),()=>{clearTimeout(n),t.abort(),ce(!1),re(null)}},t[37]=I,t[38]=ue,t[39]=m,t[40]=E,t[41]=M,t[42]=p,t[43]=A,t[44]=N,t[45]=H):H=t[45];let U;t[46]!==m||t[47]!==E||t[48]!==M||t[49]!==p||t[50]!==A||t[51]!==N?(U=[m,E,M,p,A,N],t[46]=m,t[47]=E,t[48]=M,t[49]=p,t[50]=A,t[51]=N,t[52]=U):U=t[52],(0,J.useLayoutEffect)(H,U);let W;t[53]!==S||t[54]!==k||t[55]!==a||t[56]!==o.hostId||t[57]!==o.server||t[58]!==o.tool.name||t[59]!==I||t[60]!==u||t[61]!==p?(W=()=>{if(!u||a===0)return;let e=JSON.stringify([k,o.hostId,o.server,o.tool.name,a,S]);w({attempt:a,metadata:null,retry:S,status:`loading`});let t=ee.current.get(e);if(t==null){let n=performance.now();t=ge(p,o.hostId,o.server,o.tool.name,{force_staging_env:!1}).then(e=>(D.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-n))}}),e)),ee.current.set(e,t)}let n=!1,r=setTimeout(()=>{n||(n=!0,D.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),w({attempt:a,metadata:null,retry:S,status:`error`}),I())},We);return t.then(e=>{if(n)return;let t=ve({toolResult:oe({isCodexAppsServer:me(o.server),toolResult:e})}),r=ze.safeParse(t);w({attempt:a,metadata:r.success?r.data:null,retry:S,status:r.success?`ready`:`error`}),r.success||I()}).catch(e=>{n||(D.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),w({attempt:a,metadata:null,retry:S,status:`error`}),I())}).finally(()=>{clearTimeout(r)}),()=>{n=!0,clearTimeout(r)}},t[53]=S,t[54]=k,t[55]=a,t[56]=o.hostId,t[57]=o.server,t[58]=o.tool.name,t[59]=I,t[60]=u,t[61]=p,t[62]=W):W=t[62];let G;t[63]!==S||t[64]!==k||t[65]!==a||t[66]!==o.hostId||t[67]!==o.server||t[68]!==o.tool.name||t[69]!==u||t[70]!==p?(G=[S,k,a,o.hostId,o.server,o.tool.name,u,p],t[63]=S,t[64]=k,t[65]=a,t[66]=o.hostId,t[67]=o.server,t[68]=o.tool.name,t[69]=u,t[70]=p,t[71]=G):G=t[71],(0,J.useEffect)(W,G);let K,q;t[72]!==h||t[73]!==m.locale||t[74]!==O||t[75]!==T?(K=()=>{if(!O||T==null)return;let e=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`;Promise.all([T.setTheme({theme:e}),T.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:m.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:h},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(Ce)},q=[h,m.locale,O,T],t[72]=h,t[73]=m.locale,t[74]=O,t[75]=T,t[76]=K,t[77]=q):(K=t[76],q=t[77]),(0,J.useEffect)(K,q);let X,Z;t[78]!==C||t[79]!==a||t[80]!==h||t[81]!==O||t[82]!==u||t[83]!==T||t[84]!==N?(X=()=>{if(!O||T==null)return;let e=u&&C?.attempt===a?C:null;T.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:h},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:N,widgetState:null}).catch(Se)},Z=[C,a,h,O,u,T,N],t[78]=C,t[79]=a,t[80]=h,t[81]=O,t[82]=u,t[83]=T,t[84]=N,t[85]=X,t[86]=Z):(X=t[85],Z=t[86]),(0,J.useEffect)(X,Z);let Ge;return t[87]===Symbol.for(`react.memo_cache_sentinel`)?(Ge=(0,Re.jsx)(`div`,{ref:b,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`}),t[87]=Ge):Ge=t[87],Ge}function Se(){}function Ce(){}function we(){}function Te(){}function Ee(){return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`))}function De(){return{mode:`inline`}}function Oe(){}function ke(){}function Ae(){}function je(){}function Me(){}function Ne(){return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`))}function Pe(e){return/(?:^|[._])(?:wallet_)?save_vgs_card$/.test(e.name)}function Fe(e){return e+1}async function Ie(e,t,n){for await(let r of e){if(t.aborted)return`aborted`;if(T.safeParse(r).success)return n(),`running`}return`ended`}var Le,J,Re,ze,Be,Ve,He,Ue,We,Y,X=e((()=>{Le=b(),f(),m(),a(),J=t(h(),1),s(),x(),ie(),ce(),O(),ue(),N(),w(),re(),K(),Re=ee(),ze=_({vgs_collect_bootstrap:_({access_token:l().trim().min(1),environment:y([`sandbox`,`live`]),force_staging_env:p(),vault_id:l().trim().min(1)})}),Be=_({force_staging_env:p(),vgs_card_id:l().trim().min(1)}),Ve=_({card:_({last4:l()}),ok:i(!0)}),He=_({duration_ms:u().nonnegative(),result:y([`failure`,`success`]),stage:y([`fields_ready`,`save`,`sdk_load`,`submit`])}),Ue=_({}).strict(),We=15e3,Y=o({bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`}})}));function Z(e){let t=(0,Je.c)(2),n;return t[0]===e?n=t[1]:(n=(0,$.jsx)(Ge,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function Ge(e){let t=(0,Je.c)(20),{dismissAnnouncement:n,enrollmentView:r}=e,[i,a]=(0,Q.useState)(`introduction`),[o,s]=(0,Q.useState)(1),[c,l]=(0,Q.useState)(!1),[u,d]=(0,Q.useState)(`loading`),[f,p]=(0,Q.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==u||t[3]!==i?(m=i===`introduction`?(0,$.jsx)(Ye,{dismissAnnouncement:n,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&a(`enrollment`)}}):(0,$.jsx)(qe,{completed:i===`success`,dismissAnnouncement:n,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),a(`introduction`)},onRetry:()=>{d(`loading`),s(Ke)}}),t[0]=n,t[1]=c,t[2]=u,t[3]=i,t[4]=m):m=t[4];let h=i===`enrollment`&&u!==`error`,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a(`success`)},t[5]=g):g=t[5];let _,v;t[6]===c?(_=t[7],v=t[8]):(_=()=>{d(`error`),c&&a(`enrollment`)},v=()=>{d(`ready`),c&&a(`enrollment`)},t[6]=c,t[7]=_,t[8]=v);let y=i!==`success`&&u!==`error`,b;t[9]!==o||t[10]!==r||t[11]!==f||t[12]!==h||t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,$.jsx)(q,{active:h,enrollmentAttempt:o,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},o),t[9]=o,t[10]=r,t[11]=f,t[12]=h,t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;return t[17]!==m||t[18]!==b?(x=(0,$.jsxs)($.Fragment,{children:[m,b]}),t[17]=m,t[18]=b,t[19]=x):x=t[19],x}function Ke(e){return e+1}function qe(e){let t=(0,Je.c)(22),{completed:n,dismissAnnouncement:r,onBack:i,onRetry:a,preparationFailed:o,setSandboxTarget:s}=e,l=o!==void 0&&o,u=F(),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d={"aria-describedby":void 0},t[0]=d):d=t[0];let f;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[1]=f):f=t[1];let p;t[2]===r?p=t[3]:(p=e=>{e||r()},t[2]=r,t[3]=p);let m;t[4]!==n||t[5]!==a||t[6]!==l||t[7]!==s||t[8]!==u?(m=n?(0,$.jsx)(c.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!u&&{opacity:0,y:12},transition:{duration:u?0:.28},children:(0,$.jsx)(z,{className:`items-center text-center`,icon:(0,$.jsx)(c.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!u&&{rotate:-18,scale:0},transition:u?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,$.jsx)(E,{className:`icon-base`})}),iconBackgroundClassName:`bg-chart-green/20`,iconClassName:`mx-auto text-chart-green`,title:(0,$.jsx)(P,{children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):l?(0,$.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,$.jsx)(P,{children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(`p`,{role:`alert`,className:`text-secondary`,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(L,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:a,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(P,{className:`sr-only`,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,$.jsx)(`div`,{ref:s,className:`relative min-h-0 flex-1 overflow-hidden bg-surface`})]}),t[4]=n,t[5]=a,t[6]=l,t[7]=s,t[8]=u,t[9]=m):m=t[9];let h=n?`primary`:`ghostTertiary`,g=n?r:i,_;t[10]===n?_=t[11]:(_=n?(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[10]=n,t[11]=_);let v;t[12]!==h||t[13]!==g||t[14]!==_?(v=(0,$.jsx)(`div`,{className:`shrink-0 bg-surface px-6 pb-6`,children:(0,$.jsx)(L,{className:`w-full justify-center`,color:h,size:`large`,onClick:g,children:_})}),t[12]=h,t[13]=g,t[14]=_,t[15]=v):v=t[15];let y;t[16]!==m||t[17]!==v?(y=(0,$.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[m,v]}),t[16]=m,t[17]=v,t[18]=y):y=t[18];let b;return t[19]!==y||t[20]!==p?(b=(0,$.jsx)(R,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,contentProps:d,dialogCloseClassName:`z-10`,dialogCloseLabel:f,onOpenChange:p,size:`feature`,children:y}),t[19]=y,t[20]=p,t[21]=b):b=t[21],b}var Je,Q,$,Ye;e((()=>{Je=b(),te(),Q=t(h(),1),s(),B(),pe(),M(),k(),I(),A(),X(),$=ee(),S(),Ye=j(async()=>(await v(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-CgPSqcJa.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).WalletOnboardingAnnouncementModal)}))();export{Z as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-B-CihHoZ.js.map