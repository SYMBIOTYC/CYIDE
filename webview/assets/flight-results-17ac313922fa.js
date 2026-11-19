import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/FlightRowPresentation.dil.tsx
/** Web-only row polish; older hosts keep the portable row content. */
	function FlightRowHeader({ enabled, children }) {
		const supported = DIL.useAppData((data) => data.nativeComponentNames?.includes("flight-row-header") ?? false);
		return enabled && supported ? /* @__PURE__ */ __dil.jsx("flight-row-header", null, children) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			disableAutoSpacing: true
		}, children);
	}
	function FlightRowDetails({ animated, expanded, children }) {
		const supported = DIL.useAppData((data) => data.nativeComponentNames?.includes("flight-row-details") ?? false);
		return animated && supported ? /* @__PURE__ */ __dil.jsx("flight-row-details", { expanded }, /* @__PURE__ */ __dil.jsx("animate", {
			dimension: "height",
			preventInitialTransition: true,
			hideOverflow: true,
			initial: { opacity: 0 },
			enter: {
				opacity: 1,
				duration: 180
			},
			exit: {
				opacity: 0,
				duration: 120
			},
			layoutEnter: { duration: 180 },
			layoutExit: { duration: 180 }
		}, expanded && /* @__PURE__ */ __dil.jsx("animate-item", { key: "details" }, children))) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
	}
	function FlightRowChevron({ expanded }) {
		return /* @__PURE__ */ __dil.jsx("card", {
			width: 32,
			height: 32,
			radius: "full",
			padding: 0,
			shadow: true,
			shadowStyle: "0 4px 16px 0 rgba(0,0,0,0.05)"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 32,
			height: 32,
			radius: "full",
			border: {
				size: 1,
				color: "subtle"
			},
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-up" : "chevron-down",
			size: "md"
		})));
	}

//#endregion
//#region internal/FlightReveal.dil.tsx
/** Use the shared host animation for new results and departure/return transitions. */
	function FlightReveal({ stage, children }) {
		return /* @__PURE__ */ __dil.jsx("animate", {
			preventInitialTransition: false,
			initial: {
				opacity: 0,
				translateY: 4
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: 180
			}
		}, /* @__PURE__ */ __dil.jsx("animate-item", { key: stage }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, children)));
	}

//#endregion
//#region internal/FlightRowLayout.dil.ts
/** Shared geometry for compact summaries and their expanded fare details. */
	const FLIGHT_ROW_LAYOUT = {
		durationWidth: 86,
		priceWidth: 110,
		summaryGap: 12,
		headerInset: 12,
		controlGap: 24,
		controlWidth: 44,
		detailsRightInset: 8
	};

