import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/system-card.dil.tsx
	function SystemCardRow({ icon, label, children }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			background: "surface-secondary",
			radius: "sm",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "lg"
		})), /* @__PURE__ */ __dil.jsx("col", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, label), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children)));
	}
	function SystemCardView({ state }) {
		return /* @__PURE__ */ __dil.jsx("card", { size: "sm" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "sparkle",
			size: "lg"
		}), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("caption", null, state.date.human)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.badges.map((badge, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: badge.color,
			variant: "soft"
		}, badge.label)))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lab",
			label: "System design"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.design)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "square-code",
			label: "Model variants"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.models.map((model, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", { variant: "outline" }, model))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "bolt",
			label: "Capabilities"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.capSummary), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, state.benchmarks.map((benchmark, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("badge", {
			color: "info",
			variant: "soft"
		}, \`\${benchmark.label} \${benchmark.value}\`))))), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "lifesaver",
			label: "Safety"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.safetySummary)), /* @__PURE__ */ __dil.jsx(SystemCardRow, {
			icon: "globe",
			label: "Deployment & access"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.accessSummary))));
	}

//#endregion
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
//#region Gpt5SystemCard.dil.tsx
	function Gpt5SystemCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Gpt5SystemCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 320,
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(SystemCardView, { state });
	}

//#endregion
return Gpt5SystemCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=gpt5-system-card-33f556ec5dbb.js.map