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
//#region ShopImageGenDesign.dil.tsx
	function ShopImageGenDesign(props) {
		const { state } = useResolvedComponentResult("ShopImageGenDesign", props);
		const { isDark } = DIL.useTheme();
		if (!state) return props.fallback ?? null;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			align: "start",
			padding: { top: 2 }
		}, /* @__PURE__ */ __dil.jsx("card", {
			variant: "soft",
			width: "auto",
			padding: 0,
			gap: 0,
			radius: "full",
			background: "surface-elevated",
			shadow: !isDark,
			shadowStyle: "0 4px 16px rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "max-content",
			maxWidth: "100%",
			minWidth: 0,
			align: "center",
			ariaLabel: state.label,
			background: "surface-elevated",
			hoverBackground: "surface-secondary",
			border: {
				size: 1,
				color: "subtle"
			},
			padding: {
				x: 4,
				y: "14px"
			},
			radius: "full",
			onClick: () => {
				GenUI.dispatchAction({
					type: "launch_ecosystem_widget",
					handler: "client",
					payload: state.launcher_payload
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			minWidth: 0,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			flex: "none",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: isDark ? state.provider_logo_dark : state.provider_logo,
			alt: "",
			width: 16,
			height: 10,
			radius: "none",
			fit: "contain",
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			weight: "medium",
			lineHeight: 20
		}, state.label), /* @__PURE__ */ __dil.jsx("box", {
			width: 18,
			height: 18,
			flex: "none",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "expand-md",
			size: "lg",
			color: "secondary"
		}))))));
	}

//#endregion
return ShopImageGenDesign;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=shop-image-gen-design-bd8a4158a38b.js.map