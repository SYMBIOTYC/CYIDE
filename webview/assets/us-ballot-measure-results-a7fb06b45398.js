import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/ElectionUpdatedAt.dil.tsx
	function ElectionUpdatedAt({ timestamp, labelTemplate, fallback }) {
		let label = fallback;
		if (timestamp && labelTemplate) try {
			const localTime = new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(timestamp));
			label = labelTemplate.replace("{timestamp}", localTime);
		} catch {}
		return /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, label);
	}

//#endregion
//#region internal/UsElectionHeader.dil.tsx
	function UsElectionHeader({ title, liveLabel, resolutionId }) {
		const refreshEnabled = DIL.useAppData(({ opGenui }) => !opGenui?.isShared && resolutionId != null && opGenui?.componentRefresh?.[resolutionId]?.enabled === true);
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", { size: "xl" }, title)), refreshEnabled && liveLabel ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "end",
			gap: 1.2,
			height: 26,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 14,
			height: 14,
			background: "red-75",
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			background: "red-400",
			radius: "full"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			color: "red-400"
		}, liveLabel)) : null);
	}

//#endregion
//#region internal/LinkImpression.dil.tsx
/** Observe the rendered link without invoking its click action. */
	function useLinkImpression({ url, action, careProvider, disabled, unlessSupportedAction }) {
		const opGenui = DIL.useAppData((data) => data.opGenui);
		const shownUrls = DIL.useRef([]);
		const payload = action?.payload;
		const actionUrl = action?.type === "open_url" && (action.handler === void 0 || action.handler === "client") && !(typeof payload === "object" && payload !== null && "action" in payload && typeof payload.action === "string" && payload.action !== "open_url") && typeof payload === "object" && payload !== null && "url" in payload && typeof payload.url === "string" ? payload.url : void 0;
		const destination = action ? actionUrl : url;
		if (disabled || unlessSupportedAction && opGenui?.supportedClientActions?.includes(unlessSupportedAction) || typeof destination !== "string" || !destination.trim() || !opGenui?.supportedClientActions?.includes("genui_link_impressions")) return;
		const linkType = opGenui.linkMetadataByUrl?.[destination.trim()]?.linkType;
		if (linkType !== void 0 && typeof linkType !== "string") return;
		return {
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
		};
	}
	function LinkImpression({ children, url, action, careProvider, disabled, unlessSupportedAction, ...boxProps }) {
		const visibility = useLinkImpression({
			url,
			action,
			careProvider,
			disabled,
			unlessSupportedAction
		});
		return visibility ? /* @__PURE__ */ __dil.jsx("box", {
			...boxProps,
			...visibility
		}, children) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
	}