//#endregion
//#region internal/FlightLegToggleIcon.dil.tsx
/** Keep saved templates compatible with hosts that predate the Figma icon asset. */
	function FlightLegToggleIcon() {
		return DIL.useAppData((data) => data.nativeComponentNames?.includes("flight-leg-toggle-icon") ?? false) ? /* @__PURE__ */ __dil.jsx("flight-leg-toggle-icon", null) : /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-up-down",
			size: "md"
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
	function isFlightSearchRequestFresh(request, time) {
		return !!request && request.departure_date >= new Date(time).toISOString().slice(0, 10) && (!request.return_date || request.return_date >= request.departure_date) && (!request.additional_legs?.length || !request.return_date && request.additional_legs.every((leg, index) => leg.departure_date >= (index === 0 ? request.departure_date : request.additional_legs[index - 1].departure_date)));
	}

//#endregion
//#region FlightResults.dil.tsx
	function FlightResults(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("FlightResults", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 200
		});
		return /* @__PURE__ */ __dil.jsx(Results, { state });
	}
	function Results({ state }) {
		const wide = DIL.useBreakpoint("sm");
		const [detailsSelection, showFlightDetails] = DIL.useState(null);
		const [selection, select] = DIL.useState(null);
		const [fareProposal, setFareProposal] = DIL.useState(null);
		const [sort, setSort] = DIL.useState("recommended");
		const [expanded, expand] = DIL.useState(false);
		const [departure, setDeparture] = DIL.useState(null);
		const [, setOpenGroup] = DIL.useState(null);
		const [outboundExpanded, expandOutbound] = DIL.useState(false);
		const [openLeg, setOpenLeg] = DIL.useState(null);
		const labels = {
			...state.labels,
			select: state.labels.select ?? "Select",
			switch_flight: state.labels.switch_flight ?? "Switch"
		};
		const pending = state.ready !== true && state.complete === false;
		DIL.useEffect(() => {
			if (pending) {
				select(null);
				setDeparture(null);
				setOpenGroup(null);
				setFareProposal(null);
				showFlightDetails(null);
				expandOutbound(false);
				setOpenLeg(null);
			}
		}, [pending]);
		DIL.useEffect(() => {
			showFlightDetails(null);
			setOpenGroup(null);
		}, [state.response_id]);
		const legCount = state.items[0]?.leg_group_ids?.length ?? 0;
		if (state.comparable_prices && legCount >= 2 && legCount <= 4 && !!labels.multi_city_stage_heading && !!labels.multi_city_selected_heading && !!labels.multi_city_change_leg && state.items.every((item) => item.leg_group_ids?.length === legCount && item.leg_group_ids.every((id) => !!id) && item.leg_summaries?.length === legCount && !!item.outbound_price && item.legs.length === legCount && item.booking_urls.length <= 1)) return /* @__PURE__ */ __dil.jsx(MultiCityResults, {
			state,
			labels
		});
		const selected = !pending && selection?.responseId === state.response_id ? state.items.find((item) => item.candidate_id === selection.candidateId) : void 0;
		const staged = state.comparable_prices && !!labels.outbound_heading && !!labels.return_heading && !!labels.choose_outbound && !!labels.change_outbound && !!labels.outbound_price_caption && state.items.length > 0 && state.items.every((item) => !!item.outbound_group_id && !!item.return_summary);
		const departureId = staged && departure?.responseId === state.response_id && state.items.some((item) => item.outbound_group_id === departure.id) ? departure.id : null;
		const choosingDeparture = staged && !departureId;
		const departingItem = departureId ? state.items.find((item) => item.outbound_group_id === departureId) : void 0;
		const collapseSelected = staged && (!wide || !!labels.change_flight) && !!labels.selected_outbound_heading && !!labels.selected_return_heading && !!labels.change_return && !!labels.booking_heading;
		const webStaged = collapseSelected && wide;
		const outboundOpen = openLeg?.responseId === state.response_id && openLeg.leg === "outbound";
		const returnOpen = openLeg?.responseId === state.response_id && openLeg.leg === "return";
		const toggleLeg = (leg) => {
			showFlightDetails(null);
			setOpenLeg(openLeg?.responseId === state.response_id && openLeg.leg === leg ? null : {
				responseId: state.response_id,
				leg
			});
		};
		const chooseDeparture = (id) => {
			if (pending || !state.items.some((item) => item.outbound_group_id === id)) return;
			setOpenLeg(null);
			if (collapseSelected && id === departureId) return;
			select(null);
			setDeparture({
				id,
				responseId: state.response_id
			});
			setOpenGroup(null);
			setFareProposal(null);
			showFlightDetails(null);
			expand(false);
		};
		const items = state.items.filter((item) => !departureId || item.outbound_group_id === departureId);
		const legDuration = (item) => departureId ? item.return_summary?.duration_minutes : item.outbound_duration_minutes;
		const stageDurations = items.map(legDuration);
		const comparableStageDurations = staged && !!labels.stage_duration && stageDurations.every((duration) => typeof duration === "number" && Number.isFinite(duration) && duration > 0) && stageDurations.some((duration) => duration !== stageDurations[0]);
		const lowestReturn = departureId && state.comparable_prices ? items.slice().sort((a, b) => a.price_rank - b.price_rank)[0] : void 0;
		const quickestReturn = departureId && comparableStageDurations ? items.slice().sort((a, b) => (legDuration(a) ?? 0) - (legDuration(b) ?? 0))[0] : void 0;
		const returnContext = departureId ? [
			labels.return_context,
			lowestReturn && labels.return_price_context?.replace("{price}", lowestReturn.price),
			quickestReturn?.return_summary?.outbound_duration && labels.return_duration_context?.replace("{duration}", quickestReturn.return_summary.outbound_duration)
		].filter(Boolean).join(" ") : "";
		const activeSort = sort === "duration" && !(staged ? comparableStageDurations : state.comparable_durations) || sort === "price" && !state.comparable_prices ? "recommended" : sort;
		const departureItem = (item) => ({
			...item,
			airline: item.outbound_airline ?? item.airline,
			price: item.outbound_price ?? item.price,
			price_caption: item.outbound_price ? labels.outbound_total_caption ?? labels.outbound_price_caption : labels.outbound_price_caption,
			badges: []
		});
		if (activeSort === "price" && state.comparable_prices) items.sort((a, b) => a.price_rank - b.price_rank);
		if (!staged && activeSort === "duration" && state.comparable_durations) items.sort((a, b) => a.duration_rank - b.duration_rank);
		if (activeSort === "duration" && comparableStageDurations) items.sort((a, b) => legDuration(a) - legDuration(b));
		const groups = [];
		for (const item of items) {
			const id = choosingDeparture ? item.outbound_group_id : labels.fare_options ? item.offer_group_id ?? item.candidate_id : item.candidate_id;
			const group = groups.find((entry) => entry.id === id);
			if (group) {
				group.choices.push(item);
				if (choosingDeparture && item.price_rank < group.item.price_rank) group.item = item;
			} else groups.push({
				id,
				item,
				choices: [item]
			});
		}
		const outboundGroups = [];
		if (staged) for (const item of state.items) {
			const id = item.outbound_group_id;
			const group = outboundGroups.find((entry) => entry.id === id);
			if (group) {
				group.choices.push(item);
				if (item.price_rank < group.item.price_rank) group.item = item;
			} else outboundGroups.push({
				id,
				item,
				choices: [item]
			});
		}
		const departingGroup = outboundGroups.find((group) => group.id === departureId);
		const departingRepresentative = departingGroup?.item;
		if (state.items.length === 0) return /* @__PURE__ */ __dil.jsx(SearchNotice, { state });
		const review = selected ? /* @__PURE__ */ __dil.jsx(TripReview, {
			item: selected,
			choices: selected.offer_group_id ? state.items.filter((item) => item.offer_group_id === selected.offer_group_id) : [selected],
			labels,
			searchRequest: state.search_request,
			wideBooking: webStaged,
			onBack: () => {
				setFareProposal({
					candidateId: selected.candidate_id,
					responseId: state.response_id
				});
				select(null);
				setOpenLeg(null);
				showFlightDetails(null);
			},
			onChoose: (candidateId) => {
				setFareProposal({
					candidateId,
					responseId: state.response_id
				});
				select({
					candidateId,
					responseId: state.response_id
				});
			}
		}) : null;
		const initialCount = webStaged ? 3 : 6;
		const visibleGroups = groups.filter((group, index) => expanded || index < initialCount || group.choices.some((choice) => choice.candidate_id === selected?.candidate_id));
		const isOpen = (id, isDeparture) => !pending && detailsSelection?.responseId === state.response_id && detailsSelection.id === id && (detailsSelection.departure ?? choosingDeparture) === isDeparture;
		const toggleDetails = (id, isDeparture) => {
			if (pending) return;
			showFlightDetails(isOpen(id, isDeparture) ? null : {
				id,
				responseId: state.response_id,
				departure: isDeparture
			});
		};
		const commitChoice = (group, candidateId) => {
			if (pending || !group.choices.some((choice) => choice.candidate_id === candidateId)) return;
			setFareProposal(null);
			setOpenLeg(null);
			select({
				candidateId,
				responseId: state.response_id
			});
			showFlightDetails(null);
		};
		return /* @__PURE__ */ __dil.jsx(FlightReveal, { stage: state.response_id + ":" + (departingItem?.outbound_group_id ?? "outbound") + (collapseSelected ? ":" + (selected?.candidate_id ?? "choosing") + ":" + (outboundOpen ? "outbound-open" : returnOpen ? "return-open" : "collapsed") : "") }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%",
			maxWidth: 760,
			disableAutoSpacing: true
		}, (pending || state.search_coverage === "partial") && /* @__PURE__ */ __dil.jsx(SearchNotice, { state }), departingItem && /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(FlightLegHeading, {
			title: collapseSelected ? labels.selected_outbound_heading ?? labels.outbound_heading : labels.outbound_heading,
			inline: webStaged,
			changeLabel: labels.change_outbound,
			expanded: outboundOpen,
			onToggle: collapseSelected ? () => toggleLeg("outbound") : void 0
		}), collapseSelected && !outboundOpen ? webStaged ? /* @__PURE__ */ __dil.jsx(SelectedWebLeg, {
			item: departureItem(selected ?? departingRepresentative ?? departingItem),
			choices: selected ? [selected] : departingGroup?.choices ?? [departingItem],
			legIndex: 0,
			labels,
			expanded: isOpen(departureId, true),
			onToggle: () => toggleDetails(departureId, true),
			onChange: () => toggleLeg("outbound")
		}) : /* @__PURE__ */ __dil.jsx(SelectedLegSummary, {
			item: departureItem(selected ?? departingRepresentative ?? departingItem),
			labels,
			changeLabel: labels.change_outbound,
			onChange: () => toggleLeg("outbound")
		}) : /* @__PURE__ */ __dil.jsx("col", {
			gap: webStaged ? 4 : 0,
			disableAutoSpacing: true
		}, outboundGroups.filter((group, index) => outboundExpanded || index < initialCount || group.id === departureId).map((group) => /* @__PURE__ */ __dil.jsx(FlightChoice, {
			multiCity: false,
			key: group.id,
			item: departureItem(group.item),
			detailDates: group.item.legs[0]?.segments[0]?.dates,
			legLabel: labels.departure_leg,
			selected: group.id === departureId,
			expanded: isOpen(group.id, true),
			disabled: pending,
			compact: wide,
			pivot: webStaged,
			labels,
			onToggle: () => toggleDetails(group.id, true),
			onSelect: () => chooseDeparture(group.id),
			selectionLabel: labels.switch_flight + ": " + labels.choose_outbound,
			selectionAction: !wide && collapseSelected && (group.id === departureId || !isOpen(group.id, true)) ? /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
				compact: false,
				label: group.id === departureId ? labels.selected ?? "Selected" : labels.switch_flight + ": " + labels.choose_outbound,
				onClick: () => chooseDeparture(group.id)
			}, group.id === departureId ? "✓ " + (labels.selected ?? "Selected") : labels.switch_flight) : void 0
		}, /* @__PURE__ */ __dil.jsx(FlightDetailContent, {
			multiCity: false,
			item: group.item,
			choices: group.choices,
			departure: true,
			labels,
			onSelect: () => chooseDeparture(group.id),
			selectionLabel: labels.switch_flight + ": " + labels.choose_outbound,
			legs: group.item.legs.slice(0, 1),
			compact: wide,
			pivot: webStaged,
			showFareBrands: group.choices.every((choice) => choice.legs[0]?.fare_brand === group.item.legs[0]?.fare_brand),
			action: group.id !== departureId ? /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
				compact: wide,
				label: labels.switch_flight + ": " + labels.choose_outbound,
				onClick: () => chooseDeparture(group.id)
			}, labels.switch_flight) : void 0
		})))), (!collapseSelected || outboundOpen) && outboundGroups.length > initialCount && /* @__PURE__ */ __dil.jsx("button", {
			variant: "ghost",
			onClick: () => expandOutbound(!outboundExpanded)
		}, outboundExpanded ? labels.less : labels.more)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(FlightLegHeading, {
			title: staged ? choosingDeparture ? webStaged ? labels.selected_outbound_heading : labels.outbound_heading : collapseSelected && (selected || webStaged) ? labels.selected_return_heading ?? labels.return_heading : labels.return_heading : labels.heading,
			inline: webStaged,
			changeLabel: labels.change_return ?? labels.choose_return,
			expanded: returnOpen,
			onToggle: collapseSelected && selected ? () => toggleLeg("return") : void 0
		}), !collapseSelected && state.items[0] && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.items[0].dates + " · " + state.items[0].summary)), collapseSelected && selected && !returnOpen ? webStaged ? /* @__PURE__ */ __dil.jsx(SelectedWebLeg, {
			item: {
				...selected,
				...selected.return_summary,
				badges: []
			},
			choices: [selected],
			legIndex: 1,
			labels,
			expanded: isOpen(selected.offer_group_id ?? selected.candidate_id, false),
			onToggle: () => toggleDetails(selected.offer_group_id ?? selected.candidate_id, false),
			onChange: () => toggleLeg("return")
		}) : /* @__PURE__ */ __dil.jsx(SelectedLegSummary, {
			item: {
				...selected,
				...selected.return_summary,
				badges: []
			},
			labels,
			changeLabel: labels.change_return ?? labels.choose_return,
			onChange: () => toggleLeg("return")
		}) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, returnContext && !webStaged && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, returnContext), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			wrap: "wrap"
		}, [
			"recommended",
			...state.comparable_prices ? ["price"] : [],
			...(staged ? comparableStageDurations : state.comparable_durations) ? ["duration"] : []
		].map((key) => /* @__PURE__ */ __dil.jsx("pressable", {
			key,
			radius: "full",
			padding: {
				x: 3,
				y: 1.5
			},
			background: activeSort === key ? "surface-tertiary" : "transparent",
			ariaPressed: activeSort === key,
			onClick: () => setSort(key)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: activeSort === key ? "primary" : "secondary"
		}, key === "duration" && staged ? labels.stage_duration : labels[key])))), /* @__PURE__ */ __dil.jsx("col", {
			gap: webStaged ? 4 : 0,
			disableAutoSpacing: true
		}, visibleGroups.map((group) => {
			const original = group.choices.find((choice) => choice.candidate_id === selected?.candidate_id) ?? group.item;
			const proposal = !choosingDeparture && group.choices.find((choice) => fareProposal?.responseId === state.response_id && choice.candidate_id === fareProposal.candidateId) || original;
			const item = departureId ? {
				...proposal,
				...proposal.return_summary,
				badges: []
			} : choosingDeparture ? departureItem(original) : proposal;
			const fareSelector = !choosingDeparture && !!labels.fare_choice && !!labels.review_fare && !!labels.fare_details && !!labels.fare_details_more && !!labels.fare_details_less;
			const groupSelected = !choosingDeparture && !!selected && group.choices.some((choice) => choice.candidate_id === selected.candidate_id);
			const proposalSelected = selected?.candidate_id === proposal.candidate_id;
			const genericChoices = !choosingDeparture && !fareSelector && group.choices.length > 1;
			const actionLabel = selected ? labels.switch_flight : labels.select;
			const directBooking = !wide && !collapseSelected && !choosingDeparture && !pending && !!labels.book_with_seller && proposal.booking_urls.length === 1;
			const optionalReview = directBooking && !departureId;
			const actionContext = choosingDeparture ? labels.choose_outbound : departureId ? labels.choose_return : labels.review;
			return /* @__PURE__ */ __dil.jsx(FlightChoice, {
				key: group.id,
				item,
				returnNote: departureId ? item.return_note ?? void 0 : void 0,
				multiCity: !!state.search_request?.additional_legs?.length || item.legs.length > 2,
				detailDates: (choosingDeparture ? group.item.legs[0] : departureId ? proposal.legs[1] : proposal.legs[0])?.segments[0]?.dates,
				legLabel: choosingDeparture ? labels.departure_leg : departureId ? labels.return_leg : void 0,
				selected: groupSelected,
				expanded: isOpen(group.id, choosingDeparture),
				disabled: pending,
				compact: wide,
				pivot: webStaged,
				labels,
				onToggle: () => toggleDetails(group.id, choosingDeparture),
				onSelect: () => {
					if (genericChoices) toggleDetails(group.id, choosingDeparture);
					else if (choosingDeparture) chooseDeparture(group.id);
					else commitChoice(group, proposal.candidate_id);
				},
				selectionLabel: actionLabel + ": " + actionContext,
				selectionAction: !wide && collapseSelected && (proposalSelected || !isOpen(group.id, choosingDeparture)) ? /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
					compact: false,
					label: proposalSelected ? labels.selected ?? "Selected" : actionLabel + ": " + actionContext,
					onClick: () => {
						if (genericChoices) toggleDetails(group.id, choosingDeparture);
						else if (choosingDeparture) chooseDeparture(group.id);
						else commitChoice(group, proposal.candidate_id);
					}
				}, proposalSelected ? "✓ " + (labels.selected ?? "Selected") : actionLabel) : void 0,
				bookingAction: directBooking ? /* @__PURE__ */ __dil.jsx(FlightBookAction, {
					item: proposal,
					labels
				}) : void 0
			}, /* @__PURE__ */ __dil.jsx(FlightDetailContent, {
				item: proposal,
				multiCity: !!state.search_request?.additional_legs?.length || proposal.legs.length > 2,
				choices: group.choices,
				departure: choosingDeparture,
				labels,
				onSelect: genericChoices ? void 0 : () => {
					if (choosingDeparture) chooseDeparture(group.id);
					else commitChoice(group, proposal.candidate_id);
				},
				selectionLabel: actionLabel + ": " + actionContext,
				legs: choosingDeparture ? original.legs.slice(0, 1) : departureId ? proposal.legs.slice(1) : proposal.legs,
				compact: wide,
				pivot: webStaged,
				showFareBrands: !choosingDeparture || group.choices.every((choice) => choice.legs[0]?.fare_brand === original.legs[0]?.fare_brand),
				action: !genericChoices && (choosingDeparture || proposal.candidate_id !== selected?.candidate_id) ? /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
					compact: wide,
					secondary: optionalReview,
					label: optionalReview ? labels.review : actionLabel + ": " + actionContext,
					onClick: () => {
						if (choosingDeparture) chooseDeparture(group.id);
						else commitChoice(group, proposal.candidate_id);
					}
				}, optionalReview ? labels.review : actionLabel) : void 0
			}), fareSelector && /* @__PURE__ */ __dil.jsx(FareChoices, {
				key: state.response_id + ":" + group.id,
				choices: group.choices,
				labels,
				selectedCandidateId: proposal.candidate_id,
				onPropose: (candidateId) => {
					if (pending || !group.choices.some((choice) => choice.candidate_id === candidateId)) return;
					setFareProposal({
						candidateId,
						responseId: state.response_id
					});
				},
				buttonLabel: actionContext,
				hideSelect: true,
				onSelect: (candidateId) => commitChoice(group, candidateId)
			}), genericChoices && /* @__PURE__ */ __dil.jsx("col", {
				gap: 2,
				disableAutoSpacing: true
			}, group.choices.map((choice) => /* @__PURE__ */ __dil.jsx("col", {
				key: choice.candidate_id,
				gap: 2,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, (choice.fare_label ?? choice.airline) + " · " + (choice.seller ?? choice.booking_sites.join(" · ")) + " · " + choice.price), choice.fare_notice && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, choice.fare_notice), /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
				compact: wide,
				label: actionLabel + ": " + (choice.fare_label ?? choice.airline) + ", " + (choice.seller ?? choice.booking_sites.join(" · ")) + ", " + choice.price,
				onClick: () => commitChoice(group, choice.candidate_id)
			}, actionLabel)))));
		})), groups.length > initialCount && /* @__PURE__ */ __dil.jsx("pressable", {
			height: 44,
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: "subtle"
			},
			radius: "full",
			width: "100%",
			onClick: () => expand(!expanded)
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, expanded ? labels.less : labels.more))), !review && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer), (!collapseSelected || !outboundOpen && !returnOpen) && review && /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, collapseSelected && /* @__PURE__ */ __dil.jsx("text", {
			size: webStaged ? "md" : "lg",
			weight: webStaged ? "medium" : "semibold"
		}, labels.booking_heading ?? labels.review_heading), review)));
	}
	function MultiCityResults({ state, labels }) {
		const wide = DIL.useBreakpoint("sm");
		const [selection, setSelection] = DIL.useState(null);
		const [details, setDetails] = DIL.useState(null);
		const [fare, setFare] = DIL.useState(null);
		const [reviewId, setReviewId] = DIL.useState(null);
		const [expanded, expand] = DIL.useState(false);
		const [sort, setSort] = DIL.useState("recommended");
		const pending = state.ready !== true && state.complete === false;
		const count = state.items[0].leg_group_ids.length;
		const matches = (item, prefix$1) => prefix$1.every((id, index) => item.leg_group_ids?.[index] === id);
		const storedPrefix = !pending && selection?.responseId === state.response_id ? selection.prefix : [];
		const prefix = storedPrefix.length < count && state.items.some((item) => matches(item, storedPrefix)) ? storedPrefix : [];
		const stage = prefix.length;
		const final = stage === count - 1;
		const compatible = state.items.filter((item) => matches(item, prefix));
		const scope = state.response_id + ":" + prefix.join(":");
		DIL.useEffect(() => {
			if (pending) setSelection(null);
			setDetails(null);
			setFare(null);
			setReviewId(null);
			expand(false);
			setSort("recommended");
		}, [scope, pending]);
		const groups = [];
		for (const item of compatible) {
			const id = final ? item.offer_group_id ?? item.candidate_id : item.leg_group_ids[stage];
			const group = groups.find((entry) => entry.id === id);
			if (group) {
				group.choices.push(item);
				if (item.price_rank < group.item.price_rank) group.item = item;
			} else groups.push({
				id,
				item,
				choices: [item]
			});
		}
		const proposalFor = (group) => final ? group.choices.find((item) => fare?.scope === scope && item.candidate_id === fare.id) ?? group.item : group.item;
		const comparableDurations = groups.every((group) => {
			const duration = proposalFor(group).leg_summaries[stage].duration_minutes;
			return typeof duration === "number" && duration >= 0;
		});
		const activeSort = sort === "duration" && !comparableDurations ? "recommended" : sort;
		if (activeSort === "price") groups.sort((a, b) => proposalFor(a).price_rank - proposalFor(b).price_rank);
		if (activeSort === "duration") groups.sort((a, b) => proposalFor(a).leg_summaries[stage].duration_minutes - proposalFor(b).leg_summaries[stage].duration_minutes);
		const choose = (group, item) => {
			if (pending || !group.choices.some((quote) => quote.candidate_id === item.candidate_id)) return;
			if (final) {
				setReviewId({
					scope,
					id: item.candidate_id
				});
				setFare({
					scope,
					id: item.candidate_id
				});
			} else {
				setSelection({
					responseId: state.response_id,
					prefix: [...prefix, item.leg_group_ids[stage]]
				});
				setFare(null);
			}
			setDetails(null);
		};
		const heading = (template, index) => template.replace("{number}", String(index + 1)).replace("{count}", String(count));
		const selected = !pending && final ? compatible.find((item) => reviewId?.scope === scope && item.candidate_id === reviewId.id) : void 0;
		return /* @__PURE__ */ __dil.jsx(FlightReveal, { stage: scope }, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%",
			maxWidth: 760,
			disableAutoSpacing: true
		}, (pending || state.search_coverage === "partial") && /* @__PURE__ */ __dil.jsx(SearchNotice, { state }), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, prefix.map((_id, index) => {
			const leg = compatible[0].leg_summaries[index];
			return /* @__PURE__ */ __dil.jsx("row", {
				key: index,
				gap: 3,
				align: "center",
				justify: "between"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: .5,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, heading(labels.multi_city_selected_heading, index) + " · " + (compatible[0].legs[index].dates ?? compatible[0].legs[index].segments[0].dates)), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, leg.route + (wide ? " · " + leg.times : "")), !wide && /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, leg.times)), /* @__PURE__ */ __dil.jsx("button", {
				variant: "outline",
				disabled: pending,
				onClick: () => {
					setSelection({
						responseId: state.response_id,
						prefix: prefix.slice(0, index)
					});
					setDetails(null);
					setFare(null);
					setReviewId(null);
				}
			}, heading(labels.multi_city_change_leg, index)));
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, heading(labels.multi_city_stage_heading, stage)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.items[0].summary), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, labels.multi_city_stage_context)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			wrap: "wrap"
		}, [
			"recommended",
			"price",
			...comparableDurations ? ["duration"] : []
		].map((key) => /* @__PURE__ */ __dil.jsx("pressable", {
			key,
			radius: "full",
			padding: {
				x: 3,
				y: 1.5
			},
			background: activeSort === key ? "surface-tertiary" : "transparent",
			ariaPressed: activeSort === key,
			onClick: () => setSort(key)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: activeSort === key ? "primary" : "secondary"
		}, key === "duration" ? labels.stage_duration : labels[key])))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, groups.filter((_, index) => expanded || index < 6).map((group) => {
			const proposal = proposalFor(group);
			const summary = proposal.leg_summaries[stage];
			const current = {
				...proposal,
				...summary,
				airline: final && proposal.fare_label ? summary.airline + " · " + proposal.fare_label : summary.airline,
				dates: proposal.legs[stage].dates ?? proposal.legs[stage].segments[0].dates,
				price: final ? proposal.price : proposal.outbound_price,
				badges: [],
				duration: summary.outbound_duration,
				trip_detail: summary.outbound_stops
			};
			const actionLabel = final ? labels.review : labels.select;
			const toggle = () => {
				if (!pending) setDetails(details?.scope === scope && details.id === group.id ? null : {
					scope,
					id: group.id
				});
			};
			return /* @__PURE__ */ __dil.jsx(FlightChoice, {
				key: group.id,
				item: current,
				multiCity: false,
				detailDates: current.dates,
				showDate: true,
				legLabel: heading(labels.multi_city_selected_heading, stage),
				selected: group.choices.some((item) => item.candidate_id === selected?.candidate_id),
				expanded: details?.scope === scope && details.id === group.id,
				disabled: pending,
				compact: wide,
				labels,
				onToggle: toggle,
				onSelect: () => choose(group, proposal),
				selectionLabel: actionLabel + ": " + heading(labels.multi_city_stage_heading, stage),
				bookingAction: final && !pending && proposal.booking_urls.length === 1 ? /* @__PURE__ */ __dil.jsx(FlightBookAction, {
					item: proposal,
					labels
				}) : void 0
			}, /* @__PURE__ */ __dil.jsx(FlightDetailContent, {
				item: final ? proposal : {
					...proposal,
					detail_rows: [],
					detail_labels: []
				},
				multiCity: false,
				choices: group.choices,
				departure: !final,
				legs: [proposal.legs[stage]],
				labels,
				compact: wide,
				showFareBrands: group.choices.every((item) => item.legs[stage].fare_brand === proposal.legs[stage].fare_brand),
				onSelect: () => choose(group, proposal),
				selectionLabel: actionLabel,
				action: /* @__PURE__ */ __dil.jsx(FlightSelectionAction, {
					compact: wide,
					secondary: final,
					label: actionLabel,
					onClick: () => choose(group, proposal)
				}, actionLabel)
			}), final && group.choices.length > 1 && /* @__PURE__ */ __dil.jsx(FareChoices, {
				key: scope + ":" + group.id,
				choices: group.choices,
				labels,
				selectedCandidateId: proposal.candidate_id,
				onPropose: (id) => {
					if (!pending && group.choices.some((item) => item.candidate_id === id)) setFare({
						scope,
						id
					});
				},
				buttonLabel: labels.review,
				hideSelect: true,
				onSelect: (id) => {
					const item = group.choices.find((quote) => quote.candidate_id === id);
					if (item) choose(group, item);
				}
			}));
		})), groups.length > 6 && /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			onClick: () => expand(!expanded)
		}, expanded ? labels.less : labels.more), selected ? /* @__PURE__ */ __dil.jsx(TripReview, {
			item: selected,
			labels,
			searchRequest: state.search_request,
			choices: compatible.filter((item) => selected.offer_group_id ? item.offer_group_id === selected.offer_group_id : item.candidate_id === selected.candidate_id),
			onBack: () => setReviewId(null),
			onChoose: (id) => {
				if (compatible.some((item) => item.candidate_id === id && (selected.offer_group_id ? item.offer_group_id === selected.offer_group_id : item.candidate_id === selected.candidate_id))) {
					setReviewId({
						scope,
						id
					});
					setFare({
						scope,
						id
					});
				}
			}
		}) : /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer)));
	}
	function FlightChoice({ item, returnNote, multiCity, detailDates, showDate = false, legLabel, selected, expanded, disabled, compact, pivot = false, summaryLeg, onChange, labels, onToggle, onSelect, selectionLabel, bookingAction, selectionAction, children }) {
		const detailsLabel = (labels.flight_details ?? labels.details) + ": " + item.airline + ", " + (multiCity ? multiCityDescription(item) : item.times) + ", " + item.price;
		const [hovered, setHovered] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			width: "100%",
			disableAutoSpacing: true,
			radius: compact ? 16 : 24,
			border: compact ? void 0 : {
				size: 1,
				color: "subtle"
			},
			padding: compact ? pivot ? 0 : { x: 3 } : 3,
			background: compact && hovered && !pivot ? "surface-secondary" : void 0
		}, /* @__PURE__ */ __dil.jsx(FlightRowHeader, { enabled: pivot && !disabled }, /* @__PURE__ */ __dil.jsx("row", {
			gap: pivot ? 6 : 2,
			align: "center",
			padding: pivot ? { x: 3 } : void 0,
			radius: pivot ? 12 : void 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx(FlightOption, {
			nativeHover: pivot,
			disabled,
			ariaLabel: compact ? selectionLabel + ": " + item.airline + ", " + (multiCity ? multiCityDescription(item) : item.times) + ", " + item.price : detailsLabel,
			ariaPressed: summaryLeg !== void 0 ? expanded : compact ? selected : expanded,
			onClick: compact ? onSelect : onToggle,
			onHover: pivot ? void 0 : setHovered
		}, /* @__PURE__ */ __dil.jsx(FlightSummary, {
			item,
			multiCity,
			compact,
			pivot,
			summaryLeg,
			labels,
			expanded: compact && expanded,
			detailDates,
			showDate,
			legLabel
		}))), onChange && expanded && /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			onClick: onChange
		}, labels.change_flight), /* @__PURE__ */ __dil.jsx("box", {
			width: 44,
			minWidth: 44,
			height: 44
		}, !disabled && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: detailsLabel,
			ariaPressed: expanded,
			width: 44,
			height: 44,
			minSize: 44,
			align: "center",
			justify: "center",
			onClick: onToggle,
			onHover: pivot ? void 0 : setHovered
		}, selected && !pivot ? /* @__PURE__ */ __dil.jsx(SelectedFlight, { label: labels.selected ?? labels.selected_outbound ?? labels.select }) : pivot ? /* @__PURE__ */ __dil.jsx(FlightRowChevron, { expanded }) : /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-up" : "chevron-down",
			size: "xl"
		}))))), selectionAction && /* @__PURE__ */ __dil.jsx("box", { padding: {
			top: 2,
			bottom: 1
		} }, selectionAction), bookingAction && /* @__PURE__ */ __dil.jsx("box", { padding: { bottom: 3 } }, bookingAction), returnNote && /* @__PURE__ */ __dil.jsx("box", { padding: {
			left: compact ? 11 : 0,
			right: compact ? 11 : 0,
			bottom: 2
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, returnNote)), /* @__PURE__ */ __dil.jsx(FlightRowDetails, {
			animated: pivot,
			expanded: expanded && !disabled
		}, expanded && !disabled && /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: detailsLabel,
			gap: 3,
			padding: compact ? {
				left: 11,
				right: 2,
				bottom: 4
			} : { bottom: 2 },
			width: "100%",
			disableAutoSpacing: true
		}, children)));
	}
	function FlightLegHeading({ title, changeLabel, expanded, onToggle, inline = false }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: inline ? 1 : 2,
			justify: inline ? "start" : "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: inline ? "md" : "lg",
			weight: inline ? "medium" : "semibold"
		}, title), onToggle && /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: changeLabel,
			ariaPressed: expanded,
			width: inline ? 24 : 44,
			height: inline ? 24 : 44,
			minSize: inline ? 24 : 44,
			align: "center",
			justify: "center",
			onClick: onToggle
		}, inline ? /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			width: 20,
			height: 20
		}, /* @__PURE__ */ __dil.jsx(FlightLegToggleIcon, null)) : /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-up" : "chevron-down",
			size: "md"
		})));
	}
	function SelectedWebLeg({ item, choices, legIndex, labels, expanded, onToggle, onChange }) {
		const leg = item.legs[legIndex];
		return /* @__PURE__ */ __dil.jsx(FlightChoice, {
			item,
			multiCity: false,
			compact: true,
			pivot: true,
			selected: true,
			summaryLeg: legIndex,
			expanded,
			disabled: false,
			labels,
			detailDates: leg?.segments[0]?.dates,
			legLabel: legIndex === 0 ? labels.departure_leg : labels.return_leg,
			onToggle,
			onSelect: onToggle,
			onChange,
			selectionLabel: labels.flight_details ?? labels.details
		}, /* @__PURE__ */ __dil.jsx(FlightDetailContent, {
			item,
			choices,
			departure: legIndex === 0,
			multiCity: false,
			compact: true,
			pivot: true,
			selectedSummary: true,
			labels,
			legs: leg ? [leg] : [],
			showFareBrands: choices.length === 1,
			selectionLabel: labels.change_flight
		}));
	}
	function SelectedLegSummary({ item, labels, changeLabel, onChange }) {
		const duration = item.outbound_duration !== void 0 ? item.outbound_duration : item.duration;
		const stops = item.outbound_stops ?? item.stops;
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: (labels.selected ?? "Selected") + ": " + item.airline,
			gap: 0,
			radius: 20,
			border: {
				size: 1,
				color: "subtle"
			},
			padding: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: changeLabel + ": " + item.airline + ", " + item.times,
			onClick: onChange,
			minSize: 44,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1.5,
			width: "100%",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "between",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, item.time_range ?? item.times, item.day_offset && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: {
				light: "#d25e28",
				dark: "#f0a872"
			}
		}, " " + item.day_offset)), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, [item.route, duration].filter(Boolean).join(" · "))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			align: "end",
			maxWidth: "40%",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold",
			textAlign: "end"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			textAlign: "end"
		}, item.price_caption))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.logo_url,
			size: 16
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.airline)), stops && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			textAlign: "end"
		}, stops)))));
	}
	function FlightBookAction({ item, labels }) {
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const supported = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("open_url") === true;
		const seller = item.seller || item.booking_sites.join(" · ");
		return /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			variant: "outline",
			disabled: !supported,
			onClick: () => {
				if (!supported || item.booking_urls.length !== 1) return;
				GenUI.openUrl(item.booking_urls[0]);
			}
		}, labels.book_with_seller.replace("{seller}", seller));
	}
	function FlightDetailContent({ item, multiCity, choices, departure, labels, legs, compact, pivot = false, selectedSummary = false, showFareBrands, action, onSelect, selectionLabel }) {
		const [expandedFare, setExpandedFare] = DIL.useState(null);
		const fareColumnWidth = (selectedSummary ? FLIGHT_ROW_LAYOUT.priceWidth : FLIGHT_ROW_LAYOUT.durationWidth + FLIGHT_ROW_LAYOUT.summaryGap + FLIGHT_ROW_LAYOUT.priceWidth) + FLIGHT_ROW_LAYOUT.controlGap + FLIGHT_ROW_LAYOUT.controlWidth + FLIGHT_ROW_LAYOUT.headerInset - FLIGHT_ROW_LAYOUT.detailsRightInset;
		const secondaryColor = pivot ? "tertiary" : "secondary";
		const rows = item.detail_rows ?? item.detail_labels?.map((label) => ({
			label,
			icon: null
		})) ?? [];
		const details = departure ? rows.filter((row) => choices.every((choice) => (choice.detail_rows ?? choice.detail_labels?.map((label) => ({
			label,
			icon: null
		})) ?? []).some((other) => other.label === row.label && other.icon === row.icon))) : rows;
		const itinerary = /* @__PURE__ */ __dil.jsx(FlightItinerary, {
			legs,
			details: true,
			inline: true,
			compact,
			showFareBrands,
			hideHeader: compact,
			showLegHeadings: multiCity,
			separateConnections: pivot,
			secondaryColor
		});
		const fareDetails = details.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, details.slice(0, expandedFare === item.candidate_id ? details.length : 3).map((detail, index) => /* @__PURE__ */ __dil.jsx(FareDetailRow, {
			key: index,
			detail,
			color: secondaryColor
		}))), details.length > 3 && /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 44,
			onClick: () => setExpandedFare(expandedFare === item.candidate_id ? null : item.candidate_id)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, expandedFare === item.candidate_id ? labels.fare_details_less : labels.fare_details_more))) : null;
		const content = /* @__PURE__ */ __dil.jsx("row", {
			gap: 6,
			align: "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, onSelect ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 2,
			radius: 12,
			hoverBackground: "surface-secondary",
			ariaLabel: selectionLabel,
			onClick: onSelect
		}, itinerary) : itinerary), fareDetails && /* @__PURE__ */ __dil.jsx("col", {
			flex: pivot ? \`0 1 \${fareColumnWidth}px\` : "0 1 260px",
			minWidth: 0,
			padding: { top: 8 }
		}, fareDetails));
		if (compact) return content;
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			padding: 3,
			radius: 20,
			border: {
				size: 1,
				color: "subtle"
			}
		}, itinerary), fareDetails && /* @__PURE__ */ __dil.jsx("box", {
			padding: 3,
			radius: 20,
			border: {
				size: 1,
				color: "subtle"
			}
		}, fareDetails), action);
	}
	function FlightSummary({ item, multiCity, compact, pivot = false, summaryLeg, labels, expanded = false, detailDates, showDate = false, legLabel }) {
		if (multiCity) return /* @__PURE__ */ __dil.jsx(MultiCitySummary, {
			item,
			compact
		});
		const route = item.route + (showDate && detailDates ? " · " + detailDates : "");
		const badges = item.badges?.filter((badge) => badge !== labels.cheapest_badge);
		const duration = item.outbound_duration !== void 0 ? item.outbound_duration : item.duration;
		const stops = item.outbound_stops ?? item.stops;
		if (!compact) return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "between",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1.5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, item.time_range ?? item.times, item.day_offset && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: {
				light: "#d25e28",
				dark: "#f0a872"
			}
		}, " " + item.day_offset)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, route), duration && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, duration)), /* @__PURE__ */ __dil.jsx("col", {
			flex: "0 0 86px",
			gap: 1,
			align: "end",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			weight: "medium",
			size: "md",
			textAlign: "end"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			textAlign: "end"
		}, item.price_caption))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.logo_url,
			size: 32
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, item.airline), (stops || !duration && item.trip_detail) && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, stops || item.trip_detail))), !!badges?.length && /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			wrap: "wrap"
		}, badges.map((badge) => /* @__PURE__ */ __dil.jsx("badge", {
			key: badge,
			color: "info",
			variant: "soft",
			size: "sm"
		}, badge))));
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: compact ? FLIGHT_ROW_LAYOUT.summaryGap / 4 : 2,
			align: "center",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.logo_url,
			size: pivot ? 36 : 32
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: pivot ? "md" : compact ? "lg" : "sm",
			weight: "medium"
		}, expanded ? (legLabel ? legLabel + " · " : "") + (detailDates ?? item.dates).split(" · ")[0] : item.time_range ?? item.times, !expanded && item.day_offset && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: {
				light: "#d25e28",
				dark: "#f0a872"
			}
		}, " " + item.day_offset)), !(pivot && expanded) && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: pivot ? "tertiary" : "secondary"
		}, item.airline + " · " + route), !compact && (duration || stops || item.trip_detail) && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, [duration, stops].filter(Boolean).join(" · ") || item.trip_detail), !!badges?.length && /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			wrap: "wrap"
		}, badges.map((badge) => /* @__PURE__ */ __dil.jsx("box", {
			key: badge,
			background: {
				light: "#e8f3fe",
				dark: "#132e4b"
			},
			padding: {
				x: 2,
				y: .5
			},
			radius: 6
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: {
				light: "#3a83f7",
				dark: "#8abbff"
			}
		}, badge))))), compact && !expanded && /* @__PURE__ */ __dil.jsx("col", {
			flex: "none",
			width: summaryLeg !== void 0 ? FLIGHT_ROW_LAYOUT.priceWidth : FLIGHT_ROW_LAYOUT.durationWidth,
			minWidth: 0,
			align: summaryLeg !== void 0 ? "end" : void 0,
			gap: .5,
			disableAutoSpacing: true
		}, duration && /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			textAlign: summaryLeg !== void 0 ? "end" : void 0
		}, duration), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: pivot ? "tertiary" : "secondary",
			textAlign: summaryLeg !== void 0 ? "end" : void 0
		}, stops || (item.outbound_duration === void 0 && !duration ? item.trip_detail : ""))), summaryLeg === void 0 && /* @__PURE__ */ __dil.jsx("col", {
			flex: "none",
			width: compact ? FLIGHT_ROW_LAYOUT.priceWidth : 76,
			minWidth: 0,
			align: "end",
			gap: .5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: compact && !pivot ? "lg" : "md",
			weight: "medium",
			textAlign: "end"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: pivot ? "tertiary" : "secondary",
			textAlign: "end"
		}, item.price_caption)));
	}
	function multiCityRoute(leg) {
		const first = leg.segments[0];
		const last = leg.segments[leg.segments.length - 1];
		return first?.departure_airport_code && last?.arrival_airport_code ? first.departure_airport_code + " → " + last.arrival_airport_code : leg.segments.map((segment) => segment.route).join(" · ");
	}
	function multiCityTimes(leg) {
		if (leg.times) return leg.times;
		const first = leg.segments[0];
		const last = leg.segments[leg.segments.length - 1];
		if (!first?.departure_time || !last?.arrival_time) return first?.time_range ?? first?.times ?? first?.departure_time;
		const arrivalDate = leg.segments.length > 1 ? " (" + last.dates + (last.day_offset ? "; " + last.day_offset : "") + ")" : last.day_offset ? " " + last.day_offset : "";
		return first.departure_time + " → " + last.arrival_time + arrivalDate;
	}
	function multiCityDescription(item) {
		return item.legs.map((leg) => [
			multiCityRoute(leg),
			leg.dates ?? leg.segments[0]?.dates,
			multiCityTimes(leg)
		].filter(Boolean).join(" · ")).join("; ");
	}
	function MultiCitySummary({ item, compact }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%"
		}, compact && /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.logo_url,
			size: 32
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, item.legs.filter((leg) => leg.segments.length > 0).map((leg, index) => {
			const first = leg.segments[0];
			return /* @__PURE__ */ __dil.jsx("col", {
				key: index,
				gap: .5,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				wrap: "wrap",
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, multiCityRoute(leg)), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, multiCityTimes(leg))), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, leg.dates ?? first.dates));
		})), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, !compact && /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.logo_url,
			size: 32
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.airline))), /* @__PURE__ */ __dil.jsx("col", {
			flex: compact ? "0 0 110px" : "0 0 86px",
			align: "end",
			gap: 1.5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: compact ? "xl" : "lg",
			weight: "semibold",
			textAlign: "end"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			textAlign: "end"
		}, item.price_caption)));
	}
	function SelectedFlight({ label }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: label,
			height: 24,
			width: 24,
			minSize: 24,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "check",
			size: "xl"
		})));
	}
	function FlightSelectionAction({ compact, secondary = false, label, onClick, children }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			justify: "end"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: label,
			minHeight: compact ? 36 : 48,
			width: secondary ? void 0 : compact ? 88 : "100%",
			padding: {
				x: compact ? 2 : 3,
				y: 2
			},
			border: secondary ? void 0 : {
				size: 1,
				color: "default"
			},
			radius: "full",
			align: "center",
			justify: "center",
			onClick
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: secondary ? "secondary" : void 0,
			weight: "medium",
			textAlign: "center",
			width: "100%"
		}, children)));
	}
	function FlightOption({ onHover, nativeHover = false, disabled, ariaLabel, ariaPressed, onClick, children }) {
		return disabled ? /* @__PURE__ */ __dil.jsx("box", {
			padding: { y: 2.5 },
			width: "100%"
		}, children) : /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel,
			ariaPressed,
			padding: { y: 2.5 },
			width: "100%",
			onClick,
			onHover,
			variant: nativeHover ? "ghost" : void 0,
			hoverBackground: nativeHover ? "surface-secondary" : void 0,
			radius: nativeHover ? 12 : void 0
		}, children);
	}
	function CarrierLogo({ src, background = "surface-tertiary", size = 16, fallbackIcon = "plane" }) {
		const fallback = /* @__PURE__ */ __dil.jsx("box", {
			width: size,
			height: size,
			minSize: size,
			radius: "full",
			background,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: fallbackIcon,
			size: size > 16 ? "lg" : "xs",
			color: "secondary"
		}));
		return src ? /* @__PURE__ */ __dil.jsx("box", {
			width: size,
			height: size,
			minSize: size,
			radius: "full",
			background: src.startsWith("https://content.r9cdn.net/rimg/provider-logos/airlines/") || src.split("?")[0]?.split("#")[0]?.includes("/for-light-background/") ? "#fff" : void 0
		}, /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt: "",
			width: size,
			height: size,
			fit: "contain",
			fallback
		})) : fallback;
	}
	function FareDetailRow({ detail, color = "secondary" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			height: 20,
			flex: "0 0 20px",
			ariaHidden: true
		}, (detail.category === "baggage" || detail.icon) && /* @__PURE__ */ __dil.jsx("icon", {
			name: detail.category === "baggage" ? "suitcase" : detail.icon === "checkmark" ? "check" : "dollar-circle",
			size: "md",
			color
		})), /* @__PURE__ */ __dil.jsx("col", {
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			color,
			size: "xs"
		}, detail.label)));
	}
	function FareChoices({ choices, labels, selectedCandidateId, onPropose, buttonLabel, onSelect, hideSelect = false }) {
		const instanceId = DIL.useId();
		const [details, showDetails] = DIL.useState(false);
		const [moreFares, showMoreFares] = DIL.useState(false);
		const selected = choices.find((choice) => choice.candidate_id === selectedCandidateId) ?? choices[0];
		const bounded = !!labels.fares_more && !!labels.fares_less;
		const visibleChoices = moreFares || !bounded ? choices : choices.filter((choice, index) => index < 2 || choice.candidate_id === selected?.candidate_id);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("radio-group", {
			label: labels.fare_choice,
			direction: "col",
			value: selected?.candidate_id ?? "",
			onChange: (candidateId) => {
				if (!choices.some((choice) => choice.candidate_id === candidateId)) return;
				onPropose(candidateId);
				showDetails(false);
			}
		}, visibleChoices.map((choice) => {
			const active = selected?.candidate_id === choice.candidate_id;
			const fareDetails = choice.detail_rows ?? choice.detail_labels?.map((label) => ({
				label,
				icon: null
			})) ?? [];
			return /* @__PURE__ */ __dil.jsx("box", {
				key: choice.candidate_id,
				padding: { y: 2 },
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 2,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 3,
				align: "start",
				justify: "between",
				wrap: "wrap"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: "1 1 150px",
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("radio", {
				id: instanceId + ":" + choice.candidate_id,
				value: choice.candidate_id
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 1,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium"
			}, choice.fare_label ?? choice.airline), /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				size: "xs"
			}, choice.seller ?? choice.booking_sites.join(" · "))))), /* @__PURE__ */ __dil.jsx("col", {
				flex: "1 1 90px",
				minWidth: 0,
				align: "end",
				gap: 1,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("label", {
				htmlFor: instanceId + ":" + choice.candidate_id,
				weight: "semibold",
				color: "primary",
				textAlign: "end",
				size: "md"
			}, choice.price), /* @__PURE__ */ __dil.jsx("label", {
				htmlFor: instanceId + ":" + choice.candidate_id,
				weight: "normal",
				color: "secondary",
				textAlign: "end",
				size: "xs"
			}, choice.price_caption))), active && !hideSelect && /* @__PURE__ */ __dil.jsx("col", {
				gap: 2,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("divider", {
				spacing: 0,
				color: "subtle"
			}), choice.fare_notice && /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				size: "xs"
			}, choice.fare_notice), /* @__PURE__ */ __dil.jsx("col", {
				gap: fareDetails.length > 3 ? 0 : 2,
				disableAutoSpacing: true
			}, !!fareDetails.length && /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 1.5,
				disableAutoSpacing: true
			}, fareDetails.slice(0, details ? fareDetails.length : 3).map((detail, index) => /* @__PURE__ */ __dil.jsx(FareDetailRow, {
				key: index,
				detail
			}))), fareDetails.length > 3 && /* @__PURE__ */ __dil.jsx("pressable", {
				minHeight: 44,
				width: "100%",
				align: "start",
				justify: "center",
				onClick: () => showDetails(!details)
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				align: "center"
			}, details ? /* @__PURE__ */ __dil.jsx("icon", {
				name: "chevron-up",
				size: "md"
			}) : /* @__PURE__ */ __dil.jsx("icon", {
				name: "dots-horizontal",
				size: "md"
			}), /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				size: "xs"
			}, details ? labels.fare_details_less : labels.fare_details_more)))), !hideSelect && /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: labels.select + ": " + buttonLabel,
				width: "100%",
				height: 48,
				background: {
					light: "#0d0d0d",
					dark: "#f5f5f5"
				},
				radius: "full",
				align: "center",
				justify: "center",
				onClick: () => {
					if (choices.some((item) => item.candidate_id === choice.candidate_id)) onSelect(choice.candidate_id);
				}
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				weight: "medium",
				color: {
					light: "#ffffff",
					dark: "#0d0d0d"
				}
			}, labels.select))))));
		})), bounded && choices.length > 2 && /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 44,
			onClick: () => showMoreFares(!moreFares)
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: moreFares ? "chevron-up" : "chevron-down",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, moreFares ? labels.fares_less : labels.fares_more))));
	}
	function SearchNotice({ state }) {
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const now = DIL.useNow();
		const labels = state.labels;
		const empty = state.items.length === 0;
		const unfinished = state.complete === false;
		const complete = !unfinished && state.search_coverage === "complete";
		const request = state.search_request;
		const supported = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		const fresh = (time) => isFlightSearchRequestFresh(request, time);
		const retry = () => {
			if (!supported || !fresh(Date.now()) || !labels.retry_request) return;
			GenUI.issueNewTurn(formatFlightSearchRequest(request, labels, "retry"));
		};
		const edit = () => {
			if (!supported || !request || !labels.edit_request) return;
			GenUI.issueNewTurn(formatFlightSearchRequest(request, labels, "edit"));
		};
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: 560,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("card", {
			width: "100%",
			padding: 4,
			radius: 24,
			background: "surface-secondary"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%",
			disableAutoSpacing: true
		}, (empty || unfinished) && /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, complete ? labels.empty_heading : labels.incomplete_heading), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, unfinished ? labels.unfinished_body ?? labels.disclaimer : empty ? complete ? labels.empty_body : labels.incomplete_body : labels.partial_notice), supported && request && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%",
			disableAutoSpacing: true
		}, !complete && fresh(now) && labels.retry_request && labels.retry_search && /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			size: "xl",
			variant: "solid",
			onClick: retry
		}, labels.retry_search), labels.edit_request && labels.change_search && /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			size: "xl",
			variant: "outline",
			onClick: edit
		}, labels.change_search)))));
	}
	function TripReview({ item, choices, labels, searchRequest, wideBooking = false, onBack, onChoose }) {
		const { isDark } = DIL.useTheme();
		const [details, showDetails] = DIL.useState(false);
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const now = DIL.useNow();
		const supported = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("open_url") === true;
		const canSearch = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		const enabled = supported && item.booking_urls.length > 0;
		const sellerChoices = choices?.length ? choices : [item];
		const inlineSellers = !!labels.book_with_seller && sellerChoices.every((quote) => quote.booking_urls.length === 1);
		const compactReview = inlineSellers;
		const freshSearch = (time) => isFlightSearchRequestFresh(searchRequest, time);
		const recovery = !item.booking_urls.length && canSearch && searchRequest ? freshSearch(now) && labels.retry_request && labels.retry_search ? "retry" : labels.edit_request && labels.change_search ? "edit" : null : null;
		const actionable = enabled || !!recovery;
		const openQuote = (quote, url) => {
			const current = sellerChoices.find((entry) => entry.candidate_id === quote.candidate_id);
			if (!supported || !current || !current.booking_urls.includes(url)) return;
			onChoose?.(current.candidate_id);
			GenUI.openUrl(url);
		};
		const submit = (url) => {
			if (recovery) {
				const clickTime = Date.now();
				if (!canSearch || !searchRequest || item.booking_urls.length > 0) return;
				if (recovery === "retry" && !freshSearch(clickTime)) return;
				GenUI.issueNewTurn(formatFlightSearchRequest(searchRequest, labels, recovery));
				return;
			}
			if (!enabled || !item.booking_urls.includes(url)) return;
			openQuote(item, url);
		};
		const actions = /* @__PURE__ */ __dil.jsx(ReviewActions, {
			item,
			labels,
			recovery,
			actionable,
			onBack,
			submit
		});
		const bookingActions = inlineSellers && !(recovery && sellerChoices.every((quote) => !quote.booking_urls.length)) ? /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			onClick: onBack
		}, labels.cancel) : actions;
		const sellerOptions = /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			border: {
				size: 1,
				color: "subtle"
			},
			radius: wideBooking ? 16 : compactReview ? 28 : 16,
			padding: wideBooking ? {
				x: 3,
				y: 1
			} : compactReview ? 5 : void 0,
			disableAutoSpacing: true
		}, sellerChoices.map((quote, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: quote.candidate_id,
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(SellerQuote, {
			item: quote,
			labels,
			supported,
			compact: compactReview,
			horizontal: wideBooking,
			onBook: () => openQuote(quote, quote.booking_urls[0])
		}), index < sellerChoices.length - 1 && /* @__PURE__ */ __dil.jsx("divider", {
			spacing: wideBooking ? 0 : compactReview ? 4 : 0,
			color: "subtle"
		}))));
		if (compactReview) return /* @__PURE__ */ __dil.jsx("col", {
			role: "region",
			ariaLabel: labels.review_heading ?? labels.review,
			gap: 3,
			width: "100%",
			maxWidth: wideBooking ? void 0 : 400,
			disableAutoSpacing: true
		}, sellerOptions, !wideBooking && /* @__PURE__ */ __dil.jsx("row", { gap: 2.5 }, bookingActions), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer));
		return /* @__PURE__ */ __dil.jsx("col", {
			role: "region",
			ariaLabel: labels.review_heading ?? labels.review,
			gap: 3,
			width: "100%",
			maxWidth: 560,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("card", {
			background: isDark ? "surface-elevated" : "#fff",
			radius: 24,
			width: "100%",
			padding: 0,
			shadow: true,
			shadowStyle: isDark ? void 0 : "0 0 0 0.5px rgba(13,13,13,0.15), 0 4px 16px rgba(0,0,0,0.05)"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, !compactReview && /* @__PURE__ */ __dil.jsx("row", {
			height: 54,
			padding: {
				left: 4,
				right: 1
			},
			gap: 2,
			align: "center",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			gap: 2.5,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "tertiary",
			truncate: true,
			width: "100%"
		}, inlineSellers ? labels.review_heading ?? labels.review : item.seller || item.booking_sites.join(" · ")))), /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: labels.details,
			ariaPressed: details,
			tooltip: labels.details,
			width: 44,
			height: 44,
			align: "center",
			justify: "center",
			radius: "full",
			onClick: () => showDetails(!details)
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "info",
			size: "md"
		}))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			padding: {
				x: 4,
				top: compactReview ? 4 : 1,
				bottom: 6
			},
			disableAutoSpacing: true
		}, !compactReview && /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			disableAutoSpacing: true
		}, !inlineSellers && /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, labels.review_heading ?? labels.review), /* @__PURE__ */ __dil.jsx(FlightItinerary, {
			legs: item.legs,
			details
		}), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.summary)), !inlineSellers && /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, item.price))), item.booking_urls.length > 1 && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.split), !inlineSellers && item.fare_notice && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, item.fare_notice), !inlineSellers && details && item.detail_labels && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, item.detail_labels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "sm",
			color: "secondary"
		}, label))), inlineSellers && /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, labels.fare_options), sellerOptions), !inlineSellers && (!supported || !item.booking_urls.length) && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, !supported ? labels.unavailable : labels.no_link)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2.5,
			padding: {
				x: 4,
				bottom: 4
			}
		}, bookingActions))), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer));
	}
	function SellerQuote({ item, labels, supported, compact, horizontal = false, onBook }) {
		const [details, showDetails] = DIL.useState(false);
		const seller = item.seller || item.booking_sites.join(" · ");
		const bookLabel = labels.book_with_seller.replace("{seller}", seller);
		const detailLabels = item.detail_rows?.map((row) => row.label) ?? item.detail_labels ?? [];
		const bookName = [
			bookLabel,
			item.fare_label,
			item.price,
			item.price_caption
		].filter((value) => !!value).join(", ");
		if (horizontal) return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: bookName,
			width: "100%",
			minHeight: 80,
			padding: {
				x: 1,
				y: 3
			},
			disabled: !supported || !item.booking_urls.length,
			onClick: onBook
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.seller_logo_url,
			size: 28,
			fallbackIcon: "globe"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, bookLabel), item.fare_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.fare_label)), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			gap: .5,
			padding: { right: 2 },
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.price_caption)), /* @__PURE__ */ __dil.jsx("box", {
			radius: "full",
			border: {
				size: 1,
				color: "subtle"
			},
			padding: {
				x: 4,
				y: 3
			}
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.continue_booking ?? labels.continue)))), !supported && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.unavailable));
		if (compact) return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: bookName,
			width: "100%",
			minHeight: 64,
			padding: {
				x: 2,
				y: 2
			},
			radius: 12,
			hoverBackground: "surface-secondary",
			disabled: !supported || !item.booking_urls.length,
			onClick: onBook
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: item.seller_logo_url,
			size: 20,
			fallbackIcon: "globe"
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1.5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, item.price, item.price_caption && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "normal",
			color: "secondary"
		}, " " + item.price_caption)), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, bookLabel, item.fare_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "normal",
			color: "secondary"
		}, " · " + item.fare_label))), /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right",
			size: "sm"
		})))), !supported && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.unavailable));
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: bookName,
			minHeight: 72,
			width: "100%",
			padding: 3,
			disabled: !supported || !item.booking_urls.length,
			onClick: onBook
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xl",
			weight: "semibold"
		}, item.price), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, bookLabel), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap"
		}, item.fare_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.fare_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.price_caption))), /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-right",
			size: "sm"
		})))), (item.fare_notice || detailLabels.length > 0 || !supported) && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: {
				x: 3,
				bottom: 3
			},
			disableAutoSpacing: true
		}, item.fare_notice && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, item.fare_notice), detailLabels.length > 0 && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			minHeight: 44,
			onClick: () => showDetails(!details)
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, details ? labels.fare_details_less ?? labels.details : labels.fare_details_more ?? labels.details), /* @__PURE__ */ __dil.jsx("icon", {
			name: details ? "chevron-up" : "chevron-down",
			size: "sm"
		}))), details && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, detailLabels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "sm",
			color: "secondary"
		}, label)))), !supported && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.unavailable)));
	}
	function ReviewActions({ item, labels, recovery, actionable, onBack, submit }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2.5,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			flex: 1,
			minWidth: 0,
			minHeight: 48,
			height: 48,
			border: {
				size: 1,
				color: "default"
			},
			radius: "full",
			align: "center",
			justify: "center",
			onClick: onBack
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, labels.cancel)), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 2,
			disableAutoSpacing: true
		}, (recovery || !item.booking_urls.length ? [""] : item.booking_urls).map((url, index) => /* @__PURE__ */ __dil.jsx("pressable", {
			key: url || "recovery",
			flex: 1,
			minWidth: 0,
			minHeight: 48,
			height: 48,
			background: actionable ? {
				light: "#0d0d0d",
				dark: "#f5f5f5"
			} : "surface-tertiary",
			radius: "full",
			align: "center",
			justify: "center",
			border: {
				size: 1,
				color: actionable ? {
					light: "#0d0d0d",
					dark: "#f5f5f5"
				} : "subtle"
			},
			disabled: !actionable,
			onClick: () => submit(url)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			textAlign: "center",
			color: actionable ? {
				light: "#ffffff",
				dark: "#0d0d0d"
			} : "tertiary"
		}, recovery === "retry" ? labels.retry_search : recovery === "edit" ? labels.change_search : labels.continue, !recovery && item.booking_urls.length > 1 ? " " + (index + 1) : "")))));
	}
	function FlightItinerary({ legs, details, inline = false, compact = false, showFareBrands = false, action, hideHeader = false, showLegHeadings = false, separateConnections = false, secondaryColor = "secondary" }) {
		const firstLeg = legs.findIndex((leg) => leg.segments.length > 0);
		if (firstLeg < 0) return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, action);
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, legs.map((leg, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 2,
			disableAutoSpacing: true
		}, index > 0 && /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 2,
			color: "subtle"
		}), showLegHeadings && leg.segments[0] && /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			padding: { y: 2 },
			disableAutoSpacing: true
		}, leg.segments[0].departure_airport_code && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, multiCityRoute(leg)), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, leg.segments[0].dates)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, leg.segments.map((segment, segmentIndex) => /* @__PURE__ */ __dil.jsx("col", {
			key: segmentIndex,
			gap: 0,
			disableAutoSpacing: true
		}, separateConnections && segmentIndex > 0 ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: { y: 3 },
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}), segment.connection_before && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			color: secondaryColor,
			size: "xs"
		}, segment.connection_before), /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 0,
			color: "subtle"
		}))) : segment.connection_before ? /* @__PURE__ */ __dil.jsx("box", { padding: { y: 2 } }, /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				x: 4,
				y: 2
			},
			background: "surface-secondary",
			radius: 12
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: secondaryColor,
			size: "xs"
		}, segment.connection_before))) : null, /* @__PURE__ */ __dil.jsx(FlightSegment, {
			segment,
			hideHeader,
			details,
			inline,
			compact,
			secondaryColor,
			fareBrand: showFareBrands && segmentIndex === 0 ? leg.fare_brand : null,
			action: index === firstLeg && segmentIndex === 0 ? action : void 0
		})))))));
	}
	function FlightSegmentHeader({ segment, fareBrand, action, secondaryColor = "secondary" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 3,
			align: "center",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: segment.logo_url,
			size: 32
		}), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: .5,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, segment.airline), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, [segment.dates, fareBrand].filter(Boolean).join(" · ")))), action && /* @__PURE__ */ __dil.jsx("box", {
			width: 88,
			minWidth: 88
		}, action));
	}
	function FlightSegmentMetadata({ segment, details, compact, belowTimeline = false, includeCarrier = true, fareBrand, secondaryColor = "secondary" }) {
		const aircraft = details ? segment.aircraft : null;
		const values = [
			...belowTimeline ? includeCarrier ? [segment.airline, fareBrand] : [] : [segment.duration],
			compact ? aircraft : null,
			details ? segment.flight_number : null
		].filter((value) => !!value);
		if (!values.length && !aircraft) return null;
		const metadata = values.length ? /* @__PURE__ */ __dil.jsx("row", {
			gap: 1.5,
			wrap: "wrap",
			align: "center"
		}, values.map((value, index) => /* @__PURE__ */ __dil.jsx("row", {
			key: index,
			gap: 1.5,
			align: "center"
		}, index > 0 && /* @__PURE__ */ __dil.jsx("box", { ariaHidden: true }, /* @__PURE__ */ __dil.jsx("text", {
			size: compact ? "xs" : "sm",
			color: secondaryColor
		}, "·")), /* @__PURE__ */ __dil.jsx("text", {
			size: compact ? "xs" : "sm",
			color: secondaryColor
		}, value)))) : null;
		return compact ? metadata : /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, metadata, aircraft && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: secondaryColor
		}, aircraft));
	}
	function FlightSegment({ segment, details, inline = false, compact = false, fareBrand, action, hideHeader = false, secondaryColor = "secondary" }) {
		if (inline && !(segment.departure_airport_code && segment.departure_time && segment.arrival_airport_code && segment.arrival_time)) return /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(FlightSegmentHeader, {
			segment,
			compact,
			fareBrand,
			action,
			secondaryColor
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium"
		}, segment.route), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: secondaryColor
		}, segment.time_range ?? segment.times, segment.day_offset && " " + segment.day_offset), details && segment.airports && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.airports), /* @__PURE__ */ __dil.jsx(FlightSegmentMetadata, {
			segment,
			details,
			compact,
			secondaryColor
		})));
		if (segment.departure_airport_code && segment.departure_time && segment.arrival_airport_code && segment.arrival_time) return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: inline ? void 0 : 4,
			border: inline ? void 0 : {
				size: 1,
				color: "subtle"
			},
			radius: inline ? void 0 : 16
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: inline ? 2 : 3,
			minWidth: 0,
			disableAutoSpacing: true
		}, !inline && /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, { src: segment.logo_url }), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, segment.airline), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.dates)), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx(FlightEndpoint, {
			code: segment.departure_airport_code,
			name: segment.departure_airport_name,
			time: segment.departure_time,
			inline,
			compact,
			secondaryColor
		}), /* @__PURE__ */ __dil.jsx("row", {
			gap: inline ? 2 : 3,
			align: "stretch"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: 20,
			flex: "0 0 20px",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 2,
			minHeight: inline ? compact ? 40 : 48 : 40,
			flex: 1,
			background: "alpha-15",
			ariaHidden: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			padding: { y: inline ? compact ? 1 : 1.5 : 3 },
			disableAutoSpacing: true
		}, segment.duration && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: secondaryColor
		}, segment.duration), !inline && details && segment.flight_number && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.flight_number), !inline && details && segment.aircraft && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.aircraft))), /* @__PURE__ */ __dil.jsx(FlightEndpoint, {
			code: segment.arrival_airport_code,
			name: segment.arrival_airport_name,
			time: segment.arrival_time,
			dayOffset: segment.day_offset,
			arrival: true,
			inline,
			compact,
			secondaryColor
		})), inline && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, !hideHeader && /* @__PURE__ */ __dil.jsx(FlightSegmentHeader, {
			segment,
			compact,
			fareBrand,
			action,
			secondaryColor
		}), /* @__PURE__ */ __dil.jsx(FlightSegmentMetadata, {
			segment,
			details,
			compact,
			belowTimeline: true,
			includeCarrier: hideHeader,
			fareBrand,
			secondaryColor
		}))));
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "start",
			padding: { y: 3 }
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 48,
			minSize: 48,
			radius: "full",
			border: {
				size: .5,
				color: "subtle"
			},
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "plane",
			size: "xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "lg" }, segment.route), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "tertiary"
		}, segment.dates), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "tertiary"
		}, segment.time_range ?? segment.times, segment.day_offset && " " + segment.day_offset), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, { src: segment.logo_url }), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "tertiary"
		}, segment.airline))), details && segment.flight_number && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.flight_number), details && segment.airports && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.airports), details && segment.aircraft && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: secondaryColor
		}, segment.aircraft))));
	}
	function FlightEndpoint({ code, name, time, dayOffset, arrival = false, inline = false, compact = false, secondaryColor = "secondary" }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: inline ? 2 : 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			minWidth: 20,
			height: 24,
			align: "center",
			justify: "center",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: arrival ? "map-pin" : "plane",
			size: "md",
			color: "primary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: inline ? .5 : 1,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: inline ? "md" : "lg",
			weight: "medium"
		}, time, dayOffset && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: {
				light: "#d25e28",
				dark: "#f0a872"
			}
		}, " " + dayOffset), /* @__PURE__ */ __dil.jsx("text", { color: secondaryColor }, " · " + code)), name && /* @__PURE__ */ __dil.jsx("text", {
			size: inline && compact ? "xs" : "sm",
			color: secondaryColor
		}, name)));
	}

//#endregion
return FlightResults;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=flight-results-17ac313922fa.js.map