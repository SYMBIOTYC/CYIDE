import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
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
//#region EmailPreview.dil.tsx
	function EmailPreview(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EmailPreview", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 64
		});
		return /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			ariaLabel: \`Open \${state.subject}\`,
			onClick: () => GenUI.openUrl(state.url)
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: {
				x: 3,
				y: 2.5
			},
			background: "surface-elevated",
			border: {
				size: .5,
				color: "strong"
			},
			radius: "3xl",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			width: "100%",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			minWidth: 36,
			radius: "full",
			background: "surface-tertiary",
			border: {
				size: 1,
				color: "default"
			},
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary"
		}, state.sender_initial)), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, state.sender_name), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 2
		}, state.subject)))));
	}

//#endregion
return EmailPreview;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=email-preview-b65f5cb2b53b.js.map