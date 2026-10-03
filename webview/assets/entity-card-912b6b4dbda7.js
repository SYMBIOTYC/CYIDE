import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/PlacesEntity.dil.tsx
	function EntityActionSurface({ action, label, children }) {
		return action ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "transparent",
			border: 0,
			radius: "none",
			ariaLabel: label,
			onClick: () => GenUI.dispatchAction(action)
		}, children) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			gap: 0
		}, children);
	}
	function EntityTile({ state, explorer = false }) {
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			width: "100%",
			height: "100%",
			padding: 0,
			gap: 0,
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx(EntityActionSurface, {
			action: state.click_action,
			label: "Open details for " + state.title
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			aspectRatio: explorer ? "3/4" : "4/3",
			background: "surface-secondary",
			radius: {
				topLeft: "xl",
				topRight: "xl",
				bottomLeft: "none",
				bottomRight: "none"
			},
			clip: true
		}, state.image ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: state.image,
			upgradeToFullRes: true,
			alt: state.title,
			fit: "cover",
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true
		}) : /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: "100%",
			background: "surface-tertiary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: 3,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			maxLines: 2,
			truncate: true
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			maxLines: 3,
			truncate: true
		}, state.subtitle)))));
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
//#region EntityCard.dil.tsx
	function EntityCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("EntityCard", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx(EntityTile, { state });
	}

//#endregion
return EntityCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=entity-card-912b6b4dbda7.js.map