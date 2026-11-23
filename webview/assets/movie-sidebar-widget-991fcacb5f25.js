import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


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
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		const showShowtimes = state.release_date != null && Math.floor((now - Date.parse(state.release_date)) / MS_PER_DAY) <= SHOWTIMES_WINDOW_DAYS;
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
		}, showShowtimes && /* @__PURE__ */ __dil.jsx("row", { padding: { bottom: 3 } }, /* @__PURE__ */ __dil.jsx("button", {
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
		}, state.showtimes_label)), state.metadata && /* @__PURE__ */ __dil.jsx("row", {
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
			flex: "none",
			ariaLabel: label,
			ariaPressed: open,
			onClick: () => setOpen(!open)
		}, /* @__PURE__ */ __dil.jsx("row", {
			size: 32,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: open ? "chevron-up" : "chevron-down",
			size: "md",
			color: "secondary"
		})))), open && remaining.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
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

//#endregion
return MovieSidebarWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=movie-sidebar-widget-991fcacb5f25.js.map