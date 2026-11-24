import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/FlightSavedState.dil.ts
/** Preserve the slot names used by older native Flights widgets. */
	function useFlightSavedState(initial, ...identity) {
		const useState = DIL.useState;
		return useState(initial, DIL.useAppData((data) => data.nativeComponentNames?.includes("full-height-popover") === true) ? { key: JSON.stringify(identity) } : void 0);
	}

//#endregion
//#region internal/FlightReveal.dil.tsx
	const revealDuration = 180;
	/** Use the shared host animation for new results and departure/return transitions. */
	function FlightReveal({ stage, scroll, children }) {
		const animation = /* @__PURE__ */ __dil.jsx("animate", {
			preventInitialTransition: false,
			initial: {
				opacity: 0,
				translateY: 4
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: revealDuration
			}
		}, /* @__PURE__ */ __dil.jsx("animate-item", { key: stage }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, children)));
		return scroll ? /* @__PURE__ */ __dil.jsx("flight-results-scroll", {
			response: scroll.response,
			section: scroll.section,
			expanded: scroll.expanded,
			stage,
			animationDuration: revealDuration
		}, animation) : animation;
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
//#region internal/FlightSearchIcon.dil.tsx
	function FlightSearchIcon({ kind }) {
		return /* @__PURE__ */ __dil.jsx("icon", {
			name: kind === "pin" ? "map-pin" : kind === "chevron" ? "chevron-right" : kind === "swap" ? "arrow-up-arrow-down" : kind,
			size: kind === "chevron" ? "sm" : "2xl",
			color: kind === "chevron" ? "tertiary" : "primary"
		});
	}

