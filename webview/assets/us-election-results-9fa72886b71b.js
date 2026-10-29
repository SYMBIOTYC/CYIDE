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
//#region UsElectionResults.dil.tsx
	function UpdatedAtLabel({ state }) {
		const now = DIL.useNow(state.updated_at != null);
		let label = state.retrieved_label;
		if (state.updated_at && state.updated_label_template) try {
			const updatedAt = new Date(state.updated_at);
			const today = new Date(now);
			const isToday = updatedAt.getFullYear() === today.getFullYear() && updatedAt.getMonth() === today.getMonth() && updatedAt.getDate() === today.getDate();
			const timestamp = new Intl.DateTimeFormat(state.locale, {
				...isToday ? {} : {
					year: "numeric",
					month: "short",
					day: "numeric"
				},
				hour: "numeric",
				minute: "2-digit",
				timeZoneName: "short"
			}).format(updatedAt);
			label = state.updated_label_template.replace("{timestamp}", timestamp);
		} catch {}
		return /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, label);
	}
	function UsElectionResults(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("UsElectionResults", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(UsElectionResultsView, { state });
	}
	function UsElectionResultsView({ state }) {
		const [expanded, setExpanded] = DIL.useState(state.expanded);
		const [detailsExpanded, setDetailsExpanded] = DIL.useState(state.details_expanded ?? false);
		const [selectedStage, setSelectedStage] = DIL.useState(null);
		const hasFinalRound = (state.final_order?.length ?? 0) > 0;
		const finalRound = hasFinalRound && (selectedStage ?? state.vote_stage) === "final";
		const candidates = finalRound ? (state.final_order ?? []).map((index) => state.candidates[index]) : state.candidates;
		const isInitiallyVisible = (candidate) => finalRound ? candidate.final_show_when_collapsed === true : candidate.show_when_collapsed;
		const hiddenCount = candidates.filter((candidate) => !isInitiallyVisible(candidate)).length;
		const wide = DIL.useBreakpoint("sm");
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
		}, /* @__PURE__ */ __dil.jsx("title", { size: "xl" }, state.title)), state.call_status_label ?? state.status_label ? /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: state.call_status_color ?? "secondary",
			variant: "soft",
			size: "md"
		}, state.call_status_label ?? state.status_label)) : null), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.subtitle), state.geography ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.geography) : null), /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), state.progress_label ? /* @__PURE__ */ __dil.jsx("col", { gap: .5 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, state.progress_label), state.progress_detail ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.progress_detail) : null) : null, hasFinalRound ? /* @__PURE__ */ __dil.jsx("segmented-control", {
			label: state.vote_stage_label,
			size: "sm",
			variant: "soft",
			block: true,
			value: finalRound ? "final" : "first",
			options: [{
				value: "first",
				label: state.first_choice_label ?? ""
			}, {
				value: "final",
				label: state.final_round_label ?? ""
			}],
			onChange: (value) => setSelectedStage(value === "final" ? "final" : "first")
		}) : state.ranked_choice ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.first_choice_label) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 5 }, candidates.filter((candidate) => expanded || isInitiallyVisible(candidate)).map((candidate) => /* @__PURE__ */ __dil.jsx("col", {
			key: candidate.candidate_id,
			gap: 2.5
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, candidate.name), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, candidate.party), candidate.call_label ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			padding: { top: .5 }
		}, candidate.call_kind === "winner" ? /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "full",
			background: "green-600",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xs",
			color: "white"
		})) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: candidate.call_kind === "winner" ? "success" : candidate.call_kind === "reversed" ? "warning" : "secondary"
		}, candidate.call_label)) : null), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			align: "end",
			flex: "none"
		}, finalRound || candidate.show_bar !== false ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold"
		}, finalRound ? candidate.final_share_label : candidate.share_label) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, finalRound ? candidate.final_votes_label : candidate.votes_label ?? candidate.compact_votes_label))), finalRound || candidate.show_bar !== false ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 6,
			radius: "full",
			background: "surface-tertiary"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: finalRound ? candidate.final_bar_width ?? "0%" : candidate.bar_width,
			height: 6,
			radius: "full",
			background: candidate.color
		})) : null))), hiddenCount > 0 ? /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			color: "secondary",
			size: "lg",
			block: true,
			onClick: () => setExpanded(!expanded)
		}, expanded ? state.less_label : finalRound ? state.final_more_label || state.more_label : state.more_label) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("pressable", {
			role: "button",
			ariaLabel: detailsExpanded ? state.hide_details_label : state.show_details_label,
			padding: { y: 3 },
			onClick: () => setDetailsExpanded(!detailsExpanded)
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.details_label ?? state.more_label), /* @__PURE__ */ __dil.jsx("icon", {
			name: detailsExpanded ? "minus" : "plus",
			size: "sm",
			color: "secondary"
		}))), detailsExpanded ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { bottom: 3 }
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, state.notes.map((note) => /* @__PURE__ */ __dil.jsx("text", {
			key: note,
			size: "sm",
			color: "secondary"
		}, note))), state.candidates.some((candidate) => candidate.vote_methods?.length) ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, state.vote_methods_label) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, state.candidates.filter((candidate) => candidate.details.length > 0 || candidate.vote_methods?.length).map((candidate) => /* @__PURE__ */ __dil.jsx("col", {
			key: candidate.candidate_id,
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, candidate.name), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, candidate.details.map((detail) => /* @__PURE__ */ __dil.jsx("text", {
			key: detail,
			size: "sm",
			color: "secondary"
		}, detail))), candidate.vote_methods?.length ? /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: { y: 1.5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, state.method_column_label)), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: { y: 1.5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, state.votes_column_label)))), /* @__PURE__ */ __dil.jsx("table-section", null, candidate.vote_methods.map((method) => /* @__PURE__ */ __dil.jsx("table-row", { key: method.method }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: { y: 1.5 } }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, method.method)), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: { y: 1.5 }
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, method.votes_label)))))) : null))), state.method_notes?.length ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, state.method_notes.map((note) => /* @__PURE__ */ __dil.jsx("text", {
			key: note,
			size: "xs",
			color: "secondary"
		}, note))) : null) : null, /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 })), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("box", {
			direction: wide ? "row" : "col",
			align: "start",
			justify: "between",
			gap: 1,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
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
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "xs",
			color: "tertiary"
		}, state.source_name)))), state.retrieved_label !== null ? /* @__PURE__ */ __dil.jsx(UpdatedAtLabel, { state }) : null), state.test_label ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "warning"
		}, state.test_label) : null)));
	}

//#endregion
return UsElectionResults;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=us-election-results-9fa72886b71b.js.map