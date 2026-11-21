import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region ../internal/quiz.dil.tsx
	function QuizFrame({ isDesktop, clip, size = "full", elevated = false, children }) {
		if (elevated) return /* @__PURE__ */ __dil.jsx("card", {
			size,
			padding: 0
		}, children);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			border: {
				size: 1,
				color: "default"
			},
			radius: "3xl",
			background: isDesktop ? "surface-elevated" : "gray-0",
			clip
		}, children);
	}
	function QuizHeader({ isDesktop, prompt, navigation, utilities }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: "row",
			wrap: "wrap-reverse",
			align: "end",
			minHeight: 50,
			padding: {
				left: 5,
				right: isDesktop ? 5 : 3,
				top: "10px"
			},
			rowGap: 2,
			columnGap: 4
		}, prompt, /* @__PURE__ */ __dil.jsx("row", {
			flex: "1 0 auto",
			align: "center",
			justify: "between",
			gap: 4
		}, navigation, utilities));
	}
	function QuizIconButton({ label, tooltip, disabled, onClick, children }) {
		return /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
			padding: 0,
			radius: "full",
			variant: "ghost",
			align: "center",
			justify: "center",
			ariaLabel: label,
			tooltip,
			disabled,
			onClick
		}, children);
	}
	function QuizChoiceRow({ label, pressed, interactive, disabled, dimWhenDisabled, onSelect, indicator, content, feedback }) {
		const children = /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4,
			ariaHidden: !!label
		}, indicator, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			minHeight: 32,
			justify: "center"
		}, content), feedback));
		return /* @__PURE__ */ __dil.jsx("box", { padding: { x: 2 } }, /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 46,
			padding: {
				x: 2,
				y: "7px"
			},
			radius: "4xl",
			variant: "ghost",
			hoverBackground: "surface-secondary",
			disabled: !interactive || disabled,
			dimWhenDisabled,
			onClick: onSelect,
			ariaLabel: label,
			ariaPressed: pressed
		}, children));
	}

//#endregion
//#region ../learning-status.dil.ts
	let LearningWidgetStatus = /* @__PURE__ */ function(LearningWidgetStatus$1) {
		LearningWidgetStatus$1["Unanswered"] = "unanswered";
		LearningWidgetStatus$1["Correct"] = "correct";
		LearningWidgetStatus$1["Incorrect"] = "incorrect";
		LearningWidgetStatus$1["Skipped"] = "skipped";
		return LearningWidgetStatus$1;
	}({});
	const MARK_LEARNING_WIDGET_COMPLETED = "markLearningWidgetCompleted";
	const LEARNING_COMPOSER_FEEDBACK_CAPABILITY = "markLearningWidgetCompleted_composer_feedback";
	function getLearningComposerFeedback(status) {
		if (status === LearningWidgetStatus.Correct) return {
			type: "checkmark",
			message: "Nice work!"
		};
		if (status === LearningWidgetStatus.Skipped) return {
			type: "notice",
			message: "Moving on…"
		};
		return { type: "none" };
	}
	function getLearningCompletionPayload(feedback, supportedClientActions) {
		return feedback && supportedClientActions?.includes(LEARNING_COMPOSER_FEEDBACK_CAPABILITY) ? { composer_feedback: feedback } : {};
	}

//#endregion
//#region ../learning/primitives/LearningSectionAdvanceButton.dil.tsx
	function LearningSectionAdvanceButton({ label, loading = false }) {
		const appData = DIL.useAppData();
		if (appData.learningSectionCompletionEnabled !== true) return null;
		const canNavigateReview = appData.learningSectionContinueNavigationEnabled === true && appData.opGenui?.supportedClientActions?.includes(MARK_LEARNING_WIDGET_COMPLETED) === true;
		const isLoading = loading || appData.learningSectionAdvancePending === true;
		const disabled = appData.learningSectionCompletionReadOnly === true && !canNavigateReview || appData.opGenui?.isShared === true;
		return /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			size: "lg",
			variant: "solid",
			color: isLoading ? "secondary" : "primary",
			disabled,
			loading: isLoading,
			onClick: async () => {
				if (disabled || isLoading) return;
				await GenUI.dispatchWidgetClientAction?.({
					type: MARK_LEARNING_WIDGET_COMPLETED,
					payload: {
						must_move_on: true,
						...getLearningCompletionPayload({ type: "none" }, appData.opGenui?.supportedClientActions)
					}
				});
			}
		}, !label || label === "Continue" ? "Next" : label);
	}

