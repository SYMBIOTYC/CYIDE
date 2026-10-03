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
//#region PlacesMetadataBar.dil.tsx
	function PlacesMetadataBar(props) {
		const { isDark } = DIL.useTheme();
		const { state, resolutionComplete } = useResolvedComponentResult("PlacesMetadataBar", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 20
		});
		const logo = typeof state.provider_logo_src === "string" ? state.provider_logo_src : isDark ? state.provider_logo_src?.dark : state.provider_logo_src?.light;
		const rating = /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "star-filled",
			size: "sm",
			color: "primary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "primary"
		}, state.rating_label), state.review_count_label != null && /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "secondary"
		}, state.review_count_label), state.provider_url != null && (logo != null ? /* @__PURE__ */ __dil.jsx("image", {
			src: logo,
			alt: state.provider_label != null ? state.provider_label + " logo" : "",
			width: state.provider_logo_width,
			height: "16px",
			fit: "contain",
			hideOnFailure: true
		}) : state.provider_label != null && /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			color: "secondary"
		}, state.provider_label)));
		return /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			justify: "start",
			wrap: "wrap",
			width: "100%"
		}, state.rating_label != null && (state.provider_url != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			align: "start",
			width: "fit-content",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: state.provider_url }
			})
		}, rating) : rating), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: index,
			gap: 1,
			align: "center",
			wrap: "nowrap"
		}, (state.rating_label != null || index > 0) && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, "•"), /* @__PURE__ */ __dil.jsx("text", {
			color: item.color,
			size: "md"
		}, item.label))))));
	}

//#endregion
return PlacesMetadataBar;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=places-metadata-bar-e0d6813ba751.js.map