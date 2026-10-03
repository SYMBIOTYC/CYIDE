import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/onboarding-wave2.dil.tsx
	function OnboardingTabs({ items, selected, useCase, source, onChange }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap",
			width: "100%"
		}, items.map((item) => /* @__PURE__ */ __dil.jsx("button", {
			key: item.id,
			color: "primary",
			size: "lg",
			pill: true,
			variant: selected === item.id ? "solid" : "outline",
			onClick: () => {
				onChange(item.id);
				GenUI.dispatchAction({
					handler: "client",
					type: "log_event",
					loadingBehavior: "none",
					payload: {
						event_name: "chatgpt_conversational_onboarding_tab_clicked",
						event_data: {
							renderer: "dil",
							level: "l2",
							use_case: useCase,
							source,
							tab_id: item.id,
							previous_tab_id: selected
						}
					}
				});
			}
		}, item.label)));
	}
	function OnboardingQuestion({ label, question, gap = 1 }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "secondary"
		}, label), /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, \`"\${question}"\`));
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
//#region ConversationalOnboardingStudy.dil.tsx
	const Svg = "svg";
	const Circle = "circle";
	const Ellipse = "ellipse";
	const PLANETS = [
		{
			radius: 28,
			period: 88,
			size: 3,
			color: "#9CA3AF"
		},
		{
			radius: 44,
			period: 225,
			size: 4,
			color: "#D1D5DB"
		},
		{
			radius: 61,
			period: 365,
			size: 4.5,
			color: "#60A5FA"
		},
		{
			radius: 80,
			period: 687,
			size: 3.5,
			color: "#F97316"
		},
		{
			radius: 102,
			period: 4333,
			size: 7,
			color: "#D6A66B"
		},
		{
			radius: 124,
			period: 10759,
			size: 6,
			color: "#EABF7C"
		},
		{
			radius: 146,
			period: 30687,
			size: 5,
			color: "#67E8F9"
		},
		{
			radius: 166,
			period: 60190,
			size: 5,
			color: "#3B82F6"
		}
	];
	function Planet({ index, day }) {
		const planet = PLANETS[index];
		const x = Math.round(180 + planet.radius * Math.cos(day / planet.period * 6.28318530718));
		const y = Math.round(180 + planet.radius * Math.sin(day / planet.period * 6.28318530718));
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, (index === 5 || index === 6) && /* @__PURE__ */ __dil.jsx(Ellipse, {
			cx: x,
			cy: y,
			rx: index === 5 ? 10 : 8,
			ry: index === 5 ? 4 : 3,
			fill: "none",
			stroke: index === 5 ? "#A16207" : "#A5F3FC",
			strokeWidth: 1
		}), /* @__PURE__ */ __dil.jsx(Circle, {
			cx: x,
			cy: y,
			r: planet.size,
			fill: planet.color
		}));
	}
	function ResolvedStudy({ state }) {
		const [tab, setTab] = DIL.useState(state.tab);
		const [day, setDay] = DIL.useState(state.day);
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100vw",
			maxWidth: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx(OnboardingTabs, {
			items: [
				{
					id: "visual",
					label: state.visual_tab_label
				},
				{
					id: "quiz",
					label: state.quiz_tab_label
				},
				{
					id: "math_graph",
					label: state.math_graph_tab_label
				}
			],
			selected: tab,
			onChange: setTab,
			useCase: "study",
			source: "conversational_onboarding_interactive_study"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 4 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingQuestion, {
			label: state.ask_me_label,
			question: tab === "visual" ? state.visual_question : tab === "quiz" ? state.quiz_question : state.math_graph_question
		}), /* @__PURE__ */ __dil.jsx("divider", null), tab === "visual" ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, \`\${state.day_label} \${day}\`), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, \`\${Math.floor(day / 365)} \${state.earth_years_label}\`)), /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			onClick: () => setDay(0)
		}, state.reset_label)), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			role: "group",
			ariaLabel: state.day_label
		}, /* @__PURE__ */ __dil.jsx("slider", {
			name: "day",
			min: 0,
			max: 3650,
			step: 5,
			value: day,
			onChange: setDay
		})), /* @__PURE__ */ __dil.jsx("box", {
			border: 1,
			radius: "xl",
			width: "100%",
			padding: { y: 4 },
			align: "center",
			background: "#0B1220"
		}, /* @__PURE__ */ __dil.jsx("box", {
			scrollable: true,
			width: "100%",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx(Svg, {
			viewBox: "0 0 360 360",
			size: 340
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, PLANETS.map((planet) => /* @__PURE__ */ __dil.jsx(Circle, {
			key: planet.radius,
			cx: 180,
			cy: 180,
			r: planet.radius,
			fill: "none",
			stroke: "#334155",
			strokeWidth: 1
		}))), /* @__PURE__ */ __dil.jsx(Circle, {
			cx: 180,
			cy: 180,
			r: 14,
			fill: "#FBBF24"
		}), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, PLANETS.map((planet, index) => /* @__PURE__ */ __dil.jsx(Planet, {
			key: planet.radius,
			index,
			day
		})))))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap",
			width: "100%"
		}, PLANETS.map((planet, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: planet.radius,
			gap: 1,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			radius: "full",
			background: planet.color
		}), /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, state.planet_names[index]))))) : tab === "math_graph" ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, state.math_graph_title), /* @__PURE__ */ __dil.jsx("text", null, state.math_graph_description), /* @__PURE__ */ __dil.jsx("chart", {
			data: [
				{
					x: -3,
					y: 9
				},
				{
					x: -2,
					y: 4
				},
				{
					x: -1,
					y: 1
				},
				{
					x: 0,
					y: 0
				},
				{
					x: 1,
					y: 1
				},
				{
					x: 2,
					y: 4
				},
				{
					x: 3,
					y: 9
				}
			],
			series: [{
				type: "line",
				dataKey: "y",
				label: state.math_graph_series_label,
				curveType: "linear"
			}],
			xAxis: {
				dataKey: "x",
				type: "number",
				domain: ["dataMin", "dataMax"]
			},
			width: "100%",
			height: 280,
			showDots: true,
			showYAxis: true
		})) : null));
	}
	function ConversationalOnboardingStudy(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingStudy", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 540
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStudy, { state });
	}

//#endregion
return ConversationalOnboardingStudy;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=conversational-onboarding-study-d5079d361ca1.js.map