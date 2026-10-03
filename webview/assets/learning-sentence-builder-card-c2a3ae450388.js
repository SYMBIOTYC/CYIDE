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
		const pill = /* @__PURE__ */ __dil.jsx("row", {
			minHeight: "40px",
			maxWidth: "100%",
			padding: {
				x: 4,
				y: 1.5
			},
			gap: 2,
			align: "center",
			justify: "center",
			radius: "full",
			background: resultColor ?? (selected ? "info" : "alpha-04"),
			border: {
				size: 1,
				color: resultColor ?? (selected ? "info" : "transparent")
			}
		}, result ? /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: result.label,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: status === "correct" ? "check" : "x",
			size: "md",
			color: resultColor
		})) : null, selected && order !== void 0 ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			tabularNums: true
		}, order, ".") : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			textAlign: "center",
			color: selected && !status ? "info" : "primary"
		}, label));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			maxWidth: "100%",
			background: "transparent",
			radius: "full",
			ariaPressed: selected,
			onClick: () => {
				if (!disabled && !selected) onSelect();
			}
		}, pill);
	}

//#endregion
//#region learning/primitives/LearningSentence.dil.tsx
	function LearningSentence({ parts, answers, answerStatuses, blankStyle = "inline" }) {
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
				gap: 2,
				align: "center",
				wrap: "wrap",
				minHeight: "40px"
			}, line.map(({ text, answerIndex }, index) => /* @__PURE__ */ __dil.jsx(SentenceSlotPart, {
				key: index,
				text,
				answer: answerIndex === void 0 ? void 0 : answers[answerIndex],
				active: answerIndex === activeIndex,
				status: answerIndex !== void 0 ? answerStatuses?.[answerIndex] : void 0
			})))));
		}
		return /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			preserveWhitespace: true
		}, parts.map((part, index) => /* @__PURE__ */ __dil.jsx(SentencePart, {
			key: index,
			text: part,
			answer: answers[index],
			status: answerStatuses?.[index]
		})));
	}
	function SentenceSlotPart({ text, answer, active, status }) {
		const resultColor = status === "correct" ? "success" : status === "incorrect" ? "danger" : void 0;
		return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, text.trim() ? /* @__PURE__ */ __dil.jsx("text", { size: "md" }, text.trim()) : null, answer !== void 0 ? /* @__PURE__ */ __dil.jsx("box", {
			width: answer === null ? "80px" : void 0,
			minWidth: "80px",
			maxWidth: "100%",
			flex: answer === null ? "0 0 80px" : "0 1 auto",
			minHeight: "40px",
			padding: {
				x: 4,
				y: 1.5
			},
			radius: "full",
			background: resultColor ?? (answer || active ? "info" : "transparent"),
			border: {
				size: 1,
				color: resultColor ?? (answer || active ? "info" : "strong"),
				style: active || answer ? "solid" : "dashed"
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			justify: "center"
		}, status ? /* @__PURE__ */ __dil.jsx("icon", {
			name: status === "correct" ? "check" : "x",
			size: "md",
			color: resultColor
		}) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			textAlign: "center",
			color: answer && !status ? "info" : "primary"
		}, answer ?? "\\xA0"))) : null);
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
//#region learning/primitives/LearningWordBank.dil.tsx
	function LearningWordBank({ options, selectedIds, disabled, onSelect }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "start",
			align: "center",
			wrap: "wrap"
		}, options.map((option) => {
			const index = selectedIds.indexOf(option.id);
			return /* @__PURE__ */ __dil.jsx(LearningChoicePill, {
				key: option.id,
				label: option.label,
				selected: index !== -1,
				order: index === -1 ? void 0 : index + 1,
				disabled,
				onSelect: () => onSelect(option.id)
			});
		}));
	}

//#endregion
//#region learning/cards/LearningSentenceBuilderCard.dil.tsx
	function LearningSentenceBuilderCard$1(props) {
		return /* @__PURE__ */ __dil.jsx(LearningExercisePager, {
			...props,
			getResponse: (data, selectedIds) => ({
				question: [data.directions, data.sentence].filter(Boolean).join("\\n"),
				answer: selectedIds.map((id) => data.options.find((option) => option.id === id)?.label ?? "").join(" · ")
			}),
			isExerciseComplete: (data, selectedIds) => selectedIds.length === data.correctOptionIds.length,
			renderExercise: (data, selection, navigation, footer) => /* @__PURE__ */ __dil.jsx(SentenceBuilderExercise, {
				...data,
				selection,
				navigation,
				footer
			})
		});
	}
	function SentenceBuilderExercise({ title, selection, navigation, footer, sentence, options, correctOptionIds, feedback, correctLabel, incorrectLabel, correctSentenceLabel, undoLabel, directions }) {
		const { selectedIds, setSelectedIds } = selection;
		const parts = sentence.split("{{blank}}");
		const blankCount = parts.length - 1;
		const complete = selectedIds.length === blankCount;
		const answers = parts.slice(1).map((_, index) => options.find((option) => option.id === selectedIds[index])?.label ?? null);
		const correctAnswers = correctOptionIds.map((id) => options.find((option) => option.id === id)?.label ?? "");
		const answerStatuses = complete ? answers.map((answer, index) => answer === correctAnswers[index] ? "correct" : "incorrect") : void 0;
		const correct = answerStatuses?.every((status) => status === "correct") ?? false;
		const result = complete ? {
			status: correct ? "correct" : "incorrect",
			label: correct ? correctLabel : incorrectLabel,
			correction: parts.map((part, index) => part + (correctAnswers[index] ?? "")).join(""),
			correctionLabel: correctSentenceLabel ?? correctLabel,
			explanation: feedback
		} : null;
		return /* @__PURE__ */ __dil.jsx(LearningCard, {
			icon: "edit",
			title,
			navigation,
			footer,
			directions,
			prompt: /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				align: "start"
			}, /* @__PURE__ */ __dil.jsx("box", {
				flex: "1 1 0",
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx(LearningSentence, {
				blankStyle: "pill",
				parts,
				answers,
				answerStatuses
			})), /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: undoLabel,
				tooltip: undoLabel,
				disabled: selectedIds.length === 0 || complete,
				width: "40px",
				height: "40px",
				flex: "0 0 auto",
				radius: "full",
				background: "transparent",
				onClick: () => setSelectedIds((current) => current.length < blankCount ? current.slice(0, -1) : current)
			}, /* @__PURE__ */ __dil.jsx("box", {
				height: "100%",
				align: "center",
				justify: "center",
				ariaHidden: true
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "undo",
				size: "2xl",
				color: "secondary"
			}))))
		}, /* @__PURE__ */ __dil.jsx(LearningWordBank, {
			options,
			selectedIds,
			disabled: complete,
			onSelect: (id) => setSelectedIds((current) => current.length < blankCount && !current.includes(id) ? [...current, id] : current)
		}), /* @__PURE__ */ __dil.jsx(LearningFeedback, { result }));
	}

//#endregion
//#region LearningSentenceBuilderCard.dil.tsx
	function LearningSentenceBuilderCard(props) {
		const { state } = useResolvedComponentResult("LearningSentenceBuilderCard", props);
		if (state) return /* @__PURE__ */ __dil.jsx(LearningSentenceBuilderCard$1, state);
		if ("progressLabels" in props) return /* @__PURE__ */ __dil.jsx(LearningSentenceBuilderCard$1, props);
		return props.fallback ?? null;
	}

//#endregion
return LearningSentenceBuilderCard;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=learning-sentence-builder-card-c2a3ae450388.js.map