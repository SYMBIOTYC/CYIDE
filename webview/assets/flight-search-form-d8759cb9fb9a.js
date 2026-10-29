import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


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
	function FlightDates(props) {
		const [open, setOpen] = DIL.useState(false);
		const isOpen = props.open ?? open;
		const [monthOffset, setMonthOffset] = DIL.useState(0);
		const sheet = props.mode === "calendar" && props.submit === true;
		const [choosingReturn, setChoosingReturn] = DIL.useState(props.roundTrip && validDate$1(props.departure) && !validDate$1(props.returnDate));
		const anchor = /* @__PURE__ */ new Date((validDate$1(props.departure) ? props.departure : props.today) + "T12:00:00Z");
		const month = new Date(Date.UTC(anchor.getUTCFullYear(), anchor.getUTCMonth() + monthOffset, 1));
		const range = props.roundTrip && validDate$1(props.departure) && validDate$1(props.returnDate) && props.returnDate > props.departure;
		const choose = (date) => {
			if (props.disabled || date < props.today) return;
			if (props.roundTrip && choosingReturn && validDate$1(props.departure) && date >= props.departure) {
				props.onChange({ return_date: date });
				setChoosingReturn(false);
			} else {
				props.onChange({
					departure_date: date,
					...props.roundTrip ? { return_date: "" } : {}
				});
				setChoosingReturn(props.roundTrip);
				setMonthOffset(0);
			}
		};
		if (![
			"dates",
			"previous_month",
			"next_month",
			"choose_departure",
			"choose_return",
			"done"
		].every((key) => Boolean(props.labels[key])) && props.mode !== "summary") return /* @__PURE__ */ __dil.jsx(FlightDateInputs, props);
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
		}, sheet && props.onRoundTripChange && props.labels.one_way && props.labels.round_trip && /* @__PURE__ */ __dil.jsx("segmented-control", {
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
			block: true,
			disabled: props.disabled,
			onChange: (value) => {
				if (props.disabled) return;
				props.onRoundTripChange?.(value === "round_trip");
				setChoosingReturn(value === "round_trip" && validDate$1(props.departure) && !validDate$1(props.returnDate));
			}
		}), !sheet && /* @__PURE__ */ __dil.jsx(FlightDateInputs, {
			...props,
			onChange: (value) => {
				props.onChange(value);
				if (value.departure_date !== void 0) setMonthOffset(0);
			}
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: sheet ? 3.5 : 2,
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			padding: { x: sheet ? 2.75 : 0 },
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 34,
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("grid", {
			columns: 7,
			gap: 0
		}, Array.from({ length: 7 }, (_, day) => /* @__PURE__ */ __dil.jsx("grid-item", { key: "weekday" + day }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "tertiary",
			textAlign: "center"
		}, new Intl.DateTimeFormat(void 0, {
			weekday: "narrow",
			timeZone: "UTC"
		}).format(new Date(Date.UTC(2026, 0, 4 + day)))))))), /* @__PURE__ */ __dil.jsx("col", {
			key: sheet ? month.toISOString().slice(0, 7) : void 0,
			gap: 6,
			flex: sheet ? 1 : void 0,
			minHeight: 0,
			scrollable: sheet,
			disableAutoSpacing: true
		}, [0, 1].map((offset) => /* @__PURE__ */ __dil.jsx(FlightMonth, {
			key: offset,
			month: new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + offset, 1)).toISOString().slice(0, 10),
			props,
			range,
			choose,
			navigation: offset === 0 && !sheet ? /* @__PURE__ */ __dil.jsx("row", { gap: 0 }, /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: props.labels.previous_month,
				disabled: props.disabled || month.toISOString().slice(0, 7) <= props.today.slice(0, 7),
				onClick: () => {
					if (!props.disabled) setMonthOffset(monthOffset - 1);
				},
				size: 44,
				radius: "full",
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-left",
				size: "sm"
			})), /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: props.labels.next_month,
				disabled: props.disabled,
				onClick: () => {
					if (!props.disabled) setMonthOffset(monthOffset + 1);
				},
				size: 44,
				radius: "full",
				align: "center",
				justify: "center"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-right",
				size: "sm"
			}))) : void 0
		})))), sheet && /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "center",
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx(CalendarNavigation, {
			labels: props.labels,
			disabled: props.disabled,
			previousDisabled: month.toISOString().slice(0, 7) <= props.today.slice(0, 7),
			onPrevious: () => setMonthOffset(monthOffset - 1),
			onNext: () => setMonthOffset(monthOffset + 1)
		})), /* @__PURE__ */ __dil.jsx("box", {
			ariaLive: "polite",
			ariaAtomic: true,
			height: 0,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, new Intl.DateTimeFormat(void 0, {
			month: "long",
			year: "numeric",
			timeZone: "UTC"
		}).format(month) + ". " + (choosingReturn ? props.labels.choose_return : props.labels.choose_departure)))), !sheet && /* @__PURE__ */ __dil.jsx("box", {
			ariaLive: "polite",
			ariaAtomic: true,
			height: sheet ? 0 : void 0,
			clip: sheet
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, choosingReturn ? props.labels.choose_return : props.labels.choose_departure)), /* @__PURE__ */ __dil.jsx("box", { padding: { x: sheet ? 4 : 0 } }, /* @__PURE__ */ __dil.jsx("button", {
			submit: props.submit,
			size: "xl",
			block: true,
			disabled: props.disabled || props.requireComplete === true && (!validDate$1(props.departure) || props.departure < props.today || props.roundTrip && (!validDate$1(props.returnDate) || props.returnDate < props.departure)),
			onClick: props.submit ? void 0 : () => {
				setOpen(false);
				props.onOpenChange?.(false);
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "inherit"
		}, props.labels.done)))));
	}
	function FlightMonth({ month: monthIso, props, range, choose, navigation }) {
		const month = /* @__PURE__ */ new Date(monthIso + "T12:00:00Z");
		const blanks = month.getUTCDay();
		const days = new Date(Date.UTC(month.getUTCFullYear(), month.getUTCMonth() + 1, 0)).getUTCDate();
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, new Intl.DateTimeFormat(void 0, {
			month: "long",
			year: "numeric",
			timeZone: "UTC"
		}).format(month)), navigation), /* @__PURE__ */ __dil.jsx("grid", {
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
				background: selected ? {
					light: "#e8f3fe",
					dark: "#132e4b"
				} : "transparent"
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
				shadowStyle: "0 4px 16px rgba(0,0,0,0.05)"
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: new Intl.DateTimeFormat(void 0, {
					dateStyle: "full",
					timeZone: "UTC"
				}).format(date),
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
			}, i + 1)), " "))));
		})]));
	}
	function validDate$1(value) {
		if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(value)) return false;
		const date = /* @__PURE__ */ new Date(value + "T12:00:00Z");
		return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
	}
	function displayDate(value, placeholder) {
		return validDate$1(value) ? new Intl.DateTimeFormat(void 0, {
			weekday: "short",
			month: "short",
			day: "numeric",
			timeZone: "UTC"
		}).format(/* @__PURE__ */ new Date(value + "T12:00:00Z")) : placeholder;
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
	function CalendarNavigation({ labels, disabled, previousDisabled, onPrevious, onNext }) {
		return /* @__PURE__ */ __dil.jsx("row", { gap: 0 }, /* @__PURE__ */ __dil.jsx("pressable", {
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
		})), /* @__PURE__ */ __dil.jsx("pressable", {
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
//#region internal/FlightSearchRequest.dil.ts
	const defaults = {
		search_request_template: "Find flights from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}.",
		retry_request_template: "Search again for flights from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}.",
		edit_request_template: "Help me change my flight search from {origin} to {destination}: {trip_type}, departing {departure_date}{return_date}, {party_size} {passengers}, {cabin}, {stops}. Let me edit these details before searching.",
		search_return: " and returning {date}",
		search_airport: "airport",
		any_airport: "any airport",
		round_trip: "Round trip",
		one_way: "One way",
		adult: "adult",
		adults: "adults",
		economy: "Economy",
		premium_economy: "Premium economy",
		business: "Business",
		first: "First",
		any_stops: "Any stops",
		nonstop: "Nonstop only",
		max_stops: "Maximum stops:",
		search_stop_direction: "per direction"
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
			passengers: copy[request.party_size === 1 ? "adult" : "adults"],
			cabin: copy[request.cabin_class],
			stops: request.max_connections == null ? copy.any_stops : request.max_connections === 0 ? copy.nonstop : \`\${copy.max_stops} \${request.max_connections} \${copy.search_stop_direction}\`
		};
		const templateKey = action === "search" ? "search_request_template" : action + "_request_template";
		return (copy[templateKey]?.includes("{origin}") ? copy[templateKey] : defaults[templateKey]).replace(/\\{(\\w+)\\}/g, (match, key) => values[key] ?? match);
	}

//#endregion
//#region FlightSearchForm.dil.tsx
	function FlightSearchForm(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("FlightSearchForm", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 150
		});
		return /* @__PURE__ */ __dil.jsx(Resolved, { state });
	}
	function Resolved({ state }) {
		const wide = DIL.useBreakpoint("md");
		const [edits, setEdits] = DIL.useState({});
		const [attempted, setAttempted] = DIL.useState(false);
		const [datesOpen, setDatesOpen] = DIL.useState(false);
		const [sheet, setSheet] = DIL.useState("");
		const [locationEdit, setLocationEdit] = DIL.useState("");
		const [dateEdits, setDateEdits] = DIL.useState({});
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const enabled = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		DIL.useEffect(() => {
			if (!enabled) setSheet("");
		}, [enabled]);
		const presentationComponents = DIL.useAppData((data) => data.nativeComponentNames ?? []);
		const labels = formLabels(state.labels);
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
		const trip = draft.trip_type ?? "round_trip";
		const now = DIL.useNow(false);
		const today = new Date(now).toISOString().slice(0, 10);
		const error = validationError(draft, trip, today, labels);
		const change = (patch) => setEdits((previous) => ({
			...previous,
			...patch
		}));
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
		const submit = () => {
			setAttempted(true);
			if (!enabled || validationError(draft, trip, today, labels)) return;
			GenUI.issueNewTurn(formatFlightSearchRequest({
				...draft,
				origin: draft.origin,
				destination: draft.destination,
				departure_date: draft.departure_date,
				trip_type: trip
			}, labels));
		};
		return /* @__PURE__ */ __dil.jsx("form", {
			onSubmit: submit,
			gap: 3,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: labels.trip_type,
			value: trip,
			placeholder: labels.trip_type,
			disabled: !enabled,
			size: wide ? "xl" : "md",
			icon: wide ? "compare-arrows" : void 0,
			pill: true,
			block: false,
			options: [{
				value: "round_trip",
				label: labels.round_trip
			}, {
				value: "one_way",
				label: labels.one_way
			}],
			onChange: (value) => change({
				trip_type: value,
				...value === "one_way" ? { return_date: "" } : {}
			})
		}), /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: labels.adults,
			value: String(draft.party_size),
			disabled: !enabled,
			size: wide ? "xl" : "md",
			icon: wide ? "users" : void 0,
			pill: true,
			block: false,
			options: Array.from({ length: 9 }, (_, index) => ({
				value: String(index + 1),
				label: String(index + 1) + " " + (index === 0 ? labels.adult : labels.adults)
			})),
			onChange: (value) => change({ party_size: Number(value) })
		}), /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: labels.cabin,
			value: draft.cabin_class,
			disabled: !enabled,
			size: wide ? "xl" : "md",
			icon: wide ? "dollar-circle" : void 0,
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
		}), /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: labels.connections,
			placeholder: labels.connections,
			block: false,
			value: draft.max_connections == null ? "" : String(draft.max_connections),
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
		})), /* @__PURE__ */ __dil.jsx(SearchSurface, { wide }, /* @__PURE__ */ __dil.jsx("row", {
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
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
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
		})), /* @__PURE__ */ __dil.jsx("box", {
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
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "inherit"
		}, wide ? labels.search_compact || labels.search : labels.search))))), !useSheets && wide && datesOpen && /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 400,
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("card", {
			padding: 4,
			shadow: true,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(FlightDates, {
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
		})))), useSheets && /* @__PURE__ */ __dil.jsx("host-modal", {
			open: enabled && sheet !== "",
			title: sheet === "dates" ? labels.select_dates || labels.dates : sheet === "origin" ? labels.select_origin : labels.select_destination,
			description: sheet === "dates" ? labels.date_help : labels.location_help,
			closeLabel: labels.close,
			maxWidth: 440,
			presentation: sheet === "dates" ? "calendar" : useAirportPicker ? "full" : void 0,
			onOpenChange: (open) => {
				if (!open) setSheet("");
			}
		}, /* @__PURE__ */ __dil.jsx("form", {
			onSubmit: applySheet,
			width: "100%",
			height: sheet === "dates" || useAirportPicker ? "100%" : void 0,
			minHeight: 0
		}, sheet === "dates" ? /* @__PURE__ */ __dil.jsx(FlightDates, {
			departure: dateEdits.departure_date ?? "",
			returnDate: dateEdits.return_date ?? "",
			roundTrip: (dateEdits.trip_type ?? trip) === "round_trip",
			onRoundTripChange: (roundTrip) => {
				if (!enabled) return;
				setDateEdits((previous) => ({
					...previous,
					trip_type: roundTrip ? "round_trip" : "one_way",
					...roundTrip ? {} : { return_date: "" }
				}));
			},
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
		if (trip !== "one_way" && trip !== "round_trip") return labels.trip_error;
		if (!validDate(draft.departure_date) || draft.departure_date < today || trip === "round_trip" && (!validDate(draft.return_date) || draft.return_date < draft.departure_date)) return labels.date_error;
		if (!Number.isInteger(draft.party_size) || draft.party_size < 1 || draft.party_size > 9 || ![
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
	function LocationField({ label, placeholder, value, scopeLabel, anyLabel, disabled, name, icon, compact = false, onChange, onOpen, airportPicker }) {
		if (airportPicker) return /* @__PURE__ */ __dil.jsx("flight-airport-autocomplete", {
			...airportPicker,
			name,
			label,
			anyLabel,
			query: value,
			disabled,
			onChange
		});
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
				size: .5,
				color: "subtle"
			},
			background: "surface"
		}, compact ? /* @__PURE__ */ __dil.jsx("icon", {
			name: "compare-arrows",
			size: "lg",
			color: "secondary"
		}) : /* @__PURE__ */ __dil.jsx(FlightSearchIcon, { kind: "swap" }));
	}
	function SearchSurface({ wide, children }) {
		const { isDark } = DIL.useTheme();
		if (wide) return /* @__PURE__ */ __dil.jsx("box", {
			background: isDark ? "surface-elevated" : "#fff",
			border: {
				size: .5,
				color: "default"
			},
			radius: "full",
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
//# sourceMappingURL=flight-search-form-d8759cb9fb9a.js.map