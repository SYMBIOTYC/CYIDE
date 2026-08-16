const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-DrV1ljrg.js","./rolldown-runtime-DAXXjFlN.js","./app-initial-CireNHNv.js","./app-initial-BYsFXcPC.js","./app-initial-C376p2QZ.css","./app-initial-5_-W2BGj.css","./wallet-onboarding-announcement-modal-BNbVOaNH.css"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{BH as n,DH as r,EK as i,FH as a,FN as o,GK as s,IH as c,JI as l,KK as u,NH as d,Sy as f,UK as p,WK as m,YI as h,ZI as g,ZM as _,_K as v,cy as y,iN as b,mH as x,rN as ee,vK as te,xH as S,xK as C,zK as w}from"./app-initial-CireNHNv.js";import{$$ as T,$1 as ne,GG as E,J$ as re,JG as ie,KG as D,Nit as ae,Pit as O,Q1 as oe,QG as k,WG as se,X1 as ce,XG as le,YG as A,Z1 as j,ZG as M,c0 as ue,d0 as de,e1 as N,gat as P,hat as fe,i0 as pe,l0 as me,lK as F,m0 as he,n0 as ge,nK as I,oK as L,p0 as _e,q$ as R,qG as ve,sK as z,t0 as B,uK as V}from"./app-initial-BYsFXcPC.js";function ye(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
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
</html>`}var H,U,W,be,G,K,q=e((()=>{H=`__wallet_onboarding_retry_bootstrap`,U=`__wallet_onboarding_save_vgs_card`,W=`__wallet_onboarding_stage`,be={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},G=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,K=15e3}));function J(e){let t=(0,Ie.c)(88),{active:n,enrollmentAttempt:r,enrollmentView:a,onComplete:o,onPreparationError:s,onPrepared:c,preparing:u,targetElement:d}=e,f=ee(fe),p=i(),m=b(ie),g=(0,Y.useId)(),_=(0,Y.useRef)(n),v=(0,Y.useRef)(!1),y=(0,Y.useRef)(null),x;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(x=new Map,t[0]=x):x=t[0];let te=(0,Y.useRef)(x),[S,C]=(0,Y.useState)(0),[w,T]=(0,Y.useState)(null),[E,re]=(0,Y.useState)(null),[D,ae]=(0,Y.useState)(null),[k,le]=(0,Y.useState)(!1),A,j,M;if(t[1]!==a.server||t[2]!==a.tool||t[3]!==p.locale||t[4]!==g){A=oe({server:a.server,tool:a.tool});let e=ne({connectorId:A,instanceFallbackId:`wallet-onboarding-${g}`,server:a.server});j=me({locale:p.locale,originScope:e,widgetDomain:null}),M=ue({originScope:e,sourceUrl:j,widgetDomain:null}),t[1]=a.server,t[2]=a.tool,t[3]=p.locale,t[4]=g,t[5]=A,t[6]=j,t[7]=M}else A=t[5],j=t[6],M=t[7];let N=M,P=`wallet-onboarding-${g}`,F;t[8]!==n||t[9]!==w?.metadata||t[10]!==A||t[11]!==a.hostId||t[12]!==a.server||t[13]!==a.serverTools||t[14]!==o||t[15]!==s||t[16]!==c||t[17]!==u||t[18]!==f?(F=async(e,t)=>{if(e===`__wallet_onboarding_stage`){let e=Ve.parse(t);return O.info(`wallet_onboarding_sandbox.stage`,{safe:e}),u&&e.stage===`fields_ready`&&(e.result===`success`?c():s()),{}}if(e===`__wallet_onboarding_retry_bootstrap`){if(!n)throw Error(`Wallet onboarding enrollment is not active`);return He.parse(t),C(Pe),{}}if(e!==`__wallet_onboarding_save_vgs_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!n)throw Error(`Wallet onboarding enrollment is not active`);let r=ze.parse(t),i=Re.safeParse(w?.metadata);if(!i.success||r.force_staging_env!==i.data.vgs_collect_bootstrap.force_staging_env)throw Error(`Wallet card environment does not match enrollment`);let l=a.serverTools.find(Ne);if(l==null)throw Error(`Wallet save tool is unavailable`);let d=pe({connectorId:A,server:a.server,toolName:l.name,tools:a.serverTools}),p=await ce(f,a.hostId,a.server,d.name,r),m=de({isCodexAppsServer:ge(a.server),toolResult:p});return m.isError!==!0&&Be.safeParse(m.structuredContent).success&&(_.current?o():v.current=!0),m},t[8]=n,t[9]=w?.metadata,t[10]=A,t[11]=a.hostId,t[12]=a.server,t[13]=a.serverTools,t[14]=o,t[15]=s,t[16]=c,t[17]=u,t[18]=f,t[19]=F):F=t[19];let he=(0,Y.useEffectEvent)(F),I;t[20]===s?I=t[21]:(I=()=>{s()},t[20]=s,t[21]=I);let L=(0,Y.useEffectEvent)(I),R;t[22]!==n||t[23]!==o?(R=()=>{n&&v.current&&(v.current=!1,o())},t[22]=n,t[23]=o,t[24]=R):R=t[24];let ve=(0,Y.useEffectEvent)(R),z,B;t[25]===N?(z=t[26],B=t[27]):(z=()=>{let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,l(N)),ae(e),()=>{e.remove(),e.destroy?.(),ae(t=>t===e?null:t)}},B=[N],t[25]=N,t[26]=z,t[27]=B),(0,Y.useLayoutEffect)(z,B);let V;t[28]!==n||t[29]!==ve||t[30]!==D||t[31]!==d?(V=()=>{if(_.current=n,ve(),D==null)return;let e=n?d:y.current;e!=null&&D.parentElement!==e&&e.appendChild(D)},t[28]=n,t[29]=ve,t[30]=D,t[31]=d,t[32]=V):V=t[32];let H;t[33]!==n||t[34]!==D||t[35]!==d?(H=[n,D,d],t[33]=n,t[34]=D,t[35]=d,t[36]=H):H=t[36],(0,Y.useLayoutEffect)(V,H);let U;t[37]!==L||t[38]!==he||t[39]!==p||t[40]!==D||t[41]!==N||t[42]!==f||t[43]!==j||t[44]!==P?(U=()=>{if(D==null)return;let e=h(j,{requireSkybridge:!0});if(e==null){O.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),L();return}let t=new AbortController,n,r=performance.now();le(!1);let i=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`,a=f.get(ie),o=ye({bootstrapError:p.formatMessage(X.bootstrapError),cardNumber:p.formatMessage(X.cardNumber),cvc:p.formatMessage(X.cvc),cvcPlaceholder:p.formatMessage(X.cvcPlaceholder),error:p.formatMessage(X.error),expiration:p.formatMessage(X.expiration),expirationPlaceholder:p.formatMessage(X.expirationPlaceholder),initializing:p.formatMessage(X.initializing),numberPlaceholder:p.formatMessage(X.numberPlaceholder),privacy:p.formatMessage(X.privacy),retry:p.formatMessage(X.retry),retrySave:p.formatMessage(X.retrySave),saveError:p.formatMessage(X.saveError),submit:p.formatMessage(X.submit),submitting:p.formatMessage(X.submitting),title:p.formatMessage(X.title),validationError:p.formatMessage(X.validationError)},{styleVariables:a,theme:i});return se({hostApiHandlers:{callMcp:Me,callTool:(e,t)=>he(e,t),notifyBackgroundColor:je,notifyEnvironmentError:()=>{O.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),L()},notifyIntrinsicHeight:Ae,notifyIntrinsicWidth:ke,notifyNavigation:Oe,notifySecurityPolicyViolation:()=>{O.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),L()},openExternal:De,requestDisplayMode:Ee,sendFollowUpMessage:Te,sendInstrument:we,updateWidgetState:Ce},origin:e,sandboxId:N,signal:t.signal,sourceUrl:j,webview:D}).then(async e=>{if(t.signal.aborted)return;re(e);let s=e.runWidgetCode({csp:be,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:be}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:p.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:P,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(O.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),L(),t.abort())},Ue),await Fe(s,t.signal,()=>{clearTimeout(n),le(!0),O.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}})})===`ended`&&(clearTimeout(n),t.signal.aborted||(O.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),L()))}).catch(e=>{t.signal.aborted||(O.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),L())}),()=>{clearTimeout(n),t.abort(),le(!1),re(null)}},t[37]=L,t[38]=he,t[39]=p,t[40]=D,t[41]=N,t[42]=f,t[43]=j,t[44]=P,t[45]=U):U=t[45];let W;t[46]!==p||t[47]!==D||t[48]!==N||t[49]!==f||t[50]!==j||t[51]!==P?(W=[p,D,N,f,j,P],t[46]=p,t[47]=D,t[48]=N,t[49]=f,t[50]=j,t[51]=P,t[52]=W):W=t[52],(0,Y.useLayoutEffect)(U,W);let G;t[53]!==S||t[54]!==A||t[55]!==r||t[56]!==a.hostId||t[57]!==a.server||t[58]!==a.tool.name||t[59]!==L||t[60]!==u||t[61]!==f?(G=()=>{if(!u||r===0)return;let e=JSON.stringify([A,a.hostId,a.server,a.tool.name,r,S]);T({attempt:r,metadata:null,retry:S,status:`loading`});let t=te.current.get(e);if(t==null){let n=performance.now();t=ce(f,a.hostId,a.server,a.tool.name,{force_staging_env:!1}).then(e=>(O.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-n))}}),e)),te.current.set(e,t)}let n=!1,i=setTimeout(()=>{n||(n=!0,O.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),T({attempt:r,metadata:null,retry:S,status:`error`}),L())},Ue);return t.then(e=>{if(n)return;let t=_e({toolResult:de({isCodexAppsServer:ge(a.server),toolResult:e})}),i=Re.safeParse(t);T({attempt:r,metadata:i.success?i.data:null,retry:S,status:i.success?`ready`:`error`}),i.success||L()}).catch(e=>{n||(O.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),T({attempt:r,metadata:null,retry:S,status:`error`}),L())}).finally(()=>{clearTimeout(i)}),()=>{n=!0,clearTimeout(i)}},t[53]=S,t[54]=A,t[55]=r,t[56]=a.hostId,t[57]=a.server,t[58]=a.tool.name,t[59]=L,t[60]=u,t[61]=f,t[62]=G):G=t[62];let K;t[63]!==S||t[64]!==A||t[65]!==r||t[66]!==a.hostId||t[67]!==a.server||t[68]!==a.tool.name||t[69]!==u||t[70]!==f?(K=[S,A,r,a.hostId,a.server,a.tool.name,u,f],t[63]=S,t[64]=A,t[65]=r,t[66]=a.hostId,t[67]=a.server,t[68]=a.tool.name,t[69]=u,t[70]=f,t[71]=K):K=t[71],(0,Y.useEffect)(G,K);let q,J;t[72]!==m||t[73]!==p.locale||t[74]!==k||t[75]!==E?(q=()=>{if(!k||E==null)return;let e=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`;Promise.all([E.setTheme({theme:e}),E.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:p.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:m},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(Se)},J=[m,p.locale,k,E],t[72]=m,t[73]=p.locale,t[74]=k,t[75]=E,t[76]=q,t[77]=J):(q=t[76],J=t[77]),(0,Y.useEffect)(q,J);let Z,We;t[78]!==w||t[79]!==r||t[80]!==m||t[81]!==k||t[82]!==u||t[83]!==E||t[84]!==P?(Z=()=>{if(!k||E==null)return;let e=u&&w?.attempt===r?w:null;E.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:m},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:P,widgetState:null}).catch(xe)},We=[w,r,m,k,u,E,P],t[78]=w,t[79]=r,t[80]=m,t[81]=k,t[82]=u,t[83]=E,t[84]=P,t[85]=Z,t[86]=We):(Z=t[85],We=t[86]),(0,Y.useEffect)(Z,We);let Ge;return t[87]===Symbol.for(`react.memo_cache_sentinel`)?(Ge=(0,Le.jsx)(`div`,{ref:y,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`}),t[87]=Ge):Ge=t[87],Ge}function xe(){}function Se(){}function Ce(){}function we(){}function Te(){return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`))}function Ee(){return{mode:`inline`}}function De(){}function Oe(){}function ke(){}function Ae(){}function je(){}function Me(){return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`))}function Ne(e){return/(?:^|[._])(?:wallet_)?save_vgs_card$/.test(e.name)}function Pe(e){return e+1}async function Fe(e,t,n){for await(let r of e){if(t.aborted)return`aborted`;if(D.safeParse(r).success)return n(),`running`}return`ended`}var Ie,Y,Le,Re,ze,Be,Ve,He,Ue,X,Z=e((()=>{Ie=w(),_(),o(),g(),Y=t(m(),1),te(),x(),ve(),E(),he(),B(),j(),P(),ae(),q(),Le=p(),Re=c({vgs_collect_bootstrap:c({access_token:n().trim().min(1),environment:S([`sandbox`,`live`]),force_staging_env:r(),vault_id:n().trim().min(1)})}),ze=c({force_staging_env:r(),vgs_card_id:n().trim().min(1)}),Be=c({card:c({last4:n()}),ok:d(!0)}),Ve=c({duration_ms:a().nonnegative(),result:S([`failure`,`success`]),stage:S([`fields_ready`,`save`,`sdk_load`,`submit`])}),He=c({}).strict(),Ue=15e3,X=v({bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`}})}));function We(e){let t=(0,Je.c)(2),n;return t[0]===e?n=t[1]:(n=(0,$.jsx)(Ge,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function Ge(e){let t=(0,Je.c)(20),{dismissAnnouncement:n,enrollmentView:r}=e,[i,a]=(0,Q.useState)(`introduction`),[o,s]=(0,Q.useState)(1),[c,l]=(0,Q.useState)(!1),[u,d]=(0,Q.useState)(`loading`),[f,p]=(0,Q.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==u||t[3]!==i?(m=i===`introduction`?(0,$.jsx)(Ye,{dismissAnnouncement:n,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&a(`enrollment`)}}):(0,$.jsx)(qe,{completed:i===`success`,dismissAnnouncement:n,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),a(`introduction`)},onRetry:()=>{d(`loading`),s(Ke)}}),t[0]=n,t[1]=c,t[2]=u,t[3]=i,t[4]=m):m=t[4];let h=i===`enrollment`&&u!==`error`,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a(`success`)},t[5]=g):g=t[5];let _,v;t[6]===c?(_=t[7],v=t[8]):(_=()=>{d(`error`),c&&a(`enrollment`)},v=()=>{d(`ready`),c&&a(`enrollment`)},t[6]=c,t[7]=_,t[8]=v);let y=i!==`success`&&u!==`error`,b;t[9]!==o||t[10]!==r||t[11]!==f||t[12]!==h||t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,$.jsx)(J,{active:h,enrollmentAttempt:o,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},o),t[9]=o,t[10]=r,t[11]=f,t[12]=h,t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;return t[17]!==m||t[18]!==b?(x=(0,$.jsxs)($.Fragment,{children:[m,b]}),t[17]=m,t[18]=b,t[19]=x):x=t[19],x}function Ke(e){return e+1}function qe(e){let t=(0,Je.c)(22),{completed:n,dismissAnnouncement:r,onBack:i,onRetry:a,preparationFailed:o,setSandboxTarget:s}=e,c=o!==void 0&&o,l=N(),u;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u={"aria-describedby":void 0},t[0]=u):u=t[0];let d;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[1]=d):d=t[1];let p;t[2]===r?p=t[3]:(p=e=>{e||r()},t[2]=r,t[3]=p);let m;t[4]!==n||t[5]!==a||t[6]!==c||t[7]!==s||t[8]!==l?(m=n?(0,$.jsx)(f.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!l&&{opacity:0,y:12},transition:{duration:l?0:.28},children:(0,$.jsx)(I,{className:`items-center text-center`,icon:(0,$.jsx)(f.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!l&&{rotate:-18,scale:0},transition:l?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,$.jsx)(A,{className:`icon-base`})}),iconBackgroundClassName:`bg-chart-green/20`,iconClassName:`mx-auto text-chart-green`,title:(0,$.jsx)(F,{children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):c?(0,$.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,$.jsx)(F,{children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(`p`,{role:`alert`,className:`text-secondary`,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(R,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:a,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F,{className:`sr-only`,children:(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,$.jsx)(`div`,{ref:s,className:`relative min-h-0 flex-1 overflow-hidden bg-surface`})]}),t[4]=n,t[5]=a,t[6]=c,t[7]=s,t[8]=l,t[9]=m):m=t[9];let h=n?`primary`:`ghostTertiary`,g=n?r:i,_;t[10]===n?_=t[11]:(_=n?(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,$.jsx)(C,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[10]=n,t[11]=_);let v;t[12]!==h||t[13]!==g||t[14]!==_?(v=(0,$.jsx)(`div`,{className:`shrink-0 bg-surface px-6 pb-6`,children:(0,$.jsx)(R,{className:`w-full justify-center`,color:h,size:`large`,onClick:g,children:_})}),t[12]=h,t[13]=g,t[14]=_,t[15]=v):v=t[15];let y;t[16]!==m||t[17]!==v?(y=(0,$.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[m,v]}),t[16]=m,t[17]=v,t[18]=y):y=t[18];let b;return t[19]!==y||t[20]!==p?(b=(0,$.jsx)(z,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,contentProps:u,dialogCloseClassName:`z-10`,dialogCloseLabel:d,onOpenChange:p,size:`feature`,children:y}),t[19]=y,t[20]=p,t[21]=b):b=t[21],b}var Je,Q,$,Ye;e((()=>{Je=w(),y(),Q=t(m(),1),te(),re(),V(),L(),M(),T(),le(),Z(),$=p(),u(),Ye=k(async()=>(await s(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-DrV1ljrg.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).WalletOnboardingAnnouncementModal)}))();export{We as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-Chwxd8k8.js.map