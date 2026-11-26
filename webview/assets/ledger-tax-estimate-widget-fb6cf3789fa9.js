import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
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
//#region LedgerTaxEstimateWidget.dil.tsx
	const colors = {
		federal: {
			light: "#00a240",
			dark: "#00a240"
		},
		state: {
			light: "#40c977",
			dark: "#40c977"
		},
		refund: {
			light: "#99ceff",
			dark: "#80baff"
		},
		remaining: {
			light: "#e8e8e8",
			dark: "#4a4a4a"
		}
	};
	const titles = {
		refund: "Tax refund",
		owed: "Tax owed",
		even: "Tax balance",
		range: "Tax estimate",
		unavailable: "Tax estimate"
	};
	const markerColor = {
		light: "#111111",
		dark: "#f5f5f5"
	};
	const cardOutline = {
		light: "#e7e7e7",
		dark: "#444444"
	};
	const separator = {
		light: "#ededed",
		dark: "#383838"
	};
	const confidenceColors = {
		high: "success-solid",
		moderate: "warning-solid",
		low: "danger-solid",
		neutral: "border-strong"
	};
	function LedgerTaxEstimateWidget({ embedded, ...props }) {
		const result = useResolvedComponentResult("LedgerTaxEstimateWidget", props);
		if (result.state) return /* @__PURE__ */ __dil.jsx(Estimate, {
			state: result.state,
			embedded: embedded === true
		});
		return result.resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 184
		});
	}
	function Estimate({ state, embedded }) {
		const wide = DIL.useBreakpoint("sm");
		const hidden = state.sensitiveValuesHidden === true;
		const confidence = embedded && !hidden ? state.confidence : void 0;
		const format = moneyFormatter(state.locale);
		const title = hidden ? titles.unavailable : titles[state.status];
		const value = hidden ? "••••" : state.status === "range" && state.range ? formatRange(state.range, format) : state.amount !== void 0 && Number.isFinite(state.amount) ? format(Math.abs(state.amount)) : "Estimate unavailable";
		const segments = hidden ? [] : state.segments.filter(({ amount }) => Number.isFinite(amount) && amount >= 0);
		const positiveSegments = segments.filter(({ amount }) => amount > 0);
		const wideLegend = wide && segments.length <= 3;
		const content = /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			justify: "between",
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: wide ? "lg" : "md",
			weight: "semibold"
		}, title), /* @__PURE__ */ __dil.jsx("title", {
			size: wide ? "lg" : "md",
			weight: "semibold",
			textAlign: "end"
		}, value)), confidence && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: "6px",
			padding: { top: "6px" }
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "6px",
			minWidth: "6px",
			height: "6px",
			radius: "full",
			background: confidenceColors[confidence.tone],
			ariaHidden: true
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, confidence.label)), segments.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			padding: { top: wide ? 4 : 4.5 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 1,
			background: separator,
			ariaHidden: true
		}), positiveSegments.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			padding: { top: wide ? 4 : 5 }
		}, /* @__PURE__ */ __dil.jsx(EstimateBar, {
			segments: positiveSegments,
			marker: state.marker,
			format,
			height: wide ? 38 : 37
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			padding: { top: wide ? 6 : 5 }
		}, /* @__PURE__ */ __dil.jsx(Legend, {
			segments,
			format,
			wide: wideLegend
		}))));
		if (embedded) return content;
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minWidth: 0,
			background: "surface",
			border: {
				size: 1,
				color: cardOutline
			},
			radius: wide ? "24px" : "26px",
			padding: {
				x: wide ? 6 : 5,
				y: wide ? 5 : 5.5
			}
		}, content);
	}
	function EstimateBar({ segments, marker, format, height }) {
		const trailing = segments.find(({ label }) => label === "refund" || label === "remaining");
		const main = segments.filter((segment) => segment !== trailing);
		const mainAmount = main.reduce((total, { amount }) => total + amount, 0);
		const renderMarker = marker !== void 0 && Number.isFinite(marker.amount);
		const labelBeforeMarker = mainAmount >= (trailing?.amount ?? 0);
		const markerLabel = renderMarker ? /* @__PURE__ */ __dil.jsx(MarkerLabel, {
			marker,
			format,
			beforeMarker: labelBeforeMarker
		}) : null;
		const markerOverhang = 2;
		const segmentPadding = renderMarker ? { bottom: \`\${markerOverhang}px\` } : void 0;
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "end",
			width: "100%",
			gap: "2px"
		}, main.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			flex: mainAmount,
			minWidth: 0,
			gap: .5,
			padding: segmentPadding
		}, labelBeforeMarker && markerLabel, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: "2px",
			height,
			ariaHidden: true
		}, main.map((segment, index) => /* @__PURE__ */ __dil.jsx(BarSegment, {
			key: index,
			segment,
			height,
			first: index === 0,
			last: trailing === void 0 && index === main.length - 1
		})))), renderMarker && /* @__PURE__ */ __dil.jsx("col", {
			width: 1,
			minWidth: 1,
			gap: .5,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: 1,
			minWidth: 1,
			justify: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 12,
			minWidth: 12,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-down",
			size: "xs",
			color: "primary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: height + 2 * markerOverhang,
			background: markerColor
		})), trailing && /* @__PURE__ */ __dil.jsx("col", {
			flex: trailing.amount,
			minWidth: 0,
			gap: .5,
			padding: segmentPadding
		}, !labelBeforeMarker && markerLabel, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 0,
			height,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx(BarSegment, {
			segment: trailing,
			height,
			first: main.length === 0,
			last: true
		}))));
	}
	function BarSegment({ segment, height, first, last }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			flex: segment.amount,
			minWidth: 0,
			height,
			background: colors[segment.color],
			radius: {
				topLeft: first ? "8px" : "2px",
				bottomLeft: first ? "8px" : "2px",
				topRight: last ? "8px" : "2px",
				bottomRight: last ? "8px" : "2px"
			}
		});
	}
	function MarkerLabel({ marker, format, beforeMarker }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: beforeMarker ? "end" : "start",
			wrap: "wrap",
			gap: "4px",
			padding: beforeMarker ? { right: "8px" } : { left: "8px" }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, marker.label === "owed" ? "Total owed" : "Total paid"), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium"
		}, format(marker.amount)));
	}
	function Legend({ segments, format, wide }) {
		const items = segments.map((segment, index) => /* @__PURE__ */ __dil.jsx(LegendItem, {
			key: index,
			segment,
			value: format(segment.amount),
			wide
		}));
		return wide ? /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "start",
			gap: 3
		}, items) : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, items);
	}
	function LegendItem({ segment, value, wide }) {
		const label = legendLabel(segment);
		return /* @__PURE__ */ __dil.jsx("row", {
			flex: wide ? 1 : void 0,
			minWidth: 0,
			align: "stretch",
			gap: "8px"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			minWidth: 4,
			radius: "full",
			background: colors[segment.color],
			ariaHidden: true
		}), /* @__PURE__ */ __dil.jsx("box", {
			direction: wide ? "col" : "row",
			flex: 1,
			minWidth: 0,
			align: wide ? "start" : "baseline",
			justify: wide ? "start" : "between",
			gap: wide ? .5 : 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: wide ? "medium" : "normal",
			textAlign: "end"
		}, value)));
	}
	function legendLabel(segment) {
		switch (segment.label) {
			case "tax": {
				const jurisdiction = segment.jurisdiction?.trim();
				if (!jurisdiction) return "Tax";
				return /\\btax$/i.test(jurisdiction) ? jurisdiction : \`\${jurisdiction} tax\`;
			}
			case "paid": return segment.jurisdiction ? \`\${segment.jurisdiction} paid\` : "Paid";
			case "refund": return "Refund due";
			case "remaining": return "Amount remaining";
		}
	}
	function moneyFormatter(locale) {
		const createFormatter = (minimumFractionDigits) => {
			const options = {
				style: "currency",
				currency: "USD",
				minimumFractionDigits,
				maximumFractionDigits: 2
			};
			try {
				return new Intl.NumberFormat(locale, options);
			} catch {
				return new Intl.NumberFormat("en-US", options);
			}
		};
		const whole = createFormatter(0);
		const fractional = createFormatter(2);
		return (amount) => (Number.isInteger(amount) ? whole : fractional).format(amount);
	}
	function formatRange([low, high], format) {
		if (low >= 0) return \`\${format(low)}–\${format(high)} refund\`;
		if (high <= 0) return \`\${format(-high)}–\${format(-low)} owed\`;
		return \`\${format(-low)} owed to \${format(high)} refund\`;
	}

//#endregion
return LedgerTaxEstimateWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=ledger-tax-estimate-widget-fb6cf3789fa9.js.map