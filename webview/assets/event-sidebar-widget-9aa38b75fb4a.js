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
//#region EventSidebarWidget.dil.tsx
	function EventSidebarWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("EventSidebarWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		const hasActions = state.ticket_url != null || state.detail_url != null;
		const hasLocation = state.venue != null || state.address != null;
		const locationLabel = state.venue != null && state.address != null ? \`\${state.venue}, \${state.address}\` : state.venue ?? state.address;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, hasActions && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 2,
			padding: { bottom: 2 },
			wrap: "nowrap"
		}, state.ticket_url != null && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			variant: "outline",
			size: "md",
			block: true,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: state.ticket_url }
			})
		}, state.view_tickets_label)), state.detail_url != null && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			variant: "outline",
			size: "md",
			block: true,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: state.detail_url }
			})
		}, state.event_details_label))), (state.schedule != null || hasLocation) && /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		})), state.schedule && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 4,
			padding: { y: 2 },
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "calendar",
			size: "md"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "md" }, state.schedule)), state.schedule != null && hasLocation && /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), hasLocation && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 4,
			padding: { y: 2 },
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", { padding: { top: 1 } }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "map-pin",
			size: "md"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, state.map_url != null ? /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: { url: state.map_url }
			})
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			weight: "medium"
		}, locationLabel)) : /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			size: "md",
			weight: "medium"
		}, locationLabel))))));
	}

//#endregion
return EventSidebarWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=event-sidebar-widget-9aa38b75fb4a.js.map