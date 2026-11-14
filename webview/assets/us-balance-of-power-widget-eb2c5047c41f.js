import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/ElectionUpdatedAt.dil.tsx
	function ElectionUpdatedAt({ timestamp, labelTemplate, fallback }) {
		let label = fallback;
		if (timestamp && labelTemplate) try {
			const localTime = new Intl.DateTimeFormat(void 0, {
				dateStyle: "medium",
				timeStyle: "short"
			}).format(new Date(timestamp));
			label = labelTemplate.replace("{timestamp}", localTime);
		} catch {}
		return /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, label);
	}

//#endregion
//#region internal/UsElectionHeader.dil.tsx
	function UsElectionHeader({ title, liveLabel, resolutionId }) {
		const refreshEnabled = DIL.useAppData(({ opGenui }) => !opGenui?.isShared && resolutionId != null && opGenui?.componentRefresh?.[resolutionId]?.enabled === true);
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			justify: "between",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", { size: "xl" }, title)), refreshEnabled && liveLabel ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "end",
			gap: 1.2,
			height: 26,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 14,
			height: 14,
			background: "red-75",
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 8,
			height: 8,
			background: "red-400",
			radius: "full"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			color: "red-400"
		}, liveLabel)) : null);
	}

//#endregion
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
//#region internal/UsElectionSource.dil.tsx
	const SvgPath = "path";
	function UsElectionSource({ label, name, url }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, label), /* @__PURE__ */ __dil.jsx(LinkImpression, { url }, /* @__PURE__ */ __dil.jsx("pressable", {
			role: "link",
			padding: 0,
			onClick: () => GenUI.openUrl(url)
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, name === "Associated Press" ? /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
			radius: "full",
			clip: true,
			align: "center",
			justify: "center",
			background: "#fff",
			border: {
				size: 1,
				color: "#0d0d0d1a"
			}
		}, /* @__PURE__ */ __dil.jsx("svg", {
			width: 13,
			height: 15,
			viewBox: "0 0.2378 75 86.8201"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#fff",
			d: "M0 .2378H75V78H0Z"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#fe1818",
			d: "M0 77.9937H75V87.0579H0Z"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fill: "#010101",
			d: "M20.1572670 20.6990354 7.5502734 58.5147106h9.1278135l8.5630225-26.7294212 4.291881 13.3632637h-5.5519292l-2.2172026 7.6282958h10.2190515l1.8426848 5.7378617h9.388746L30.6087943 20.6990354H20.1572670m37.4006431 0h-13.104984v37.8156752h9.062701V28.3275723h3.6518489c4.2373794 0 6.6499196 2.0206592 6.6499196 5.6720258 0 3.5860128-2.4125402 5.672508-6.6499196 5.672508h-.5867364v7.6282958h.9771705c9.7799035 0 15.5175241-4.9229903 15.5175241-13.3008038 0-8.5410772-5.7376206-13.3005627-15.5175241-13.3005627"
		}))) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary"
		}, name)))));
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
		return /* @__PURE__ */ __dil.jsx(BalanceView, {
			state,
			resolutionId: props.__resolutionId
		});
	}
	function BalanceView({ state, resolutionId }) {
		const wide = DIL.useBreakpoint("sm");
		const [seatsExpanded, setSeatsExpanded] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			padding: 5
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, state.chambers.map((chamber) => {
			const rows = chamber.summary_rows;
			const hasNoteBelowTable = chamber.status_label || chamber.warning_label || chamber.no_lead_note;
			const headlines = rows.filter((row) => row.group === "dem" || row.group === "gop");
			return /* @__PURE__ */ __dil.jsx("col", {
				key: chamber.chamber,
				gap: 3
			}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx(UsElectionHeader, {
				title: state.title,
				liveLabel: state.live_refresh_label,
				resolutionId
			}), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, state.subtitle)), /* @__PURE__ */ __dil.jsx("divider", { spacing: 1 }), /* @__PURE__ */ __dil.jsx("row", {
				justify: "between",
				align: "end",
				gap: 3
			}, headlines.map((row, index) => /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, wide && index === 1 ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary",
				textAlign: "center"
			}, chamber.majority_label) : null, /* @__PURE__ */ __dil.jsx("col", {
				key: row.label,
				gap: .5,
				flex: 1,
				minWidth: 0,
				align: row.group === "gop" ? "end" : "start"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				textAlign: row.group === "gop" ? "end" : "start"
			}, row.label), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: row.group === "dem" ? {
					light: "blue-500",
					dark: "blue-400"
				} : {
					light: "red-500",
					dark: "red-400"
				},
				textAlign: row.group === "gop" ? "end" : "start"
			}, row.secured_label))))), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
				direction: "row",
				gap: 0,
				width: "100%",
				height: 8,
				radius: "full",
				clip: true,
				background: "border-strong"
			}, chamber.segments.map((segment) => /* @__PURE__ */ __dil.jsx("box", {
				key: segment.label + segment.color,
				flex: segment.count,
				minWidth: 0,
				height: 8,
				background: segment.color,
				ariaLabel: segment.label
			}))), /* @__PURE__ */ __dil.jsx("col", {
				height: 0,
				justify: "end",
				ariaHidden: true
			}, /* @__PURE__ */ __dil.jsx("row", {
				height: 8,
				flex: "none",
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: 3,
				height: 16,
				radius: "full",
				background: "surface-inverted"
			})))), !wide || headlines.length < 2 ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, chamber.majority_label) : null, chamber.legend_items.length > 0 ? /* @__PURE__ */ __dil.jsx("row", {
				gap: 4,
				wrap: "wrap",
				justify: wide ? "center" : "start"
			}, chamber.legend_items.map((item) => /* @__PURE__ */ __dil.jsx("row", {
				key: item.label + item.colors[0],
				gap: 1,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: .5,
				align: "center"
			}, item.colors.map((color) => /* @__PURE__ */ __dil.jsx("box", {
				key: color,
				size: 8,
				radius: "2xs",
				flex: "none",
				background: color
			}))), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, item.label)))) : null, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				padding: { y: 3 }
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				border: {
					top: 1,
					bottom: 1
				}
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				role: "button",
				ariaPressed: seatsExpanded,
				padding: { y: 4 },
				onClick: () => setSeatsExpanded(!seatsExpanded)
			}, /* @__PURE__ */ __dil.jsx("row", {
				justify: "between",
				align: "center",
				gap: 3
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, state.seat_breakdown_label), /* @__PURE__ */ __dil.jsx("icon", {
				name: seatsExpanded ? "chevron-down" : "chevron-right",
				size: "md"
			}))), seatsExpanded ? /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				padding: { bottom: hasNoteBelowTable ? 4 : 1 }
			}, /* @__PURE__ */ __dil.jsx(SeatTable, {
				rows,
				headings: state.headings
			}), chamber.status_label ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "warning"
			}, chamber.status_label) : null, chamber.warning_label ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "warning"
			}, chamber.warning_label) : null, chamber.no_lead_note ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, chamber.no_lead_note[0], /* @__PURE__ */ __dil.jsx("text", {
				inline: true,
				size: "xs",
				weight: "semibold",
				color: "primary"
			}, chamber.no_lead_note[1]), chamber.no_lead_note[2]) : null) : null)), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("box", {
				direction: wide ? "row" : "col",
				align: wide ? "center" : "start",
				gap: 1,
				wrap: "wrap"
			}, /* @__PURE__ */ __dil.jsx(UsElectionSource, {
				label: state.source_label,
				name: state.source_name,
				url: state.source_url
			}), wide ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, "·") : null, /* @__PURE__ */ __dil.jsx(ElectionUpdatedAt, {
				timestamp: chamber.updated_at,
				labelTemplate: state.updated_label_template,
				fallback: chamber.updated_label
			}), chamber.is_test == null && chamber.test_label ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "tertiary"
			}, chamber.test_label) : null), chamber.is_test ? /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "danger"
			}, chamber.test_label) : null));
		})));
	}
	function SeatTable({ rows, headings }) {
		return /* @__PURE__ */ __dil.jsx("table", { columnSizing: DIL.useBreakpoint("sm") ? "equal" : "auto" }, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, /* @__PURE__ */ __dil.jsx("table-cell", { padding: {
			top: 0,
			bottom: 3
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium"
		}, headings[0])), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: {
				top: 0,
				bottom: 3,
				x: 2
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium"
		}, headings[1])), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			padding: {
				top: 0,
				bottom: 3,
				x: 2
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium"
		}, headings[2])))), /* @__PURE__ */ __dil.jsx("table-section", null, rows.map((row) => /* @__PURE__ */ __dil.jsx("table-row", { key: row.label }, /* @__PURE__ */ __dil.jsx("table-cell", {
			padding: { y: 3 },
			vAlign: "center"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 8,
			flex: "none",
			radius: "full",
			background: row.color
		}), /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, row.label))), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: {
				y: 3,
				x: 2
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			tabularNums: true
		}, row.secured)), /* @__PURE__ */ __dil.jsx("table-cell", {
			align: "end",
			vAlign: "center",
			padding: {
				y: 3,
				x: 2
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			tabularNums: true
		}, row.leading))))));
	}

//#endregion
return UsBalanceOfPower;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=us-balance-of-power-widget-eb2c5047c41f.js.map