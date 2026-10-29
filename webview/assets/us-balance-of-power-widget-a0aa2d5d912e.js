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
//#region UsBalanceOfPower.dil.tsx
	function UsBalanceOfPower(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("UsBalanceOfPower", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(BalanceView, { state });
	}
	function BalanceView({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [expanded, setExpanded] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: wide ? 6 : 4
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 5 }, state.chambers.map((chamber) => {
			const rows = chamber.summary_rows?.length ? chamber.summary_rows : chamber.rows;
			const headlines = rows.filter((row) => row.group === "dem" || row.group === "gop");
			return /* @__PURE__ */ __dil.jsx("col", {
				key: chamber.chamber,
				gap: 5
			}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				justify: "between",
				gap: 3,
				wrap: "wrap"
			}, /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 200
			}, /* @__PURE__ */ __dil.jsx("title", { size: wide ? "xl" : "lg" }, chamber.summary_rows?.length ? state.title : chamber.title)), chamber.progress_label ? /* @__PURE__ */ __dil.jsx("badge", {
				color: "secondary",
				variant: "soft"
			}, chamber.progress_label) : null), /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.subtitle), chamber.status === "stale" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "warning"
			}, state.refresh_error_label) : chamber.status_label ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, chamber.status_label) : null, chamber.warning_label ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "warning"
			}, chamber.warning_label) : null), /* @__PURE__ */ __dil.jsx("divider", null), headlines.length ? /* @__PURE__ */ __dil.jsx("row", {
				justify: "between",
				align: "start",
				gap: 4
			}, headlines.map((row) => /* @__PURE__ */ __dil.jsx("col", {
				key: row.label,
				gap: 1,
				flex: 1,
				align: row.group === "gop" ? "end" : "start"
			}, /* @__PURE__ */ __dil.jsx("title", {
				size: wide ? "5xl" : "4xl",
				weight: "bold",
				color: row.group === "dem" ? {
					light: "blue-500",
					dark: "blue-400"
				} : {
					light: "red-500",
					dark: "red-400"
				},
				tabularNums: true
			}, row.secured), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary",
				textAlign: row.group === "gop" ? "end" : "start"
			}, row.label, " · ", state.secured_label)))) : null, chamber.segments.length ? /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 0,
				width: "100%",
				height: 20,
				radius: "sm",
				clip: true
			}, chamber.segments.map((segment) => /* @__PURE__ */ __dil.jsx("box", {
				key: segment.label + segment.color,
				flex: "none",
				width: segment.width,
				height: "100%",
				background: segment.color,
				ariaLabel: segment.label
			}))), /* @__PURE__ */ __dil.jsx("row", {
				gap: 0,
				width: "100%",
				ariaHidden: true
			}, /* @__PURE__ */ __dil.jsx("box", { width: chamber.majority_position }), /* @__PURE__ */ __dil.jsx("box", {
				width: 2,
				height: 10,
				background: "surface-inverted"
			})), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary",
				textAlign: "center"
			}, chamber.majority_label)) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				wrap: "wrap",
				justify: "between"
			}, /* @__PURE__ */ __dil.jsx("row", { gap: 2 }, /* @__PURE__ */ __dil.jsx("box", {
				size: 10,
				radius: "full",
				background: "blue-500"
			}), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, state.solid_label ?? state.legend)), /* @__PURE__ */ __dil.jsx("row", { gap: 2 }, /* @__PURE__ */ __dil.jsx("box", {
				size: 10,
				radius: "full",
				background: "blue-200"
			}), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, state.leading_label))), chamber.insufficient_label ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, chamber.insufficient_label) : null), /* @__PURE__ */ __dil.jsx(SeatTable, {
				rows,
				headings: state.headings
			}), /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("pressable", {
				variant: "ghost",
				padding: { y: 2 },
				ariaPressed: expanded,
				onClick: () => setExpanded(!expanded)
			}, /* @__PURE__ */ __dil.jsx("row", {
				justify: "between",
				gap: 3
			}, /* @__PURE__ */ __dil.jsx("text", { weight: "medium" }, state.details_label ?? state.headings[0]), /* @__PURE__ */ __dil.jsx("icon", {
				name: expanded ? "minus" : "plus",
				size: "md"
			}))), expanded ? /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, state.arithmetic_note), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, chamber.notes.map((note) => /* @__PURE__ */ __dil.jsx("text", {
				key: note,
				size: "sm",
				color: "secondary"
			}, note))), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold"
			}, state.breakdown_label), /* @__PURE__ */ __dil.jsx("box", {
				scrollable: true,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(SeatTable, {
				rows: chamber.rows,
				headings: state.headings,
				detailed: true
			}))) : null, /* @__PURE__ */ __dil.jsx("divider", null)), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				wrap: "wrap",
				align: "baseline"
			}, /* @__PURE__ */ __dil.jsx(LinkImpression, {
				url: state.source_url,
				inline: true
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				inline: true,
				role: "link",
				padding: 0,
				onClick: () => GenUI.openUrl(state.source_url)
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, state.source_name))), chamber.test_label === "" ? null : /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, chamber.test_label)), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, chamber.updated_label)));
		})));
	}
	function SeatTable({ rows, headings, detailed = false }) {
		return /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: { y: 2 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, headings[0])), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, headings[1])), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, headings[3])), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, headings[2])), detailed ? /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, headings[4])) : null)), /* @__PURE__ */ __dil.jsx("table-section", null, rows.map((row) => /* @__PURE__ */ __dil.jsx("table-row", { key: row.label }, /* @__PURE__ */ __dil.jsx("table-cell", {
			padding: { y: 3 },
			vAlign: "center"
		}, /* @__PURE__ */ __dil.jsx("row", { gap: 2 }, !detailed ? /* @__PURE__ */ __dil.jsx("box", {
			size: 10,
			flex: "none",
			radius: "full",
			background: row.color
		}) : null, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, row.label))), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			tabularNums: true
		}, row.won)), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			tabularNums: true
		}, row.holdovers)), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			tabularNums: true
		}, row.leading)), detailed ? /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			tabularNums: true
		}, row.needed)) : null))));
	}

//#endregion
return UsBalanceOfPower;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=us-balance-of-power-widget-a0aa2d5d912e.js.map