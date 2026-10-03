const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wallet-onboarding-announcement-modal-7c826f4765ef.js","./rolldown-runtime-2d059c5e81f4.js","./app-initial-f1c3ec6698cf.js","./app-initial-a42f602681b3.js","./app-initial-48c569ae16a4.js","./app-initial-cb4050427ba6.js","./app-initial-49150e6a0951.css","./app-initial-67e3b9f0ad44.css","./app-initial-869fc50c4531.css","./app-initial-87fe457828af.css","./wallet-onboarding-announcement-modal-d1eb7efda70f.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{$at as t,COt as n,Fpt as r,G1 as i,Got as a,H_t as o,Ipt as s,Jat as ee,Kat as c,Kot as l,L_t as u,M_t as d,POt as f,ROt as p,UOt as m,W1 as h,Zat as g,_kt as _,fDt as v,fOt as y,gkt as b,j_t as x,vOt as S,zOt as C}from"./app-initial-f1c3ec6698cf.js";import{CHt as te,H2 as w,HAt as ne,J2 as T,JAt as re,K2 as E,Q2 as ie,SHt as ae,THt as D,WAt as oe,Z2 as O,_kt as se,cXt as k,dN as ce,eLt as le,fN as ue,gN as A,gkt as de,lXt as fe,mN as j,pN as M,qAt as N,sRt as P,tLt as pe,vN as me}from"./app-initial-a42f602681b3.js";import{D0t as he,O0t as F,STt as ge,SXt as I,bTt as _e,bXt as ve,gqt as L,hqt as R,jXt as ye,kXt as be,n1t as z,t1t as B,xXt as xe}from"./app-initial-48c569ae16a4.js";import{n as Se,t as V}from"./mcp-app-host-styles-c15be63219d3.js";import{a as H,n as Ce,r as U}from"./mcp-sandbox-rpc-548b4f5d5ad0.js";import{n as we,r as Te,t as Ee}from"./sandbox-origin-c77bd6b03a09.js";import{n as De,r as Oe}from"./view-queries-6a38aa32d8b7.js";function ke(e,{styleVariables:t={},theme:n=`light`}={}){return`<!doctype html>
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
        const sdkUrl = ${JSON.stringify(je)};
        const fieldInitializationTimeoutMs = ${JSON.stringify(Me)};
        const retryTool = ${JSON.stringify(W)};
        const registerTool = ${JSON.stringify(G)};
        const requestCodeTool = ${JSON.stringify(K)};
        const verifyTool = ${JSON.stringify(q)};
        const finalizeTool = ${JSON.stringify(J)};
        const stageTool = ${JSON.stringify(Y)};
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
            const response = await globalThis.openai.callTool(registerTool, {
              vgs_card_id: vaultedCardId,
            });
            const errorCode = (response?.structuredContent ?? response?.structured_content)?.error?.code;
            if (errorCode === "WalletDeviceRequired" || errorCode === "WalletAmexUnavailable") {
              vaultedCardId = null;
              reportStage("save", startedAt, "failure");
              const failureMessage = errorCode === "WalletAmexUnavailable" ? messages.amexUnavailable : messages.deviceRequired;
              showError(failureMessage, messages.useDifferentCard);
              return;
            }
            const result = successfulResult(response);
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
</html>`}var W,G,K,q,J,Y,Ae,je,Me;function Ne(){return(Ne=e((()=>{W=`__wallet_onboarding_retry_bootstrap`,G=`__wallet_onboarding_register_vgs_card`,K=`__wallet_onboarding_request_verification`,q=`__wallet_onboarding_verify_card`,J=`__wallet_onboarding_finalize_card`,Y=`__wallet_onboarding_stage`,Ae={baseUriDomains:[],connectDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`,`https://*.verygoodproxy.com`],frameDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`],includeDefaultDomains:!1,isTrusted:!0,resourceDomains:[`https://js.verygoodvault.com`,`https://js3.verygoodvault.com`,`https://vgs-collect-keeper.apps.verygood.systems`]},je=`https://js.verygoodvault.com/vgs-collect/3.2.2/vgs-collect.js`,Me=15e3})))()}function Pe(e){let t=(0,Ze.c)(6),n;t[0]===e.enrollmentView?n=t[1]:(n=De({view:e.enrollmentView}),t[0]=e.enrollmentView,t[1]=n);let r=n,i=g(A,r),o;return t[2]!==r||t[3]!==i||t[4]!==e?(o=i==null?null:(0,Qe.jsx)(Fe,{...e,resourceIdentity:{context:r,identity:i}},a([i])),t[2]=r,t[3]=i,t[4]=e,t[5]=o):o=t[5],o}function Fe(e){let n=(0,Ze.c)(87),{active:r,enrollmentAttempt:i,enrollmentView:a,onComplete:s,onPreparationError:c,onPrepared:l,preparing:u,targetElement:d,resourceIdentity:f}=e,p=ee(he),h=o(),_=t(Se),v=(0,X.useId)(),y=(0,X.useRef)(r),b=(0,X.useRef)(!1),x=(0,X.useRef)(null),S=(0,X.useRef)(null),w;n[0]===Symbol.for(`react.memo_cache_sentinel`)?(w=new Map,n[0]=w):w=n[0];let ne=(0,X.useRef)(w),[T,re]=(0,X.useState)(0),[E,ie]=(0,X.useState)(null),[D,oe]=(0,X.useState)(null),[O,se]=(0,X.useState)(null),[k,le]=(0,X.useState)(!1),A=f.identity.kind===`connector`?f.identity.connectorId:null,de;n[1]!==h.locale||n[2]!==f.identity?(de={identity:f.identity,locale:h.locale,widgetDomain:null},n[1]=h.locale,n[2]=f.identity,n[3]=de):de=n[3];let{data:fe}=g(Te,de),j=fe?.sourceUrl,M;n[4]===j?M=n[5]:(M=j==null?null:Ee(j),n[4]=j,n[5]=M);let N=M,P=`wallet-onboarding-${v}`,F;n[6]!==r||n[7]!==E?.metadata||n[8]!==A||n[9]!==a.hostId||n[10]!==a.server||n[11]!==a.serverTools||n[12]!==s||n[13]!==c||n[14]!==l||n[15]!==u||n[16]!==f||n[17]!==p?(F=async(e,t)=>{if(p.get(me,f)!==`current`)throw Error(`Wallet enrollment account changed`);if(e===`__wallet_onboarding_stage`){let e=rt.parse(t);return z.info(`wallet_onboarding_sandbox.stage`,{safe:e}),u&&e.stage===`fields_ready`&&(e.result===`success`?l():c()),{}}if(e===`__wallet_onboarding_retry_bootstrap`){if(!r)throw Error(`Wallet onboarding enrollment is not active`);return it.parse(t),re(Ye),{}}if(e!==`__wallet_onboarding_register_vgs_card`&&e!==`__wallet_onboarding_request_verification`&&e!==`__wallet_onboarding_verify_card`&&e!==`__wallet_onboarding_finalize_card`)throw Error(`Wallet onboarding sandbox cannot call this tool`);if(!r&&(e!==`__wallet_onboarding_finalize_card`||x.current==null))throw Error(`Wallet onboarding enrollment is not active`);let n=async(e,t)=>{let n=RegExp(`(?:^|[._])(?:wallet_)?${e}$`),r=a.serverTools.find(e=>n.test(e.name));if(r==null)throw Error(`Wallet registration tool is unavailable`);let i=ye({connectorId:A,server:a.server,toolName:r.name,tools:a.serverTools}),o=()=>{if(p.get(me,f)!==`current`)throw Error(`Wallet enrollment account changed while calling its tool`)};if(e===`register_vgs_agentic_token`){let e=ue(i.codexAppsToolIdentity);if(e==null)throw Error(`Wallet registration tool is unavailable`);return ce({scope:p,resourceIdentity:f,...e,toolArguments:t})}let s=await _e(p,a.hostId,a.server,i.name,t);return o(),ve({isCodexAppsServer:pe(a.server),toolResult:s})};if(e===`__wallet_onboarding_register_vgs_card`){let e=et.parse(t);if(!$e.safeParse(E?.metadata).success)throw Error(`Wallet card enrollment is unavailable`);x.current=null;let r=await n(`register_vgs_agentic_token`,{vgs_card_id:e.vgs_card_id,device_type:`desktop`}),i=tt.safeParse(r.structuredContent);return r.isError!==!0&&i.success&&(x.current={id:i.data.registration_id,optionIds:new Set(i.data.verification_options.map(Je))}),r}let i=x.current;if(i==null)throw Error(`Wallet card registration is unavailable`);if(e===`__wallet_onboarding_request_verification`){let{option_id:e}=C({option_id:m()}).parse(t);if(!i.optionIds.has(e))throw Error(`Wallet verification option is unavailable`);return n(`request_vgs_card_verification`,{registration_id:i.id,option_id:e})}if(e===`__wallet_onboarding_verify_card`){let{otp:e}=C({otp:m().regex(/^[0-9]{6}$/)}).parse(t);return n(`verify_vgs_card`,{registration_id:i.id,otp:e})}C({}).strict().parse(t);let o=await n(`finalize_vgs_card_registration`,{registration_id:i.id});return o.isError!==!0&&nt.safeParse(o.structuredContent).success&&(x.current=null,y.current?s():b.current=!0),o},n[6]=r,n[7]=E?.metadata,n[8]=A,n[9]=a.hostId,n[10]=a.server,n[11]=a.serverTools,n[12]=s,n[13]=c,n[14]=l,n[15]=u,n[16]=f,n[17]=p,n[18]=F):F=n[18];let ge=(0,X.useEffectEvent)(F),I;n[19]===c?I=n[20]:(I=()=>{c()},n[19]=c,n[20]=I);let L=(0,X.useEffectEvent)(I),R;n[21]!==r||n[22]!==s?(R=()=>{r&&b.current&&(b.current=!1,s())},n[21]=r,n[22]=s,n[23]=R):R=n[23];let be=(0,X.useEffectEvent)(R),B,V;n[24]===N?(B=n[25],V=n[26]):(B=()=>{if(N==null)return;let e=document.createElement(`webview`);return e.className=`h-full w-full overflow-hidden border-0`,e.setAttribute(`partition`,ae(N)),se(e),()=>{e.remove(),e.destroy?.(),se(t=>t===e?null:t)}},V=[N],n[24]=N,n[25]=B,n[26]=V),(0,X.useLayoutEffect)(B,V);let H;n[27]!==r||n[28]!==be||n[29]!==O||n[30]!==d?(H=()=>{if(y.current=r,be(),O==null)return;let e=r?d:S.current;e!=null&&O.parentElement!==e&&e.appendChild(O)},n[27]=r,n[28]=be,n[29]=O,n[30]=d,n[31]=H):H=n[31];let U;n[32]!==r||n[33]!==O||n[34]!==d?(U=[r,O,d],n[32]=r,n[33]=O,n[34]=d,n[35]=U):U=n[35],(0,X.useLayoutEffect)(H,U);let we;n[36]!==L||n[37]!==ge||n[38]!==h||n[39]!==O||n[40]!==N||n[41]!==p||n[42]!==j||n[43]!==P?(we=()=>{if(O==null||N==null||j==null)return;let e=te(j,{requireSkybridge:!0});if(e==null){z.warning(`wallet_onboarding_sandbox.invalid_origin`,{safe:{}}),L();return}let t=new AbortController,n,r=performance.now();le(!1);let i=document.documentElement.dataset.theme===`dark`?`dark`:`light`,a=p.get(Se),o=ke({bootstrapError:h.formatMessage(Z.bootstrapError),amexUnavailable:h.formatMessage(Z.amexUnavailable),cardNumber:h.formatMessage(Z.cardNumber),cvc:h.formatMessage(Z.cvc),cvcPlaceholder:h.formatMessage(Z.cvcPlaceholder),deviceRequired:h.formatMessage(Z.deviceRequired),error:h.formatMessage(Z.error),expiration:h.formatMessage(Z.expiration),expirationPlaceholder:h.formatMessage(Z.expirationPlaceholder),initializing:h.formatMessage(Z.initializing),numberPlaceholder:h.formatMessage(Z.numberPlaceholder),privacy:h.formatMessage(Z.privacy),retry:h.formatMessage(Z.retry),retrySave:h.formatMessage(Z.retrySave),saveError:h.formatMessage(Z.saveError),sendCode:h.formatMessage(Z.sendCode),submit:h.formatMessage(Z.submit),submitting:h.formatMessage(Z.submitting),title:h.formatMessage(Z.title),useDifferentCard:h.formatMessage(Z.useDifferentCard),validationError:h.formatMessage(Z.validationError),verificationCode:h.formatMessage(Z.verificationCode),verificationError:h.formatMessage(Z.verificationError),verificationOption:h.formatMessage(Z.verificationOption),verifyCode:h.formatMessage(Z.verifyCode)},{styleVariables:a,theme:i});return Ce({hostApiHandlers:{callMcp:qe,callTool:(e,t)=>ge(e,t),notifyBackgroundColor:Ke,notifyEnvironmentError:()=>{z.warning(`wallet_onboarding_sandbox.environment_error`,{safe:{}}),L()},notifyIntrinsicHeight:Ge,notifyIntrinsicWidth:We,notifyNavigation:Ue,notifySecurityPolicyViolation:()=>{z.warning(`wallet_onboarding_sandbox.csp_violation`,{safe:{}}),L()},openExternal:He,requestDisplayMode:Ve,sendFollowUpMessage:Be,sendInstrument:ze,updateWidgetState:Re},origin:e,sandboxId:N,signal:t.signal,sourceUrl:j,webview:O}).then(async e=>{if(t.signal.aborted)return;oe(e);let s=e.runWidgetCode({csp:Ae,displayMode:`inline`,features:[],html:o,isFirstParty:!1,isSidebarOpen:!1,isTombstone:!1,maxHeight:620,maxWidth:568,measureWidth:!1,mcpApps:{hostCapabilities:{sandbox:{csp:Ae}},hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:h.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:a},theme:i,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`},hostInfo:{name:`chatgpt`}},safeArea:{insets:{bottom:0,left:0,right:0,top:0}},theme:i,toolInput:null,toolOutput:null,toolResponseMetadata:null,userAgent:{capabilities:{hover:!0,touch:!1},device:{os:`unknown`,platform:`native`,type:`desktop`}},viewParams:null,widgetId:P,widgetState:null});n=setTimeout(()=>{t.signal.aborted||(z.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`TimeoutError`}}),L(),t.abort())},at),await Xe(s,t.signal,()=>{clearTimeout(n),le(!0),z.info(`wallet_onboarding_sandbox.initialized`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-r))}})})===`ended`&&(clearTimeout(n),t.signal.aborted||(z.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:`MissingRunningStatus`}}),L()))}).catch(e=>{t.signal.aborted||(z.warning(`wallet_onboarding_sandbox.init_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),L())}),()=>{clearTimeout(n),t.abort(),le(!1),oe(null)}},n[36]=L,n[37]=ge,n[38]=h,n[39]=O,n[40]=N,n[41]=p,n[42]=j,n[43]=P,n[44]=we):we=n[44];let De;n[45]!==h||n[46]!==O||n[47]!==N||n[48]!==p||n[49]!==j||n[50]!==P?(De=[h,O,N,p,j,P],n[45]=h,n[46]=O,n[47]=N,n[48]=p,n[49]=j,n[50]=P,n[51]=De):De=n[51],(0,X.useLayoutEffect)(we,De);let Oe;n[52]!==T||n[53]!==A||n[54]!==i||n[55]!==a.hostId||n[56]!==a.server||n[57]!==a.tool.name||n[58]!==L||n[59]!==u||n[60]!==p?(Oe=()=>{if(!u||i===0)return;let e=JSON.stringify([A,a.hostId,a.server,a.tool.name,i,T]);ie({attempt:i,metadata:null,retry:T,status:`loading`});let t=ne.current.get(e);if(t==null){let n=performance.now();t=_e(p,a.hostId,a.server,a.tool.name,{}).then(e=>(z.info(`wallet_onboarding_sandbox.bootstrap`,{safe:{durationMs:Math.max(0,Math.round(performance.now()-n))}}),e)),ne.current.set(e,t)}let n=!1,r=setTimeout(()=>{n||(n=!0,z.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:`TimeoutError`}}),ie({attempt:i,metadata:null,retry:T,status:`error`}),L())},at);return t.then(e=>{if(n)return;let t=ve({isCodexAppsServer:pe(a.server),toolResult:e}),r=xe({toolResult:t}),o=$e.safeParse(r);ie({attempt:i,metadata:o.success?o.data:null,retry:T,status:o.success?`ready`:`error`}),o.success||L()}).catch(e=>{n||(z.warning(`wallet_onboarding_sandbox.bootstrap_failed`,{safe:{errorName:e instanceof Error?e.name:`UnknownError`}}),ie({attempt:i,metadata:null,retry:T,status:`error`}),L())}).finally(()=>{clearTimeout(r)}),()=>{n=!0,clearTimeout(r)}},n[52]=T,n[53]=A,n[54]=i,n[55]=a.hostId,n[56]=a.server,n[57]=a.tool.name,n[58]=L,n[59]=u,n[60]=p,n[61]=Oe):Oe=n[61];let W;n[62]!==T||n[63]!==A||n[64]!==i||n[65]!==a.hostId||n[66]!==a.server||n[67]!==a.tool.name||n[68]!==u||n[69]!==p?(W=[T,A,i,a.hostId,a.server,a.tool.name,u,p],n[62]=T,n[63]=A,n[64]=i,n[65]=a.hostId,n[66]=a.server,n[67]=a.tool.name,n[68]=u,n[69]=p,n[70]=W):W=n[70],(0,X.useEffect)(Oe,W);let G,K;n[71]!==_||n[72]!==h.locale||n[73]!==k||n[74]!==D?(G=()=>{if(!k||D==null)return;let e=document.documentElement.dataset.theme===`dark`?`dark`:`light`;Promise.all([D.setTheme({theme:e}),D.notifyMcpAppsHostContext({hostContext:{availableDisplayModes:[`inline`],containerDimensions:{maxHeight:620,maxWidth:568},deviceCapabilities:{hover:!0,touch:!1},displayMode:`inline`,locale:h.locale,platform:`desktop`,safeAreaInsets:{bottom:0,left:0,right:0,top:0},styles:{variables:_},theme:e,timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,userAgent:`chatgpt`}})]).catch(Le)},K=[_,h.locale,k,D],n[71]=_,n[72]=h.locale,n[73]=k,n[74]=D,n[75]=G,n[76]=K):(G=n[75],K=n[76]),(0,X.useEffect)(G,K);let q,J;n[77]!==E||n[78]!==i||n[79]!==_||n[80]!==k||n[81]!==u||n[82]!==D||n[83]!==P?(q=()=>{if(!k||D==null)return;let e=u&&E?.attempt===i?E:null;D.setWidgetData({toolInput:e==null?null:{bootstrap_retry:e.retry,bootstrap_status:e.status,enrollment_attempt:e.attempt,enrollment_requested:!0,style_variables:_},toolOutput:null,toolResponseMetadata:e?.metadata??null,widgetId:P,widgetState:null}).catch(Ie)},J=[E,i,_,k,u,D,P],n[77]=E,n[78]=i,n[79]=_,n[80]=k,n[81]=u,n[82]=D,n[83]=P,n[84]=q,n[85]=J):(q=n[84],J=n[85]),(0,X.useEffect)(q,J);let Y;return n[86]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,Qe.jsx)(`div`,{ref:S,"aria-hidden":`true`,className:`pointer-events-none fixed h-px w-px overflow-hidden opacity-0`}),n[86]=Y):Y=n[86],Y}function Ie(){}function Le(){}function Re(){}function ze(){}function Be(){return Promise.reject(Error(`Wallet onboarding sandbox cannot send follow-ups`))}function Ve(){return{mode:`inline`}}function He(){}function Ue(){}function We(){}function Ge(){}function Ke(){}function qe(){return Promise.reject(Error(`Wallet onboarding sandbox cannot make MCP requests`))}function Je(e){return e.option_id}function Ye(e){return e+1}async function Xe(e,t,n){for await(let r of e){if(t.aborted)return`aborted`;if(H.safeParse(r).success)return n(),`running`}return`ended`}var Ze,X,Qe,$e,et,tt,nt,rt,it,at,Z;function ot(){return(ot=e((()=>{Ze=b(),l(),c(),P(),D(),X=_(),d(),y(),j(),le(),M(),V(),U(),I(),we(),be(),ge(),Oe(),F(),B(),Ne(),Qe=v(),$e=C({vgs_collect_bootstrap:C({access_token:m().trim().min(1),environment:S([`sandbox`,`live`]),vault_id:m().trim().min(1)})}),et=C({vgs_card_id:m().trim().min(1)}),tt=C({ok:f(!0),registration_id:m().trim().min(1),status:S([`ready_to_finalize`,`verification_required`]),verification_options:n(C({option_id:m()}))}),nt=C({card:C({last4:m()}),ok:f(!0)}),rt=C({duration_ms:p().nonnegative(),result:S([`failure`,`success`]),stage:S([`fields_ready`,`save`,`sdk_load`,`submit`])}),it=C({}).strict(),at=15e3,Z=x({amexUnavailable:{id:`codexWalletOnboardingEnrollment.amexUnavailable`,defaultMessage:`Wallet can’t add an American Express card from this location. You can use a different card.`,description:`Wallet enrollment error when American Express is unavailable from the user’s location.`},bootstrapError:{id:`codexWalletOnboardingEnrollment.bootstrapError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot authorize VGS Collect`},cardNumber:{id:`codexWalletOnboardingEnrollment.cardNumber`,defaultMessage:`Card number`,description:`Label for the Wallet onboarding secure card-number field`},cvc:{id:`codexWalletOnboardingEnrollment.cvc`,defaultMessage:`Security code`,description:`Label for the Wallet onboarding secure card-security-code field`},cvcPlaceholder:{id:`codexWalletOnboardingEnrollment.cvcPlaceholder`,defaultMessage:`3 digits`,description:`Placeholder for the Wallet onboarding secure card-security-code field`},deviceRequired:{id:`codexWalletOnboardingEnrollment.deviceRequired`,defaultMessage:`Wallet couldn’t confirm the information needed to add this American Express card. You can use a different card.`,description:`Wallet enrollment error when the information needed to add an American Express card could not be confirmed.`},error:{id:`codexWalletOnboardingEnrollment.error`,defaultMessage:`We couldn't add this card`,description:`Generic error shown when Wallet onboarding cannot add a card`},expiration:{id:`codexWalletOnboardingEnrollment.expiration`,defaultMessage:`Expiration date`,description:`Label for the Wallet onboarding secure card-expiration field`},expirationPlaceholder:{id:`codexWalletOnboardingEnrollment.expirationPlaceholder`,defaultMessage:`00/00`,description:`Placeholder for the Wallet onboarding secure card-expiration field`},initializing:{id:`codexWalletOnboardingEnrollment.initializing`,defaultMessage:`Preparing secure card fields…`,description:`Status shown while Wallet onboarding prepares the secure card fields`},numberPlaceholder:{id:`codexWalletOnboardingEnrollment.numberPlaceholder`,defaultMessage:`16 digits`,description:`Length hint shown inside the Wallet onboarding secure card-number field`},privacy:{id:`codexWalletOnboardingEnrollment.privacy`,defaultMessage:`Fully encrypted and never shared with third party apps`,description:`Privacy explanation shown below Wallet onboarding secure card fields`},retry:{id:`codexWalletOnboardingEnrollment.retry`,defaultMessage:`Try again`,description:`Button that retries Wallet onboarding secure-field initialization`},retrySave:{id:`codexWalletOnboardingEnrollment.retrySave`,defaultMessage:`Save to Wallet`,description:`Button that retries saving a secured card to Wallet`},saveError:{id:`codexWalletOnboardingEnrollment.saveError`,defaultMessage:`Your card was secured, but Wallet couldn't save it`,description:`Error shown when Wallet onboarding cannot save an already secured card`},sendCode:{id:`codexWalletOnboardingEnrollment.sendCode`,defaultMessage:`Send verification code`,description:`Button to request a one-time card issuer verification code`},submit:{id:`codexWalletOnboardingEnrollment.submit`,defaultMessage:`Add card`,description:`Button that submits the Wallet onboarding secure card form`},submitting:{id:`codexWalletOnboardingEnrollment.submitting`,defaultMessage:`Adding card…`,description:`Status shown while Wallet onboarding adds the secured card`},title:{id:`codexWalletOnboardingEnrollment.title`,defaultMessage:`Add new card`,description:`Heading for the Wallet onboarding secure card form`},useDifferentCard:{id:`codexWalletOnboardingEnrollment.useDifferentCard`,defaultMessage:`Use a different card`,description:`Button that opens a new secure card form when the previous card could not be added.`},validationError:{id:`codexWalletOnboardingEnrollment.validationError`,defaultMessage:`Check your card details and try again`,description:`Error shown when Wallet onboarding secure fields reject card details`},verificationCode:{id:`codexWalletOnboardingEnrollment.verificationCode`,defaultMessage:`Six-digit verification code`,description:`Label for the one-time code received from the card issuer`},verificationError:{id:`codexWalletOnboardingEnrollment.verificationError`,defaultMessage:`We couldn't verify this card. Try again`,description:`Error shown when the card issuer rejects a verification request or code`},verificationOption:{id:`codexWalletOnboardingEnrollment.verificationOption`,defaultMessage:`Where should we send the verification code?`,description:`Label for choosing a masked email address or phone number supplied by the card issuer`},verifyCode:{id:`codexWalletOnboardingEnrollment.verifyCode`,defaultMessage:`Verify and save`,description:`Button to verify the card issuer's code and save the card to Wallet`}})})))()}function st(e){let t=(0,dt.c)(2),n;return t[0]===e?n=t[1]:(n=(0,$.jsx)(ct,{...e},e.enrollmentView.hostId),t[0]=e,t[1]=n),n}function ct(e){let t=(0,dt.c)(21),{dismissAnnouncement:n,enrollmentView:r,onCloseAutoFocus:i}=e,[a,o]=(0,Q.useState)(`introduction`),[s,ee]=(0,Q.useState)(1),[c,l]=(0,Q.useState)(!1),[u,d]=(0,Q.useState)(`loading`),[f,p]=(0,Q.useState)(null),m;t[0]!==n||t[1]!==c||t[2]!==i||t[3]!==u||t[4]!==a?(m=a===`introduction`?(0,$.jsx)(ft,{dismissAnnouncement:n,onCloseAutoFocus:i,isSettingUpWallet:c&&u===`loading`,onSetUpWallet:()=>{l(!0),u!==`loading`&&o(`enrollment`)}}):(0,$.jsx)(ut,{completed:a===`success`,dismissAnnouncement:n,onCloseAutoFocus:i,preparationFailed:u===`error`,setSandboxTarget:p,onBack:()=>{l(!1),o(`introduction`)},onRetry:()=>{d(`loading`),ee(lt)}}),t[0]=n,t[1]=c,t[2]=i,t[3]=u,t[4]=a,t[5]=m):m=t[5];let h=a===`enrollment`&&u!==`error`,g;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=()=>{o(`success`)},t[6]=g):g=t[6];let _,v;t[7]===c?(_=t[8],v=t[9]):(_=()=>{d(`error`),c&&o(`enrollment`)},v=()=>{d(`ready`),c&&o(`enrollment`)},t[7]=c,t[8]=_,t[9]=v);let y=a!==`success`&&u!==`error`,b;t[10]!==s||t[11]!==r||t[12]!==f||t[13]!==h||t[14]!==_||t[15]!==v||t[16]!==y?(b=(0,$.jsx)(Pe,{active:h,enrollmentAttempt:s,enrollmentView:r,onComplete:g,onPreparationError:_,onPrepared:v,preparing:y,targetElement:f},s),t[10]=s,t[11]=r,t[12]=f,t[13]=h,t[14]=_,t[15]=v,t[16]=y,t[17]=b):b=t[17];let x;return t[18]!==m||t[19]!==b?(x=(0,$.jsxs)($.Fragment,{children:[m,b]}),t[18]=m,t[19]=b,t[20]=x):x=t[20],x}function lt(e){return e+1}function ut(e){let t=(0,dt.c)(24),{completed:n,dismissAnnouncement:r,onBack:i,onCloseAutoFocus:a,onRetry:o,preparationFailed:ee,setSandboxTarget:c}=e,l=ee!==void 0&&ee,d=L(),f;t[0]===a?f=t[1]:(f={"aria-describedby":void 0,onCloseAutoFocus:a},t[0]=a,t[1]=f);let p;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.close`,defaultMessage:`Close`,description:`Accessible label for closing ChatGPT Wallet card enrollment`}),t[2]=p):p=t[2];let m;t[3]===r?m=t[4]:(m=e=>{e||r()},t[3]=r,t[4]=m);let g;t[5]!==n||t[6]!==o||t[7]!==l||t[8]!==c||t[9]!==d?(g=n?(0,$.jsx)(s.div,{animate:{opacity:1,y:0},className:`flex min-h-0 flex-1 items-center justify-center px-6 select-none`,initial:!d&&{opacity:0,y:12},transition:{duration:d?0:.28},children:(0,$.jsx)(w,{className:`items-center text-center`,icon:(0,$.jsx)(s.span,{animate:{rotate:0,scale:1},className:`flex`,initial:!d&&{rotate:-18,scale:0},transition:d?{duration:0}:{damping:18,delay:.12,stiffness:320,type:`spring`},children:(0,$.jsx)(N,{"aria-hidden":!1,asset:h})}),iconBackgroundClassName:`bg-chart-green/20`,iconClassName:`mx-auto text-chart-green`,title:(0,$.jsx)(O,{children:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.successTitle`,defaultMessage:`Your card was successfully saved`,description:`Heading shown after a card is saved during ChatGPT Wallet onboarding`})}),subtitle:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.successDescription`,defaultMessage:`You’re ready to go`,description:`Confirmation shown after a card is saved during ChatGPT Wallet onboarding`})})}):l?(0,$.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col items-center justify-center gap-4 px-6 text-center select-none`,children:[(0,$.jsx)(O,{children:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.preparationErrorTitle`,defaultMessage:`Unable to add your card`,description:`Heading shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(`p`,{role:`alert`,className:`text-secondary`,children:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.preparationError`,defaultMessage:`The secure card session is unavailable or expired`,description:`Error shown when Wallet onboarding cannot initialize secure card enrollment`})}),(0,$.jsx)(ne,{className:`w-full justify-center`,color:`primary`,size:`large`,onClick:o,children:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.retryPreparation`,defaultMessage:`Try again`,description:`Button that retries secure Wallet card-enrollment initialization`})})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(O,{className:`sr-only`,children:(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.title`,defaultMessage:`Add a card to ChatGPT Wallet`,description:`Accessible title for ChatGPT Wallet card enrollment`})}),(0,$.jsx)(`div`,{ref:c,className:`relative min-h-0 flex-1 overflow-hidden bg-surface`})]}),t[5]=n,t[6]=o,t[7]=l,t[8]=c,t[9]=d,t[10]=g):g=t[10];let _=n?`primary`:`ghostTertiary`,v=n?r:i,y;t[11]===n?y=t[12]:(y=n?(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.continue`,defaultMessage:`Continue`,description:`Button that closes the ChatGPT Wallet onboarding announcement after a card is saved`}):(0,$.jsx)(u,{id:`codexWalletOnboardingEnrollmentModal.back`,defaultMessage:`Back`,description:`Button that returns from Wallet card enrollment to the Wallet introduction`}),t[11]=n,t[12]=y);let b;t[13]!==_||t[14]!==v||t[15]!==y?(b=(0,$.jsx)(`div`,{className:`shrink-0 bg-surface px-6 pb-6`,children:(0,$.jsx)(ne,{className:`w-full justify-center`,color:_,size:`large`,onClick:v,children:y})}),t[13]=_,t[14]=v,t[15]=y,t[16]=b):b=t[16];let x;t[17]!==g||t[18]!==b?(x=(0,$.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[g,b]}),t[17]=g,t[18]=b,t[19]=x):x=t[19];let S;return t[20]!==x||t[21]!==f||t[22]!==m?(S=(0,$.jsx)(T,{open:!0,contentClassName:`h-[min(504px,calc(100dvh-32px))] w-[min(480px,92vw)] !rounded-[16px] !bg-surface !ring-0 !backdrop-blur-none`,contentProps:f,dialogCloseClassName:`z-10`,dialogCloseLabel:p,onOpenChange:m,size:`feature`,children:x}),t[20]=x,t[21]=f,t[22]=m,t[23]=S):S=t[23],S}var dt,Q,$,ft;function pt(){return(pt=e((()=>{dt=b(),i(),r(),Q=_(),d(),oe(),ie(),E(),re(),de(),R(),ot(),$=v(),fe(),ft=se(async()=>(await k(async()=>{let{WalletOnboardingAnnouncementModal:e}=await import(`./wallet-onboarding-announcement-modal-7c826f4765ef.js`);return{WalletOnboardingAnnouncementModal:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)).WalletOnboardingAnnouncementModal,{propagateLoadError:!0,suspendToParent:!0})})))()}pt();export{st as WalletOnboardingAnnouncement};
//# sourceMappingURL=wallet-onboarding-announcement-content-5d8bd00d8254.js.map