//#endregion
//#region ../shared.dil.ts
	function hasImageSource(image) {
		return Boolean(image?.content_url || image?.thumbnail_url);
	}
	function useIsLiveActivity() {
		return DIL.useAppData((appData) => appData.opGenui?.surface === "live-activity");
	}
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
//#region ../internal/quiz-media.dil.tsx
	function QuizMediaPreload({ image, height }) {
		return hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			preload: true,
			upgradeToFullRes: true,
			width: "100%",
			height,
			fit: "cover",
			radius: "none",
			alt: ""
		}) : null;
	}
	/** Shared browser-download recovery. Image search remains owned by the server. */
	function QuizMedia({ image, loading, height, alt, identity = "", retry = true, radius = "lg", background = "surface-secondary", loadedBackground = background, retries, onRetryChange, onLoad, onError, children }) {
		const sourceKey = JSON.stringify([
			identity,
			image?.content_url ?? "",
			image?.thumbnail_url ?? ""
		]);
		const initialDownload = {
			key: sourceKey,
			status: "pending",
			attempt: 0
		};
		const [download, setLocalDownload] = DIL.useState(initialDownload);
		const persistedRetries = retries !== void 0 && onRetryChange !== void 0;
		const active = persistedRetries ? retries[sourceKey] ?? initialDownload : download.key === sourceKey ? download : initialDownload;
		function setDownload(next) {
			if (persistedRetries) onRetryChange(sourceKey, next);
			else setLocalDownload(next);
		}
		const attemptKey = \`\${sourceKey}:\${active.attempt}\`;
		const latestAttempt = DIL.useRef(attemptKey);
		latestAttempt.current = attemptKey;
		const now = DIL.useNow(retry && hasImageSource(image) && (active.status === "pending" || active.status === "failed"));
		const nextTick = DIL.useRef({
			key: sourceKey,
			at: now
		});
		if (nextTick.current.key !== sourceKey) nextTick.current = {
			key: sourceKey,
			at: now
		};
		DIL.useEffect(() => {
			if (!retry || !hasImageSource(image) || active.status === "loaded" || active.status === "stopped" || now < nextTick.current.at) return;
			nextTick.current = {
				key: sourceKey,
				at: now + 15e3
			};
			if (active.deadline === void 0) setDownload({
				...active,
				deadline: now + 18e4
			});
			else if (now >= active.deadline) setDownload({
				...active,
				status: "stopped"
			});
			else if (active.status === "failed") setDownload({
				...active,
				status: "pending",
				attempt: active.attempt + 1
			});
		}, [
			active.key,
			active.status,
			active.attempt,
			active.deadline,
			now,
			retry,
			persistedRetries
		]);
		const fallback = /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "images",
			color: "secondary"
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			height,
			width: "100%",
			radius,
			clip: true,
			background: active.status === "loaded" ? loadedBackground : background
		}, hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("search-image", {
			key: attemptKey,
			searchImage: image,
			upgradeToFullRes: true,
			alt,
			width: "100%",
			height,
			fit: "cover",
			radius: "none",
			fallback,
			onLoad: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: "loaded"
				});
				onLoad?.();
			},
			onError: () => {
				if (latestAttempt.current !== attemptKey) return;
				setDownload({
					...active,
					status: retry && active.status !== "stopped" ? "failed" : "stopped"
				});
				onError?.();
			}
		}, children) : children != null ? children : loading ? /* @__PURE__ */ __dil.jsx("loading-block", {
			height,
			width: "100%",
			label: alt
		}) : fallback);
	}

//#endregion
//#region ../internal/text-only-markdown.dil.tsx
/** Host-rendered text formatting, without link navigation or image loading. */
	function TextOnlyMarkdown({ children }) {
		return /* @__PURE__ */ __dil.jsx("text-only-markdown", null, children);
	}

//#endregion
//#region internal/learning-quiz.dil.tsx
	function mergeQuizAnswers(previous, confirmed) {
		return [...previous.filter((answer) => !confirmed.some((next) => next.index === answer.index && next.question_id === answer.question_id)), ...confirmed].sort((a, b) => a.index - b.index);
	}
	function actionProgressAttempt(action) {
		return action.payload.attempt + (action.type === "learning_quiz_restart" ? 1 : 0);
	}
	function isServerSnapshotAtLeastAsNew(incoming, current) {
		if (incoming.attempt !== current.attempt) return incoming.attempt > current.attempt;
		const incomingSequence = incoming.navigation?.sequence ?? 0;
		const currentSequence = current.navigation?.sequence ?? 0;
		if (incomingSequence !== currentSequence) return incomingSequence > currentSequence;
		return (incoming.revision ?? 0) >= (current.revision ?? 0);
	}
	function QuizUtilities({ state, componentKey }) {
		if (!state.generation_complete || !state.copy_quiz_text && state.share_button_variant !== "top_right") return null;
		return /* @__PURE__ */ __dil.jsx("row", {
			flex: "0 0 auto",
			align: "center",
			gap: "5px"
		}, state.copy_quiz_text !== "" && /* @__PURE__ */ __dil.jsx(QuizIconButton, {
			label: state.copy_quiz_label,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "copy",
				payload: { value: state.copy_quiz_text }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "copy",
			size: "xl",
			color: "secondary"
		})), state.share_button_variant === "top_right" && /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
			align: "center",
			justify: "center",
			ariaLabel: state.share_label,
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "share",
			size: "xl",
			color: "secondary"
		})));
	}
	function QuizLoading({ label }) {
		const isDesktop = DIL.useBreakpoint("sm");
		const isMobile = DIL.useIsMobile();
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				top: "10px",
				bottom: "10px"
			}
		}, /* @__PURE__ */ __dil.jsx(QuizHeader, {
			isDesktop,
			prompt: /* @__PURE__ */ __dil.jsx("col", {
				flex: isMobile ? "999 1 380px" : "999 1 340px",
				minWidth: 0,
				gap: 0,
				padding: { bottom: 4 },
				role: "status",
				ariaLabel: label
			}, /* @__PURE__ */ __dil.jsx("box", {
				height: 26,
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: "90%",
				height: 18,
				radius: "full",
				background: "alpha-10"
			})), !isDesktop && /* @__PURE__ */ __dil.jsx("box", {
				height: 26,
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: "90%",
				height: 18,
				radius: "full",
				background: "alpha-10"
			}))),
			navigation: /* @__PURE__ */ __dil.jsx("row", {
				flex: "0 0 auto",
				align: "center",
				gap: "5px"
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: 36,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-left",
				size: "xl",
				color: "tertiary"
			})), /* @__PURE__ */ __dil.jsx("box", {
				width: 48,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("loading-indicator", {
				size: "sm",
				color: "secondary"
			})), /* @__PURE__ */ __dil.jsx("box", {
				size: 36,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-right",
				size: "xl",
				color: "tertiary"
			}))),
			utilities: /* @__PURE__ */ __dil.jsx("box", {
				size: 36,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "lightbulb",
				size: "xl",
				color: "tertiary"
			}))
		}), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, [
			"A",
			"B",
			"C",
			"D"
		].map((value) => /* @__PURE__ */ __dil.jsx("box", {
			key: value,
			padding: {
				x: 4,
				y: "7px"
			},
			minHeight: 46
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 32,
			radius: "full",
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: "strong"
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: "primary"
		}, value)), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minHeight: 32,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "72%",
			height: 18,
			radius: "full",
			background: "alpha-10"
		})))))), /* @__PURE__ */ __dil.jsx("box", { height: isDesktop ? 4 : 0 }), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			height: isDesktop ? 60 : 48,
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("box", {
			width: 72,
			height: 36,
			radius: "full",
			border: {
				size: 1,
				color: "subtle"
			},
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 28,
			height: 14,
			radius: "full",
			background: "alpha-10"
		}))));
	}
	function QuizOptionRow({ option, question, state, disabled, onSelect }) {
		const hasFeedback = state.feedback_status !== "";
		const selected = state.selected_values.includes(option.value);
		const correct = question.correct_values.includes(option.value);
		const unsure = option.value === question.unsure_option_value;
		const selectedUnsure = hasFeedback && selected && unsure;
		const showExplanation = hasFeedback && (correct || selected && !unsure);
		const answerLabel = state.option_accessibility_labels?.[question.id]?.[option.value];
		const correctnessLabel = correct ? state.correct_answer_label : state.incorrect_answer_label;
		const selectionLabel = selected ? state.selected_answer_label : state.not_selected_answer_label;
		const accessibilityLabel = !hasFeedback ? answerLabel : answerLabel && selectionLabel && (unsure || correctnessLabel) ? [
			answerLabel,
			...unsure ? [] : [correctnessLabel],
			selectionLabel,
			...showExplanation ? [option.feedback] : []
		].join(". ") : void 0;
		const marked = hasFeedback ? correct || selected : selected;
		const wrong = state.feedback_status === "incorrect" && selected && !correct && !unsure;
		const missedCorrect = hasFeedback && question.question_type === "multi_select" && correct && !selected;
		const background = selectedUnsure ? "surface-secondary" : hasFeedback && correct && !missedCorrect ? "green-500" : wrong ? "red-400" : !hasFeedback && selected ? "#0d0d0d" : "transparent";
		return /* @__PURE__ */ __dil.jsx(QuizChoiceRow, {
			label: accessibilityLabel,
			pressed: question.question_type === "multi_select" ? selected : void 0,
			interactive: !hasFeedback,
			disabled,
			dimWhenDisabled: !(hasFeedback && (correct || selected)),
			onSelect,
			indicator: /* @__PURE__ */ __dil.jsx("box", {
				size: 32,
				align: "center",
				justify: "center",
				ariaHidden: true
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: marked ? 30 : 32,
				radius: "full",
				align: "center",
				justify: "center",
				background,
				border: missedCorrect ? {
					size: 2,
					color: "green-500"
				} : marked ? false : {
					size: 1,
					color: hasFeedback ? "default" : "strong"
				}
			}, question.question_type === "single_select" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				color: selectedUnsure ? "primary" : marked ? "white" : hasFeedback ? "secondary" : "primary"
			}, option.value) : hasFeedback && correct || !hasFeedback && selected ? /* @__PURE__ */ __dil.jsx("icon", {
				name: "check",
				size: "xl",
				color: missedCorrect ? "green-500" : "white"
			}) : wrong ? /* @__PURE__ */ __dil.jsx("icon", {
				name: "x",
				size: "xl",
				color: "white"
			}) : null)),
			content: /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, option.label),
			feedback: showExplanation && /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, option.feedback)
		});
	}
	function formatReviewMessage(parts, options) {
		return parts.map((part) => typeof part === "string" ? part : options[part].label).join("");
	}
	function missedAnswerFeedback(question, answer, messages) {
		const selectedOptions = question.options.filter((option) => answer.selected_values.includes(option.value));
		const selectedCorrectOptions = selectedOptions.filter((option) => question.correct_values.includes(option.value));
		return [
			formatReviewMessage(messages.selected_answer[selectedOptions.length], selectedOptions),
			question.question_type === "multi_select" && selectedCorrectOptions.length > 0 ? formatReviewMessage(messages.selected_correct[selectedCorrectOptions.length], selectedCorrectOptions) : "",
			...selectedOptions.filter((option) => option.value !== question.unsure_option_value && !question.correct_values.includes(option.value)).map((option) => option.feedback)
		].filter(Boolean).join(" ");
	}
	function trueFalseVerdict(question, option, state) {
		if (question.question_type !== "true_false") return "";
		return \`\${option.value === "true" ? state.true_statement_label || \`\${option.label}.\` : state.false_statement_label || \`\${option.label}.\`} \`;
	}
	function requestNextQuiz(query) {
		return GenUI.dispatchAction({
			handler: "client",
			type: "issue_new_turn",
			loadingBehavior: "none",
			payload: {
				query,
				append_to_current_leaf: true,
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: "next_quiz",
					surface_location: "RESPONSE",
					content_reference_type: "learning_quiz"
				}
			}
		});
	}
	function QuizCompletionButton({ state, isLearningSection }) {
		const nextQuizQuery = state.next_quiz_query;
		if (isLearningSection || !state.generation_complete || !nextQuizQuery?.trim()) return null;
		return /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			onClick: () => requestNextQuiz(nextQuizQuery)
		}, state.next_quiz_label);
	}
	function QuizResults({ componentKey, state, disabled, onRestart, isLearningSection }) {
		const scrollResults = DIL.useBreakpoint("sm") && state.answers.length > 5;
		return /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			height: 60,
			gap: "5px",
			padding: { x: 5 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.title), /* @__PURE__ */ __dil.jsx(QuizUtilities, {
			state,
			componentKey
		})), /* @__PURE__ */ __dil.jsx("box", {
			height: scrollResults ? 280 : void 0,
			scrollable: scrollResults,
			clip: !scrollResults
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			top: 1,
			bottom: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, state.correct_count_labels[state.correct_count] ?? \`\${state.correct_count}/\${state.questions.length}\`)), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, state.answers.map((answer) => {
			const question = state.questions[answer.index];
			if (!question) return null;
			const correctOptions = question.options.filter((option) => question.correct_values.includes(option.value));
			const selectedUnsure = question.unsure_option_value != null && answer.selected_values.includes(question.unsure_option_value);
			const messages = state.review_messages;
			const reviewMessages = !answer.is_correct && messages?.selected_answer && messages.selected_correct && messages.correct_answer ? messages : null;
			return /* @__PURE__ */ __dil.jsx("box", {
				key: answer.question_id,
				padding: {
					x: 4,
					y: "7px"
				},
				minHeight: 46
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				gap: 4
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: 32,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: 30,
				radius: "full",
				align: "center",
				justify: "center",
				ariaHidden: selectedUnsure || void 0,
				background: selectedUnsure ? "surface-secondary" : answer.is_correct ? "green-500" : "red-400"
			}, selectedUnsure ? /* @__PURE__ */ __dil.jsx("text", { color: "primary" }, "–") : /* @__PURE__ */ __dil.jsx("icon", {
				name: answer.is_correct ? "check" : "x",
				size: "xl",
				color: "white"
			}))), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 1
			}, /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, question.prompt), reviewMessages ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, question.question_type === "multi_select" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, \`\${formatReviewMessage(reviewMessages.correct_answer[correctOptions.length], correctOptions)} \${correctOptions.map((option) => option.feedback || option.label).join(" ")}\`) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, correctOptions.map((option) => /* @__PURE__ */ __dil.jsx("box", { key: option.value }, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, \`\${trueFalseVerdict(question, option, state)}\${option.feedback || option.label}\`)))), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, missedAnswerFeedback(question, answer, reviewMessages))) : question.question_type === "multi_select" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, correctOptions.map((option) => option.label).join(", ")) : /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, correctOptions.map((option) => /* @__PURE__ */ __dil.jsx("box", { key: option.value }, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, option.feedback)))))));
		})))), /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			gap: 3,
			padding: {
				x: 5,
				y: 4
			}
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			color: "secondary",
			variant: "outline",
			disabled,
			onClick: onRestart
		}, state.restart_label), /* @__PURE__ */ __dil.jsx(QuizCompletionButton, {
			state,
			isLearningSection
		})));
	}
	function ResolvedLearningQuiz({ componentKey, state: incomingServerState, actionsReady, allowLocalAnswers, canRetryGeneration = false, sectionCompletionEnabled = false, isLearningSection = false, sectionNavigationEnabled = sectionCompletionEnabled, autoAdvanceCorrect = true, supportedClientActions, visible = true }) {
		const isLiveActivity = useIsLiveActivity();
		const latestServerState = DIL.useRef(incomingServerState);
		let serverState = latestServerState.current;
		if (isServerSnapshotAtLeastAsNew(incomingServerState, serverState)) {
			const answers = incomingServerState.attempt === latestServerState.current.attempt ? mergeQuizAnswers(latestServerState.current.answers, incomingServerState.answers) : incomingServerState.answers;
			serverState = answers.length > incomingServerState.answers.length ? {
				...incomingServerState,
				answers,
				correct_count: answers.filter((answer$1) => answer$1.is_correct).length
			} : incomingServerState;
		}
		const [localProgress, setProgress] = DIL.useState(null);
		const interaction = DIL.useRef({
			preview: null,
			hiddenRetry: null
		});
		const answerPreview = interaction.current.preview;
		const completionRevision = serverState.completion?.revision ?? JSON.stringify(serverState.questions.map((question$1) => [question$1.id, question$1.correct_values]));
		const currentCompletionRevision = DIL.useRef(completionRevision);
		currentCompletionRevision.current = completionRevision;
		const pendingCompletion = DIL.useRef(false);
		const savedProgress = {
			attempt: serverState.attempt,
			revision: serverState.revision ?? 0,
			navigation_sequence: serverState.navigation?.sequence ?? 0,
			current_index: serverState.navigation?.current_index ?? (serverState.phase === "results" ? serverState.questions.length : serverState.current_index),
			answers: serverState.answers,
			correct_count: serverState.correct_count,
			selected_values: serverState.navigation ? [] : serverState.selected_values,
			hint_open: serverState.navigation ? false : serverState.hint_open
		};
		let progress = localProgress && localProgress.attempt >= serverState.attempt ? localProgress : savedProgress;
		if (localProgress && localProgress.attempt === serverState.attempt) {
			const answers = mergeQuizAnswers(localProgress.answers, serverState.answers);
			progress = {
				...localProgress,
				revision: localProgress.revision === void 0 ? void 0 : Math.max(localProgress.revision, serverState.revision ?? 0),
				answers,
				correct_count: answers.filter((answer$1) => answer$1.is_correct).length
			};
			if ((savedProgress.navigation_sequence ?? 0) > (localProgress.navigation_sequence ?? 0)) progress = {
				...progress,
				navigation_sequence: savedProgress.navigation_sequence,
				current_index: savedProgress.current_index,
				selected_values: [],
				hint_open: false
			};
		}
		const durableProgress = progress;
		const preview = answerPreview?.componentKey === componentKey && answerPreview.attempt === progress.attempt && answerPreview.contentRevision === completionRevision ? answerPreview : null;
		if (preview) {
			const answers = mergeQuizAnswers(preview.answers, progress.answers);
			progress = {
				...progress,
				...localProgress?.attempt !== progress.attempt && !serverState.navigation ? preview.displayedQuestion : {},
				answers,
				correct_count: answers.filter((answer$1) => answer$1.is_correct).length,
				revision: Math.max(progress.revision ?? 0, preview.revision)
			};
		}
		const confirmedAnswers = serverState.questions.map((question$1, index$1) => serverState.answers.find((answer$1) => answer$1.index === index$1 && answer$1.question_id === question$1.id));
		const finishedGrade = progress.attempt === serverState.attempt && serverState.generation_complete && confirmedAnswers.length > 0 && confirmedAnswers.every((answer$1) => answer$1 != null) ? confirmedAnswers.every((answer$1) => answer$1.is_correct) ? LearningWidgetStatus.Correct : LearningWidgetStatus.Incorrect : progress.completion?.revision === completionRevision && progress.completion.isComplete ? progress.learningStatus : void 0;
		if (sectionNavigationEnabled && !interaction.current.pendingSectionSave && (finishedGrade === LearningWidgetStatus.Incorrect || !autoAdvanceCorrect && finishedGrade === LearningWidgetStatus.Correct)) progress = {
			...progress,
			learningStatus: finishedGrade,
			completion: {
				version: 1,
				revision: completionRevision,
				isComplete: false,
				awaitingAdvance: true,
				composerFeedback: { type: "none" }
			}
		};
		const restorePendingAdvance = sectionNavigationEnabled && progress.completion?.revision === completionRevision && progress.completion.awaitingAdvance === true && (localProgress?.completion?.awaitingAdvance !== true || localProgress.completion.isComplete || localProgress.completion.revision !== completionRevision || localProgress.attempt !== progress.attempt);
		const currentProgress = DIL.useRef(progress);
		currentProgress.current = progress;
		DIL.useEffect(() => {
			if (restorePendingAdvance || serverState.attempt > (localProgress?.attempt ?? latestServerState.current.attempt) || progress.attempt === serverState.attempt && (progress.navigation_sequence ?? 0) > (localProgress?.navigation_sequence ?? 0)) persistUiProgress(progress);
		}, [
			restorePendingAdvance,
			serverState.attempt,
			localProgress?.attempt,
			progress.navigation_sequence,
			localProgress?.navigation_sequence
		]);
		DIL.useEffect(() => {
			if (!pendingCompletion.current || !localProgress?.completion?.isComplete) return;
			pendingCompletion.current = false;
			if (!sectionCompletionEnabled || !autoAdvanceCorrect || localProgress.attempt !== progress.attempt || localProgress.completion.revision !== completionRevision) return;
			GenUI.dispatchWidgetClientAction?.({
				type: MARK_LEARNING_WIDGET_COMPLETED,
				payload: getLearningCompletionPayload(localProgress.completion.composerFeedback, supportedClientActions)
			});
		}, [
			localProgress,
			progress.attempt,
			sectionCompletionEnabled,
			autoAdvanceCorrect,
			supportedClientActions,
			completionRevision
		]);
		const isDesktop = DIL.useBreakpoint("sm");
		const questionBannerHeight = isDesktop ? 201 : 152;
		const isMobile = DIL.useIsMobile();
		const [dismissed, setDismissed] = DIL.useState(false);
		const [recovery, setRecovery] = DIL.useState(null);
		const savedFailure = recovery && "action" in recovery ? recovery.action : recovery;
		const retryKey = savedFailure && JSON.stringify([
			componentKey,
			savedFailure.type,
			savedFailure.payload.attempt,
			savedFailure.payload.question_index,
			savedFailure.payload.selected_values,
			savedFailure.payload.revision
		]);
		const failedAction = savedFailure && retryKey !== interaction.current.hiddenRetry && actionProgressAttempt(savedFailure) >= progress.attempt && !actionIsConfirmed(savedFailure, serverState) ? savedFailure : null;
		function setFailedAction(action) {
			interaction.current = {
				...interaction.current,
				hiddenRetry: null
			};
			setRecovery(action);
		}
		const requestSequence = DIL.useRef(0);
		const mounted = DIL.useRef(true);
		const latestAttempt = DIL.useRef(progress.attempt);
		DIL.useEffect(() => {
			mounted.current = true;
			return () => {
				mounted.current = false;
			};
		}, []);
		DIL.useEffect(() => {
			latestServerState.current = serverState;
			latestAttempt.current = progress.attempt;
		}, [
			serverState,
			progress.attempt,
			componentKey
		]);
		function actionIsConfirmed(action, confirmed = latestServerState.current) {
			if (confirmed.attempt > action.payload.attempt) return true;
			if (confirmed.attempt !== action.payload.attempt || action.type === "learning_quiz_restart") return false;
			return confirmed.answers.some((answer$1) => answer$1.index === action.payload.question_index);
		}
		const nextRevision = Math.max(progress.revision ?? 0, serverState.revision ?? 0) + 1;
		function incompleteStatus(answers) {
			return answers.some((answer$1) => !answer$1.is_correct) ? LearningWidgetStatus.Incorrect : LearningWidgetStatus.Unanswered;
		}
		function persistUiProgress(next) {
			if (!preview || next.attempt !== preview.attempt) {
				setProgress(next);
				return;
			}
			const answers = mergeQuizAnswers(preview.answers.filter((answer$1) => answer$1.index < next.current_index), durableProgress.answers);
			setProgress({
				...next,
				answers,
				correct_count: answers.filter((answer$1) => answer$1.is_correct).length,
				...sectionCompletionEnabled && !next.completion?.isComplete && !next.completion?.awaitingAdvance ? { learningStatus: incompleteStatus(answers) } : {}
			});
		}
		function prepareProgress(next) {
			const awaitingAdvance = next.completion?.revision === completionRevision && next.completion.awaitingAdvance === true;
			const isComplete = next.completion?.revision === completionRevision && next.completion.isComplete;
			const updated = {
				...next,
				revision: nextRevision,
				...sectionCompletionEnabled ? {
					learningStatus: isComplete || awaitingAdvance ? next.learningStatus : incompleteStatus(next.answers),
					completion: {
						version: 1,
						revision: completionRevision,
						isComplete,
						awaitingAdvance,
						composerFeedback: getLearningComposerFeedback(isComplete ? next.learningStatus ?? LearningWidgetStatus.Unanswered : LearningWidgetStatus.Unanswered)
					}
				} : {}
			};
			currentProgress.current = updated;
			return updated;
		}
		function updateProgress(next) {
			persistUiProgress(prepareProgress(next));
		}
		const canInteract = sectionCompletionEnabled ? actionsReady && serverState.generation_complete : actionsReady || allowLocalAnswers || !serverState.generation_complete;
		const canRestart = canInteract && !failedAction?.deferred;
		const isSingleQuestion = serverState.generation_complete && serverState.questions.length === 1;
		const index = isSingleQuestion ? 0 : sectionNavigationEnabled && serverState.generation_complete ? Math.min(progress.current_index, Math.max(0, serverState.questions.length - 1)) : progress.current_index;
		const currentQuestion = serverState.questions[index];
		const answer = progress.answers.find((value) => value.index === index && value.question_id === currentQuestion?.id);
		const selectedValues = answer?.selected_values ?? progress.selected_values;
		const state = {
			...serverState,
			...progress,
			current_index: index,
			phase: serverState.phase === "error" || serverState.phase === "loading" ? serverState.phase : currentQuestion ? "quiz" : serverState.generation_complete ? "results" : "loading",
			selected_values: selectedValues,
			feedback_status: answer ? answer.is_correct ? "correct" : "incorrect" : ""
		};
		async function submitAction(type, values = []) {
			if (!canInteract) return;
			if (type === "restart" && !canRestart) return;
			if (type === "answer" && (!currentQuestion || answer || values.length === 0)) return;
			if (type === "restart") pendingCompletion.current = false;
			const previewAnswer = type === "answer" && !allowLocalAnswers && actionsReady && serverState.generation_complete && !failedAction?.deferred;
			const priorAnswers = progress.answers;
			const attempt = progress.attempt;
			if (type === "restart") updateProgress({
				attempt: attempt + 1,
				current_index: 0,
				answers: [],
				correct_count: 0,
				selected_values: [],
				hint_open: false
			});
			else if (currentQuestion) {
				const isCorrect = values.length === currentQuestion.correct_values.length && values.every((value) => currentQuestion.correct_values.includes(value));
				const answers = [...priorAnswers, {
					index,
					question_id: currentQuestion.id,
					selected_values: values,
					is_correct: isCorrect
				}];
				const submitted = prepareProgress({
					...progress,
					answers,
					correct_count: progress.correct_count + (isCorrect ? 1 : 0),
					selected_values: values
				});
				if (previewAnswer) {
					interaction.current = {
						...interaction.current,
						preview: {
							componentKey,
							attempt,
							contentRevision: completionRevision,
							displayedQuestion: {
								current_index: progress.current_index,
								selected_values: progress.selected_values,
								hint_open: progress.hint_open
							},
							revision: nextRevision,
							answers
						}
					};
					redrawInteraction();
				} else setProgress(submitted);
			}
			const action = {
				type: type === "answer" ? "learning_quiz_answer" : "learning_quiz_restart",
				payload: {
					attempt,
					revision: nextRevision,
					prior_answers: priorAnswers,
					...type === "answer" ? {
						question_index: index,
						selected_values: values
					} : {}
				}
			};
			if (failedAction?.deferred && !allowLocalAnswers) setFailedAction({
				...action,
				deferred: true
			});
			else await deliverAction(action, previewAnswer);
		}
		async function deliverAction(action, previewAnswer = false) {
			if (!actionsReady || !serverState.generation_complete) {
				if (!allowLocalAnswers) setFailedAction({
					...action,
					deferred: true
				});
				return;
			}
			const requestId = ++requestSequence.current;
			const answers = currentProgress.current.answers;
			const savingManualAdvance = sectionCompletionEnabled && action.type === "learning_quiz_answer" && answers.some((submitted) => (!autoAdvanceCorrect || !submitted.is_correct) && serverState.questions[submitted.index]?.id === submitted.question_id) && serverState.questions.every((question$1, questionIndex) => answers.some((submitted) => submitted.index === questionIndex && submitted.question_id === question$1.id));
			if (savingManualAdvance || failedAction && !failedAction.deferred) {
				interaction.current = {
					...interaction.current,
					hiddenRetry: retryKey,
					pendingSectionSave: savingManualAdvance ? {
						requestId,
						attempt: action.payload.attempt,
						completionRevision
					} : void 0
				};
				redrawInteraction();
			}
			let failed = false;
			let statusMessage;
			try {
				const result = await GenUI.dispatchAction({
					handler: "server",
					type: action.type,
					payload: action.payload
				});
				const saved = result;
				const completion = saved?.response?.data?.learning_completion;
				if (sectionCompletionEnabled && mounted.current && action.type === "learning_quiz_answer" && latestAttempt.current === action.payload.attempt && currentCompletionRevision.current === completionRevision && saved?.status === "success" && saved.response?.status === "success" && completion?.is_complete === true && !currentProgress.current.completion?.isComplete) {
					const autoAdvance = autoAdvanceCorrect && completion.all_correct;
					pendingCompletion.current = autoAdvance;
					const completed = {
						...currentProgress.current,
						learningStatus: completion.all_correct ? LearningWidgetStatus.Correct : LearningWidgetStatus.Incorrect,
						completion: {
							version: 1,
							revision: completionRevision,
							isComplete: autoAdvance,
							awaitingAdvance: !autoAdvance,
							composerFeedback: getLearningComposerFeedback(autoAdvance ? LearningWidgetStatus.Correct : LearningWidgetStatus.Incorrect)
						}
					};
					currentProgress.current = completed;
					setProgress(completed);
				}
				if (result && typeof result === "object" && "status" in result && result.status === "error") {
					failed = true;
					if ("statusMessage" in result && typeof result.statusMessage === "string") statusMessage = result.statusMessage;
				}
			} catch {
				failed = true;
			} finally {
				if (savingManualAdvance && mounted.current && requestSequence.current === requestId) {
					interaction.current = {
						...interaction.current,
						pendingSectionSave: void 0
					};
					redrawInteraction();
				}
			}
			if (requestSequence.current !== requestId || latestAttempt.current > actionProgressAttempt(action) || actionIsConfirmed(action)) return;
			if (failed) {
				const failure = {
					...action,
					...statusMessage === void 0 ? {} : { statusMessage }
				};
				if (previewAnswer && mounted.current && currentProgress.current.attempt === action.payload.attempt && currentCompletionRevision.current === completionRevision) setProgress(currentProgress.current);
				setFailedAction(failure);
			}
		}
		function selectOption(value) {
			if (!canInteract || !currentQuestion || answer) return;
			const values = currentQuestion.question_type === "multi_select" ? selectedValues.includes(value) ? selectedValues.filter((selected) => selected !== value) : [...selectedValues, value] : [value];
			if (currentQuestion.question_type === "multi_select") updateProgress({
				...progress,
				selected_values: values
			});
			else return submitAction("answer", values);
		}
		function navigate(nextIndex) {
			updateProgress({
				...progress,
				current_index: nextIndex,
				selected_values: [],
				hint_open: false
			});
		}
		const [mediaRetries, setMediaRetries] = DIL.useState({});
		const waitingToFlush = actionsReady && serverState.generation_complete && !!failedAction?.deferred;
		const now = DIL.useNow?.(waitingToFlush) ?? 0;
		const flushStartedAt = DIL.useRef(null);
		DIL.useEffect(() => {
			if (!waitingToFlush || !failedAction?.deferred) {
				flushStartedAt.current = null;
				return;
			}
			if (flushStartedAt.current === null) flushStartedAt.current = now;
			if (typeof DIL.useNow === "function" && now - flushStartedAt.current < 5e3) return;
			flushStartedAt.current = null;
			setFailedAction(null);
			if (!allowLocalAnswers && actionProgressAttempt(failedAction) >= progress.attempt && !actionIsConfirmed(failedAction)) deliverAction({
				type: failedAction.type,
				payload: failedAction.payload
			});
		}, [
			waitingToFlush,
			failedAction,
			progress.attempt,
			allowLocalAnswers,
			now
		]);
		const [presentedAttempt, setPresentedAttempt] = DIL.useState(null);
		const [, renderInteraction] = DIL.useState({ read: () => interaction.current });
		function redrawInteraction() {
			renderInteraction({ read: () => interaction.current });
		}
		const shouldLogPresentation = visible && !isLiveActivity && state.phase === "quiz" && state.answers.length === 0 && presentedAttempt !== state.attempt;
		function logPresentation() {
			if (!shouldLogPresentation) return;
			setPresentedAttempt(state.attempt);
			GenUI.logEvent?.({
				event_name: "chatgpt_learning_quiz_presented",
				statsig_event_name: "chatgpt_learning_quiz_presented",
				event_data: {
					question_count: state.questions.length,
					attempt_bucket: state.attempt === 0 ? "first" : state.attempt === 1 ? "second" : "third_plus"
				}
			});
		}
		const canRetry = canRetryGeneration && state.generation_complete && Boolean(state.retry_query?.trim());
		const celebration = DIL.useRef({
			completedAttempt: state.phase === "results" ? state.attempt : null,
			triggerAttempt: null
		});
		const perfectScore = state.phase === "results" && state.questions.length > 0 && state.correct_count === state.questions.length;
		const celebrationAttempt = visible && !isLiveActivity && (perfectScore && celebration.current.completedAttempt !== state.attempt || celebration.current.triggerAttempt === state.attempt) ? state.attempt : null;
		DIL.useEffect(() => {
			if (state.phase === "results") celebration.current.completedAttempt = state.attempt;
			celebration.current.triggerAttempt = celebrationAttempt;
		}, [
			state.phase,
			state.attempt,
			celebrationAttempt
		]);
		const question = state.questions[state.current_index];
		const hintOpen = state.hint_open;
		const showHint = Boolean(question?.hint);
		const hasFeedback = state.feedback_status !== "";
		const showSectionAdvance = sectionNavigationEnabled && progress.completion?.revision === completionRevision && progress.completion.awaitingAdvance === true;
		const pendingSectionSave = interaction.current.pendingSectionSave;
		const savingSectionAdvance = !showSectionAdvance && sectionCompletionEnabled && state.generation_complete && state.phase === "quiz" && pendingSectionSave?.requestId === requestSequence.current && pendingSectionSave.attempt === progress.attempt && pendingSectionSave.completionRevision === completionRevision;
		const canAdvance = hasFeedback && (!isLearningSection || state.current_index + 1 < state.questions.length);
		const showAdvance = !isSingleQuestion && (!isLearningSection || !hasFeedback || canAdvance) || question?.question_type === "multi_select" && !hasFeedback;
		const loading = state.phase === "loading" || state.phase === "quiz" && !question && !state.generation_complete;
		if (!visible) return null;
		if (isLiveActivity) {
			if (state.dismissed || dismissed) return null;
			return /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				padding: 2,
				theme: "dark",
				background: "surface"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: .5,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				justify: "between",
				width: "100%",
				gap: 2
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				truncate: true
			}, state.title), state.phase === "quiz" && !isSingleQuestion && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				weight: "medium"
			}, state.current_index + 1, "/", state.questions.length)), state.phase === "error" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				truncate: true
			}, state.error_label) : loading ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary",
				truncate: true
			}, state.loading_label) : state.phase === "results" ? /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, state.correct_count, "/", state.questions.length) : question ? /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				maxHeight: 36,
				clip: true
			}, /* @__PURE__ */ __dil.jsx("text", { preserveWhitespace: true }, question.prompt)) : null));
		}
		if (state.phase === "error" && (state.dismissed || dismissed)) return null;
		if (state.phase === "quiz" && !question && !loading) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("celebration", { trigger: celebrationAttempt === null ? null : String(celebrationAttempt) }), /* @__PURE__ */ __dil.jsx(QuizFrame, {
			isDesktop,
			clip: false
		}, state.phase === "error" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: 5,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", { role: "status" }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "secondary"
		}, state.error_label)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			disabled: !canRetry,
			onClick: () => {
				if (!canRetry) return;
				return GenUI.dispatchAction({
					handler: "client",
					type: "issue_new_turn",
					loadingBehavior: "none",
					payload: {
						query: state.retry_query,
						append_to_current_leaf: true,
						event_name: "chatgpt_widget_action",
						event_data: {
							widget_affordance: "OPTION",
							widget_action_target: "quiz_generation",
							widget_action_value: "retry",
							surface_location: "RESPONSE",
							content_reference_type: "learning_quiz"
						}
					}
				});
			}
		}, state.retry_label), /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "ghost",
			onClick: () => setDismissed(true)
		}, state.dismiss_label))) : loading ? /* @__PURE__ */ __dil.jsx(QuizLoading, { label: state.loading_label }) : state.phase === "results" ? /* @__PURE__ */ __dil.jsx(QuizResults, {
			isLearningSection,
			componentKey,
			state,
			disabled: !canRestart,
			onRestart: () => submitAction("restart")
		}) : question ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: 0,
			clip: true,
			ariaHidden: true,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx(QuizMediaPreload, {
			image: state.questions[state.current_index + 1]?.image,
			height: questionBannerHeight
		})), (question.image || question.image_is_loading) && /* @__PURE__ */ __dil.jsx("box", {
			height: questionBannerHeight - 12,
			width: "100%",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx(QuizMedia, {
			image: question.image,
			loading: question.image_is_loading === true,
			height: questionBannerHeight,
			alt: "",
			identity: \`question:\${question.id}\`,
			retries: mediaRetries,
			onRetryChange: (key, download) => setMediaRetries((previous) => ({
				...previous,
				[key]: download
			})),
			radius: {
				topLeft: "24px",
				topRight: "24px",
				bottomLeft: "none",
				bottomRight: "none"
			}
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				top: "10px",
				bottom: "10px"
			}
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: state.attempt,
			onVisible: logPresentation,
			onVisibleWhen: shouldLogPresentation
		}, /* @__PURE__ */ __dil.jsx(QuizHeader, {
			isDesktop,
			prompt: /* @__PURE__ */ __dil.jsx("col", {
				flex: isMobile ? "999 1 380px" : "999 1 340px",
				minWidth: 0,
				gap: 0,
				padding: { bottom: hintOpen ? 2 : 4 }
			}, /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, question.prompt), hintOpen && question.hint && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 1.5 } }, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				color: "secondary"
			}, question.hint))),
			navigation: /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, !isSingleQuestion && /* @__PURE__ */ __dil.jsx("row", {
				flex: "0 0 auto",
				align: "center",
				gap: "5px"
			}, /* @__PURE__ */ __dil.jsx(QuizIconButton, {
				disabled: state.current_index === 0,
				onClick: () => navigate(state.current_index - 1),
				label: state.previous_question_label
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-left",
				size: "xl",
				color: state.current_index === 0 ? "alpha-35" : "secondary"
			})), state.generation_complete && /* @__PURE__ */ __dil.jsx("box", {
				width: "max-content",
				minWidth: 48,
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, state.question_progress_labels[state.current_index])), /* @__PURE__ */ __dil.jsx(QuizIconButton, {
				disabled: !canAdvance,
				onClick: () => navigate(state.current_index + 1),
				label: state.next_question_label
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-right",
				size: "xl",
				color: canAdvance && state.answers.length > state.current_index ? "secondary" : "alpha-35"
			})))),
			utilities: /* @__PURE__ */ __dil.jsx("row", {
				flex: "0 0 auto",
				align: "center",
				gap: "5px"
			}, showHint && /* @__PURE__ */ __dil.jsx(QuizIconButton, {
				label: state.hint_label,
				tooltip: isMobile ? void 0 : state.hint_label,
				onClick: () => updateProgress({
					...progress,
					hint_open: !hintOpen
				})
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: hintOpen ? "lightbulb-22-filled" : "lightbulb",
				size: "xl",
				color: hintOpen ? "primary" : "secondary"
			})), /* @__PURE__ */ __dil.jsx(QuizUtilities, {
				state,
				componentKey
			}))
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, question.options.map((option) => /* @__PURE__ */ __dil.jsx(QuizOptionRow, {
			key: option.value,
			option,
			question,
			state,
			disabled: !canInteract || hasFeedback,
			onSelect: () => selectOption(option.value)
		}))), /* @__PURE__ */ __dil.jsx("box", { height: isDesktop ? 4 : 0 }), showAdvance && /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			height: isDesktop ? 60 : 48,
			padding: {
				left: 5,
				right: 6
			}
		}, question.question_type === "multi_select" && !hasFeedback && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.select_all_that_apply_label), /* @__PURE__ */ __dil.jsx("spacer", null), /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			color: "secondary",
			variant: "outline",
			disabled: !hasFeedback && (!canInteract || question.question_type !== "multi_select" || state.selected_values.length === 0),
			onClick: () => hasFeedback ? navigate(state.current_index + 1) : submitAction("answer", state.selected_values)
		}, question.question_type === "multi_select" && !hasFeedback && state.selected_values.length > 0 ? state.submit_answer_label : state.advance_label)))) : null), (showSectionAdvance || savingSectionAdvance) && /* @__PURE__ */ __dil.jsx("row", { padding: { top: 4 } }, /* @__PURE__ */ __dil.jsx(LearningSectionAdvanceButton, {
			label: state.advance_label,
			loading: savingSectionAdvance
		})), failedAction && !failedAction.deferred && actionProgressAttempt(failedAction) === progress.attempt && /* @__PURE__ */ __dil.jsx("row", {
			role: "alert",
			gap: 3,
			align: "center",
			padding: { top: 3 }
		}, failedAction.statusMessage && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, failedAction.statusMessage), /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			variant: "outline",
			disabled: !canInteract,
			onClick: () => deliverAction(failedAction, preview != null)
		}, state.retry_label)), state.generation_complete && state.share_button_variant === "bottom" && !state.dismissed && (state.phase === "quiz" || state.phase === "results") && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 3 } }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "soft",
			block: true,
			onClick: () => GenUI.dispatchAction({
				type: "share",
				handler: "client",
				payload: { component_key: componentKey }
			})
		}, /* @__PURE__ */ __dil.jsx("icon", { name: "share" }), state.share_label)));
	}

//#endregion
//#region LearningQuiz.dil.tsx
	function LearningQuiz(props) {
		const componentKey = DIL.useAppData((appData$1) => typeof props.__resolutionId === "string" && appData$1.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("LearningQuiz", props));
		const canShare = DIL.useAppData((appData$1) => appData$1.opGenui?.supportedClientActions?.includes("share") === true);
		const canRetryGeneration = DIL.useAppData((appData$1) => appData$1.opGenui?.supportedClientActions?.includes("issue_new_turn") === true);
		const { state, resolutionComplete } = useResolvedComponentResult("LearningQuiz", props.__resolutionId ? {
			...props,
			__state: void 0
		} : props);
		const appData = DIL.useAppData();
		const isShared = appData.opGenui?.isShared === true;
		const isLearningSection = appData.learningSectionCompletionEnabled === true;
		const sectionCompletionEnabled = isLearningSection && appData.learningSectionCompletionReadOnly !== true && !isShared;
		const isDesktop = DIL.useBreakpoint("sm");
		if (!state) {
			if (resolutionComplete) return props.fallback ?? null;
			return /* @__PURE__ */ __dil.jsx(QuizFrame, { isDesktop }, /* @__PURE__ */ __dil.jsx(QuizLoading, null));
		}
		const supportedQuestions = state.questions.every((question) => [
			"single_select",
			"multi_select",
			"true_false"
		].includes(question.question_type));
		return /* @__PURE__ */ __dil.jsx(ResolvedLearningQuiz, {
			componentKey,
			supportedClientActions: appData.opGenui?.supportedClientActions,
			isLearningSection,
			sectionCompletionEnabled: sectionCompletionEnabled && supportedQuestions,
			sectionNavigationEnabled: isLearningSection && supportedQuestions,
			autoAdvanceCorrect: appData.learningSectionAutoAdvanceCorrect !== false,
			canRetryGeneration: canRetryGeneration && !isShared,
			state: {
				...state,
				phase: supportedQuestions ? state.phase : "error",
				share_button_variant: canShare ? state.share_button_variant : "none",
				next_quiz_query: isShared ? void 0 : state.next_quiz_query,
				retry_query: isShared ? void 0 : state.retry_query
			},
			allowLocalAnswers: isShared && supportedQuestions,
			actionsReady: supportedQuestions && appData.opGenui?.nativeServerActions?.ready === true
		});
	}

//#endregion
return LearningQuiz;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-quiz-afcf7febb1cd.js.map