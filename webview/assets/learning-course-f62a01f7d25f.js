import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning/course/LearningCourseRow.dil.tsx
	const MARKER_SIZE = 20;
	function LearningCourseRow({ lesson, title, courseTitle, number, ariaLabel, unlocked, isCurrentConversation, active, connectBefore, connectAfter, continuesBefore, continuesAfter }) {
		const completed = lesson.status === "completed";
		const supportedActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions ?? []);
		const savedLessonAction = supportedActions.includes("open_conversation") ? "open_conversation" : "open_url";
		const action = lesson.conversation_id ? savedLessonAction : "issue_new_turn";
		const interactive = unlocked && supportedActions.includes(action) && (!!lesson.conversation_id || !completed);
		const content = /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "stretch",
			minHeight: active ? 60 : 44,
			padding: { x: 4 }
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: MARKER_SIZE,
			flex: "0 0 auto",
			align: "center",
			gap: 0,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minHeight: 12,
			width: 1,
			gap: 1,
			justify: "end",
			background: connectBefore && !active ? "alpha-15" : "transparent"
		}, continuesBefore && !active && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 2,
			background: "alpha-15"
		}), /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 2,
			background: "alpha-15"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			size: MARKER_SIZE,
			flex: "0 0 auto",
			align: "center",
			justify: "center"
		}, completed ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "check-circle-filled",
			size: "xl",
			color: "tertiary"
		}) : /* @__PURE__ */ __dil.jsx("box", {
			size: 18.333,
			flex: "0 0 auto",
			radius: "full",
			border: {
				size: .833,
				color: "alpha-15"
			},
			background: active ? {
				light: "gray-0",
				dark: "gray-200"
			} : "gray-0"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minHeight: 12,
			width: 1,
			gap: 1,
			background: connectAfter && !active ? "alpha-15" : "transparent"
		}, continuesAfter && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 2,
			background: "alpha-15"
		}), /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 2,
			background: "alpha-15"
		})))), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			justify: "center",
			padding: { y: active ? 2 : 2.5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			fontSize: 17,
			lineHeight: active ? 24 : 22,
			weight: active ? "medium" : "normal",
			color: active ? "primary" : "tertiary",
			truncate: true,
			width: "100%"
		}, title)), active && /* @__PURE__ */ __dil.jsx("col", {
			width: 20,
			flex: "0 0 auto",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right-lg",
			size: "xl"
		})));
		const row = interactive ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			align: "stretch",
			radius: "xl",
			variant: "ghost",
			ariaLabel,
			onClick: () => {
				if (isCurrentConversation) return;
				if (lesson.conversation_id) {
					if (action === "open_url") return GenUI.openUrl(\`https://chatgpt.com/c/\${encodeURIComponent(lesson.conversation_id)}\`);
					return GenUI.dispatchAction({
						handler: "client",
						type: "open_conversation",
						payload: { conversation_id: lesson.conversation_id }
					});
				}
				return GenUI.dispatchAction({
					handler: "client",
					type: "issue_new_turn",
					payload: { query: lesson.start_lesson_query ?? \`Create Lesson \${number}: \${lesson.title} for my course \${courseTitle}\` }
				});
			}
		}, content) : /* @__PURE__ */ __dil.jsx("box", {
			role: "group",
			ariaLabel
		}, content);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			role: "listitem"
		}, active ? /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: {
				light: "gray-0",
				dark: "gray-200"
			},
			radius: "xl",
			padding: 0,
			gap: 0,
			shadow: true,
			shadowStyle: "inset 0 0 0 1px var(--color-border), 0 4px 8px rgba(0, 0, 0, 0.05)"
		}, row) : row, connectAfter && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 4 } }, /* @__PURE__ */ __dil.jsx("col", {
			width: MARKER_SIZE,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 8,
			background: "alpha-15"
		}))));
	}

//#endregion
//#region learning/course/LearningCourseView.dil.tsx
	function LearningCourseView({ state }) {
		const supportsCourseIcon = DIL.useAppData((data) => data.nativeComponentNames?.includes("learning-course-icon") === true);
		if (!state.lessons?.length) return null;
		const numberFormat = new Intl.NumberFormat(state.locale ?? void 0);
		const labels = state.timeline_label_templates;
		const lessons = state.lessons;
		const isPanel = state.layout === "panel";
		const firstIncomplete = lessons.findIndex((lesson) => lesson.status !== "completed");
		const progressIndex = firstIncomplete < 0 ? lessons.length - 1 : firstIncomplete;
		const selectedIndex = lessons.findIndex((lesson) => !!state.current_conversation_id && lesson.conversation_id === state.current_conversation_id);
		const focusIndex = firstIncomplete < 0 && selectedIndex >= 0 && (isPanel || selectedIndex < progressIndex - 1 || selectedIndex > progressIndex) ? selectedIndex : progressIndex;
		const currentIndex = firstIncomplete < 0 ? selectedIndex : firstIncomplete;
		const start = isPanel ? 0 : Math.max(0, focusIndex - 1);
		const end = isPanel ? lessons.length : Math.min(lessons.length, start + 4);
		const timeline = /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 2.5 },
			role: "list"
		}, lessons.map((lesson, index) => {
			const number = lesson.number_label ?? numberFormat.format(lesson.number ?? index + 1);
			const title = labels?.lesson.replace("{number}", number).replace("{title}", lesson.title) ?? \`\${number}. \${lesson.title}\`;
			const statusLabel = (index === currentIndex ? state.current_lesson_status_label_templates ?? state.lesson_status_label_templates : state.lesson_status_label_templates)?.[lesson.status].replace("{number}", number) ?? \`\${number}. \${state.status_labels[lesson.status]}\`;
			const ariaLabel = (index === currentIndex ? state.current_lesson_aria_label_templates ?? state.lesson_aria_label_templates : state.lesson_aria_label_templates)?.[lesson.status].replaceAll("{number}", () => number).replaceAll("{title}", () => lesson.title) ?? \`\${title}. \${statusLabel}\`;
			return /* @__PURE__ */ __dil.jsx("animate", {
				key: lesson.id,
				initial: {
					opacity: 0,
					translateY: 8
				},
				enter: {
					opacity: 1,
					translateY: 0,
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
				},
				preventInitialTransition: true
			}, index >= start && index < end ? /* @__PURE__ */ __dil.jsx(LearningCourseRow, {
				key: "row",
				lesson,
				number,
				courseTitle: state.title,
				title,
				ariaLabel,
				unlocked: isPanel || index <= progressIndex,
				isCurrentConversation: isPanel && index === selectedIndex,
				active: index === focusIndex && (lesson.status !== "completed" || index === selectedIndex),
				connectBefore: index > start,
				connectAfter: index < end - 1,
				continuesBefore: index === start && start > 0,
				continuesAfter: index === end - 1 && end < lessons.length
			}) : null);
		}));
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			background: "gray-0",
			radius: "3xl",
			padding: {
				x: 0,
				y: 6
			},
			gap: 4,
			shadow: true,
			shadowStyle: "inset 0 0 0 1px var(--color-border), 0 4px 8px rgba(0, 0, 0, 0.05)"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			padding: { x: 6 }
		}, supportsCourseIcon ? /* @__PURE__ */ __dil.jsx("learning-course-icon", {
			iconUrlOrEmoji: state.icon_url_or_emoji,
			size: 24
		}) : state.icon_url_or_emoji?.toLowerCase().startsWith("https://") ? /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_url_or_emoji,
			alt: "",
			width: 24,
			minWidth: 24,
			height: 24,
			fit: "contain",
			hideOnFailure: true
		}) : state.icon_url_or_emoji ? /* @__PURE__ */ __dil.jsx("box", {
			size: 24,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xl" }, state.icon_url_or_emoji)) : null, /* @__PURE__ */ __dil.jsx("title", {
			size: "sm",
			truncate: true,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			fontSize: 18,
			lineHeight: 26,
			weight: "semibold"
		}, state.title))), timeline));
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
		const { state, resolutionComplete } = useResolvedComponentResult("LearningCourse", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		return /* @__PURE__ */ __dil.jsx(LearningCourseView, { state });
	}

//#endregion
return LearningCourse;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-course-f62a01f7d25f.js.map