//#endregion
//#region internal/UsElectionSource.dil.tsx
	const SvgPath = "path";
	function UsElectionSource({ label, name, url }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, label), /* @__PURE__ */ __dil.jsx(LinkImpression, { url }, /* @__PURE__ */ __dil.jsx("pressable", {
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(url)
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, name === "Associated Press" ? /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
			radius: "full",
			clip: true,
			align: "center",
			justify: "center",
			background: "#fff",
			border: {
				size: 1,
				color: "#0d0d0d1a"
			}
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: 13,
			height: 15,
			viewBox: "0 0.2378 75 86.8201"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#fff",
			d: "M0 .2378H75V78H0Z"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#fe1818",
			d: "M0 77.9937H75V87.0579H0Z"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#010101",
			d: "M20.1572670 20.6990354 7.5502734 58.5147106h9.1278135l8.5630225-26.7294212 4.291881 13.3632637h-5.5519292l-2.2172026 7.6282958h10.2190515l1.8426848 5.7378617h9.388746L30.6087943 20.6990354H20.1572670m37.4006431 0h-13.104984v37.8156752h9.062701V28.3275723h3.6518489c4.2373794 0 6.6499196 2.0206592 6.6499196 5.6720258 0 3.5860128-2.4125402 5.672508-6.6499196 5.672508h-.5867364v7.6282958h.9771705c9.7799035 0 15.5175241-4.9229903 15.5175241-13.3008038 0-8.5410772-5.7376206-13.3005627-15.5175241-13.3005627"
		}))) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, name)))));
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
		return /* @__PURE__ */ __dil.jsx(MeasureView, {
			state,
			resolutionId: props.__resolutionId
		});
	}
	function MeasureView({ state, resolutionId }) {
		const [expanded, setExpanded] = DIL.useState(state.expanded);
		const wide = DIL.useBreakpoint("sm");
		const paired = state.options.length === 2;
		const hasShares = state.options.every((option) => option.show_bar !== false);
		const threshold = state.threshold_position_pct;
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx(UsElectionHeader, {
			title: state.title,
			liveLabel: state.live_refresh_label,
			resolutionId
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle)), state.description ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.description), /* @__PURE__ */ __dil.jsx("divider", { spacing: 1 })) : null, state.result_label ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("row", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.outcome_prefix ? state.outcome_prefix + " " : "", /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			weight: "bold"
		}, state.result_label))), /* @__PURE__ */ __dil.jsx("divider", { spacing: 1 })) : /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.called_outcome === void 0 && state.outcome_label ? /* @__PURE__ */ __dil.jsx("row", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.outcome_label)) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.progress_label)), /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: paired ? "row" : "col",
			justify: "between",
			gap: 3
		}, state.options.map((option, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: option.option_id,
			flex: 1,
			minWidth: 0,
			gap: .5,
			align: paired && index === 1 ? "end" : "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, option.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary",
			textAlign: paired && index === 1 ? "end" : "start"
		}, option.show_bar !== false ? \`\${option.share_label} (\${option.votes_label})\` : option.votes_label), !paired ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 8,
			radius: "full",
			background: option.show_bar === false ? "border-strong" : "surface-tertiary",
			ariaHidden: true
		}, option.show_bar !== false ? /* @__PURE__ */ __dil.jsx("box", {
			width: option.bar_width,
			height: 8,
			radius: "full",
			background: option.color ?? "gray-500"
		}) : null) : null))), paired ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			gap: 0,
			height: 8,
			radius: "full",
			clip: true,
			background: "border-strong"
		}, hasShares && state.options.map((option) => /* @__PURE__ */ __dil.jsx("box", {
			key: option.option_id,
			flex: parseFloat(option.bar_width),
			height: 8,
			background: option.color ?? "gray-500"
		}))), threshold != null ? /* @__PURE__ */ __dil.jsx("col", {
			height: 0,
			justify: "end",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			height: 8,
			align: "center",
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("box", { flex: threshold }), /* @__PURE__ */ __dil.jsx("box", {
			width: 3,
			height: 16,
			radius: "full",
			background: "surface-inverted"
		}), /* @__PURE__ */ __dil.jsx("box", { flex: 100 - threshold }))) : null) : null, state.threshold_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, state.threshold_label) : null), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { y: 3 }
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			border: {
				top: 1,
				bottom: 1
			}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			role: "button",
			ariaLabel: expanded ? state.hide_details_label ?? state.less_label : state.show_details_label ?? state.details_label,
			padding: { y: 4 },
			onClick: () => setExpanded(!expanded)
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.details_label), /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-down" : "chevron-right",
			size: "md"
		}))), expanded ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { bottom: 4 }
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, (state.detail_rows ?? []).map((detail) => /* @__PURE__ */ __dil.jsx("row", {
			key: detail.label,
			justify: "between",
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, detail.label)), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			align: "end"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			textAlign: "end"
		}, detail.value)))))) : null)), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: wide ? "row" : "col",
			align: wide ? "center" : "start",
			gap: 1,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx(UsElectionSource, {
			label: state.source_label,
			name: state.source_name,
			url: state.source_url
		}), wide ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, "•") : null, /* @__PURE__ */ __dil.jsx(ElectionUpdatedAt, {
			timestamp: state.updated_at,
			labelTemplate: state.updated_label_template,
			fallback: state.retrieved_label
		})), state.test_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "danger"
		}, state.test_label) : null)));
	}

//#endregion
return UsBallotMeasureResults;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=us-ballot-measure-results-a7fb06b45398.js.map