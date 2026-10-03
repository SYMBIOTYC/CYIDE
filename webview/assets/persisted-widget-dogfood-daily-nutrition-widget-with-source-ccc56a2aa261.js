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
//#region PersistedWidgetDogfoodDailyNutritionWidgetWithSource.dil.tsx
	function PersistedWidgetDogfoodDailyNutritionWidgetWithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("PersistedWidgetDogfoodDailyNutritionWidgetWithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 200
		});
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "lg",
			background: "surface-elevated",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				x: 4,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "·"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.date_label)), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			radius: "full",
			background: "orange-500"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, "Calories"), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 5,
			width: "100%",
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: state.calorie_progress_width,
			height: 5,
			radius: "full",
			background: "orange-500"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.calorie_progress_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			radius: "full",
			background: "green-500"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, "Protein"), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 5,
			width: "100%",
			radius: "full",
			background: "alpha-10"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: state.protein_progress_width,
			height: 5,
			radius: "full",
			background: "green-500"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.protein_progress_label))), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, state.meals.map((meal) => /* @__PURE__ */ __dil.jsx("row", {
			key: meal.id,
			align: "center",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			height: 4,
			radius: "full",
			background: "border-strong"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, meal.name)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, meal.nutrition_label))))));
	}

//#endregion
return PersistedWidgetDogfoodDailyNutritionWidgetWithSource;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=persisted-widget-dogfood-daily-nutrition-widget-with-source-ccc56a2aa261.js.map