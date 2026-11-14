import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


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
//#region internal/MovieScoreIcon.dil.tsx
	function MovieScoreIcon({ score, audience }) {
		let name = score >= 60 ? "rotten-tomatoes-critics-fresh" : "rotten-tomatoes-critics-rotten";
		if (audience) name = score >= 60 ? "rotten-tomatoes-audience-positive" : "rotten-tomatoes-audience-negative";
		return /* @__PURE__ */ __dil.jsx("icon", {
			name: \`vendor:rottentomatoes:\${name}\`,
			size: "2xl"
		});
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
//#region MovieSidebarWidget.dil.tsx
	const SHOWTIMES_WINDOW_DAYS = 120;
	const MS_PER_DAY = 1440 * 60 * 1e3;
	function MovieSidebarWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("MovieSidebarWidget", props);
		const now = DIL.useNow(false);
		const supportsVideoLightbox = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("open_video_lightbox") === true);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		const showShowtimes = state.release_date != null && Math.floor((now - Date.parse(state.release_date)) / MS_PER_DAY) <= SHOWTIMES_WINDOW_DAYS;
		const canOpenTrailer = supportsVideoLightbox && isFandangoTrailerUrl(state.trailer_url);
		const scores = [{
			value: state.critic_score,
			label: state.critics_label,
			audience: false
		}, {
			value: state.audience_score,
			label: state.audience_label,
			audience: true
		}];
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title.replace(/ \\(\\d{4}\\)$/, "")), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, (showShowtimes || state.trailer_url) && /* @__PURE__ */ __dil.jsx("box", { padding: { bottom: 3 } }, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			flush: true,
			showArrows: false
		}, showShowtimes && /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: "solid",
			size: "lg",
			onClick: () => state.showtimes_enabled === true ? GenUI.openEntityDetail("showtimes", state.title, {
				showtimes_mode: "nearby",
				disableFollowUpButton: true,
				disableFooterActions: true
			}) : GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: { query: state.showtimes_query }
			})
		}, state.showtimes_label)), state.trailer_url && /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url: state.trailer_url,
			unlessSupportedAction: canOpenTrailer ? "open_video_lightbox" : void 0,
			inline: true
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: showShowtimes ? "outline" : "solid",
			size: "lg",
			onClick: () => {
				const fallbackAction = {
					handler: "client",
					type: "open_url",
					payload: {
						url: state.trailer_url,
						require_safe_url_confirmation: true
					}
				};
				GenUI.dispatchAction(canOpenTrailer ? {
					handler: "client",
					type: "open_video_lightbox",
					payload: {
						video_id: state.trailer_url,
						videos: [{
							provider: "theplatform",
							url: state.trailer_url,
							title: state.title
						}]
					},
					fallbackAction
				} : fallbackAction);
			}
		}, state.trailer_label))))), state.metadata && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "clock",
			weight: "light",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.metadata))), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, scores.map((score) => score.value == null ? null : /* @__PURE__ */ __dil.jsx("row", {
			key: score.label,
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx(MovieScoreIcon, {
			score: score.value,
			audience: score.audience
		})), /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, score.value, "%"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, score.label))))), state.directors.length > 0 && /* @__PURE__ */ __dil.jsx(MovieDirectors, {
			key: state.title,
			directors: state.directors,
			label: state.director_label
		}))));
	}
	function MovieDirectors({ directors, label }) {
		const [open, setOpen] = DIL.useState(false);
		const remaining = directors.slice(1);
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 24,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "video",
			weight: "light",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, directors[0]), remaining.length > 0 && /* @__PURE__ */ __dil.jsx("box", { flex: "none" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, "+ ", remaining.length)), /* @__PURE__ */ __dil.jsx("box", { flex: "none" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label))), remaining.length > 0 && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 32,
			flex: "none",
			align: "center",
			justify: "center",
			ariaLabel: label,
			ariaPressed: open,
			onClick: () => setOpen(!open)
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: open ? "chevron-up" : "chevron-down",
			size: "md",
			color: "secondary"
		}))), open && remaining.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				left: 10,
				bottom: 2
			}
		}, remaining.map((director, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "sm",
			weight: "medium"
		}, director))));
	}
	function isFandangoTrailerUrl(url) {
		return url != null && /^https:\\/\\/(?:link\\.theplatform\\.com\\/s\\/NGweTC\\/media\\/[A-Za-z0-9_-]+|video\\.fandango\\.com\\/MPX\\/mezzanine\\/NBCU_Fandango\\/[0-9]+\\/[0-9]+\\/[A-Za-z0-9_-]+\\.mp4)/.exec(url)?.[0] === url;
	}

//#endregion
return MovieSidebarWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=movie-sidebar-widget-c3373225f139.js.map