import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region shared.dil.ts
	function useResolvedComponentResult(componentName, props) {
		const opGenui = DIL.useAppData((appData) => appData.opGenui);
		if (props.__state !== void 0) return {
			status: "resolved",
			resolutionComplete: true,
			state: props.__state
		};
		const key = componentDataKey(componentName, props);
		const result = (typeof props.__resolutionId === "string" ? opGenui?.componentResults?.[props.__resolutionId] : void 0) ?? opGenui?.componentResults?.[key];
		if (isComponentResultEnvelope(result)) {
			if (result.status === "pending") return {
				status: "pending",
				resolutionComplete: false,
				state: void 0
			};
			return result.status === "resolved" ? {
				status: "resolved",
				resolutionComplete: true,
				state: result.state
			} : {
				status: "failed",
				resolutionComplete: true,
				state: void 0
			};
		}
		const legacyState = opGenui?.componentData?.[key];
		if (legacyState !== void 0) return {
			status: "resolved",
			resolutionComplete: true,
			state: legacyState
		};
		if (opGenui?.componentResults !== void 0) return {
			status: "failed",
			resolutionComplete: true,
			state: void 0
		};
		if (opGenui?.componentData !== void 0) return {
			status: "resolved",
			resolutionComplete: true,
			state: void 0
		};
		return {
			status: "pending",
			resolutionComplete: false,
			state: void 0
		};
	}
	function isComponentResultEnvelope(value) {
		if (typeof value !== "object" || value == null || Array.isArray(value)) return false;
		const result = value;
		if (result.status === "pending") return true;
		if (result.status === "resolved") return typeof result.state === "object" && result.state != null && !Array.isArray(result.state);
		return result.status === "failed" && (result.code === "component_unavailable" || result.code === "tool_failed" || result.code === "invalid_tool_result") && typeof result.retryable === "boolean";
	}
	function componentDataKey(componentName, props) {
		return JSON.stringify([componentName, normalizeComponentProps(props)]);
	}
	function normalizeComponentProps(props) {
		const normalized = {};
		for (const key of Object.keys(props).sort()) {
			if (key === "__resolutionId" || key === "__state" || key === "children" || key === "fallback") continue;
			const value = normalizeComponentValue(props[key]);
			if (value !== void 0) normalized[key] = value;
		}
		return normalized;
	}
	function normalizeComponentValue(value) {
		if (value === null || typeof value === "boolean" || typeof value === "number" || typeof value === "string") return value;
		if (Array.isArray(value)) return value.map(normalizeComponentValue);
		if (typeof value === "object") {
			const normalized = {};
			for (const key of Object.keys(value).sort()) {
				const nestedValue = normalizeComponentValue(value[key]);
				if (nestedValue !== void 0) normalized[key] = nestedValue;
			}
			return normalized;
		}
	}

//#endregion
//#region GmailHtmlBodyFrame.dil.tsx
	function GmailHtmlBodyFrame(props) {
		const { state } = useResolvedComponentResult("GmailHtmlBodyFrame", props);
		const supportsHtmlView = DIL.useAppData((data) => data.nativeComponentNames?.includes("read-only-html-view") === true);
		const actionsReady = DIL.useAppData((data) => data.opGenui?.nativeServerActions?.ready === true);
		if (!state) return null;
		if (!supportsHtmlView) {
			const gmailUrl = \`https://mail.google.com/mail/u/0/#all/\${encodeURIComponent(state.messageId)}\`;
			return /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				size: "sm"
			}, state.labels.previewUnavailable, " ", /* @__PURE__ */ __dil.jsx("link", { href: gmailUrl }, state.labels.openEmail));
		}
		if (!actionsReady) return null;
		return /* @__PURE__ */ __dil.jsx(Reader, {
			key: state.messageId,
			state
		});
	}
	function Reader({ state }) {
		const preview = DIL.useRef(void 0);
		const [, setRevision] = DIL.useState(0);
		DIL.useEffect(() => {
			let active = true;
			async function loadPreview() {
				const result = await readPreview().catch(() => null);
				if (active) {
					preview.current = result;
					setRevision((revision) => revision + 1);
				}
			}
			loadPreview();
			return () => {
				active = false;
			};
		}, []);
		return /* @__PURE__ */ __dil.jsx("read-only-html-view", {
			...preview.current === void 0 ? {} : { preview: preview.current },
			labels: state.labels,
			title: state.title,
			height: 285,
			contentScale: .8
		});
	}
	async function readPreview() {
		const result = await GenUI.dispatchAction({
			handler: "server",
			type: "gmail_html_body_read",
			payload: {}
		});
		if (result?.status !== "success" || result.response.status !== "success") return null;
		const { body, html_preview } = result.response.data;
		if (html_preview) return html_preview;
		if (!body) return null;
		return {
			fragment: \`<pre style="white-space:pre-wrap;overflow-wrap:anywhere;margin:0;font:inherit">\${body.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>\`,
			links: [],
			images: []
		};
	}

//#endregion
return GmailHtmlBodyFrame;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=gmail-html-body-frame-f2894402bd1b.js.map