//#endregion
//#region internal/FlightDates.dil.tsx
	function hasFlightCalendarLabels(labels) {
		return [
			"dates",
			"previous_month",
			"next_month",
			"choose_departure",
			"choose_return",
			"done"
		].every((key) => Boolean(labels[key]));
	}
	function FlightDates(props) {
		const wide = DIL.useBreakpoint("md");
		const nativeInline = DIL.useAppData((data) => data.nativeComponentNames?.includes("full-height-popover") === true) && !wide && props.mode !== "calendar";
		const dateIdentity = [
			"FlightSearchForm",
			props.componentKey,
			props.nativeSheet ? "nativeDates" : "dates",
			props.mode ?? "inline",
			props.submit === true
		];
		const [open, setOpen] = useFlightSavedState(false, ...dateIdentity, "open");
		const isOpen = props.open ?? open;
		const [storedMonthOffset, setStoredMonthOffset] = useFlightSavedState(0, ...dateIdentity, "monthOffset");
		const sheet = props.mode === "calendar" && props.submit === true;
		const [choosingReturn, setChoosingReturn] = useFlightSavedState(props.roundTrip && validDate$1(props.departure) && !validDate$1(props.returnDate), ...dateIdentity, "choosingReturn");
		const selectingReturn = props.tripTypeInHeader || props.nativeSheet ? props.roundTrip && validDate$1(props.departure) && !validDate$1(props.returnDate) : choosingReturn;
		const monthAnchor = (validDate$1(props.departure) ? props.departure : props.today).slice(0, 7);
		const [monthOffsetAnchor, setMonthOffsetAnchor] = useFlightSavedState(monthAnchor, ...dateIdentity, "monthOffsetAnchor");
		const monthOffset = monthOffsetAnchor === monthAnchor ? storedMonthOffset : 0;
		const setMonthOffset = (offset) => {
			setMonthOffsetAnchor(monthAnchor);
			setStoredMonthOffset(offset);
		};
		const anchor = /* @__PURE__ */ new Date((validDate$1(props.departure) ? props.departure : props.today) + "T12:00:00Z");
		const month = new Date(Date.UTC(anchor.getUTCFullYear(), anchor.getUTCMonth() + monthOffset, 1));
		const range = props.roundTrip && validDate$1(props.departure) && validDate$1(props.returnDate) && props.returnDate > props.departure;
		const choose = (date) => {
			if (props.disabled || date < props.today) return;
			if (props.roundTrip && selectingReturn && validDate$1(props.departure) && date >= props.departure) {
				props.onChange({ return_date: date });
				setChoosingReturn(false);
			} else {
				props.onChange({
					departure_date: date,
					...props.roundTrip ? { return_date: "" } : {}
				});
				setChoosingReturn(props.roundTrip);
				const selected = /* @__PURE__ */ new Date(date + "T12:00:00Z");
				setMonthOffsetAnchor(date.slice(0, 7));
				setStoredMonthOffset((month.getUTCFullYear() - selected.getUTCFullYear()) * 12 + month.getUTCMonth() - selected.getUTCMonth());
			}
		};
		const canFormat = typeof Intl !== "undefined" && typeof Intl.DateTimeFormat === "function";
		if (props.mode !== "summary" && (!hasFlightCalendarLabels(props.labels) || !canFormat && !props.nativeSheet)) return /* @__PURE__ */ __dil.jsx(FlightDateInputs, props);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%",
			height: sheet ? "100%" : void 0,
			minHeight: 0,
			disableAutoSpacing: true
		}, props.mode !== "calendar" && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: props.labels.dates || props.labels.departure,
			ariaPressed: isOpen,
			disabled: props.disabled,
			onClick: () => {
				setOpen(!isOpen);
				props.onOpenChange?.(!isOpen);
				setMonthOffset(0);
				setChoosingReturn(props.roundTrip && validDate$1(props.departure) && !validDate$1(props.returnDate));
			},
			minHeight: 56,
			width: "100%",
			radius: 12
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56
		}, !props.compact && /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: "calendar" }), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0,
			disableAutoSpacing: true
		}, props.compact && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, props.labels.dates_compact || props.labels.dates || props.labels.departure), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			truncate: props.compact
		}, displayDate(props.departure, props.labels.departure) + (props.roundTrip ? " → " + displayDate(props.returnDate, props.labels.return) : ""))), props.mode !== "summary" && /* @__PURE__ */ __dil.jsx("icon", {
			name: isOpen ? "chevron-up" : "chevron-down",
			size: "sm",
			color: "secondary"
		}))), props.mode !== "summary" && isOpen && /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%",
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			disableAutoSpacing: true
		}, sheet && !props.tripTypeInHeader && props.onRoundTripChange && props.labels.one_way && props.labels.round_trip && /* @__PURE__ */ __dil.jsx("row", {
			justify: "center",
			width: props.nativeSheet ? "100%" : void 0
		}, /* @__PURE__ */ __dil.jsx("segmented-control", {
			block: props.nativeSheet,
			label: props.labels.trip_type,
			value: props.roundTrip ? "round_trip" : "one_way",
			options: [{
				value: "one_way",
				label: props.labels.one_way,
				disabled: props.disabled
			}, {
				value: "round_trip",
				label: props.labels.round_trip,
				disabled: props.disabled
			}],
			size: "xl",
			variant: "soft",
			disabled: props.disabled,
			onChange: (value) => {
				if (props.disabled) return;
				props.onRoundTripChange?.(value === "round_trip");
				setChoosingReturn(value === "round_trip" && validDate$1(props.departure) && !validDate$1(props.returnDate));
			}
		})), !sheet && /* @__PURE__ */ __dil.jsx(FlightDateInputs, {
			...props,
			onChange: (value) => {
				props.onChange(value);
				if (value.departure_date !== void 0) setMonthOffset(0);
			}
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: sheet ? 3.5 : 2,
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			padding: { x: sheet && !props.nativeSheet ? 2.75 : 0 },
			disableAutoSpacing: true
		}, !wide && /* @__PURE__ */ __dil.jsx("box", {
			height: 34,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: 7,
			gap: 0
		}, Array.from({ length: 7 }, (_, day) => /* @__PURE__ */ __dil.jsx("grid-item", { key: "weekday" + day }, /* @__PURE__ */ __dil.jsx(FlightDateText, {
			date: new Date(Date.UTC(2026, 0, 4 + day)).toISOString().slice(0, 10),
			kind: "weekday"
		}))))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: wide ? 2 : 1,
			gap: 6
		}, [0, 1].map((offset) => wide || offset === 0 ? /* @__PURE__ */ __dil.jsx("grid-item", { key: offset }, /* @__PURE__ */ __dil.jsx(FlightMonthHeading, {
			nativeSheet: props.nativeSheet,
			month: new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + offset, 1)).toISOString().slice(0, 10),
			navigation: offset === 0 ? /* @__PURE__ */ __dil.jsx(CalendarNavigation, {
				labels: props.labels,
				disabled: props.disabled,
				previousDisabled: month.toISOString().slice(0, 7) <= props.today.slice(0, 7),
				onPrevious: () => setMonthOffset(monthOffset - 1),
				onNext: () => setMonthOffset(monthOffset + 1),
				direction: "previous"
			}) : void 0,
			nextNavigation: offset === (wide ? 1 : 0) ? /* @__PURE__ */ __dil.jsx(CalendarNavigation, {
				labels: props.labels,
				disabled: props.disabled,
				previousDisabled: false,
				onPrevious: () => setMonthOffset(monthOffset - 1),
				onNext: () => setMonthOffset(monthOffset + 1),
				direction: "next"
			}) : void 0
		})) : null)), /* @__PURE__ */ __dil.jsx("col", {
			key: sheet ? month.toISOString().slice(0, 7) : void 0,
			gap: 6,
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			scrollable: sheet,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: wide ? 2 : 1,
			gap: 6
		}, [0, 1].map((offset) => /* @__PURE__ */ __dil.jsx("grid-item", { key: offset }, /* @__PURE__ */ __dil.jsx(FlightMonth, {
			showWeekdays: wide,
			showHeading: !wide && offset === 1,
			month: new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + offset, 1)).toISOString().slice(0, 10),
			props,
			range,
			choose
		}))))))), sheet && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			ariaLive: "polite",
			ariaAtomic: true,
			height: 0,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, formatFlightDate(month.toISOString().slice(0, 10), {
			month: "long",
			year: "numeric"
		}) + ". " + (selectingReturn ? props.labels.choose_return : props.labels.choose_departure)))), !sheet && /* @__PURE__ */ __dil.jsx("box", {
			ariaLive: "polite",
			ariaAtomic: true,
			height: sheet ? 0 : void 0,
			clip: sheet
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, selectingReturn ? props.labels.choose_return : props.labels.choose_departure)), /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center",
			padding: { x: sheet && !props.nativeSheet ? 4 : 0 }
		}, sheet && !props.nativeSheet && props.labels.reset ? /* @__PURE__ */ __dil.jsx("button", {
			variant: props.tripTypeInHeader ? "outline" : "ghost",
			size: "xl",
			disabled: props.disabled || !props.departure && !props.returnDate,
			onClick: () => {
				if (props.disabled) return;
				props.onChange({
					departure_date: "",
					return_date: ""
				});
				setChoosingReturn(false);
				setMonthOffset(0);
			}
		}, props.labels.reset) : sheet && !props.nativeSheet ? /* @__PURE__ */ __dil.jsx("box", null) : void 0, /* @__PURE__ */ __dil.jsx("button", {
			submit: props.submit,
			size: "xl",
			block: !sheet || props.nativeSheet,
			disabled: props.disabled || props.requireComplete === true && (!validDate$1(props.departure) || props.departure < props.today || props.roundTrip && (!validDate$1(props.returnDate) || props.returnDate < props.departure)),
			onClick: props.submit ? void 0 : () => {
				setOpen(false);
				props.onOpenChange?.(false);
			}
		}, props.nativeSheet || nativeInline ? props.labels.apply || props.labels.done : /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "inherit"
		}, props.labels.done)))));
	}
	function FlightMonthHeading({ month, navigation, nextNavigation, nativeSheet }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			align: "center"
		}, !nativeSheet && /* @__PURE__ */ __dil.jsx("box", { size: 44 }, navigation), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx(FlightDateText, {
			date: month,
			kind: "month"
		})), nativeSheet && navigation && /* @__PURE__ */ __dil.jsx("box", { size: 44 }, navigation), (!nativeSheet || nextNavigation) && /* @__PURE__ */ __dil.jsx("box", { size: 44 }, nextNavigation));
	}
	function FlightMonth({ month: monthIso, props, range, choose, showWeekdays, showHeading }) {
		const month = /* @__PURE__ */ new Date(monthIso + "T12:00:00Z");
		const blanks = month.getUTCDay();
		const days = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			disableAutoSpacing: true
		}, showHeading && /* @__PURE__ */ __dil.jsx(FlightMonthHeading, {
			month: monthIso,
			nativeSheet: props.nativeSheet
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, showWeekdays && /* @__PURE__ */ __dil.jsx("grid", {
			columns: 7,
			gap: 0
		}, Array.from({ length: 7 }, (_, day) => /* @__PURE__ */ __dil.jsx("grid-item", { key: day }, /* @__PURE__ */ __dil.jsx(FlightDateText, {
			date: new Date(Date.UTC(2026, 0, 4 + day)).toISOString().slice(0, 10),
			kind: "weekday"
		})))), /* @__PURE__ */ __dil.jsx("grid", {
			columns: 7,
			columnGap: 0,
			rowGap: .5
		}, [...Array.from({ length: blanks }, (_, i) => /* @__PURE__ */ __dil.jsx("grid-item", { key: "blank" + i }, /* @__PURE__ */ __dil.jsx("box", { height: 44 }))), ...Array.from({ length: days }, (_, i) => {
			const date = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth(), i + 1));
			const iso = date.toISOString().slice(0, 10);
			const start = iso === props.departure;
			const end = props.roundTrip && iso === props.returnDate;
			const endpoint = start || end;
			const selected = range && iso >= props.departure && iso <= props.returnDate;
			const left = selected && (start || date.getUTCDay() === 0 || i === 0);
			const right = selected && (end || date.getUTCDay() === 6 || i === days - 1);
			return /* @__PURE__ */ __dil.jsx("grid-item", { key: iso }, /* @__PURE__ */ __dil.jsx("box", {
				height: 44,
				align: "center",
				justify: "center",
				radius: {
					topLeft: left ? 22 : 0,
					bottomLeft: left ? 22 : 0,
					topRight: right ? 22 : 0,
					bottomRight: right ? 22 : 0
				},
				background: !selected || start && (date.getUTCDay() === 6 || i === days - 1) || end && (date.getUTCDay() === 0 || i === 0) ? "transparent" : start ? {
					light: "linear-gradient(90deg, transparent 50%, #e8f3fe 50%)",
					dark: "linear-gradient(90deg, transparent 50%, #132e4b 50%)"
				} : end ? {
					light: "linear-gradient(90deg, #e8f3fe 50%, transparent 50%)",
					dark: "linear-gradient(90deg, #132e4b 50%, transparent 50%)"
				} : {
					light: "#e8f3fe",
					dark: "#132e4b"
				}
			}, /* @__PURE__ */ __dil.jsx("box", {
				width: "100%",
				maxWidth: 44
			}, /* @__PURE__ */ __dil.jsx("card", {
				variant: "soft",
				padding: 0,
				radius: "full",
				background: "transparent",
				width: "100%",
				shadow: endpoint,
				shadowStyle: "0 4px 16px rgba(58,131,247,0.24)"
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: formatFlightDate(iso, { dateStyle: "full" }),
				ariaPressed: endpoint || selected,
				disabled: props.disabled || iso < props.today,
				onClick: () => choose(iso),
				height: 44,
				width: "100%",
				maxWidth: 44,
				radius: "full",
				align: "center",
				justify: "center",
				background: endpoint ? {
					light: "#3284ff",
					dark: "#8abbff"
				} : "transparent"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				lineThrough: iso < props.today,
				color: endpoint ? {
					light: "#ffffff",
					dark: "#0d0d0d"
				} : iso < props.today ? "tertiary" : "primary"
			}, i + 1))))));
		})])));
	}
	function validDate$1(value) {
		if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(value)) return false;
		const date = /* @__PURE__ */ new Date(value + "T12:00:00Z");
		return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
	}
	function formatFlightDate(value, options) {
		if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat !== "function") return value;
		return new Intl.DateTimeFormat(void 0, {
			...options,
			timeZone: "UTC"
		}).format(/* @__PURE__ */ new Date(value + "T12:00:00Z"));
	}
	const summaryDateFormat = {
		weekday: "short",
		month: "short",
		day: "numeric"
	};
	function FlightDateText({ date, kind }) {
		if (DIL.useAppData((data) => data.nativeComponentNames?.includes("flight-native-date-label") === true)) return /* @__PURE__ */ __dil.jsx("flight-native-date-label", {
			date,
			kind
		});
		const weekday = kind === "weekday";
		return /* @__PURE__ */ __dil.jsx("text", {
			size: weekday ? "xs" : kind === "month" ? "sm" : "md",
			weight: weekday ? void 0 : "medium",
			color: weekday ? "tertiary" : void 0,
			textAlign: kind === "summary" ? "start" : "center"
		}, formatFlightDate(date, kind === "month" ? {
			month: "long",
			year: "numeric"
		} : weekday ? { weekday: "narrow" } : summaryDateFormat));
	}
	function displayDate(value, placeholder) {
		return validDate$1(value) ? formatFlightDate(value, summaryDateFormat) : placeholder;
	}
	function FlightDateInputs(props) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 120,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("label", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, props.labels.departure)), /* @__PURE__ */ __dil.jsx("date-picker", {
			placeholder: props.labels.departure,
			value: props.departure,
			min: props.today,
			disabled: props.disabled,
			block: true,
			size: "md",
			onChange: (value) => props.onChange({ departure_date: value })
		})), props.roundTrip && /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 120,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("label", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, props.labels.return)), /* @__PURE__ */ __dil.jsx("date-picker", {
			placeholder: props.labels.return,
			value: props.returnDate,
			min: props.departure > props.today ? props.departure : props.today,
			disabled: props.disabled,
			block: true,
			size: "md",
			onChange: (value) => props.onChange({ return_date: value })
		})));
	}
	function CalendarNavigation({ labels, disabled, previousDisabled, onPrevious, onNext, direction }) {
		return /* @__PURE__ */ __dil.jsx("row", { gap: 0 }, direction === "previous" && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: labels.previous_month,
			disabled: disabled || previousDisabled,
			onClick: () => {
				if (!disabled && !previousDisabled) onPrevious();
			},
			size: 44,
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-left",
			size: "sm"
		})), direction === "next" && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: labels.next_month,
			disabled,
			onClick: () => {
				if (!disabled) onNext();
			},
			size: 44,
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right",
			size: "sm"
		})));
	}

