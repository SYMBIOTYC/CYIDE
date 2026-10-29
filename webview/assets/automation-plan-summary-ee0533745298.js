import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region automations/plan/AutomationPlanRow.dil.tsx
	function AutomationPlanRow({ step, isLast, statusLabel, layout, detailed = false }) {
		const isLibrary = layout === "library";
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: isLibrary ? 4 : 1,
			align: isLibrary ? "center" : "stretch",
			minHeight: isLibrary ? 56 : isLast ? 20 : 50,
			role: "listitem"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: isLibrary ? 24 : 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 26,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: statusLabel
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: step.status === "completed" ? "check-circle-filled" : step.status === "in_progress" ? "spinner" : "empty-circle",
			size: "xl",
			color: step.status === "pending" ? {
				light: "gray-300",
				dark: "gray-600"
			} : step.status === "in_progress" ? "secondary" : "tertiary"
		})), !isLibrary && !isLast && /* @__PURE__ */ __dil.jsx("box", {
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
			padding: { bottom: isLibrary || isLast ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			truncate: isLibrary,
			color: step.status === "completed" ? "tertiary" : "primary"
		}, step.title), detailed && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, step.description && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, step.description), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, statusLabel))));
	}

//#endregion
//#region automations/plan/AutomationPlanSummary.dil.tsx
	const SvgPath = "path";
	function AutomationPlanSummary$1({ state, collapsed: savedCollapsed, setCollapsed }) {
		const isMobile = DIL.useIsMobile();
		const canOpenGoalSheet = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("open_automation_goal") === true) && !!state.automation_id && (state.plan_type === "other" || state.plan_type === "learning" || state.plan_type === "health_fitness");
		const supportsGoalCard = DIL.useAppData((data) => data.opGenui?.supportsAutomationGoalCard === true);
		const canToggle = !!state.show_plan_label && !!state.hide_plan_label;
		const collapsed = savedCollapsed && canToggle;
		if (state.layout === "library") return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			padding: 8,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { bottom: 6 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", { padding: { y: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { top: 4 },
			role: "list"
		}, state.steps.map((step, index, allSteps) => /* @__PURE__ */ __dil.jsx(AutomationPlanRow, {
			key: step.id,
			step,
			isLast: index === allSteps.length - 1,
			statusLabel: state.status_labels[step.status],
			layout: "library"
		}))));
		if (supportsGoalCard) return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("automation-goal-card", {
			libraryFileId: state.library_file_id,
			title: state.title
		}));
		if (isMobile && canOpenGoalSheet) return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "start",
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "max-content",
			maxWidth: "100%",
			padding: {
				x: 4,
				y: 3
			},
			background: "surface-elevated",
			border: true,
			radius: "full",
			ariaLabel: state.show_plan_label,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_automation_goal",
				payload: { automation_id: state.automation_id }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "blue"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "tertiary"
		}, "·"), /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			truncate: true
		}, state.title)))));
		const header = /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center",
			gap: 2.5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			radius: "lg",
			background: state.emoji ? void 0 : "surface-secondary",
			ariaHidden: true
		}, state.emoji ? /* @__PURE__ */ __dil.jsx("text", { size: "xl" }, state.emoji) : /* @__PURE__ */ __dil.jsx("svg", {
			size: 24,
			viewBox: "0 0 24 24",
			color: "secondary"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M12 0.999607C12.5523 0.999607 13 1.44732 13 1.99961C13 2.55189 12.5523 2.99961 12 2.99961C7.02944 2.99961 3 7.02904 3 11.9996C3 16.9702 7.02944 20.9996 12 20.9996C16.9706 20.9996 21 16.9702 21 11.9996C21 11.4473 21.4477 10.9996 22 10.9996C22.5523 10.9996 23 11.4473 23 11.9996C23 18.0747 18.0751 22.9996 12 22.9996C5.92487 22.9996 1 18.0747 1 11.9996C1 5.92447 5.92487 0.999607 12 0.999607Z",
			fill: "currentColor"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M10.3291 5.69199C10.8595 5.53877 11.4139 5.84526 11.5674 6.37558C11.7206 6.90606 11.4152 7.4605 10.8848 7.61386C9.02739 8.15037 7.67027 9.86422 7.66992 11.8922C7.66992 14.3515 9.66371 16.3452 12.123 16.3453C14.1186 16.3453 15.8099 15.0322 16.375 13.2203C16.5395 12.6934 17.1009 12.3989 17.6279 12.5631C18.1548 12.7275 18.4481 13.2881 18.2842 13.815C17.4661 16.4388 15.0187 18.3453 12.123 18.3453C8.55914 18.3452 5.66992 15.4561 5.66992 11.8922C5.67027 8.94977 7.63902 6.46913 10.3291 5.69199Z",
			fill: "currentColor"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M16.9863 1.18808C17.7778 0.3966 19.1316 0.964354 19.1211 2.08359L19.0938 4.87949L21.8896 4.85312C23.0089 4.84226 23.5772 6.19526 22.7861 6.98691L19.4707 10.3023C19.1895 10.5833 18.8076 10.7417 18.4102 10.7418H14.6338L12.707 12.6695C12.3166 13.0598 11.6834 13.0598 11.293 12.6695C10.9025 12.2791 10.9026 11.646 11.293 11.2555L13.2324 9.31601V5.56406C13.2324 5.16638 13.3908 4.78381 13.6719 4.50254L16.9863 1.18808ZM15.2324 5.77109V8.74179H18.2021L20.0732 6.8707L17.0752 6.9L17.1035 3.89902L15.2324 5.77109Z",
			fill: "currentColor",
			fillRule: "evenodd"
		}))), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			lineHeight: 24,
			truncate: true
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true
		}, state.goal_label)));
		const openGoalSheet = canOpenGoalSheet;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			radius: "2xl",
			padding: 0,
			gap: 0
		}, openGoalSheet ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 3,
			radius: "2xl",
			focusStyle: "inset",
			variant: "ghost",
			ariaLabel: state.show_plan_label,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_automation_goal",
				payload: { automation_id: state.automation_id }
			})
		}, header) : canToggle ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 3,
			radius: {
				topLeft: "2xl",
				topRight: "2xl"
			},
			focusStyle: "inset",
			variant: collapsed ? "ghost" : void 0,
			ariaLabel: collapsed ? state.show_plan_label : state.hide_plan_label,
			ariaPressed: !collapsed,
			onClick: () => setCollapsed(!collapsed)
		}, header) : /* @__PURE__ */ __dil.jsx("box", { padding: 3 }, header), /* @__PURE__ */ __dil.jsx("animate", {
			dimension: "height",
			itemAnchor: "start",
			preventInitialTransition: true,
			hideOverflow: true,
			initial: { opacity: 1 },
			enter: {
				opacity: 1,
				duration: 200,
				timingFunction: "ease"
			},
			exit: {
				opacity: 1,
				duration: 160,
				timingFunction: "ease"
			},
			layoutEnter: {
				duration: 200,
				timingFunction: "ease"
			},
			layoutExit: {
				duration: 160,
				timingFunction: "ease"
			},
			layoutMove: {
				duration: 200,
				timingFunction: "ease"
			}
		}, !openGoalSheet && !collapsed ? /* @__PURE__ */ __dil.jsx("col", {
			key: "plan-details",
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				top: 4,
				x: 4,
				bottom: 6
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				top: 4,
				x: 4,
				bottom: 6
			},
			role: "list"
		}, state.steps.map((step, index, allSteps) => /* @__PURE__ */ __dil.jsx(AutomationPlanRow, {
			key: step.id,
			step,
			isLast: index === allSteps.length - 1,
			statusLabel: state.status_labels[step.status],
			detailed: true
		})))) : null)));
	}

