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
//#region WebLinksCarousel.dil.tsx
	function WebLinksCarousel(props) {
		const isDesktop = DIL.useBreakpoint("sm");
		const { resolutionComplete, state } = useResolvedComponentResult("WebLinksCarousel", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 100
		});
		const width = isDesktop ? 280 : "72%";
		if (state.is_loading) return /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.loading_label
		}, [
			0,
			1,
			2
		].map((index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: index,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "md",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "55%",
			height: 12,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: "85%",
			height: 16,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "65%",
			height: 14,
			radius: "sm",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		}))))));
		if (!state.items.length) return null;
		return /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			ariaLabel: state.carousel_label
		}, state.items.map((item, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.url,
			variant: "outline",
			width,
			minWidth: width,
			gap: 0,
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			ariaLabel: item.accessibility_label,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: item.url,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_name: "web_links_carousel",
						widget_affordance: "option",
						widget_action_target: "web_link",
						widget_action_value: String(index),
						surface_location: "response",
						content_reference_type: "web_links_carousel"
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 2,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 16,
			frame: true
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.domain)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 1,
			truncate: true
		}, item.title), item.snippet != null && item.snippet !== "" && /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			maxLines: 1,
			truncate: true
		}, item.snippet))))));
	}

//#endregion
return WebLinksCarousel;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=web-links-carousel-4667bd880d4f.js.map