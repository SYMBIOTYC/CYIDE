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
		const { isDark } = DIL.useTheme();
		const [selection, select] = DIL.useState(null);
		const [fareProposal, setFareProposal] = DIL.useState(null);
		const [sort, setSort] = DIL.useState("recommended");
		const [expanded, expand] = DIL.useState(false);
		const [departure, setDeparture] = DIL.useState(null);
		const [openGroup, setOpenGroup] = DIL.useState(null);
		const labels = state.labels;
		const pending = state.ready !== true && state.complete === false;
		DIL.useEffect(() => {
			if (pending) {
				select(null);
				setDeparture(null);
				setOpenGroup(null);
				setFareProposal(null);
			}
		}, [pending]);
		const selected = !pending && selection?.responseId === state.response_id ? state.items.find((item) => item.candidate_id === selection.candidateId) : void 0;
		const staged = state.comparable_prices && !!labels.outbound_heading && !!labels.return_heading && !!labels.choose_outbound && !!labels.change_outbound && !!labels.outbound_price_caption && state.items.length > 0 && state.items.every((item) => !!item.outbound_group_id && !!item.return_summary);
		const departureId = staged && departure?.responseId === state.response_id && state.items.some((item) => item.outbound_group_id === departure.id) ? departure.id : null;
		const choosingDeparture = staged && !departureId;
		const departingItem = departureId ? state.items.find((item) => item.outbound_group_id === departureId) : void 0;
		const changeDeparture = () => {
			setDeparture(null);
			setOpenGroup(null);
			setFareProposal(null);
			expand(false);
		};
		const items = state.items.filter((item) => !departureId || item.outbound_group_id === departureId);
		const legDuration = (item) => departureId ? item.return_summary?.duration_minutes : item.outbound_duration_minutes;
		const stageDurations = items.map(legDuration);
		const comparableStageDurations = staged && !!labels.stage_duration && stageDurations.every((duration) => typeof duration === "number" && Number.isFinite(duration) && duration > 0) && stageDurations.some((duration) => duration !== stageDurations[0]);
		const activeSort = sort === "duration" && !(staged ? comparableStageDurations : state.comparable_durations) || sort === "price" && !state.comparable_prices ? "recommended" : sort;
		const lowestPriceRank = Math.min(...items.map((item) => item.price_rank));
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
		if (state.items.length === 0) return /* @__PURE__ */ __dil.jsx(SearchNotice, { state });
		if (selected) return /* @__PURE__ */ __dil.jsx(TripReview, {
			item: selected,
			labels,
			searchRequest: state.search_request,
			onBack: () => select(null)
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%",
			maxWidth: 560,
			disableAutoSpacing: true
		}, (pending || state.search_coverage === "partial") && /* @__PURE__ */ __dil.jsx(SearchNotice, { state }), departingItem && labels.selected_outbound && /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%",
			align: "end",
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			padding: { right: 3 }
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "arrow-curved-right-xs",
			size: "2xl",
			color: "tertiary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, labels.selected_outbound)), /* @__PURE__ */ __dil.jsx("pressable", {
			background: "surface-tertiary",
			radius: 22,
			padding: 4,
			width: "fit-content",
			maxWidth: 289,
			ariaLabel: labels.change_outbound,
			tooltip: labels.change_outbound,
			onClick: changeDeparture
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			minWidth: 0,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center",
			justify: "between"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "medium"
		}, departingItem.time_range ?? departingItem.times, departingItem.day_offset && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold",
			color: {
				light: "#d25e28",
				dark: "#f0a872"
			}
		}, " " + departingItem.day_offset))), /* @__PURE__ */ __dil.jsx("icon", {
			name: "pencil",
			size: "md",
			color: "secondary"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, departingItem.route, departingItem.outbound_duration ? /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, " · " + departingItem.outbound_duration) : ""), departingItem.outbound_airline && /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx(CarrierLogo, {
			src: departingItem.logo_url,
			background: "surface-secondary"
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, departingItem.outbound_airline)))))), /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, staged ? choosingDeparture ? labels.outbound_heading : labels.return_heading : labels.heading), state.items[0] && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.items[0].dates + " · " + state.items[0].summary), departureId && !labels.selected_outbound && /* @__PURE__ */ __dil.jsx("pressable", {
			height: 44,
			onClick: changeDeparture
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "chevron-left",
			size: "sm"
		}), /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.change_outbound))), /* @__PURE__ */ __dil.jsx("row", {
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
			size: "xs",
			color: activeSort === key ? "primary" : "secondary"
		}, key === "duration" && staged ? labels.stage_duration : labels[key])))), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			disableAutoSpacing: true
		}, groups.slice(0, expanded ? groups.length : 3).map((group) => {
			const original = group.item;
			const stagedBadges = original.price_rank === lowestPriceRank && labels.cheapest_badge ? [labels.cheapest_badge] : [];
			const item = departureId ? {
				...original,
				...original.return_summary,
				badges: stagedBadges
			} : choosingDeparture ? {
				...original,
				badges: stagedBadges,
				price_caption: labels.outbound_price_caption
			} : original;
			const multiple = !choosingDeparture && group.choices.length > 1;
			const fareSelector = !choosingDeparture && !!labels.fare_choice && !!labels.review_fare && !!labels.fare_details && !!labels.fare_details_more && !!labels.fare_details_less;
			const expandable = multiple || fareSelector;
			const expandLabel = multiple ? labels.fare_options : labels.fare_details;
			const groupOpen = openGroup?.id === group.id && openGroup?.responseId === state.response_id;
			return /* @__PURE__ */ __dil.jsx("col", {
				key: group.id,
				gap: 2,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("card", {
				padding: 0,
				radius: 24,
				width: "100%",
				background: isDark ? "surface-elevated" : "#fff",
				shadow: true,
				shadowStyle: isDark ? void 0 : "0 0 0 1px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05)"
			}, /* @__PURE__ */ __dil.jsx(FlightOption, {
				ariaLabel: (choosingDeparture ? labels.choose_outbound : expandable ? expandLabel : labels.review) + ": " + item.airline + ", " + item.times + ", " + item.price,
				ariaPressed: expandable ? groupOpen : void 0,
				disabled: pending,
				onClick: () => {
					if (pending) return;
					if (choosingDeparture) {
						setDeparture({
							id: group.id,
							responseId: state.response_id
						});
						setOpenGroup(null);
						expand(false);
					} else if (expandable) setOpenGroup(groupOpen ? null : {
						id: group.id,
						responseId: state.response_id
					});
					else select({
						candidateId: item.candidate_id,
						responseId: state.response_id
					});
				}
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				width: "100%",
				disableAutoSpacing: true
			}, !!item.badges?.length && /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				wrap: "wrap"
			}, item.badges.map((badge) => /* @__PURE__ */ __dil.jsx("box", {
				key: badge,
				background: {
					light: "#e8f3fe",
					dark: "#132e4b"
				},
				padding: {
					x: 2,
					y: 1
				},
				radius: 6
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold",
				color: {
					light: "#3a83f7",
					dark: "#8abbff"
				}
			}, badge)))), /* @__PURE__ */ __dil.jsx("col", {
				gap: 1.5,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 3,
				align: "baseline",
				justify: "between",
				wrap: "wrap"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: "1 0 190px",
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "lg",
				weight: "medium"
			}, item.time_range ?? item.times, item.day_offset && /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold",
				color: {
					light: "#d25e28",
					dark: "#f0a872"
				}
			}, " " + item.day_offset))), /* @__PURE__ */ __dil.jsx("col", {
				flex: "1 0 90px",
				minWidth: 0,
				align: "end"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xl",
				weight: "semibold",
				textAlign: "end"
			}, item.price))), /* @__PURE__ */ __dil.jsx("col", {
				gap: 2.5,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				align: "start",
				justify: "between"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, item.route, /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, (item.outbound_duration !== void 0 ? item.outbound_duration : item.duration) ? " · " + (item.outbound_duration !== void 0 ? item.outbound_duration : item.duration) : !item.stops && item.trip_detail ? " · " + item.trip_detail : ""))), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				textAlign: "end"
			}, item.price_caption)), /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				align: "start",
				justify: "between"
			}, /* @__PURE__ */ __dil.jsx("row", {
				flex: 1,
				minWidth: 0,
				gap: 2,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx(CarrierLogo, { src: item.logo_url }), /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, item.airline))), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary",
				textAlign: "end"
			}, item.outbound_stops ?? item.stops)))), expandable && /* @__PURE__ */ __dil.jsx("row", {
				gap: 2,
				align: "center"
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, expandLabel), /* @__PURE__ */ __dil.jsx("icon", {
				name: groupOpen ? "chevron-up" : "chevron-down",
				size: "sm"
			})))), !pending && expandable && groupOpen && (fareSelector ? /* @__PURE__ */ __dil.jsx("box", {
				padding: {
					x: 5,
					bottom: 5
				},
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(FareChoices, {
				key: state.response_id + ":" + group.id,
				choices: group.choices,
				labels,
				selectedCandidateId: fareProposal?.responseId === state.response_id ? fareProposal.candidateId : null,
				onPropose: (candidateId) => setFareProposal({
					candidateId,
					responseId: state.response_id
				}),
				buttonLabel: departureId && labels.choose_return ? labels.choose_return : labels.review_fare,
				onSelect: (candidateId) => {
					setFareProposal({
						candidateId,
						responseId: state.response_id
					});
					select({
						candidateId,
						responseId: state.response_id
					});
				}
			})) : /* @__PURE__ */ __dil.jsx("col", {
				gap: 2,
				disableAutoSpacing: true
			}, group.choices.map((choice) => /* @__PURE__ */ __dil.jsx("card", {
				key: choice.candidate_id,
				padding: 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				width: "100%",
				padding: 4,
				radius: 24,
				ariaLabel: labels.review + ": " + (choice.fare_label ?? choice.airline) + ", " + (choice.seller ?? choice.booking_sites.join(" · ")) + ", " + choice.price,
				onClick: () => select({
					candidateId: choice.candidate_id,
					responseId: state.response_id
				})
			}, /* @__PURE__ */ __dil.jsx("row", {
				gap: 3,
				align: "center",
				justify: "between"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0,
				gap: 1,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", { size: "md" }, choice.fare_label ?? choice.airline), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: "secondary"
			}, choice.seller ?? choice.booking_sites.join(" · ")), choice.fare_notice && /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, choice.fare_notice)), /* @__PURE__ */ __dil.jsx("col", {
				gap: 1,
				align: "end",
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "lg",
				weight: "semibold"
			}, choice.price), /* @__PURE__ */ __dil.jsx("text", {
				size: "xs",
				color: "secondary"
			}, choice.price_caption))))))))));
		})), groups.length > 3 && /* @__PURE__ */ __dil.jsx("pressable", {
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
		}, /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, expanded ? labels.less : labels.more)), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer));
	}
	function FlightOption({ disabled, ariaLabel, ariaPressed, onClick, children }) {
		const { isDark } = DIL.useTheme();
		if (disabled) return /* @__PURE__ */ __dil.jsx("box", {
			background: isDark ? "surface-elevated" : "#fff",
			radius: 24,
			padding: 5,
			width: "100%"
		}, children);
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel,
			ariaPressed,
			background: isDark ? "surface-elevated" : "#fff",
			radius: 24,
			padding: 5,
			width: "100%",
			onClick
		}, children);
	}
	function CarrierLogo({ src, background = "surface-tertiary" }) {
		const fallback = /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "full",
			background,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "plane",
			size: "xs",
			color: "secondary"
		}));
		return src ? /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			radius: "full",
			background: src.startsWith("https://content.r9cdn.net/rimg/provider-logos/airlines/") || src.split("?")[0]?.split("#")[0]?.includes("/for-light-background/") ? "#fff" : void 0
		}, /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt: "",
			width: 16,
			height: 16,
			fit: "contain",
			fallback
		})) : fallback;
	}
	function FareDetailRow({ detail }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			flex: "0 0 16px",
			ariaHidden: true
		}, detail.icon && /* @__PURE__ */ __dil.jsx("icon", {
			name: detail.icon === "checkmark" ? "check" : "dollar-circle",
			size: "md"
		})), /* @__PURE__ */ __dil.jsx("col", {
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs"
		}, detail.label)));
	}
	function FareChoices({ choices, labels, selectedCandidateId, onPropose, buttonLabel, onSelect }) {
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
				border: {
					size: 1,
					color: "subtle"
				},
				radius: 16,
				padding: {
					x: 4,
					y: 5
				},
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
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
				size: "md",
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
				size: "xl"
			}, choice.price), /* @__PURE__ */ __dil.jsx("label", {
				htmlFor: instanceId + ":" + choice.candidate_id,
				weight: "normal",
				color: "secondary",
				textAlign: "end",
				size: "xs"
			}, choice.price_caption))), active && /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("divider", {
				spacing: 0,
				color: "subtle"
			}), choice.fare_notice && /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				size: "xs"
			}, choice.fare_notice), /* @__PURE__ */ __dil.jsx("col", {
				gap: fareDetails.length > 3 ? 0 : 4,
				disableAutoSpacing: true
			}, !!fareDetails.length && /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				disableAutoSpacing: true
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
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
			}, details ? labels.fare_details_less : labels.fare_details_more)))), /* @__PURE__ */ __dil.jsx("pressable", {
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
			}, buttonLabel))))));
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
		const fresh = (time) => !!request && request.departure_date >= new Date(time).toISOString().slice(0, 10) && (!request.return_date || request.return_date >= request.departure_date);
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
	function TripReview({ item, labels, searchRequest, onBack }) {
		const { isDark } = DIL.useTheme();
		const [details, showDetails] = DIL.useState(false);
		const capabilities = DIL.useAppData((data) => data.opGenui);
		const now = DIL.useNow();
		const expired = !(Date.parse(item.expires_at) > now);
		const supported = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("open_url") === true;
		const canSearch = capabilities?.isShared !== true && capabilities?.supportedClientActions?.includes("issue_new_turn") === true;
		const enabled = supported && !expired && item.booking_urls.length > 0;
		const freshSearch = (time) => !!searchRequest && searchRequest.departure_date >= new Date(time).toISOString().slice(0, 10) && (!searchRequest.return_date || searchRequest.return_date >= searchRequest.departure_date);
		const recovery = expired && canSearch && searchRequest ? freshSearch(now) && labels.retry_request && labels.retry_search ? "retry" : labels.edit_request && labels.change_search ? "edit" : null : null;
		const actionable = enabled || !!recovery;
		const submit = (url) => {
			if (recovery) {
				const clickTime = Date.now();
				if (!canSearch || !searchRequest || Date.parse(item.expires_at) > clickTime) return;
				if (recovery === "retry" && !freshSearch(clickTime)) return;
				GenUI.issueNewTurn(formatFlightSearchRequest(searchRequest, labels, recovery));
				return;
			}
			if (!enabled || !item.booking_urls.includes(url) || !(Date.parse(item.expires_at) > Date.now())) return;
			GenUI.openUrl(url);
		};
		return /* @__PURE__ */ __dil.jsx("col", {
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
		}, /* @__PURE__ */ __dil.jsx("row", {
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
		}, item.seller || item.booking_sites.join(" · ")))), /* @__PURE__ */ __dil.jsx("pressable", {
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
				top: 1,
				bottom: 6
			},
			disableAutoSpacing: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, labels.review_heading ?? labels.review), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, item.legs.map((leg, index) => /* @__PURE__ */ __dil.jsx("col", {
			key: index,
			gap: 2,
			disableAutoSpacing: true
		}, index > 0 && /* @__PURE__ */ __dil.jsx("divider", {
			spacing: 2,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			disableAutoSpacing: true
		}, leg.segments.map((segment, segmentIndex) => /* @__PURE__ */ __dil.jsx("col", {
			key: segmentIndex,
			gap: 0,
			disableAutoSpacing: true
		}, segment.connection_before && /* @__PURE__ */ __dil.jsx("box", { padding: {
			left: 16,
			y: 2
		} }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs"
		}, segment.connection_before)), /* @__PURE__ */ __dil.jsx("row", {
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
			color: "secondary"
		}, segment.flight_number), details && segment.airports && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, segment.airports)))))))))), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, item.summary)), /* @__PURE__ */ __dil.jsx("text", {
			size: "lg",
			weight: "semibold"
		}, item.price)), item.booking_urls.length > 1 && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.split), item.fare_notice && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, item.fare_notice), details && item.detail_labels && /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			disableAutoSpacing: true
		}, item.detail_labels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			key: index,
			size: "sm",
			color: "secondary"
		}, label))), (!supported || expired || !item.booking_urls.length) && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, !supported ? labels.unavailable : expired ? labels.expired : labels.no_link)), /* @__PURE__ */ __dil.jsx("row", {
			gap: 2.5,
			padding: {
				x: 4,
				bottom: 4
			}
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
		}, recovery === "retry" ? labels.retry_search : recovery === "edit" ? labels.change_search : labels.continue, !recovery && item.booking_urls.length > 1 ? " " + (index + 1) : ""))))))), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.disclaimer));
	}

//#endregion
return FlightResults;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=flight-results-deab2e44ccf3.js.map