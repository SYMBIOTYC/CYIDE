import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning/course/LearningCourseRow.dil.tsx
	const LESSON_MARKER_SIZE = 24;
	const ACTIVE_RING_WIDTH = 2;
	const ACTIVE_RING_RADIUS = (LESSON_MARKER_SIZE - ACTIVE_RING_WIDTH) / 2;
	const ACTIVE_RING_CIRCUMFERENCE = 2 * Math.PI * ACTIVE_RING_RADIUS;
	const SvgCircle = "circle";
	function LearningCourseRow({ lesson, position, isLast, statusLabel, layout, role = "listitem", expandedCompletedGroup = false }) {
		const { isDark } = DIL.useTheme();
		const isLibrary = layout === "library";
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: isLibrary ? 4 : 1,
			align: isLibrary ? "center" : "stretch",
			minHeight: isLibrary ? 56 : isLast ? 20 : 50,
			role
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: isLibrary ? LESSON_MARKER_SIZE : 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: LESSON_MARKER_SIZE,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: position + ". " + statusLabel
		}, expandedCompletedGroup ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-up",
			size: "lg",
			color: "rgba(143, 143, 143, 0.5)"
		}) : lesson.status === "completed" ? /* @__PURE__ */ __dil.jsx("box", {
			size: LESSON_MARKER_SIZE,
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
			size: LESSON_MARKER_SIZE,
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: LESSON_MARKER_SIZE / 2,
			flex: "0 0 auto",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: LESSON_MARKER_SIZE,
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
		}, position))), lesson.status === "in_progress" && /* @__PURE__ */ __dil.jsx("box", {
			width: LESSON_MARKER_SIZE / 2,
			flex: "0 0 auto",
			align: "end",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: LESSON_MARKER_SIZE,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("svg", {
			size: LESSON_MARKER_SIZE,
			viewBox: \`0 0 \${LESSON_MARKER_SIZE} \${LESSON_MARKER_SIZE}\`,
			color: "primary"
		}, /* @__PURE__ */ __dil.jsx(SvgCircle, {
			cx: LESSON_MARKER_SIZE / 2,
			cy: LESSON_MARKER_SIZE / 2,
			r: ACTIVE_RING_RADIUS,
			fill: "none",
			stroke: isDark ? "#ffffff" : "#0d0d0d",
			strokeWidth: ACTIVE_RING_WIDTH,
			strokeDasharray: \`\${ACTIVE_RING_CIRCUMFERENCE / 4} \${ACTIVE_RING_CIRCUMFERENCE}\`,
			strokeLinecap: "round",
			transform: \`rotate(-90 \${LESSON_MARKER_SIZE / 2} \${LESSON_MARKER_SIZE / 2})\`
		}))))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0,
			padding: { bottom: isLibrary || isLast ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			truncate: isLibrary,
			color: expandedCompletedGroup ? "rgba(143, 143, 143, 0.5)" : lesson.status === "completed" ? "tertiary" : "primary"
		}, lesson.title)));
	}

//#endregion
//#region learning/course/LearningCourseView.dil.tsx
	function LearningCourseView({ state, completedExpanded, setCompletedExpanded }) {
		const isMobile = DIL.useIsMobile();
		if (!state.lessons?.length) return null;
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
		}), state.lessons == null ? /* @__PURE__ */ __dil.jsx("col", { padding: { y: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.course_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { top: 4 },
			role: "list"
		}, state.lessons.map((lesson, index, allLessons) => /* @__PURE__ */ __dil.jsx(LearningCourseRow, {
			key: lesson.id,
			lesson,
			position: index + 1,
			isLast: index === allLessons.length - 1,
			statusLabel: state.status_labels[lesson.status],
			layout: "library"
		}))));
		const lessons = state.lessons?.map((lesson, index) => ({
			lesson,
			position: index + 1
		})) ?? [];
		const completedLessons = lessons.filter(({ lesson }) => lesson.status === "completed");
		const groupCompleted = completedLessons.length >= 2 && lessons.slice(0, completedLessons.length).every(({ lesson }) => lesson.status === "completed");
		const completedCountLabel = state.completed_count_label ?? \`\${completedLessons.length} completed\`;
		const upcomingLessons = lessons.filter(({ lesson }) => lesson.status !== "completed").slice(0, isMobile ? 3 : 5);
		const visibleLessons = lessons.filter(({ lesson, position }) => lesson.status === "completed" ? !groupCompleted : upcomingLessons.some((upcoming) => upcoming.position === position));
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
		}), state.lessons == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.course_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "list"
		}, groupCompleted && /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", { role: "listitem" }, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			ariaLabel: state.show_completed_label,
			ariaPressed: completedExpanded,
			onClick: () => setCompletedExpanded(!completedExpanded)
		}, /* @__PURE__ */ __dil.jsx(LearningCourseRow, {
			lesson: {
				...completedLessons[0].lesson,
				title: completedCountLabel
			},
			position: completedLessons[0].position,
			isLast: !completedExpanded && upcomingLessons.length === 0,
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
		}, completedLessons.map(({ lesson, position }, index) => /* @__PURE__ */ __dil.jsx(LearningCourseRow, {
			key: lesson.id,
			lesson,
			position,
			isLast: upcomingLessons.length === 0 && index === completedLessons.length - 1,
			statusLabel: state.status_labels[lesson.status]
		}))) : null)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, visibleLessons.map(({ lesson, position }, index) => /* @__PURE__ */ __dil.jsx(LearningCourseRow, {
			key: lesson.id,
			lesson,
			position,
			isLast: index === visibleLessons.length - 1,
			statusLabel: state.status_labels[lesson.status]
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
//#region LearningCourse.dil.tsx
	function LearningCourse(props) {
		const [, requestRender] = DIL.useState(false);
		const completedExpanded = DIL.useRef(false);
		const { state, resolutionComplete } = useResolvedComponentResult("LearningCourse", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: props.course_id ? 3 : 0 }
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		return /* @__PURE__ */ __dil.jsx(LearningCourseView, {
			state,
			completedExpanded: completedExpanded.current,
			setCompletedExpanded: (expanded) => {
				completedExpanded.current = expanded;
				requestRender((previous) => previous !== true);
			}
		});
	}

//#endregion
return LearningCourse;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-course-6c2fad87f012.js.map