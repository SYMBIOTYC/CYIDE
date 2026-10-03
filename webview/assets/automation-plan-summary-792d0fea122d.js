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
//#region AutomationPlanSummary.dil.tsx
	function AutomationPlanSummary(props) {
		const [expanded, setExpanded] = DIL.useState(false);
		const [collapsed, setCollapsed] = DIL.useState(false);
		const { state, resolutionComplete } = useResolvedComponentResult("AutomationPlanSummary", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		});
		const currentStepIndex = state.steps?.findIndex((step) => step.status === "in_progress") ?? -1;
		const nextStepIndex = currentStepIndex >= 0 ? currentStepIndex : state.steps?.findIndex((step) => step.status === "pending") ?? -1;
		const previousStepCompleted = nextStepIndex > 0 && state.steps?.[nextStepIndex - 1]?.status === "completed";
		const firstVisibleIndex = expanded ? 0 : nextStepIndex < 0 ? Math.max(0, (state.steps?.length ?? 0) - 3) : Math.max(0, nextStepIndex - (previousStepCompleted ? 1 : 0));
		const visibleSteps = expanded ? state.steps : state.steps?.slice(firstVisibleIndex, firstVisibleIndex + 3);
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 2,
			flex: "0 0 auto"
		}, state.show_plan_label && state.hide_plan_label && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 16,
			align: "center",
			justify: "center",
			radius: "full",
			ariaLabel: collapsed ? state.show_plan_label : state.hide_plan_label,
			tooltip: collapsed ? state.show_plan_label : state.hide_plan_label,
			onClick: () => setCollapsed(!collapsed)
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: collapsed ? "expand-large" : "collapse-large",
			size: "md",
			color: "tertiary"
		})), state.steps != null && state.expand_label && state.collapse_label && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 16,
			align: "center",
			justify: "center",
			radius: "full",
			ariaLabel: !collapsed && expanded ? state.collapse_label : state.expand_label,
			tooltip: !collapsed && expanded ? state.collapse_label : state.expand_label,
			onClick: () => {
				setExpanded(collapsed || !expanded);
				setCollapsed(false);
			}
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "dots-horizontal",
			size: "md",
			color: "tertiary"
		})))), !collapsed && /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		}), !collapsed && (state.steps == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "list"
		}, visibleSteps?.map((step, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: step.id,
			gap: 1,
			align: "stretch",
			minHeight: index === visibleSteps.length - 1 ? 20 : 50,
			role: "listitem"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: step.status === "in_progress" ? 28 : 20,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: state.status_labels[step.status]
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: step.status === "completed" ? "check-circle-filled" : step.status === "in_progress" ? "spinner" : "empty-circle",
			size: "xl",
			color: step.status === "pending" ? {
				light: "gray-300",
				dark: "gray-600"
			} : step.status === "in_progress" ? "secondary" : "tertiary"
		})), index < visibleSteps.length - 1 && /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			flex: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0,
			padding: { bottom: index === visibleSteps.length - 1 ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: step.status === "completed" ? "tertiary" : "primary"
		}, step.title), expanded && step.description && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, step.description)))))));
	}

//#endregion
return AutomationPlanSummary;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=automation-plan-summary-792d0fea122d.js.map