import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


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
//#region MovieShowtimesSidebarWidget.dil.tsx
	function theaterKey(theater) {
		return JSON.stringify([theater.theater.name, theater.theater.address]);
	}
	function matchesFormat(showtime, format) {
		return !format || showtime.format.toLowerCase().includes(format.toLowerCase());
	}
	function LoadingShowtimes({ title, label }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			padding: { y: 2 },
			role: "progressbar",
			ariaLabel: label || title
		}, /* @__PURE__ */ __dil.jsx("loading-indicator", {
			size: "sm",
			color: "secondary"
		}), label && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, label));
	}
	function ShowtimeGroups({ theaters, format, emptyMessage }) {
		const groups = [];
		for (const theater of theaters) for (const showtime of theater.showtimes) {
			if (!matchesFormat(showtime, format)) continue;
			const amenities = (showtime.amenities ?? []).filter((label) => /seating|recliner|caption|accessib|audio description|descriptive audio|assistive listening|wheelchair/i.test(label));
			const key = JSON.stringify([
				theaterKey(theater),
				showtime.format,
				amenities
			]);
			let group = groups.find((candidate) => candidate.key === key);
			if (!group) {
				group = {
					key,
					format: showtime.format,
					amenities,
					showtimes: []
				};
				groups.push(group);
			}
			group.showtimes.push(showtime);
		}
		if (groups.length === 0) return theaters.length > 0 ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, emptyMessage) : null;
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 12,
			padding: { top: 3 }
		}, groups.map((group) => /* @__PURE__ */ __dil.jsx("col", {
			key: group.key,
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, group.format && /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "medium"
		}, group.format), group.amenities.length > 0 && /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, group.amenities.join(" · "))), /* @__PURE__ */ __dil.jsx("grid", {
			columns: 3,
			gap: 2
		}, group.showtimes.map((showtime) => /* @__PURE__ */ __dil.jsx("grid-item", { key: showtime.ticket_url }, /* @__PURE__ */ __dil.jsx(LinkImpression, { url: showtime.ticket_url }, /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			color: "primary",
			size: "xl",
			pill: true,
			block: true,
			onClick: () => GenUI.openUrl(showtime.ticket_url)
		}, showtime.display_time))))))));
	}
	function MovieShowtimesSidebarWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("MovieShowtimesSidebarWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx(LoadingShowtimes, { title: props.movie_title });
		return /* @__PURE__ */ __dil.jsx(Showtimes, {
			key: \`\${props.movie_title}:\${state.date_from}\`,
			source: state
		});
	}
	function Showtimes({ source }) {
		const fetched = DIL.useRef({
			data: null,
			pending: false,
			failed: false
		});
		const [, render] = DIL.useState(0);
		const [selectedDate, setSelectedDate] = DIL.useState(null);
		const [selectedTime, setSelectedTime] = DIL.useState(source.selected_time ?? (source.time_choices?.some((choice) => choice.value === "requested") ? "requested" : "all"));
		const [selectedFormat, setSelectedFormat] = DIL.useState(source.selected_format ?? "");
		const requestedTheater = source.selected_theater ?? source.theaters.find((theater) => theater.theater.name === source.preferences?.theater_name)?.theater;
		const [selectedTheater, setSelectedTheater] = DIL.useState(requestedTheater ? {
			value: theaterKey({ theater: requestedTheater }),
			label: requestedTheater.name
		} : null);
		const cancelRequest = DIL.useRef(null);
		DIL.useEffect(() => () => {
			cancelRequest.current?.();
		}, []);
		const pending = fetched.current.pending;
		const failed = fetched.current.failed;
		const state = fetched.current.data ?? source;
		const primaryGenre = state.movie?.genres.find((genre) => genre.trim())?.trim();
		const date = selectedDate ?? state.selected_date;
		async function selectDate(next, nextTime = selectedTime) {
			setSelectedDate(next);
			setSelectedTime(nextTime);
			cancelRequest.current?.();
			let active = true;
			cancelRequest.current = () => {
				active = false;
			};
			fetched.current = {
				...fetched.current,
				pending: true,
				failed: false
			};
			render((version) => version + 1);
			try {
				const result = await GenUI.dispatchAction({
					handler: "server",
					context: "none",
					type: "movie_showtimes_sidebar_fetch",
					payload: {
						movie_title: source.movie_title,
						show_date: next,
						search_mode: source.search_mode ?? "contextual",
						format: selectedFormat || null,
						preferences: source.preferences ? {
							...source.preferences,
							time_from: source.time_choices?.find((choice) => choice.value === nextTime)?.time_from ?? null,
							time_to: source.time_choices?.find((choice) => choice.value === nextTime)?.time_to ?? null
						} : void 0
					}
				});
				if (!active) return;
				if (result?.status === "success" && result.response?.status === "success" && result.response.data) {
					const previous = fetched.current.data ?? source;
					const nextState = result.response.data;
					fetched.current = {
						...fetched.current,
						data: {
							...nextState,
							movie: nextState.movie ? {
								...nextState.movie,
								genres: nextState.movie.genres.length ? nextState.movie.genres : previous.movie?.genres ?? []
							} : previous.movie,
							runtime_label: nextState.runtime_label || previous.runtime_label
						}
					};
				} else fetched.current = {
					...fetched.current,
					failed: true
				};
			} catch {
				if (active) fetched.current = {
					...fetched.current,
					failed: true
				};
			} finally {
				if (active) {
					fetched.current = {
						...fetched.current,
						pending: false
					};
					render((version) => version + 1);
				}
			}
		}
		const availableTheaters = state.theaters.filter((theater) => theater.showtimes.length > 0);
		const options = availableTheaters.filter((theater) => theater.showtimes.some((showtime) => matchesFormat(showtime, selectedFormat))).map((theater) => ({
			value: theaterKey(theater),
			label: theater.theater.name
		}));
		const activeTheater = selectedTheater && options.some((option) => option.value === selectedTheater.value) ? selectedTheater : options[0];
		const theaters = availableTheaters.filter((theater) => theaterKey(theater) === activeTheater?.value);
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%",
			padding: { top: 4 }
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 6 }, /* @__PURE__ */ __dil.jsx("row", {
			gap: 4,
			align: "center"
		}, source.poster?.images?.length ? /* @__PURE__ */ __dil.jsx(AsyncImage, {
			__state: source.poster,
			alt: source.movie_title,
			width: 64,
			aspectRatio: "2:3",
			fit: "cover",
			radius: "lg",
			interactive: false
		}) : null, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("pressable", { onClick: () => GenUI.openEntityDetail("movie", source.movie_title) }, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "medium"
		}, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, state.movie?.title ?? source.movie_title))), primaryGenre ? /* @__PURE__ */ __dil.jsx("text", { maxLines: 1 }, primaryGenre) : null, state.runtime_label && /* @__PURE__ */ __dil.jsx("text", null, state.runtime_label))), /* @__PURE__ */ __dil.jsx("carousel", {
			flush: true,
			gap: 2,
			showArrows: false
		}, /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx("box", {
			role: "group",
			ariaLabel: state.date_label
		}, /* @__PURE__ */ __dil.jsx("date-picker", {
			value: date,
			min: state.date_from ?? void 0,
			placeholder: state.date_label,
			clearable: false,
			onChange: (next) => next && void selectDate(next),
			size: "lg",
			block: false
		}))), /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: state.time_label,
			value: selectedTime,
			options: (source.time_choices ?? []).filter((choice) => choice.value !== "requested" || !source.selected_time || source.selected_time === "requested"),
			onChange: (next) => void selectDate(date, next),
			size: "lg",
			block: false
		})), /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: state.format_label,
			value: selectedFormat || "all",
			options: [{
				value: "all",
				label: state.all_formats_label ?? ""
			}, ...Array.from(new Set([...selectedFormat ? [selectedFormat] : [], ...availableTheaters.flatMap((theater) => theater.showtimes.map((showtime) => showtime.format)).filter(Boolean)])).map((format) => ({
				value: format,
				label: format
			}))],
			onChange: (next) => setSelectedFormat(next === "all" ? "" : next),
			size: "lg",
			block: false
		}))), /* @__PURE__ */ __dil.jsx("divider", null), options.length > 0 && /* @__PURE__ */ __dil.jsx("box", {
			role: "group",
			ariaLabel: state.theater_label
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			flush: true,
			gap: 2,
			showArrows: false
		}, options.map((option) => /* @__PURE__ */ __dil.jsx("carousel-item", { key: option.value }, /* @__PURE__ */ __dil.jsx("pressable", {
			variant: "ghost",
			radius: "full",
			maxWidth: "100%",
			padding: {
				x: 3,
				y: 2
			},
			background: activeTheater?.value === option.value ? "surface-tertiary" : "transparent",
			ariaPressed: activeTheater?.value === option.value,
			onClick: () => setSelectedTheater(option)
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "primary",
			weight: "medium",
			truncate: true
		}, option.label))))))), pending ? /* @__PURE__ */ __dil.jsx(LoadingShowtimes, {
			title: state.movie_title,
			label: state.loading_label
		}) : failed ? /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.error_message), /* @__PURE__ */ __dil.jsx("button", {
			variant: "outline",
			size: "md",
			onClick: () => void selectDate(date)
		}, state.retry_label)) : theaters.length === 0 ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.empty_message) : null, !pending && !failed && /* @__PURE__ */ __dil.jsx(ShowtimeGroups, {
			theaters,
			format: selectedFormat,
			emptyMessage: state.empty_message
		})));
	}

//#endregion
return MovieShowtimesSidebarWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=movie-showtimes-sidebar-widget-ba2962d146c3.js.map