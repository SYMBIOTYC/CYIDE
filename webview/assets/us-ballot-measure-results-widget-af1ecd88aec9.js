import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/LinkImpression.dil.tsx
/** Observe the rendered link without invoking its click action. */
	function LinkImpression({ url, action, careProvider, disabled, unlessSupportedAction, children, ...boxProps }) {
		const opGenui = DIL.useAppData((data) => data.opGenui);
		const shownUrls = DIL.useRef([]);
		const payload = action?.payload;
		const actionUrl = action?.type === "open_url" && (action.handler === void 0 || action.handler === "client") && !(typeof payload === "object" && payload !== null && "action" in payload && typeof payload.action === "string" && payload.action !== "open_url") && typeof payload === "object" && payload !== null && "url" in payload && typeof payload.url === "string" ? payload.url : void 0;
		const destination = action ? actionUrl : url;
		if (disabled || unlessSupportedAction && opGenui?.supportedClientActions?.includes(unlessSupportedAction) || typeof destination !== "string" || !destination.trim() || !opGenui?.supportedClientActions?.includes("genui_link_impressions")) return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
		const linkType = opGenui.linkMetadataByUrl?.[destination.trim()]?.linkType;
		if (linkType !== void 0 && typeof linkType !== "string") return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
		return /* @__PURE__ */ __dil.jsx("box", {
			...boxProps,
			onVisibleKey: destination,
			onVisible: () => {
				if (shownUrls.current.includes(destination)) return;
				const careOrigin = careProvider ? /^(https?):\\/\\/(?:[^\\\\/?#]*@)?([^\\\\/?#]+)/i.exec(destination.trim()) : null;
				if (careProvider && !careOrigin) return;
				const telemetryUrl = careOrigin ? \`\${careOrigin[1]}://\${careOrigin[2]}\` : destination;
				shownUrls.current = [...shownUrls.current, destination];
				GenUI.dispatchAction({
					handler: "client",
					type: "log_event",
					payload: {
						event_name: "genui_link_shown",
						event_data: {
							url: telemetryUrl,
							is_care_provider_link: careProvider,
							link_type: linkType?.toLowerCase() ?? "general_external"
						}
					}
				});
			}
		}, children);
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
//#region UsBallotMeasureResults.dil.tsx
	function UsBallotMeasureResults(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("UsBallotMeasureResults", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(MeasureView, { state });
	}
	function MeasureView({ state }) {
		const [expanded, setExpanded] = DIL.useState(state.expanded);
		const wide = DIL.useBreakpoint("sm");
		const hasCalledOption = state.options.some((option) => option.is_called);
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("col", { gap: 1.5 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: wide ? "row" : "col",
			align: "start",
			justify: "between",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", { size: "xl" }, state.title)), /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: "secondary",
			variant: "soft",
			size: "md"
		}, state.outcome_label))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle), state.test_label ? /* @__PURE__ */ __dil.jsx("badge", { color: "warning" }, state.test_label) : null), /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), state.description ? /* @__PURE__ */ __dil.jsx("text", null, state.description) : null, /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, state.progress_label), /* @__PURE__ */ __dil.jsx("col", { gap: hasCalledOption ? 2 : 5 }, state.options.map((option) => /* @__PURE__ */ __dil.jsx("col", {
			key: option.option_id,
			gap: 2.5,
			padding: hasCalledOption ? 3 : 0,
			radius: "lg",
			border: {
				size: hasCalledOption ? 1 : 0,
				color: option.is_called ? "strong" : "transparent"
			},
			background: option.is_called ? "surface-secondary" : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			wrap: "wrap",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, option.label), option.is_called ? /* @__PURE__ */ __dil.jsx("badge", {
			color: "secondary",
			variant: "soft",
			size: "md"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, option.call_label))) : null), !option.is_called && option.call_label ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, option.call_label) : null), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			flex: "none",
			gap: .5
		}, option.show_bar !== false ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold"
		}, option.share_label) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, option.votes_label))), option.show_bar !== false ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 8,
			radius: "full",
			background: "surface-tertiary"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: option.bar_width,
			height: 8,
			radius: "full",
			background: option.color ?? "gray-500"
		})) : null))), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.threshold_label), state.threshold_note ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, state.threshold_note) : null), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("pressable", {
			role: "button",
			ariaLabel: expanded ? state.hide_details_label ?? state.less_label : state.show_details_label ?? state.details_label,
			padding: { y: 3 },
			onClick: () => setExpanded(!expanded)
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.details_label), /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "minus" : "plus",
			size: "sm",
			color: "secondary"
		}))), expanded ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { bottom: 3 }
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, (state.detail_rows ?? []).map((detail) => /* @__PURE__ */ __dil.jsx("row", {
			key: detail.label,
			justify: "between",
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, detail.label)), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			align: "end"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end",
			weight: "medium"
		}, detail.value))))), state.notes.length > 0 ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, state.notes.map((note) => /* @__PURE__ */ __dil.jsx("text", {
			key: note,
			size: "sm",
			color: "secondary"
		}, note))) : null, state.options.some((option) => option.details.length > 0) ? /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, state.options.filter((option) => option.details.length > 0).map((option) => /* @__PURE__ */ __dil.jsx("col", {
			key: option.option_id,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, option.label), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, option.details.map((detail) => /* @__PURE__ */ __dil.jsx("text", {
			key: detail,
			size: "sm",
			color: "secondary"
		}, detail)))))) : null) : null, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.source_label + " ", /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url: state.source_url,
			inline: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(state.source_url)
		}, /* @__PURE__ */ __dil.jsx("text", { inline: true }, state.source_name)))), state.status_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.status_label) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.retrieved_label))));
	}

//#endregion
return UsBallotMeasureResults;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=us-ballot-measure-results-widget-af1ecd88aec9.js.map