//#endregion
//#region learning/plan/LearningPlanRow.dil.tsx
	const STEP_MARKER_SIZE = 24;
	const ACTIVE_RING_WIDTH = 2;
	const ACTIVE_RING_RADIUS = (STEP_MARKER_SIZE - ACTIVE_RING_WIDTH) / 2;
	const ACTIVE_RING_CIRCUMFERENCE = 2 * Math.PI * ACTIVE_RING_RADIUS;
	const SvgCircle = "circle";
	function LearningPlanRow({ step, position, isLast, statusLabel, layout, role = "listitem", expandedCompletedGroup = false }) {
		const { isDark } = DIL.useTheme();
		const isLibrary = layout === "library";
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: isLibrary ? 4 : 1,
			align: isLibrary ? "center" : "stretch",
			minHeight: isLibrary ? 56 : isLast ? 20 : 50,
			role
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: isLibrary ? STEP_MARKER_SIZE : 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: STEP_MARKER_SIZE,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: position + ". " + statusLabel
		}, expandedCompletedGroup ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-up",
			size: "lg",
			color: "rgba(143, 143, 143, 0.5)"
		}) : step.status === "completed" ? /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			radius: "full",
			background: {
				light: "gray-400",
				dark: "gray-600"
			},
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "md",
			color: "white"
		})) : /* @__PURE__ */ __dil.jsx("row", {
			size: STEP_MARKER_SIZE,
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: STEP_MARKER_SIZE / 2,
			flex: "0 0 auto",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			flex: "0 0 auto",
			radius: "full",
			border: true,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium",
			color: "primary",
			tabularNums: true
		}, position))), step.status === "in_progress" && /* @__PURE__ */ __dil.jsx("box", {
			width: STEP_MARKER_SIZE / 2,
			flex: "0 0 auto",
			align: "end",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: STEP_MARKER_SIZE,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("svg", {
			size: STEP_MARKER_SIZE,
			viewBox: \`0 0 \${STEP_MARKER_SIZE} \${STEP_MARKER_SIZE}\`,
			color: "primary"
		}, /* @__PURE__ */ __dil.jsx(SvgCircle, {
			cx: STEP_MARKER_SIZE / 2,
			cy: STEP_MARKER_SIZE / 2,
			r: ACTIVE_RING_RADIUS,
			fill: "none",
			stroke: isDark ? "#ffffff" : "#0d0d0d",
			strokeWidth: ACTIVE_RING_WIDTH,
			strokeDasharray: \`\${ACTIVE_RING_CIRCUMFERENCE / 4} \${ACTIVE_RING_CIRCUMFERENCE}\`,
			strokeLinecap: "round",
			transform: \`rotate(-90 \${STEP_MARKER_SIZE / 2} \${STEP_MARKER_SIZE / 2})\`
		}))))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0,
			padding: { bottom: isLibrary || isLast ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			truncate: isLibrary,
			color: expandedCompletedGroup ? "rgba(143, 143, 143, 0.5)" : step.status === "completed" ? "tertiary" : "primary"
		}, step.title)));
	}

//#endregion
//#region learning/plan/LearningPlanSummary.dil.tsx
	function LearningPlanSummary({ state, completedExpanded, setCompletedExpanded }) {
		const isMobile = DIL.useIsMobile();
		if (!state.steps?.length) return null;
		if (state.layout === "library") return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			padding: 8,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { bottom: 6 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", { padding: { y: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { top: 4 },
			role: "list"
		}, state.steps.map((step, index, allSteps) => /* @__PURE__ */ __dil.jsx(LearningPlanRow, {
			key: step.id,
			step,
			position: index + 1,
			isLast: index === allSteps.length - 1,
			statusLabel: state.status_labels[step.status],
			layout: "library"
		}))));
		const steps = state.steps?.map((step, index) => ({
			step,
			position: index + 1
		})) ?? [];
		const completedSteps = steps.filter(({ step }) => step.status === "completed");
		const groupCompleted = completedSteps.length >= 2;
		const completedCountLabel = state.completed_count_label ?? \`\${completedSteps.length} completed\`;
		const currentStepIndex = steps.findIndex(({ step }) => step.status === "in_progress");
		const upcomingSteps = steps.slice(Math.max(0, currentStepIndex)).filter(({ step }) => step.status !== "completed").slice(0, isMobile ? 3 : 5);
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("card", {
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
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, state.title))), /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "list"
		}, groupCompleted && /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", { role: "listitem" }, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			ariaLabel: state.show_completed_label,
			ariaPressed: completedExpanded,
			onClick: () => setCompletedExpanded(!completedExpanded)
		}, /* @__PURE__ */ __dil.jsx(LearningPlanRow, {
			step: {
				...completedSteps[0].step,
				title: completedCountLabel
			},
			position: completedSteps[0].position,
			isLast: !completedExpanded && upcomingSteps.length === 0,
			statusLabel: state.status_labels.completed,
			role: "presentation",
			expandedCompletedGroup: completedExpanded
		}))), /* @__PURE__ */ __dil.jsx("animate", {
			hideOverflow: true,
			initial: { opacity: 0 },
			enter: {
				opacity: 1,
				duration: 200,
				timingFunction: "ease"
			},
			exit: {
				opacity: 0,
				duration: 120,
				timingFunction: "ease"
			},
			layoutEnter: {
				duration: 200,
				timingFunction: "ease"
			},
			layoutExit: {
				duration: 160,
				timingFunction: "ease"
			},
			layoutMove: {
				duration: 200,
				timingFunction: "ease"
			}
		}, completedExpanded ? /* @__PURE__ */ __dil.jsx("col", {
			key: "completed-rows",
			gap: 0
		}, completedSteps.map(({ step, position }, index) => /* @__PURE__ */ __dil.jsx(LearningPlanRow, {
			key: step.id,
			step,
			position,
			isLast: upcomingSteps.length === 0 && index === completedSteps.length - 1,
			statusLabel: state.status_labels[step.status]
		}))) : null)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, [...groupCompleted ? [] : completedSteps, ...upcomingSteps].map(({ step, position }, index, visibleSteps) => /* @__PURE__ */ __dil.jsx(LearningPlanRow, {
			key: step.id,
			step,
			position,
			isLast: index === visibleSteps.length - 1,
			statusLabel: state.status_labels[step.status]
		}))))));
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
//#region AutomationPlanSummary.dil.tsx
	function getPlanSummaryView(planType) {
		switch (planType) {
			case "language_learning": return LearningPlanSummary;
			default: return AutomationPlanSummary$1;
		}
	}
	function AutomationPlanSummary(props) {
		const [, requestRender] = DIL.useState(false);
		const [collapsed, setCollapsed] = DIL.useState(true);
		const completedExpanded = DIL.useRef(false);
		const { state, resolutionComplete } = useResolvedComponentResult("AutomationPlanSummary", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: props.automation_id ? 3 : 0 }
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		const PlanSummary = getPlanSummaryView(state.plan_type);
		return /* @__PURE__ */ __dil.jsx(PlanSummary, {
			state,
			collapsed,
			setCollapsed,
			completedExpanded: completedExpanded.current,
			setCompletedExpanded: (expanded) => {
				completedExpanded.current = expanded;
				requestRender((previous) => previous !== true);
			}
		});
	}

//#endregion
return AutomationPlanSummary;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=automation-plan-summary-ee0533745298.js.map