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
//#region Bento.dil.tsx
	function BentoSupport({ card, medium = false, wide, larger }) {
		return /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: wide || medium ? "100%" : void 0,
			padding: 3,
			background: {
				light: "gray-100",
				dark: "surface"
			},
			border: 0,
			radius: "3xl",
			clip: true,
			ariaLabel: card.title,
			onClick: () => GenUI.dispatchAction(card.has_link_url ? {
				type: "open_url",
				handler: "client",
				payload: { url: card.link_url }
			} : {
				type: "open_entity_detail",
				handler: "client",
				payload: {
					category: "ask_sidebar",
					query: card.action_query,
					extraParams: { context: card.action_context }
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: medium ? 2 : 1,
			height: medium ? "100%" : void 0,
			justify: medium ? "between" : "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 2
		}, card.title), /* @__PURE__ */ __dil.jsx("text", {
			size: card.body_is_title ? "md" : card.body_size,
			color: "secondary",
			maxLines: card.body_is_title ? void 0 : medium ? wide ? larger ? 6 : 3 : 7 : 4
		}, card.body)), medium && card.has_link_url && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: card.link_url ?? "",
			size: 18
		}), card.link_host && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, card.link_host))));
	}
	function BentoView({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const larger = DIL.useBreakpoint("md");
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: wide ? 2 : 1,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: wide ? "5/4" : "3/2"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			background: {
				light: "white",
				dark: "surface"
			},
			border: 0,
			radius: "3xl",
			clip: true,
			ariaLabel: state.large_card.action_query,
			onClick: () => GenUI.dispatchAction({
				type: "open_entity_detail",
				handler: "client",
				payload: {
					category: "ask_sidebar",
					query: state.large_card.action_query,
					extraParams: { context: state.large_card.action_context }
				}
			})
		}, state.large_card.image_url ? /* @__PURE__ */ __dil.jsx("image", {
			src: state.large_card.image_url,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("col", {
			padding: 6,
			align: "center",
			justify: "center",
			width: "100%",
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.large_card.status_text)))))), /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minHeight: 0
		}, wide ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: "5/4"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			width: "100%",
			flex: 1,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			flex: 1,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.small_card_a,
			wide: true,
			larger
		})), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			flex: 1,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.small_card_b,
			wide: true,
			larger
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			flex: 1,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.medium_card,
			medium: true,
			wide: true,
			larger
		})))) : /* @__PURE__ */ __dil.jsx("row", {
			align: "stretch",
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.small_card_a,
			wide: false,
			larger
		}), /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.small_card_b,
			wide: false,
			larger
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minHeight: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(BentoSupport, {
			card: state.medium_card,
			medium: true,
			wide: false,
			larger
		})))))));
	}
	function Bento(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Bento", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		return /* @__PURE__ */ __dil.jsx(BentoView, { state });
	}

//#endregion
return Bento;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=bento-5c0b3013f7d2.js.map