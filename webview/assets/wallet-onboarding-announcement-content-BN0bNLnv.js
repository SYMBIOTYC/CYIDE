const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-wUPL-njN.js","./rolldown-runtime-DAXXjFlN.js","./app-initial-CM3BD-Et.js","./app-initial-HCwVBrOJ.js","./app-initial-C04DnOfC.css","./app-initial-DoX22WEG.js","./app-initial-B6Ke1C0E.css","./app-initial-D3gwM32-.css","./wallet-onboarding-announcement-modal-BypdusLM.css"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{KL as n,QA as r,XC as i,YC as a,ZA as o,aw as s,cw as c,ew as l,iw as u,qL as d,sw as f}from"./app-initial-CM3BD-Et.js";import{$D as p,$O as m,A_ as h,Bx as g,ED as _,Hx as v,PD as y,TD as b,VD as x,bc as S,hD as C,j_ as w,kD as T,nO as E,nc as D,nk as O,oO as k,ov as A,qD as j,rk as M,tO as N,w_ as P,zx as ee}from"./app-initial-HCwVBrOJ.js";import{$I as te,BI as ne,G1 as re,GI as ie,HI as ae,HW as F,JI as oe,K1 as se,KI as I,QI as ce,UI as le,VI as ue,VW as de,cL as fe,d1 as pe,dL as me,f1 as L,fL as R,iL as he,lL as ge,mL as _e,pL as ve,rL as ye,tL as z,uL as be}from"./app-initial-DoX22WEG.js";function xe(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
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
        const retryTool = ${JSON.stringify(B)};
        const saveTool = ${JSON.stringify(V)};
        const stageTool = ${JSON.stringify(H)};
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
</html>`}var B,V,H,U,W,G,Se=e((()=>{B=`__wallet_onboarding_retry_bootstrap`,V=`__wallet_onboarding_save_vgs_card`,H=`__wallet_onboarding_stage`,U={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},W=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,G=15e3}));function Ce({active:e,enrollmentAttempt:t,enrollmentView:n,onComplete:r,onPreparationError:i,onPrepared:a,preparing:o,targetElement:s}){let c=y(),l=h(re),u=w(R),d=(0,K.useId)(),f=(0,K.useRef)(e),p=(0,K.useRef)(!1),m=(0,K.useRef)(null),_=(0,K.useRef)(new Map),[v,b]=(0,K.useState)(0),[x,S]=(0,K.useState)(null),[C,T]=(0,K.useState)(null),[E,D]=(0,K.useState)(null),[O,k]=(0,K.useState)(!1),A=ae({server:n.server,tool:n.tool}),j=le({connectorId:A,instanceFallbackId:`wallet-onboarding-${d}`,server:n.server}),M=te({locale:c.locale,originScope:j,widgetDomain:null}),N=ce({originScope:j,sourceUrl:M}),P=`wallet-onboarding-${d}`,ie=(0,K.useEffectEvent)(async(t,s)=>{if(t===`__wallet_onboarding_stage`){let e=De.parse(s);return L.info(`wallet_onboarding_sandbox.stage`,{safe:e}),o&&e.stage===`fields_ready`&&(e.result===`success`?a():i()),{}}if(t===`__wallet_onboarding_retry_bootstrap`){if(!e)throw Error(`Wallet onboarding enrollment is not active`);return Oe.parse(s),b(e=>e+1),{}}if(t!==`__wallet_onboarding_save_vgs_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!e)throw Error(`Wallet onboarding enrollment is not active`);let c=Te.parse(s),u=q.safeParse(x?.metadata);if(!u.success||c.force_staging_env!==u.data.vgs_collect_bootstrap.force_staging_env)throw Error(`Wallet card environment does not match enrollment`);let d=n.serverTools.find(e=>/(?:^|[._])(?:wallet_)?save_vgs_card$/.test(e.name));if(d==null)throw Error(`Wallet save tool is unavailable`);let m=oe({connectorId:A,server:n.server,toolName:d.name,tools:n.serverTools}),h=await ne(l,n.hostId,n.server,m.name,c),g=z({isCodexAppsServer:I(n.server),toolResult:h});return g.isError!==!0&&Ee.safeParse(g.structuredContent).success&&(f.current?r():p.current=!0),g}),F=(0,K.useEffectEvent)(()=>{i()}),se=(0,K.useEffectEvent)(()=>{e&&p.current&&(p.current=!1,r())});return(0,K.useLayoutEffect)(()=>{let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,ee(N)),D(e),()=>{e.remove(),e.destroy?.(),D(t=>t===e?null:t)}},[N]),(0,K.useLayoutEffect)(()=>{if(f.current=e,se(),E==null)return;let t=e?s:m.current;t!=null&&E.parentElement!==t&&t.appendChild(E)},[e,E,s]),(0,K.useLayoutEffect)(()=>{if(E==null)return;let e=g(M,{requireSkybridge:!0});if(e==null){L.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),F();return}let t=new AbortController,n,r=performance.now();k(!1);let i=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`,a=l.get(R),o=xe({bootstrapError:c.formatMessage(Y.bootstrapError),cardNumber:c.formatMessage(Y.cardNumber),cvc:c.formatMessage(Y.cvc),cvcPlaceholder:c.formatMessage(Y.cvcPlaceholder),error:c.formatMessage(Y.error),expiration:c.formatMessage(Y.expiration),expirationPlaceholder:c.formatMessage(Y.expirationPlaceholder),initializing:c.formatMessage(Y.initializing),numberPlaceholder:c.formatMessage(Y.numberPlaceholder),privacy:c.formatMessage(Y.privacy),retry:c.formatMessage(Y.retry),retrySave:c.formatMessage(Y.retrySave),saveError:c.formatMessage(Y.saveError),submit:c.formatMessage(Y.submit),submitting:c.formatMessage(Y.submitting),title:c.formatMessage(Y.title),validationError:c.formatMessage(Y.validationError)},{styleVariables:a,theme:i});return fe({hostApiHandlers:{callMcp:()=>Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`)),callTool:(e,t)=>ie(e,t),notifyBackgroundColor:()=>{},notifyEnvironmentError:()=>{L.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),F()},notifyIntrinsicHeight:()=>{},notifyIntrinsicWidth:()=>{},notifyNavigation:()=>{},notifySecurityPolicyViolation:()=>{L.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),F()},openExternal:()=>{},requestDisplayMode:()=>({mode:`inline`}),sendFollowUpMessage:()=>Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`)),sendInstrument:()=>{},updateWidgetState:()=>{}},origin:e,sandboxId:N,signal:t.signal,sourceUrl:M,webview:E}).then(async e=>{if(t.signal.aborted)return;T(e);let s=e.runWidgetCode({csp:U,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:U}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:c.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:P,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(L.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),F(),t.abort())},J);for await(let e of s){if(t.signal.aborted)return;if(be.safeParse(e).success){clearTimeout(n),k(!0),L.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}});return}}clearTimeout(n),t.signal.aborted||(L.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),F())}).catch(e=>{t.signal.aborted||(L.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),F())}),()=>{clearTimeout(n),t.abort(),k(!1),T(null)}},[c,E,N,l,M,P]),(0,K.useEffect)(()=>{if(!o||t===0)return;let e=JSON.stringify([A,n.hostId,n.server,n.tool.name,t,v]);S({attempt:t,metadata:null,retry:v,status:`loading`});let r=_.current.get(e);if(r==null){let t=performance.now();r=ne(l,n.hostId,n.server,n.tool.name,{force_staging_env:!1}).then(e=>(L.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-t))}}),e)),_.current.set(e,r)}let i=!1,a=setTimeout(()=>{i||(i=!0,L.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),S({attempt:t,metadata:null,retry:v,status:`error`}),F())},J);return r.then(e=>{if(i)return;let r=ye({toolResult:z({isCodexAppsServer:I(n.server),toolResult:e})}),a=q.safeParse(r);S({attempt:t,metadata:a.success?a.data:null,retry:v,status:a.success?`ready`:`error`}),a.success||F()}).catch(e=>{i||(L.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),S({attempt:t,metadata:null,retry:v,status:`error`}),F())}).finally(()=>{clearTimeout(a)}),()=>{i=!0,clearTimeout(a)}},[v,A,t,n.hostId,n.server,n.tool.name,o,l]),(0,K.useEffect)(()=>{if(!O||C==null)return;let e=getComputedStyle(document.documentElement).colorScheme===`dark`?`dark`:`light`;Promise.all([C.setTheme({theme:e}),C.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:c.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:u},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(()=>void 0)},[u,c.locale,O,C]),(0,K.useEffect)(()=>{if(!O||C==null)return;let e=o&&x?.attempt===t?x:null;C.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:u},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:P,widgetState:null}).catch(()=>void 0)},[x,t,u,O,o,C,P]),(0,we.jsx)(`div`,{ref:m,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`})}var K,we,q,Te,Ee,De,Oe,J,Y,ke=e((()=>{P(),A(),v(),K=t(M(),1),_(),C(),me(),ge(),he(),ie(),ue(),se(),pe(),Se(),we=O(),q=E({vgs_collect_bootstrap:E({access_token:k().trim().min(1),environment:x([`sandbox`,`live`]),force_staging_env:j(),vault_id:k().trim().min(1)})}),Te=E({force_staging_env:j(),vgs_card_id:k().trim().min(1)}),Ee=E({card:E({last4:k()}),ok:p(!0)}),De=E({duration_ms:N().finite().nonnegative(),result:x([`failure`,`success`]),stage:x([`fields_ready`,`save`,`sdk_load`,`submit`])}),Oe=E({}).strict(),J=15e3,Y=b({bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`}})}));function Ae(e){let t=(0,X.c)(2),n;return t[0]===e?n=t[1]:(n=(0,Q.jsx)(je,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function je(e){let t=(0,X.c)(20),{dismissAnnouncement:n,enrollmentView:r}=e,[i,a]=(0,Z.useState)(`introduction`),[o,s]=(0,Z.useState)(1),[c,l]=(0,Z.useState)(!1),[u,d]=(0,Z.useState)(`loading`),[f,p]=(0,Z.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==u||t[3]!==i?(m=i===`introduction`?(0,Q.jsx)($,{dismissAnnouncement:n,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&a(`enrollment`)}}):(0,Q.jsx)(Ne,{completed:i===`success`,dismissAnnouncement:n,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),a(`introduction`)},onRetry:()=>{d(`loading`),s(Me)}}),t[0]=n,t[1]=c,t[2]=u,t[3]=i,t[4]=m):m=t[4];let h=i===`enrollment`&&u!==`error`,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a(`success`)},t[5]=g):g=t[5];let _,v;t[6]===c?(_=t[7],v=t[8]):(_=()=>{d(`error`),c&&a(`enrollment`)},v=()=>{d(`ready`),c&&a(`enrollment`)},t[6]=c,t[7]=_,t[8]=v);let y=i!==`success`&&u!==`error`,b;t[9]!==o||t[10]!==r||t[11]!==f||t[12]!==h||t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,Q.jsx)(Ce,{active:h,enrollmentAttempt:o,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},o),t[9]=o,t[10]=r,t[11]=f,t[12]=h,t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;return t[17]!==m||t[18]!==b?(x=(0,Q.jsxs)(Q.Fragment,{children:[m,b]}),t[17]=m,t[18]=b,t[19]=x):x=t[19],x}function Me(e){return e+1}function Ne(e){let t=(0,X.c)(22),{completed:n,dismissAnnouncement:r,onBack:i,onRetry:a,preparationFailed:c,setSandboxTarget:u}=e,d=c!==void 0&&c,p=F(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m={"aria-describedby":void 0},t[0]=m):m=t[0];let h;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(h=(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[1]=h):h=t[1];let g;t[2]===r?g=t[3]:(g=e=>{e||r()},t[2]=r,t[3]=g);let _;t[4]!==n||t[5]!==a||t[6]!==d||t[7]!==u||t[8]!==p?(_=n?(0,Q.jsx)(S.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!p&&{opacity:0,y:12},transition:{duration:p?0:.28},children:(0,Q.jsx)(l,{className:`items-center text-center`,icon:(0,Q.jsx)(S.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!p&&{rotate:-18,scale:0},transition:p?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,Q.jsx)(ve,{className:`icon-base`})}),iconBackgroundClassName:`bg-token-charts-green/20`,iconClassName:`mx-auto text-token-charts-green`,title:(0,Q.jsx)(f,{children:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):d?(0,Q.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,Q.jsx)(f,{children:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,Q.jsx)(`p`,{role:`alert`,className:`text-token-text-secondary`,children:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,Q.jsx)(o,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:a,children:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(f,{className:`sr-only`,children:(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,Q.jsx)(`div`,{ref:u,className:`relative min-h-0 flex-1 overflow-hidden bg-token-main-surface-primary`})]}),t[4]=n,t[5]=a,t[6]=d,t[7]=u,t[8]=p,t[9]=_):_=t[9];let v=n?`primary`:`ghostTertiary`,y=n?r:i,b;t[10]===n?b=t[11]:(b=n?(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,Q.jsx)(T,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[10]=n,t[11]=b);let x;t[12]!==v||t[13]!==y||t[14]!==b?(x=(0,Q.jsx)(`div`,{className:`shrink-0 bg-token-main-surface-primary px-6 pb-6`,children:(0,Q.jsx)(o,{className:`w-full justify-center`,color:v,size:`large`,onClick:y,children:b})}),t[12]=v,t[13]=y,t[14]=b,t[15]=x):x=t[15];let C;t[16]!==_||t[17]!==x?(C=(0,Q.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[_,x]}),t[16]=_,t[17]=x,t[18]=C):C=t[18];let w;return t[19]!==C||t[20]!==g?(w=(0,Q.jsx)(s,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-token-main-surface-primary !ring-0 !backdrop-blur-none`,contentProps:m,dialogCloseClassName:`z-10`,dialogCloseLabel:h,onOpenChange:g,size:`feature`,children:C}),t[19]=C,t[20]=g,t[21]=w):w=t[21],w}var X,Z,Q,$;e((()=>{X=m(),D(),Z=t(M(),1),_(),r(),c(),u(),a(),de(),_e(),ke(),Q=O(),d(),$=i(async()=>(await n(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-wUPL-njN.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)).WalletOnboardingAnnouncementModal)}))();export{Ae as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-BN0bNLnv.js.map