//#endregion
//#region internal/NativeFlightPickers.dil.tsx
	function NativeFlightAirportField({ componentKey, field, label, value, scope, icon, disabled, labels, onSelect }) {
		const instance = DIL.useId();
		const [generation, setGeneration] = useFlightSavedState(0, "FlightSearchForm", componentKey, "airport", field, "generation");
		const close = () => setGeneration((current) => current + 1);
		const anyLabel = labels.any_short || labels.any_airport;
		const summary = /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56
		}, /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: icon === "plane" ? "plane" : "pin" }), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			truncate: true
		}, value ? value + (scope === "city" && anyLabel ? " (" + anyLabel + ")" : "") : labels.location_hint), /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-down",
			size: "sm",
			color: "secondary"
		}));
		return disabled ? summary : /* @__PURE__ */ __dil.jsx("popover", { key: instance + ":" + generation }, /* @__PURE__ */ __dil.jsx("popover-trigger", { block: true }, summary), /* @__PURE__ */ __dil.jsx("popover-content", { showCloseButton: true }, /* @__PURE__ */ __dil.jsx("flight-native-airport-picker", {
			label,
			value,
			scope,
			disabled,
			labels,
			onSelect: (selection, selectionScope) => {
				const next = selection.trim();
				if (disabled || !next || next.length > 120) return;
				onSelect(next, selectionScope);
				close();
			},
			onCancel: close
		})));
	}
	function NativeFlightDateField({ componentKey, departure, returnDate, roundTrip, today, disabled, labels, allowTripTypeChange, onChange }) {
		const instance = DIL.useId();
		const initial = {
			trip_type: roundTrip ? "round_trip" : "one_way",
			departure_date: departure,
			return_date: returnDate
		};
		const [draft, setDraft] = useFlightSavedState(initial, "FlightSearchForm", componentKey, "nativeDates", "draft");
		const [generation, setGeneration] = useFlightSavedState(0, "FlightSearchForm", componentKey, "nativeDates", "generation");
		const close = () => setGeneration((current) => current + 1);
		const summary = /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56
		}, /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: "calendar" }), validDate$1(departure) ? /* @__PURE__ */ __dil.jsx(FlightDateText, {
			date: departure,
			kind: "summary"
		}) : /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, labels.departure), roundTrip && /* @__PURE__ */ __dil.jsx("text", null, "→"), roundTrip && (validDate$1(returnDate) ? /* @__PURE__ */ __dil.jsx(FlightDateText, {
			date: returnDate,
			kind: "summary"
		}) : /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, labels.return)));
		return disabled ? summary : /* @__PURE__ */ __dil.jsx("full-height-popover", {
			key: instance + ":" + generation,
			invokeTriggerCallback: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", {
			block: true,
			onClick: () => setDraft(initial)
		}, summary), /* @__PURE__ */ __dil.jsx("popover-content", { showCloseButton: false }, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			height: "100%",
			minHeight: 0,
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: labels.close || labels.done,
			onClick: close,
			size: 44,
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "x",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			textAlign: "center"
		}, labels.select_dates || labels.dates)), /* @__PURE__ */ __dil.jsx("box", { size: 44 })), /* @__PURE__ */ __dil.jsx("form", {
			onSubmit: () => {
				if (disabled || !validDate$1(draft.departure_date) || draft.departure_date < today || draft.trip_type === "round_trip" && (!validDate$1(draft.return_date) || draft.return_date < draft.departure_date)) return;
				onChange(draft);
				close();
			},
			width: "100%",
			flex: 1,
			minHeight: 0
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: draft.departure_date,
			returnDate: draft.return_date,
			roundTrip: draft.trip_type === "round_trip",
			onRoundTripChange: allowTripTypeChange ? (next) => setDraft((current) => ({
				...current,
				trip_type: next ? "round_trip" : "one_way",
				return_date: next ? current.return_date : ""
			})) : void 0,
			today,
			disabled,
			labels: {
				...labels,
				done: labels.apply || labels.done
			},
			onChange: (patch) => setDraft((current) => ({
				...current,
				...patch
			})),
			nativeSheet: true,
			submit: true,
			open: true,
			mode: "calendar",
			requireComplete: true
		})))));
	}

