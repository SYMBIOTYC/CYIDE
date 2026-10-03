import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region ../SpeechSynthesizer.dil.tsx
	const unavailable = {
		available: false,
		status: "idle",
		error: null,
		play: () => {},
		stop: () => {}
	};
	const { useSpeechSynthesizer = () => unavailable } = DIL;
	function SpeechSynthesizer({ controls, disabled = false, logging, ...source }) {
		const speech = useSpeechSynthesizer(source, logging);
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
//#region ../internal/text-only-markdown.dil.tsx
/** Host-rendered text formatting, without link navigation or image loading. */
	function TextOnlyMarkdown({ children }) {
		return /* @__PURE__ */ __dil.jsx("text-only-markdown", null, children);
	}

//#endregion
//#region internal/learning-flashcards.dil.tsx
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
		GenUI.dispatchAction({
			handler: "server",
			loadingBehavior: "none",
			type,
			payload: progress
		});
	}
	function FlashcardAnswerButton({ isMobile, disabled, label, icon, onClick }) {
		if (isMobile) return /* @__PURE__ */ __dil.jsx("pressable", {
			size: 40,
			padding: 0,
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: "subtle"
			},
			radius: "full",
			disabled,
			ariaLabel: label,
			onClick
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "2xl"
		}));
		return /* @__PURE__ */ __dil.jsx("tooltip", { content: disabled ? void 0 : label }, /* @__PURE__ */ __dil.jsx("button", {
			size: "xl",
			variant: "outline",
			color: "primary",
			uniform: true,
			pill: true,
			disabled,
			label,
			onClick
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: icon,
			size: "2xl"
		})));
	}
	function FlashcardsView({ state }) {
		const appData = DIL.useAppData();
		const canSave = state.generation_complete && (appData.opGenui?.componentResults === void 0 || appData.opGenui.nativeServerActions?.ready === true);
		const isMobile = DIL.useIsMobile();
		const large = DIL.useBreakpoint("lg");
		const [progress, setProgress] = DIL.useState(progressFromState(state));
		const [expanded, setExpanded] = DIL.useState(state.expanded);
		const [dismissed, setDismissed] = DIL.useState(state.dismissed);
		const hintDeck = state.deck_instance_id ?? null;
		const [dismissedHintDeck, setDismissedHintDeck] = DIL.useState();
		const tapVisible = state.tap_to_flip_visible && dismissedHintDeck !== hintDeck;
		const [pendingNextIndex, setPendingNextIndex] = DIL.useState(-1);
		const [pendingFlush, setPendingFlush] = DIL.useState(false);
		const [menuNonce, setMenuNonce] = DIL.useState(0);
		const [reviewPass, setReviewPass] = DIL.useState({
			deck_instance_id: state.deck_instance_id ?? null,
			review_pass_id: state.review_pass_id ?? null,
			review_pass_kind: state.review_pass_kind ?? null,
			revision: state.revision
		});
		const currentReviewPass = state.revision >= reviewPass.revision || (state.deck_instance_id ?? null) !== reviewPass.deck_instance_id ? state : reviewPass;
		const cardOrder = [...progress.card_order, ...state.card_order.filter((card$1) => !progress.card_order.includes(card$1))];
		const waiting = pendingNextIndex >= cardOrder.length && !state.generation_complete;
		const currentIndex = pendingNextIndex >= 0 && pendingNextIndex < cardOrder.length ? pendingNextIndex : progress.current_index;
		const phase = pendingNextIndex >= cardOrder.length && state.generation_complete ? "summary" : progress.phase;
		const flipped = pendingNextIndex >= 0 && pendingNextIndex < cardOrder.length ? false : progress.flipped;
		const currentProgress = {
			...progress,
			current_index: currentIndex,
			card_order: cardOrder,
			phase,
			flipped
		};
		const showHint = expanded && phase === "ready" && currentIndex === 0 && !flipped && progress.answer_history.length === 0 && tapVisible;
		const hintLabels = (isMobile ? state.onboarding_mobile_labels : state.onboarding_web_labels) ?? [state.tap_to_flip_label];
		const cycleHint = showHint && hintLabels.length === 3;
		const now = DIL.useNow?.(cycleHint) ?? 0;
		const [hintClock, setHintClock] = DIL.useState(null);
		const hintStartedAt = hintClock?.deck === hintDeck ? hintClock.startedAt : null;
		const hintStep = hintStartedAt === null ? 0 : Math.max(0, Math.floor((now - hintStartedAt) / 3e3)) % 3;
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
			if (state.revision > progress.revision || progress.phase === "loading" && state.phase !== "loading") setProgress(progressFromState(state));
		}, [state]);
		DIL.useEffect(() => {
			if (pendingNextIndex >= 0 && pendingNextIndex < cardOrder.length) {
				setProgress(currentProgress);
				setPendingNextIndex(-1);
			}
		}, [pendingNextIndex, cardOrder.length]);
		function commit(next, type) {
			if (!canSave) return;
			setProgress(next);
			setPendingFlush(false);
			saveProgress(type, next);
		}
		function answer(direction) {
			if (!canSave || waiting || phase !== "ready") return;
			const cardIndex$1 = cardOrder[currentIndex];
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
			}, "learning_flashcards_save_progress");
			setPendingNextIndex(last && !state.generation_complete ? currentIndex + 1 : -1);
			setDismissedHintDeck(hintDeck);
		}
		function undo() {
			if (!canSave) return;
			const last = progress.answer_history[progress.answer_history.length - 1];
			if (!last) return;
			const cardIndex$1 = cardOrder[last.current_index];
			const missed = last.was_missed != null ? [...progress.missed_indices.filter((card$1) => card$1 !== cardIndex$1), ...last.was_missed ? [cardIndex$1] : []] : last.missed_indices ?? [];
			commit({
				...currentProgress,
				current_index: last.current_index,
				flipped: last.flipped,
				missed_indices: missed,
				answer_history: progress.answer_history.filter((previousAnswer) => previousAnswer.current_index !== last.current_index),
				phase: "ready",
				revision: progress.revision + 1
			}, "learning_flashcards_save_progress");
			setPendingNextIndex(-1);
			setDismissedHintDeck(hintDeck);
			setMenuNonce(menuNonce + 1);
		}
		function shuffle() {
			if (cardOrder.length < 2 || !canSave || pendingFlush) return;
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
		function restart(reviewMissed) {
			if (!canSave) return;
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
				card_order: reviewMissed ? progress.missed_indices : state.original_review_order.length > 0 ? state.original_review_order : state.original_order,
				shuffle_index: 0,
				phase: "ready",
				revision: progress.revision + 1
			}, reviewMissed ? "learning_flashcards_review_missed" : "learning_flashcards_restart");
			setPendingNextIndex(-1);
		}
		const cardIndex = cardOrder[currentIndex];
		const card = state.cards[cardIndex];
		const displayCard = state.display_cards[cardIndex];
		const hasCompleteDisplayCard = currentIndex >= 0 && currentIndex < cardOrder.length && cardIndex >= 0 && cardIndex < state.display_cards.length && displayCard.front.length > 0 && displayCard.back.length > 0;
		const cardId = card?.id ?? null;
		const cardInstanceId = state.card_instance_ids?.[cardIndex] ?? null;
		const cardViewIdentity = cardInstanceId ? \`instance:\${cardInstanceId}\` : cardId ? \`card:\${cardId}\` : null;
		const shuffleAnimationActive = !state.reduced_motion && !!state.shuffle_phase && state.shuffle_revision === progress.revision && state.shuffle_primary_card != null && state.shuffle_secondary_card != null && progress.current_index + 1 < cardOrder.length;
		const canReportPresentation = cardOrder.length > 0 && (phase === "ready" && !waiting && hasCompleteDisplayCard || phase === "summary" && state.generation_complete && progress.answer_history.length === cardOrder.length);
		const canReportCardView = cardViewIdentity != null && phase === "ready" && !waiting && state.interaction_state !== "restoring" && !shuffleAnimationActive && hasCompleteDisplayCard && cardOrder.every((index) => index >= 0 && index < state.cards.length && index < state.display_cards.length);
		const face = flipped ? displayCard?.back : displayCard?.front;
		const rawFace = (flipped ? card?.back : card?.front) ?? "";
		const singleCharacterFace = Array.from(rawFace.trim()).length === 1;
		const listFace = /(^|\\n)[ ]{0,3}([-+*]|[0-9]+[.)])[ ]+/.test(rawFace);
		const cardHeight = !isMobile && large ? 240 : 180;
		const correctCount = cardOrder.length - progress.missed_indices.length;
		const summary = progress.missed_indices.length === 0 ? state.perfect_summary_label : correctCount * 2 < cardOrder.length ? state.low_score_summary_label : state.percentage_summary_labels[Math.round(correctCount * 100 / cardOrder.length)];
		const framed = !isMobile && expanded && phase !== "error";
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%",
			align: "center",
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "chatgpt_learning_flashcards_view_started",
				statsig_event_name: "chatgpt_learning_flashcards_view_started",
				event_data: { initial_phase: state.phase }
			}) } : {}
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: framed ? "100%" : 361,
			align: "center",
			background: framed ? {
				light: "surface-secondary",
				dark: "gray-50"
			} : "transparent",
			radius: framed ? "4xl" : "none",
			padding: framed ? {
				top: 10,
				x: 12,
				bottom: 7
			} : 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: 361,
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
			background: "surface",
			padding: 5,
			gap: 4,
			...GenUI.logEvent ? { onVisible: () => GenUI.logEvent?.({
				event_name: "chatgpt_learning_flashcards_error_presented",
				statsig_event_name: "chatgpt_learning_flashcards_error_presented",
				event_data: {}
			}) } : {}
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
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				loadingBehavior: "none",
				payload: {
					query: state.retry_query,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: "OPTION",
						widget_action_target: "flashcards_generation",
						widget_action_value: "retry",
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
			padding: expanded ? { bottom: 3 } : 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			minHeight: cardHeight,
			align: isMobile ? void 0 : "center",
			justify: isMobile ? void 0 : "center",
			radius: 32,
			border: {
				size: .5,
				color: "strong"
			},
			background: {
				light: "surface-tertiary",
				dark: "surface"
			},
			padding: 6,
			role: "status",
			ariaLabel: state.loading_label
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "secondary",
			textAlign: isMobile ? void 0 : "center"
		}, state.loading_label)), expanded && /* @__PURE__ */ __dil.jsx("box", {
			height: 60,
			ariaHidden: true
		})) : !expanded ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			minHeight: 96,
			padding: 4,
			radius: 32,
			border: {
				size: 1,
				color: "default"
			},
			background: "surface",
			ariaLabel: state.open_label,
			onClick: () => setExpanded(true)
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			maxLines: 2
		}, state.title), /* @__PURE__ */ __dil.jsx("caption", {
			size: "sm",
			color: "secondary"
		}, state.open_label))) : /* @__PURE__ */ __dil.jsx("box", {
			key: "flashcard-presentation",
			width: "100%",
			...GenUI.logEvent ? {
				onVisibleWhen: canReportPresentation,
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_learning_flashcards_presented",
					statsig_event_name: "chatgpt_learning_flashcards_presented",
					event_data: {
						card_count: cardOrder.length,
						phase
					}
				})
			} : {}
		}, phase === "summary" ? /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			height: cardHeight,
			align: "center",
			justify: "center",
			padding: 5,
			border: {
				size: .5,
				color: "strong"
			},
			background: "surface",
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
			size: 22,
			align: "center",
			justify: "center",
			radius: "full",
			background: "#EE7C37"
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
			width: "100%",
			minHeight: 57,
			align: "center",
			justify: "between",
			gap: 2,
			padding: "10px"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			variant: "outline",
			disabled: !canSave,
			onClick: () => restart(false)
		}, state.reset_label), progress.missed_indices.length > 0 ? /* @__PURE__ */ __dil.jsx("button", {
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
			padding: { bottom: 3 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: \`flashcard-card-view-\${currentReviewPass.review_pass_id ?? "legacy"}-\${cardViewIdentity ?? "legacy"}\`,
			width: "100%",
			height: cardHeight,
			...GenUI.logEvent ? {
				onVisibleWhen: canReportCardView,
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_learning_flashcards_card_viewed",
					statsig_event_name: "chatgpt_learning_flashcards_card_viewed",
					event_data: {
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
					}
				})
			} : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			height: cardHeight,
			padding: {
				x: 5,
				y: 5
			},
			radius: 32,
			border: {
				size: .5,
				color: "subtle"
			},
			background: "surface",
			disabled: waiting,
			ariaLabel: flipped ? state.flip_to_front_label : state.flip_to_back_label,
			onClick: () => {
				if (waiting) return;
				if (!flipped) GenUI.dispatchAction({
					handler: "client",
					type: "log_event",
					payload: {
						event_name: "chatgpt_learning_flashcards_card_flipped",
						statsig_event_name: "chatgpt_learning_flashcards_card_flipped",
						event_data: {
							card_count: cardOrder.length,
							card_number: currentIndex + 1
						}
					}
				});
				setProgress({
					...currentProgress,
					flipped: !flipped
				});
				setDismissedHintDeck(hintDeck);
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			gap: 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minHeight: 0,
			justify: listFace || flipped && rawFace.includes("\\n") ? "start" : "center",
			gap: 0
		}, singleCharacterFace ? /* @__PURE__ */ __dil.jsx("title", {
			size: "3xl",
			weight: "normal",
			textAlign: "center"
		}, face) : /* @__PURE__ */ __dil.jsx(TextOnlyMarkdown, null, face ?? "")), showHint && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			textAlign: "center"
		}, hintLabels[hintStep] ?? state.tap_to_flip_label)))), /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			height: 60,
			align: "center",
			justify: "between",
			gap: isMobile ? "6px" : "12px",
			padding: {
				x: "10px",
				y: "10px"
			}
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			tabularNums: true
		}, state.mobile_progress_template.replaceAll("__LEARNING_CURRENT__", String(currentIndex + 1)).replaceAll("__LEARNING_TOTAL__", String(cardOrder.length)))), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx(FlashcardAnswerButton, {
			isMobile,
			icon: "x",
			disabled: waiting || !canSave,
			label: progress.missed_indices.includes(cardOrder[currentIndex]) ? state.unmark_missed_label : state.mark_missed_label,
			onClick: () => answer("left")
		}), /* @__PURE__ */ __dil.jsx(FlashcardAnswerButton, {
			isMobile,
			icon: "check",
			disabled: waiting || !canSave,
			label: currentIndex === cardOrder.length - 1 && state.generation_complete ? state.finish_label : state.mark_correct_label,
			onClick: () => answer("right")
		})), /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			align: "center",
			justify: "end",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx(SpeechSynthesizer, {
			key: \`\${cardOrder[currentIndex]}:\${progress.revision}:\${flipped}\`,
			text: rawFace,
			source: "flashcards",
			disabled: waiting,
			controls: (speech) => speech.available ? /* @__PURE__ */ __dil.jsx("pressable", {
				size: 36,
				padding: 0,
				align: "center",
				justify: "center",
				radius: "full",
				disabled: waiting,
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
			})) : null
		}), isMobile ? /* @__PURE__ */ __dil.jsx("box", {
			key: menuNonce,
			ariaLabel: state.overflow_label
		}, /* @__PURE__ */ __dil.jsx("select", {
			variant: "ghost",
			size: "xl",
			pill: true,
			name: state.overflow_label,
			placeholder: "⋯",
			value: "",
			options: [{
				value: "undo",
				label: state.undo_label,
				disabled: !canSave || progress.answer_history.length === 0
			}, {
				value: "shuffle",
				label: state.shuffle_label,
				disabled: cardOrder.length < 2 || !canSave || pendingFlush
			}],
			onChange: (value) => {
				if (value === "undo") undo();
				else if (value === "shuffle") shuffle();
			}
		})) : /* @__PURE__ */ __dil.jsx("box", { key: menuNonce }, /* @__PURE__ */ __dil.jsx("popover", null, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => setDismissedHintDeck(hintDeck) }, /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
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
			disabled: !canSave,
			onClick: undo
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "undo",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.undo_label))), /* @__PURE__ */ __dil.jsx("pressable", {
			height: 36,
			width: "100%",
			padding: {
				x: 2,
				y: 0
			},
			radius: "md",
			ariaLabel: state.shuffle_label,
			disabled: cardOrder.length < 2 || !canSave || pendingFlush,
			onClick: shuffle
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "shuffle",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.shuffle_label))))))))))))));
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
//#region LearningFlashcards.dil.tsx
	function LearningFlashcards(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("LearningFlashcards", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 320
		});
		return /* @__PURE__ */ __dil.jsx(FlashcardsView, { state });
	}

//#endregion
return LearningFlashcards;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-flashcards-709eeb9430e4.js.map