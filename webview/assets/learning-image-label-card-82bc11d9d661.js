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
	function LearningSectionAdvanceButton({ label }) {
		const appData = DIL.useAppData();
		if (appData.learningSectionCompletionEnabled !== true) return null;
		const canNavigateReview = appData.learningSectionContinueNavigationEnabled === true && appData.opGenui?.supportedClientActions?.includes(MARK_LEARNING_WIDGET_COMPLETED) === true;
		const disabled = appData.learningSectionCompletionReadOnly === true && !canNavigateReview || appData.opGenui?.isShared === true;
		return /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			size: "lg",
			variant: "solid",
			disabled,
			onClick: async () => {
				if (disabled) return;
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
//#region internal/LinkImpression.dil.tsx
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
//#region internal/image-click-action.dil.ts
	function isRecord(value) {
		return typeof value === "object" && value !== null && !Array.isArray(value);
	}
	function isEntityResult(componentName, key) {
		if (componentName !== void 0) return componentName === "Entity";
		try {
			const parsed = JSON.parse(key);
			return Array.isArray(parsed) && parsed.length === 2 && parsed[0] === "Entity";
		} catch {
			return false;
		}
	}
	function entityTitle(results, productRef) {
		let title;
		for (const [key, result] of Object.entries(results)) {
			if (!isRecord(result) || result.status !== "resolved" || !isEntityResult(result.componentName, key) || !isRecord(result.state)) continue;
			const action = result.state.action_payload;
			if (!isRecord(action) || action.category !== "product") continue;
			const params = action.extraParams;
			if (!isRecord(params) || params.productRef !== productRef) continue;
			const candidate = typeof params.displayTitle === "string" ? params.displayTitle.trim() : "";
			if (!candidate || candidate === action.query) continue;
			if (title !== void 0 && title !== candidate) return void 0;
			title = candidate;
		}
		return title;
	}
	function useDispatchImageAction() {
		const results = DIL.useAppData((appData) => appData.opGenui?.componentResults);
		return (action) => {
			const payload = action.payload;
			const params = isRecord(payload) ? payload.extraParams : void 0;
			if (!results || action.type !== "open_entity_detail" || !isRecord(payload) || payload.category !== "product" || !isRecord(params) || params.displayTitle || typeof params.productRef !== "string" || !params.productRef) return GenUI.dispatchAction(action);
			const displayTitle = entityTitle(results, params.productRef);
			return GenUI.dispatchAction(displayTitle ? {
				...action,
				payload: {
					...payload,
					extraParams: {
						...params,
						displayTitle
					}
				}
			} : action);
		};
	}

//#endregion
//#region shared.dil.ts
	function hasImageSource(image) {
		return Boolean(image?.content_url || image?.thumbnail_url);
	}
	function imageKey(image) {
		return image?.content_url ?? image?.thumbnail_url ?? image?.url ?? "";
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
//#region internal/image-shopping.dil.ts
	function imageShoppingAvailable(data) {
		return data.opGenui?.supportedClientActions?.includes("open_shop_image_sidebar") ?? false;
	}
	/** Only trusted native image components supply this separate image control. */
	function imageShoppingAction(image, componentName, componentKey, available) {
		if (!available || image?.shop_eligible !== true || !imageKey(image)) return void 0;
		return {
			label: "Shop",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_shop_image_sidebar",
				payload: {
					component_name: componentName,
					component_key: componentKey,
					image_key: imageKey(image)
				}
			})
		};
	}

//#endregion
//#region product-interaction-analytics.dil.ts
	const GENUI_PRODUCT_INTERACTION_EVENT_NAME = "chatgpt_product_interaction";

//#endregion
//#region internal/product-analytics.dil.ts
	function record(value) {
		return value !== null && typeof value === "object" && !Array.isArray(value) ? value : void 0;
	}
	function analyticsString(value) {
		return typeof value === "string" ? value : void 0;
	}
	/** Pick only the canonical product fields consumed by product interaction events. */
	function productAnalytics(value, productIndex) {
		const product = record(value);
		const productId = analyticsString(product?.id);
		if (!product || !productId?.trim()) return void 0;
		const metadataSources = product.metadata_sources;
		return {
			productId,
			productIndex,
			productEventUuid: analyticsString(product.product_event_uuid),
			productUrl: analyticsString(product.url),
			productTitle: analyticsString(product.title),
			productPrice: analyticsString(product.price),
			productMerchants: analyticsString(product.merchants),
			productProvider: Array.isArray(metadataSources) ? analyticsString(metadataSources[0]) : void 0
		};
	}
	function productAnalyticsFromPayload(value, productIndex) {
		const payload = record(value);
		if (payload?.category !== "product") return void 0;
		return productAnalytics(record(payload.extraParams)?.product, productIndex);
	}
	function productAnalyticsFromAction(value, productIndex) {
		const action = record(value);
		if (action?.type !== "open_entity_detail") return void 0;
		return productAnalyticsFromPayload(action.payload, productIndex);
	}
	function logProductShown(product) {
		if (!product) return;
		try {
			Promise.resolve(GenUI.logEvent?.({
				event_name: GENUI_PRODUCT_INTERACTION_EVENT_NAME,
				event_data: {
					...product,
					type: "shown"
				}
			})).catch(() => {});
		} catch {}
	}
	function productShownProps(product, ready) {
		return product && GenUI.logEvent ? {
			onVisible: () => logProductShown(product),
			onVisibleKey: product.productId,
			onVisibleWhen: ready
		} : {};
	}

//#endregion
//#region AsyncImage.dil.tsx
	function isPixelDimension(value) {
		if (typeof value === "number") return Number.isFinite(value) && value >= 0;
		return typeof value === "string" && /^\\d+(?:\\.\\d+)?(?:px)?$/.test(value.trim());
	}
	function normalizedDimension(value) {
		return typeof value === "string" && /^\\d+(?:\\.\\d+)?$/.test(value.trim()) ? Number(value) : value;
	}
	function unresolvedAspectWidth(maxHeight, aspectRatio) {
		const [width, height = 1] = aspectRatio.split(/[/:]/).map(Number);
		return Number.parseFloat(String(maxHeight)) * width / height;
	}
	function containsSource(value, src) {
		if (value === src) return true;
		if (value === null || typeof value !== "object") return false;
		return Object.values(value).some((child) => containsSource(child, src));
	}
	function directImages(props, sourceAllowed) {
		if (!sourceAllowed || !props.src || props.query != null || props.ref != null) return [];
		return [{
			url: props.src,
			content_url: props.src,
			thumbnail_url: props.src,
			title: props.alt ?? ""
		}];
	}
	function ImageContent(props) {
		return /* @__PURE__ */ __dil.jsx("search-image", props);
	}
	function AsyncImage(props) {
		const interactive = props.interactive !== false;
		const dispatchImageAction = useDispatchImageAction();
		const canShopImage = DIL.useAppData(imageShoppingAvailable);
		const directSource = DIL.useAppData((appData) => {
			const { src } = props;
			const data = appData.opGenui;
			if (!src || !containsSource(data?.modelDataBindings, src)) return;
			return data?.componentResults && Object.entries(data.modelDataBindingSafeUrls ?? {}).some(([key, urls]) => data.modelDataBindings?.[key] !== void 0 && Array.isArray(urls) && urls.includes(src)) ? "approved" : "bound";
		});
		const resolved = useResolvedComponentResult("AsyncImage", props);
		const isDirect = "src" in props;
		const state = isDirect ? void 0 : resolved.state;
		const resolutionComplete = isDirect || resolved.resolutionComplete;
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const images = isDirect ? directImages(props, directSource !== void 0) : state?.images ?? [];
		const image = images[0];
		const alt = props.alt ?? image?.title ?? "";
		const actionDescription = props.alt || image?.title;
		const hasImage = hasImageSource(image);
		const isProduct = image?.refs?.some((ref) => ref.ref_type === "product");
		const product = productAnalyticsFromAction(state?.default_on_click_action);
		const canJoinCarousel = interactive && !isLoading && hasImage && (!isDirect || directSource === "approved") && !state?.default_on_click_action && !images.some((item) => item.is_sensitive);
		const widgetDIL = DIL;
		const getCarouselGallery = canJoinCarousel ? widgetDIL.bindCarouselImages?.(() => images) : void 0;
		const needsLocalSizing = state == null;
		const frameMaxWidth = state?.frame_max_width ?? normalizedDimension(props.maxWidth) ?? (needsLocalSizing ? "100%" : void 0);
		const frameAspectRatio = state?.frame_aspect_ratio ?? props.aspectRatio;
		const presentation = state?.presentation;
		const radius = presentation?.radius ?? props.radius ?? "xl";
		const hasAuthoredDimensions = props.width != null || props.height != null;
		const authoredMaxHeight = isPixelDimension(props.maxHeight) ? normalizedDimension(props.maxHeight) : void 0;
		const localMaxHeight = needsLocalSizing && !hasAuthoredDimensions ? authoredMaxHeight : void 0;
		const unresolvedSize = frameAspectRatio == null ? localMaxHeight : void 0;
		const unresolvedWidth = localMaxHeight != null && frameAspectRatio != null ? unresolvedAspectWidth(localMaxHeight, frameAspectRatio) : unresolvedSize;
		const fallbackElement = props.fallback ?? /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			ariaLabel: "Image unavailable",
			background: "surface-tertiary",
			height: "100%",
			justify: "center",
			role: "img",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "tertiary",
			name: "image-square",
			size: "lg"
		}));
		const imageElement = /* @__PURE__ */ __dil.jsx(ImageContent, {
			key: isDirect ? props.src : void 0,
			alt,
			aspectRatio: frameAspectRatio,
			attributionOverlay: isDirect ? false : interactive ? true : "always",
			background: isProduct ? "#f3f3f3" : void 0,
			bitmapBlendMode: isProduct ? "darken" : void 0,
			contentCropFit: props.fit,
			containOutsideAspectRatio: isProduct && props.fit == null ? {
				min: .6,
				max: 1.8
			} : void 0,
			fallback: fallbackElement,
			fit: props.fit ?? (isProduct ? "cover" : state?.image_fit ?? (isDirect && frameAspectRatio == null ? "contain" : "cover")),
			frame: (presentation?.frame ?? props.frame ?? true) && !isLoading && hasImage,
			height: "100%",
			hideOnFailure: true,
			hoverZoom: true,
			minHeight: isProduct ? 0 : void 0,
			position: isProduct ? "center" : void 0,
			radius,
			saveTarget: isDirect ? void 0 : image,
			searchImage: image,
			secondaryAction: isDirect ? void 0 : imageShoppingAction(image, "AsyncImage", props.__resolutionId ?? componentDataKey("AsyncImage", props), canShopImage),
			width: "100%"
		}, interactive ? /* @__PURE__ */ __dil.jsx(LinkImpression, {
			action: state?.default_on_click_action,
			disabled: isLoading,
			width: "100%",
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: actionDescription ? \`Open \${actionDescription}\` : "Open image",
			background: "transparent",
			disabled: isLoading,
			height: "100%",
			onClick: () => {
				if (state?.default_on_click_action) return dispatchImageAction(state.default_on_click_action);
				const gallery = getCarouselGallery?.();
				if (gallery) return GenUI.dispatchAction({
					handler: "client",
					type: "open_image_lightbox",
					payload: {
						source: "carousel",
						images: gallery.images,
						selected_index: gallery.selectedIndex
					}
				});
				GenUI.openImageLightbox(images, 0);
			},
			radius: "none",
			width: "100%"
		})) : null);
		return /* @__PURE__ */ __dil.jsx("box", {
			...product ? productShownProps(product, !isLoading && hasImage) : {},
			imageObservation: !isLoading && !hasImage ? "unavailable" : "active",
			ariaLabel: isLoading ? "Loading image" : void 0,
			aspectRatio: frameAspectRatio,
			background: "surface-tertiary",
			clip: true,
			flex: isPixelDimension(frameMaxWidth) ? "0 0 auto" : void 0,
			height: state?.frame_height ?? normalizedDimension(props.height) ?? (props.width != null || frameAspectRatio != null ? void 0 : unresolvedSize),
			maxHeight: (state?.max_height !== void 0 ? state.max_height ?? void 0 : authoredMaxHeight) ?? (isProduct ? "100%" : void 0),
			maxWidth: frameMaxWidth,
			minHeight: presentation?.min_height ?? props.minHeight,
			minWidth: presentation?.min_width ?? props.minWidth ?? 0,
			radius,
			role: isLoading ? "status" : void 0,
			width: state?.frame_width ?? normalizedDimension(props.width) ?? unresolvedWidth ?? "100%"
		}, !isLoading && !hasImage ? fallbackElement : imageElement);
	}

//#endregion
//#region learning/primitives/LearningImage.dil.tsx
	function LearningImage({ src, alt, images = [], isLoading = false }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: 177,
			radius: "2xl",
			background: {
				light: "alpha-04",
				dark: "gray-300"
			},
			align: "center",
			justify: "center",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 192,
			maxWidth: "100%",
			height: 128
		}, src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt,
			width: "100%",
			height: "100%",
			fit: "contain",
			fallback: /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, alt)
		}) : /* @__PURE__ */ __dil.jsx(AsyncImage, {
			alt,
			__state: {
				images,
				is_loading: isLoading
			},
			width: "100%",
			height: "100%",
			fit: "contain",
			frame: false,
			radius: "none",
			fallback: /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, alt)
		})));
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
//#region learning/cards/LearningImageLabelCard.dil.tsx
	function LearningImageLabelCard$1(props) {
		return /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			advanceOnIncorrect: true,
			isExercisePassed: (data, ids) => ids.length === 1 && ids[0] === data.correctOptionId,
			renderExercise: (data, selection, navigation, footer) => /* @__PURE__ */ __dil.jsx(ImageLabelExercise, {
				...data,
				selection,
				navigation,
				footer
			})
		});
	}
	function ImageLabelExercise({ title, selection, navigation, footer, image, options, correctOptionId, unsureOptionId, correctLabel, incorrectLabel, directions }) {
		const selectedId = selection.selectedIds[0] ?? null;
		const imagePending = !image.src && Boolean(image.isLoading);
		const imageUnavailable = !image.src && !image.images?.length;
		return /* @__PURE__ */ __dil.jsx(LearningCard, {
			icon: "eye",
			variant: "choice",
			title,
			navigation,
			footer,
			directions,
			divider: false,
			prompt: /* @__PURE__ */ __dil.jsx(LearningImage, {
				...image,
				isLoading: imagePending
			})
		}, /* @__PURE__ */ __dil.jsx(LearningTextChoices, {
			variant: "list",
			options,
			selectedId,
			correctOptionId,
			unsureOptionId,
			correctLabel,
			incorrectLabel,
			disabled: selectedId !== null || imagePending || imageUnavailable,
			onSelect: (id) => selection.setSelectedIds((current) => current.length ? current : [id])
		}));
	}

//#endregion
//#region LearningImageLabelCard.dil.tsx
	function LearningImageLabelCard(props) {
		const { state } = useResolvedComponentResult("LearningImageLabelCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningImageLabelCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningImageLabelCard$1, props);
		return props.fallback ?? null;
	}

//#endregion
return LearningImageLabelCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-image-label-card-82bc11d9d661.js.map