import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning-status.dil.ts
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
//#region learning/primitives/LearningSectionAdvanceButton.dil.tsx
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
//#region learning/primitives/LearningExercisePager.dil.tsx
	function LearningExercisePager({ exercises, previousLabel, nextLabel, nextButtonLabel, progressLabels, retryLabel = "Try again", completion: completionDescriptor, renderExercise, isExerciseComplete = (_, selectedIds$1) => selectedIds$1.length > 0, isExercisePassed, isExerciseSkipped = () => false, showsIncorrectActions = true, advanceOnIncorrect = false }) {
		const appData = DIL.useAppData();
		const completionEnabled = appData.learningSectionCompletionEnabled === true && isExercisePassed != null;
		const manualNextOnCorrect = advanceOnIncorrect && appData.learningSectionAutoAdvanceCorrect === false;
		const instanceId = DIL.useId();
		const revision = completionDescriptor?.revision ?? JSON.stringify(exercises.map((item) => [item.id, item.revision]));
		const initiallyComplete = exercises.length > 0 && exercises.every((item) => isExercisePassed?.(item.data, []) === true);
		const [viewState, setViewState] = DIL.useState({
			currentId: null,
			answers: {},
			...completionEnabled ? {
				learningStatus: initiallyComplete ? LearningWidgetStatus.Correct : LearningWidgetStatus.Unanswered,
				completion: {
					version: 1,
					revision,
					isComplete: initiallyComplete
				}
			} : {}
		});
		const currentViewState = DIL.useRef(viewState);
		const pendingSectionCompletion = DIL.useRef(false);
		currentViewState.current = viewState;
		const updateViewState = (next) => {
			currentViewState.current = next;
			setViewState(next);
		};
		const index = Math.max(0, exercises.findIndex((exercise$1) => exercise$1.id === viewState.currentId));
		const exercise = exercises[index];
		const withCompletion = (next, fromAnswer = true) => {
			if (!completionEnabled || !isExercisePassed) return next;
			const outcomes = exercises.map((item) => {
				const answer$1 = next.answers[item.id];
				const ids = answer$1?.revision === item.revision ? answer$1.selectedIds : [];
				if (isExercisePassed(item.data, ids)) return isExerciseSkipped(item.data, ids) ? LearningWidgetStatus.Skipped : LearningWidgetStatus.Correct;
				return isExerciseComplete(item.data, ids) ? LearningWidgetStatus.Incorrect : LearningWidgetStatus.Unanswered;
			});
			const allPassed = outcomes.length > 0 && outcomes.every((outcome) => outcome === LearningWidgetStatus.Correct || outcome === LearningWidgetStatus.Skipped);
			const learningStatus = outcomes.includes(LearningWidgetStatus.Incorrect) ? LearningWidgetStatus.Incorrect : !allPassed ? LearningWidgetStatus.Unanswered : outcomes.includes(LearningWidgetStatus.Skipped) ? LearningWidgetStatus.Skipped : LearningWidgetStatus.Correct;
			const isComplete = allPassed && !manualNextOnCorrect;
			const emit = fromAnswer && isComplete && (!next.completion?.isComplete || next.completion.revision !== revision);
			const updated = {
				...next,
				learningStatus,
				completion: {
					version: 1,
					revision,
					isComplete,
					composerFeedback: getLearningComposerFeedback(isComplete ? learningStatus : LearningWidgetStatus.Unanswered)
				}
			};
			if (emit) pendingSectionCompletion.current = true;
			else if (!isComplete) pendingSectionCompletion.current = false;
			return updated;
		};
		DIL.useEffect(() => {
			if (!completionEnabled || !advanceOnIncorrect) return;
			const restored = withCompletion(viewState, false);
			if (restored.completion?.isComplete === false && restored.learningStatus !== LearningWidgetStatus.Unanswered && (viewState.learningStatus !== restored.learningStatus || viewState.completion?.revision !== revision || viewState.completion.isComplete)) updateViewState(restored);
		});
		DIL.useEffect(() => {
			if (!pendingSectionCompletion.current || !viewState.completion?.isComplete) return;
			pendingSectionCompletion.current = false;
			if (!completionEnabled || manualNextOnCorrect || appData.learningSectionCompletionReadOnly === true || appData.opGenui?.isShared === true || viewState.completion.revision !== revision) return;
			GenUI.dispatchWidgetClientAction?.({
				type: MARK_LEARNING_WIDGET_COMPLETED,
				payload: getLearningCompletionPayload(viewState.completion.composerFeedback, appData.opGenui?.supportedClientActions)
			});
		});
		if (!exercise) return null;
		const answer = viewState.answers[exercise.id];
		const selectedIds = answer?.revision === exercise.revision ? answer.selectedIds : [];
		const canAdvance = index < exercises.length - 1 && (completionEnabled && !advanceOnIncorrect ? isExercisePassed?.(exercise.data, selectedIds) === true : isExerciseComplete(exercise.data, selectedIds));
		const showSectionAdvance = completionEnabled && advanceOnIncorrect && viewState.completion?.isComplete === false && exercises.every((item) => {
			const exerciseAnswer = viewState.answers[item.id];
			return exerciseAnswer?.revision === item.revision && isExerciseComplete(item.data, exerciseAnswer.selectedIds);
		});
		const showRetry = completionEnabled && !advanceOnIncorrect && showsIncorrectActions && isExerciseComplete(exercise.data, selectedIds) && !isExercisePassed?.(exercise.data, selectedIds);
		const navigate = (nextIndex) => {
			if (nextIndex > index && !canAdvance) return;
			const next = exercises[nextIndex];
			if (next) updateViewState({
				...currentViewState.current,
				currentId: next.id
			});
		};
		const navigation = exercises.length > 1 ? /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 0,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			size: 24,
			radius: "full",
			background: "transparent",
			ariaLabel: previousLabel,
			disabled: index === 0,
			onClick: () => navigate(index - 1)
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: "100%",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-left",
			size: "2xl",
			color: index === 0 ? {
				light: "alpha-70",
				dark: "alpha-35"
			} : "secondary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			minWidth: 40,
			height: "24px",
			flex: "0 0 auto",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, progressLabels[index])), /* @__PURE__ */ __dil.jsx("pressable", {
			size: 24,
			radius: "full",
			background: "transparent",
			ariaLabel: nextLabel,
			disabled: !canAdvance,
			onClick: () => navigate(index + 1)
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: "100%",
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right",
			size: "2xl",
			color: canAdvance ? "secondary" : {
				light: "alpha-70",
				dark: "alpha-35"
			}
		})))) : null;
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			key: \`\${instanceId}:\${exercise.id}:\${exercise.revision}\`,
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, renderExercise(exercise.data, {
			selectedIds,
			setSelectedIds: (update) => {
				const current = currentViewState.current;
				const previous = current.answers[exercise.id];
				const nextIds = update(previous?.revision === exercise.revision ? previous.selectedIds : []);
				const answers = {
					...current.answers,
					[exercise.id]: {
						revision: exercise.revision,
						selectedIds: nextIds
					}
				};
				updateViewState(withCompletion({
					...current,
					answers
				}));
			}
		}, navigation, !showSectionAdvance && showRetry ? /* @__PURE__ */ __dil.jsx("row", { justify: "end" }, /* @__PURE__ */ __dil.jsx("button", {
			size: "md",
			variant: "solid",
			onClick: () => {
				const current = currentViewState.current;
				updateViewState(withCompletion({
					...current,
					answers: {
						...current.answers,
						[exercise.id]: {
							revision: exercise.revision,
							selectedIds: []
						}
					}
				}));
			}
		}, retryLabel)) : !showSectionAdvance && exercises.length > 1 ? /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			minHeight: "36px"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			height: "36px",
			ariaLabel: nextButtonLabel ?? nextLabel,
			padding: { x: 3.5 },
			radius: "full",
			background: "transparent",
			border: {
				size: 1,
				color: {
					light: "alpha-10",
					dark: "alpha-15"
				}
			},
			align: "center",
			justify: "center",
			disabled: !canAdvance,
			onClick: () => navigate(index + 1)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "primary"
		}, nextButtonLabel ?? nextLabel))) : null)), showSectionAdvance && /* @__PURE__ */ __dil.jsx("row", null, /* @__PURE__ */ __dil.jsx(LearningSectionAdvanceButton, { label: nextButtonLabel ?? nextLabel })));
	}

//#endregion
//#region learning/primitives/LearningCard.dil.tsx
	function LearningCard({ icon, title, directions, prompt, children, navigation, actions, footer, header, divider = true, variant = "practice" }) {
		const wide = DIL.useBreakpoint("sm");
		const dictionary = variant === "dictionary";
		const completion = variant === "completion" || variant === "translation";
		const translation = variant === "translation";
		const padding = {
			x: dictionary && !wide ? 4.5 : 5,
			top: dictionary ? wide ? 4 : 3 : 5,
			bottom: dictionary && !wide ? 4.5 : 5
		};
		const gap = dictionary || variant === "practice" || variant === "listening" ? 4 : 2;
		const content = /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: dictionary || wide ? "40px" : "44px",
			gap: 2,
			align: "center",
			justify: "between",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			align: "center",
			flex: "1 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: variant === "dictionary" ? "2xl" : "xl",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, title)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			flex: "0 0 auto",
			height: dictionary ? "40px" : void 0
		}, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, actions))), /* @__PURE__ */ __dil.jsx("col", { gap: completion || variant === "choice" || variant === "listening" ? 2 : 4 }, directions ? /* @__PURE__ */ __dil.jsx("box", { padding: translation ? { y: 1 } : void 0 }, /* @__PURE__ */ __dil.jsx("text", {
			size: translation ? "md" : "sm",
			color: translation ? "primary" : "secondary"
		}, directions)) : null, completion ? /* @__PURE__ */ __dil.jsx("box", { padding: translation ? { top: 2 } : { y: 1 } }, prompt) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, prompt), completion ? /* @__PURE__ */ __dil.jsx("col", {
			gap: "15px",
			padding: { top: 3 }
		}, divider ? /* @__PURE__ */ __dil.jsx("box", {
			height: "1px",
			background: "alpha-05",
			role: "separator"
		}) : null, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, children)) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, divider ? /* @__PURE__ */ __dil.jsx("box", {
			height: "1px",
			background: "alpha-05",
			role: "separator"
		}) : null, variant === "dictionary" ? /* @__PURE__ */ __dil.jsx("box", { padding: { top: 1 } }, children) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children))), navigation || footer ? /* @__PURE__ */ __dil.jsx("row", {
			padding: {
				x: dictionary && !wide ? .5 : void 0,
				top: variant === "dictionary" || variant === "practice" || variant === "listening" ? 1 : 3
			},
			align: "center",
			justify: "between",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("col", {
			minHeight: wide ? void 0 : "44px",
			justify: "center"
		}, navigation), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, footer)) : null);
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			padding: header ? 0 : padding,
			gap: header ? 0 : gap,
			clip: Boolean(header),
			radius: variant === "listening" ? "32px" : completion || variant === "dictionary" && navigation ? "24px" : "28px",
			background: {
				light: wide ? "gray-25" : "gray-0",
				dark: "gray-200"
			},
			border: {
				size: .5,
				color: {
					light: "strong",
					dark: "alpha-05"
				}
			},
			role: "group",
			ariaLabel: title,
			disableAutoSpacing: true
		}, header ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, header, /* @__PURE__ */ __dil.jsx("col", {
			padding,
			gap
		}, content)) : content);
	}

//#endregion
//#region learning/primitives/LearningFeedback.dil.tsx
	function LearningFeedback({ result, showStatus = true }) {
		if (!result) return null;
		const showCorrection = result.status === "incorrect" && result.correction;
		if (!showStatus && !showCorrection && !result.explanation) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "status",
			gap: 1,
			padding: { bottom: 2 }
		}, showStatus ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: result.status === "correct" ? "check" : "x",
			size: "md",
			color: result.status === "correct" ? "success" : "danger"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: result.status === "correct" ? "success" : "danger"
		}, result.label)) : null, showCorrection ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, result.correctionLabel ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, result.correctionLabel) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary",
			preserveWhitespace: true
		}, result.correction)) : null, result.explanation ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, result.explanation) : null);
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
//#region learning/primitives/LearningChoicePill.dil.tsx
	function LearningChoicePill({ label, selected, result, order, disabled, onSelect }) {
		const status = result?.status;
		const resultColor = status === "correct" ? "success" : status === "incorrect" ? "danger" : void 0;
		const dimmed = (disabled || selected) && !status;
		const pill = /* @__PURE__ */ __dil.jsx("row", {
			minHeight: "40px",
			maxWidth: "100%",
			padding: { x: 4 },
			gap: 2,
			align: "center",
			justify: "center",
			radius: "full",
			background: resultColor ?? (dimmed ? {
				light: "alpha-01",
				dark: "alpha-04"
			} : {
				light: "alpha-04",
				dark: "alpha-10"
			}),
			border: resultColor ? {
				size: 1,
				color: resultColor
			} : void 0
		}, result ? /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: result.label,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: status === "correct" ? "check" : "x",
			size: "md",
			color: resultColor
		})) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			textAlign: "center",
			color: dimmed ? "alpha-35" : "primary"
		}, label));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			maxWidth: "100%",
			background: "transparent",
			radius: "full",
			ariaPressed: selected,
			ariaLabel: result ? \`\${result.label} \${label}\` : order !== void 0 ? \`\${order}. \${label}\` : label,
			onClick: () => {
				if (!disabled && !selected) onSelect();
			}
		}, pill);
	}

//#endregion
//#region learning/primitives/LearningTextChoices.dil.tsx
	function LearningTextChoices({ options, selectedId, correctOptionId, unsureOptionId, correctLabel, incorrectLabel, disabled = false, showResults = true, justify = "start", variant = "pills", onSelect }) {
		const wide = DIL.useBreakpoint("sm");
		const choices = options.map((option, index) => {
			const selected = option.id === selectedId;
			const selectedUnsure = selected && option.id === unsureOptionId;
			const result = showResults && selectedId !== null && correctOptionId ? option.id === correctOptionId ? {
				status: "correct",
				label: correctLabel
			} : selected && !selectedUnsure ? {
				status: "incorrect",
				label: incorrectLabel
			} : void 0 : void 0;
			const locked = disabled || selectedId !== null;
			if (variant === "pills") {
				if (selectedUnsure) return /* @__PURE__ */ __dil.jsx("pressable", {
					key: option.id,
					radius: "full",
					background: "transparent",
					ariaLabel: option.label,
					ariaPressed: true
				}, /* @__PURE__ */ __dil.jsx("row", {
					minHeight: "40px",
					padding: { x: 4 },
					gap: 2,
					align: "center",
					radius: "full",
					background: "surface-secondary"
				}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, "–"), /* @__PURE__ */ __dil.jsx("text", { size: "md" }, option.label)));
				return /* @__PURE__ */ __dil.jsx(LearningChoicePill, {
					key: option.id,
					label: option.label,
					selected,
					result,
					disabled: locked,
					onSelect: () => onSelect(option.id)
				});
			}
			const color = selectedUnsure ? "surface-secondary" : result?.status === "correct" ? "green-500" : result ? "red-400" : void 0;
			return /* @__PURE__ */ __dil.jsx("pressable", {
				key: option.id,
				width: "100%",
				minHeight: 56,
				radius: "8px",
				background: "transparent",
				ariaLabel: result ? \`\${result.label} \${option.label}\` : option.label,
				ariaPressed: selected,
				onClick: () => {
					if (!locked) onSelect(option.id);
				}
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: wide ? 4 : 2.5,
				align: "center",
				padding: { y: "15px" }
			}, /* @__PURE__ */ __dil.jsx("box", {
				size: 24,
				flex: "0 0 auto",
				radius: "full",
				align: "center",
				justify: "center",
				background: color ?? (selected ? "info" : "transparent"),
				border: {
					size: 1,
					color: "alpha-05"
				},
				role: result ? "img" : void 0,
				ariaLabel: result?.label
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: result ? "white" : "primary"
			}, selectedUnsure ? "–" : String.fromCharCode(65 + index))), /* @__PURE__ */ __dil.jsx("col", {
				flex: "1 1 auto",
				minWidth: 0,
				gap: "3px"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				color: "primary"
			}, option.label), result && option.feedback ? /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				color: "secondary"
			}, option.feedback) : null)));
		});
		return variant === "list" ? /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, choices) : /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify,
			align: "center",
			wrap: "wrap"
		}, choices);
	}

//#endregion
//#region learning/primitives/LearningSentence.dil.tsx
	function LearningSentence({ parts, answers, answerStatuses, statusLabels, blankStyle = "inline" }) {
		if (blankStyle === "pill") {
			const activeIndex = answers.findIndex((answer) => answer === null);
			const lines = [[]];
			parts.forEach((part, index) => {
				part.split(/\\r\\n|\\r|\\n/).forEach((text, lineIndex) => {
					if (lineIndex > 0) lines.push([]);
					lines[lines.length - 1].push({ text });
				});
				if (index < answers.length) lines[lines.length - 1].push({
					text: "",
					answerIndex: index
				});
			});
			return /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, lines.map((line, lineIndex) => /* @__PURE__ */ __dil.jsx("row", {
				key: lineIndex,
				gap: answers.length > 1 ? 2 : 1,
				align: "center",
				wrap: "wrap",
				minHeight: "40px"
			}, line.map(({ text, answerIndex }, index) => /* @__PURE__ */ __dil.jsx(SentenceSlotPart, {
				key: index,
				text,
				answer: answerIndex === void 0 ? void 0 : answers[answerIndex],
				active: answerIndex === activeIndex,
				statusLabels,
				wordBank: answers.length > 1,
				status: answerIndex !== void 0 ? answerStatuses?.[answerIndex] : void 0
			})))));
		}
		return /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary",
			preserveWhitespace: true
		}, parts.map((part, index) => /* @__PURE__ */ __dil.jsx(SentencePart, {
			key: index,
			text: part,
			answer: answers[index],
			status: answerStatuses?.[index]
		})));
	}
	function SentenceSlotPart({ text, answer, active, status, statusLabels, wordBank }) {
		const resultColor = status === "correct" ? "success" : status === "incorrect" ? "danger" : void 0;
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, text && (!wordBank || text.trim()) ? /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "primary",
			preserveWhitespace: true
		}, text) : null, answer !== void 0 ? /* @__PURE__ */ __dil.jsx("box", {
			role: status ? "img" : void 0,
			ariaLabel: status && statusLabels ? \`\${statusLabels[status]} \${answer}\` : void 0,
			maxWidth: "100%",
			flex: "0 0 auto",
			minHeight: "40px",
			justify: "center",
			padding: {
				x: wordBank ? 4 : 3,
				y: 1
			},
			radius: "full",
			background: status === "correct" ? "green-a25" : status === "incorrect" ? "red-a25" : answer ? {
				light: "gray-50",
				dark: "gray-200"
			} : active ? "blue-a50" : "transparent",
			border: {
				size: 1,
				color: status === "correct" ? "success" : status === "incorrect" ? "danger" : answer ? "alpha-05" : active ? "blue-400" : "strong",
				style: active || answer ? "solid" : "dashed"
			}
		}, /* @__PURE__ */ __dil.jsx("box", { minHeight: "26px" }, /* @__PURE__ */ __dil.jsx("box", { width: answer === null ? wordBank ? "49px" : "57px" : void 0 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			textAlign: "center",
			color: resultColor ?? "primary"
		}, answer ?? "\\xA0")))) : null);
	}
	function SentencePart({ text, answer, status }) {
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, text, answer !== void 0 ? answer === null ? /* @__PURE__ */ __dil.jsx("text", { inline: true }, "__________") : /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			highlight: status === "correct" ? "green" : status === "incorrect" ? "pink" : true,
			color: status === "correct" ? "success" : status === "incorrect" ? "danger" : void 0,
			weight: "medium"
		}, answer) : null);
	}

//#endregion
//#region learning/cards/LearningFillBlankCard.dil.tsx
	function LearningFillBlankCard$1(props) {
		return /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			advanceOnIncorrect: true,
			isExercisePassed: (data, ids) => ids.length === 1 && ids[0] === data.correctOptionId,
			renderExercise: (data, selection, navigation, footer) => /* @__PURE__ */ __dil.jsx(FillBlankExercise, {
				...data,
				selection,
				navigation,
				footer
			})
		});
	}
	function FillBlankExercise({ title, selection, navigation, footer, sentence, options, correctOptionId, unsureOptionId, correctLabel, incorrectLabel, directions }) {
		const selectedId = selection.selectedIds[0] ?? null;
		const answerId = selectedId !== null && selectedId === unsureOptionId ? correctOptionId : selectedId;
		const answer = options.find((option) => option.id === answerId);
		const correct = answerId === correctOptionId;
		const result = answer ? {
			status: correct ? "correct" : "incorrect",
			label: correct ? correctLabel : incorrectLabel,
			explanation: answer.feedback
		} : null;
		return /* @__PURE__ */ __dil.jsx(LearningCard, {
			icon: "align-left",
			variant: "completion",
			title,
			navigation,
			footer,
			directions,
			prompt: /* @__PURE__ */ __dil.jsx(LearningSentence, {
				blankStyle: "pill",
				statusLabels: {
					correct: correctLabel,
					incorrect: incorrectLabel
				},
				parts: sentence.split("{{blank}}"),
				answers: [answer?.label ?? null],
				answerStatuses: result ? [result.status] : void 0
			})
		}, /* @__PURE__ */ __dil.jsx(LearningTextChoices, {
			justify: "start",
			showResults: false,
			options,
			selectedId,
			correctOptionId,
			unsureOptionId,
			correctLabel,
			incorrectLabel,
			disabled: selectedId !== null,
			onSelect: (id) => selection.setSelectedIds((current) => current.length ? current : [id])
		}), /* @__PURE__ */ __dil.jsx(LearningFeedback, {
			result,
			showStatus: false
		}));
	}

//#endregion
//#region LearningFillBlankCard.dil.tsx
	function LearningFillBlankCard(props) {
		const { state } = useResolvedComponentResult("LearningFillBlankCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningFillBlankCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningFillBlankCard$1, props);
		return props.fallback ?? null;
	}

//#endregion
return LearningFillBlankCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-fill-blank-card-e0a8affc1517.js.map