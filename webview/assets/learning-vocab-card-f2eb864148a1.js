import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning/primitives/SpeakingActions.dil.tsx
	const SPEAKING_ACTION_HEIGHT = 48;
	function fadeProps(duration) {
		const timing = {
			duration,
			delay: 0,
			timingFunction: "ease-out"
		};
		return {
			initial: { opacity: duration ? 0 : 1 },
			enter: {
				...timing,
				opacity: 1
			},
			exit: {
				...timing,
				opacity: 0
			},
			layoutEnter: { duration: 0 },
			layoutExit: { duration: 0 },
			layoutMove: { duration: 0 }
		};
	}
	function sayItLabel(label) {
		return label === "Start speaking" ? "Say it" : label;
	}
	function listenLabel(label) {
		return label === "Play" || label === "Play phrase" || label === "Play pronunciation" ? "Listen" : label;
	}
	/** All states reserve the same intrinsic label width. Flex wrapping lets a
	* carousel item choose its own layout even inside a wide DIL renderer. */
	function SpeakingActions({ listen, action, retry, recording, labels, vocabulary = false }) {
		const paired = vocabulary && Boolean(action);
		const replacingListen = paired && Boolean(retry);
		const leadingSpace = paired ? 232 : 348;
		const labelWidth = /* @__PURE__ */ __dil.jsx("col", {
			ariaHidden: true,
			height: 0,
			clip: true,
			padding: { x: "38px" },
			minWidth: vocabulary ? 148 : 188,
			maxWidth: "100%"
		}, labels.map((label, i) => /* @__PURE__ */ __dil.jsx("text", {
			key: i,
			size: "md",
			weight: "medium"
		}, label)));
		const slot = (child) => /* @__PURE__ */ __dil.jsx("col", {
			flex: "1 1 auto",
			minWidth: 0,
			gap: 0
		}, labelWidth, /* @__PURE__ */ __dil.jsx("row", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", {
			width: 0,
			flex: 1
		}, child)));
		const phase = retry ? "completed" : recording ? "recording" : "ready";
		const visits = DIL.useRef({
			phase,
			counts: {
				ready: 0,
				recording: 0,
				completed: 0,
				[phase]: 1
			}
		});
		if (visits.current.phase !== phase) {
			visits.current.phase = phase;
			visits.current.counts[phase] += 1;
		}
		const phases = [
			"ready",
			"recording",
			"completed"
		];
		const actionRow = /* @__PURE__ */ __dil.jsx("row", {
			wrap: "wrap",
			gap: 0,
			justify: "end",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			flex: "1000 1 auto",
			minWidth: 0,
			height: 0,
			gap: 0,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", { width: replacingListen ? leadingSpace - 40 : leadingSpace }), replacingListen ? labelWidth : null), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			flex: "1 1 auto",
			minWidth: 0,
			maxWidth: "100%",
			align: "center"
		}, paired ? retry ?? slot(listen) : null, slot(!vocabulary && retry ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, retry, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, action)) : action ?? listen)));
		return /* @__PURE__ */ __dil.jsx("col", { gap: vocabulary ? 0 : 4 }, !vocabulary ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			align: "start",
			background: "alpha-10",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: leadingSpace - 1,
			height: 0
		}), labelWidth, /* @__PURE__ */ __dil.jsx("box", {
			flex: "1 1 0px",
			minWidth: 0,
			aspectRatio: 1,
			maxHeight: 1
		})) : null, action ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			minHeight: SPEAKING_ACTION_HEIGHT
		}, phases.filter((layer) => layer !== phase).concat(phase).map((layer) => /* @__PURE__ */ __dil.jsx("col", {
			key: layer,
			height: layer === phase ? void 0 : 0,
			ariaHidden: layer !== phase,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("transition", {
			key: Math.max(0, visits.current.counts[layer] - 1),
			preventInitialTransition: visits.current.counts[layer] <= 1,
			...fadeProps(150)
		}, layer === phase ? actionRow : null)))) : actionRow);
	}
	const speeds = [
		{
			value: "1/3",
			label: "⅓×",
			rate: 1 / 3
		},
		{
			value: "1/2",
			label: "½×",
			rate: .5
		},
		{
			value: "1",
			label: "1×",
			rate: 1
		},
		{
			value: "2",
			label: "2×",
			rate: 2
		},
		{
			value: "3",
			label: "3×",
			rate: 3
		}
	];
	function usePlaybackSpeed() {
		const speed = DIL.useRef(speeds[2]);
		const [, refresh] = DIL.useState(0);
		return {
			rate: speed.current.rate,
			control(speech, speedLabel, disabled = false) {
				return /* @__PURE__ */ __dil.jsx("box", null, /* @__PURE__ */ __dil.jsx("select", {
					size: "sm",
					variant: "ghost",
					block: false,
					ariaLabel: speedLabel ?? "Playback speed",
					disabled: disabled || !speech.available,
					options: speeds.map(({ value, label }) => ({
						value,
						label
					})),
					value: speed.current.value,
					onChange: (value) => {
						const option = speeds.find((entry) => entry.value === value);
						if (option && option.value !== speed.current.value) {
							speech.stop();
							speed.current = option;
							refresh((revision) => revision + 1);
						}
					}
				}));
			}
		};
	}

