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
//#region internal/automation-widgets.dil.tsx
	function AutomationResourceCardView({ item }) {
		const [hovered, setHovered] = DIL.useState(false);
		const { isDark } = DIL.useTheme();
		const isMobile = DIL.useIsMobile();
		const showNewUI = item.show_new_pill_and_widget_ui === true;
		const clock = /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			color: "secondary"
		}, /* @__PURE__ */ __dil.jsx("path", { d: "M12 6.25C12.4142 6.25003 12.75 6.58581 12.75 7V11.793C12.75 12.1244 12.6182 12.4424 12.3838 12.6768L10.0303 15.0303C9.73739 15.3232 9.26262 15.3231 8.96973 15.0303C8.67683 14.7374 8.67683 14.2626 8.96973 13.9697L11.25 11.6895V7C11.25 6.58579 11.5858 6.25 12 6.25Z" }), /* @__PURE__ */ __dil.jsx("path", { d: "M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" }));
		if (!showNewUI) {
			const scheduleLabel = item.status === "paused" ? item.compact_schedule_label || item.schedule_label : item.schedule_label;
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				minWidth: 0,
				padding: { top: 3 },
				gap: 0,
				fontFamily: "app"
			}, /* @__PURE__ */ __dil.jsx("card", {
				width: "100%",
				radius: "16px",
				padding: 0,
				gap: 0,
				background: "color-mix(in oklab, var(--color-surface-elevated-secondary) 50%, transparent)",
				shadow: true,
				shadowStyle: "inset var(--elevation-stroke, 0 0 0 0.5px var(--color-border-strong, var(--color-border)))"
			}, /* @__PURE__ */ __dil.jsx(LinkImpression, {
				url: item.url,
				width: "100%",
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				width: "100%",
				minWidth: 0,
				padding: 3,
				gap: 0,
				focusStyle: "inset",
				background: !isMobile && hovered ? "color-mix(in oklab, var(--color-background-primary-ghost-hover) 30%, transparent)" : "transparent",
				onHover: setHovered,
				ariaLabel: \`\${item.title}, \${scheduleLabel}\`,
				onClick: () => GenUI.openUrl(item.url)
			}, /* @__PURE__ */ __dil.jsx("row", {
				width: "100%",
				minWidth: 0,
				gap: 2.5,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: 40,
				height: 40,
				flex: "none",
				align: "center",
				justify: "center",
				radius: "8px",
				background: "color-mix(in oklab, var(--color-surface-secondary) 92%, transparent)",
				ariaHidden: true
			}, clock), /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				fontSize: 16,
				lineHeight: 24,
				weight: "medium",
				color: "primary",
				textAlign: "start",
				truncate: true
			}, item.title), /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				fontSize: 15,
				lineHeight: 22.5,
				color: "secondary",
				textAlign: "start",
				truncate: true
			}, scheduleLabel)), item.open_label ? /* @__PURE__ */ __dil.jsx("box", {
				flex: "none",
				height: 36,
				padding: { x: 2 },
				gap: 1,
				align: "center",
				justify: "center",
				radius: "8px",
				border: {
					size: 1,
					color: "default"
				},
				clip: true
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				color: "primary",
				lineHeight: 18
			}, item.open_label)) : null)))));
		}
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "fit-content",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("card", {
			radius: "24px",
			width: "100%",
			padding: 0,
			gap: 0,
			background: "surface-elevated",
			shadow: true,
			shadowStyle: isDark ? "0 0 0 1px var(--color-border)" : "0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 16px 0 rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url: item.url,
			width: "100%",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: {
				x: 4,
				y: 3
			},
			minWidth: 0,
			minHeight: 70,
			align: "stretch",
			radius: "24px",
			variant: "ghost",
			ariaLabel: \`\${item.title}, \${item.schedule_label}\`,
			onClick: () => GenUI.openUrl(item.url)
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 2,
			align: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			flex: "none",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, item.emoji ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			fontSize: 24,
			lineHeight: 32
		}, item.emoji) : clock), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			lineHeight: 24,
			truncate: true
		}, item.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, item.schedule_label)), /* @__PURE__ */ __dil.jsx("box", {
			flex: "none",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "pencil",
			size: "2xl",
			color: "tertiary"
		})))))));
	}

//#endregion
//#region DisplayAutomation.dil.tsx
	function DisplayAutomation(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("DisplayAutomation", props);
		const [submitted, setSubmitted] = DIL.useState(false);
		const { isDark } = DIL.useTheme();
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 70.5,
			radius: "16px"
		});
		const prompt = state.prompt ?? "";
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx(AutomationResourceCardView, { item: state }), state.show_new_pill_and_widget_ui && prompt.trim() ? /* @__PURE__ */ __dil.jsx("card", {
			width: "auto",
			radius: "24px",
			padding: 0,
			gap: 0,
			background: "surface-elevated",
			shadow: true,
			shadowStyle: isDark ? "0 0 0 1px var(--color-border)" : "0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 16px 0 rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: state.run_now_label,
			variant: "ghost",
			radius: "24px",
			padding: {
				x: 4,
				y: 3
			},
			disabled: submitted,
			onClick: () => {
				if (submitted) return;
				setSubmitted(true);
				GenUI.issueNewTurn(prompt);
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			fontSize: 17,
			lineHeight: 24,
			weight: "normal",
			color: "primary"
		}, state.run_now_label))) : null);
	}

//#endregion
return DisplayAutomation;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=display-automation-widget-561133250118.js.map