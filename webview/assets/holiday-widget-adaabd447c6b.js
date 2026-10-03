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
//#region HolidayWidget.dil.tsx
	function HolidayWidget(props) {
		const isDesktop = DIL.useBreakpoint("sm");
		const { resolutionComplete, state } = useResolvedComponentResult("HolidayWidget", props);
		if (state?.is_loading === true || !state && !resolutionComplete) return /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 250
		});
		if (!state) return props.fallback ?? null;
		const heading = /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("title", { weight: "semibold" }, state.holiday_name), /* @__PURE__ */ __dil.jsx("title", { weight: "normal" }, state.holiday_date));
		const descriptor = /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.holiday_descriptor);
		const artwork = state.image && /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("image", {
			width: "100%",
			height: "100%",
			aspectRatio: "3/2",
			radius: "none",
			hideOnFailure: true,
			src: \`https://persistent.oaistatic.com/sonic/holidays/\${state.image}.jpg\`
		}));
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, state.image != null ? /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: 0
		}, !isDesktop && artwork, /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			justify: "between",
			padding: 5,
			height: "100%"
		}, heading, descriptor)), isDesktop && artwork) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			justify: "between",
			padding: 5
		}, heading, /* @__PURE__ */ __dil.jsx("spacer", { minSize: 12 }), descriptor));
	}

//#endregion
return HolidayWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=holiday-widget-adaabd447c6b.js.map