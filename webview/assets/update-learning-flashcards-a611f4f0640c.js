import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region ../internal/LinkImpression.dil.tsx
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
//#region ../shared.dil.ts
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
//#region ../FileCite.dil.tsx
	function FileCite(props) {
		if ("savedSource" in props) {
			const state = savedSourceState(props.savedSource);
			return state ? /* @__PURE__ */ __dil.jsx(ResolvedFileCite, {
				compact: true,
				state
			}) : null;
		}
		return /* @__PURE__ */ __dil.jsx(FileReferenceCite, props);
	}
	function storedLocationLabel(payload) {
		const page = payload?.page_range_start;
		const lastPage = payload?.page_range_end;
		if (typeof page === "number" && Number.isInteger(page) && page > 0) return typeof lastPage === "number" && Number.isInteger(lastPage) && lastPage > page ? \`Pages \${page}–\${lastPage}\` : \`Page \${page}\`;
		const line = payload?.input_pointer?.line_range_start;
		const lastLine = payload?.input_pointer?.line_range_end;
		if (typeof line === "number" && Number.isInteger(line) && line >= 0) return typeof lastLine === "number" && Number.isInteger(lastLine) && lastLine > line ? \`Lines \${line}–\${lastLine}\` : \`Line \${line}\`;
		return null;
	}
	function ResolvedFileCite({ state, compact = false }) {
		const isMobile = DIL.useIsMobile();
		const isSm = DIL.useBreakpoint("sm");
		const [hovered, setHovered] = DIL.useState(false);
		const name = state.file_name ?? "Document";
		const payload = state.file_action_payload;
		const snippet = typeof payload?.snippet === "string" ? payload.snippet : typeof payload?.text === "string" ? payload.text : null;
		const locationLabel = storedLocationLabel(payload);
		const openFile = () => {
			if (payload) GenUI.dispatchAction({
				handler: "client",
				type: "open_file_citation",
				payload
			});
			else if (state.safe_file_url) GenUI.openUrl(state.safe_file_url);
		};
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 80,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => !isMobile && isSm ? openFile() : void 0 }, compact ? /* @__PURE__ */ __dil.jsx("row", {
			height: 44,
			align: "end",
			maxWidth: 124
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? {
				light: "#dfdfdf",
				dark: "#414141"
			} : {
				light: "#ededed",
				dark: "#303030"
			},
			maxWidth: "100%",
			onHover: setHovered,
			padding: {
				x: 1.5,
				y: 1
			},
			pill: true,
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "document",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("row", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			inline: true,
			maxLines: 1,
			size: "xs",
			truncate: true
		}, name.replace(/\\.[a-z0-9]+$/i, "") || name)))) : /* @__PURE__ */ __dil.jsx(LinkImpression, {
			inline: true,
			url: !payload ? state.safe_file_url : void 0
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? {
				light: "#e8e8e8",
				dark: "gray-300"
			} : {
				light: "gray-75",
				dark: "gray-400"
			},
			onHover: setHovered,
			padding: {
				left: 1,
				right: 1.5,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "document",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			inline: true,
			maxLines: 1,
			size: "3xs",
			truncate: true
		}, name)))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: compact ? "end" : "start",
			side: "bottom",
			sideOffset: 8
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			maxWidth: "100%",
			padding: 4,
			width: isMobile ? "100%" : 345
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${name}\`,
			gap: 2,
			onClick: openFile
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "document",
			size: "md"
		}), /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 2,
			size: "sm",
			weight: "semibold"
		}, name)), locationLabel ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs"
		}, locationLabel) : null, snippet ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 6,
			size: "sm"
		}, snippet) : null))));
	}
	function FileReferenceCite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FileCite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading file citation" });
		return state.file_name ? /* @__PURE__ */ __dil.jsx(ResolvedFileCite, { state }) : null;
	}
	function savedSourceState(source) {
		if (source?.kind !== "file" || typeof source.label !== "string" || !source.label.trim() || source.label.length > 512 || typeof source.file_id !== "string" || !/^file[_-][A-Za-z0-9_-]+$/.test(source.file_id) || source.file_id.length > 256) return null;
		const validPage = (value) => typeof value === "number" && Number.isSafeInteger(value) && value > 0 ? value : void 0;
		const page = validPage(source.page_range_start);
		const lastPage = validPage(source.page_range_end);
		return {
			file_name: source.label,
			file_action_payload: {
				file_id: source.file_id,
				file_name: source.label,
				study_source: true,
				page_range_start: page,
				page_range_end: page !== void 0 && lastPage !== void 0 && lastPage >= page ? lastPage : void 0,
				snippet: typeof source.snippet === "string" ? source.snippet.slice(0, 200) : void 0
			}
		};
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
//#region ../SpeechSynthesizer.dil.tsx
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
//#region internal/learning-flashcards.dil.tsx
	const MISSED_REVEAL_HOLD_MS = 2e3;
	const MAX_UNPACKED_REVIEW_ENTRIES = 450;
	function MobileFlashcardMenu({ compactFlipToolbar, pill, ariaLabel, actions, onSelect }) {
		if (DIL.useAppData((data) => data.nativeComponentNames?.includes("native-menu") === true)) return /* @__PURE__ */ __dil.jsx("native-menu", {
			ariaLabel,
			actions,
			onSelect
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 44,
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "dots-horizontal",
			size: "xl",
			color: "secondary"
		})));
		return /* @__PURE__ */ __dil.jsx("box", {
			direction: compactFlipToolbar ? "row" : void 0,
			justify: compactFlipToolbar ? "end" : void 0,
			clip: compactFlipToolbar || void 0,
			width: compactFlipToolbar ? 44 : void 0,
			flex: compactFlipToolbar ? "0 1 44px" : void 0,
			minWidth: compactFlipToolbar ? 28 : void 0
		}, /* @__PURE__ */ __dil.jsx("box", { flex: compactFlipToolbar ? "none" : void 0 }, /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel,
			variant: "ghost",
			size: "xl",
			pill,
			name: ariaLabel,
			placeholder: " ",
			value: "",
			options: actions.map(({ id, title, disabled }) => ({
				value: id,
				label: title,
				disabled
			})),
			onChange: onSelect
		})));
	}
	function needsCompactProgress(progress) {
		return 2 * progress.card_order.length + progress.missed_indices.length + 5 * progress.answer_history.length > MAX_UNPACKED_REVIEW_ENTRIES || progress.answer_history.some((answer) => answer.missed_indices != null);
	}
	function compactProgress(progress) {
		let previousMisses = [];
		const history = progress.answer_history.map((answer) => {
			const compact = [
				answer.current_index,
				answer.flipped,
				answer.was_missed ?? null,
				answer.swipe_direction ?? null
			];
			if (answer.missed_indices) {
				const misses = answer.missed_indices;
				let prefix = 0;
				while (prefix < misses.length && previousMisses[prefix] === misses[prefix]) prefix += 1;
				compact.push([prefix, misses.slice(prefix)]);
				previousMisses = misses;
			}
			return compact;
		});
		return {
			...progress,
			answer_history: JSON.stringify(history)
		};
	}
	function expandProgress(saved) {
		if (!saved) return null;
		try {
			let previousMisses = [];
			const answer_history = JSON.parse(saved.answer_history).map(([current_index, flipped, was_missed, swipe_direction, misses]) => {
				if (misses) previousMisses = [...previousMisses.slice(0, misses[0]), ...misses[1]];
				return {
					current_index,
					flipped,
					...was_missed == null ? {} : { was_missed },
					...swipe_direction == null ? {} : { swipe_direction },
					...misses ? { missed_indices: previousMisses } : {}
				};
			});
			return {
				...saved,
				answer_history
			};
		} catch {
			return null;
		}
	}
	function progressFromState(state) {
		return {
			current_index: state.current_index,
			flipped: state.flipped,
			card_order: state.card_order,
			shuffle_index: state.shuffle_index,
			revision: state.revision,
			missed_indices: state.missed_indices,
			answer_history: state.answer_history,
			phase: state.phase
		};
	}
	function saveProgress(type, progress) {
		return GenUI.dispatchAction({
			handler: "server",
			loadingBehavior: "none",
			type,
			payload: progressFromState(progress)
		});
	}
	function FlashcardAnswerButton({ isMobile, borderColor, disabled, ariaDisabled, compact, label, icon, feedback, onClick }) {
		const color = icon === "x" ? "#EE7C37" : "#04B84C";
		const background = feedback === 1 ? color : feedback > 0 ? isMobile ? \`rgba(\${icon === "x" ? "238, 124, 55" : "4, 184, 76"}, \${feedback})\` : \`color-mix(in srgb, \${color} \${feedback * 100}%, var(--color-surface))\` : void 0;
		return /* @__PURE__ */ __dil.jsx("pressable", {
			height: 40,
			width: 40,
			flex: compact ? "1 1 0px" : void 0,
			minWidth: compact ? 26 : void 0,
			padding: 0,
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: borderColor
			},
			radius: "full",
			variant: isMobile ? void 0 : "ghost",
			disabled,
			ariaDisabled,
			role: ariaDisabled ? "button" : void 0,
			ariaLabel: label,
			tooltip: !isMobile && !disabled ? label : void 0,
			onClick
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: "100%",
			align: "center",
			justify: "center",
			radius: "full",
			background
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "2xl",
			color: feedback >= .5 ? "white" : "primary"
		})));
	}
	const MAX_FLASHCARD_WIDTH = 361;
	function FlashcardFace({ face, background, source, rawFace, height, label, hint, reducedMotion = false, back = false, disabled = false, onClick }) {
		const singleCharacter = Array.from(rawFace.trim()).length === 1;
		const length = Array.from(rawFace).length;
		const list = /(^|\\n)[ ]{0,3}([-+*]|[0-9]+[.)])[ ]+/.test(rawFace);
		const multiline = rawFace.includes("\\n");
		const compact = length > 56 || back && multiline;
		const fontSize = singleCharacter ? 48 : length > 200 ? 12 : length > 120 ? 15 : compact ? 17 : length > 20 ? 20 : 22;
		const lineHeight = singleCharacter ? 56 : length > 200 ? 17 : length > 120 ? 21 : compact ? 24 : length > 20 ? 25 : 28;
		const faceButton = /* @__PURE__ */ __dil.jsx("pressable", {
			width: source ? MAX_FLASHCARD_WIDTH : "100%",
			maxWidth: "100%",
			height,
			padding: {
				x: 5,
				y: 5
			},
			clip: true,
			radius: 32,
			border: {
				size: .5,
				color: "subtle"
			},
			background,
			disabled,
			ariaLabel: label,
			onClick
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			flex: back || list ? "1 0 auto" : 1,
			minHeight: back || list ? "auto" : 0,
			justify: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text-only-markdown", {
			includeMath: true,
			fontSize,
			lineHeight,
			textAlign: list ? "start" : "center",
			whiteSpace: back ? "normal" : void 0
		}, face)), hint && /* @__PURE__ */ __dil.jsx("animate", {
			preventInitialTransition: true,
			initial: {
				opacity: reducedMotion ? 1 : 0,
				translateY: reducedMotion ? 0 : 16
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: reducedMotion ? 0 : 450,
				timingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)"
			},
			exit: {
				opacity: 0,
				translateY: reducedMotion ? 0 : -16,
				duration: reducedMotion ? 0 : 450,
				timingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)"
			}
		}, /* @__PURE__ */ __dil.jsx("animate-item", { key: hint }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			textAlign: "center"
		}, hint)))));
		if (!source) return faceButton;
		return /* @__PURE__ */ __dil.jsx("stack", null, faceButton, /* @__PURE__ */ __dil.jsx("stack-item", {
			placement: "end-center",
			inset: 4
		}, /* @__PURE__ */ __dil.jsx(FileCite, { savedSource: source })));
	}
	function FlashcardsView({ state, componentName, resolutionId }) {
		const appData = DIL.useAppData();
		const hasMissedRevealHint = typeof appData.opGenui?.supportsFlashcardMotion === "boolean" && Boolean(state.missed_reveal_hint) && typeof DIL.useNow === "function";
		const flipButtonLabel = state.flip_button_label;
		const answerButtonBorderColor = flipButtonLabel ? "var(--color-border-primary-outline)" : "subtle";
		const completionRevision = state.completion?.revision;
		const sectionCompletionEnabled = appData.learningSectionCompletionEnabled === true && appData.learningSectionCompletionReadOnly !== true && appData.opGenui?.isShared !== true && state.completion != null;
		const canSaveNow = state.generation_complete && (appData.opGenui?.componentResults === void 0 || appData.opGenui.nativeServerActions?.ready === true);
		const canSave = appData.learningSectionCompletionEnabled === true ? appData.learningSectionCompletionReadOnly !== true && canSaveNow : canSaveNow || !state.generation_complete;
		const isMobile = DIL.useIsMobile();
		const roomyToolbar = DIL.useBreakpoint("sm");
		const compactFlipToolbar = Boolean(flipButtonLabel) && (isMobile || !roomyToolbar);
		const toolbarSide = compactFlipToolbar ? {
			flex: "1 1 58px",
			minWidth: 58
		} : {
			flex: 1,
			minWidth: flipButtonLabel ? 76 : 0
		};
		const { isDark } = DIL.useTheme();
		const desktopLight = !isMobile && !isDark;
		const desktopCardBackground = desktopLight ? "var(--dil-flashcards-card-background, var(--color-surface, #fff))" : void 0;
		const cardBackground = desktopCardBackground ?? "surface";
		const panelBackground = desktopLight ? "var(--dil-flashcards-panel-background, var(--color-surface-tertiary))" : "surface-tertiary";
		const large = DIL.useBreakpoint("lg");
		const initialProgress = DIL.useRef(progressFromState(state)).current;
		const [legacyProgress, setLegacyProgress] = DIL.useState();
		const [savedCardOrder, setReceivedCardOrder] = DIL.useState(state.card_order);
		DIL.useState(true);
		const [dismissed, setDismissed] = DIL.useState(state.dismissed);
		const [, requestMotionRender] = DIL.useState(false);
		const motionBusyRef = DIL.useRef(false);
		const [motion, setMotion] = DIL.useState();
		const [swipeProgress, setSwipeProgress] = DIL.useState(0);
		const [answerFeedback, setAnswerFeedback] = DIL.useState(null);
		const hintDeck = state.deck_instance_id ?? null;
		const [dismissedHintDeck, setDismissedHintDeck] = DIL.useState();
		const hintDeckRef = DIL.useRef(hintDeck);
		hintDeckRef.current = hintDeck;
		const handleInteractionChange = DIL.useCallback((interacting) => {
			if (motionBusyRef.current !== interacting) {
				motionBusyRef.current = interacting;
				requestMotionRender((previous) => !previous);
			}
			if (interacting) setDismissedHintDeck(hintDeckRef.current);
		}, [requestMotionRender, setDismissedHintDeck]);
		const tapVisible = state.tap_to_flip_visible && dismissedHintDeck !== hintDeck;
		const [savedNextIndex, setPendingNextIndex] = DIL.useState(-1);
		const [savedPendingFlush, setPendingFlush] = DIL.useState(false);
		const [menuNonce, setMenuNonce] = DIL.useState(0);
		const [savedReviewPass, setReviewPass] = DIL.useState({
			deck_instance_id: state.deck_instance_id ?? null,
			review_pass_id: state.review_pass_id ?? null,
			review_pass_kind: state.review_pass_kind ?? null,
			revision: state.revision
		});
		const [hintClock, setHintClock] = DIL.useState(null);
		const [manuallyFlippedDeck, setManuallyFlippedDeck] = DIL.useState();
		const [packedProgress, setPackedProgress] = DIL.useState(() => legacyProgress === void 0 && needsCompactProgress(initialProgress) ? compactProgress(initialProgress) : null);
		const unpackedProgress = DIL.useMemo(() => expandProgress(packedProgress), [packedProgress]);
		const savedProgress = unpackedProgress && unpackedProgress.revision > (legacyProgress?.revision ?? -1) ? unpackedProgress : legacyProgress ?? initialProgress;
		function setProgress(next) {
			if (packedProgress !== null || needsCompactProgress(next)) {
				setLegacyProgress(void 0);
				setPackedProgress(compactProgress(next));
			} else setLegacyProgress(next);
		}
		const deckId = state.deck_instance_id ?? state.library_file_id ?? resolutionId;
		const savedReview = {
			deckId,
			progress: savedProgress,
			receivedCardOrder: savedCardOrder,
			pendingNextIndex: savedNextIndex,
			pendingFlush: savedPendingFlush,
			reviewPass: savedReviewPass
		};
		const liveReview = DIL.useRef(null);
		const previousReview = liveReview.current;
		const review = state.generation_complete && previousReview !== null && previousReview.deckId === deckId && previousReview.pendingNextIndex === -1 && !previousReview.pendingFlush && previousReview.progress.revision > savedProgress.revision ? previousReview : savedReview;
		liveReview.current = review;
		const { progress, receivedCardOrder, pendingNextIndex, pendingFlush, reviewPass } = review;
		const currentReviewPass = state.revision >= reviewPass.revision || (state.deck_instance_id ?? null) !== reviewPass.deck_instance_id ? state : reviewPass;
		const newCards = (currentReviewPass.review_pass_kind == null || currentReviewPass.review_pass_kind === "full") && progress.card_order.length === receivedCardOrder.length ? state.card_order.filter((card$1) => !receivedCardOrder.includes(card$1)) : [];
		const cardOrder = [...progress.card_order, ...newCards.filter((card$1) => !progress.card_order.includes(card$1))];
		const waiting = pendingNextIndex >= cardOrder.length && !state.generation_complete;
		const pendingCardAvailable = pendingNextIndex >= 0 && pendingNextIndex < cardOrder.length;
		const resumeAfterAppend = progress.phase === "summary" && newCards.length > 0;
		const currentIndex = pendingCardAvailable ? pendingNextIndex : resumeAfterAppend ? progress.card_order.length : progress.current_index;
		const phase = state.phase === "error" ? "error" : !isMobile && !state.generation_complete && state.card_order.length < 2 && progress.answer_history.length === 0 ? "loading" : pendingNextIndex >= cardOrder.length && state.generation_complete ? "summary" : resumeAfterAppend ? "ready" : progress.phase;
		const flipped = pendingCardAvailable || resumeAfterAppend ? false : progress.flipped;
		const held = answerFeedback?.reveal;
		const showingMissedAnswer = held !== void 0 && held.deck === deckId && held.revision + 1 === progress.revision && hasMissedRevealHint && phase !== "error";
		const motionBusy = motionBusyRef.current || showingMissedAnswer;
		const visibleIndex = showingMissedAnswer ? held.index : currentIndex;
		const gradingDisabled = !showingMissedAnswer && (waiting || !canSave);
		const visibleCardWasMissed = showingMissedAnswer ? progress.answer_history.at(-1)?.was_missed : progress.missed_indices.includes(cardOrder[visibleIndex]);
		const visibleRevision = showingMissedAnswer ? held.revision : progress.revision;
		DIL.useEffect(() => {
			if ((phase !== "ready" || dismissed) && !showingMissedAnswer) {
				setAnswerFeedback(null);
				setSwipeProgress(0);
				handleInteractionChange(false);
			}
		}, [
			phase,
			dismissed,
			showingMissedAnswer,
			handleInteractionChange
		]);
		const currentProgress = {
			...progress,
			current_index: currentIndex,
			card_order: cardOrder,
			phase,
			flipped
		};
		const showHint = !showingMissedAnswer && !dismissed && phase === "ready" && currentIndex === 0 && !flipped && progress.answer_history.length === 0 && tapVisible;
		const hintLabels = (isMobile ? state.onboarding_mobile_labels : state.onboarding_web_labels) ?? [state.tap_to_flip_label];
		const cycleHint = showHint && hintLabels.length === 3 && typeof DIL.useNow === "function";
		const now = DIL.useNow?.(cycleHint || answerFeedback !== null || canSaveNow && pendingFlush, showingMissedAnswer ? 250 : answerFeedback ? 50 : 1e3) ?? 0;
		DIL.useEffect(() => {
			if (!answerFeedback) return;
			if (!DIL.useNow) setAnswerFeedback(null);
			else if (answerFeedback.startedAt === null) setAnswerFeedback({
				...answerFeedback,
				startedAt: now
			});
			else if (now - answerFeedback.startedAt >= (showingMissedAnswer ? MISSED_REVEAL_HOLD_MS : 240)) setAnswerFeedback(null);
		}, [
			answerFeedback,
			now,
			showingMissedAnswer
		]);
		const dragFeedback = Math.min(Math.abs(swipeProgress) / 10, 1);
		const leftFeedback = answerFeedback?.direction === "left" ? 1 : swipeProgress < 0 ? dragFeedback : 0;
		const rightFeedback = answerFeedback?.direction === "right" ? 1 : swipeProgress > 0 ? dragFeedback : 0;
		const flushStartedAt = DIL.useRef(null);
		const hintStartedAt = hintClock?.deck === hintDeck ? hintClock.startedAt : null;
		const hintStep = hintStartedAt === null ? 0 : Math.max(0, Math.floor((now - hintStartedAt) / 3e3));
		DIL.useEffect(() => {
			if (cycleHint && hintStartedAt === null) setHintClock({
				deck: hintDeck,
				startedAt: now
			});
		}, [
			cycleHint,
			now,
			hintStartedAt,
			hintDeck
		]);
		DIL.useEffect(() => {
			if (state.revision > progress.revision || progress.phase === "loading" && state.phase !== "loading") {
				pendingSaveRevision.current = null;
				setProgress(progressFromState(state));
				setReceivedCardOrder(state.card_order);
			} else if (newCards.length > 0) {
				setProgress(currentProgress);
				setReceivedCardOrder(state.card_order);
			}
		}, [state]);
		DIL.useEffect(() => {
			if (pendingNextIndex >= 0 && (pendingCardAvailable || state.generation_complete)) {
				setProgress(currentProgress);
				setPendingNextIndex(-1);
			}
		}, [
			pendingNextIndex,
			pendingCardAvailable,
			state.generation_complete
		]);
		DIL.useEffect(() => {
			if (!canSaveNow || !pendingFlush) {
				flushStartedAt.current = null;
				return;
			}
			if (flushStartedAt.current === null) flushStartedAt.current = now;
			if (typeof DIL.useNow === "function" && now - flushStartedAt.current < 5e3) return;
			flushStartedAt.current = null;
			setPendingFlush(false);
			persistProgress("learning_flashcards_save_progress", currentProgress);
		}, [
			canSaveNow,
			pendingFlush,
			now
		]);
		function commit(next, type, change) {
			if (!canSave) return;
			pendingSaveRevision.current = next.revision;
			if (sectionCompletionEnabled) next = {
				...next,
				learningStatus: next.missed_indices.length > 0 ? LearningWidgetStatus.Incorrect : LearningWidgetStatus.Unanswered,
				completion: {
					...state.completion,
					isComplete: false
				}
			};
			setProgress(next);
			if (change && appData.opGenui?.supportedClientActions?.includes("update_flashcard_progress")) GenUI.dispatchAction({
				handler: "client",
				type: "update_flashcard_progress",
				payload: {
					component_name: componentName,
					component_key: resolutionId,
					...change
				}
			});
			if (!canSaveNow || pendingFlush) setPendingFlush(true);
			else {
				setPendingFlush(false);
				persistProgress(type, next, change?.outcome === "unreviewed" ? void 0 : change?.card_id);
			}
		}
		function rateCard(direction, revealOnMiss$1 = false) {
			if (!canSave || waiting || showingMissedAnswer || phase !== "ready") return;
			if (revealOnMiss$1 && pendingSaveRevision.current === progress.revision + 1) return;
			setAnswerFeedback({
				direction,
				startedAt: revealOnMiss$1 ? Date.now() : null,
				...revealOnMiss$1 ? { reveal: {
					deck: deckId,
					index: currentIndex,
					revision: progress.revision
				} } : {}
			});
			setMotion({
				kind: "dismiss",
				direction
			});
			const cardIndex$1 = cardOrder[currentIndex];
			const ratedCardId = state.cards[cardIndex$1]?.id;
			const wasMissed = progress.missed_indices.includes(cardIndex$1);
			const missed = progress.missed_indices.filter((card$1) => card$1 !== cardIndex$1);
			if (direction === "left" && !wasMissed) missed.push(cardIndex$1);
			const last = currentIndex === cardOrder.length - 1;
			commit({
				...currentProgress,
				current_index: last ? currentIndex : currentIndex + 1,
				flipped: false,
				missed_indices: missed,
				answer_history: [...progress.answer_history, {
					current_index: currentIndex,
					flipped,
					was_missed: wasMissed,
					swipe_direction: direction
				}],
				phase: last && state.generation_complete ? "summary" : "ready",
				revision: progress.revision + 1
			}, "learning_flashcards_save_progress", ratedCardId ? {
				card_id: ratedCardId,
				outcome: missed.includes(cardIndex$1) ? "missed" : "known"
			} : void 0);
			setPendingNextIndex(last && !state.generation_complete ? currentIndex + 1 : -1);
			setDismissedHintDeck(hintDeck);
		}
		function undo() {
			if (!canSave) return;
			const last = progress.answer_history[progress.answer_history.length - 1];
			if (!last) return;
			setAnswerFeedback(null);
			const cardIndex$1 = cardOrder[last.current_index];
			const undoneCardId = state.cards[cardIndex$1]?.id;
			setMotion({
				kind: "restore",
				direction: last.swipe_direction ?? (progress.missed_indices.includes(cardIndex$1) ? "left" : "right")
			});
			const missed = last.was_missed != null ? [...progress.missed_indices.filter((card$1) => card$1 !== cardIndex$1), ...last.was_missed ? [cardIndex$1] : []] : last.missed_indices ?? [];
			commit({
				...currentProgress,
				current_index: last.current_index,
				flipped: last.flipped,
				missed_indices: missed,
				answer_history: progress.answer_history.filter((previousAnswer) => previousAnswer.current_index !== last.current_index),
				phase: "ready",
				revision: progress.revision + 1
			}, "learning_flashcards_save_progress", undoneCardId ? {
				card_id: undoneCardId,
				outcome: "unreviewed"
			} : void 0);
			setPendingNextIndex(-1);
			setDismissedHintDeck(hintDeck);
			setMenuNonce(menuNonce + 1);
		}
		function shuffle() {
			if (cardOrder.length < 2 || state.shuffle_orders.length === 0 || !canSaveNow || pendingFlush) return;
			setAnswerFeedback(null);
			setMotion(void 0);
			const reviewed = cardOrder.slice(0, currentIndex);
			let remaining = state.shuffle_orders[progress.shuffle_index % state.shuffle_orders.length].filter((card$1) => cardOrder.includes(card$1) && !reviewed.includes(card$1));
			if (remaining.length > 1 && remaining[0] === cardOrder[currentIndex]) remaining = [...remaining.slice(1), remaining[0]];
			commit({
				...currentProgress,
				card_order: [...reviewed, ...remaining],
				flipped: false,
				shuffle_index: progress.shuffle_index + 1,
				phase: "ready",
				revision: progress.revision + 1
			}, "learning_flashcards_shuffle");
			setDismissedHintDeck(hintDeck);
			setMenuNonce(menuNonce + 1);
		}
		const hasMissedCards = progress.missed_indices.length > 0;
		const discussMistakes = hasMissedCards && state.discuss_mistakes_label && state.discuss_mistakes_query;
		const measureMissedSummary = hasMissedCards && state.measure_missed_summary === true;
		const summaryKey = \`\${state.deck_instance_id ?? deckId ?? "legacy"}:\${currentReviewPass.review_pass_id ?? progress.revision}\`;
		const shownSummary = DIL.useRef(null);
		const lastDiscussionClick = DIL.useRef(null);
		const logMissedSummaryEvent = DIL.useCallback((action) => {
			if (!measureMissedSummary) return;
			const eventData = {
				deck_instance_id: state.deck_instance_id,
				review_pass_id: currentReviewPass.review_pass_id,
				missed_count: progress.missed_indices.length
			};
			if (shownSummary.current?.key !== summaryKey) {
				const missedDeckId = eventData.deck_instance_id;
				const passId = eventData.review_pass_id;
				const previous = shownSummary.current?.firstMissed;
				shownSummary.current = {
					key: summaryKey,
					firstMissed: previous?.deckId === missedDeckId ? previous : missedDeckId && passId ? {
						deckId: missedDeckId,
						passId,
						shownAt: Date.now(),
						missedCardIds: progress.missed_indices.map((index) => state.cards[index]?.id).filter((id) => id != null),
						rereviewLogged: false
					} : void 0
				};
				GenUI.logEvent?.({
					event_name: "chatgpt_learning_flashcards_missed_summary_shown",
					statsig_event_name: "flashcards_missed_summary_shown",
					event_data: eventData
				});
			}
			if (action) GenUI.logEvent?.({
				event_name: "chatgpt_learning_flashcards_missed_summary_action",
				statsig_event_name: "flashcards_missed_summary_action",
				event_data: {
					...eventData,
					action
				}
			});
		}, [
			measureMissedSummary,
			summaryKey,
			state.deck_instance_id,
			currentReviewPass.review_pass_id,
			progress.missed_indices,
			state.cards
		]);
		const logMissedSummaryShown = DIL.useCallback(() => logMissedSummaryEvent(), [logMissedSummaryEvent]);
		function discuss() {
			if (!discussMistakes || !canSaveNow || pendingFlush) return;
			const clickedAt = Date.now();
			const last = lastDiscussionClick.current;
			if (last?.key === summaryKey && clickedAt - last.time < 1e3) return;
			lastDiscussionClick.current = {
				key: summaryKey,
				time: clickedAt
			};
			logMissedSummaryEvent("discuss_mistakes");
			const questions = progress.missed_indices.map((index) => \`– \${state.cards[index].front}\`);
			GenUI.issueNewTurn(\`\${state.discuss_mistakes_query}\\n\\n\${questions.join("\\n")}\`, {
				append_to_current_leaf: true,
				followup_metadata: { message_submission_source: "flashcards_explain_missed" },
				event_name: "chatgpt_widget_action",
				event_data: {
					widget_affordance: "OPTION",
					widget_action_target: "discuss_mistakes",
					surface_location: "RESPONSE",
					content_reference_type: "learning_flashcards"
				}
			});
		}
		function restart(reviewMissed) {
			if (!canSaveNow || pendingFlush) return;
			logMissedSummaryEvent(reviewMissed ? "review_missed" : "restart");
			celebration.current = {
				completed: false,
				trigger: null
			};
			const nextCardOrder = reviewMissed ? progress.missed_indices : state.original_review_order.length > 0 ? state.original_review_order : state.original_order;
			setReceivedCardOrder(nextCardOrder);
			setMotion(void 0);
			setReviewPass({
				deck_instance_id: state.deck_instance_id ?? null,
				review_pass_id: state.deck_instance_id ? \`\${state.deck_instance_id}:\${progress.revision + 1}\` : null,
				review_pass_kind: reviewMissed ? "missed" : state.original_review_order.length > 0 && state.original_review_order.length < state.original_order.length ? "subset" : "full",
				revision: progress.revision + 1
			});
			commit({
				current_index: 0,
				flipped: false,
				missed_indices: [],
				answer_history: [],
				card_order: nextCardOrder,
				shuffle_index: 0,
				phase: "ready",
				revision: progress.revision + 1
			}, reviewMissed ? "learning_flashcards_review_missed" : "learning_flashcards_restart");
			setPendingNextIndex(-1);
		}
		const cardIndex = cardOrder[visibleIndex];
		const card = state.cards[cardIndex];
		const displayCard = state.display_cards[cardIndex];
		const hasCompleteDisplayCard = currentIndex >= 0 && currentIndex < cardOrder.length && cardIndex >= 0 && cardIndex < state.display_cards.length && displayCard.front.length > 0 && displayCard.back.length > 0;
		const cardId = card?.id ?? null;
		const cardInstanceId = state.card_instance_ids?.[cardIndex] ?? null;
		const cardViewIdentity = cardInstanceId ? \`instance:\${cardInstanceId}\` : cardId ? \`card:\${cardId}\` : null;
		const cardEventData = {
			analytics_version: 1,
			deck_id: state.library_file_id || state.deck_instance_id || null,
			deck_instance_id: state.deck_instance_id ?? null,
			library_file_id: state.library_file_id ?? null,
			deck_version: state.deck_version ?? null,
			review_pass_id: currentReviewPass.review_pass_id ?? null,
			pass_kind: currentReviewPass.review_pass_kind ?? null,
			card_id: cardId,
			card_instance_id: cardInstanceId,
			card_position: currentIndex + 1,
			card_number: currentIndex + 1,
			card_count: cardOrder.length,
			card_face: flipped ? "back" : "front",
			surface: "widget",
			source: "ui"
		};
		const logViewStarted = DIL.useCallback(() => GenUI.logEvent?.({
			event_name: "chatgpt_learning_flashcards_view_started",
			statsig_event_name: "chatgpt_learning_flashcards_view_started",
			event_data: { initial_phase: state.phase }
		}), [state.phase]);
		const logErrorPresented = DIL.useCallback(() => GenUI.logEvent?.({
			event_name: "chatgpt_learning_flashcards_error_presented",
			statsig_event_name: "chatgpt_learning_flashcards_error_presented",
			event_data: {}
		}), []);
		const logPresented = DIL.useCallback(() => GenUI.logEvent?.({
			event_name: "chatgpt_learning_flashcards_presented",
			statsig_event_name: "chatgpt_learning_flashcards_presented",
			event_data: {
				card_count: cardOrder.length,
				phase
			}
		}), [cardOrder.length, phase]);
		const logCardViewed = DIL.useCallback(() => GenUI.logEvent?.({
			event_name: "chatgpt_learning_flashcards_card_viewed",
			statsig_event_name: "chatgpt_learning_flashcards_card_viewed",
			event_data: cardEventData
		}), [
			state.library_file_id,
			state.deck_instance_id,
			state.deck_version,
			currentReviewPass.review_pass_id,
			currentReviewPass.review_pass_kind,
			cardId,
			cardInstanceId,
			currentIndex,
			cardOrder.length,
			flipped
		]);
		const shuffleAnimationActive = !state.reduced_motion && !!state.shuffle_phase && state.shuffle_revision === progress.revision && state.shuffle_primary_card != null && state.shuffle_secondary_card != null && progress.current_index + 1 < cardOrder.length;
		const canReportPresentation = cardOrder.length > 0 && (phase === "ready" && !waiting && hasCompleteDisplayCard || phase === "summary" && state.generation_complete && progress.answer_history.length === cardOrder.length);
		const canReportCardView = cardViewIdentity != null && phase === "ready" && !waiting && !motionBusy && state.interaction_state !== "restoring" && !shuffleAnimationActive && hasCompleteDisplayCard && cardOrder.every((index) => index >= 0 && index < state.cards.length && index < state.display_cards.length);
		const rawFace = (showingMissedAnswer || flipped ? card?.back : card?.front) ?? "";
		const audibleProgress = DIL.useRef(null);
		const cardHeight = !isMobile && large ? 240 : 180;
		const correctCount = cardOrder.length - progress.missed_indices.length;
		const summary = progress.missed_indices.length === 0 ? state.perfect_summary_label : correctCount * 2 < cardOrder.length ? state.low_score_summary_label : state.percentage_summary_labels[Math.round(correctCount * 100 / cardOrder.length)];
		const framed = !isMobile && phase !== "error";
		const reserveMissedRevealHintSpace = hasMissedRevealHint && (phase === "loading" || phase === "ready" || showingMissedAnswer);
		const supportedClientActions = appData.opGenui?.supportedClientActions ?? [];
		const showEdit = Boolean(state.library_file_id && card?.id) && supportedClientActions.includes("edit_flashcard");
		const showViewAll = Boolean(state.library_file_id) && supportedClientActions.includes("view_flashcards");
		const canOpenSavedDeck = Boolean(state.library_file_id) && canSaveNow && !pendingFlush && !waiting && !motionBusy;
		const celebration = DIL.useRef({
			completed: phase === "summary",
			trigger: null
		});
		const perfectReview = phase === "summary" && state.generation_complete && cardOrder.length > 0 && progress.answer_history.length === cardOrder.length && progress.missed_indices.length === 0;
		const celebrationTrigger = state.celebrations_enabled && !state.reduced_motion && perfectReview ? celebration.current.trigger ?? (celebration.current.completed ? null : String(progress.revision)) : null;
		DIL.useEffect(() => {
			celebration.current = {
				completed: celebration.current.completed || phase === "summary",
				trigger: celebrationTrigger
			};
		}, [phase, celebrationTrigger]);
		const pendingSaveRevision = DIL.useRef(null);
		DIL.useEffect(() => () => {
			pendingSaveRevision.current = null;
		}, [completionRevision]);
		DIL.useEffect(() => {
			if (!sectionCompletionEnabled || pendingSaveRevision.current !== progress.revision || !progress.completion?.isComplete) return;
			pendingSaveRevision.current = null;
			GenUI.dispatchWidgetClientAction?.({
				type: MARK_LEARNING_WIDGET_COMPLETED,
				payload: getLearningCompletionPayload(progress.completion?.composerFeedback, appData.opGenui?.supportedClientActions)
			});
		}, [progress, sectionCompletionEnabled]);
		const revealOnMiss = Boolean(hasMissedRevealHint && !flipped && manuallyFlippedDeck !== (deckId ?? null) && !progress.answer_history.some((answer) => answer.flipped));
		async function persistProgress(type, next, gradedCardId) {
			const firstMissed = shownSummary.current?.firstMissed;
			const passId = currentReviewPass.review_pass_id;
			const elapsed = firstMissed ? Date.now() - firstMissed.shownAt : -1;
			const isMissedCardRereview = gradedCardId !== void 0 && firstMissed !== void 0 && !firstMissed.rereviewLogged && firstMissed.deckId === state.deck_instance_id && passId != null && passId !== firstMissed.passId && elapsed >= 0 && elapsed <= 1800 * 1e3 && firstMissed.missedCardIds.includes(gradedCardId);
			try {
				const result = await saveProgress(type, next);
				const accepted = result?.status === "success" && result.response?.status === "success" && result.response.data?.accepted === true;
				const loggedSummary = shownSummary.current;
				if (accepted && isMissedCardRereview && loggedSummary?.firstMissed?.deckId === firstMissed.deckId && loggedSummary.firstMissed.passId === firstMissed.passId && !loggedSummary.firstMissed.rereviewLogged) {
					shownSummary.current = {
						...loggedSummary,
						firstMissed: {
							...firstMissed,
							rereviewLogged: true
						}
					};
					GenUI.logEvent?.({
						event_name: "chatgpt_learning_flashcards_missed_card_rereviewed",
						statsig_event_name: "flashcards_missed_card_rereviewed",
						event_data: {
							deck_instance_id: firstMissed.deckId,
							missed_review_pass_id: firstMissed.passId,
							review_pass_id: passId,
							card_id: gradedCardId
						}
					});
				}
				if (!sectionCompletionEnabled || !state.generation_complete || pendingSaveRevision.current !== next.revision || !accepted || next.phase !== "summary" || next.card_order.length === 0 || next.answer_history.length !== next.card_order.length || next.missed_indices.length > 0) return;
				setProgress({
					...next,
					learningStatus: LearningWidgetStatus.Correct,
					completion: {
						...state.completion,
						isComplete: true,
						composerFeedback: getLearningComposerFeedback(LearningWidgetStatus.Correct)
					}
				});
			} catch {}
		}
		function flip(flipTrigger) {
			if (waiting || motionBusy) return;
			if (hasMissedRevealHint) setManuallyFlippedDeck(deckId ?? null);
			if (!flipped) GenUI.dispatchAction({
				handler: "client",
				type: "log_event",
				payload: {
					event_name: "chatgpt_learning_flashcards_card_flipped",
					statsig_event_name: "chatgpt_learning_flashcards_card_flipped",
					event_data: {
						...cardEventData,
						flip_trigger: flipTrigger
					}
				}
			});
			setMotion(void 0);
			setProgress({
				...currentProgress,
				flipped: !flipped
			});
			setDismissedHintDeck(hintDeck);
		}
		function openSavedDeck(view) {
			if (!canOpenSavedDeck || (view === "edit" ? !showEdit || !card?.id : !showViewAll)) return;
			GenUI.dispatchAction({
				handler: "client",
				type: view === "edit" ? "edit_flashcard" : "view_flashcards",
				payload: {
					event_data: cardEventData,
					library_file_id: state.library_file_id,
					library_artifact_type: "flashcards",
					view,
					...resolutionId ? {
						component_key: resolutionId,
						component_name: componentName
					} : {},
					...view === "edit" && card ? {
						active_card_id: card.id,
						front: card.front,
						back: card.back
					} : {}
				}
			});
			setDismissedHintDeck(hintDeck);
			setMenuNonce(menuNonce + 1);
		}
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%",
			align: "center",
			...GenUI.logEvent ? { onVisible: logViewStarted } : {}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: framed ? "100%" : MAX_FLASHCARD_WIDTH,
			align: "center",
			background: framed ? panelBackground : "transparent",
			radius: framed ? "4xl" : "none",
			padding: framed ? {
				top: reserveMissedRevealHintSpace ? 0 : 10,
				x: 12,
				bottom: 7
			} : 0
		}, reserveMissedRevealHintSpace ? /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: 361,
			height: "2.5rem",
			justify: "center",
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, showingMissedAnswer ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("box", {
			height: 0,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("text-only-markdown", { includeMath: true }, displayCard?.back ?? rawFace)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			textAlign: "center",
			maxLines: 2
		}, state.missed_reveal_hint)) : null) : null, /* @__PURE__ */ __dil.jsx("celebration", { trigger: celebrationTrigger }), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: MAX_FLASHCARD_WIDTH,
			gap: 3
		}, phase === "error" ? !dismissed && /* @__PURE__ */ __dil.jsx("box", {
			key: "flashcard-error",
			width: "100%",
			maxWidth: 520,
			border: {
				size: 1,
				color: "default"
			},
			radius: "3xl",
			background: cardBackground,
			padding: 5,
			gap: 4,
			...GenUI.logEvent ? { onVisible: logErrorPresented } : {}
		}, state.error_title ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			minWidth: 20,
			height: 24,
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "exclamation-mark-circle",
			size: "xl",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "primary"
		}, state.error_title)), /* @__PURE__ */ __dil.jsx("box", { padding: { left: 8 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.error_label))) : /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			ariaLive: "polite",
			ariaAtomic: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "secondary"
		}, state.error_label)), state.error_operation !== "open" && /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			wrap: "wrap"
		}, state.retry_query && /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				loadingBehavior: "none",
				payload: {
					query: state.retry_query,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: "OPTION",
						widget_action_target: state.error_operation === "update" ? "flashcards_open" : "flashcards_generation",
						widget_action_value: state.error_operation === "update" ? "view" : "retry",
						surface_location: "RESPONSE",
						content_reference_type: "learning_flashcards"
					}
				}
			})
		}, state.retry_label), /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "ghost",
			onClick: () => setDismissed(true)
		}, state.dismiss_label))) : phase === "loading" ? /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 4,
			padding: { bottom: 3 }
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: cardHeight,
			align: isMobile ? void 0 : "center",
			justify: isMobile ? void 0 : "center",
			radius: 32,
			border: {
				size: .5,
				color: "strong"
			},
			background: cardBackground,
			padding: 6,
			label: state.loading_label,
			duration: 3e3,
			reducedMotion: state.reduced_motion
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "secondary",
			textAlign: isMobile ? void 0 : "center"
		}, state.loading_label)), /* @__PURE__ */ __dil.jsx("box", {
			height: 60,
			ariaHidden: true
		})) : /* @__PURE__ */ __dil.jsx("box", {
			key: "flashcard-presentation",
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: canReportPresentation,
				onVisible: logPresented
			} : {}
		}, phase === "summary" && !showingMissedAnswer ? /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 4,
			padding: { bottom: 3 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minHeight: cardHeight,
			align: "center",
			justify: "center",
			padding: 5,
			border: {
				size: .5,
				color: "strong"
			},
			background: cardBackground,
			radius: 32
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "center",
			justify: "center",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold",
			textAlign: "center"
		}, summary), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "center",
			gap: 6,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			ariaLabel: state.missed_count_labels[progress.missed_indices.length]
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: "flashcard-summary-missed-indicator",
			size: 22,
			align: "center",
			justify: "center",
			radius: "full",
			background: "#EE7C37",
			...GenUI.logEvent && measureMissedSummary ? {
				onVisibleWhen: canSave && canSaveNow && !pendingFlush,
				onVisibleKey: summaryKey,
				onVisible: logMissedSummaryShown
			} : {}
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "x",
			size: "xs",
			color: "white"
		})), /* @__PURE__ */ __dil.jsx("text", { size: "xl" }, progress.missed_indices.length)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			ariaLabel: state.correct_count_labels[correctCount]
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 22,
			align: "center",
			justify: "center",
			radius: "full",
			background: "#04B84C"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xs",
			color: "white"
		})), /* @__PURE__ */ __dil.jsx("text", { size: "xl" }, correctCount))))), /* @__PURE__ */ __dil.jsx("row", {
			key: "flashcard-summary-actions",
			width: "100%",
			wrap: measureMissedSummary ? "wrap" : void 0,
			minHeight: 60,
			align: "center",
			justify: "between",
			gap: 2,
			padding: "10px"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "outline",
			disabled: !canSave || Boolean(discussMistakes) && pendingFlush,
			onClick: discussMistakes ? discuss : () => restart(false)
		}, discussMistakes ? state.discuss_mistakes_label : state.reset_label), progress.missed_indices.length > 0 ? /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			disabled: !canSave,
			onClick: () => restart(true)
		}, state.retry_missed_labels[progress.missed_indices.length]) : /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				loadingBehavior: "none",
				payload: {
					query: state.more_flashcards_query,
					append_to_current_leaf: true,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: "OPTION",
						widget_action_target: "more_flashcards",
						surface_location: "RESPONSE",
						content_reference_type: "learning_flashcards"
					}
				}
			})
		}, state.more_flashcards_label))) : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 4,
			padding: { bottom: 3 },
			align: compactFlipToolbar && !isMobile ? "center" : void 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: "flashcard-card-view",
			width: "100%",
			height: cardHeight,
			...GenUI.logEvent ? {
				onVisibleWhen: canReportCardView,
				onVisibleKey: \`\${currentReviewPass.review_pass_id ?? "legacy"}-\${cardViewIdentity ?? "legacy"}\`,
				onVisible: logCardViewed
			} : {}
		}, /* @__PURE__ */ __dil.jsx("flashcard-flip", {
			activeKey: \`\${cardIndex}:\${visibleRevision}\`,
			isMobile,
			faceBackground: desktopCardBackground,
			onboardingStep: cycleHint && hintStep < 3 ? hintStep : void 0,
			disabled: waiting || showingMissedAnswer,
			reducedMotion: state.reduced_motion,
			shuffleKey: progress.shuffle_index,
			flipped: showingMissedAnswer || flipped,
			dismissDirection: motion?.kind === "dismiss" ? motion.direction : void 0,
			restoreDirection: motion?.kind === "restore" ? motion.direction : void 0,
			onSwipeLeft: canSave && !showingMissedAnswer ? () => rateCard("left") : void 0,
			onSwipeRight: canSave && !showingMissedAnswer ? () => rateCard("right") : void 0,
			onSwipeProgress: setSwipeProgress,
			onInteractionChange: handleInteractionChange
		}, [
			/* @__PURE__ */ __dil.jsx(FlashcardFace, {
				key: "question",
				background: cardBackground,
				face: displayCard?.front ?? card?.front ?? "",
				rawFace: card?.front ?? "",
				height: cardHeight,
				label: state.flip_to_back_label,
				reducedMotion: state.reduced_motion,
				disabled: waiting,
				onClick: waiting || motionBusy ? void 0 : () => flip("card_face"),
				hint: showHint ? hintLabels[hintStep % 3] ?? state.tap_to_flip_label : void 0
			}),
			/* @__PURE__ */ __dil.jsx(FlashcardFace, {
				key: "answer",
				background: cardBackground,
				source: appData.opGenui?.supportsStudyFileCitations && !showHint && card?.id ? state.study_sources?.[card.id] : void 0,
				face: displayCard?.back ?? card?.back ?? "",
				rawFace: card?.back ?? "",
				back: true,
				height: cardHeight,
				label: state.flip_to_front_label,
				disabled: waiting,
				onClick: waiting || motionBusy ? void 0 : () => flip("card_face")
			}),
			...cardOrder.slice(visibleIndex + 1, visibleIndex + 3).map((index) => /* @__PURE__ */ __dil.jsx(FlashcardFace, {
				key: index,
				background: cardBackground,
				face: state.display_cards[index]?.front ?? state.cards[index]?.front ?? "",
				rawFace: state.cards[index]?.front ?? "",
				height: cardHeight
			}))
		])), /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: compactFlipToolbar && !isMobile ? 240 : void 0,
			height: 60,
			align: "center",
			justify: "between",
			gap: flipButtonLabel ? 0 : isMobile ? "6px" : "12px",
			padding: {
				x: compactFlipToolbar ? "2px" : "10px",
				y: "10px"
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			...toolbarSide,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			tabularNums: true
		}, state.mobile_progress_template.replaceAll("__LEARNING_CURRENT__", String(visibleIndex + 1)).replaceAll("__LEARNING_TOTAL__", String(cardOrder.length)))), /* @__PURE__ */ __dil.jsx("row", {
			flex: compactFlipToolbar ? "0 1 156px" : flipButtonLabel ? "0 1 auto" : void 0,
			minWidth: compactFlipToolbar ? 120 : void 0,
			justify: compactFlipToolbar ? "center" : void 0,
			align: "center",
			gap: compactFlipToolbar ? 1 : 2,
			ariaDisabled: motionBusy
		}, /* @__PURE__ */ __dil.jsx(FlashcardAnswerButton, {
			isMobile,
			compact: compactFlipToolbar,
			borderColor: answerButtonBorderColor,
			icon: "x",
			feedback: leftFeedback,
			disabled: gradingDisabled,
			ariaDisabled: showingMissedAnswer,
			label: visibleCardWasMissed ? state.unmark_missed_label : state.mark_missed_label,
			onClick: motionBusy ? void 0 : () => rateCard("left", revealOnMiss)
		}), flipButtonLabel ? /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 1 auto",
			minWidth: compactFlipToolbar ? 60 : 68,
			gap: 0
		}, compactFlipToolbar && /* @__PURE__ */ __dil.jsx("box", {
			width: 68,
			maxWidth: "100%",
			height: 0
		}), /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			label: flipButtonLabel,
			size: "lg",
			variant: "outline",
			disabled: waiting || showingMissedAnswer,
			onClick: () => flip("flip_button")
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			color: "inherit",
			size: "sm",
			weight: "medium",
			truncate: true,
			width: "100%"
		}, flipButtonLabel))) : null, /* @__PURE__ */ __dil.jsx(FlashcardAnswerButton, {
			isMobile,
			compact: compactFlipToolbar,
			borderColor: answerButtonBorderColor,
			icon: "check",
			feedback: rightFeedback,
			disabled: gradingDisabled,
			ariaDisabled: showingMissedAnswer,
			label: visibleIndex === cardOrder.length - 1 && state.generation_complete ? state.finish_label : state.mark_correct_label,
			onClick: motionBusy ? void 0 : () => rateCard("right")
		})), /* @__PURE__ */ __dil.jsx("row", {
			...toolbarSide,
			align: "center",
			justify: "end",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx(SpeechSynthesizer, {
			key: \`\${cardIndex}:\${visibleRevision}:\${showingMissedAnswer || flipped}\`,
			text: rawFace,
			source: "flashcards",
			disabled: waiting || showingMissedAnswer,
			logging: { play_requested: {
				event_name: "chatgpt_learning_flashcards_audio_play_requested",
				statsig_event_name: "chatgpt_learning_flashcards_audio_play_requested",
				event_data: cardEventData
			} },
			controls: (speech) => {
				if (speech.available) audibleProgress.current = progress;
				else if (audibleProgress.current === progress) audibleProgress.current = null;
				if (!audibleProgress.current || !rawFace.trim()) return null;
				return /* @__PURE__ */ __dil.jsx("pressable", {
					...compactFlipToolbar ? {
						width: 36,
						height: 36,
						flex: "0 1 36px",
						minWidth: 24
					} : { size: 36 },
					padding: 0,
					align: "center",
					justify: "center",
					radius: "full",
					disabled: waiting || showingMissedAnswer || !speech.available,
					dimWhenDisabled: waiting,
					ariaLabel: speech.status !== "idle" ? state.stop_audio_label : speech.error ? state.retry_audio_label : state.play_audio_label,
					onClick: () => {
						setDismissedHintDeck(hintDeck);
						if (speech.status === "idle") speech.play();
						else speech.stop();
					}
				}, speech.status === "loading" ? /* @__PURE__ */ __dil.jsx("loading-indicator", {
					size: "xl",
					color: "secondary"
				}) : /* @__PURE__ */ __dil.jsx("icon", {
					name: speech.status === "playing" ? "stop-circle-filled" : "sound-on-read-out-loud-speaker",
					size: "2xl",
					color: speech.status === "playing" ? "primary" : "secondary"
				}));
			}
		}), isMobile && appData.opGenui?.supportsAnchoredPopover !== true ? /* @__PURE__ */ __dil.jsx(MobileFlashcardMenu, {
			key: menuNonce,
			compactFlipToolbar,
			ariaLabel: state.overflow_label,
			pill: !flipButtonLabel,
			actions: [
				{
					id: "undo",
					title: state.undo_label,
					disabled: !canSave || motionBusy || progress.answer_history.length === 0
				},
				...showEdit ? [{
					id: "edit",
					title: state.edit_card_label,
					disabled: !canOpenSavedDeck
				}] : [],
				{
					id: "shuffle",
					title: state.shuffle_label,
					disabled: cardOrder.length < 2 || !canSaveNow || motionBusy || pendingFlush
				},
				...showViewAll ? [{
					id: "view_all",
					title: state.view_all_label,
					disabled: !canOpenSavedDeck
				}] : []
			],
			onSelect: (id) => {
				if (id === "undo") undo();
				else if (id === "shuffle") shuffle();
				else if (id === "edit") openSavedDeck("edit");
				else if (id === "view_all") openSavedDeck("grid");
			}
		}) : /* @__PURE__ */ __dil.jsx("box", {
			key: menuNonce,
			flex: compactFlipToolbar ? "0 1 36px" : void 0,
			minWidth: compactFlipToolbar ? 24 : void 0
		}, /* @__PURE__ */ __dil.jsx("popover", null, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => setDismissedHintDeck(hintDeck) }, /* @__PURE__ */ __dil.jsx("box", {
			...compactFlipToolbar ? {
				width: "100%",
				height: 36
			} : { size: 36 },
			align: "center",
			justify: "center",
			radius: "full",
			ariaLabel: state.overflow_label
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "dots-horizontal",
			size: "xl",
			color: "secondary"
		}))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "end",
			side: "bottom",
			sideOffset: 4,
			width: 180
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: 1
		}, progress.answer_history.length > 0 && /* @__PURE__ */ __dil.jsx("pressable", {
			height: 36,
			width: "100%",
			padding: {
				x: 2,
				y: 0
			},
			radius: "md",
			ariaLabel: state.undo_label,
			disabled: !canSave || motionBusy,
			onClick: undo
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "undo",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.undo_label))), showEdit && /* @__PURE__ */ __dil.jsx("pressable", {
			height: 36,
			width: "100%",
			padding: {
				x: 2,
				y: 0
			},
			radius: "md",
			ariaLabel: state.edit_card_label,
			disabled: !canOpenSavedDeck,
			onClick: () => openSavedDeck("edit")
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "pencil",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.edit_card_label))), /* @__PURE__ */ __dil.jsx("pressable", {
			height: 36,
			width: "100%",
			padding: {
				x: 2,
				y: 0
			},
			radius: "md",
			ariaLabel: state.shuffle_label,
			disabled: cardOrder.length < 2 || !canSaveNow || motionBusy || pendingFlush,
			onClick: shuffle
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "shuffle",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.shuffle_label))), showViewAll && /* @__PURE__ */ __dil.jsx("pressable", {
			height: 36,
			width: "100%",
			padding: {
				x: 2,
				y: 0
			},
			radius: "md",
			ariaLabel: state.view_all_label,
			disabled: !canOpenSavedDeck,
			onClick: () => openSavedDeck("grid")
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "grid",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.view_all_label))))))))))))));
	}

//#endregion
//#region UpdateLearningFlashcards.dil.tsx
	function UpdateLearningFlashcards(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("UpdateLearningFlashcards", DIL.useAppData((appData) => appData.learningSectionCompletionEnabled === true) && props.__resolutionId ? {
			...props,
			__state: void 0
		} : props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(FlashcardsView, {
			state,
			componentName: "UpdateLearningFlashcards",
			resolutionId: props.__resolutionId ?? componentDataKey("UpdateLearningFlashcards", props)
		});
	}

//#endregion
return UpdateLearningFlashcards;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=update-learning-flashcards-a611f4f0640c.js.map