//#endregion
//#region SpeechSynthesizer.dil.tsx
	const unavailable = {
		available: false,
		status: "idle",
		error: null,
		play: () => {},
		stop: () => {}
	};
	const { useSpeechSynthesizer = () => unavailable } = DIL;
	function SpeechSynthesizer({ controls, disabled = false, logging, playbackSpeed = 1, ...source }) {
		const speech = useSpeechSynthesizer({
			...source,
			playbackSpeed
		}, logging);
		DIL.useEffect(() => {
			if (disabled) speech.stop();
		}, [disabled, speech.stop]);
		const play = () => {
			if (!disabled) speech.play();
		};
		const stop = () => {
			if (!disabled) speech.stop();
		};
		if (controls) return controls({
			...speech,
			play,
			stop
		});
		if (!speech.available) return /* @__PURE__ */ __dil.jsx("text", null, "Audio unavailable");
		return speech.status === "idle" ? /* @__PURE__ */ __dil.jsx("button", {
			disabled,
			onClick: play
		}, "Play") : /* @__PURE__ */ __dil.jsx("button", { onClick: stop }, "Stop");
	}

//#endregion
//#region learning/primitives/LearningCard.dil.tsx
	function LearningCard({ icon, title, directions, prompt, children, navigation, actions, footer, divider = true, variant = "practice" }) {
		const wide = DIL.useBreakpoint("sm");
		const dictionary = variant === "dictionary";
		const completion = variant === "completion" || variant === "translation";
		const translation = variant === "translation";
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			padding: {
				x: dictionary && !wide ? 4.5 : 5,
				top: dictionary ? wide ? 4 : 3 : 5,
				bottom: dictionary && !wide ? 4.5 : 5
			},
			gap: variant === "dictionary" || variant === "practice" || variant === "listening" ? 4 : 2,
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
		}, /* @__PURE__ */ __dil.jsx("row", {
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
	}

//#endregion
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
		const withCompletion = (next) => {
			if (!completionEnabled || !isExercisePassed) return next;
			const outcomes = exercises.map((item) => {
				const answer$1 = next.answers[item.id];
				const ids = answer$1?.revision === item.revision ? answer$1.selectedIds : [];
				if (isExercisePassed(item.data, ids)) return isExerciseSkipped(item.data, ids) ? LearningWidgetStatus.Skipped : LearningWidgetStatus.Correct;
				return isExerciseComplete(item.data, ids) ? LearningWidgetStatus.Incorrect : LearningWidgetStatus.Unanswered;
			});
			const isComplete = outcomes.length > 0 && outcomes.every((outcome) => outcome === LearningWidgetStatus.Correct || outcome === LearningWidgetStatus.Skipped);
			const learningStatus = outcomes.includes(LearningWidgetStatus.Incorrect) ? LearningWidgetStatus.Incorrect : !isComplete ? LearningWidgetStatus.Unanswered : outcomes.includes(LearningWidgetStatus.Skipped) ? LearningWidgetStatus.Skipped : LearningWidgetStatus.Correct;
			const emit = isComplete && learningStatus !== LearningWidgetStatus.Incorrect && (!next.completion?.isComplete || next.completion.revision !== revision);
			const updated = {
				...next,
				learningStatus,
				completion: {
					version: 1,
					revision,
					isComplete,
					composerFeedback: getLearningComposerFeedback(learningStatus)
				}
			};
			if (emit) pendingSectionCompletion.current = true;
			else if (!isComplete || learningStatus === LearningWidgetStatus.Incorrect) pendingSectionCompletion.current = false;
			return updated;
		};
		DIL.useEffect(() => {
			if (completionEnabled && advanceOnIncorrect && exercises.some((item) => {
				const answer$1 = viewState.answers[item.id];
				return answer$1?.revision === item.revision && isExerciseComplete(item.data, answer$1.selectedIds) && !isExercisePassed?.(item.data, answer$1.selectedIds);
			}) && (viewState.learningStatus !== LearningWidgetStatus.Incorrect || viewState.completion?.revision !== revision || viewState.completion.isComplete)) updateViewState(withCompletion(viewState));
		});
		DIL.useEffect(() => {
			if (!pendingSectionCompletion.current || !viewState.completion?.isComplete) return;
			pendingSectionCompletion.current = false;
			if (!completionEnabled || appData.learningSectionCompletionReadOnly === true || appData.opGenui?.isShared === true || viewState.completion.revision !== revision) return;
			GenUI.dispatchWidgetClientAction?.({
				type: MARK_LEARNING_WIDGET_COMPLETED,
				payload: getLearningCompletionPayload(viewState.completion.composerFeedback, appData.opGenui?.supportedClientActions)
			});
		});
		if (!exercise) return null;
		const answer = viewState.answers[exercise.id];
		const selectedIds = answer?.revision === exercise.revision ? answer.selectedIds : [];
		const canAdvance = index < exercises.length - 1 && (completionEnabled && !advanceOnIncorrect ? isExercisePassed?.(exercise.data, selectedIds) === true : isExerciseComplete(exercise.data, selectedIds));
		const showSectionAdvance = completionEnabled && advanceOnIncorrect && exercises.every((item) => {
			const exerciseAnswer = viewState.answers[item.id];
			return exerciseAnswer?.revision === item.revision && isExerciseComplete(item.data, exerciseAnswer.selectedIds);
		}) && exercises.some((item) => !isExercisePassed?.(item.data, viewState.answers[item.id].selectedIds));
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
//#region ../waveform/RecordingWaveform.dil.tsx
	function RecordingWaveform(props) {
		return /* @__PURE__ */ __dil.jsx("recording-waveform", props);
	}

//#endregion
//#region learning/speaking.dil.ts
	const REPEAT_ATTEMPT_TIMEOUT_MS = 5e3;
	const RECALL_ATTEMPT_TIMEOUT_MS = 1e4;
	const SPEAKING_SUCCESS_HIGHLIGHT_MS = 500;
	const SPEAKING_SUCCESS_FADE_MS = 500;
	function wordKey(text) {
		return text.toLowerCase().normalize("NFD").replace(/(\\p{Script=Latin})\\p{M}+/gu, "$1").replace(/[^\\p{L}\\p{N}\\p{M}]/gu, "");
	}
	function hasSpeakingSegmenter() {
		return typeof Intl !== "undefined" && typeof Intl.Segmenter === "function";
	}
	/** Keep display spans intact while comparing normalized, whole words. */
	function speakingParts(text, language) {
		if (!hasSpeakingSegmenter()) return [];
		let segmenter;
		try {
			segmenter = new Intl.Segmenter(language || void 0, { granularity: "word" });
		} catch {
			segmenter = new Intl.Segmenter(void 0, { granularity: "word" });
		}
		const parts = Array.from(segmenter.segment(text), (part) => ({
			text: part.segment,
			word: part.isWordLike ? wordKey(part.segment) || null : null
		}));
		const displayParts = [];
		for (const part of parts) {
			const previous = displayParts[displayParts.length - 1];
			const opening = part.word && previous && !previous.word ? previous.text.match(/[¿¡]+$/u)?.[0] : void 0;
			if (opening) {
				previous.text = previous.text.slice(0, -opening.length);
				if (!previous.text) displayParts.pop();
				displayParts.push({
					text: opening + part.text,
					word: part.word
				});
				continue;
			}
			const punctuation = !part.word && previous?.word ? part.text.match(/^(?:(?![¿¡])\\p{P})+/u)?.[0] : void 0;
			if (punctuation) {
				previous.text += punctuation;
				const rest = part.text.slice(punctuation.length);
				if (rest) displayParts.push({
					text: rest,
					word: null
				});
			} else if (!part.word && previous && !previous.word) previous.text += part.text;
			else displayParts.push(part);
		}
		return displayParts;
	}
	/** Every transcript is a replacement, never an additional batch of words. */
	function matchSpeakingWords(parts, transcript, language) {
		const counts = /* @__PURE__ */ new Map();
		for (const { word } of speakingParts(transcript, language)) if (word) counts.set(word, (counts.get(word) ?? 0) + 1);
		let remaining = 0;
		return {
			matched: parts.map(({ word }) => {
				if (!word) return false;
				const count = counts.get(word) ?? 0;
				if (count > 0) {
					counts.set(word, count - 1);
					return true;
				}
				remaining++;
				return false;
			}),
			complete: parts.some((part) => part.word !== null) && remaining === 0
		};
	}
	/** New occurrences count as activity even when they are not target words. */
	function hasNewSpeakingWords(previousTranscript, transcript, language) {
		if (transcript === previousTranscript) return false;
		const parts = speakingParts(transcript, language);
		return parts.some((part) => part.word !== null) && !matchSpeakingWords(parts, previousTranscript, language).complete;
	}

//#endregion
//#region learning/primitives/SpeakingPractice.dil.tsx
	const { useDictation = () => void 0 } = DIL;
	const SUCCESS = "spoken";
	const SKIPPED = "skipped";
	const HEADER_CONTROL_SIZE = 40;
	const STOP_CONTROL_SIZE = 32;
	function recordingErrorMessage(code, { error, recordingErrors }) {
		switch (code) {
			case "permission_denied": return recordingErrors?.permissionDenied ?? error;
			case "microphone_busy":
			case "microphone_in_use": return recordingErrors?.microphoneBusy ?? error;
			case "capture_failed":
			case "recording_failed": return recordingErrors?.captureFailed ?? error;
			case "transcription_failed": return recordingErrors?.transcriptionFailed ?? error;
			case "interrupted": return recordingErrors?.interrupted ?? error;
			default: return error;
		}
	}
	function SpeakingPractice({ text, language, mode = "repeat", pronunciationHint, source = "learning_speak_card", sourceText, inactivityTimeoutMs, isDebugAllowed = false, isDebugVisible, toggleDebug, labels, selection, render, renderRepeatPhrase, footer }) {
		const startLabel = sayItLabel(labels.start);
		const sectionCompletionEnabled = DIL.useAppData((appData) => appData.learningSectionCompletionEnabled === true);
		const dictation = useDictation({
			audioLevels: true,
			...language ? { language } : {},
			context: {
				kind: "speaking_exercise",
				expectedPhrase: text
			}
		});
		const isStarting = dictation?.status === "starting";
		const isFinishing = dictation?.audioLevelsSupported && dictation.status !== "starting" && dictation.status !== "recording";
		const showSpinner = isStarting || isFinishing;
		const waveformSessionId = dictation?.status === "recording" && dictation.audioLevelsSupported ? dictation.sessionId : null;
		const parts = DIL.useMemo(() => {
			const segmented = speakingParts(text, language);
			return segmented.length ? segmented : [{
				text,
				word: text
			}];
		}, [text, language]);
		const emptyAttempt = {
			id: 0,
			phase: "idle",
			lastActivityAt: null,
			successHighlightUntil: null,
			timeoutMs: null,
			transcript: "",
			matched: [],
			hintedWordIndices: [],
			error: null
		};
		const attempt = DIL.useRef(emptyAttempt);
		const [, refresh] = DIL.useState(0);
		const playback = usePlaybackSpeed();
		const update = () => refresh((value) => value + 1);
		const succeeded = selection.selectedIds.includes(SUCCESS);
		const recall = mode === "recall";
		const defaultTimeoutMs = recall ? RECALL_ATTEMPT_TIMEOUT_MS : REPEAT_ATTEMPT_TIMEOUT_MS;
		const configuredTimeoutMs = typeof inactivityTimeoutMs === "number" && Number.isFinite(inactivityTimeoutMs) && inactivityTimeoutMs > 0 ? inactivityTimeoutMs : defaultTimeoutMs;
		const attemptTimeoutMs = attempt.current.timeoutMs ?? configuredTimeoutMs;
		const active = !succeeded && attempt.current.phase === "active";
		const showingSuccessFeedback = succeeded && attempt.current.successHighlightUntil !== null;
		const now = DIL.useNow(active && dictation?.status !== "starting" || showingSuccessFeedback, showingSuccessFeedback ? 50 : 1e3);
		const highlightingSuccess = showingSuccessFeedback && now < attempt.current.successHighlightUntil;
		const transcript = dictation?.transcript ?? "";
		const debugVisible = isDebugVisible();
		const liveMatch = DIL.useMemo(() => matchSpeakingWords(parts, transcript, language), [
			parts,
			transcript,
			language
		]);
		const supportsSegmentation = hasSpeakingSegmenter();
		const unavailable$1 = !dictation || dictation.error?.code === "integration_error" || !supportsSegmentation;
		function resetAttempt(stopPlayback) {
			attempt.current = {
				...emptyAttempt,
				id: attempt.current.id + 1
			};
			dictation?.cancel();
			stopPlayback();
			selection.setSelectedIds(() => []);
			update();
		}
		function startAttempt(stopPlayback) {
			if (!dictation || unavailable$1 || attempt.current.phase === "active") return;
			stopPlayback();
			dictation.cancel();
			selection.setSelectedIds(() => []);
			attempt.current = {
				...emptyAttempt,
				id: attempt.current.id + 1,
				phase: "active",
				timeoutMs: configuredTimeoutMs,
				hintedWordIndices: attempt.current.phase === "idle" ? attempt.current.hintedWordIndices : []
			};
			dictation.start();
			update();
		}
		function finish(success, error = null) {
			if (attempt.current.phase !== "active") return;
			attempt.current = {
				...attempt.current,
				phase: success ? "success" : "failure",
				successHighlightUntil: success ? now + SPEAKING_SUCCESS_HIGHLIGHT_MS : null,
				error
			};
			if (error === null && dictation?.status !== "done") dictation?.stop();
			if (success) selection.setSelectedIds(() => [SUCCESS]);
			update();
		}
		const renderedAttemptId = attempt.current.id;
		function revealWord(index) {
			const current = attempt.current;
			if (current.id !== renderedAttemptId || current.hintedWordIndices.includes(index)) return;
			attempt.current = {
				...current,
				hintedWordIndices: [...current.hintedWordIndices, index]
			};
			update();
		}
		DIL.useEffect(() => {
			if (attempt.current.id !== renderedAttemptId) return;
			if (succeeded) {
				if (attempt.current.phase === "active") {
					attempt.current = {
						...attempt.current,
						phase: "success"
					};
					dictation?.cancel();
				}
				if (attempt.current.successHighlightUntil !== null && now >= attempt.current.successHighlightUntil) attempt.current = {
					...attempt.current,
					successHighlightUntil: null
				};
				return;
			}
			if (!active || !dictation) return;
			if (dictation.status === "idle") {
				attempt.current = {
					...emptyAttempt,
					id: attempt.current.id + 1
				};
				update();
				return;
			}
			if (dictation.status === "error") {
				finish(false, recordingErrorMessage(dictation.error?.code, labels));
				return;
			}
			if (dictation.status === "starting") return;
			const waitsForFinalTranscript = sectionCompletionEnabled;
			if (waitsForFinalTranscript && dictation.status === "done") {
				attempt.current = {
					...attempt.current,
					matched: liveMatch.matched
				};
				finish(liveMatch.complete);
				return;
			}
			if (waitsForFinalTranscript && dictation.status === "stopping") return;
			const lastActivityAt = attempt.current.lastActivityAt ?? now;
			if (now - lastActivityAt >= attemptTimeoutMs) {
				finish(false);
				return;
			}
			attempt.current = {
				...attempt.current,
				lastActivityAt: hasNewSpeakingWords(attempt.current.transcript, dictation.transcript, language) ? now : lastActivityAt,
				transcript: dictation.transcript,
				matched: liveMatch.matched
			};
			if (liveMatch.complete) if (waitsForFinalTranscript) dictation.stop();
			else finish(true);
			else if (dictation.status === "done") finish(false);
		});
		const cancel = dictation?.cancel;
		DIL.useEffect(() => () => cancel?.(), [cancel]);
		const failed = attempt.current.phase === "failure";
		const showPlayback = !recall || succeeded || failed && !attempt.current.error;
		const expired = attempt.current.lastActivityAt !== null && now - attempt.current.lastActivityAt >= attemptTimeoutMs;
		const matched = active && !expired ? liveMatch.matched : attempt.current.matched;
		const showMissingWords = failed && !succeeded && !attempt.current.error;
		const wordColors = parts.map(({ word }, index) => {
			if (!word) return "primary";
			if (succeeded) return highlightingSuccess ? "info" : "primary";
			if (matched[index]) return active ? "info" : "primary";
			return showMissingWords ? "danger" : "primary";
		});
		const message = succeeded ? null : unavailable$1 ? labels.unavailable : attempt.current.error;
		const words = parts.map((part, index) => part.word ? /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			inline: true,
			color: wordColors[index]
		}, part.text) : part.text);
		return /* @__PURE__ */ __dil.jsx(SpeechSynthesizer, {
			text,
			language: language ?? void 0,
			pronunciationHint: pronunciationHint ?? void 0,
			playbackSpeed: playback.rate,
			source,
			disabled: active || !showPlayback,
			controls: (speech) => /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, render({
				speech,
				speedControl: playback.control(speech, labels.speed, active),
				active,
				showPlayback,
				footer,
				debugButton: isDebugAllowed ? /* @__PURE__ */ __dil.jsx("pressable", {
					size: HEADER_CONTROL_SIZE,
					radius: "full",
					align: "center",
					justify: "center",
					background: debugVisible ? "surface-tertiary" : "transparent",
					ariaLabel: debugVisible ? "Hide live transcript" : "Show live transcript",
					ariaPressed: debugVisible,
					onClick: () => {
						toggleDebug();
						update();
					}
				}, /* @__PURE__ */ __dil.jsx("box", {
					height: "100%",
					align: "center",
					justify: "center",
					ariaHidden: true
				}, /* @__PURE__ */ __dil.jsx("icon", {
					name: "bug",
					size: "xl",
					color: "secondary"
				}))) : null,
				prompt: recall ? /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("col", { gap: 1.5 }, /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					color: "secondary"
				}, labels.recallInstruction), /* @__PURE__ */ __dil.jsx("text", {
					size: "xl",
					preserveWhitespace: true
				}, sourceText)), /* @__PURE__ */ __dil.jsx(SuccessTransition, {
					succeeded,
					highlighting: highlightingSuccess
				}, renderRecallPhrase({
					parts,
					matched,
					wordColors,
					succeeded,
					failed: showMissingWords,
					hiddenWord: labels.hiddenWord ?? "Hidden word",
					revealWordLabel: labels.revealWord ?? labels.hiddenWord ?? "Reveal hidden word",
					hintedWordIndices: attempt.current.hintedWordIndices,
					onRevealWord: supportsSegmentation ? revealWord : void 0
				}))) : /* @__PURE__ */ __dil.jsx("box", null, /* @__PURE__ */ __dil.jsx(SuccessTransition, {
					succeeded,
					highlighting: highlightingSuccess
				}, renderRepeatPhrase ? renderRepeatPhrase(words) : /* @__PURE__ */ __dil.jsx("text", {
					size: "xl",
					preserveWhitespace: true
				}, words))),
				retry: succeeded ? /* @__PURE__ */ __dil.jsx("pressable", {
					size: 40,
					flex: "0 0 auto",
					radius: "full",
					background: "transparent",
					ariaLabel: labels.retry,
					disabled: unavailable$1,
					onClick: () => resetAttempt(speech.stop)
				}, /* @__PURE__ */ __dil.jsx("box", {
					height: "100%",
					align: "center",
					justify: "center",
					ariaHidden: true
				}, /* @__PURE__ */ __dil.jsx("icon", {
					name: "reload",
					color: "secondary",
					size: "xl"
				}))) : null,
				controls: /* @__PURE__ */ __dil.jsx("box", {
					role: "status",
					ariaLabel: active && isStarting ? labels.starting : active && isFinishing ? labels.finishing ?? void 0 : waveformSessionId ? labels.listening : void 0,
					width: "100%",
					gap: 0
				}, succeeded ? /* @__PURE__ */ __dil.jsx("row", {
					height: SPEAKING_ACTION_HEIGHT,
					padding: { x: 2 },
					radius: "full",
					background: "surface-inverted",
					align: "center",
					justify: "center"
				}, /* @__PURE__ */ __dil.jsx("row", {
					gap: 2,
					align: "center"
				}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("icon", {
					name: "check-md",
					color: "gray-0",
					size: "xl"
				})), /* @__PURE__ */ __dil.jsx("text", {
					color: "gray-0",
					weight: "medium"
				}, labels.success))) : active ? /* @__PURE__ */ __dil.jsx("row", {
					height: SPEAKING_ACTION_HEIGHT,
					padding: {
						left: 4,
						right: 2
					},
					radius: "full",
					border: {
						size: 1,
						color: "default"
					},
					align: "center",
					gap: 1.5
				}, /* @__PURE__ */ __dil.jsx("box", {
					flex: 1,
					minWidth: 0,
					align: "center",
					justify: "center"
				}, showSpinner ? /* @__PURE__ */ __dil.jsx("box", {
					width: 32,
					height: 28,
					align: "center",
					justify: "center",
					ariaHidden: true
				}, /* @__PURE__ */ __dil.jsx("loading-indicator", {
					size: "md",
					color: "secondary"
				})) : waveformSessionId ? /* @__PURE__ */ __dil.jsx("box", {
					width: "100%",
					minWidth: 0,
					height: 28,
					ariaHidden: true
				}, /* @__PURE__ */ __dil.jsx(RecordingWaveform, {
					sessionId: waveformSessionId,
					fitToWidth: true,
					running: true
				})) : /* @__PURE__ */ __dil.jsx("shimmer-text", { weight: "medium" }, labels.listening)), /* @__PURE__ */ __dil.jsx("pressable", {
					size: STOP_CONTROL_SIZE,
					flex: "0 0 auto",
					radius: "full",
					background: "transparent",
					ariaLabel: labels.stop,
					onClick: () => {
						if (sectionCompletionEnabled) {
							dictation?.stop();
							return;
						}
						const withinDeadline = attempt.current.lastActivityAt !== null && now - attempt.current.lastActivityAt < attemptTimeoutMs;
						if (withinDeadline) attempt.current = {
							...attempt.current,
							matched: liveMatch.matched
						};
						finish(withinDeadline && liveMatch.complete);
					}
				}, /* @__PURE__ */ __dil.jsx("box", {
					height: "100%",
					align: "center",
					justify: "center",
					ariaHidden: true
				}, /* @__PURE__ */ __dil.jsx("icon", {
					name: "stop",
					color: "primary",
					size: "lg"
				})))) : /* @__PURE__ */ __dil.jsx("pressable", {
					height: SPEAKING_ACTION_HEIGHT,
					width: "100%",
					direction: "row",
					align: "center",
					justify: "center",
					gap: 1.5,
					radius: "full",
					background: "surface-inverted",
					ariaLabel: failed ? labels.retry : startLabel,
					disabled: unavailable$1 || !parts.some((part) => part.word),
					onClick: () => startAttempt(speech.stop)
				}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("icon", {
					name: failed ? "reload" : "mic",
					color: "gray-0"
				})), /* @__PURE__ */ __dil.jsx("text", {
					color: "gray-0",
					weight: "medium"
				}, failed ? labels.retry : startLabel))),
				feedback: message || speech.error ? /* @__PURE__ */ __dil.jsx("col", {
					role: "status",
					gap: 2
				}, message ? /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					color: "secondary"
				}, message) : null, speech.error ? /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					color: "secondary"
				}, labels.playbackError) : null) : null,
				debugPanel: isDebugAllowed && debugVisible ? /* @__PURE__ */ __dil.jsx("col", {
					gap: 1.5,
					padding: 3,
					radius: "lg",
					background: "surface-tertiary"
				}, /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					weight: "medium",
					color: "secondary"
				}, "Live transcript"), /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					preserveWhitespace: true
				}, attempt.current.phase !== "idle" && transcript || "No transcript yet.")) : null
			}))
		});
	}
	function SuccessTransition({ succeeded, highlighting, children }) {
		const duration = succeeded && !highlighting ? SPEAKING_SUCCESS_FADE_MS : 0;
		return /* @__PURE__ */ __dil.jsx("transition", {
			preventInitialTransition: true,
			...fadeProps(duration)
		}, /* @__PURE__ */ __dil.jsx("box", { key: highlighting ? "success-highlight" : "phrase" }, children));
	}
	function renderRecallPhrase({ parts, matched, wordColors, succeeded, failed, hiddenWord, revealWordLabel, hintedWordIndices, onRevealWord }) {
		const hinted = new Set(hintedWordIndices);
		const lastHintIndex = hintedWordIndices.at(-1);
		const lines = [[]];
		parts.forEach((part, index) => {
			part.text.split(/\\r\\n|\\r|\\n/).forEach((text, line) => {
				if (line > 0) lines.push([]);
				if (text) lines[lines.length - 1].push({
					text,
					index
				});
			});
		});
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: {
				x: 6,
				y: 4
			},
			radius: "full",
			background: succeeded || failed ? "surface-tertiary" : "transparent",
			border: succeeded || failed ? void 0 : {
				size: 1,
				color: "strong",
				style: "dashed"
			}
		}, lines.map((line, lineIndex) => /* @__PURE__ */ __dil.jsx("row", {
			key: lineIndex,
			wrap: "wrap",
			gap: 0,
			rowGap: 1,
			align: "center"
		}, line.length === 0 ? /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			preserveWhitespace: true
		}, "\\xA0")) : line.map(({ text, index }) => {
			if (!parts[index].word) return /* @__PURE__ */ __dil.jsx("text", {
				key: index,
				size: "xl",
				inline: true,
				preserveWhitespace: true
			}, text);
			return renderRecallWord({
				index,
				text,
				color: wordColors[index],
				hidden: !succeeded && !failed && !matched[index] && !hinted.has(index),
				hiddenWord,
				revealWordLabel,
				onReveal: onRevealWord ? () => onRevealWord(index) : void 0
			});
		})))), /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true,
			height: 0,
			clip: true
		}, lastHintIndex !== void 0 && !succeeded && !failed ? /* @__PURE__ */ __dil.jsx("text", { key: lastHintIndex }, parts[lastHintIndex].text) : null));
	}
	function renderRecallWord({ index, text, color, hidden, hiddenWord, revealWordLabel, onReveal }) {
		if (!hidden) return /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "xl",
			inline: true,
			color,
			preserveWhitespace: true
		}, text);
		const maskStyle = {
			maxWidth: "100%",
			radius: "xs",
			background: {
				light: "gray-200",
				dark: "gray-600"
			}
		};
		const mask = /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			color: "transparent",
			preserveWhitespace: true
		}, text));
		return onReveal ? /* @__PURE__ */ __dil.jsx("pressable", {
			key: index,
			...maskStyle,
			ariaLabel: revealWordLabel,
			onClick: onReveal
		}, mask) : /* @__PURE__ */ __dil.jsx("box", {
			key: index,
			...maskStyle,
			role: "img",
			ariaLabel: hiddenWord
		}, mask);
	}