//#endregion
//#region internal/FlightSearchRequest.dil.ts
	const defaults = {
		multi_city_search_request_template: "Find one multi-city flight itinerary: {legs}; {party_size} {passengers}, {cabin}, {stops}. Use one whole-trip fare and seller link.",
		multi_city_retry_request_template: "Search again for one multi-city flight itinerary: {legs}; {party_size} {passengers}, {cabin}, {stops}. Preserve every leg.",
		multi_city_edit_request_template: "Help me change this multi-city flight itinerary: {legs}; {party_size} {passengers}, {cabin}, {stops}. Let me edit the details before searching.",
		multi_city_leg_template: "{origin} to {destination} on {departure_date}",
		search_request_template: "Find flights from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}.",
		retry_request_template: "Search again for flights from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}.",
		edit_request_template: "Help me change my flight search from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}. Let me edit these details before searching.",
		search_return: " and returning {date}",
		search_airport: "airport",
		any_airport: "any airport",
		round_trip: "Round trip",
		one_way: "One way",
		children_ages_template: "Known ages at departure: {ages}.",
		child: "child (2–11)",
		children_count: "children (2–11)",
		youth: "youth (12–17)",
		youths: "youths (12–17)",
		infant_in_seat: "infant in own seat (under 2)",
		infants_in_seat: "infants in own seats (under 2)",
		infant_in_lap: "lap infant (under 2)",
		infants_in_lap: "lap infants (under 2)",
		adult: "adult",
		adults: "adults",
		economy: "Economy",
		premium_economy: "Premium economy",
		business: "Business",
		first: "First",
		any_stops: "Any stops",
		nonstop: "Nonstop only",
		max_stops: "Maximum stops:",
		search_stop_direction: "per direction",
		time_outbound: "outbound",
		time_return: "return",
		time_after: "strictly after {time}",
		time_before: "strictly before {time}",
		time_both: "{after} and {before}",
		time_request: "Keep the {direction} departure {bounds} local time.",
		time_clear: "Allow any {direction} departure time; remove the previous time restriction.",
		airline_request: "Keep the airline filter for these airlines: {providers}. Book directly with these airlines.",
		all_airlines_request: "Allow any airline; remove the previous airline filter."
	};
	function formatFlightSearchRequest(request, labels, action = "search") {
		const copy = {
			...defaults,
			...labels
		};
		const location = (value, scope) => {
			const name = value.trim();
			if (scope === "airport") return name + " (" + copy.search_airport + ")";
			if (scope === "city" && !/\\(any(?: airport)?\\)\\s*$/i.test(name)) return name + " (" + copy.any_airport + ")";
			return name;
		};
		const trip = request.trip_type ?? (request.return_date ? "round_trip" : "one_way");
		const values = {
			origin: location(request.origin, request.origin_scope),
			destination: location(request.destination, request.destination_scope),
			trip_type: copy[trip],
			departure_date: request.departure_date,
			return_date: trip === "round_trip" ? copy.search_return.replace("{date}", () => request.return_date) : "",
			party_size: String(request.party_size),
			passengers: [copy[request.party_size === 1 ? "adult" : "adults"], ...[
				"children_count",
				"youths",
				"infants_in_seat",
				"infants_in_lap"
			].filter((field) => (request[field] ?? 0) > 0).map((field) => {
				const singular = {
					children_count: "child",
					youths: "youth",
					infants_in_seat: "infant_in_seat",
					infants_in_lap: "infant_in_lap"
				}[field];
				return String(request[field]) + " " + copy[request[field] === 1 ? singular : field];
			})].join(", "),
			cabin: copy[request.cabin_class],
			stops: request.max_connections == null ? copy.any_stops : request.max_connections === 0 ? copy.nonstop : \`\${copy.max_stops} \${request.max_connections} \${copy.search_stop_direction}\`
		};
		if (request.additional_legs?.length) values.legs = [request, ...request.additional_legs].map((leg) => copy.multi_city_leg_template.replace("{origin}", () => location(leg.origin, leg.origin_scope)).replace("{destination}", () => location(leg.destination, leg.destination_scope)).replace("{departure_date}", () => leg.departure_date)).join("; ");
		const templateKey = request.additional_legs?.length ? "multi_city_" + action + "_request_template" : action === "search" ? "search_request_template" : action + "_request_template";
		const suppliedTemplate = copy["editable_" + templateKey] ?? copy[templateKey];
		const message = (suppliedTemplate?.includes(values.legs ? "{legs}" : "{origin}") ? suppliedTemplate : defaults[templateKey]).replace(/\\{(\\w+)\\}/g, (match, key) => values[key] ?? match);
		const withAges = request.children_ages?.length ? message + " " + copy.children_ages_template.replace("{ages}", request.children_ages.join(", ")) : message;
		const withAirlines = request.airlines === void 0 ? withAges : withAges + " " + (request.airlines.length ? copy.airline_request.replace("{providers}", () => request.airlines.join(", ")) : copy.all_airlines_request);
		const timeRequest = (window, direction) => {
			if (window === void 0) return "";
			if (window === null) return " " + copy.time_clear.replace("{direction}", () => direction);
			const after = window.after ? copy.time_after.replace("{time}", () => window.after) : "";
			const before = window.before ? copy.time_before.replace("{time}", () => window.before) : "";
			const bounds = after && before ? copy.time_both.replace("{after}", () => after).replace("{before}", () => before) : after || before;
			if (!bounds) return "";
			return " " + copy.time_request.replace("{direction}", () => direction).replace("{bounds}", () => bounds);
		};
		return withAirlines + timeRequest(request.departure_time_window, copy.time_outbound) + (request.return_time_window === null || trip === "round_trip" && !request.additional_legs?.length ? timeRequest(request.return_time_window, copy.time_return) : "");
	}

//#endregion
//#region FlightSearchForm.dil.tsx
	function FlightSearchSheet({ calendarHeader, children, disabled, labels, tripType, onTripTypeChange, ...modal }) {
		return calendarHeader ? /* @__PURE__ */ __dil.jsx("flight-calendar-modal", {
			...modal,
			disabled,
			labels,
			tripType,
			onTripTypeChange
		}, children) : /* @__PURE__ */ __dil.jsx("host-modal", modal, children);
	}
	function FlightSearchForm(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("FlightSearchForm", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 150
		});
		return /* @__PURE__ */ __dil.jsx(FlightReveal, { stage: "search-form" }, /* @__PURE__ */ __dil.jsx(Resolved, {
			state,
			componentKey: props.__resolutionId ?? componentDataKey("FlightSearchForm", props)
		}));
	}
	function Resolved({ state, componentKey }) {
		const wide = DIL.useBreakpoint("md");
		const [edits, setEdits] = DIL.useState({});
		const [attempted, setAttempted] = DIL.useState(false);
		const instanceId = DIL.useId();
		const [datesOwner, setDatesOwner] = useFlightSavedState(null, "FlightSearchForm", componentKey, "datesOwner");
		const datesOpen = datesOwner === instanceId;
		const setDatesOpen = (open) => setDatesOwner(open ? instanceId : null);
		const [sheetState, setSheetState] = useFlightSavedState(null, "FlightSearchForm", componentKey, "sheetState");
		const sheet = sheetState?.owner === instanceId ? sheetState.sheet : "";
		const setSheet = (next) => setSheetState(next ? {
			owner: instanceId,
			sheet: next
		} : null);
		const [locationEdit, setLocationEdit] = useFlightSavedState("", "FlightSearchForm", componentKey, "locationEdit");
		const [dateEdits, setDateEdits] = useFlightSavedState({}, "FlightSearchForm", componentKey, "dateEdits");
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const enabled = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		DIL.useEffect(() => {
			if (!enabled) setSheet("");
		}, [enabled]);
		const presentationComponents = DIL.useAppData((data) => data.nativeComponentNames ?? []);
		const labels = formLabels({
			passenger_adults: "Adults",
			passenger_adults_hint: "18+",
			passenger_children: "Children",
			passenger_children_hint: "Ages 2–17",
			passenger_infants_in_seat: "Infants in seat",
			passenger_infants_in_lap: "Infants on lap",
			passenger_infants_hint: "Under 2",
			multi_city: "Multi-city",
			flight_number: "Flight {number}",
			add_flight: "Add stop",
			remove_flight: "Remove flight {number}",
			multi_city_hint: "One trip, 2–4 flights. Passenger counts and cabin apply to every flight.",
			multi_city_error: "Add 2–4 flights, each with a route and a date in trip order.",
			child: "child (2–11)",
			children_count: "children (2–11)",
			youth: "youth (12–17)",
			youths: "youths (12–17)",
			infant_in_seat: "infant in own seat (under 2)",
			infants_in_seat: "infants in own seats (under 2)",
			infant_in_lap: "lap infant (under 2)",
			infants_in_lap: "lap infants (under 2)",
			...state.labels
		});
		const useAirportPicker = presentationComponents.includes("flight-airport-picker") && [
			"airport_search",
			"airport_results",
			"airport_no_matches",
			"airport_lookup_hint"
		].every((key) => Boolean(labels[key]));
		const draft = {
			...state.draft,
			...edits
		};
		const useAirportAutocomplete = useAirportPicker && presentationComponents.includes("flight-airport-autocomplete");
		const useSheets = capabilities?.supportsHostModal === true && [
			"close",
			"apply",
			"select_origin",
			"select_destination",
			"location_help",
			"date_help"
		].every((key) => Boolean(labels[key]));
		const nativeForm = presentationComponents.includes("full-height-popover") && !useSheets;
		const nativeAirport = !wide && presentationComponents.includes("flight-native-airport-picker");
		const hasCalendarLabels = hasFlightCalendarLabels(labels);
		const nativeCalendar = !wide && !useSheets && hasCalendarLabels && presentationComponents.includes("full-height-popover") && presentationComponents.includes("flight-native-date-label");
		const useCalendarHeader = wide && presentationComponents.includes("flight-calendar-modal");
		const useWebPreferences = presentationComponents.includes("flight-search-preference") && presentationComponents.includes("flight-passenger-popover");
		const openLocation = (field) => {
			if (!enabled) return;
			setLocationEdit(draft[field] ?? "");
			setSheet(field);
		};
		const openDates = (open) => {
			if (!useSheets) {
				setDatesOpen(open);
				return;
			}
			if (!enabled) return;
			setDateEdits({
				trip_type: draft.trip_type ?? "round_trip",
				departure_date: draft.departure_date ?? "",
				return_date: draft.return_date ?? ""
			});
			setSheet(open ? "dates" : "");
		};
		const trip = draft.additional_legs?.length ? "multi_city" : draft.trip_type ?? "round_trip";
		const legs = [draft, ...draft.additional_legs?.length ? draft.additional_legs : [{}]];
		const now = DIL.useNow(false);
		const today = new Date(now).toISOString().slice(0, 10);
		const error = validationError(draft, trip, today, labels);
		const change = (patch) => setEdits((previous) => ({
			...previous,
			...patch,
			...patch.trip_type && patch.trip_type !== "round_trip" && draft.return_time_window !== void 0 ? { return_time_window: null } : {}
		}));
		const changeLeg = (index, patch) => {
			if (index === 0) change(patch);
			else change({ additional_legs: legs.slice(1).map((leg, i) => i + 1 === index ? {
				...leg,
				...patch
			} : leg) });
		};
		const chooseTrip = (value) => {
			setSheet("");
			setDatesOpen(false);
			change({
				trip_type: value,
				return_date: value === "round_trip" ? draft.return_date ?? "" : "",
				additional_legs: value === "multi_city" ? draft.additional_legs?.length ? draft.additional_legs : trip === "round_trip" && draft.return_date ? [{
					origin: draft.destination,
					origin_scope: draft.destination_scope,
					destination: draft.origin,
					destination_scope: draft.origin_scope,
					departure_date: draft.return_date
				}] : [{}] : []
			});
		};
		const applySheet = () => {
			if (!enabled) return;
			if (sheet === "dates") {
				const sheetTrip = dateEdits.trip_type ?? trip;
				if (!validDate(dateEdits.departure_date) || dateEdits.departure_date < today || sheetTrip === "round_trip" && (!validDate(dateEdits.return_date) || dateEdits.return_date < dateEdits.departure_date)) return;
				change(dateEdits);
			} else if (sheet === "origin" || sheet === "destination") {
				const value = locationEdit.trim();
				if (!value || value.length > 120) return;
				const scope = sheet === "origin" ? "origin_scope" : "destination_scope";
				change({
					[sheet]: value,
					[scope]: value === draft[sheet]?.trim() ? draft[scope] ?? null : null
				});
			} else return;
			setSheet("");
		};
		const changeDateTrip = (roundTrip) => {
			if (!enabled) return;
			setDateEdits((previous) => ({
				...previous,
				trip_type: roundTrip ? "round_trip" : "one_way",
				...roundTrip ? {} : {
					return_date: "",
					...draft.return_time_window !== void 0 ? { return_time_window: null } : {}
				}
			}));
		};
		const submit = () => {
			setAttempted(true);
			if (!enabled || validationError(draft, trip, today, labels)) return;
			GenUI.issueNewTurn(formatFlightSearchRequest({
				...draft,
				origin: draft.origin,
				destination: draft.destination,
				departure_date: draft.departure_date,
				trip_type: trip,
				return_date: trip === "round_trip" ? draft.return_date : void 0,
				additional_legs: trip === "multi_city" ? legs.slice(1).map((leg) => ({
					...leg,
					origin: leg.origin,
					destination: leg.destination,
					departure_date: leg.departure_date
				})) : []
			}, labels));
		};
		return /* @__PURE__ */ __dil.jsx("form", {
			onSubmit: submit,
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(SearchControls, { supported: presentationComponents.includes("flight-search-controls") }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx(SearchPreference, {
			webStyle: useWebPreferences,
			kind: "trip",
			ariaLabel: labels.trip_type,
			value: trip,
			placeholder: labels.trip_type,
			disabled: !enabled,
			size: wide ? "xl" : "md",
			icon: "compare-arrows",
			pill: true,
			block: false,
			options: [
				{
					value: "round_trip",
					label: labels.round_trip
				},
				{
					value: "one_way",
					label: labels.one_way
				},
				{
					value: "multi_city",
					label: labels.multi_city
				}
			],
			onChange: chooseTrip
		}), /* @__PURE__ */ __dil.jsx(PassengerPicker, {
			draft,
			labels,
			wide,
			enabled,
			webStyle: useWebPreferences,
			onChange: change
		}), /* @__PURE__ */ __dil.jsx(SearchPreference, {
			webStyle: useWebPreferences,
			kind: "cabin",
			ariaLabel: labels.cabin,
			value: draft.cabin_class,
			disabled: !enabled,
			size: wide ? "xl" : "md",
			icon: "dollar-circle",
			pill: true,
			block: false,
			options: [
				"economy",
				"premium_economy",
				"business",
				"first"
			].map((value) => ({
				value,
				label: labels[value]
			})),
			onChange: (value) => change({ cabin_class: value })
		}), /* @__PURE__ */ __dil.jsx(SearchPreference, {
			webStyle: useWebPreferences,
			kind: "stops",
			ariaLabel: labels.connections,
			placeholder: labels.connections,
			block: false,
			value: draft.max_connections == null ? useWebPreferences ? "any" : "" : String(draft.max_connections),
			disabled: !enabled,
			size: wide ? "xl" : "md",
			pill: true,
			options: [
				{
					value: "any",
					label: labels.any_stops
				},
				{
					value: "0",
					label: labels.nonstop
				},
				{
					value: "1",
					label: labels.one_stop_or_fewer ?? labels.max_stops + " " + new Intl.NumberFormat().format(1)
				},
				{
					value: "2",
					label: labels.two_stops_or_fewer ?? labels.max_stops + " " + new Intl.NumberFormat().format(2)
				},
				...draft.max_connections != null && draft.max_connections > 2 ? [{
					value: String(draft.max_connections),
					label: labels.max_stops + " " + new Intl.NumberFormat().format(draft.max_connections)
				}] : []
			],
			onChange: (value) => change({ max_connections: value === "any" ? null : Number(value) })
		}))), trip === "multi_city" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(SearchSurface, {
			wide,
			grouped: true
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			disableAutoSpacing: true
		}, legs.map((leg, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 2,
			width: "100%",
			disableAutoSpacing: true
		}, index > 0 && /* @__PURE__ */ __dil.jsx("box", {
			height: 1,
			width: "100%",
			border: {
				size: .5,
				color: "subtle"
			}
		}), /* @__PURE__ */ __dil.jsx(MultiCityLeg, {
			componentKey: JSON.stringify([
				componentKey,
				"leg",
				index
			]),
			leg,
			index,
			labels,
			wide,
			enabled,
			airportAutocomplete: useAirportAutocomplete,
			useSheets,
			nativeAirport,
			nativeCalendar,
			useCalendarHeader,
			reserveRemoveSpace: legs.length > 2,
			earliest: index > 0 && legs[index - 1].departure_date > today ? legs[index - 1].departure_date : today,
			onChange: (patch) => changeLeg(index, patch),
			onRemove: legs.length > 2 && index > 0 ? () => {
				const remaining = legs.filter((_, i) => i !== index);
				change({
					...legFields(remaining[0]),
					additional_legs: remaining.slice(1).map(legFields)
				});
			} : void 0
		}))))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			justify: "between",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("button", {
			disabled: !enabled || legs.length >= 4,
			pill: true,
			color: "secondary",
			variant: "outline",
			onClick: () => change({ additional_legs: [...legs.slice(1), {
				origin: legs[legs.length - 1].destination,
				origin_scope: legs[legs.length - 1].destination_scope
			}] })
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "plus",
			size: "md",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("text", { color: "inherit" }, labels.add_flight)), presentationComponents.includes("flight-search-submit") ? /* @__PURE__ */ __dil.jsx("flight-search-submit", {
			label: labels.search_compact || labels.search,
			disabled: !enabled,
			block: false
		}) : /* @__PURE__ */ __dil.jsx("button", {
			submit: true,
			disabled: !enabled,
			size: "xl",
			color: "primary"
		}, /* @__PURE__ */ __dil.jsx("text", { color: "inherit" }, labels.search_compact || labels.search)))) : /* @__PURE__ */ __dil.jsx(SearchSurface, { wide }, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 0,
			align: "center",
			wrap: wide ? "nowrap" : "wrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: wide ? 1.5 : 1,
			minWidth: wide ? 0 : "100%",
			padding: { left: wide ? 4 : 0 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 4,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 0,
			align: "center",
			wrap: wide ? "nowrap" : "wrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: wide ? 0 : "100%"
		}, /* @__PURE__ */ __dil.jsx(LocationField, {
			nativePicker: nativeAirport ? {
				componentKey,
				labels,
				scope: draft.origin_scope,
				onSelect: (value, scope) => change({
					origin: value,
					origin_scope: scope
				})
			} : void 0,
			label: labels.origin,
			placeholder: labels.location_hint,
			value: draft.origin ?? "",
			anyLabel: labels.any_short,
			scopeLabel: draft.origin_scope === "city" ? labels.any_airport : void 0,
			disabled: !enabled,
			name: "origin",
			icon: "plane",
			compact: wide,
			airportPicker: wide && useAirportAutocomplete ? {
				labels,
				city: draft.origin_scope === "city" ? draft.origin : void 0,
				selected: draft.origin_scope === "airport" ? draft.origin : void 0,
				onSelect: (code) => change({
					origin: code,
					origin_scope: "airport"
				}),
				onSelectCity: (city) => change({
					origin: city,
					origin_scope: "city"
				})
			} : void 0,
			onChange: (value) => change({
				origin: value,
				origin_scope: null
			}),
			onOpen: useSheets ? () => openLocation("origin") : void 0
		})), wide && /* @__PURE__ */ __dil.jsx(SwapButton, {
			label: labels.swap,
			compact: true,
			disabled: !enabled,
			onClick: () => change({
				origin: draft.destination ?? "",
				destination: draft.origin ?? "",
				origin_scope: draft.destination_scope ?? null,
				destination_scope: draft.origin_scope ?? null
			})
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: wide ? 0 : "100%"
		}, /* @__PURE__ */ __dil.jsx(LocationField, {
			nativePicker: nativeAirport ? {
				componentKey,
				labels,
				scope: draft.destination_scope,
				onSelect: (value, scope) => change({
					destination: value,
					destination_scope: scope
				})
			} : void 0,
			label: labels.destination,
			placeholder: labels.location_hint,
			value: draft.destination ?? "",
			anyLabel: labels.any_short,
			scopeLabel: draft.destination_scope === "city" ? labels.any_airport : void 0,
			disabled: !enabled,
			name: "destination",
			icon: "map-pin",
			compact: wide,
			airportPicker: wide && useAirportAutocomplete ? {
				labels,
				city: draft.destination_scope === "city" ? draft.destination : void 0,
				selected: draft.destination_scope === "airport" ? draft.destination : void 0,
				onSelect: (code) => change({
					destination: code,
					destination_scope: "airport"
				}),
				onSelectCity: (city) => change({
					destination: city,
					destination_scope: "city"
				})
			} : void 0,
			onChange: (value) => change({
				destination: value,
				destination_scope: null
			}),
			onOpen: useSheets ? () => openLocation("destination") : void 0
		})))), !wide && /* @__PURE__ */ __dil.jsx(SwapButton, {
			label: labels.swap,
			disabled: !enabled,
			onClick: () => change({
				origin: draft.destination ?? "",
				destination: draft.origin ?? "",
				origin_scope: draft.destination_scope ?? null,
				destination_scope: draft.origin_scope ?? null
			})
		}))), wide && /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 34,
			border: {
				size: .5,
				color: "subtle"
			}
		}), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: wide ? 0 : "100%",
			maxWidth: wide ? 225 : void 0
		}, nativeCalendar ? /* @__PURE__ */ __dil.jsx(NativeFlightDateField, {
			componentKey,
			departure: draft.departure_date ?? "",
			returnDate: draft.return_date ?? "",
			roundTrip: trip === "round_trip",
			allowTripTypeChange: true,
			today,
			disabled: !enabled,
			labels,
			onChange: change
		}) : /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: draft.departure_date ?? "",
			returnDate: draft.return_date ?? "",
			roundTrip: trip === "round_trip",
			today,
			disabled: !enabled,
			labels,
			onChange: change,
			onOpenChange: openDates,
			open: useSheets ? sheet === "dates" : datesOpen,
			mode: useSheets || wide ? "summary" : void 0,
			compact: wide
		})), (!nativeForm || !datesOpen || nativeCalendar || wide || useSheets || typeof Intl === "undefined" || typeof Intl.DateTimeFormat !== "function" || !hasCalendarLabels) && /* @__PURE__ */ __dil.jsx("box", {
			padding: { top: wide ? 0 : 3 },
			width: wide ? void 0 : "100%"
		}, presentationComponents.includes("flight-search-submit") ? /* @__PURE__ */ __dil.jsx("flight-search-submit", {
			label: wide ? labels.search_compact || labels.search : labels.search,
			disabled: !enabled,
			block: !wide
		}) : /* @__PURE__ */ __dil.jsx("button", {
			submit: true,
			disabled: !enabled,
			block: !wide,
			size: "xl",
			color: "primary"
		}, nativeForm ? wide ? labels.search_compact || labels.search : labels.search : /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "inherit"
		}, wide ? labels.search_compact || labels.search : labels.search))))), trip !== "multi_city" && !useSheets && wide && datesOpen && /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: wide ? 760 : 400,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("card", {
			padding: 4,
			shadow: true,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: draft.departure_date ?? "",
			returnDate: draft.return_date ?? "",
			roundTrip: trip === "round_trip",
			today,
			disabled: !enabled,
			labels,
			onChange: change,
			onOpenChange: setDatesOpen,
			open: datesOpen,
			mode: "calendar"
		})))), useSheets && /* @__PURE__ */ __dil.jsx(FlightSearchSheet, {
			calendarHeader: sheet === "dates" && useCalendarHeader,
			open: enabled && sheet !== "",
			disabled: !enabled,
			labels,
			tripType: dateEdits.trip_type ?? trip,
			onTripTypeChange: (value) => changeDateTrip(value === "round_trip"),
			title: sheet === "dates" ? labels.select_dates || labels.dates : sheet === "origin" ? labels.select_origin : labels.select_destination,
			description: sheet === "dates" ? labels.date_help : labels.location_help,
			closeLabel: labels.close,
			maxWidth: sheet === "dates" && wide ? 800 : 440,
			presentation: sheet === "dates" ? wide ? "calendar-wide" : "calendar" : useAirportPicker ? "full" : void 0,
			onOpenChange: (open) => {
				if (!open) setSheet("");
			}
		}, /* @__PURE__ */ __dil.jsx("form", {
			onSubmit: applySheet,
			width: "100%",
			height: sheet === "dates" || useAirportPicker ? "100%" : void 0,
			minHeight: 0
		}, sheet === "dates" ? /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: dateEdits.departure_date ?? "",
			returnDate: dateEdits.return_date ?? "",
			roundTrip: (dateEdits.trip_type ?? trip) === "round_trip",
			tripTypeInHeader: useCalendarHeader,
			onRoundTripChange: changeDateTrip,
			today,
			disabled: !enabled,
			labels: {
				...labels,
				done: labels.apply
			},
			onChange: (patch) => setDateEdits((previous) => ({
				...previous,
				...patch
			})),
			submit: true,
			open: true,
			mode: "calendar",
			requireComplete: true
		}) : useAirportPicker ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%",
			height: "100%",
			minHeight: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("flight-airport-picker", {
			query: locationEdit,
			city: sheet === "origin" ? draft.origin_scope === "city" ? draft.origin : void 0 : draft.destination_scope === "city" ? draft.destination : void 0,
			selected: sheet === "origin" ? draft.origin_scope === "airport" ? draft.origin : void 0 : draft.destination_scope === "airport" ? draft.destination : void 0,
			disabled: !enabled,
			labels,
			onChange: setLocationEdit,
			onSelectCity: (city) => {
				if (!enabled || sheet !== "origin" && sheet !== "destination" || (sheet === "origin" ? draft.origin_scope : draft.destination_scope) !== "city" || city !== draft[sheet]) return;
				change({
					[sheet]: city,
					[sheet + "_scope"]: "city"
				});
				setSheet("");
			},
			onSelect: (code) => {
				if (!enabled || sheet !== "origin" && sheet !== "destination") return;
				change({
					[sheet]: code,
					[sheet + "_scope"]: "airport"
				});
				setSheet("");
			}
		}), /* @__PURE__ */ __dil.jsx("button", {
			submit: true,
			size: "xl",
			block: true,
			disabled: !enabled || !locationEdit.trim() || locationEdit.trim().length > 120
		}, labels.apply)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("label", null, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, sheet === "origin" ? labels.origin : labels.destination), /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56,
			padding: 3,
			radius: "full",
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "search",
			size: "2xl",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("input", {
			name: "location",
			value: locationEdit,
			placeholder: labels.location_hint,
			disabled: !enabled,
			onChange: setLocationEdit,
			variant: "plain",
			size: "lg"
		}))), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, labels.location_help), /* @__PURE__ */ __dil.jsx("button", {
			submit: true,
			size: "xl",
			block: true,
			color: "primary",
			disabled: !enabled || !locationEdit.trim() || locationEdit.trim().length > 120
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "inherit"
		}, labels.apply))))), attempted && error && /* @__PURE__ */ __dil.jsx("text", {
			color: "danger",
			size: "sm"
		}, error), !enabled && /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, labels.unavailable));
	}
	function SearchPreference({ webStyle, kind, ...props }) {
		return webStyle ? /* @__PURE__ */ __dil.jsx("flight-search-preference", {
			kind,
			ariaLabel: props.ariaLabel,
			value: props.value,
			placeholder: props.placeholder,
			disabled: props.disabled,
			options: props.options,
			onChange: props.onChange
		}) : /* @__PURE__ */ __dil.jsx("select", props);
	}
	function SearchControls({ supported, children }) {
		return supported ? /* @__PURE__ */ __dil.jsx("flight-search-controls", null, children) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
	}
	function formLabels(saved) {
		return {
			...saved,
			close: saved.close || saved.done,
			apply: saved.apply || saved.done,
			select_origin: saved.select_origin || saved.origin,
			select_destination: saved.select_destination || saved.destination,
			location_help: saved.location_help || saved.location_hint,
			date_help: saved.date_help || saved.dates,
			airport_search: saved.airport_search || saved.location_hint,
			airport_results: saved.airport_results || saved.location_hint,
			airport_no_matches: saved.airport_no_matches || saved.location_hint,
			airport_lookup_hint: saved.airport_lookup_hint || saved.location_hint
		};
	}
	function validationError(draft, trip, today, labels) {
		const origin = draft.origin?.trim() ?? "";
		const destination = draft.destination?.trim() ?? "";
		if (!origin || !destination || origin.length > 120 || destination.length > 120 || origin.toLowerCase() === destination.toLowerCase()) return labels.route_error;
		if (![
			"one_way",
			"round_trip",
			"multi_city"
		].includes(trip)) return labels.trip_error;
		if (trip === "multi_city") {
			if (draft.return_date) return labels.date_error;
			const legs = [draft, ...draft.additional_legs ?? []];
			if (legs.length < 2 || legs.length > 4) return labels.multi_city_error;
			let previous = today;
			for (const leg of legs) {
				const from = leg.origin?.trim() ?? "";
				const to = leg.destination?.trim() ?? "";
				if (!from || !to || from.length > 120 || to.length > 120 || from.toLowerCase() === to.toLowerCase()) return labels.multi_city_error;
				if (!validDate(leg.departure_date) || leg.departure_date < previous) return labels.multi_city_error;
				previous = leg.departure_date;
			}
		}
		if (!validDate(draft.departure_date) || draft.departure_date < today || trip === "round_trip" && (!validDate(draft.return_date) || draft.return_date < draft.departure_date)) return labels.date_error;
		const knownChildren = (draft.children_ages ?? []).map((age) => ({ age }));
		if (knownChildren.some((child) => !childCategory(child)) || knownChildren.filter((child) => childCategory(child) === "child").length > (draft.children_count ?? 0) || knownChildren.filter((child) => childCategory(child) === "youth").length > (draft.youths ?? 0)) return labels.options_error;
		if (!Number.isInteger(draft.party_size) || draft.party_size < 1 || draft.party_size > 9 || [
			draft.children_count ?? 0,
			draft.youths ?? 0,
			draft.infants_in_seat ?? 0,
			draft.infants_in_lap ?? 0
		].some((count) => !Number.isInteger(count) || count < 0) || draft.party_size + (draft.children_count ?? 0) + (draft.youths ?? 0) + (draft.infants_in_seat ?? 0) + (draft.infants_in_lap ?? 0) > 9 || (draft.infants_in_lap ?? 0) > draft.party_size || ![
			"economy",
			"premium_economy",
			"business",
			"first"
		].includes(draft.cabin_class) || draft.max_connections != null && (!Number.isInteger(draft.max_connections) || draft.max_connections < 0 || draft.max_connections > 9)) return labels.options_error;
	}
	function validDate(value) {
		if (!value || !/^\\d{4}-\\d{2}-\\d{2}$/.test(value)) return false;
		const parsed = /* @__PURE__ */ new Date(value + "T00:00:00Z");
		return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
	}
	function childCategory(child) {
		if (child.age === void 0) return child.category;
		if (!Number.isInteger(child.age) || child.age < 2 || child.age > 17) return void 0;
		return child.age < 12 ? "child" : "youth";
	}
	function childPassengers(draft) {
		if (draft.child_edits) return draft.child_edits;
		const known = (draft.children_ages ?? []).map((age) => ({ age }));
		const children = known.filter((child) => childCategory(child) === "child").length;
		const youths = known.filter((child) => childCategory(child) === "youth").length;
		return [
			...known,
			...Array.from({ length: Math.max(0, (draft.children_count ?? 0) - children) }, () => ({ category: "child" })),
			...Array.from({ length: Math.max(0, (draft.youths ?? 0) - youths) }, () => ({ category: "youth" }))
		];
	}
	function PassengerPicker({ draft, labels, wide, enabled, webStyle = false, onChange }) {
		const children = childPassengers(draft);
		const categories = [
			"party_size",
			"children",
			"infants_in_seat",
			"infants_in_lap"
		];
		const total = draft.party_size + children.length + (draft.infants_in_seat ?? 0) + (draft.infants_in_lap ?? 0);
		const summary = total === draft.party_size ? String(total) + " " + labels[total === 1 ? "adult" : "adults"] : String(total) + " " + (labels.travelers ?? "travelers");
		const categoryLabels = {
			party_size: labels.passenger_adults,
			children: labels.passenger_children,
			infants_in_seat: labels.passenger_infants_in_seat,
			infants_in_lap: labels.passenger_infants_in_lap
		};
		const hints = {
			party_size: labels.passenger_adults_hint,
			children: labels.passenger_children_hint,
			infants_in_seat: labels.passenger_infants_hint,
			infants_in_lap: labels.passenger_infants_hint
		};
		const changeChildren = (next) => onChange({
			child_edits: next,
			children_count: next.filter((child) => childCategory(child) === "child").length,
			youths: next.filter((child) => childCategory(child) === "youth").length,
			children_ages: next.filter((child) => child.age !== void 0).map((child) => child.age)
		});
		const trigger = /* @__PURE__ */ __dil.jsx("box", {
			border: {
				size: 1,
				color: "default"
			},
			radius: "full",
			padding: { x: 4 },
			height: wide ? 40 : 32
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "users",
			size: "lg"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "inherit"
		}, summary), /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-down",
			size: "sm",
			color: "secondary"
		})));
		if (!enabled) return /* @__PURE__ */ __dil.jsx("button", {
			disabled: true,
			pill: true,
			variant: "outline",
			color: "secondary",
			size: wide ? "xl" : "md"
		}, summary);
		const editor = /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: webStyle ? { x: 2.5 } : 4,
			maxHeight: 480,
			scrollable: true,
			disableAutoSpacing: true
		}, !webStyle && /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, labels.travelers_title ?? "Travelers"), /* @__PURE__ */ __dil.jsx("col", {
			gap: webStyle ? 0 : 3,
			disableAutoSpacing: true
		}, categories.map((field, index) => {
			const count = field === "children" ? children.length : draft[field] ?? 0;
			const minimum = field === "party_size" ? Math.max(1, draft.infants_in_lap ?? 0) : 0;
			const maximum = field === "party_size" ? 9 : field === "infants_in_lap" ? draft.party_size : 8;
			const category = categoryLabels[field];
			return /* @__PURE__ */ __dil.jsx("col", {
				key: field,
				gap: webStyle ? 0 : 2,
				disableAutoSpacing: true
			}, webStyle && index > 0 && /* @__PURE__ */ __dil.jsx("divider", { spacing: 0 }), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				justify: "between",
				gap: 3,
				minHeight: webStyle ? 68 : void 0,
				padding: webStyle ? { y: 3 } : void 0
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, category), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: webStyle ? "tertiary" : "secondary"
			}, hints[field])), /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: webStyle ? 3 : 2
			}, /* @__PURE__ */ __dil.jsx("button", {
				label: (labels.remove_passenger ?? "Remove {category}").replace("{category}", category),
				disabled: count <= minimum,
				size: "sm",
				uniform: true,
				variant: webStyle ? "soft" : "outline",
				color: "secondary",
				onClick: () => field === "children" ? changeChildren(children.slice(0, -1)) : onChange({ [field]: count - 1 })
			}, webStyle ? /* @__PURE__ */ __dil.jsx("icon", {
				name: "minus",
				size: "md"
			}) : "−"), /* @__PURE__ */ __dil.jsx("box", {
				width: webStyle ? void 0 : 20,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, String(count))), /* @__PURE__ */ __dil.jsx("button", {
				label: (labels.add_passenger ?? "Add {category}").replace("{category}", category),
				disabled: total >= 9 || count >= maximum,
				size: "sm",
				uniform: true,
				variant: webStyle ? "soft" : "outline",
				color: "secondary",
				onClick: () => field === "children" ? changeChildren([...children, { category: "child" }]) : onChange({ [field]: count + 1 })
			}, webStyle ? /* @__PURE__ */ __dil.jsx("icon", {
				name: "plus",
				size: "md"
			}) : "+"))));
		})));
		if (webStyle) return /* @__PURE__ */ __dil.jsx("flight-passenger-popover", { summary }, editor);
		return /* @__PURE__ */ __dil.jsx("popover", null, /* @__PURE__ */ __dil.jsx("popover-trigger", null, trigger), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			side: "bottom",
			sideOffset: 8,
			width: 320
		}, editor));
	}
	function legFields(leg) {
		return {
			origin: leg.origin,
			destination: leg.destination,
			origin_scope: leg.origin_scope,
			destination_scope: leg.destination_scope,
			departure_date: leg.departure_date
		};
	}
	function MultiCityLeg({ componentKey, leg, index, labels, wide, enabled, airportAutocomplete, useSheets, nativeAirport, nativeCalendar, useCalendarHeader, reserveRemoveSpace, earliest, onChange, onRemove }) {
		const title = labels.flight_number.replace("{number}", String(index + 1));
		const instanceId = DIL.useId();
		const [datesOwner, setDatesOwner] = useFlightSavedState(null, "FlightSearchForm", componentKey, "datesOwner");
		const datesOpen = datesOwner === instanceId;
		const setDatesOpen = (open) => setDatesOwner(open ? instanceId : null);
		const [dateEdit, setDateEdit] = useFlightSavedState("", "FlightSearchForm", componentKey, "dateEdit");
		DIL.useEffect(() => {
			if (!enabled) setDatesOpen(false);
		}, [enabled]);
		const dateLabels = {
			...labels,
			dates: title + " · " + labels.dates,
			dates_compact: labels.dates_compact || labels.dates
		};
		const openDates = (open) => {
			if (!enabled) return;
			setDateEdit(leg.departure_date ?? "");
			setDatesOpen(open);
		};
		const swap = () => onChange({
			origin: leg.destination ?? "",
			destination: leg.origin ?? "",
			origin_scope: leg.destination_scope ?? null,
			destination_scope: leg.origin_scope ?? null
		});
		const dateControl = nativeCalendar ? /* @__PURE__ */ __dil.jsx(NativeFlightDateField, {
			componentKey,
			departure: leg.departure_date ?? "",
			returnDate: "",
			roundTrip: false,
			today: earliest,
			disabled: !enabled,
			labels: dateLabels,
			onChange: ({ departure_date }) => onChange({ departure_date })
		}) : /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: leg.departure_date ?? "",
			returnDate: "",
			roundTrip: false,
			today: earliest,
			disabled: !enabled,
			labels: dateLabels,
			onChange,
			onOpenChange: openDates,
			open: datesOpen,
			mode: "summary",
			compact: wide
		});
		const removeControl = onRemove ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: labels.remove_flight.replace("{number}", String(index + 1)),
			tooltip: labels.remove_flight.replace("{number}", String(index + 1)),
			disabled: !enabled,
			onClick: onRemove,
			size: 36,
			minSize: 36,
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "trash",
			size: "lg",
			color: "secondary"
		})) : null;
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "group",
			ariaLabel: title,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 0,
			align: "center",
			wrap: wide ? "nowrap" : "wrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: wide ? 1.5 : 1,
			minWidth: wide ? 0 : "100%",
			padding: { left: wide ? 4 : 0 }
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 4,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: wide ? 3 : 0,
			align: "center",
			wrap: wide ? "nowrap" : "wrap"
		}, ["origin", "destination"].map((field) => {
			const scope = field === "origin" ? "origin_scope" : "destination_scope";
			return /* @__PURE__ */ __dil.jsx("row", {
				key: field,
				flex: 1,
				minWidth: wide ? 0 : "100%",
				gap: wide ? 3 : 0,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx(LocationField, {
				nativePicker: nativeAirport ? {
					labels,
					componentKey,
					scope: leg[scope],
					onSelect: (value, selectionScope) => onChange({
						[field]: value,
						[scope]: selectionScope
					})
				} : void 0,
				name: "flight-" + String(index + 1) + "-" + field,
				label: labels[field],
				placeholder: labels.location_hint,
				value: leg[field] ?? "",
				scopeLabel: leg[scope] === "city" ? labels.any_airport : void 0,
				anyLabel: labels.any_short,
				disabled: !enabled,
				icon: field === "origin" ? "plane" : "map-pin",
				compact: wide,
				onChange: (value) => onChange({
					[field]: value,
					[scope]: null
				}),
				airportPicker: airportAutocomplete ? {
					labels,
					city: leg[scope] === "city" ? leg[field] : void 0,
					selected: leg[scope] === "airport" ? leg[field] : void 0,
					onSelect: (code) => onChange({
						[field]: code,
						[scope]: "airport"
					}),
					onSelectCity: (city) => onChange({
						[field]: city,
						[scope]: "city"
					})
				} : void 0
			})), wide && field === "origin" && /* @__PURE__ */ __dil.jsx(SwapButton, {
				label: title + " · " + labels.swap,
				compact: true,
				disabled: !enabled,
				onClick: swap
			}));
		}))), !wide && /* @__PURE__ */ __dil.jsx(SwapButton, {
			label: title + " · " + labels.swap,
			disabled: !enabled,
			onClick: swap
		}))), wide && /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			height: 34,
			border: {
				size: .5,
				color: "subtle"
			}
		}), wide && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0,
			maxWidth: 225
		}, dateControl), wide && reserveRemoveSpace && /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			minSize: 36
		}, removeControl), !wide && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: "100%",
			gap: 0,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, dateControl), onRemove && /* @__PURE__ */ __dil.jsx("box", {
			size: 36,
			minSize: 36
		}, removeControl))), !useSheets && datesOpen && /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: wide ? 760 : 400,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("card", {
			padding: 4,
			shadow: true,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: leg.departure_date ?? "",
			returnDate: "",
			roundTrip: false,
			today: earliest,
			disabled: !enabled,
			labels,
			onChange,
			onOpenChange: setDatesOpen,
			open: true,
			mode: "calendar"
		})))), useSheets && /* @__PURE__ */ __dil.jsx(FlightSearchSheet, {
			calendarHeader: useCalendarHeader,
			open: enabled && datesOpen,
			disabled: !enabled,
			labels,
			title: title + " · " + (labels.select_dates || labels.dates),
			description: labels.date_help,
			closeLabel: labels.close,
			maxWidth: wide ? 800 : 440,
			presentation: wide ? "calendar-wide" : "calendar",
			onOpenChange: (open) => {
				if (!open) setDatesOpen(false);
			}
		}, /* @__PURE__ */ __dil.jsx("form", {
			width: "100%",
			height: "100%",
			minHeight: 0,
			onSubmit: () => {
				if (!enabled || !validDate(dateEdit) || dateEdit < earliest) return;
				onChange({ departure_date: dateEdit });
				setDatesOpen(false);
			}
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
			componentKey,
			departure: dateEdit,
			returnDate: "",
			roundTrip: false,
			today: earliest,
			disabled: !enabled,
			labels: {
				...labels,
				done: labels.apply
			},
			onChange: (patch) => {
				if (patch.departure_date !== void 0) setDateEdit(patch.departure_date);
			},
			submit: true,
			open: true,
			mode: "calendar",
			requireComplete: true
		})))));
	}
	function LocationField({ label, placeholder, value, scopeLabel, anyLabel, disabled, name, icon, compact = false, onChange, onOpen, airportPicker, nativePicker }) {
		if (nativePicker) return /* @__PURE__ */ __dil.jsx(NativeFlightAirportField, {
			...nativePicker,
			field: name,
			label,
			value,
			icon,
			disabled
		});
		if (airportPicker) {
			const autocomplete = /* @__PURE__ */ __dil.jsx("flight-airport-autocomplete", {
				...airportPicker,
				name,
				label,
				anyLabel,
				query: value,
				disabled,
				onChange
			});
			return compact ? autocomplete : /* @__PURE__ */ __dil.jsx("row", {
				gap: 3,
				align: "center",
				minHeight: 56
			}, /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: icon === "plane" ? "plane" : "pin" }), /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, autocomplete));
		}
		const displayValue = value ? compact && scopeLabel ? value.replace(/\\s*\\(any(?: airport)?\\)\\s*$/i, "") + " (" + (anyLabel || scopeLabel) + ")" : anyLabel ? value.replace(/\\s*\\(any(?: airport)?\\)\\s*$/i, " (" + anyLabel + ")") : value : placeholder;
		if (onOpen) return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: label,
			disabled,
			onClick: onOpen,
			width: "100%",
			minHeight: 56,
			radius: 12
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56
		}, !compact && /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: icon === "plane" ? "plane" : "pin" }), /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			minWidth: 0,
			gap: 0,
			disableAutoSpacing: true
		}, compact && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary",
			truncate: true
		}, label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			truncate: compact
		}, displayValue), scopeLabel && !compact && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, scopeLabel)), !compact && /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: "chevron" }))));
		return /* @__PURE__ */ __dil.jsx("label", null, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			minHeight: 56
		}, !compact && /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: icon === "plane" ? "plane" : "pin" }), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, label), /* @__PURE__ */ __dil.jsx("input", {
			name,
			value,
			placeholder,
			disabled,
			variant: "plain",
			size: "lg",
			onChange
		}), scopeLabel && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, scopeLabel))));
	}
	function SwapButton({ label, compact = false, disabled, onClick }) {
		const { isDark } = DIL.useTheme();
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: label,
			tooltip: label,
			disabled,
			onClick,
			size: compact ? 36 : 48,
			minSize: compact ? 36 : 48,
			radius: "full",
			align: "center",
			justify: "center",
			border: {
				size: compact ? 1 : .5,
				color: compact ? "default" : "subtle"
			},
			background: compact ? isDark ? "surface-elevated" : "#fff" : "surface"
		}, compact ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "compare-arrows",
			size: "lg",
			color: "secondary"
		}) : /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: "swap" }));
	}
	function SearchSurface({ wide, children, grouped = false }) {
		const { isDark } = DIL.useTheme();
		if (wide) return /* @__PURE__ */ __dil.jsx("box", {
			background: isDark ? "surface-elevated" : "#fff",
			border: {
				size: .5,
				color: "default"
			},
			radius: grouped ? 24 : "full",
			padding: {
				x: 4,
				y: 2
			},
			width: "100%"
		}, children);
		return /* @__PURE__ */ __dil.jsx("card", {
			padding: 4,
			radius: 24,
			background: isDark ? "surface-elevated" : "#fff",
			shadow: true,
			shadowStyle: isDark ? void 0 : "0 0 0 0.5px rgba(13,13,13,0.15), 0 4px 16px rgba(0,0,0,0.05)",
			width: "100%"
		}, children);
	}

//#endregion
return FlightSearchForm;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=flight-search-form-6cae19e655a1.js.map