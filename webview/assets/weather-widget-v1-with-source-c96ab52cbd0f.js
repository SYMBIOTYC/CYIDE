import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region shared.dil.ts
	function useIsLiveActivity() {
		return DIL.useAppData((appData) => appData.opGenui?.surface === "live-activity");
	}
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
//#region WeatherWidgetV1WithSource.dil.tsx
	function ResolvedWeatherTable({ state }) {
		const liveActivity = useIsLiveActivity();
		const { isDark } = DIL.useTheme();
		const isWide = DIL.useBreakpoint("sm");
		const [unit, setUnit] = DIL.useState(state.initial_unit);
		const [rowsToShow, setRowsToShow] = DIL.useState(8);
		const forecast = state.forecast;
		const current = forecast.current;
		const label = (temperature) => unit === "F" ? temperature.label_f : temperature.label_c;
		if (liveActivity) {
			const day = forecast.daily[0];
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: 2,
				theme: "dark",
				background: "surface"
			}, current ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("image", {
				src: current.icon.dark ?? current.icon.light,
				width: 32,
				height: 32,
				hideOnFailure: true
			}), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, current.description)), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				align: "end"
			}, /* @__PURE__ */ __dil.jsx("title", {
				size: "xl",
				weight: "medium"
			}, label(current.temperature)), day && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, \`\${label(day.high)} / \${label(day.low)}\`))) : /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, forecast.location_label));
		}
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5,
			theme: isDark ? "dark" : "light"
		}, /* @__PURE__ */ __dil.jsx("col", {
			align: "stretch",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: forecast.display_mode === "historical" ? "start" : "between",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, current != null && isWide && /* @__PURE__ */ __dil.jsx("image", {
			src: current.icon.light,
			width: 50,
			height: 50,
			hideOnFailure: true
		}), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, current != null && /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "semibold"
		}, label(current.temperature))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			wrap: "wrap"
		}, current != null && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, current.description), /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, "•")), /* @__PURE__ */ __dil.jsx("text", {
			color: current == null ? "primary" : "secondary",
			size: current == null ? "lg" : "md",
			weight: current == null ? "semibold" : "normal"
		}, forecast.location_label)))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			padding: { top: 0 }
		}, /* @__PURE__ */ __dil.jsx("segmented-control", {
			options: [{
				label: "F",
				value: "F"
			}, {
				label: "C",
				value: "C"
			}],
			pill: true,
			value: unit ?? void 0,
			onChange: (nextUnit) => setUnit(nextUnit)
		}))), forecast.display_mode === "hourly" && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", null, forecast.hourly.slice(0, rowsToShow).map((hour, index) => /* @__PURE__ */ __dil.jsx("table-row", { key: index }, /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hour.label))), /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("image", {
			src: hour.icon.light,
			width: 30,
			height: 30,
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, label(hour.temperature))), /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, hour.description)))))), forecast.hourly.length > 8 && /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			block: true,
			onClick: () => setRowsToShow(rowsToShow === 8 ? 999 : 8)
		}, rowsToShow === 8 ? state.show_more_label : state.show_less_label))), forecast.display_mode === "daily" && /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", null, forecast.daily.slice(0, 999).map((day, index) => /* @__PURE__ */ __dil.jsx("table-row", { key: index }, /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, day.label)), /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("image", {
			src: day.icon.light,
			width: 30,
			height: 30,
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("table-cell", {
			vAlign: "center",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("row", { align: "center" }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, label(day.high)), /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			size: "sm"
		}, label(day.low)))), /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, day.description)))))), forecast.display_mode === "historical" && /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", null, forecast.historical.map((day, index) => /* @__PURE__ */ __dil.jsx("table-row", { key: index }, /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, day.label)), /* @__PURE__ */ __dil.jsx("table-cell", { vAlign: "center" }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "end"
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, label(day.high)), /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			size: "sm"
		}, label(day.low))))))))));
	}
	function WeatherWidgetV1WithSource(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("WeatherWidgetV1WithSource", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 400
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedWeatherTable, { state });
	}

//#endregion
return WeatherWidgetV1WithSource;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=weather-widget-v1-with-source-c96ab52cbd0f.js.map