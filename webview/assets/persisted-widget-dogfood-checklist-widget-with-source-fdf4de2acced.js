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
//#region PersistedWidgetDogfoodChecklistWidgetWithSource.dil.tsx
	function PersistedWidgetDogfoodChecklistWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodChecklistWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "Ask ChatGPT to add, remove, or check off items.")), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.sections.map((section, index) => /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			key: index
		}, section.name !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			weight: "medium"
		}, section.name), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, section.items.map((item) => /* @__PURE__ */ __dil.jsx("row", {
			key: item.id,
			align: "center",
			gap: 2,
			padding: 2.5
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 18,
			minSize: 18,
			radius: "sm",
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: "strong"
			},
			background: item.completed ? "green-500" : "surface"
		}, item.completed && /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xs",
			color: "white"
		})), /* @__PURE__ */ __dil.jsx("text", {
			lineThrough: item.completed,
			color: item.completed ? "secondary" : "primary"
		}, item.text)))))))));
	}

//#endregion
return PersistedWidgetDogfoodChecklistWidgetWithSource;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=persisted-widget-dogfood-checklist-widget-with-source-fdf4de2acced.js.map