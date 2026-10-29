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
//#region ConversationalOnboardingFollowUpPills.dil.tsx
	function ConversationalOnboardingFollowUpPills(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("ConversationalOnboardingFollowUpPills", props));
		const { state, resolutionComplete } = useResolvedComponentResult("ConversationalOnboardingFollowUpPills", {
			...props,
			__resolutionId: componentKey
		});
		const wide = DIL.useBreakpoint("sm");
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 80
		});
		const isLarge = state.presentation === "illustrated_grid";
		const isTask = state.presentation === "task_cards";
		const hasTaskHeader = isTask && !!(state.title || state.subtitle);
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: state.title ?? "Suggested follow-ups",
			width: "100%",
			gap: hasTaskHeader ? 11 : 0
		}, hasTaskHeader && /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			weight: "normal",
			textAlign: "center"
		}, "🕗")), /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			gap: .5,
			width: "100%"
		}, state.title && /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "normal",
			textAlign: "center"
		}, state.title), state.subtitle && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			textAlign: "center"
		}, state.subtitle))), /* @__PURE__ */ __dil.jsx("grid", {
			gap: isTask ? 5 : 2,
			columns: isLarge || isTask && wide ? 2 : 1
		}, state.actions.map((item, index) => /* @__PURE__ */ __dil.jsx("grid-item", {
			key: item.onboarding_action_id,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: isLarge || isTask ? "100%" : "fit-content",
			minHeight: isLarge ? 160 : isTask ? 108 : 40,
			flex: "0 1 auto",
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "chatgpt_conversational_onboarding_action_shown",
				statsig_event_name: "chatgpt_conversational_onboarding_action_shown",
				event_data: {
					renderer: item.onboarding_renderer,
					level: item.onboarding_level,
					use_case: item.onboarding_use_case,
					action_id: item.onboarding_action_id,
					source: item.source
				}
			}) } : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: isLarge || isTask ? "100%" : "fit-content",
			minHeight: isLarge ? 160 : isTask ? 108 : 40,
			flex: "0 1 auto",
			padding: isTask ? 5 : {
				top: 2,
				right: 4,
				bottom: 2,
				left: 2
			},
			radius: isTask ? "4xl" : isLarge ? "xl" : "full",
			border: {
				size: 1,
				color: "default",
				style: isTask ? "dashed" : "solid"
			},
			...isTask ? { variant: "ghost" } : { background: "surface-primary" },
			clip: true,
			ariaLabel: isTask && item.description ? \`\${item.label}. \${item.description}\` : item.label,
			onClick: () => {
				const options = {
					append_to_current_leaf: true,
					event_name: "chatgpt_conversational_onboarding_action_clicked",
					statsig_event_name: "chatgpt_conversational_onboarding_action_clicked",
					event_data: {
						renderer: item.onboarding_renderer,
						level: item.onboarding_level,
						use_case: item.onboarding_use_case,
						action_id: item.onboarding_action_id,
						source: item.source
					}
				};
				const followupMetadata = {
					followups_v2_followup_clicked: true,
					followups_v2_followup_source: item.source
				};
				if (item.onboarding_client_action === "start_voice_mode") GenUI.dispatchAction({
					handler: "client",
					type: "start_voice_mode",
					loadingBehavior: "none",
					payload: {
						...options,
						component_key: componentKey,
						action_index: index,
						query: item.query,
						event_source: "conversational_onboarding",
						voice_landing: "conversational_onboarding_voice_v1",
						message_metadata: followupMetadata
					}
				});
				else GenUI.issueNewTurn(item.query, {
					...options,
					event_source: null,
					voice_landing: null,
					followup_metadata: followupMetadata
				});
			}
		}, isTask ? /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 24
		}, item.emoji ? /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "normal"
		}, item.emoji) : /* @__PURE__ */ __dil.jsx("icon", {
			name: "bell",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			minWidth: 0,
			flex: "1 1 auto"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "normal",
			color: "primary",
			maxLines: 1,
			textAlign: "start"
		}, item.label), item.description && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			maxLines: 2,
			textAlign: "start"
		}, item.description))) : isLarge ? /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			justify: "center",
			gap: 2,
			width: "100%",
			height: "100%"
		}, item.icon_url && /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 72,
			height: 72
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.icon_url,
			alt: "",
			fit: "contain",
			width: 72,
			height: 72,
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "primary",
			maxLines: 2,
			textAlign: "center",
			width: "100%"
		}, item.label)) : /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			height: "100%"
		}, item.icon_url && /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 0 auto",
			width: 24,
			height: 24
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: item.icon_url,
			alt: "",
			fit: "contain",
			width: 24,
			height: 24,
			hideOnFailure: true
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "primary",
			maxLines: 1
		}, item.label))))))));
	}

//#endregion
return ConversationalOnboardingFollowUpPills;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=conversational-onboarding-follow-up-pills-ca436ff5cc60.js.map