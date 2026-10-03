import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region learning/primitives/LearningExercisePager.dil.tsx
	function LearningExercisePager({ exercises, previousLabel, nextLabel, nextButtonLabel, progressLabels, newTurnQuery, renderExercise, renderFooter, getResponse, isExerciseComplete = (_, selectedIds$1) => selectedIds$1.length > 0 }) {
		const instanceId = DIL.useId();
		const [viewState, setViewState] = DIL.useState({
			currentId: null,
			answers: {}
		});
		const currentViewState = DIL.useRef(viewState);
		currentViewState.current = viewState;
		const updateViewState = (next) => {
			currentViewState.current = next;
			setViewState(next);
		};
		const index = Math.max(0, exercises.findIndex((exercise$1) => exercise$1.id === viewState.currentId));
		const exercise = exercises[index];
		if (!exercise) return null;
		const answer = viewState.answers[exercise.id];
		const selectedIds = answer?.revision === exercise.revision ? answer.selectedIds : [];
		const canAdvance = index < exercises.length - 1 && isExerciseComplete(exercise.data, selectedIds);
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
			gap: 1.25,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
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
			size: "xl",
			color: index === 0 ? "alpha-35" : "secondary"
		}))), /* @__PURE__ */ __dil.jsx("box", {
			role: "status",
			minWidth: 48,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, progressLabels[index])), /* @__PURE__ */ __dil.jsx("pressable", {
			size: 36,
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
			size: "xl",
			color: canAdvance ? "secondary" : "alpha-35"
		})))) : null;
		return /* @__PURE__ */ __dil.jsx("box", {
			key: \`\${instanceId}:\${exercise.id}:\${exercise.revision}\`,
			width: "100vw",
			maxWidth: "100%"
		}, renderExercise(exercise.data, {
			selectedIds,
			setSelectedIds: (update) => {
				const current = currentViewState.current;
				const previous = current.answers[exercise.id];
				const ids = previous?.revision === exercise.revision ? previous.selectedIds : [];
				const nextIds = update(ids);
				const answers = {
					...current.answers,
					[exercise.id]: {
						revision: exercise.revision,
						selectedIds: nextIds
					}
				};
				updateViewState({
					...current,
					answers
				});
				if (newTurnQuery && index === exercises.length - 1 && !isExerciseComplete(exercise.data, ids) && isExerciseComplete(exercise.data, nextIds)) {
					const responses = exercises.flatMap((item, itemIndex) => {
						const exerciseAnswer = answers[item.id];
						if (exerciseAnswer?.revision !== item.revision || !exerciseAnswer.selectedIds.length) return [];
						const response = getResponse(item.data, exerciseAnswer.selectedIds);
						return [\`\${itemIndex + 1}. \${response.question}\\n→ \${response.answer}\`];
					});
					GenUI.issueNewTurn([newTurnQuery, ...responses].join("\\n\\n"), {
						append_to_current_leaf: true,
						followup_metadata: {}
					});
				}
			}
		}, navigation, renderFooter ? renderFooter(canAdvance ? () => navigate(index + 1) : null) : exercises.length > 1 ? /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			minHeight: "40px"
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "lg",
			color: "primary",
			variant: canAdvance ? "solid" : "outline",
			disabled: !canAdvance,
			onClick: () => navigate(index + 1)
		}, nextButtonLabel ?? nextLabel)) : null));
	}

//#endregion
//#region shared.dil.ts
	function hasImageSource(image) {
		return Boolean(image?.content_url || image?.thumbnail_url);
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
//#region learning/primitives/LearningCard.dil.tsx
	function LearningCard({ icon, title, directions, prompt, children, navigation, footer, divider = true }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: "100%",
			padding: 5,
			gap: 2,
			radius: "4xl",
			background: "surface-elevated",
			border: {
				size: .5,
				color: "strong"
			},
			role: "group",
			ariaLabel: title,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: "40px",
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
			size: "xl",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary",
			weight: "medium"
		}, title)), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, navigation)), /* @__PURE__ */ __dil.jsx("col", { gap: 4 }, directions ? /* @__PURE__ */ __dil.jsx("text", { size: "md" }, directions) : null, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, prompt), divider ? /* @__PURE__ */ __dil.jsx("box", {
			height: "1px",
			background: "border",
			role: "separator"
		}) : null, /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, footer)));
	}

//#endregion
//#region learning/primitives/LearningFeedback.dil.tsx
	function LearningFeedback({ result }) {
		if (!result) return null;
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "status",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("row", {
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
		}, result.label)), result.status === "incorrect" && result.correction ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, result.correctionLabel ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, result.correctionLabel) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			preserveWhitespace: true
		}, result.correction)) : null, result.explanation ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, result.explanation) : null);
	}

//#endregion
//#region learning/primitives/LearningImageChoices.dil.tsx
	function LearningImageChoices({ options, selectedId, correctOptionId, disabled, onSelect }) {
		return /* @__PURE__ */ __dil.jsx("grid", {
			columns: 2,
			gap: 4
		}, options.map((option) => {
			const selected = selectedId === option.id;
			const status = selectedId !== null && correctOptionId ? option.id === correctOptionId ? "correct" : selected ? "incorrect" : void 0 : void 0;
			const resultColor = status === "correct" ? "success" : status === "incorrect" ? "danger" : void 0;
			const image = option.searchImage ?? { content_url: option.src };
			const tile = /* @__PURE__ */ __dil.jsx("col", {
				width: "100%",
				height: 176,
				padding: 5,
				align: "center",
				justify: "center",
				radius: "2xl",
				background: resultColor ?? (selected ? "info" : "alpha-04"),
				border: {
					size: 1,
					color: resultColor ?? (selected ? "info" : "transparent")
				}
			}, hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("search-image", {
				searchImage: image,
				alt: option.alt,
				width: "100%",
				maxWidth: "128px",
				height: 128,
				fit: "contain",
				fallback: /* @__PURE__ */ __dil.jsx("text", {
					size: "sm",
					color: "secondary"
				}, option.alt)
			}) : /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				height: 128,
				align: "center",
				justify: "center",
				role: option.isLoading ? "status" : void 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, option.alt)));
			return /* @__PURE__ */ __dil.jsx("pressable", {
				key: option.id,
				background: "transparent",
				radius: "2xl",
				ariaLabel: option.alt,
				ariaPressed: selected,
				onClick: () => {
					if (!disabled && !option.isLoading && hasImageSource(image) && selectedId === null) onSelect(option.id);
				}
			}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, tile, /* @__PURE__ */ __dil.jsx("row", {
				minHeight: "24px",
				justify: "center",
				align: "center",
				gap: 1
			}, status ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("icon", {
				name: status === "correct" ? "check" : "x",
				size: "md",
				color: resultColor
			}), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: resultColor,
				textAlign: "center"
			}, option.alt)) : null)));
		}));
	}

//#endregion
//#region learning/cards/LearningImageChoiceCard.dil.tsx
	function LearningImageChoiceCard$1(props) {
		return /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			getResponse: (data, selectedIds) => ({
				question: data.question,
				answer: data.options.find((option) => option.id === selectedIds[0])?.alt ?? ""
			}),
			renderExercise: (data, selection, navigation, footer) => /* @__PURE__ */ __dil.jsx(ImageChoiceExercise, {
				...data,
				selection,
				navigation,
				footer
			})
		});
	}
	function ImageChoiceExercise({ title, selection, navigation, footer, question, options, correctOptionId, correctLabel, incorrectLabel }) {
		const selectedId = selection.selectedIds[0] ?? null;
		const selected = options.find((option) => option.id === selectedId);
		const correct = selectedId === correctOptionId;
		const result = selected ? {
			status: correct ? "correct" : "incorrect",
			label: correct ? correctLabel : incorrectLabel,
			explanation: selected.feedback
		} : null;
		return /* @__PURE__ */ __dil.jsx(LearningCard, {
			icon: "eye",
			title,
			navigation,
			footer,
			divider: false,
			prompt: /* @__PURE__ */ __dil.jsx("text", { size: "md" }, question)
		}, /* @__PURE__ */ __dil.jsx(LearningImageChoices, {
			options,
			selectedId,
			correctOptionId,
			disabled: selectedId !== null || options.some((option) => option.isLoading || !option.src && !hasImageSource(option.searchImage)),
			onSelect: (id) => selection.setSelectedIds((current) => current.length ? current : [id])
		}), /* @__PURE__ */ __dil.jsx(LearningFeedback, { result }));
	}

//#endregion
//#region LearningImageChoiceCard.dil.tsx
	function LearningImageChoiceCard(props) {
		const { state } = useResolvedComponentResult("LearningImageChoiceCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningImageChoiceCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningImageChoiceCard$1, props);
		return props.fallback ?? null;
	}

//#endregion
return LearningImageChoiceCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-image-choice-card-62b26f922c67.js.map