//#endregion
//#region learning/cards/LearningVocabCard.dil.tsx
	function LearningVocabCard$1(props) {
		const debugVisibility = DIL.useRef(false);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			showsIncorrectActions: false,
			isExerciseComplete: (data, ids) => !data.speakingPractice || ids.includes(SUCCESS),
			isExerciseSkipped: (data, ids) => Boolean(data.speakingPractice) && ids.includes(SKIPPED),
			isExercisePassed: (data, ids) => !data.speakingPractice || ids.includes(SUCCESS) || ids.includes(SKIPPED),
			renderExercise: (data, selection, navigation, footer) => {
				const playLabel = listenLabel(data.audioLabels.play);
				const render = (speech, speedControl, practice) => {
					const playButton = practice?.retry ? null : /* @__PURE__ */ __dil.jsx("pressable", {
						height: SPEAKING_ACTION_HEIGHT,
						width: "100%",
						padding: { x: 3 },
						radius: "full",
						background: "transparent",
						border: {
							size: 1,
							color: "default"
						},
						align: "center",
						justify: "center",
						ariaLabel: !speech.available ? data.audioLabels.unavailable : speech.status === "idle" ? playLabel : data.audioLabels.stop,
						disabled: practice?.active || !speech.available,
						onClick: speech.status === "idle" ? speech.play : speech.stop
					}, /* @__PURE__ */ __dil.jsx("row", {
						gap: 1.5,
						align: "center"
					}, speech.status === "loading" ? /* @__PURE__ */ __dil.jsx("loading-indicator", {
						size: "lg",
						color: "secondary"
					}) : /* @__PURE__ */ __dil.jsx("icon", {
						name: speech.status === "idle" ? "sound-on-read-out-loud-speaker" : "stop",
						size: "xl",
						color: "secondary"
					}), /* @__PURE__ */ __dil.jsx("text", {
						size: "md",
						weight: "medium",
						color: "secondary"
					}, speech.status === "idle" ? playLabel : data.audioLabels.stop)));
					return /* @__PURE__ */ __dil.jsx(LearningCard, {
						icon: "book",
						variant: "dictionary",
						title: data.title,
						navigation,
						actions: /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, practice?.debugButton, playButton ? speedControl : null),
						footer: practice ? practice.footer : footer,
						prompt: practice?.prompt ?? /* @__PURE__ */ __dil.jsx("title", {
							size: "xl",
							weight: "normal",
							color: "primary"
						}, data.text)
					}, /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
						size: "md",
						color: "primary"
					}, data.translation), data.pronunciation ? /* @__PURE__ */ __dil.jsx("text", {
						size: "md",
						color: "secondary",
						italic: true
					}, data.pronunciation) : null, speech.error && !practice ? /* @__PURE__ */ __dil.jsx("box", { role: "status" }, /* @__PURE__ */ __dil.jsx("text", {
						size: "sm",
						color: "secondary"
					}, data.audioLabels.error)) : null), /* @__PURE__ */ __dil.jsx(SpeakingActions, {
						recording: practice?.active,
						vocabulary: true,
						labels: [
							playLabel,
							data.audioLabels.stop,
							...data.speakingPractice ? [
								sayItLabel(data.speakingPractice.labels.start),
								data.speakingPractice.labels.retry,
								data.speakingPractice.labels.success
							] : []
						],
						listen: playButton,
						action: practice?.controls,
						retry: practice?.retry
					}), practice?.feedback, practice?.debugPanel));
				};
				return data.speakingPractice ? /* @__PURE__ */ __dil.jsx(SpeakingPractice, {
					...data.speakingPractice,
					text: data.text,
					language: data.language,
					pronunciationHint: data.pronunciationHint,
					source: "learning_vocab_card",
					labels: {
						...data.speakingPractice.labels,
						playbackError: data.audioLabels.error
					},
					selection,
					footer,
					isDebugVisible: () => debugVisibility.current,
					toggleDebug: () => {
						debugVisibility.current = !debugVisibility.current;
					},
					renderRepeatPhrase: (words) => /* @__PURE__ */ __dil.jsx("title", {
						size: "xl",
						weight: "normal",
						color: "primary"
					}, words),
					render: (practice) => render(practice.speech, practice.speedControl, practice)
				}) : /* @__PURE__ */ __dil.jsx(ListenOnly, {
					data,
					render
				});
			}
		}));
	}
	function ListenOnly({ data, render }) {
		const playback = usePlaybackSpeed();
		return /* @__PURE__ */ __dil.jsx(SpeechSynthesizer, {
			text: data.text,
			language: data.language,
			pronunciationHint: data.pronunciationHint ?? void 0,
			playbackSpeed: playback.rate,
			source: "learning_vocab_card",
			controls: (speech) => render(speech, playback.control(speech, data.speedLabel))
		});
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
//#region LearningVocabCard.dil.tsx
	function LearningVocabCard(props) {
		const { state } = useResolvedComponentResult("LearningVocabCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningVocabCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningVocabCard$1, props);
		return props.fallback ?? null;
	}

//#endregion
return LearningVocabCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-vocab-card-f2eb864148a1.js.map