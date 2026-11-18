import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning/course/LearningCourseActions.dil.tsx
	function LearningCourseActions({ state, onDeleted }) {
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const canEdit = capabilities?.supportedClientActions?.includes("prefill_composer") === true;
		const canDelete = capabilities?.nativeServerActions?.ready ?? capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		const [confirming, setConfirming] = DIL.useState(false);
		const [popoverKey, setPopoverKey] = DIL.useState(0);
		const [error, setError] = DIL.useState(false);
		const inFlight = DIL.useRef(false);
		const [, setRevision] = DIL.useState(0);
		const labels = state.action_labels;
		const deleteError = labels?.delete_error ?? "Couldn’t delete this course. Please try again.";
		function close() {
			setConfirming(false);
			setError(false);
			setPopoverKey((key) => key + 1);
		}
		async function deleteCourse() {
			if (!canDelete || capabilities?.isShared || inFlight.current) return;
			inFlight.current = true;
			setError(false);
			setRevision((revision) => revision + 1);
			try {
				const result = await GenUI.dispatchAction({
					handler: "server",
					type: "learning_course_delete",
					payload: { error_toast_message: deleteError }
				});
				if (result === void 0) close();
				else if (result?.status === "success" && (!result.response || result.response.status === "success")) {
					close();
					onDeleted();
				} else setError(true);
			} catch {
				setError(true);
			} finally {
				inFlight.current = false;
				setRevision((revision) => revision + 1);
			}
		}
		if (capabilities?.isShared || !canEdit && !canDelete) return null;
		return /* @__PURE__ */ __dil.jsx("box", { flex: "0 0 auto" }, /* @__PURE__ */ __dil.jsx("popover", { key: popoverKey }, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => setConfirming(false) }, /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: labels?.menu ?? "Course actions",
			size: 36,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "dots-horizontal",
			size: "xl"
		})))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "end",
			side: "bottom",
			sideOffset: 4
		}, confirming ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: 4,
			maxWidth: 320
		}, /* @__PURE__ */ __dil.jsx("title", { size: "sm" }, labels?.delete_title ?? "Delete course?"), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels?.delete_body ?? "Are you sure? This removes the course and its lesson plan. Your conversations will be kept."), error && /* @__PURE__ */ __dil.jsx("box", { role: "alert" }, /* @__PURE__ */ __dil.jsx("text", {
			color: "danger",
			size: "sm"
		}, deleteError)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "end"
		}, /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			disabled: inFlight.current,
			onClick: close
		}, labels?.cancel ?? "Cancel"), /* @__PURE__ */ __dil.jsx("button", {
			color: "danger",
			disabled: inFlight.current,
			onClick: deleteCourse
		}, inFlight.current ? labels?.deleting ?? "Deleting…" : labels?.delete ?? "Delete"))) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: 1,
			minWidth: 140
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			width: "100%",
			minHeight: 32,
			direction: "row",
			align: "center",
			justify: "start",
			padding: {
				x: 2,
				y: 1.5
			},
			radius: "md",
			disabled: !canEdit || inFlight.current,
			onClick: () => {
				if (!canEdit || capabilities?.isShared) return;
				GenUI.dispatchAction({
					handler: "client",
					type: "prefill_composer",
					payload: { prompt: \`\${state.edit_prompt ?? \`Help me edit my course “\${state.title}”. I'd like to change:\`} \` }
				});
				close();
			}
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels?.edit ?? "Edit")), /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			width: "100%",
			minHeight: 32,
			direction: "row",
			align: "center",
			justify: "start",
			padding: {
				x: 2,
				y: 1.5
			},
			radius: "md",
			disabled: !canDelete || inFlight.current,
			onClick: () => {
				setError(false);
				setConfirming(true);
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "danger"
		}, labels?.delete ?? "Delete"))))));
	}

//#endregion
//#region learning/course/LearningCourseRow.dil.tsx
	const MARKER_SIZE = 20;
	const ACTIVE_BACKGROUND = "#3a83f7";
	const ACTIVE_MARKER_BACKGROUND = "#e8f3fe";
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
			padding: { x: 3 }
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
			color: active ? ACTIVE_MARKER_BACKGROUND : "tertiary"
		}) : /* @__PURE__ */ __dil.jsx("box", {
			size: 18.333,
			flex: "0 0 auto",
			radius: "full",
			border: {
				size: .833,
				color: active ? "rgba(255,255,255,0.15)" : "alpha-15"
			},
			background: active ? ACTIVE_MARKER_BACKGROUND : "gray-0"
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
			lineHeight: 22,
			weight: "normal",
			color: active ? "white" : "tertiary",
			maxLines: 2,
			width: "100%"
		}, title)), active && /* @__PURE__ */ __dil.jsx("col", {
			width: 20,
			flex: "0 0 auto",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right-lg",
			size: "xl",
			color: "white"
		})));
		const row = interactive ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			align: "stretch",
			radius: "xl",
			variant: "ghost",
			hoverBackground: active ? "rgba(0,0,0,0.08)" : void 0,
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
			background: ACTIVE_BACKGROUND,
			radius: "xl",
			padding: 0,
			gap: 0,
			shadow: true,
			shadowStyle: "inset 0 0 0 1px var(--color-border), 0 4px 8px rgba(0, 0, 0, 0.05)"
		}, row) : row, connectAfter && /* @__PURE__ */ __dil.jsx("box", { padding: { x: 3 } }, /* @__PURE__ */ __dil.jsx("col", {
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
		const [deleted, setDeleted] = DIL.useState(false);
		const supportsCourseIcon = DIL.useAppData((data) => data.nativeComponentNames?.includes("learning-course-icon") === true);
		if (state.deleted || deleted || !state.lessons?.length) return null;
		const numberFormat = new Intl.NumberFormat(state.locale ?? void 0);
		const labels = state.timeline_label_templates;
		const lessons = state.lessons;
		const isPanel = state.layout === "panel";
		const currentIndex = lessons.findLastIndex((lesson, index) => lesson.status !== "completed" && ((lesson.number ?? index + 1) === 1 || lessons[index - 1]?.status === "completed"));
		const progressIndex = currentIndex < 0 ? lessons.length - 1 : currentIndex;
		const selectedIndex = lessons.findIndex((lesson) => !!state.current_conversation_id && lesson.conversation_id === state.current_conversation_id);
		const focusIndex = currentIndex < 0 && selectedIndex >= 0 && (isPanel || selectedIndex < progressIndex - 1 || selectedIndex > progressIndex) ? selectedIndex : progressIndex;
		const start = isPanel ? 0 : Math.max(0, focusIndex - 1);
		const end = isPanel ? lessons.length : Math.min(lessons.length, start + 4);
		const timeline = /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { x: 3 },
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
				active: index === currentIndex,
				connectBefore: index > start,
				connectAfter: index < end - 1,
				continuesBefore: index === start && (lesson.number ?? index + 1) > 1,
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
				top: 6,
				bottom: 8
			},
			gap: 6,
			shadow: true,
			shadowStyle: "inset 0 0 0 1px var(--color-border)"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: 26,
			padding: { x: 6 }
		}, supportsCourseIcon ? /* @__PURE__ */ __dil.jsx("learning-course-icon", {
			iconUrlOrEmoji: state.icon_url_or_emoji,
			size: 20
		}) : state.icon_url_or_emoji?.toLowerCase().startsWith("https://") ? /* @__PURE__ */ __dil.jsx("image", {
			src: state.icon_url_or_emoji,
			alt: "",
			width: 20,
			minWidth: 20,
			height: 20,
			radius: 5,
			frame: true,
			fit: "contain",
			hideOnFailure: true
		}) : state.icon_url_or_emoji ? /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
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
		}, state.title)), /* @__PURE__ */ __dil.jsx(LearningCourseActions, {
			key: state.course_id,
			state,
			onDeleted: () => setDeleted(true)
		})), timeline));
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
		const { state, resolutionComplete } = useResolvedComponentResult("LearningCourse", DIL.useAppData((data) => props.__resolutionId !== void 0 && data.opGenui?.componentResults?.[props.__resolutionId] !== void 0) ? {
			...props,
			__state: void 0
		} : props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		return /* @__PURE__ */ __dil.jsx(LearningCourseView, {
			key: state.course_id,
			state
		});
	}

//#endregion
return LearningCourse;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-course-61b38d777733.js.map