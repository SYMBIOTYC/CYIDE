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
//#region Cite.dil.tsx
	function clampedIndex(index, itemCount) {
		if (typeof index === "number" && Number.isInteger(index) && index >= 0 && index < itemCount) return index;
		return 0;
	}
	function ResolvedCite({ activeIndex: serverActiveIndex, items }) {
		const initialActiveIndex = clampedIndex(serverActiveIndex, items.length);
		const [activeIndex, setActiveIndex] = DIL.useState(initialActiveIndex);
		const [badgeHovered, setBadgeHovered] = DIL.useState(false);
		const isSm = DIL.useBreakpoint("sm");
		const isMobile = DIL.useIsMobile();
		DIL.useEffect(() => {
			setActiveIndex(initialActiveIndex);
		}, [serverActiveIndex, items.length]);
		const activeItem = items[clampedIndex(activeIndex, items.length)];
		const url = activeItem.url ?? "";
		const hasUrl = url !== "";
		const hasDetails = [
			activeItem.title,
			activeItem.metadata_label,
			activeItem.snippet,
			activeItem.thumbnail_url
		].some(Boolean);
		const showPopover = items.length > 1 || (!isMobile || !hasUrl) && hasDetails;
		const isInteractive = showPopover || hasUrl;
		const sourceLabel = activeItem.source_label ?? activeItem.title ?? "Source";
		const badge = /* @__PURE__ */ __dil.jsx("badge", {
			color: isInteractive && badgeHovered ? {
				light: "#e8e8e8",
				dark: "gray-300"
			} : {
				light: "gray-75",
				dark: "gray-400"
			},
			maxWidth: "100%",
			onHover: isInteractive ? setBadgeHovered : void 0,
			padding: {
				left: 1,
				right: 1.5,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, hasUrl ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 12,
			url
		})) : null, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flex: "0 1 auto",
			gap: .75,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			inline: true,
			maxLines: 1,
			size: "3xs",
			truncate: true
		}, sourceLabel)), items.length > 1 ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			inline: true,
			size: "3xs"
		}, "+", items.length - 1)) : null));
		if (!showPopover) return hasUrl ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${sourceLabel}\`,
			inline: true,
			onClick: () => GenUI.openUrl(url)
		}, badge) : badge;
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 80,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => !isMobile && isSm && hasUrl ? GenUI.openUrl(url) : void 0 }, badge), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			showCloseButton: isMobile ? false : void 0,
			side: "bottom",
			sideOffset: 8
		}, isMobile ? /* @__PURE__ */ __dil.jsx(MobileCitationSources, { items }) : /* @__PURE__ */ __dil.jsx(DesktopCitationSources, { items })));
	}
	function getCitationDetail(item) {
		return [item.metadata_label, item.snippet].filter(Boolean).join(" — ");
	}
	function DesktopCitationSources({ items }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			maxHeight: 320,
			maxWidth: "100%",
			padding: {
				bottom: 2,
				top: 2,
				x: 5
			},
			scrollable: true,
			width: 384
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const itemDetail = getCitationDetail(item);
			const source = /* @__PURE__ */ __dil.jsx("col", {
				border: index === 0 ? void 0 : { top: {
					color: "default",
					size: 1
				} },
				gap: 1.5,
				padding: { y: 3 },
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				maxLines: 1,
				size: "xs",
				truncate: true
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 2,
				size: "sm",
				weight: "medium"
			}, itemTitle) : null, itemDetail || item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				gap: 4,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0
			}, itemDetail ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				maxLines: 3,
				size: "sm"
			}, itemDetail) : null), item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
				alt: "",
				fit: "cover",
				height: 56,
				hideOnFailure: true,
				radius: "xl",
				src: item.thumbnail_url,
				width: 56
			}) : null) : null);
			return itemUrl ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				key: \`\${itemUrl}:\${index}\`,
				onClick: () => GenUI.openUrl(itemUrl),
				width: "100%"
			}, source) : /* @__PURE__ */ __dil.jsx("col", {
				key: \`source:\${index}\`,
				width: "100%"
			}, source);
		}));
	}
	function MobileCitationSources({ items }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			maxHeight: 560,
			scrollable: true,
			width: "100%"
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const source = /* @__PURE__ */ __dil.jsx("col", {
				gap: 1,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold"
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, itemTitle) : null, item.metadata_label ? /* @__PURE__ */ __dil.jsx("caption", null, item.metadata_label) : null);
			return /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				key: \`\${itemUrl}:\${index}\`,
				width: "100%"
			}, index > 0 ? /* @__PURE__ */ __dil.jsx("divider", { color: "subtle" }) : null, itemUrl ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				onClick: () => GenUI.openUrl(itemUrl),
				width: "100%"
			}, source) : source);
		}));
	}
	function Cite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Cite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("loading", { label: "Loading citations" }));
		const items = state.items ?? [];
		if (!items.length) return null;
		return /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx(ResolvedCite, {
			activeIndex: state.active_index,
			items
		}));
	}

//#endregion
//#region internal/FollowUpActionBar.dil.tsx
	function FollowUpActionBarPresentation({ actions = [], contentReferenceType }) {
		return /* @__PURE__ */ __dil.jsx(FollowUpFooter, {
			actions,
			onAction: (action) => GenUI.issueNewTurn(action.query, {
				prompt: action.query,
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: "follow_up",
					widget_action_value: action.label,
					surface_location: "RESPONSE",
					content_reference_type: contentReferenceType,
					is_genui: true
				}
			})
		});
	}
	function FollowUpFooter({ actions, onAction }) {
		const isSm = DIL.useBreakpoint("sm");
		const isXs = DIL.useBreakpoint("xs");
		const visibleActions = actions.slice(0, isSm ? 3 : isXs ? 2 : 1);
		return actions.length ? /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			y: 3
		} }, /* @__PURE__ */ __dil.jsx("divider", null)), /* @__PURE__ */ __dil.jsx("box", { padding: {
			bottom: 5,
			left: 5,
			right: 5
		} }, /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			border: {
				color: "alpha-12",
				size: 1
			},
			padding: {
				x: .5,
				y: .5
			},
			radius: "lg"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			ariaLabel: "Suggested follow-ups",
			gap: 0,
			role: "group",
			width: "100%"
		}, visibleActions.map((action, index) => /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			direction: "row",
			flex: 1,
			key: \`\${action.query}:\${index}\`,
			minWidth: 0
		}, index > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			background: "alpha-10",
			height: 24,
			width: 1
		}) : null, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			flex: 1,
			justify: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: "secondary",
			onClick: () => onAction(action),
			size: "sm",
			variant: "ghost"
		}, action.icon ? /* @__PURE__ */ __dil.jsx("icon", { name: action.icon }) : null, " ", action.label)))))))) : null;
	}

//#endregion
//#region StockChart.dil.tsx
	function ShareButton({ componentKey, label, block = false }) {
		return /* @__PURE__ */ __dil.jsx("button", {
			label,
			block,
			color: "secondary",
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			}),
			size: "sm",
			uniform: !block,
			variant: block ? "soft" : "ghost"
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), block ? label : null);
	}
	function ComparisonHeader({ cards, isDesktop }) {
		return /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: 4
		}, cards.map((card, index) => /* @__PURE__ */ __dil.jsx("grid-item", { key: \`\${card.ticker ?? card.company_name}:\${index}\` }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("box", {
			background: \`\${card.color}-400\`,
			radius: "full",
			width: 4
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, card.company_name)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			tabularNums: true
		}, card.price_text)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, card.ticker && card.ticker !== card.company_name ? \`(\${card.ticker})\` : ""), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			color: card.price_change_color,
			tabularNums: true
		}, card.price_change_text)))))));
	}
	function ResolvedStockChart({ state, componentKey }) {
		const isDesktop = DIL.useBreakpoint("md");
		const [selectedRange, setSelectedRange] = DIL.useState(state.default_range);
		const [hover, setHover] = DIL.useState(null);
		const range = state.timeframe_configs[selectedRange] ? selectedRange : state.default_range;
		const timeframe = state.timeframe_configs[range];
		const chart = timeframe?.chart;
		const summary = timeframe?.summary ?? state.fallback_summary;
		const hoveredPoint = hover?.range === range ? chart?.data[hover.index] : void 0;
		const comparisonCards = hoveredPoint?.comparison_rows ?? timeframe?.comparison_rows ?? [];
		const metrics = isDesktop ? state.metrics_display : state.metrics_display_mobile;
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 5
		} }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, state.is_comparison_mode ? /* @__PURE__ */ __dil.jsx(ComparisonHeader, {
			cards: comparisonCards,
			isDesktop
		}) : /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.asset_display_name), /* @__PURE__ */ __dil.jsx("title", {
			size: "xl",
			weight: "medium",
			tabularNums: true
		}, hoveredPoint?.price_formatted ?? state.current_price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: summary.price_change_color
		}, summary.price_change_text), summary.trade_date_text ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, summary.trade_date_text) : null, state.after_hours.price_text ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.after_hours.price_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.change_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.after_hours.color
		}, state.after_hours.percent_text), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.after_hours.label)) : null)), state.share_button_variant === "top_right" ? /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share
		}) : null)), state.timeframe_order.length > 0 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("segmented-control", {
			block: isDesktop,
			options: state.timeframe_order.map((label) => ({
				value: label,
				label
			})),
			value: range,
			variant: "ghost",
			size: "md",
			onChange: (nextRange) => {
				setSelectedRange(nextRange);
				setHover(null);
				GenUI.dispatchAction({
					type: "log_event",
					handler: "client",
					payload: {
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "timeframe",
							widget_action_value: nextRange,
							surface_location: "RESPONSE",
							content_reference_type: "stock"
						}
					}
				});
			}
		})) : null, state.has_timeframe_data && chart ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			left: 5,
			right: 2
		} }, /* @__PURE__ */ __dil.jsx("chart", {
			width: "100%",
			height: isDesktop ? 340 : 240,
			data: chart.data,
			series: chart.series,
			xAxis: chart.xAxis ?? "timestamp",
			yAxis: chart.yAxis ?? void 0,
			tooltipValueFormatter: chart.tooltipValueFormatter,
			disableAnimation: chart.disableAnimation,
			showLegend: false,
			showYAxis: true,
			onHover: (snapshot) => setHover(snapshot.index === null ? null : {
				range,
				index: snapshot.index
			})
		})) : /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			justify: "center",
			minHeight: 340,
			padding: 6
		}, /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.labels.no_chart_data)), state.show_metrics && (chart?.series.length ?? 0) <= 1 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 5,
				top: 2,
				bottom: 5
			}
		}, metrics.map((row, index) => /* @__PURE__ */ __dil.jsx("box", { key: index }, /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 3 : 2,
			gap: 8
		}, row.cols.map((metric) => /* @__PURE__ */ __dil.jsx("grid-item", { key: metric.label }, /* @__PURE__ */ __dil.jsx("row", {
			gap: .5,
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, metric.label), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			textAlign: "end"
		}, metric.value)))))))) : null, state.share_button_variant === "bottom" ? /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			bottom: 5
		} }, /* @__PURE__ */ __dil.jsx(ShareButton, {
			componentKey,
			label: state.labels.share,
			block: true
		})) : null, /* @__PURE__ */ __dil.jsx(FollowUpActionBarPresentation, {
			actions: state.follow_up_actions,
			contentReferenceType: "stock"
		})));
	}
	function StockChart(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("StockChart", props));
		const canShare = DIL.useAppData((appData) => appData.opGenui?.supportedClientActions?.includes("share") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("StockChart", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 480
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedStockChart, {
			componentKey,
			state: canShare ? state : {
				...state,
				share_button_variant: "none"
			}
		});
	}

//#endregion
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
//#region ConversationalOnboardingSearch.dil.tsx
	function NewsSummary({ item }) {
		return /* @__PURE__ */ __dil.jsx("list-item", null, /* @__PURE__ */ __dil.jsx("text", { inline: true }, item.summary), /* @__PURE__ */ __dil.jsx(Cite, { ref: item.ref }));
	}
	function ResolvedSearch({ state }) {
		const [tab, setTab] = DIL.useState(state.tab);
		const isSm = DIL.useBreakpoint("sm");
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx(OnboardingTabs, {
			items: [
				{
					id: "weather",
					label: state.weather_tab_label
				},
				{
					id: "stock",
					label: state.stock_tab_label
				},
				{
					id: "news",
					label: state.news_tab_label
				}
			],
			selected: tab,
			onChange: setTab,
			useCase: "look_something_up",
			source: "conversational_onboarding_interactive_lookup"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 4 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(OnboardingQuestion, {
			label: state.ask_me_label,
			question: tab === "weather" ? state.weather_question : tab === "stock" ? state.stock_question : state.news_question
		}), /* @__PURE__ */ __dil.jsx("divider", null), tab === "stock" ? /* @__PURE__ */ __dil.jsx(StockChart, {
			ticker: state.stock_ticker,
			asset_type: state.stock_asset_type,
			market: state.stock_market
		}) : tab === "news" ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("list", {
			marker: "bullet",
			gap: 2
		}, state.news_items.map((item) => /* @__PURE__ */ __dil.jsx(NewsSummary, {
			key: item.ref,
			item
		}))), /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: { y: 3 }
		}, state.resolved_news_items.length > 0 && /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 4,
			ariaLabel: state.news_tab_label
		}, state.resolved_news_items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.ref,
			variant: "outline",
			width: isSm ? "31.5%" : "47.5%",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: "100%",
			ariaLabel: \`\${state.news_tab_label}: \${item.title}\`,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: item.url,
					event_name: "news_carousel_item_clicked",
					event_data: {
						widget_name: "news_carousel",
						ref: item.ref,
						url: item.url,
						domain: item.domain
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 4,
			padding: { bottom: 6 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: 144,
			background: "surface-secondary",
			align: "center",
			justify: "center",
			clip: true
		}, item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
			src: item.thumbnail_url,
			alt: item.title,
			width: "100%",
			height: "100%",
			radius: "none",
			hideOnFailure: true,
			fallback: /* @__PURE__ */ __dil.jsx("favicon", {
				url: item.url,
				size: 40,
				frame: true
			})
		}) : /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 40,
			frame: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2,
			padding: { x: 4 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: item.url,
			size: 16,
			frame: true
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, item.source_label)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			maxLines: 5
		}, item.title), item.date_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.date_label))))))))) : null));
	}
	function ConversationalOnboardingSearch(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingSearch", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		return /* @__PURE__ */ __dil.jsx(ResolvedSearch, { state });
	}

//#endregion
return ConversationalOnboardingSearch;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=conversational-onboarding-search-c1626e5fd5c5.js.map