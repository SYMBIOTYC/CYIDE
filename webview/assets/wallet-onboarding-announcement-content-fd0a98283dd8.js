const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-5161462b6906.js","./rolldown-runtime-2d059c5e81f4.js","./app-initial-4a1ac6d05078.js","./app-initial-e1095a48091e.js","./app-initial-23be8abe8439.js","./app-initial-7fbec03626d9.js","./app-initial-ce8b4fe905da.css","./app-initial-cf2a0dc5e52a.css","./app-initial-d81a07d4d6d9.css","./app-initial-d76f48e4486a.css","./wallet-onboarding-announcement-modal-8f48697b05eb.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{$Z as t,C6 as n,E5 as r,G5 as i,HQ as a,JZ as o,KZ as s,Tnt as c,V5 as l,VQ as u,W5 as d,Y5 as f,ZZ as p,aB as m,att as h,b5 as g,j5 as _,ltt as v,mtt as y,oB as b,ott as x,w6 as ee,wnt as S,ynt as te}from"./app-initial-4a1ac6d05078.js";import{Blt as ne,Dw as C,JU as re,R_t as ie,V_t as w,YU as ae,dB as T,ent as E,gB as D,hB as O,jw as oe,kw as k,m9 as se,nnt as A,p9 as ce,pB as j,sB as le,vCt as ue,xpt as M,yCt as de,z_t as fe,zlt as N}from"./app-initial-e1095a48091e.js";import{AV as P,Aut as F,E1 as pe,Gft as me,Kft as he,MV as I,Ngt as L,Pgt as R,Wft as ge,_D as z,d_t as _e,f1 as ve,f_t as ye,jut as B,kV as be,p1 as V,vD as H,w1 as xe}from"./app-initial-23be8abe8439.js";import{a as Se,n as Ce,o as we,r as Te,t as Ee}from"./sandbox-origin-318c22b4c311.js";function De(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
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
      .verification select, .verification input { width: 100%; height: 32px; border: 0; background: transparent; color: inherit; font: inherit; font-size: 16px; }
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
        <div class="verification" id="verification" hidden>
          <div class="fields">
            <label><span id="verification-option-label"></span><select id="verification-option"></select></label>
          </div>
          <button id="request-code" type="button"></button>
          <div id="code-fields" hidden>
            <div class="fields">
              <label><span id="verification-code-label"></span><input id="verification-code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" /></label>
            </div>
            <button id="verify-code" type="button"></button>
          </div>
        </div>
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
        const sdkUrl = ${JSON.stringify(Y)};
        const fieldInitializationTimeoutMs = ${JSON.stringify(ke)};
        const retryTool = ${JSON.stringify(U)};
        const registerTool = ${JSON.stringify(W)};
        const requestCodeTool = ${JSON.stringify(G)};
        const verifyTool = ${JSON.stringify(K)};
        const finalizeTool = ${JSON.stringify(q)};
        const stageTool = ${JSON.stringify(J)};
        const formRoot = document.getElementById("form");
        const fieldsRoot = document.getElementById("fields");
        const status = document.getElementById("status");
        const error = document.getElementById("error");
        const submit = document.getElementById("submit");
        const retry = document.getElementById("retry");
        const verification = document.getElementById("verification");
        const verificationOption = document.getElementById("verification-option");
        const requestCodeButton = document.getElementById("request-code");
        const codeFields = document.getElementById("code-fields");
        const verificationCode = document.getElementById("verification-code");
        const verifyCodeButton = document.getElementById("verify-code");
        let sdkPromise = null;
        let sdkError = false;
        let activeAttempt = null;
        let form = null;
        let fields = [];
        let fieldValidity = [false, false, false];
        let vaultedCardId = null;
        let registrationReadyToFinalize = false;

        document.getElementById("verification-option-label").textContent = messages.verificationOption;
        document.getElementById("verification-code-label").textContent = messages.verificationCode;
        requestCodeButton.textContent = messages.sendCode;
        verifyCodeButton.textContent = messages.verifyCode;

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
          vaultedCardId = null;
          registrationReadyToFinalize = false;
          verification.hidden = true;
          fieldsRoot.hidden = false;
          document.getElementById("privacy").hidden = false;
          codeFields.hidden = true;
          verificationCode.value = "";
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
          return bootstrap;
        };

        const successfulResult = (response) => {
          const content = response?.structuredContent ?? response?.structured_content;
          if (response?.isError === true || content?.ok !== true) {
            throw new Error("Wallet did not confirm card registration");
          }
          return content;
        };

        const finalizeCard = async () => {
          if (!registrationReadyToFinalize) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          try {
            const result = successfulResult(await globalThis.openai.callTool(finalizeTool, {}));
            if (!result.card || typeof result.card.last4 !== "string") {
              throw new Error("Wallet did not confirm the saved card");
            }
            vaultedCardId = null;
            registrationReadyToFinalize = false;
            reportStage("save", startedAt, "success");
          } catch {
            reportStage("save", startedAt, "failure");
            showError(messages.saveError, messages.retrySave);
          }
        };

        const registerCard = async () => {
          if (!vaultedCardId) return;
          const startedAt = performance.now();
          submit.disabled = true;
          submit.textContent = messages.submitting;
          try {
            const result = successfulResult(await globalThis.openai.callTool(registerTool, {
              vgs_card_id: vaultedCardId,
            }));
            if (typeof result.registration_id !== "string" || !result.registration_id.trim()) {
              throw new Error("Wallet did not provide a registration session");
            }
            vaultedCardId = null;
            if (result.status === "verification_required") {
              if (!Array.isArray(result.verification_options) || result.verification_options.length === 0) {
                throw new Error("Wallet did not provide a verification option");
              }
              verificationOption.replaceChildren();
              for (const option of result.verification_options) {
                if (typeof option?.option_id !== "string" || typeof option?.value !== "string") {
                  throw new Error("Wallet returned an invalid verification option");
                }
                const choice = document.createElement("option");
                choice.value = option.option_id;
                choice.textContent = option.value;
                verificationOption.append(choice);
              }
              fieldsRoot.hidden = true;
              document.getElementById("privacy").hidden = true;
              verification.hidden = false;
              submit.hidden = true;
              return;
            }
            if (result.status !== "ready_to_finalize") {
              throw new Error("Wallet returned an unknown verification status");
            }
            registrationReadyToFinalize = true;
            await finalizeCard();
          } catch {
            reportStage("save", startedAt, "failure");
            showError(messages.saveError, messages.retrySave);
          }
        };

        requestCodeButton.addEventListener("click", async () => {
          requestCodeButton.disabled = true;
          try {
            const result = successfulResult(await globalThis.openai.callTool(requestCodeTool, {
              option_id: verificationOption.value,
            }));
            if (result.status !== "verification_code_sent") {
              throw new Error("Wallet did not send a verification code");
            }
            codeFields.hidden = false;
            verificationCode.value = "";
            error.dataset.visible = "false";
            verificationCode.focus();
          } catch {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
          } finally {
            requestCodeButton.disabled = false;
          }
        });

        verifyCodeButton.addEventListener("click", async () => {
          if (!/^[0-9]{6}$/.test(verificationCode.value)) {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
            return;
          }
          verifyCodeButton.disabled = true;
          try {
            const result = successfulResult(await globalThis.openai.callTool(verifyTool, {
              otp: verificationCode.value,
            }));
            if (result.status !== "ready_to_finalize") {
              throw new Error("Wallet did not verify the card");
            }
            registrationReadyToFinalize = true;
            verification.hidden = true;
            await finalizeCard();
          } catch {
            error.textContent = messages.verificationError;
            error.dataset.visible = "true";
          } finally {
            verifyCodeButton.disabled = false;
          }
        });

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
          if (!verification.hidden) {
            if (!codeFields.hidden) verifyCodeButton.click();
            return;
          }
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
                vaultedCardId = card.id;
                reportStage("submit", startedAt, "success");
                void registerCard();
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
          if (registrationReadyToFinalize || vaultedCardId) {
            error.dataset.visible = "false";
            retry.dataset.visible = "false";
            submit.hidden = false;
            if (registrationReadyToFinalize) void finalizeCard();
            else void registerCard();
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
</html>`}var U,W,G,K,q,J,Oe,Y,ke;function Ae(){return(Ae=e((()=>{U=`__wallet_onboarding_retry_bootstrap`,W=`__wallet_onboarding_register_vgs_card`,G=`__wallet_onboarding_request_verification`,K=`__wallet_onboarding_verify_card`,q=`__wallet_onboarding_finalize_card`,J=`__wallet_onboarding_stage`,Oe={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},Y=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,ke=15e3})))()}function je(e){let t=(0,Je.c)(6),n;t[0]===e.enrollmentView?n=t[1]:(n=z({view:e.enrollmentView}),t[0]=e.enrollmentView,t[1]=n);let r=n,i=p(k,r),a;return t[2]!==r||t[3]!==i||t[4]!==e?(a=i==null?null:(0,Ye.jsx)(Me,{...e,resourceIdentity:{context:r,identity:i}},u([i])),t[2]=r,t[3]=i,t[4]=e,t[5]=a):a=t[5],a}function Me(e){let n=(0,Je.c)(87),{active:r,enrollmentAttempt:a,enrollmentView:s,onComplete:c,onPreparationError:l,onPrepared:u,preparing:d,targetElement:m,resourceIdentity:h}=e,g=o(_e),_=y(),v=t(we),b=(0,X.useId)(),x=(0,X.useRef)(r),ee=(0,X.useRef)(!1),S=(0,X.useRef)(null),te=(0,X.useRef)(null),C;n[0]===Symbol.for(`react.memo_cache_sentinel`)?(C=new Map,n[0]=C):C=n[0];let re=(0,X.useRef)(C),[w,ae]=(0,X.useState)(0),[T,E]=(0,X.useState)(null),[D,O]=(0,X.useState)(null),[k,se]=(0,X.useState)(null),[A,ce]=(0,X.useState)(!1),j=h.identity.kind===`connector`?h.identity.connectorId:null,le;n[1]!==_.locale||n[2]!==h.identity?(le={identity:h.identity,locale:_.locale,widgetDomain:null},n[1]=_.locale,n[2]=h.identity,n[3]=le):le=n[3];let{data:ue}=p(Te,le),M=ue?.sourceUrl,de;n[4]===M?de=n[5]:(de=M==null?null:Ee(M),n[4]=M,n[5]=de);let N=de,P=`wallet-onboarding-${b}`,F;n[6]!==r||n[7]!==T?.metadata||n[8]!==j||n[9]!==s.hostId||n[10]!==s.server||n[11]!==s.serverTools||n[12]!==c||n[13]!==l||n[14]!==u||n[15]!==d||n[16]!==h||n[17]!==g?(F=async(e,t)=>{if(g.get(oe,h)!==`current`)throw Error(`Wallet enrollment account changed`);if(e===`__wallet_onboarding_stage`){let e=et.parse(t);return R.info(`wallet_onboarding_sandbox.stage`,{safe:e}),d&&e.stage===`fields_ready`&&(e.result===`success`?u():l()),{}}if(e===`__wallet_onboarding_retry_bootstrap`){if(!r)throw Error(`Wallet onboarding enrollment is not active`);return tt.parse(t),ae(Ke),{}}if(e!==`__wallet_onboarding_register_vgs_card`&&e!==`__wallet_onboarding_request_verification`&&e!==`__wallet_onboarding_verify_card`&&e!==`__wallet_onboarding_finalize_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!r&&(e!==`__wallet_onboarding_finalize_card`||S.current==null))throw Error(`Wallet onboarding enrollment is not active`);let n=async(e,t)=>{let n=RegExp(`(?:^|[._])(?:wallet_)?${e}$`),r=s.serverTools.find(e=>n.test(e.name));if(r==null)throw Error(`Wallet registration tool is unavailable`);let i=pe({connectorId:j,server:s.server,toolName:r.name,tools:s.serverTools}),a=await ve(g,s.hostId,s.server,i.name,t);if(g.get(oe,h)!==`current`)throw Error(`Wallet enrollment account changed while calling its tool`);return ge({isCodexAppsServer:ne(s.server),toolResult:a})};if(e===`__wallet_onboarding_register_vgs_card`){let e=Ze.parse(t);if(!Xe.safeParse(T?.metadata).success)throw Error(`Wallet card enrollment is unavailable`);S.current=null;let r=await n(`register_vgs_agentic_token`,{vgs_card_id:e.vgs_card_id}),i=Qe.safeParse(r.structuredContent);return r.isError!==!0&&i.success&&(S.current={id:i.data.registration_id,optionIds:new Set(i.data.verification_options.map(Ge))}),r}let a=S.current;if(a==null)throw Error(`Wallet card registration is unavailable`);if(e===`__wallet_onboarding_request_verification`){let{option_id:e}=i({option_id:f()}).parse(t);if(!a.optionIds.has(e))throw Error(`Wallet verification option is unavailable`);return n(`request_vgs_card_verification`,{registration_id:a.id,option_id:e})}if(e===`__wallet_onboarding_verify_card`){let{otp:e}=i({otp:f().regex(/^[0-9]{6}$/)}).parse(t);return n(`verify_vgs_card`,{registration_id:a.id,otp:e})}i({}).strict().parse(t);let o=await n(`finalize_vgs_card_registration`,{registration_id:a.id});return o.isError!==!0&&$e.safeParse(o.structuredContent).success&&(S.current=null,x.current?c():ee.current=!0),o},n[6]=r,n[7]=T?.metadata,n[8]=j,n[9]=s.hostId,n[10]=s.server,n[11]=s.serverTools,n[12]=c,n[13]=l,n[14]=u,n[15]=d,n[16]=h,n[17]=g,n[18]=F):F=n[18];let he=(0,X.useEffectEvent)(F),I;n[19]===l?I=n[20]:(I=()=>{l()},n[19]=l,n[20]=I);let L=(0,X.useEffectEvent)(I),z;n[21]!==r||n[22]!==c?(z=()=>{r&&ee.current&&(ee.current=!1,c())},n[21]=r,n[22]=c,n[23]=z):z=n[23];let ye=(0,X.useEffectEvent)(z),B,V;n[24]===N?(B=n[25],V=n[26]):(B=()=>{if(N==null)return;let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,ie(N)),se(e),()=>{e.remove(),e.destroy?.(),se(t=>t===e?null:t)}},V=[N],n[24]=N,n[25]=B,n[26]=V),(0,X.useLayoutEffect)(B,V);let H;n[27]!==r||n[28]!==ye||n[29]!==k||n[30]!==m?(H=()=>{if(x.current=r,ye(),k==null)return;let e=r?m:te.current;e!=null&&k.parentElement!==e&&e.appendChild(k)},n[27]=r,n[28]=ye,n[29]=k,n[30]=m,n[31]=H):H=n[31];let xe;n[32]!==r||n[33]!==k||n[34]!==m?(xe=[r,k,m],n[32]=r,n[33]=k,n[34]=m,n[35]=xe):xe=n[35],(0,X.useLayoutEffect)(H,xe);let Se;n[36]!==L||n[37]!==he||n[38]!==_||n[39]!==k||n[40]!==N||n[41]!==g||n[42]!==M||n[43]!==P?(Se=()=>{if(k==null||N==null||M==null)return;let e=fe(M,{requireSkybridge:!0});if(e==null){R.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),L();return}let t=new AbortController,n,r=performance.now();ce(!1);let i=document.documentElement.dataset.theme===`dark`?`dark`:`light`,a=g.get(we),o=De({bootstrapError:_.formatMessage(Z.bootstrapError),cardNumber:_.formatMessage(Z.cardNumber),cvc:_.formatMessage(Z.cvc),cvcPlaceholder:_.formatMessage(Z.cvcPlaceholder),error:_.formatMessage(Z.error),expiration:_.formatMessage(Z.expiration),expirationPlaceholder:_.formatMessage(Z.expirationPlaceholder),initializing:_.formatMessage(Z.initializing),numberPlaceholder:_.formatMessage(Z.numberPlaceholder),privacy:_.formatMessage(Z.privacy),retry:_.formatMessage(Z.retry),retrySave:_.formatMessage(Z.retrySave),saveError:_.formatMessage(Z.saveError),sendCode:_.formatMessage(Z.sendCode),submit:_.formatMessage(Z.submit),submitting:_.formatMessage(Z.submitting),title:_.formatMessage(Z.title),validationError:_.formatMessage(Z.validationError),verificationCode:_.formatMessage(Z.verificationCode),verificationError:_.formatMessage(Z.verificationError),verificationOption:_.formatMessage(Z.verificationOption),verifyCode:_.formatMessage(Z.verifyCode)},{styleVariables:a,theme:i});return be({hostApiHandlers:{callMcp:We,callTool:(e,t)=>he(e,t),notifyBackgroundColor:Ue,notifyEnvironmentError:()=>{R.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),L()},notifyIntrinsicHeight:He,notifyIntrinsicWidth:Ve,notifyNavigation:Be,notifySecurityPolicyViolation:()=>{R.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),L()},openExternal:ze,requestDisplayMode:Re,sendFollowUpMessage:Le,sendInstrument:Ie,updateWidgetState:Fe},origin:e,sandboxId:N,signal:t.signal,sourceUrl:M,webview:k}).then(async e=>{if(t.signal.aborted)return;O(e);let s=e.runWidgetCode({csp:Oe,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:Oe}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:_.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:P,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(R.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),L(),t.abort())},nt),await qe(s,t.signal,()=>{clearTimeout(n),ce(!0),R.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}})})===`ended`&&(clearTimeout(n),t.signal.aborted||(R.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),L()))}).catch(e=>{t.signal.aborted||(R.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),L())}),()=>{clearTimeout(n),t.abort(),ce(!1),O(null)}},n[36]=L,n[37]=he,n[38]=_,n[39]=k,n[40]=N,n[41]=g,n[42]=M,n[43]=P,n[44]=Se):Se=n[44];let Ce;n[45]!==_||n[46]!==k||n[47]!==N||n[48]!==g||n[49]!==M||n[50]!==P?(Ce=[_,k,N,g,M,P],n[45]=_,n[46]=k,n[47]=N,n[48]=g,n[49]=M,n[50]=P,n[51]=Ce):Ce=n[51],(0,X.useLayoutEffect)(Se,Ce);let U;n[52]!==w||n[53]!==j||n[54]!==a||n[55]!==s.hostId||n[56]!==s.server||n[57]!==s.tool.name||n[58]!==L||n[59]!==d||n[60]!==g?(U=()=>{if(!d||a===0)return;let e=JSON.stringify([j,s.hostId,s.server,s.tool.name,a,w]);E({attempt:a,metadata:null,retry:w,status:`loading`});let t=re.current.get(e);if(t==null){let n=performance.now();t=ve(g,s.hostId,s.server,s.tool.name,{}).then(e=>(R.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-n))}}),e)),re.current.set(e,t)}let n=!1,r=setTimeout(()=>{n||(n=!0,R.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),E({attempt:a,metadata:null,retry:w,status:`error`}),L())},nt);return t.then(e=>{if(n)return;let t=ge({isCodexAppsServer:ne(s.server),toolResult:e}),r=me({toolResult:t}),i=Xe.safeParse(r);E({attempt:a,metadata:i.success?i.data:null,retry:w,status:i.success?`ready`:`error`}),i.success||L()}).catch(e=>{n||(R.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),E({attempt:a,metadata:null,retry:w,status:`error`}),L())}).finally(()=>{clearTimeout(r)}),()=>{n=!0,clearTimeout(r)}},n[52]=w,n[53]=j,n[54]=a,n[55]=s.hostId,n[56]=s.server,n[57]=s.tool.name,n[58]=L,n[59]=d,n[60]=g,n[61]=U):U=n[61];let W;n[62]!==w||n[63]!==j||n[64]!==a||n[65]!==s.hostId||n[66]!==s.server||n[67]!==s.tool.name||n[68]!==d||n[69]!==g?(W=[w,j,a,s.hostId,s.server,s.tool.name,d,g],n[62]=w,n[63]=j,n[64]=a,n[65]=s.hostId,n[66]=s.server,n[67]=s.tool.name,n[68]=d,n[69]=g,n[70]=W):W=n[70],(0,X.useEffect)(U,W);let G,K;n[71]!==v||n[72]!==_.locale||n[73]!==A||n[74]!==D?(G=()=>{if(!A||D==null)return;let e=document.documentElement.dataset.theme===`dark`?`dark`:`light`;Promise.all([D.setTheme({theme:e}),D.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:_.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:v},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(Pe)},K=[v,_.locale,A,D],n[71]=v,n[72]=_.locale,n[73]=A,n[74]=D,n[75]=G,n[76]=K):(G=n[75],K=n[76]),(0,X.useEffect)(G,K);let q,J;n[77]!==T||n[78]!==a||n[79]!==v||n[80]!==A||n[81]!==d||n[82]!==D||n[83]!==P?(q=()=>{if(!A||D==null)return;let e=d&&T?.attempt===a?T:null;D.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:v},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:P,widgetState:null}).catch(Ne)},J=[T,a,v,A,d,D,P],n[77]=T,n[78]=a,n[79]=v,n[80]=A,n[81]=d,n[82]=D,n[83]=P,n[84]=q,n[85]=J):(q=n[84],J=n[85]),(0,X.useEffect)(q,J);let Y;return n[86]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,Ye.jsx)(`div`,{ref:te,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`}),n[86]=Y):Y=n[86],Y}function Ne(){}function Pe(){}function Fe(){}function Ie(){}function Le(){return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`))}function Re(){return{mode:`inline`}}function ze(){}function Be(){}function Ve(){}function He(){}function Ue(){}function We(){return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`))}function Ge(e){return e.option_id}function Ke(e){return e+1}async function qe(e,t,n){for await(let r of e){if(t.aborted)return`aborted`;if(I.safeParse(r).success)return n(),`running`}return`ended`}var Je,X,Ye,Xe,Ze,Qe,$e,et,tt,nt,Z;function rt(){return(rt=e((()=>{Je=S(),a(),s(),M(),w(),X=c(),x(),g(),C(),N(),Se(),P(),he(),Ce(),xe(),V(),H(),ye(),L(),Ae(),Ye=te(),Xe=i({vgs_collect_bootstrap:i({access_token:f().trim().min(1),environment:r([`sandbox`,`live`]),vault_id:f().trim().min(1)})}),Ze=i({vgs_card_id:f().trim().min(1)}),Qe=i({ok:l(!0),registration_id:f().trim().min(1),status:r([`ready_to_finalize`,`verification_required`]),verification_options:_(i({option_id:f()}))}),$e=i({card:i({last4:f()}),ok:l(!0)}),et=i({duration_ms:d().nonnegative(),result:r([`failure`,`success`]),stage:r([`fields_ready`,`save`,`sdk_load`,`submit`])}),tt=i({}).strict(),nt=15e3,Z=h({bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},sendCode:{id:`codexWalletOnboardingEnrollment.sendCode`,defaultMessage:`Send verification code`,description:`Button to request a one-time card issuer verification code`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`},verificationCode:{id:`codexWalletOnboardingEnrollment.verificationCode`,defaultMessage:`Six-digit verification code`,description:`Label for the one-time code received from the card issuer`},verificationError:{id:`codexWalletOnboardingEnrollment.verificationError`,defaultMessage:`We couldn't verify this card. Try again`,description:`Error shown when the card issuer rejects a verification request or code`},verificationOption:{id:`codexWalletOnboardingEnrollment.verificationOption`,defaultMessage:`Where should we send the verification code?`,description:`Label for choosing a masked email address or phone number supplied by the card issuer`},verifyCode:{id:`codexWalletOnboardingEnrollment.verifyCode`,defaultMessage:`Verify and save`,description:`Button to verify the card issuer's code and save the card to Wallet`}})})))()}function it(e){let t=(0,ct.c)(2),n;return t[0]===e?n=t[1]:(n=(0,$.jsx)(at,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function at(e){let t=(0,ct.c)(20),{dismissAnnouncement:n,enrollmentView:r}=e,[i,a]=(0,Q.useState)(`introduction`),[o,s]=(0,Q.useState)(1),[c,l]=(0,Q.useState)(!1),[u,d]=(0,Q.useState)(`loading`),[f,p]=(0,Q.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==u||t[3]!==i?(m=i===`introduction`?(0,$.jsx)(lt,{dismissAnnouncement:n,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&a(`enrollment`)}}):(0,$.jsx)(st,{completed:i===`success`,dismissAnnouncement:n,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),a(`introduction`)},onRetry:()=>{d(`loading`),s(ot)}}),t[0]=n,t[1]=c,t[2]=u,t[3]=i,t[4]=m):m=t[4];let h=i===`enrollment`&&u!==`error`,g;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{a(`success`)},t[5]=g):g=t[5];let _,v;t[6]===c?(_=t[7],v=t[8]):(_=()=>{d(`error`),c&&a(`enrollment`)},v=()=>{d(`ready`),c&&a(`enrollment`)},t[6]=c,t[7]=_,t[8]=v);let y=i!==`success`&&u!==`error`,b;t[9]!==o||t[10]!==r||t[11]!==f||t[12]!==h||t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,$.jsx)(je,{active:h,enrollmentAttempt:o,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},o),t[9]=o,t[10]=r,t[11]=f,t[12]=h,t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;return t[17]!==m||t[18]!==b?(x=(0,$.jsxs)($.Fragment,{children:[m,b]}),t[17]=m,t[18]=b,t[19]=x):x=t[19],x}function ot(e){return e+1}function st(e){let t=(0,ct.c)(22),{completed:n,dismissAnnouncement:r,onBack:i,onRetry:a,preparationFailed:o,setSandboxTarget:s}=e,c=o!==void 0&&o,l=B(),u;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(u={"aria-describedby":void 0},t[0]=u):u=t[0];let d;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[1]=d):d=t[1];let f;t[2]===r?f=t[3]:(f=e=>{e||r()},t[2]=r,t[3]=f);let p;t[4]!==n||t[5]!==a||t[6]!==c||t[7]!==s||t[8]!==l?(p=n?(0,$.jsx)(ee.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!l&&{opacity:0,y:12},transition:{duration:l?0:.28},children:(0,$.jsx)(le,{className:`items-center text-center`,icon:(0,$.jsx)(ee.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!l&&{rotate:-18,scale:0},transition:l?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,$.jsx)(ce,{"aria-hidden":!1,asset:m})}),iconBackgroundClassName:`bg-chart-green/20`,iconClassName:`mx-auto text-chart-green`,title:(0,$.jsx)(O,{children:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):c?(0,$.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,$.jsx)(O,{children:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(`p`,{role:`alert`,className:`text-secondary`,children:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(E,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:a,children:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(O,{className:`sr-only`,children:(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,$.jsx)(`div`,{ref:s,className:`relative min-h-0 flex-1 overflow-hidden bg-surface`})]}),t[4]=n,t[5]=a,t[6]=c,t[7]=s,t[8]=l,t[9]=p):p=t[9];let h=n?`primary`:`ghostTertiary`,g=n?r:i,_;t[10]===n?_=t[11]:(_=n?(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,$.jsx)(v,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[10]=n,t[11]=_);let y;t[12]!==h||t[13]!==g||t[14]!==_?(y=(0,$.jsx)(`div`,{className:`shrink-0 bg-surface px-6 pb-6`,children:(0,$.jsx)(E,{className:`w-full justify-center`,color:h,size:`large`,onClick:g,children:_})}),t[12]=h,t[13]=g,t[14]=_,t[15]=y):y=t[15];let b;t[16]!==p||t[17]!==y?(b=(0,$.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[p,y]}),t[16]=p,t[17]=y,t[18]=b):b=t[18];let x;return t[19]!==b||t[20]!==f?(x=(0,$.jsx)(j,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,contentProps:u,dialogCloseClassName:`z-10`,dialogCloseLabel:d,onOpenChange:f,size:`feature`,children:b}),t[19]=b,t[20]=f,t[21]=x):x=t[21],x}var ct,Q,$,lt;function ut(){return(ut=e((()=>{ct=S(),b(),n(),Q=c(),x(),A(),D(),T(),se(),re(),F(),rt(),$=te(),de(),lt=ae(async()=>(await ue(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-5161462b6906.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)).WalletOnboardingAnnouncementModal,{propagateLoadError:!0})})))()}ut();export{it as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-fd0a98283dd8.js.map