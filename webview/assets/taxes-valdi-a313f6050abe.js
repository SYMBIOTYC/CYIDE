import{n as e}from"./rolldown-runtime-428824ca0286.js";import{Ant as t,DR as n,Q3 as r,VR as i,ZR as a,_R as o,az as s,cz as c,knt as ee,rz as l,uz as u}from"./app-initial-cf98d1502e32.js";import{Fln as d,Jpn as te,Lln as ne,Run as f,Sdn as p,Wpn as re,Wun as m,_nn as h,vnn as g}from"./app-initial-8fc7fa71dba8.js";import{GNt as ie,KNt as ae,SSn as oe,WNt as _,fCn as v,rCn as se,xSn as y}from"./app-initial-dc3ed2f516f4.js";import{Ls as b,Rs as ce}from"./app-initial-be12a01d8ccc.js";import{n as x,t as S}from"./Device-243b0ec999ee.js";import{n as C,r as w}from"./LocaleResolver-2e438778e5d7.js";import{A as T,J as E,j as D,n as O,q as k,t as le}from"./DILEntryPointComponent-70465a5989f5.js";import{L as ue,M as de,R as fe,c as pe,f as me,j as A,l as j,n as he,t as ge,u as _e}from"./src-3a0a30551f3b.js";import{n as ve,t as ye}from"./preferences-c30e9f3c4c20.js";import{A as be,C as xe,M,N,O as Se,P as Ce,i as we,j as Te,k as P,r as Ee,w as De}from"./res-139a6a466d8c.js";import{c as Oe,o as ke,s as Ae}from"./IconButton-a7cdbe9c73dd.js";import{C as je,S as Me,a as Ne,b as Pe,d as Fe,f as F,l as Ie,m as Le,n as Re,p as I,r as ze,u as Be,w as Ve,y as He}from"./LocalizableStrings-d8538fc22b85.js";import{a as Ue,n as We,o as Ge,t as Ke}from"./api-service-fdcecc8700b8.js";import{a as L,c as qe,d as R,i as Je,l as Ye,n as Xe,o as z,s as B,t as Ze}from"./Strings-b0cf6b52c48d.js";import{n as Qe,t as $e}from"./valdi-locale-953a66bdc716.js";import{n as et,t as tt}from"./conversation-8c09c975a80c.js";var nt;function rt(){return(rt=e((()=>{nt=Object.freeze({OpGenuiResolvedComponentBoundary:`(() => {
var __dilDefaultExport = (function() {


//#region link-children.dil.ts
	function hasLinkChildren(children) {
		if (Array.isArray(children)) return children.some(hasLinkChildren);
		return typeof children === "string" ? children.trim().length > 0 : children != null && typeof children !== "boolean";
	}

//#endregion
//#region shared.dil.ts
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
//#region internal/ResolvedComponentBoundary.dil.tsx
	function ResolvedComponentBoundary({ Component, componentName, componentProps }) {
		const opGenui = DIL.useAppData((appData) => appData.opGenui);
		if (componentProps.__state !== void 0) return /* @__PURE__ */ __dil.jsx(Component, componentProps);
		const result = (typeof componentProps.__resolutionId === "string" ? opGenui?.componentResults?.[componentProps.__resolutionId] : void 0) ?? opGenui?.componentResults?.[componentDataKey(componentName, componentProps)];
		const delegatesFailedResultToComponent = !opGenui?.showFailedComponents && (componentName === "AsyncImage" || componentName === "AsyncImageGroup");
		if (isComponentResultEnvelope(result) && result.status === "failed" && !delegatesFailedResultToComponent && !((componentName === "Link" || componentName === "LinkCard") && typeof componentProps.url === "string" && componentProps.url.length > 0 && (typeof componentProps.title === "string" && componentProps.title.length > 0 || componentName === "Link" && hasLinkChildren(componentProps.children)))) {
			if (componentProps.fallback != null) return componentProps.fallback;
			return opGenui?.showFailedComponents ? /* @__PURE__ */ __dil.jsx("text", {
				color: "danger",
				size: "sm"
			}, \`\${componentName}: \${result.code}\`) : null;
		}
		return /* @__PURE__ */ __dil.jsx(Component, componentProps);
	}

//#endregion
return ResolvedComponentBoundary;
})();
return __dilDefaultExport;
})()`,AsyncImage:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentAsyncImage(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImage",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "AsyncImage",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImage",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImage",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "AsyncImage", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentAsyncImage, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
			imageFrame: true,
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
return AsyncImage;
})();
return __dilDefaultExport;
})()))`,AsyncImageGroup:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentAsyncImageGroup(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImageGroup",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "AsyncImageGroup",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImageGroup",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncImageGroup",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "AsyncImageGroup", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentAsyncImageGroup, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


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
	function productActionWithIndex(action, productIndex) {
		const payload = record(action.payload);
		return {
			...action,
			payload: {
				...payload,
				extraParams: {
					...record(payload?.extraParams),
					productIndex
				}
			}
		};
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
//#region AsyncImageGroup.dil.tsx
/** Display the complete gallery count on the final visible desktop tile. */
	function ImageCount({ count }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			ariaHidden: true,
			height: "100%",
			justify: "end",
			padding: {
				bottom: 2.5,
				right: 2.5
			},
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			background: "rgba(0, 0, 0, 0.4)",
			gap: .5,
			padding: {
				bottom: 1,
				left: 1.5,
				right: 2,
				top: 1
			},
			radius: "full",
			width: "fit-content"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "white",
			name: "images",
			size: "xs"
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "white",
			inline: true,
			size: "xs",
			weight: "semibold"
		}, count)));
	}
	const PLACEHOLDER_INDEXES = [
		0,
		1,
		2
	];
	function ImageFailure() {
		return /* @__PURE__ */ __dil.jsx("box", {
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
	}
	function ImageFallbackFrame({ aspectRatio, children, itemHeight, itemWidth }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			imageObservation: "unavailable",
			aspectRatio: aspectRatio ?? "5:4",
			clip: true,
			height: itemHeight,
			minWidth: itemWidth,
			radius: "xl",
			width: itemWidth
		}, children);
	}
	/** Keep one loading surface mounted while its resolved image source arrives. */
	function GroupImageTile({ componentKey, aspectRatio, failed = false, fallback, flex, height, image, images, index, isLoading, minWidth, radius, showCount = false, width }) {
		const dispatchImageAction = useDispatchImageAction();
		const canShopImage = DIL.useAppData(imageShoppingAvailable);
		const isProduct = image?.refs?.some((ref) => ref.ref_type === "product");
		const product = productAnalyticsFromAction(image?.default_on_click_action, index);
		return /* @__PURE__ */ __dil.jsx("box", {
			...product ? productShownProps(product, !isLoading && !failed && hasImageSource(image)) : {},
			imageObservation: failed ? "unavailable" : "active",
			aspectRatio,
			background: "surface-tertiary",
			clip: true,
			flex,
			height,
			minWidth,
			radius,
			width
		}, failed ? /* @__PURE__ */ __dil.jsx(ImageFailure, null) : /* @__PURE__ */ __dil.jsx("search-image", {
			alt: image?.title ?? "",
			aspectRatio,
			background: isProduct ? "#f3f3f3" : void 0,
			bitmapBlendMode: isProduct ? "darken" : void 0,
			containOutsideAspectRatio: isProduct ? {
				min: .6,
				max: 1.8
			} : void 0,
			fallback,
			fit: "cover",
			frame: true,
			height: "100%",
			hideOnFailure: true,
			hoverZoom: true,
			minHeight: isProduct ? 0 : void 0,
			position: isProduct ? "center" : void 0,
			radius,
			saveTarget: image,
			searchImage: image,
			secondaryAction: imageShoppingAction(image, "AsyncImageGroup", componentKey, canShopImage),
			width: "100%"
		}, image ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: image.title ? \`Open \${image.title}\` : "Open image",
			background: "transparent",
			height: "100%",
			onClick: () => image.default_on_click_action?.type === "open_entity_detail" ? dispatchImageAction(product ? productActionWithIndex(image.default_on_click_action, index) : image.default_on_click_action) : GenUI.openImageLightbox(images, index),
			radius: "none",
			width: "100%"
		}, showCount ? /* @__PURE__ */ __dil.jsx(ImageCount, { count: images.length }) : null) : null));
	}
	function ImageGroupGrid({ children, columns, isLoading = false }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			flexInRow: true,
			maxWidth: 768,
			minWidth: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: isLoading ? "Loading images" : void 0,
			maxWidth: "100%",
			minWidth: 0,
			role: isLoading ? "status" : void 0,
			width: 768
		}, /* @__PURE__ */ __dil.jsx("grid", {
			animateHeight: true,
			columns,
			gap: 2
		}, children)));
	}
	/** Render the responsive image strip, preserving loading and fallback states. */
	function AsyncImageGroup(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("AsyncImageGroup", props);
		const isSm = DIL.useBreakpoint("sm");
		const layout = state?.layout ?? props.layout ?? "carousel";
		const images = (state?.images ?? []).filter(hasImageSource);
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const failed = !isLoading && images.length === 0;
		const aspectRatio = state?.aspect_ratio ?? props.aspectRatio ?? "5:4";
		const defaultCarouselHeight = props.size === "lg" ? 220 : 140;
		const itemHeight = state?.item_height ?? (layout === "carousel" ? \`\${defaultCarouselHeight}px\` : void 0);
		const [aspectWidth, aspectHeight = 1] = aspectRatio.split(/[/:]/).map(Number);
		const itemWidth = state?.item_width ?? (layout === "carousel" ? \`\${defaultCarouselHeight * aspectWidth / aspectHeight}px\` : void 0);
		if (failed && props.fallback && layout !== "carousel") return /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
			aspectRatio,
			itemHeight,
			itemWidth
		}, props.fallback);
		const fallbackElement = props.fallback ?? /* @__PURE__ */ __dil.jsx(ImageFailure, null);
		const gridColumns = layout === "bento-four" ? 2 : layout === "bento-six" ? 3 : 0;
		if (gridColumns) return /* @__PURE__ */ __dil.jsx("col", {
			ariaLabel: isLoading ? "Loading images" : void 0,
			aspectRatio: "16:9",
			clip: true,
			flexInRow: true,
			gap: .5,
			maxWidth: 768,
			minHeight: 0,
			minWidth: 0,
			radius: "2xl",
			role: isLoading ? "status" : void 0,
			width: "100%"
		}, [0, 1].map((row) => /* @__PURE__ */ __dil.jsx("row", {
			key: row,
			flex: 1,
			gap: .5,
			minHeight: 0,
			width: "100%"
		}, (gridColumns === 2 ? [0, 1] : [
			0,
			1,
			2
		]).map((column) => {
			const index = row * gridColumns + column;
			return /* @__PURE__ */ __dil.jsx(GroupImageTile, {
				componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
				failed,
				fallback: fallbackElement,
				flex: 1,
				height: "100%",
				image: images[index],
				images,
				index,
				isLoading,
				key: index,
				minWidth: 0,
				radius: "none",
				showCount: index === gridColumns * 2 - 1,
				width: "100%"
			});
		}))));
		if (layout === "bento" && (isLoading || failed || images.length >= 3)) {
			const bento = /* @__PURE__ */ __dil.jsx("row", {
				ariaLabel: isLoading ? "Loading images" : void 0,
				aspectRatio: "363 / 200",
				flexInRow: true,
				gap: .5,
				maxWidth: 768,
				minHeight: 0,
				minWidth: 0,
				role: isLoading ? "status" : void 0,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx(GroupImageTile, {
				componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
				failed,
				fallback: fallbackElement,
				flex: 1,
				height: "100%",
				image: images[0],
				images,
				index: 0,
				isLoading,
				radius: {
					bottomLeft: "2xl",
					topLeft: "2xl"
				},
				width: "100%"
			}), /* @__PURE__ */ __dil.jsx("col", {
				gap: .5,
				width: "40%"
			}, [1, 2].map((index) => /* @__PURE__ */ __dil.jsx(GroupImageTile, {
				componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
				failed,
				fallback: fallbackElement,
				flex: 1,
				height: "100%",
				image: images[index],
				images,
				index,
				isLoading,
				key: \`async-image-group-tile:\${index}\`,
				radius: index === 1 ? { topRight: "2xl" } : { bottomRight: "2xl" },
				showCount: index === 2 && images.length > 3,
				width: "100%"
			}))));
			if (!isSm) return bento;
			return /* @__PURE__ */ __dil.jsx(ImageGroupGrid, { columns: 3 }, /* @__PURE__ */ __dil.jsx("grid-item", { span: 3 }, bento));
		}
		const isResolvedSparseCarousel = layout === "carousel" && !isLoading && images.length > 0 && images.length <= 2;
		if (isSm && (layout === "carousel" || layout === "bento") || isResolvedSparseCarousel) {
			const indexes = isLoading || failed ? PLACEHOLDER_INDEXES : images.slice(0, 3).map((_, index) => index);
			const tileAspectRatio = isSm && indexes.length === 1 && aspectWidth / aspectHeight <= 16 / 9 ? "16:9" : aspectRatio;
			return /* @__PURE__ */ __dil.jsx(ImageGroupGrid, {
				columns: indexes.length,
				isLoading
			}, failed && props.fallback ? /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
				aspectRatio,
				itemWidth: "100%"
			}, props.fallback) : indexes.map((index) => /* @__PURE__ */ __dil.jsx(GroupImageTile, {
				componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
				aspectRatio: tileAspectRatio,
				failed,
				fallback: fallbackElement,
				image: images[index],
				images,
				index,
				isLoading,
				key: \`async-image-group-tile:\${index}\`,
				minWidth: 0,
				radius: "xl",
				showCount: index === 2 && images.length > 3,
				width: "100%"
			})));
		}
		const scrollImages = failed && props.fallback ? [void 0] : isLoading || failed ? PLACEHOLDER_INDEXES.map(() => void 0) : images;
		return /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: isLoading ? "Loading images" : void 0,
			flexInRow: true,
			role: isLoading ? "status" : void 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("carousel", {
			flush: true,
			gap: 2,
			showArrows: false,
			snap: "none"
		}, scrollImages.map((image, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			height: itemHeight,
			key: \`async-image-group-tile:\${index}\`,
			minWidth: itemWidth,
			width: itemWidth ?? (isLoading || failed ? 140 : void 0)
		}, failed && props.fallback ? /* @__PURE__ */ __dil.jsx(ImageFallbackFrame, {
			aspectRatio,
			itemHeight,
			itemWidth
		}, props.fallback) : /* @__PURE__ */ __dil.jsx(GroupImageTile, {
			componentKey: props.__resolutionId ?? componentDataKey("AsyncImageGroup", props),
			aspectRatio,
			failed,
			fallback: fallbackElement,
			height: itemHeight,
			image,
			images,
			index,
			isLoading,
			radius: "xl",
			width: "100%"
		})))));
	}

//#endregion
return AsyncImageGroup;
})();
return __dilDefaultExport;
})()))`,AsyncVideo:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentAsyncVideo(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncVideo",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "AsyncVideo",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncVideo",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AsyncVideo",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "AsyncVideo", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentAsyncVideo, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region AsyncVideo.dil.tsx
	function AsyncVideo(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("AsyncVideo", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading video" });
		const video = state.video;
		if (!video) return null;
		return /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			clip: true,
			maxWidth: "100%",
			radius: "3xl",
			width: "640px"
		}, /* @__PURE__ */ __dil.jsx("youtube", {
			aspectRatio: "16 / 9",
			maxWidth: "100%",
			title: video.title,
			videoId: video.video_id,
			width: "100%"
		}));
	}

//#endregion
return AsyncVideo;
})();
return __dilDefaultExport;
})()))`,AutomationPlanSummary:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentAutomationPlanSummary(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "AutomationPlanSummary",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "AutomationPlanSummary",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AutomationPlanSummary",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "AutomationPlanSummary",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "AutomationPlanSummary", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentAutomationPlanSummary, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region automations/plan/AutomationPlanRow.dil.tsx
	function AutomationPlanRow({ step, isLast, statusLabel, layout, detailed = false }) {
		const isLibrary = layout === "library";
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: isLibrary ? 4 : 1,
			align: isLibrary ? "center" : "stretch",
			minHeight: isLibrary ? 56 : isLast ? 20 : 50,
			role: "listitem"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: isLibrary ? 24 : 28,
			flex: "0 0 auto",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			height: 26,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			role: "img",
			ariaLabel: statusLabel
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: step.status === "completed" ? "check-circle-filled" : step.status === "in_progress" ? "spinner" : "empty-circle",
			size: "xl",
			color: step.status === "pending" ? {
				light: "gray-300",
				dark: "gray-600"
			} : step.status === "in_progress" ? "secondary" : "tertiary"
		})), !isLibrary && !isLast && /* @__PURE__ */ __dil.jsx("box", {
			width: 1,
			flex: 1,
			background: {
				light: "#ededed",
				dark: "alpha-10"
			},
			ariaHidden: true
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			flex: 1,
			minWidth: 0,
			padding: { bottom: isLibrary || isLast ? 0 : 2 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			truncate: isLibrary,
			color: step.status === "completed" ? "tertiary" : "primary"
		}, step.title), detailed && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, step.description && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, step.description), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, statusLabel))));
	}

//#endregion
//#region automations/plan/AutomationPlanSummary.dil.tsx
	const SvgPath = "path";
	function AutomationPlanSummary$1({ state, collapsed: savedCollapsed, setCollapsed }) {
		const isMobile = DIL.useIsMobile();
		const canOpenGoalSheet = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("open_automation_goal") === true) && !!state.automation_id && (state.plan_type === "other" || state.plan_type === "learning" || state.plan_type === "language_learning" || state.plan_type === "health_fitness");
		const supportsGoalCard = DIL.useAppData((data) => data.opGenui?.supportsAutomationGoalCard === true);
		const canToggle = !!state.show_plan_label && !!state.hide_plan_label;
		const collapsed = savedCollapsed && canToggle;
		if (state.layout === "library") return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			padding: 8,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: { bottom: 6 }
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("title", { size: "md" }, state.title)), /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", { padding: { y: 5 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: { top: 4 },
			role: "list"
		}, state.steps.map((step, index, allSteps) => /* @__PURE__ */ __dil.jsx(AutomationPlanRow, {
			key: step.id,
			step,
			isLast: index === allSteps.length - 1,
			statusLabel: state.status_labels[step.status],
			layout: "library"
		}))));
		if (supportsGoalCard) return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("automation-goal-card", {
			libraryFileId: state.library_file_id,
			title: state.title
		}));
		if (isMobile && canOpenGoalSheet) return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "start",
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "max-content",
			maxWidth: "100%",
			padding: {
				x: 4,
				y: 3
			},
			background: "surface-elevated",
			border: true,
			radius: "full",
			ariaLabel: state.show_plan_label,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_automation_goal",
				payload: { automation_id: state.automation_id }
			})
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "blue"
		}, state.goal_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			color: "tertiary"
		}, "·"), /* @__PURE__ */ __dil.jsx("box", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			truncate: true
		}, state.title)))));
		const header = /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center",
			gap: 2.5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 40,
			flex: "0 0 auto",
			align: "center",
			justify: "center",
			radius: "lg",
			background: state.emoji ? void 0 : "surface-secondary",
			ariaHidden: true
		}, state.emoji ? /* @__PURE__ */ __dil.jsx("text", { size: "xl" }, state.emoji) : /* @__PURE__ */ __dil.jsx("svg", {
			size: 24,
			viewBox: "0 0 24 24",
			color: "secondary"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M12 0.999607C12.5523 0.999607 13 1.44732 13 1.99961C13 2.55189 12.5523 2.99961 12 2.99961C7.02944 2.99961 3 7.02904 3 11.9996C3 16.9702 7.02944 20.9996 12 20.9996C16.9706 20.9996 21 16.9702 21 11.9996C21 11.4473 21.4477 10.9996 22 10.9996C22.5523 10.9996 23 11.4473 23 11.9996C23 18.0747 18.0751 22.9996 12 22.9996C5.92487 22.9996 1 18.0747 1 11.9996C1 5.92447 5.92487 0.999607 12 0.999607Z",
			fill: "currentColor"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M10.3291 5.69199C10.8595 5.53877 11.4139 5.84526 11.5674 6.37558C11.7206 6.90606 11.4152 7.4605 10.8848 7.61386C9.02739 8.15037 7.67027 9.86422 7.66992 11.8922C7.66992 14.3515 9.66371 16.3452 12.123 16.3453C14.1186 16.3453 15.8099 15.0322 16.375 13.2203C16.5395 12.6934 17.1009 12.3989 17.6279 12.5631C18.1548 12.7275 18.4481 13.2881 18.2842 13.815C17.4661 16.4388 15.0187 18.3453 12.123 18.3453C8.55914 18.3452 5.66992 15.4561 5.66992 11.8922C5.67027 8.94977 7.63902 6.46913 10.3291 5.69199Z",
			fill: "currentColor"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M16.9863 1.18808C17.7778 0.3966 19.1316 0.964354 19.1211 2.08359L19.0938 4.87949L21.8896 4.85312C23.0089 4.84226 23.5772 6.19526 22.7861 6.98691L19.4707 10.3023C19.1895 10.5833 18.8076 10.7417 18.4102 10.7418H14.6338L12.707 12.6695C12.3166 13.0598 11.6834 13.0598 11.293 12.6695C10.9025 12.2791 10.9026 11.646 11.293 11.2555L13.2324 9.31601V5.56406C13.2324 5.16638 13.3908 4.78381 13.6719 4.50254L16.9863 1.18808ZM15.2324 5.77109V8.74179H18.2021L20.0732 6.8707L17.0752 6.9L17.1035 3.89902L15.2324 5.77109Z",
			fill: "currentColor",
			fillRule: "evenodd"
		}))), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "medium",
			lineHeight: 24,
			truncate: true
		}, state.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true
		}, state.goal_label)));
		const openGoalSheet = canOpenGoalSheet;
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: 3 }
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "full",
			radius: "2xl",
			padding: 0,
			gap: 0
		}, openGoalSheet ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 3,
			radius: "2xl",
			focusStyle: "inset",
			variant: "ghost",
			ariaLabel: state.show_plan_label,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_automation_goal",
				payload: { automation_id: state.automation_id }
			})
		}, header) : canToggle ? /* @__PURE__ */ __dil.jsx("pressable", {
			width: "100%",
			padding: 3,
			radius: {
				topLeft: "2xl",
				topRight: "2xl"
			},
			focusStyle: "inset",
			variant: collapsed ? "ghost" : void 0,
			ariaLabel: collapsed ? state.show_plan_label : state.hide_plan_label,
			ariaPressed: !collapsed,
			onClick: () => setCollapsed(!collapsed)
		}, header) : /* @__PURE__ */ __dil.jsx("box", { padding: 3 }, header), /* @__PURE__ */ __dil.jsx("animate", {
			dimension: "height",
			itemAnchor: "start",
			preventInitialTransition: true,
			hideOverflow: true,
			initial: { opacity: 1 },
			enter: {
				opacity: 1,
				duration: 200,
				timingFunction: "ease"
			},
			exit: {
				opacity: 1,
				duration: 160,
				timingFunction: "ease"
			},
			layoutEnter: {
				duration: 200,
				timingFunction: "ease"
			},
			layoutExit: {
				duration: 160,
				timingFunction: "ease"
			},
			layoutMove: {
				duration: 200,
				timingFunction: "ease"
			}
		}, !openGoalSheet && !collapsed ? /* @__PURE__ */ __dil.jsx("col", {
			key: "plan-details",
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("divider", {
			color: "subtle",
			spacing: 0
		}), state.steps == null ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: {
				top: 4,
				x: 4,
				bottom: 6
			}
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, state.summary_error_label)) : /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			padding: {
				top: 4,
				x: 4,
				bottom: 6
			},
			role: "list"
		}, state.steps.map((step, index, allSteps) => /* @__PURE__ */ __dil.jsx(AutomationPlanRow, {
			key: step.id,
			step,
			isLast: index === allSteps.length - 1,
			statusLabel: state.status_labels[step.status],
			detailed: true
		})))) : null)));
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
//#region AutomationPlanSummary.dil.tsx
	function AutomationPlanSummary(props) {
		const [, requestRender] = DIL.useState(false);
		const [collapsed, setCollapsed] = DIL.useState(true);
		const completedExpanded = DIL.useRef(false);
		const { state, resolutionComplete } = useResolvedComponentResult("AutomationPlanSummary", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0,
			padding: { top: props.automation_id ? 3 : 0 }
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 240
		}));
		return /* @__PURE__ */ __dil.jsx(AutomationPlanSummary$1, {
			state,
			collapsed,
			setCollapsed,
			completedExpanded: completedExpanded.current,
			setCompletedExpanded: (expanded) => {
				completedExpanded.current = expanded;
				requestRender((previous) => previous !== true);
			}
		});
	}

//#endregion
return AutomationPlanSummary;
})();
return __dilDefaultExport;
})()))`,Citation:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentCitation(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "Citation",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "Citation",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Citation",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Citation",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "Citation", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentCitation, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region internal/citation-pill.dil.tsx
	function CitationPill({ count, interactive, label, url }) {
		const supportsCitationPill = DIL.useAppData((data) => data.nativeComponentNames?.includes("citation-pill") === true);
		const [hovered, setHovered] = DIL.useState(false);
		const color = interactive && hovered ? {
			light: "#e8e8e8",
			dark: "gray-300"
		} : {
			light: "gray-75",
			dark: "gray-400"
		};
		const onHover = interactive ? setHovered : void 0;
		if (supportsCitationPill) return /* @__PURE__ */ __dil.jsx("citation-pill", {
			color,
			count,
			label,
			onHover,
			url
		});
		return /* @__PURE__ */ __dil.jsx("badge", {
			color,
			maxWidth: 100,
			onHover,
			padding: {
				left: 1,
				right: 1.5,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, url ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 12,
			url
		})) : null, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flex: "0 1 auto",
			gap: .75,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			inline: true,
			maxLines: 1,
			size: "3xs",
			truncate: true
		}, label)), count > 1 ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			inline: true,
			size: "3xs"
		}, "+", count - 1)) : null));
	}

//#endregion
//#region Cite.dil.tsx
	function openCitation(item, linkAffordance, linkIndex) {
		if (item.file_action_payload) {
			GenUI.dispatchAction({
				handler: "client",
				type: "open_file_citation",
				payload: item.file_action_payload
			});
			return;
		}
		if (!item.url) return;
		GenUI.dispatchAction({
			handler: "client",
			type: "open_url",
			payload: {
				url: item.url,
				link_type: "search_citation",
				link_affordance: linkAffordance,
				...linkIndex == null ? {} : { link_index: linkIndex }
			}
		});
	}
	function clampedIndex(index, itemCount) {
		if (typeof index === "number" && Number.isInteger(index) && index >= 0 && index < itemCount) return index;
		return 0;
	}
	function ResolvedCite({ activeIndex: serverActiveIndex, items }) {
		const citationNumbersByUrl = DIL.useAppData((data) => data.opGenui?.citationNumbersByUrl);
		const supportedClientActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const canLogImpressions = supportedClientActions?.includes("genui_link_impressions") === true;
		const linkMetadataEnabled = supportedClientActions?.includes("genui_link_metadata") === true;
		const shownUrls = DIL.useRef([]);
		const recordShown = (url$1, linkAffordance) => {
			if (!canLogImpressions || !url$1 || shownUrls.current.includes(url$1)) return;
			shownUrls.current = [...shownUrls.current, url$1];
			GenUI.dispatchAction({
				handler: "client",
				type: "log_event",
				payload: {
					event_name: "genui_link_shown",
					event_data: {
						url: url$1,
						link_type: "search_citation",
						link_affordance: linkAffordance
					}
				}
			});
		};
		const initialActiveIndex = clampedIndex(serverActiveIndex, items.length);
		const [activeIndex, setActiveIndex] = DIL.useState(initialActiveIndex);
		const isSm = DIL.useBreakpoint("sm");
		const isMobile = DIL.useIsMobile();
		DIL.useEffect(() => {
			setActiveIndex(initialActiveIndex);
		}, [serverActiveIndex, items.length]);
		const safeActiveIndex = clampedIndex(activeIndex, items.length);
		const activeItem = items[safeActiveIndex];
		const url = activeItem.url ?? "";
		const hasUrl = url !== "";
		const canOpen = hasUrl || Boolean(activeItem.file_action_payload);
		const hasDetails = [
			activeItem.title,
			getCitationMetadata(activeItem),
			activeItem.snippet,
			activeItem.thumbnail_url
		].some(Boolean);
		const showPopover = items.length > 1 || items.some((item) => typeof citationNumbersByUrl?.[item.url?.trim() ?? ""] === "number") || (!isMobile || !hasUrl) && hasDetails;
		const isInteractive = showPopover || canOpen;
		const sourceLabel = activeItem.source_label ?? activeItem.title ?? "Source";
		const badgeContent = /* @__PURE__ */ __dil.jsx(CitationPill, {
			count: items.length,
			interactive: isInteractive,
			label: sourceLabel,
			url
		});
		const badge = canLogImpressions && hasUrl ? /* @__PURE__ */ __dil.jsx("box", {
			inline: true,
			key: url,
			onVisible: () => recordShown(url, "pill")
		}, badgeContent) : badgeContent;
		if (!showPopover) return canOpen ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${sourceLabel}\`,
			inline: true,
			onClick: () => openCitation(activeItem, "pill", linkMetadataEnabled ? safeActiveIndex : void 0)
		}, badge) : badge;
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 80,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => !isMobile && isSm && canOpen ? openCitation(activeItem, "pill", linkMetadataEnabled ? safeActiveIndex : void 0) : void 0 }, badge), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			showCloseButton: isMobile ? false : void 0,
			side: "bottom",
			sideOffset: 8
		}, isMobile ? /* @__PURE__ */ __dil.jsx(MobileCitationSources, {
			citationNumbersByUrl,
			items,
			recordShown,
			linkMetadataEnabled
		}) : /* @__PURE__ */ __dil.jsx(DesktopCitationSources, {
			citationNumbersByUrl,
			items,
			recordShown,
			linkMetadataEnabled
		})));
	}
	function getCitationMetadata(item) {
		const authors = item.authors?.map((author) => author.trim()).filter(Boolean);
		const authorLabel = authors == null || authors.length === 0 ? void 0 : authors.length === 1 ? authors[0] : authors.length === 2 ? authors.join(" & ") : \`\${authors[0]}, et al.\`;
		return [
			item.source_name?.trim(),
			item.metadata_label,
			authorLabel
		].filter(Boolean).join(" · ");
	}
	function getCitationDetail(item) {
		return [getCitationMetadata(item), item.snippet].filter(Boolean).join(" — ");
	}
	function DesktopCitationSources({ citationNumbersByUrl, items, recordShown, linkMetadataEnabled }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			maxHeight: 320,
			maxWidth: "100%",
			padding: {
				bottom: 2,
				top: 2,
				x: 5
			},
			scrollable: true,
			width: 384
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const itemDetail = getCitationDetail(item);
			const citationNumber = citationNumbersByUrl?.[itemUrl.trim()];
			const source = /* @__PURE__ */ __dil.jsx("box", {
				border: index === 0 ? void 0 : { top: {
					color: "default",
					size: 1
				} },
				gap: 1.5,
				onVisible: itemUrl ? () => recordShown(itemUrl) : void 0,
				onVisibleKey: itemUrl,
				padding: { y: 3 },
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, typeof citationNumber === "number" ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, citationNumber, ".") : null, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				maxLines: 1,
				size: "xs",
				truncate: true
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 2,
				size: "sm",
				weight: "medium"
			}, itemTitle) : null, itemDetail || item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				gap: 4,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0
			}, itemDetail ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				maxLines: 3,
				size: "sm"
			}, itemDetail) : null), item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
				alt: "",
				fit: "cover",
				height: 56,
				hideOnFailure: true,
				radius: "xl",
				src: item.thumbnail_url,
				width: 56
			}) : null) : null);
			return itemUrl || item.file_action_payload ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				key: \`\${itemUrl}:\${index}\`,
				onClick: () => openCitation(item, linkMetadataEnabled ? "button" : void 0, linkMetadataEnabled ? index : void 0),
				width: "100%"
			}, source) : /* @__PURE__ */ __dil.jsx("col", {
				key: \`source:\${index}\`,
				width: "100%"
			}, source);
		}));
	}
	function MobileCitationSources({ citationNumbersByUrl, items, recordShown, linkMetadataEnabled }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			maxHeight: 560,
			scrollable: true,
			width: "100%"
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const metadata = getCitationMetadata(item);
			const citationNumber = citationNumbersByUrl?.[itemUrl.trim()];
			const source = /* @__PURE__ */ __dil.jsx("box", {
				gap: 1,
				onVisible: itemUrl ? () => recordShown(itemUrl) : void 0,
				onVisibleKey: itemUrl,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, typeof citationNumber === "number" ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, citationNumber, ".") : null, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold"
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, itemTitle) : null, metadata ? /* @__PURE__ */ __dil.jsx("caption", null, metadata) : null);
			return /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				key: \`\${itemUrl}:\${index}\`,
				width: "100%"
			}, index > 0 ? /* @__PURE__ */ __dil.jsx("divider", { color: "subtle" }) : null, itemUrl || item.file_action_payload ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				onClick: () => openCitation(item, linkMetadataEnabled ? "button" : void 0, linkMetadataEnabled ? index : void 0),
				width: "100%"
			}, source) : source);
		}));
	}
	function Cite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Cite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("loading", { label: "Loading citations" }));
		const items = state.items ?? [];
		if (!items.length) return null;
		return /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx(ResolvedCite, {
			activeIndex: state.active_index,
			items
		}));
	}

//#endregion
//#region Citation.dil.tsx
	function Citation(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Citation", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("loading", { label: "Loading citation" }));
		return /* @__PURE__ */ __dil.jsx(Cite, {
			...props,
			__state: state
		});
	}

//#endregion
return Citation;
})();
return __dilDefaultExport;
})()))`,Cite:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentCite(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "Cite",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "Cite",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Cite",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Cite",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "Cite", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentCite, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region internal/citation-pill.dil.tsx
	function CitationPill({ count, interactive, label, url }) {
		const supportsCitationPill = DIL.useAppData((data) => data.nativeComponentNames?.includes("citation-pill") === true);
		const [hovered, setHovered] = DIL.useState(false);
		const color = interactive && hovered ? {
			light: "#e8e8e8",
			dark: "gray-300"
		} : {
			light: "gray-75",
			dark: "gray-400"
		};
		const onHover = interactive ? setHovered : void 0;
		if (supportsCitationPill) return /* @__PURE__ */ __dil.jsx("citation-pill", {
			color,
			count,
			label,
			onHover,
			url
		});
		return /* @__PURE__ */ __dil.jsx("badge", {
			color,
			maxWidth: 100,
			onHover,
			padding: {
				left: 1,
				right: 1.5,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, url ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 12,
			url
		})) : null, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			flex: "0 1 auto",
			gap: .75,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			flex: "0 1 auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			inline: true,
			maxLines: 1,
			size: "3xs",
			truncate: true
		}, label)), count > 1 ? /* @__PURE__ */ __dil.jsx("row", { flex: "none" }, /* @__PURE__ */ __dil.jsx("text", {
			color: "tertiary",
			inline: true,
			size: "3xs"
		}, "+", count - 1)) : null));
	}

//#endregion
//#region Cite.dil.tsx
	function openCitation(item, linkAffordance, linkIndex) {
		if (item.file_action_payload) {
			GenUI.dispatchAction({
				handler: "client",
				type: "open_file_citation",
				payload: item.file_action_payload
			});
			return;
		}
		if (!item.url) return;
		GenUI.dispatchAction({
			handler: "client",
			type: "open_url",
			payload: {
				url: item.url,
				link_type: "search_citation",
				link_affordance: linkAffordance,
				...linkIndex == null ? {} : { link_index: linkIndex }
			}
		});
	}
	function clampedIndex(index, itemCount) {
		if (typeof index === "number" && Number.isInteger(index) && index >= 0 && index < itemCount) return index;
		return 0;
	}
	function ResolvedCite({ activeIndex: serverActiveIndex, items }) {
		const citationNumbersByUrl = DIL.useAppData((data) => data.opGenui?.citationNumbersByUrl);
		const supportedClientActions = DIL.useAppData((data) => data.opGenui?.supportedClientActions);
		const canLogImpressions = supportedClientActions?.includes("genui_link_impressions") === true;
		const linkMetadataEnabled = supportedClientActions?.includes("genui_link_metadata") === true;
		const shownUrls = DIL.useRef([]);
		const recordShown = (url$1, linkAffordance) => {
			if (!canLogImpressions || !url$1 || shownUrls.current.includes(url$1)) return;
			shownUrls.current = [...shownUrls.current, url$1];
			GenUI.dispatchAction({
				handler: "client",
				type: "log_event",
				payload: {
					event_name: "genui_link_shown",
					event_data: {
						url: url$1,
						link_type: "search_citation",
						link_affordance: linkAffordance
					}
				}
			});
		};
		const initialActiveIndex = clampedIndex(serverActiveIndex, items.length);
		const [activeIndex, setActiveIndex] = DIL.useState(initialActiveIndex);
		const isSm = DIL.useBreakpoint("sm");
		const isMobile = DIL.useIsMobile();
		DIL.useEffect(() => {
			setActiveIndex(initialActiveIndex);
		}, [serverActiveIndex, items.length]);
		const safeActiveIndex = clampedIndex(activeIndex, items.length);
		const activeItem = items[safeActiveIndex];
		const url = activeItem.url ?? "";
		const hasUrl = url !== "";
		const canOpen = hasUrl || Boolean(activeItem.file_action_payload);
		const hasDetails = [
			activeItem.title,
			getCitationMetadata(activeItem),
			activeItem.snippet,
			activeItem.thumbnail_url
		].some(Boolean);
		const showPopover = items.length > 1 || items.some((item) => typeof citationNumbersByUrl?.[item.url?.trim() ?? ""] === "number") || (!isMobile || !hasUrl) && hasDetails;
		const isInteractive = showPopover || canOpen;
		const sourceLabel = activeItem.source_label ?? activeItem.title ?? "Source";
		const badgeContent = /* @__PURE__ */ __dil.jsx(CitationPill, {
			count: items.length,
			interactive: isInteractive,
			label: sourceLabel,
			url
		});
		const badge = canLogImpressions && hasUrl ? /* @__PURE__ */ __dil.jsx("box", {
			inline: true,
			key: url,
			onVisible: () => recordShown(url, "pill")
		}, badgeContent) : badgeContent;
		if (!showPopover) return canOpen ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${sourceLabel}\`,
			inline: true,
			onClick: () => openCitation(activeItem, "pill", linkMetadataEnabled ? safeActiveIndex : void 0)
		}, badge) : badge;
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 80,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => !isMobile && isSm && canOpen ? openCitation(activeItem, "pill", linkMetadataEnabled ? safeActiveIndex : void 0) : void 0 }, badge), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			showCloseButton: isMobile ? false : void 0,
			side: "bottom",
			sideOffset: 8
		}, isMobile ? /* @__PURE__ */ __dil.jsx(MobileCitationSources, {
			citationNumbersByUrl,
			items,
			recordShown,
			linkMetadataEnabled
		}) : /* @__PURE__ */ __dil.jsx(DesktopCitationSources, {
			citationNumbersByUrl,
			items,
			recordShown,
			linkMetadataEnabled
		})));
	}
	function getCitationMetadata(item) {
		const authors = item.authors?.map((author) => author.trim()).filter(Boolean);
		const authorLabel = authors == null || authors.length === 0 ? void 0 : authors.length === 1 ? authors[0] : authors.length === 2 ? authors.join(" & ") : \`\${authors[0]}, et al.\`;
		return [
			item.source_name?.trim(),
			item.metadata_label,
			authorLabel
		].filter(Boolean).join(" · ");
	}
	function getCitationDetail(item) {
		return [getCitationMetadata(item), item.snippet].filter(Boolean).join(" — ");
	}
	function DesktopCitationSources({ citationNumbersByUrl, items, recordShown, linkMetadataEnabled }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			maxHeight: 320,
			maxWidth: "100%",
			padding: {
				bottom: 2,
				top: 2,
				x: 5
			},
			scrollable: true,
			width: 384
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const itemDetail = getCitationDetail(item);
			const citationNumber = citationNumbersByUrl?.[itemUrl.trim()];
			const source = /* @__PURE__ */ __dil.jsx("box", {
				border: index === 0 ? void 0 : { top: {
					color: "default",
					size: 1
				} },
				gap: 1.5,
				onVisible: itemUrl ? () => recordShown(itemUrl) : void 0,
				onVisibleKey: itemUrl,
				padding: { y: 3 },
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, typeof citationNumber === "number" ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, citationNumber, ".") : null, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				maxLines: 1,
				size: "xs",
				truncate: true
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 2,
				size: "sm",
				weight: "medium"
			}, itemTitle) : null, itemDetail || item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				gap: 4,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				minWidth: 0
			}, itemDetail ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				maxLines: 3,
				size: "sm"
			}, itemDetail) : null), item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
				alt: "",
				fit: "cover",
				height: 56,
				hideOnFailure: true,
				radius: "xl",
				src: item.thumbnail_url,
				width: 56
			}) : null) : null);
			return itemUrl || item.file_action_payload ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				key: \`\${itemUrl}:\${index}\`,
				onClick: () => openCitation(item, linkMetadataEnabled ? "button" : void 0, linkMetadataEnabled ? index : void 0),
				width: "100%"
			}, source) : /* @__PURE__ */ __dil.jsx("col", {
				key: \`source:\${index}\`,
				width: "100%"
			}, source);
		}));
	}
	function MobileCitationSources({ citationNumbersByUrl, items, recordShown, linkMetadataEnabled }) {
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			maxHeight: 560,
			scrollable: true,
			width: "100%"
		}, items.map((item, index) => {
			const itemUrl = item.url ?? "";
			const itemSourceLabel = item.source_label ?? item.title ?? "Source";
			const itemTitle = item.title ?? "";
			const metadata = getCitationMetadata(item);
			const citationNumber = citationNumbersByUrl?.[itemUrl.trim()];
			const source = /* @__PURE__ */ __dil.jsx("box", {
				gap: 1,
				onVisible: itemUrl ? () => recordShown(itemUrl) : void 0,
				onVisibleKey: itemUrl,
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%"
			}, typeof citationNumber === "number" ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, citationNumber, ".") : null, itemUrl ? /* @__PURE__ */ __dil.jsx("favicon", {
				size: 16,
				url: itemUrl
			}) : null, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "semibold"
			}, itemSourceLabel)), itemTitle ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, itemTitle) : null, metadata ? /* @__PURE__ */ __dil.jsx("caption", null, metadata) : null);
			return /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				key: \`\${itemUrl}:\${index}\`,
				width: "100%"
			}, index > 0 ? /* @__PURE__ */ __dil.jsx("divider", { color: "subtle" }) : null, itemUrl || item.file_action_payload ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: \`Open \${itemSourceLabel}\`,
				onClick: () => openCitation(item, linkMetadataEnabled ? "button" : void 0, linkMetadataEnabled ? index : void 0),
				width: "100%"
			}, source) : source);
		}));
	}
	function Cite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Cite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("loading", { label: "Loading citations" }));
		const items = state.items ?? [];
		if (!items.length) return null;
		return /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx(ResolvedCite, {
			activeIndex: state.active_index,
			items
		}));
	}

//#endregion
return Cite;
})();
return __dilDefaultExport;
})()))`,CoTToolGroup:`(() => {
var __dilDefaultExport = (function() {


//#region src/messages.dil.ts
	const fallbackMessages = { moreItems: "+{count} more" };
	function useMessages() {
		const messages = DIL.useAppData((data) => data.messages);
		return {
			...fallbackMessages,
			...messages
		};
	}
	function formatMessage(template, values = {}) {
		return template.replace(/\\{(\\w+)\\}/g, (placeholder, key) => values[key] === void 0 ? placeholder : String(values[key]));
	}

//#endregion
//#region src/SourceCards.dil.tsx
	const OVERFLOW_THRESHOLD = 8;
	const INITIAL_VISIBLE_COUNT = 6;
	function SourceCards({ children, label }) {
		const [expanded, setExpanded] = DIL.useState(false);
		const messages = useMessages();
		const visibleCount = expanded || children.length <= OVERFLOW_THRESHOLD ? children.length : INITIAL_VISIBLE_COUNT;
		return /* @__PURE__ */ __dil.jsx("carousel", {
			ariaLabel: label,
			gap: 2,
			flush: true,
			snap: "none"
		}, [...children.slice(0, visibleCount), visibleCount < children.length && /* @__PURE__ */ __dil.jsx("carousel-item", { key: "overflow" }, /* @__PURE__ */ __dil.jsx("pressable", {
			onClick: () => setExpanded(true),
			height: "100%",
			justify: "center",
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, formatMessage(messages.moreItems, { count: children.length - visibleCount }))))]);
	}

//#endregion
//#region src/CalendarSources.dil.tsx
	function CalendarSources({ sources, label }) {
		return /* @__PURE__ */ __dil.jsx(SourceCards, { label }, sources.map((source, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: \`\${source.url ?? source.title}-\${index}\`,
			maxWidth: 200
		}, source.url ? /* @__PURE__ */ __dil.jsx("link", {
			href: source.url,
			title: source.title
		}, /* @__PURE__ */ __dil.jsx(CalendarCard, { source })) : /* @__PURE__ */ __dil.jsx(CalendarCard, { source }))));
	}
	function CalendarCard({ source }) {
		const [hovered, setHovered] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("box", {
			radius: "lg",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? "var(--color-background-secondary-soft-alpha-hover)" : "secondary",
			variant: "soft",
			pill: false,
			padding: 0,
			onHover: source.url ? setHovered : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "stretch",
			padding: {
				top: 2,
				right: 2,
				bottom: 2,
				left: 1.5
			},
			maxWidth: 200
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 4,
			flex: "none",
			radius: "full",
			background: source.color ?? "info-solid",
			ariaHidden: true
		}), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			padding: { bottom: .5 },
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			weight: "medium",
			truncate: true
		}, source.title), /* @__PURE__ */ __dil.jsx("text", {
			size: "2xs",
			color: "tertiary",
			truncate: true
		}, source.date && source.time ? \`\${source.date} • \${source.time}\` : source.date || source.time)))));
	}

//#endregion
//#region src/EmailSources.dil.tsx
	function EmailSources({ sources, label }) {
		return /* @__PURE__ */ __dil.jsx(SourceCards, { label }, sources.map((source, index) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: \`\${source.url ?? source.subject}-\${index}\`,
			maxWidth: 200
		}, source.url ? /* @__PURE__ */ __dil.jsx("link", {
			href: source.url,
			title: source.subject
		}, /* @__PURE__ */ __dil.jsx(EmailCard, { source })) : /* @__PURE__ */ __dil.jsx(EmailCard, { source }))));
	}
	function EmailCard({ source }) {
		const [hovered, setHovered] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("box", {
			radius: "lg",
			clip: true
		}, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? "var(--color-background-secondary-soft-alpha-hover)" : "secondary",
			variant: "soft",
			pill: false,
			padding: 0,
			onHover: source.url ? setHovered : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			align: "start",
			padding: 2,
			maxWidth: 200
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			height: 20,
			flex: "none",
			ariaHidden: true
		}, source.senderIcon ? /* @__PURE__ */ __dil.jsx("image", {
			src: source.senderIcon,
			alt: "",
			width: 20,
			height: 20,
			radius: "full",
			fit: "cover",
			fallback: /* @__PURE__ */ __dil.jsx(SenderInitial, { sender: source.sender })
		}) : /* @__PURE__ */ __dil.jsx(SenderInitial, { sender: source.sender })), /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			weight: "medium",
			truncate: true
		}, source.subject), /* @__PURE__ */ __dil.jsx("text", {
			size: "2xs",
			color: "tertiary",
			truncate: true
		}, source.date ? \`\${source.date} • \${source.sender}\` : source.sender)))));
	}
	function SenderInitial({ sender }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			height: 20,
			radius: "full",
			background: "discovery-solid",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "2xs",
			color: "white",
			weight: "medium"
		}, sender.slice(0, 1).toUpperCase()));
	}

//#endregion
//#region src/FinanceBlossom.dil.tsx
	const SvgPath = "path";
	function FinanceBlossom() {
		return /* @__PURE__ */ __dil.jsx("svg", {
			size: 16,
			viewBox: "0 0 24 24"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M9.41155 2.33894C11.2042 1.85864 13.0307 2.44256 14.2222 3.70269C15.8845 3.20635 17.7597 3.61471 19.0725 4.92754C20.385 6.24015 20.7928 8.11465 20.2969 9.77679C21.5574 10.9683 22.1415 12.7955 21.6611 14.5885C21.1806 16.3819 19.7606 17.6723 18.0728 18.0736C17.6712 19.761 16.3817 21.1804 14.5887 21.6609C12.7956 22.1414 10.9685 21.5572 9.77697 20.2965C8.11478 20.7925 6.24042 20.385 4.92779 19.0723C3.61532 17.7598 3.20675 15.8854 3.70252 14.2233C2.44216 13.0318 1.8588 11.2043 2.33919 9.41133C2.81965 7.6182 4.23888 6.32714 5.92638 5.92559C6.32811 4.23836 7.61872 2.81934 9.41155 2.33894Z",
			fill: "#8ADE6B"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M12 5.74121C12.5522 5.74121 12.9999 6.18904 13 6.74121V7.11914C13.5297 7.24518 14.06 7.46853 14.5605 7.80469C15.0189 8.11253 15.1415 8.73396 14.834 9.19238C14.5261 9.65074 13.9047 9.77249 13.4463 9.46484C12.6984 8.9625 11.8834 8.90657 11.29 9.08691C10.6564 9.27975 10.4963 9.6312 10.4961 9.81641C10.4962 10.106 10.5955 10.2747 10.8584 10.4619C11.1896 10.6978 11.6679 10.8745 12.3311 11.1074C12.9198 11.3142 13.694 11.5779 14.3018 12.0107C14.9775 12.4921 15.5038 13.2208 15.5039 14.2861C15.5038 15.6926 14.387 16.6127 13.166 16.8975C13.1114 16.9102 13.0556 16.9201 13 16.9307V17.2588C12.9998 17.8109 12.5522 18.2588 12 18.2588C11.4478 18.2588 11.0002 17.8109 11 17.2588V16.8564C10.3161 16.6893 9.61233 16.3796 8.92871 15.9082C8.47404 15.5947 8.35935 14.9723 8.67285 14.5176C8.98637 14.0634 9.60897 13.9486 10.0635 14.2617C11.1195 14.9898 12.087 15.0949 12.7119 14.9492C13.3684 14.796 13.5038 14.4532 13.5039 14.2861C13.5038 13.9962 13.4046 13.827 13.1416 13.6396C12.8104 13.4037 12.3322 13.2271 11.6689 12.9941C11.0803 12.7874 10.306 12.5245 9.69824 12.0918C9.02249 11.6106 8.49621 10.8817 8.49609 9.81641C8.49626 8.42744 9.58838 7.51439 10.707 7.17383C10.8028 7.1447 10.9007 7.11994 11 7.09766V6.74121C11.0001 6.18904 11.4478 5.74121 12 5.74121Z",
			fill: "#488631"
		}));
	}

//#endregion
//#region src/WebSearch.dil.tsx
	const FAVICON_PRELOAD_LIMIT = 20;
	function useCountingValue(target, isActive, intervalMs) {
		const [value, setValue] = DIL.useState(isActive ? 1 : target);
		const [isSettled, setIsSettled] = DIL.useState(!isActive);
		const now = DIL.useNow(isActive && (value < target || !isSettled), intervalMs);
		const [lastStepAt, setLastStepAt] = DIL.useState(now);
		DIL.useEffect(() => {
			if (!isActive) return;
			if (value < target && isSettled) {
				setIsSettled(false);
				setLastStepAt(now);
			} else if (now - lastStepAt >= intervalMs) if (value < target) {
				setValue(value + 1);
				setLastStepAt(Math.max(lastStepAt + intervalMs, now - intervalMs));
			} else setIsSettled(true);
		}, [
			now,
			lastStepAt,
			intervalMs,
			target,
			isActive,
			value,
			isSettled
		]);
		return {
			value: Math.min(value, target),
			isSettled: isSettled && value >= target
		};
	}
	function useSearchFaviconUrl(urls, isActive) {
		const { value } = useCountingValue(urls?.length ?? 0, isActive, 300);
		return urls?.[value - 1];
	}
	function InstantSearchFavicon({ urls, active }) {
		const [index, setIndex] = DIL.useState(0);
		const [nextAt, setNextAt] = DIL.useState(null);
		const hasNext = active && index + 1 < urls.length;
		const now = DIL.useNow(hasNext, 1500);
		DIL.useEffect(() => {
			if (!hasNext) setNextAt(null);
			else if (nextAt == null) setNextAt(now + 1500);
			else if (now >= nextAt) {
				setIndex(index + 1);
				setNextAt(null);
			}
		}, [
			hasNext,
			now,
			nextAt,
			index
		]);
		return /* @__PURE__ */ __dil.jsx(SearchFavicon, {
			url: urls[Math.min(index, urls.length - 1)],
			urls,
			instant: true
		});
	}
	function SearchFavicon({ url, urls, instant = false }) {
		const nextIndex = url == null ? 0 : urls.indexOf(url) + 1;
		const upcomingUrls = urls.slice(nextIndex, nextIndex + (instant ? 1 : FAVICON_PRELOAD_LIMIT));
		return /* @__PURE__ */ __dil.jsx("box", {
			size: 20,
			align: "center",
			justify: "center",
			gap: 0,
			flex: "0 0 auto",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			size: 0,
			clip: true,
			gap: 0,
			flex: "0 0 auto",
			ariaHidden: true
		}, upcomingUrls.map((upcomingUrl) => instant ? /* @__PURE__ */ __dil.jsx("image", {
			key: upcomingUrl,
			src: upcomingUrl,
			alt: "",
			width: 16,
			height: 16
		}) : /* @__PURE__ */ __dil.jsx("favicon", {
			key: upcomingUrl,
			url: upcomingUrl,
			size: 16
		}))), url != null && /* @__PURE__ */ __dil.jsx("box", {
			size: 16,
			radius: "full",
			border: {
				size: .5,
				color: "default"
			},
			clip: true
		}, instant ? /* @__PURE__ */ __dil.jsx("image", {
			key: url,
			src: url,
			alt: "",
			width: 16,
			height: 16
		}) : /* @__PURE__ */ __dil.jsx("favicon", {
			key: url,
			url,
			size: "100%"
		})));
	}
	function InstantSearchTitle({ title, shimmer, color }) {
		const Text = shimmer ? "shimmer-text" : "text";
		const match = title.match(/^(\\D*)(\\d+)(\\D*)$/);
		if (DIL.useAppData((data) => data.reduceSearchMotion === true)) return /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color,
			truncate: true
		}, title);
		if (!match) return /* @__PURE__ */ __dil.jsx(Text, {
			size: "md",
			color,
			truncate: true
		}, title);
		const [, prefix, number, suffix] = match;
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			align: "center",
			ariaLabel: title
		}, /* @__PURE__ */ __dil.jsx(Text, {
			size: "md",
			color
		}, prefix.replace(/ $/, "\\xA0")), /* @__PURE__ */ __dil.jsx("transition", {
			dimension: "width",
			initial: {
				opacity: 0,
				translateY: 6
			},
			enter: {
				opacity: 1,
				translateY: 0,
				delay: 150,
				duration: 400
			},
			exit: {
				opacity: 0,
				translateY: -4,
				duration: 150
			},
			preventInitialTransition: true
		}, /* @__PURE__ */ __dil.jsx(Text, {
			key: number,
			size: "md",
			color,
			tabularNums: true
		}, number)), /* @__PURE__ */ __dil.jsx(Text, {
			size: "md",
			color,
			truncate: true
		}, suffix.replace(/^ /, "\\xA0")));
	}
	function SearchTitle({ title, count, animateCount, shimmer, color }) {
		const { value: displayedCount, isSettled } = useCountingValue(count, animateCount, 60);
		const match = title.match(/^(\\D*)(\\d+)(\\D*)$/);
		if (!animateCount || count < 2 || isSettled || match == null || Number(match[2]) !== count) {
			const Text = shimmer ? "shimmer-text" : "text";
			return /* @__PURE__ */ __dil.jsx(Text, {
				size: "md",
				color,
				weight: "normal",
				tabularNums: true,
				truncate: true
			}, title);
		}
		const prefix = match[1];
		const suffix = match[3];
		const digits = String(displayedCount).split("");
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			align: "stretch",
			ariaLabel: \`\${prefix}\${displayedCount}\${suffix}\`
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color,
			weight: "normal",
			preserveWhitespace: true
		}, prefix), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, digits.map((digit, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: digits.length - index,
			clip: true
		}, /* @__PURE__ */ __dil.jsx("transition", {
			dimension: "width",
			initial: {
				opacity: 0,
				translateY: -12
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: 40,
				delay: 0,
				timingFunction: "ease-out"
			},
			exit: {
				opacity: 0,
				translateY: 12,
				duration: 40,
				delay: 0,
				timingFunction: "ease-out"
			},
			preventInitialTransition: true
		}, /* @__PURE__ */ __dil.jsx("text", {
			key: digit,
			size: "md",
			color,
			weight: "normal",
			tabularNums: true
		}, digit))))), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color,
			weight: "normal",
			preserveWhitespace: true,
			truncate: true
		}, suffix));
	}
	function WebSearchDetails({ item, instant, active }) {
		const [allQueries, setAllQueries] = DIL.useState(false);
		const [allResources, setAllResources] = DIL.useState(false);
		const queries = item.queries ?? [];
		const resources = item.resources?.filter((resource) => resource.type === "web_search_source") ?? [];
		const queryOverflow = queries.length > 3 && item.moreQueriesLabel != null;
		const visibleResources = instant && active ? resources.slice(0, Number(item.label.match(/^\\D*(\\d+)\\D*$/)?.[1] ?? 1)) : resources;
		const resourceOverflow = !instant && resources.length > 8 && item.moreResourcesLabel != null;
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			wrap: "wrap",
			align: "center",
			width: "100%"
		}, resources.length > 0 ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, (resourceOverflow && !allResources ? resources.slice(0, 7) : visibleResources).map((source) => /* @__PURE__ */ __dil.jsx("link", {
			key: source.url,
			href: source.url,
			title: source.title
		}, /* @__PURE__ */ __dil.jsx(SearchPill, {
			key: \`source-pill-\${item.id}-\${source.url}\`,
			label: source.attribution,
			resources: [source],
			interactive: true
		}))), resourceOverflow && /* @__PURE__ */ __dil.jsx("pressable", {
			key: "resource-overflow",
			onClick: () => setAllResources(!allResources),
			ariaPressed: allResources
		}, /* @__PURE__ */ __dil.jsx(SearchPill, {
			label: allResources ? item.showLessLabel : item.moreResourcesLabel,
			resources: allResources ? void 0 : resources.slice(7, 10)
		}))) : /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, (queryOverflow && !allQueries ? queries.slice(0, 2) : queries).map((query) => /* @__PURE__ */ __dil.jsx(SearchPill, {
			key: \`query-pill-\${item.id}-\${query}\`,
			label: query,
			query: true
		})), queryOverflow && /* @__PURE__ */ __dil.jsx("pressable", {
			key: "query-overflow",
			onClick: () => setAllQueries(!allQueries),
			ariaPressed: allQueries
		}, /* @__PURE__ */ __dil.jsx(SearchPill, { label: allQueries ? item.showLessLabel : item.moreQueriesLabel }))), item.pattern != null && /* @__PURE__ */ __dil.jsx(SearchPill, {
			label: item.pattern,
			query: true
		}));
	}
	function SearchPill({ label, resources, query = false, interactive = false }) {
		const [hovered, setHovered] = DIL.useState(false);
		return /* @__PURE__ */ __dil.jsx("badge", {
			size: "lg",
			padding: {
				left: query || resources?.length ? 2 : 3,
				right: 3
			},
			maxWidth: "100%",
			weight: "normal",
			color: hovered ? "var(--color-background-secondary-soft-alpha-hover)" : "secondary",
			variant: "soft",
			onHover: interactive ? setHovered : void 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			minWidth: 0
		}, query && /* @__PURE__ */ __dil.jsx("icon", {
			name: "search",
			size: "xs",
			color: "secondary"
		}), resources != null && /* @__PURE__ */ __dil.jsx("row", {
			gap: 0,
			flex: "none",
			ariaHidden: true
		}, resources.map((source, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: source.url,
			width: index === resources.length - 1 ? 12 : 8,
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: source.url,
			size: 12,
			frame: resources.length > 1
		})))), /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			maxWidth: query ? "8rem" : void 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, label))));
	}

//#endregion
//#region src/CoTToolGroup.dil.tsx
	const nativeIconNames = {
		api_tool: "apps",
		"book-open": "reading-level",
		"code-searching": "search",
		computer: "desktop",
		"edit-files": "pencil",
		globe: "globe",
		library: "books",
		"list-files": "folders",
		"run-command": "terminal"
	};
	function ToolIcon({ icon, expanded, faviconUrl, instantSearch, active }) {
		if (icon.type === "favicons") {
			if (instantSearch) return /* @__PURE__ */ __dil.jsx(InstantSearchFavicon, {
				key: icon.urls[0],
				urls: icon.urls,
				active
			});
			return /* @__PURE__ */ __dil.jsx(SearchFavicon, {
				url: faviconUrl,
				urls: icon.urls
			});
		}
		return /* @__PURE__ */ __dil.jsx("box", {
			width: 20,
			height: 20,
			align: "center",
			justify: "center",
			flex: "0 0 auto",
			ariaHidden: true
		}, icon.type === "native" ? icon.name === "finances" ? /* @__PURE__ */ __dil.jsx(FinanceBlossom, null) : /* @__PURE__ */ __dil.jsx("icon", {
			name: icon.name === "run-command" && icon.variant === "cloud-browser" ? "menubar" : nativeIconNames[icon.name],
			weight: "light",
			size: "md",
			color: expanded && icon.name !== "globe" ? "primary" : "secondary"
		}) : /* @__PURE__ */ __dil.jsx("image", {
			src: icon.src,
			alt: "",
			width: 16,
			height: 16,
			fit: "contain",
			radius: icon.kind === "favicon" ? "full" : void 0,
			frame: icon.kind === "favicon",
			fallback: /* @__PURE__ */ __dil.jsx("icon", {
				name: icon.kind === "favicon" ? "globe" : "apps",
				weight: "light",
				size: "md",
				color: "secondary"
			})
		}));
	}
	function ActivityLabel({ title, isActive, icon, expanded, onToggle, numResources, animateCount = true, instantSearch = false }) {
		const [hovered, setHovered] = DIL.useState(false);
		const faviconUrl = useSearchFaviconUrl(icon?.type === "favicons" ? icon.urls : void 0, isActive && !instantSearch);
		const Container = onToggle != null ? "pressable" : "box";
		const color = onToggle != null && hovered ? "primary" : "tertiary";
		return /* @__PURE__ */ __dil.jsx(Container, {
			direction: "row",
			align: "center",
			gap: 2,
			maxWidth: "100%",
			ariaLabel: onToggle != null ? title : void 0,
			onClick: onToggle,
			onHover: onToggle != null ? setHovered : void 0
		}, icon != null && /* @__PURE__ */ __dil.jsx(ToolIcon, {
			icon,
			expanded,
			faviconUrl,
			instantSearch,
			active: isActive
		}), /* @__PURE__ */ __dil.jsx("row", {
			gap: 1,
			align: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			ariaHidden: onToggle != null
		}, instantSearch && isActive && animateCount ? /* @__PURE__ */ __dil.jsx(InstantSearchTitle, {
			title,
			shimmer: !hovered,
			color
		}) : /* @__PURE__ */ __dil.jsx(ActivityText, {
			title,
			numResources,
			animateCount: isActive && animateCount,
			shimmer: isActive && (onToggle == null || !hovered),
			color
		})), onToggle != null && /* @__PURE__ */ __dil.jsx("box", {
			width: 16,
			height: 16,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("transition", {
			initial: {
				rotate: expanded ? -90 : 90,
				opacity: 1
			},
			enter: {
				rotate: 0,
				opacity: 1,
				duration: 150,
				delay: 0
			},
			exit: {
				opacity: 0,
				duration: 0,
				delay: 0
			},
			layoutEnter: {
				duration: 0,
				delay: 0
			},
			layoutExit: {
				duration: 0,
				delay: 0
			},
			layoutMove: {
				duration: 0,
				delay: 0
			},
			preventInitialTransition: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: expanded ? "expanded" : "collapsed",
			width: 16,
			height: 16,
			align: "center",
			justify: "center"
		}, (expanded || hovered) && /* @__PURE__ */ __dil.jsx("icon", {
			name: expanded ? "chevron-down" : "chevron-right",
			size: "sm",
			color
		}))))));
	}
	function ActivityText({ title, numResources, animateCount, shimmer, color }) {
		if (numResources != null) return /* @__PURE__ */ __dil.jsx(SearchTitle, {
			title,
			count: numResources,
			animateCount,
			shimmer,
			color
		});
		const Text = shimmer ? "shimmer-text" : "text";
		return /* @__PURE__ */ __dil.jsx(Text, {
			size: "md",
			color,
			weight: "normal",
			truncate: true
		}, title);
	}
	function CoTToolGroup() {
		const data = DIL.useAppData((data$1) => data$1);
		const [expanded, setExpanded] = DIL.useState(false);
		const instant = data.webSearchVariant === "instant";
		const lastItem = data.items[data.items.length - 1];
		const headerItem = data.isActive ? lastItem : void 0;
		const currentStatus = data.isActive ? data.current_status : void 0;
		const singleItem = data.items.length === 1 ? data.items[0] : null;
		if (singleItem != null) return /* @__PURE__ */ __dil.jsx(Activity, {
			key: singleItem.id,
			item: singleItem,
			currentStatus,
			isActive: data.isActive,
			isTurnActive: data.isTurnActive === true,
			instantSearch: instant && singleItem.type === "web_search",
			autoExpand: data.isActive && !(instant && singleItem.type === "web_search"),
			indentDetails: true
		});
		const previewHeader = headerItem != null && hasResourceCards(headerItem) && !(instant && headerItem.type === "web_search");
		const groupContent = expanded ? /* @__PURE__ */ __dil.jsx(NestedContent, {
			key: "tool-group-content",
			indentItems: true
		}, data.items.map((item, index) => /* @__PURE__ */ __dil.jsx(Activity, {
			key: item.id,
			item,
			isActive: item.isActive,
			isTurnActive: data.isTurnActive === true,
			instantSearch: instant && item.type === "web_search",
			autoExpand: data.isActive && index === data.items.length - 1
		}))) : previewHeader ? /* @__PURE__ */ __dil.jsx(NestedContent, { key: \`tool-group-header-details-\${headerItem.id}\` }, /* @__PURE__ */ __dil.jsx(ActivityDetails, {
			item: headerItem,
			topPadding: 0,
			withGuide: true
		})) : false;
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			align: "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(ActivityLabel, {
			key: lastItem?.type === "web_search" ? \`tool-group-header-\${lastItem.id}\` : void 0,
			title: currentStatus ?? data.title,
			instantSearch: instant && (lastItem?.type === "web_search" || data.icon?.type === "favicons"),
			numResources: lastItem?.resources?.length,
			animateCount: currentStatus == null && lastItem?.type === "web_search",
			isActive: data.isActive,
			icon: data.icon,
			expanded,
			onToggle: data.items.length > 0 ? () => setExpanded(!expanded) : void 0
		}), /* @__PURE__ */ __dil.jsx(ExpandableContent, {
			revealAfterResize: previewHeader,
			slideUpOnEnter: !expanded && previewHeader,
			slideDownOnExit: expanded && previewHeader
		}, groupContent));
	}
	function Activity({ item, currentStatus, isActive, isTurnActive, autoExpand = false, instantSearch = false, indentDetails = false }) {
		const [userExpanded, setUserExpanded] = DIL.useState(instantSearch && autoExpand);
		const automaticallyExpanded = autoExpand && !instantSearch;
		const hasDetails = hasActivityDetails(item);
		const expanded = hasDetails && (automaticallyExpanded || userExpanded);
		const disclosure = isTurnActive ? item.reasoningRecapDisclosure?.trim() : void 0;
		return /* @__PURE__ */ __dil.jsx("col", {
			gap: 0,
			align: "start",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx(ActivityLabel, {
			instantSearch,
			title: currentStatus ?? item.label,
			numResources: item.resources?.length,
			animateCount: currentStatus == null && item.type === "web_search",
			isActive,
			icon: item.icon,
			expanded,
			onToggle: hasDetails && !automaticallyExpanded ? () => setUserExpanded(!userExpanded) : void 0
		}), disclosure && /* @__PURE__ */ __dil.jsx("box", { padding: { top: 2 } }, /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "secondary"
		}, disclosure)), hasDetails && /* @__PURE__ */ __dil.jsx(ExpandableContent, null, expanded && /* @__PURE__ */ __dil.jsx(NestedContent, {
			key: "activity-details",
			topPadding: indentDetails ? 3 : 0,
			bottomPadding: indentDetails ? 3 : 0,
			showGuide: indentDetails
		}, /* @__PURE__ */ __dil.jsx(ActivityDetails, {
			item,
			instantSearch,
			active: isActive || instantSearch && autoExpand,
			topPadding: indentDetails ? 0 : 3,
			withGuide: indentDetails
		}))));
	}
	function NestedContent({ children, topPadding = 3, bottomPadding = 0, indentItems = false, showGuide = true }) {
		return /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			gap: showGuide ? 1 : 0,
			align: "stretch",
			padding: {
				top: topPadding,
				bottom: bottomPadding
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: 20,
			flex: "0 0 auto",
			justify: "center",
			gap: 0,
			ariaHidden: true
		}, showGuide && /* @__PURE__ */ __dil.jsx("divider", {
			color: "default",
			spacing: 0
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			flex: 1,
			minWidth: 0,
			padding: {
				left: indentItems ? 2 : 0,
				bottom: indentItems ? 2 : 0
			}
		}, children));
	}
	function ActivityDetails({ item, topPadding = 3, withGuide, instantSearch = false, active = false }) {
		const search = item.type === "web_search" ? item : void 0;
		const emails = item.resources?.filter((resource) => resource.type === "email_source");
		const events = item.resources?.filter((resource) => resource.type === "calendar_source");
		const hasSourceCards = !!emails?.length || !!events?.length;
		return /* @__PURE__ */ __dil.jsx("box", {
			padding: {
				top: topPadding,
				left: hasSourceCards || search != null ? withGuide ? 1 : 2 : 0,
				right: hasSourceCards ? 4 : 0
			},
			width: "100%"
		}, search != null && /* @__PURE__ */ __dil.jsx(WebSearchDetails, {
			item: search,
			instant: instantSearch,
			active
		}), !!emails?.length && /* @__PURE__ */ __dil.jsx(EmailSources, {
			sources: emails,
			label: item.label
		}), !!events?.length && /* @__PURE__ */ __dil.jsx(CalendarSources, {
			sources: events,
			label: item.label
		}));
	}
	function hasActivityDetails(item) {
		return hasResourceCards(item) || item.type === "web_search" && (!!item.queries?.length || item.pattern != null);
	}
	function hasResourceCards(item) {
		return !!item.resources?.some((resource) => resource.type === "email_source" || resource.type === "calendar_source" || item.type === "web_search" && resource.type === "web_search_source");
	}
	function ExpandableContent({ children, revealAfterResize = false, slideUpOnEnter = false, slideDownOnExit = false }) {
		return /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("transition", {
			dimension: "height",
			initial: {
				opacity: revealAfterResize ? 0 : 1,
				translateY: slideUpOnEnter ? 4 : 0
			},
			enter: {
				opacity: 1,
				translateY: 0,
				duration: slideUpOnEnter ? 200 : revealAfterResize ? 150 : 0,
				delay: slideUpOnEnter ? 100 : revealAfterResize ? 300 : 0
			},
			exit: {
				opacity: revealAfterResize ? 0 : 1,
				translateY: slideDownOnExit ? 4 : 0,
				duration: slideUpOnEnter ? 100 : slideDownOnExit ? 150 : 0,
				delay: 0
			},
			layoutEnter: {
				duration: 300,
				delay: 0,
				timingFunction: "ease-in-out"
			},
			layoutExit: {
				duration: 300,
				delay: 0,
				timingFunction: "ease-in-out"
			},
			layoutMove: {
				duration: revealAfterResize ? 300 : 0,
				delay: 0,
				timingFunction: "ease-in-out"
			},
			hideOverflow: true,
			preventInitialTransition: true
		}, children));
	}

//#endregion
return CoTToolGroup;
})();
return __dilDefaultExport;
})()`,CodeBlock:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentCodeBlock(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeBlock",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "CodeBlock",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeBlock",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeBlock",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "CodeBlock", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentCodeBlock, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region CodeBlock.dil.tsx
	function CodeBlock({ content, language }) {
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, language ?? "code"), /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			padding: 3,
			radius: "md"
		}, /* @__PURE__ */ __dil.jsx("text", {
			preserveWhitespace: true,
			size: "sm"
		}, content))));
	}

//#endregion
return CodeBlock;
})();
return __dilDefaultExport;
})()))`,CodeCite:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentCodeCite(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeCite",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "CodeCite",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeCite",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "CodeCite",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "CodeCite", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentCodeCite, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region CodeCite.dil.tsx
	function ResolvedCodeCite({ componentKey, state }) {
		const isMobile = DIL.useIsMobile();
		const [hovered, setHovered] = DIL.useState(false);
		const label = state.display_label;
		const openCitation = () => GenUI.dispatchAction({
			handler: "client",
			type: "open_coding_citation",
			payload: { component_key: componentKey }
		});
		return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 0,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: openCitation }, /* @__PURE__ */ __dil.jsx("badge", {
			color: hovered ? {
				light: "#e8e8e8",
				dark: "gray-300"
			} : {
				light: "gray-75",
				dark: "gray-400"
			},
			onHover: setHovered,
			padding: {
				x: 1,
				y: 1
			},
			size: "sm",
			variant: "soft",
			weight: "normal"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			ariaLabel: label,
			role: "img"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "file-code",
			size: "md"
		})))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "start",
			side: "bottom",
			sideOffset: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			maxWidth: "100%",
			padding: 3,
			width: isMobile ? "100%" : 324
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: label,
			gap: 2,
			onClick: openCitation
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs",
			weight: "medium"
		}, state.preview_label), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-tertiary",
			padding: 2,
			radius: "md"
		}, /* @__PURE__ */ __dil.jsx("code", null, state.highlighted_text))))));
	}
	function CodeCite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("CodeCite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading code citation" });
		return state.highlighted_text ? /* @__PURE__ */ __dil.jsx(ResolvedCodeCite, {
			componentKey: props.__resolutionId ?? componentDataKey("CodeCite", props),
			state
		}) : null;
	}

//#endregion
return CodeCite;
})();
return __dilDefaultExport;
})()))`,Entity:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentEntity(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "Entity",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "Entity",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Entity",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Entity",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "Entity", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentEntity, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
	/** Preserve native inline/single-card impression timing without changing layout. */
	function useProductShownOnRender(product) {
		const currentProduct = DIL.useRef(product);
		currentProduct.current = product;
		const shownProductId = DIL.useRef(void 0);
		DIL.useEffect(() => {
			const current = currentProduct.current;
			if (!GenUI.logEvent || !current || shownProductId.current === current.productId) return;
			shownProductId.current = current.productId;
			logProductShown(current);
		}, [product?.productId]);
	}

//#endregion
//#region Entity.dil.tsx
	const SvgPath = "path";
	function QuoteProviderLogo({ provider }) {
		const logo = provider.provider_logo?.trim();
		const fallback = provider.provider?.trim().toLowerCase() === "thumbtack" ? /* @__PURE__ */ __dil.jsx("svg", {
			color: "primary",
			size: 20,
			viewBox: "0 0 70 70"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			clipRule: "evenodd",
			d: "M0 34.9998C0 54.3297 15.6703 70 34.9998 70C54.3297 70 70 54.3297 70 34.9998C70 15.6699 54.3297 0 34.9998 0C15.6703 0 0 15.6699 0 34.9998Z M52.1011 26.3572H17.8975V18.574H52.1011V26.3572ZM36.7476 56.998C38.3276 54.2569 39.1597 51.1478 39.1597 47.9836V29.6306C35.9878 29.6306 32.9053 30.6476 30.8403 33.5203V47.9836C30.8403 51.1478 31.6724 54.2569 33.2529 56.998L35 60.0286L36.7476 56.998Z",
			fill: "currentColor",
			fillRule: "evenodd"
		})) : /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			background: "surface-secondary",
			justify: "center",
			radius: "sm",
			size: 20
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "globe",
			size: "sm"
		}));
		return /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			flex: "0 0 auto",
			size: 20
		}, logo ? /* @__PURE__ */ __dil.jsx("image", {
			alt: "",
			fallback,
			fit: "contain",
			height: 20,
			radius: "sm",
			src: logo,
			width: 20
		}) : fallback);
	}
	function Entity(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("Entity", props);
		const isMobile = DIL.useIsMobile();
		useProductShownOnRender(productAnalyticsFromAction(state?.click_action) ?? productAnalyticsFromPayload(state?.action_payload));
		const componentKey = typeof props.__resolutionId === "string" ? props.__resolutionId : componentDataKey("Entity", props);
		const [providerChoicesOpen, setProviderChoicesOpen] = DIL.useState(false, { key: JSON.stringify(["Entity", componentKey, "providerChoicesOpen"]) });
		const [providerCardKey, setProviderCardKey] = DIL.useState(0, { key: JSON.stringify(["Entity", componentKey, "providerCardKey"]) });
		const canLaunchApp = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("launch_ecosystem_widget") === true);
		const disableHoverCard = DIL.useAppData((data) => data.opGenui?.disableEntityHoverCard === true);
		const badgeLabel = DIL.useAppData((data) => props.__state === void 0 ? data.opGenui?.entityBadgeLabels?.[componentKey] : void 0);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading entity" });
		const title = /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, state.value), badgeLabel ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, " ", /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: badgeLabel,
			inline: true,
			role: "img"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			inline: true,
			name: "sparkles",
			size: "sm"
		}))) : null);
		const onClick = () => {
			if (state.activation_event) GenUI.logEvent?.(state.activation_event);
			return state.click_action ? GenUI.dispatchAction(state.click_action) : state.action_payload ? GenUI.dispatchAction({
				handler: "client",
				type: "open_entity_detail",
				payload: state.action_payload
			}) : GenUI.openEntityDetail(props.category ?? "ask_sidebar", props.query ?? state.value);
		};
		const entity = state.entity_data;
		if (!isMobile && !disableHoverCard && state.action_payload != null && entity != null) {
			const name = entity.name || state.value;
			const viewDetailsLabel = state.view_details_label ?? \`View details for \${name}\`;
			const categories = entity.categories?.filter(Boolean) ?? [];
			const hasRating = typeof entity.rating === "number" && Number.isFinite(entity.rating);
			const hasPrice = Boolean(entity.price_str);
			const hasOpenStatus = typeof entity.is_open === "boolean";
			const directionsUrl = state.directions_url;
			const reservationProviders = canLaunchApp ? (entity.reservation_providers ?? []).filter((provider) => {
				const appUri = provider.launcherPayload?.appUri;
				return typeof appUri === "string" && appUri.trim().length > 0;
			}) : [];
			const providerKeys = [];
			const quoteProviders = canLaunchApp && reservationProviders.length === 0 ? (entity.service_providers ?? []).filter((provider) => {
				const appUri = provider.launcherPayload?.appUri;
				if (provider.action_type !== "request_a_quote" || typeof appUri !== "string" || !appUri.trim()) return false;
				const key = provider.provider?.trim().toLowerCase() || appUri.trim();
				if (providerKeys.includes(key)) return false;
				providerKeys.push(key);
				return true;
			}) : [];
			const isReservation = reservationProviders.length > 0;
			const actionLabel = isReservation ? "Reserve" : "Get Quote";
			const actionProviders = isReservation ? reservationProviders : quoteProviders;
			const quoteChoicesExpanded = !isReservation && actionProviders.length > 1 && providerChoicesOpen;
			const providerNames = {
				opentable: "OpenTable",
				resy: "Resy",
				thumbtack: "Thumbtack",
				yelp: "Yelp"
			};
			const providerOptions = actionProviders.map((provider) => ({
				provider,
				label: provider.provider_name?.trim() || providerNames[provider.provider?.trim().toLowerCase() ?? ""] || provider.provider?.trim() || (isReservation ? "Reservation provider" : "Quote provider")
			})).sort((left, right) => left.label.toLowerCase().localeCompare(right.label.toLowerCase()));
			const launchProvider = (provider) => {
				setProviderChoicesOpen(false);
				setProviderCardKey((previous) => previous + 1);
				GenUI.dispatchAction({
					handler: "client",
					type: "launch_ecosystem_widget",
					payload: provider.launcherPayload
				});
			};
			const legacyWebsiteUrl = entity.website_url;
			const legacyWebsiteMatch = typeof legacyWebsiteUrl === "string" ? /^https:\\/\\/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+(?:[a-z]{2,63}|xn--[a-z0-9](?:[a-z0-9-]{0,57}[a-z0-9])?)(?::(\\d{1,5}))?(?:[/?#][^\\s\\\\]*)?$/i.exec(legacyWebsiteUrl) : null;
			const websiteUrl = state.website_url ?? (legacyWebsiteMatch && (!legacyWebsiteMatch[1] || Number(legacyWebsiteMatch[1]) <= 65535) ? legacyWebsiteUrl : void 0);
			return /* @__PURE__ */ __dil.jsx("popover", {
				key: providerCardKey,
				hoverOpenDelay: 150,
				showOnHover: true
			}, badgeLabel ? /* @__PURE__ */ __dil.jsx("popover-trigger", { role: "presentation" }, /* @__PURE__ */ __dil.jsx("pressable", {
				inline: true,
				onClick,
				tooltip: badgeLabel
			}, title)) : /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick }, title), /* @__PURE__ */ __dil.jsx("popover-content", {
				align: "center",
				side: badgeLabel ? "bottom" : "top",
				sideOffset: 8
			}, /* @__PURE__ */ __dil.jsx("col", {
				gap: 3,
				maxWidth: "100%",
				padding: 4,
				width: 420
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "start",
				gap: 3,
				wrap: "nowrap"
			}, state.image_url ? /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: viewDetailsLabel,
				onClick
			}, /* @__PURE__ */ __dil.jsx("image", {
				alt: name,
				fit: "cover",
				height: 96,
				hideOnFailure: true,
				radius: "xl",
				src: state.image_url,
				width: 96
			})) : null, /* @__PURE__ */ __dil.jsx("col", {
				flex: 1,
				gap: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: viewDetailsLabel,
				maxWidth: "100%",
				onClick,
				width: "fit-content"
			}, /* @__PURE__ */ __dil.jsx("text", {
				inline: true,
				maxLines: 1,
				size: "md",
				weight: "medium"
			}, name)), hasRating || categories.length > 0 ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 1,
				wrap: "nowrap"
			}, hasRating ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				flex: "0 0 auto",
				gap: 1,
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx("icon", {
				color: "primary",
				name: "star-filled",
				size: "sm"
			}), /* @__PURE__ */ __dil.jsx("text", {
				inline: true,
				size: "sm"
			}, Math.round(entity.rating * 10) / 10)) : null, hasRating && categories.length > 0 ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, "•") : null, categories.length > 0 ? /* @__PURE__ */ __dil.jsx("text", {
				inline: true,
				size: "sm",
				truncate: true
			}, categories.join(", ")) : null) : null, hasPrice || hasOpenStatus ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 1,
				wrap: "wrap"
			}, hasPrice ? /* @__PURE__ */ __dil.jsx("text", {
				inline: true,
				size: "sm"
			}, entity.price_str) : null, hasPrice && hasOpenStatus ? /* @__PURE__ */ __dil.jsx("text", {
				color: "secondary",
				inline: true,
				size: "sm"
			}, "•") : null, hasOpenStatus ? /* @__PURE__ */ __dil.jsx("text", {
				color: entity.is_open ? "success" : "secondary",
				inline: true,
				size: "sm"
			}, state.open_status ?? (entity.is_open ? "Open" : "Closed")) : null) : null)), actionProviders.length > 0 || directionsUrl || websiteUrl ? /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				width: "100%",
				wrap: quoteChoicesExpanded ? "wrap" : "nowrap"
			}, actionProviders.length > 0 ? /* @__PURE__ */ __dil.jsx("box", {
				flex: quoteChoicesExpanded ? "1 0 100%" : 1,
				minWidth: 0
			}, actionProviders.length === 1 ? /* @__PURE__ */ __dil.jsx("button", {
				block: true,
				color: "primary",
				onClick: () => launchProvider(actionProviders[0]),
				size: "md",
				variant: "solid"
			}, actionLabel) : actionProviders.length > 1 ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("button", {
				block: true,
				color: "primary",
				label: providerChoicesOpen ? isReservation ? "Hide reservation providers" : "Hide quote providers" : actionLabel,
				onClick: () => setProviderChoicesOpen(!providerChoicesOpen),
				size: "md",
				variant: "solid"
			}, actionLabel), providerChoicesOpen && isReservation ? /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, providerOptions.map(({ provider, label }, index) => /* @__PURE__ */ __dil.jsx("button", {
				block: true,
				color: "secondary",
				key: index,
				onClick: () => launchProvider(provider),
				size: "md",
				variant: "ghost"
			}, label))) : null, quoteChoicesExpanded ? /* @__PURE__ */ __dil.jsx("col", {
				gap: 0,
				width: "100%"
			}, providerOptions.map(({ provider, label }, index) => /* @__PURE__ */ __dil.jsx("pressable", {
				ariaLabel: label,
				key: index,
				minHeight: 36,
				onClick: () => launchProvider(provider),
				padding: {
					x: 2,
					y: 2
				},
				radius: "md",
				variant: "ghost",
				width: "100%"
			}, /* @__PURE__ */ __dil.jsx("row", {
				align: "center",
				gap: 2,
				minWidth: 0,
				width: "100%",
				wrap: "nowrap"
			}, /* @__PURE__ */ __dil.jsx(QuoteProviderLogo, { provider }), /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 1,
				size: "sm",
				truncate: true,
				weight: "medium"
			}, label)))))) : null) : null) : null, directionsUrl ? /* @__PURE__ */ __dil.jsx(LinkImpression, {
				url: directionsUrl,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("button", {
				block: true,
				color: actionProviders.length > 0 ? "secondary" : "primary",
				onClick: () => GenUI.openUrl(directionsUrl),
				size: "md",
				variant: actionProviders.length > 0 ? "outline" : "solid"
			}, state.directions_label ?? "Directions")) : null, websiteUrl ? /* @__PURE__ */ __dil.jsx(LinkImpression, {
				url: websiteUrl,
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("button", {
				block: true,
				color: actionProviders.length > 0 || directionsUrl ? "secondary" : "primary",
				onClick: () => GenUI.openUrl(websiteUrl),
				size: "md",
				variant: actionProviders.length > 0 || directionsUrl ? "outline" : "solid"
			}, state.website_label ?? "Website")) : null) : null)));
		}
		return /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			onClick,
			tooltip: badgeLabel
		}, title);
	}

//#endregion
return Entity;
})();
return __dilDefaultExport;
})()))`,FileCite:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFileCite(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileCite",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FileCite",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileCite",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileCite",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FileCite", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFileCite, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region FileCite.dil.tsx
	function storedLocationLabel(payload) {
		const page = payload?.page_range_start;
		const lastPage = payload?.page_range_end;
		if (typeof page === "number" && Number.isInteger(page) && page > 0) return typeof lastPage === "number" && Number.isInteger(lastPage) && lastPage > page ? \`Pages \${page}–\${lastPage}\` : \`Page \${page}\`;
		const line = payload?.input_pointer?.line_range_start;
		const lastLine = payload?.input_pointer?.line_range_end;
		if (typeof line === "number" && Number.isInteger(line) && line >= 0) return typeof lastLine === "number" && Number.isInteger(lastLine) && lastLine > line ? \`Lines \${line}–\${lastLine}\` : \`Line \${line}\`;
		return null;
	}
	function ResolvedFileCite({ state }) {
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
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { onClick: () => !isMobile && isSm ? openFile() : void 0 }, /* @__PURE__ */ __dil.jsx(LinkImpression, {
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
			align: "start",
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
	function FileCite(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FileCite", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading file citation" });
		return state.file_name ? /* @__PURE__ */ __dil.jsx(ResolvedFileCite, { state }) : null;
	}

//#endregion
return FileCite;
})();
return __dilDefaultExport;
})()))`,FileNavList:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFileNavList(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileNavList",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FileNavList",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileNavList",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FileNavList",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FileNavList", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFileNavList, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region FileNavList.dil.tsx
	function ResolvedFileNavList({ componentKey, items }) {
		const isSm = DIL.useBreakpoint("sm");
		return /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			width: "100%",
			wrap: "wrap"
		}, items.map((item) => /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: item.name,
			key: item.id + ":" + item.item_index,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_file_navlist_item",
				payload: {
					component_key: componentKey,
					item_index: item.item_index
				}
			}),
			width: isSm ? 320 : 205
		}, /* @__PURE__ */ __dil.jsx("card", {
			background: "surface-primary",
			padding: 2.5,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			ariaHidden: true,
			flex: "0 0 auto",
			height: 40,
			justify: "center",
			width: 40
		}, /* @__PURE__ */ __dil.jsx("icon", {
			color: "secondary",
			name: "document",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "sm",
			truncate: true,
			weight: "semibold"
		}, item.name), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "sm",
			truncate: true
		}, item.description)))))));
	}
	function FileNavList(props) {
		const hideInaccessibleFiles = DIL.useAppData((appData) => appData.opGenui?.hideInaccessibleFiles === true);
		const { resolutionComplete, state } = useResolvedComponentResult("FileNavList", props);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading files" });
		const items = state.items?.map((item, item_index) => ({
			...item,
			item_index
		})).filter((item) => item.id && item.name && item.is_actionable && (!hideInaccessibleFiles || item.safe_file_url)) ?? [];
		if (items.length === 0) return null;
		return /* @__PURE__ */ __dil.jsx(ResolvedFileNavList, {
			componentKey: props.__resolutionId ?? componentDataKey("FileNavList", props),
			items
		});
	}

//#endregion
return FileNavList;
})();
return __dilDefaultExport;
})()))`,FlightCard:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFlightCard(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCard",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FlightCard",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCard",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCard",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FlightCard", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFlightCard, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region FlightCard.dil.tsx
	function FlightCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FlightCard", props);
		const isMobile = DIL.useIsMobile();
		const { isDark } = DIL.useTheme();
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading flight" });
		return /* @__PURE__ */ __dil.jsx("card", {
			background: isDark ? "surface-elevated" : "#fff",
			gap: 4,
			padding: 5,
			size: "sm"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 3,
			justify: "between",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			minWidth: 0
		}, state.airline_logo_url ? /* @__PURE__ */ __dil.jsx("image", {
			alt: state.airline_logo_alt,
			fit: "contain",
			height: 18,
			hideOnFailure: true,
			radius: "full",
			src: state.airline_logo_url,
			width: 18
		}) : null, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "md",
			truncate: true,
			weight: "medium"
		}, state.airline_name)), state.operating_airlines_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.operating_airlines_label) : null, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "sm",
			truncate: true
		}, state.trip_summary_label)), state.price_label ? /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "lg",
			textAlign: "end",
			weight: "semibold"
		}, state.price_label) : null), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 3,
			width: "100%",
			wrap: "nowrap"
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: isMobile ? "md" : "lg",
			weight: "semibold"
		}, state.departure_time_label), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, state.departure_airport_code)), /* @__PURE__ */ __dil.jsx("col", {
			align: "center",
			flex: 1,
			gap: 0,
			justify: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1,
			height: 25,
			justify: "between",
			width: "100%"
		}, [
			...[
				0,
				1,
				2
			].map((index) => /* @__PURE__ */ __dil.jsx("box", {
				background: "border-subtle",
				key: \`outbound-dot-\${index}\`,
				radius: "full",
				size: 4
			})),
			...state.duration_label ? [/* @__PURE__ */ __dil.jsx("box", { key: "flight-duration" }, /* @__PURE__ */ __dil.jsx("text", {
				maxLines: 1,
				size: "xs",
				weight: "medium"
			}, state.duration_label))] : [],
			...[
				0,
				1,
				2
			].map((index) => /* @__PURE__ */ __dil.jsx("box", {
				background: "border-subtle",
				key: \`arrival-dot-\${index}\`,
				radius: "full",
				size: 4
			}))
		])), /* @__PURE__ */ __dil.jsx("col", {
			align: "end",
			flex: 1,
			gap: .5,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: isMobile ? "md" : "lg",
			textAlign: "end",
			weight: "semibold"
		}, state.arrival_time_label), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			textAlign: "end",
			weight: "medium"
		}, state.arrival_airport_code))), state.booking_detail_labels?.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%"
		}, state.booking_detail_labels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			key: \`booking-detail-\${index}\`,
			size: "sm"
		}, label))) : null, state.booking_urls.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			width: "100%"
		}, state.booking_urls.map((url) => /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url,
			key: url,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: "secondary",
			key: url,
			onClick: () => GenUI.openUrl(url),
			pill: true,
			size: "lg",
			variant: "outline"
		}, state.select_flight_label)))) : null);
	}

//#endregion
return FlightCard;
})();
return __dilDefaultExport;
})()))`,FlightCarousel:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFlightCarousel(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCarousel",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FlightCarousel",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCarousel",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightCarousel",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FlightCarousel", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFlightCarousel, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region FlightCarousel.dil.tsx
	function FlightCarousel(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FlightCarousel", props);
		const isMobile = DIL.useIsMobile();
		const { isDark } = DIL.useTheme();
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading flights" });
		return /* @__PURE__ */ __dil.jsx("carousel", {
			ariaLabel: state.aria_label,
			gap: 4
		}, state.items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			key: item.candidate_id,
			variant: "none",
			width: isMobile ? "84%" : 360
		}, /* @__PURE__ */ __dil.jsx("card", {
			background: isDark ? "surface-elevated" : "#fff",
			gap: 4,
			height: "100%",
			padding: 5,
			size: "sm",
			width: "100%"
		}, item.title ? /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, item.title) : null, /* @__PURE__ */ __dil.jsx("col", {
			border: { left: {
				size: 1,
				color: "subtle"
			} },
			gap: 2,
			padding: { left: 3 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			minWidth: 0
		}, item.airline_logo_url ? /* @__PURE__ */ __dil.jsx("image", {
			alt: item.airline_logo_alt,
			fit: "contain",
			height: 18,
			hideOnFailure: true,
			radius: "full",
			src: item.airline_logo_url,
			width: 18
		}) : null, /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 1,
			size: "md",
			truncate: true
		}, item.airline_name), item.duration_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "md"
		}, "· " + item.duration_label) : null), item.booking_detail_labels?.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			width: "100%"
		}, item.booking_detail_labels.map((label, index) => /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			key: \`booking-detail-\${index}\`,
			size: "sm"
		}, label))) : null, item.operating_airlines_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, item.operating_airlines_label) : null, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, item.departure_time_label + " → " + item.arrival_time_label), item.price_label ? /* @__PURE__ */ __dil.jsx("text", { size: "md" }, item.price_label) : null), item.commentary ? /* @__PURE__ */ __dil.jsx("text", { size: "md" }, item.commentary) : null, item.booking_urls.length ? /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			gap: 4,
			justify: "end",
			width: "100%"
		}, item.booking_urls.map((url) => /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url,
			key: url,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: "secondary",
			key: url,
			onClick: () => GenUI.openUrl(url),
			pill: true,
			size: "lg",
			variant: "outline"
		}, state.select_flight_label)))) : null))));
	}

//#endregion
return FlightCarousel;
})();
return __dilDefaultExport;
})()))`,FlightTracker:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFlightTracker(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightTracker",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FlightTracker",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightTracker",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FlightTracker",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FlightTracker", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFlightTracker, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region shared.dil.ts
	function useIsLiveActivity() {
		return DIL.useAppData((appData) => appData.opGenui?.surface === "live-activity");
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
//#region FlightTracker.dil.tsx
	function FlightDetails({ details, isDesktop, arrival }) {
		return /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 3 : [
				1.4,
				1,
				1
			],
			gap: isDesktop ? 4 : 3
		}, details.map((detail, index) => {
			const alignEnd = isDesktop ? arrival : index > 0;
			return /* @__PURE__ */ __dil.jsx("grid-item", { key: index }, /* @__PURE__ */ __dil.jsx("col", {
				gap: .5,
				align: alignEnd ? "end" : "start"
			}, /* @__PURE__ */ __dil.jsx("caption", {
				size: "sm",
				color: "secondary",
				textAlign: alignEnd ? "end" : "start"
			}, detail.title), /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				weight: "medium",
				textAlign: alignEnd ? "end" : "start"
			}, detail.value)));
		}));
	}
	function ResolvedFlightTracker({ state }) {
		const liveActivity = useIsLiveActivity();
		const isDesktop = DIL.useBreakpoint("sm");
		if (liveActivity) return /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			padding: 2,
			theme: "dark",
			background: "surface"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, state.header_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium",
			truncate: true
		}, state.badge_label)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			width: "100%",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "sm",
			weight: "semibold"
		}, state.origin_code), /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, state.departure_time_label)), /* @__PURE__ */ __dil.jsx("icon", {
			name: "plane",
			size: "sm",
			color: "secondary"
		}), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			truncate: true
		}, state.arrival_time_label), /* @__PURE__ */ __dil.jsx("title", {
			size: "sm",
			weight: "semibold"
		}, state.destination_code)))));
		const completedDots = isDesktop ? state.completed_progress_dot_count : state.mobile_completed_progress_dot_count;
		const progressLeft = isDesktop ? state.flight_progress_left : state.mobile_flight_progress_left;
		const progressDots = isDesktop ? [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		] : [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7
		];
		const departureDetails = [
			{
				title: state.departure_detail_title,
				value: state.departure_detail_value
			},
			{
				title: state.departure_terminal_title,
				value: state.departure_terminal_value
			},
			{
				title: state.departure_gate_title,
				value: state.departure_gate_value
			}
		];
		const arrivalDetails = [
			{
				title: state.arrival_detail_title,
				value: state.arrival_detail_value
			},
			{
				title: state.arrival_terminal_title,
				value: state.arrival_terminal_value
			},
			{
				title: state.arrival_gate_title,
				value: state.arrival_gate_value
			}
		];
		return /* @__PURE__ */ __dil.jsx("card", {
			background: "surface",
			size: "full",
			padding: 0
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 0 }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			flex: "auto",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			truncate: true
		}, state.header_label)), /* @__PURE__ */ __dil.jsx("badge", {
			color: state.badge_color,
			variant: "soft",
			size: "sm"
		}, state.badge_label)), /* @__PURE__ */ __dil.jsx("col", { gap: 1.5 }, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: isDesktop ? "xl" : "lg",
			weight: "medium"
		}, state.origin_code), /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			align: "center",
			justify: "center",
			gap: 0,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "center",
			width: "100%",
			height: 28
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: "400px",
			height: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			justify: "between",
			width: "100%",
			height: "100%"
		}, progressDots.flatMap((item) => [!state.show_progress_plane && state.progress_center_label !== "" && item === progressDots.length / 2 && /* @__PURE__ */ __dil.jsx("box", {
			key: "duration",
			background: "surface",
			padding: { x: 1 },
			flex: "none"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			weight: "medium"
		}, state.progress_center_label)), state.show_progress_plane && progressLeft !== "" && item === completedDots ? /* @__PURE__ */ __dil.jsx("box", {
			key: item,
			width: 4,
			height: 28,
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: 28,
			height: 28,
			align: "center",
			justify: "center",
			background: "surface",
			radius: "full"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "plane",
			size: "2xl",
			color: "default"
		}))) : /* @__PURE__ */ __dil.jsx("box", {
			key: item,
			width: 4,
			height: 4,
			radius: "full",
			background: item < completedDots ? "surface-inverted" : "border-subtle"
		})]))))), /* @__PURE__ */ __dil.jsx("title", {
			size: isDesktop ? "xl" : "lg",
			weight: "medium",
			textAlign: "end"
		}, state.destination_code)), /* @__PURE__ */ __dil.jsx("row", {
			align: "start",
			gap: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			maxLines: 2
		}, state.origin_city), /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			gap: 1,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: isDesktop ? "md" : "sm",
			weight: "medium",
			color: state.departure_time_color
		}, state.departure_time_label), state.departure_scheduled_time_label !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			lineThrough: true
		}, state.departure_scheduled_time_label))), /* @__PURE__ */ __dil.jsx("col", {
			gap: .5,
			align: "end",
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			textAlign: "end",
			maxLines: 2
		}, state.destination_city), /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			gap: 1,
			wrap: "wrap",
			justify: "end"
		}, state.arrival_scheduled_time_label !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary",
			textAlign: "end",
			lineThrough: true
		}, state.arrival_scheduled_time_label), /* @__PURE__ */ __dil.jsx("text", {
			size: isDesktop ? "md" : "sm",
			weight: "medium",
			textAlign: "end",
			color: state.arrival_time_color
		}, state.arrival_time_label))))))), /* @__PURE__ */ __dil.jsx("divider", {
			flush: true,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			y: 3
		} }, /* @__PURE__ */ __dil.jsx("row", {
			align: "baseline",
			gap: .5,
			wrap: "wrap"
		}, state.summary_lead !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.summary_lead), state.summary_emphasis !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium",
			color: state.summary_emphasis_color
		}, state.summary_emphasis), state.summary_trail !== "" && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.summary_trail))), /* @__PURE__ */ __dil.jsx("divider", {
			flush: true,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("grid", {
			columns: isDesktop ? 2 : 1,
			gap: isDesktop ? 8 : 4
		}, /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx(FlightDetails, {
			details: departureDetails,
			isDesktop,
			arrival: false
		})), /* @__PURE__ */ __dil.jsx("grid-item", null, /* @__PURE__ */ __dil.jsx(FlightDetails, {
			details: arrivalDetails,
			isDesktop,
			arrival: true
		})))), /* @__PURE__ */ __dil.jsx("divider", {
			flush: true,
			color: "subtle"
		}), /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: 5,
			y: 4
		} }, /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, state.attribution_label))));
	}
	function FlightTracker(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("FlightTracker", props);
		if (state?.is_loading === true || !state && !resolutionComplete) return /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 376
		});
		if (!state) return props.fallback ?? null;
		return /* @__PURE__ */ __dil.jsx(ResolvedFlightTracker, { state });
	}

//#endregion
return FlightTracker;
})();
return __dilDefaultExport;
})()))`,FollowUp:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFollowUp(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUp",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FollowUp",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUp",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUp",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FollowUp", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFollowUp, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region FollowUp.dil.tsx
	function FollowUp({ query, source, value }) {
		const shown = DIL.useRef(false);
		const shouldLog = !source || source === "inline_followup" || source === "conversation_followup_suggestions_v1" || source === "scheduled_task_followups_v1";
		const presentation = DIL.useAppData((appData) => appData.opGenui?.scheduledTaskFollowUpPresentation);
		const recordInteraction = (interaction) => {
			if (!shouldLog) return;
			try {
				GenUI.dispatchAction({
					handler: "client",
					type: "log_event",
					payload: {
						event_name: "chatgpt_conversation_followup_suggestion_interaction",
						event_data: {
							interaction_type: interaction,
							followup_kind: "regular",
							followup_source: source === "conversation_followup_suggestions_v1" ? "conversation_followup_suggestions_v1" : "inline_followup",
							followup_presentation_mode: "inline"
						}
					}
				});
			} catch {}
		};
		const recordShown = () => {
			if (shown.current || !value.trim() || !shouldLog) return;
			shown.current = true;
			recordInteraction("shown");
		};
		DIL.useEffect(() => {
			recordShown();
		}, [source, value]);
		const issueFollowUp = () => {
			const result = GenUI.issueNewTurn(query ?? value, { append_to_current_leaf: true });
			recordShown();
			recordInteraction("clicked");
			return result;
		};
		if (presentation === "pills" || presentation === "stacked_pills") return /* @__PURE__ */ __dil.jsx("pressable", {
			width: "fit-content",
			maxWidth: "100%",
			minHeight: 48,
			direction: "row",
			align: "center",
			padding: {
				x: 4,
				y: 3
			},
			radius: "full",
			background: "surface-secondary",
			variant: "ghost",
			onClick: issueFollowUp
		}, /* @__PURE__ */ __dil.jsx("box", {
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ __dil.jsx("text", null, value)));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			inline: true,
			onClick: issueFollowUp
		}, /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-curved"
		}), " ", /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			underline: "dotted"
		}, value)));
	}

//#endregion
return FollowUp;
})();
return __dilDefaultExport;
})()))`,FollowUpActionBar:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentFollowUpActionBar(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUpActionBar",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "FollowUpActionBar",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUpActionBar",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "FollowUpActionBar",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "FollowUpActionBar", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentFollowUpActionBar, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region internal/FollowUpActionBar.dil.tsx
	function FollowUpFooter({ actions, onAction, outerPadding = 5 }) {
		const isSm = DIL.useBreakpoint("sm");
		const isXs = DIL.useBreakpoint("xs");
		const visibleActions = actions.slice(0, isSm ? 3 : isXs ? 2 : 1);
		return actions.length ? /* @__PURE__ */ __dil.jsx("box", { width: "100%" }, /* @__PURE__ */ __dil.jsx("box", { padding: {
			x: outerPadding,
			y: 3
		} }, /* @__PURE__ */ __dil.jsx("divider", null)), /* @__PURE__ */ __dil.jsx("box", { padding: {
			bottom: outerPadding,
			left: outerPadding,
			right: outerPadding
		} }, /* @__PURE__ */ __dil.jsx("box", {
			background: "surface-secondary",
			border: {
				color: "alpha-12",
				size: 1
			},
			padding: {
				x: .5,
				y: .5
			},
			radius: "lg"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			ariaLabel: "Suggested follow-ups",
			gap: 0,
			role: "group",
			width: "100%"
		}, visibleActions.map((action, index) => /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			direction: "row",
			flex: 1,
			key: \`\${action.query}:\${index}\`,
			minWidth: 0
		}, index > 0 ? /* @__PURE__ */ __dil.jsx("box", {
			ariaHidden: true,
			background: "alpha-10",
			height: 24,
			width: 1
		}) : null, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			flex: 1,
			justify: "center",
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("button", {
			block: true,
			color: "secondary",
			onClick: () => onAction(action),
			size: "sm",
			variant: "ghost"
		}, action.icon ? /* @__PURE__ */ __dil.jsx("icon", { name: action.icon }) : null, " ", action.label)))))))) : null;
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
//#region FollowUpActionBar.dil.tsx
	function FollowUpActionBar(props) {
		const componentKey = DIL.useAppData((appData) => typeof props.__resolutionId === "string" && appData.opGenui?.componentResults?.[props.__resolutionId] != null ? props.__resolutionId : componentDataKey("FollowUpActionBar", props));
		const { resolutionComplete, state } = useResolvedComponentResult("FollowUpActionBar", {
			...props,
			__resolutionId: componentKey
		});
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 64
		});
		if (!state.actions.length) return null;
		const contentReferenceType = state.content_reference_type ?? state.contentReferenceType;
		return state.presentation === "wrapped_pills" ? /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: "Suggested follow-ups",
			gap: 2,
			width: "100%",
			align: "start"
		}, state.actions.map((action, index) => /* @__PURE__ */ __dil.jsx("box", {
			key: action.query + "|" + action.label + "|" + index,
			width: "fit-content",
			height: 40,
			flex: "0 1 auto",
			...GenUI.logEvent ? {
				onVisibleWhen: action.onboarding_action_id != null && action.onboarding_action_id !== "",
				onVisible: () => GenUI.logEvent?.({
					event_name: "chatgpt_conversational_onboarding_action_shown",
					statsig_event_name: "chatgpt_conversational_onboarding_action_shown",
					event_data: {
						renderer: action.onboarding_renderer,
						level: action.onboarding_level,
						use_case: action.onboarding_use_case,
						action_id: action.onboarding_action_id,
						source: action.source
					}
				})
			} : {}
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			width: "fit-content",
			height: 40,
			flex: "0 1 auto",
			padding: {
				top: 2,
				right: 4,
				bottom: 2,
				left: 2
			},
			radius: "full",
			border: {
				size: 1,
				color: "default"
			},
			background: "surface",
			clip: true,
			ariaLabel: action.label,
			onClick: () => {
				const loadingBehavior = action.onboarding_action_id || action.source === "image_gen_follow_up_dil_buttons" ? "none" : "auto";
				const options = {
					append_to_current_leaf: true,
					event_source: action.onboarding_client_action !== void 0 ? "conversational_onboarding" : null,
					event_name: action.onboarding_action_id ? "chatgpt_conversational_onboarding_action_clicked" : null,
					statsig_event_name: action.onboarding_action_id ? "chatgpt_conversational_onboarding_action_clicked" : null,
					event_data: {
						renderer: action.onboarding_renderer,
						level: action.onboarding_level,
						use_case: action.onboarding_use_case,
						action_id: action.onboarding_action_id,
						source: action.source
					}
				};
				const followupMetadata = action.source ? {
					followups_v2_followup_clicked: true,
					followups_v2_followup_source: action.source
				} : void 0;
				if (action.onboarding_client_action === "open_image_generation_composer" || action.onboarding_client_action === "start_voice_mode") GenUI.dispatchAction({
					handler: "client",
					type: action.onboarding_client_action,
					loadingBehavior,
					payload: {
						...options,
						...action.onboarding_client_action === "start_voice_mode" ? {
							component_key: componentKey,
							action_index: index
						} : {},
						query: action.query,
						message_metadata: followupMetadata ?? {}
					}
				});
				else GenUI.issueNewTurn(action.query, {
					...options,
					followup_metadata: followupMetadata
				});
			}
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			width: "100%",
			height: "100%"
		}, action.icon_url ? /* @__PURE__ */ __dil.jsx("box", {
			size: 24,
			flex: "0 0 auto"
		}, /* @__PURE__ */ __dil.jsx("image", {
			src: action.icon_url,
			alt: "",
			fit: "contain",
			width: 24,
			height: 24,
			hideOnFailure: true
		})) : null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "primary",
			maxLines: 1
		}, action.label)))))) : /* @__PURE__ */ __dil.jsx(FollowUpFooter, {
			actions: state.actions,
			onAction: (action) => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: {
					query: action.query,
					prompt: action.query,
					event_name: "chatgpt_widget_action",
					event_data: {
						widget_affordance: "OPTION",
						widget_action_target: "follow_up",
						widget_action_value: action.label,
						surface_location: "RESPONSE",
						...contentReferenceType ? { content_reference_type: contentReferenceType } : {}
					}
				}
			})
		});
	}

//#endregion
return FollowUpActionBar;
})();
return __dilDefaultExport;
})()))`,GenImage:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentGenImage(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "GenImage",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "GenImage",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "GenImage",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "GenImage",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "GenImage", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentGenImage, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region shared.dil.ts
	function hasImageSource(image) {
		return Boolean(image?.content_url || image?.thumbnail_url);
	}
	function normalizedAspectRatio(value) {
		return value?.replace(":", " / ");
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
//#region GenImage.dil.tsx
/** Mirror v1: only pixel max-widths supply a non-shrinking preferred width. */
	function hasPreferredPixelWidth(value) {
		if (typeof value === "number") return Number.isFinite(value) && value >= 0;
		return typeof value === "string" && /^\\d+(?:\\.\\d+)?(?:px)?$/.test(value.trim());
	}
	/** Mirror the v1 intrinsic frame while image resolution is still pending. */
	function unresolvedAspectWidth(maxHeight, aspectRatio) {
		return \`calc(\${typeof maxHeight === "number" ? \`\${maxHeight}px\` : /^\\d+(?:\\.\\d+)?$/.test(maxHeight.trim()) ? \`\${maxHeight.trim()}px\` : maxHeight.trim()} * \${normalizedAspectRatio(aspectRatio)})\`;
	}
	function GenImage(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("GenImage", props);
		const isLoading = state?.is_loading ?? !resolutionComplete;
		const image = state?.images?.[0];
		const hasImage = hasImageSource(image);
		if (!isLoading && !hasImage && (!props.fallback || state == null)) return /* @__PURE__ */ __dil.jsx("box", { height: 0 });
		const frameMaxWidth = state?.frame_max_width ?? props.maxWidth;
		const frameAspectRatio = state?.frame_aspect_ratio ?? props.aspectRatio;
		const presentation = state?.presentation;
		const hasAuthoredDimensions = props.width != null || props.height != null;
		const unresolvedSize = isLoading && state == null && props.aspectRatio == null && !hasAuthoredDimensions ? props.maxHeight ?? 220 : void 0;
		const unresolvedWidth = isLoading && state == null && props.aspectRatio != null ? unresolvedAspectWidth(props.maxHeight ?? 220, props.aspectRatio) : unresolvedSize;
		const imageElement = /* @__PURE__ */ __dil.jsx("search-image", {
			alt: image?.title ?? "",
			aspectRatio: frameAspectRatio,
			fallback: props.fallback,
			fit: state?.image_fit ?? "cover",
			height: "100%",
			hideOnFailure: true,
			radius: "none",
			searchImage: image,
			width: "100%"
		});
		return /* @__PURE__ */ __dil.jsx("box", {
			imageFrame: true,
			ariaLabel: isLoading ? "Loading image" : void 0,
			aspectRatio: frameAspectRatio,
			background: "surface-tertiary",
			border: (presentation?.frame ?? props.frame ?? true) && !isLoading && hasImage ? {
				color: "subtle",
				size: 1
			} : void 0,
			clip: true,
			flex: hasPreferredPixelWidth(frameMaxWidth) ? "0 0 auto" : void 0,
			height: state?.frame_height ?? props.height ?? (props.width != null || frameAspectRatio != null ? void 0 : unresolvedSize ?? "100%"),
			maxHeight: state?.max_height !== void 0 ? state.max_height ?? void 0 : props.maxHeight ?? (hasAuthoredDimensions ? void 0 : unresolvedSize),
			maxWidth: frameMaxWidth,
			minHeight: presentation?.min_height ?? props.minHeight,
			minWidth: presentation?.min_width ?? props.minWidth ?? 0,
			radius: presentation?.radius ?? props.radius ?? "xl",
			role: isLoading ? "status" : void 0,
			width: state?.frame_width ?? props.width ?? unresolvedWidth ?? "100%"
		}, !isLoading && !hasImage ? props.fallback : props.onClickAction === null ? imageElement : /* @__PURE__ */ __dil.jsx(LinkImpression, {
			action: props.onClickAction || state?.default_on_click_action,
			disabled: isLoading,
			width: "100%",
			height: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: image?.title ? \`Open \${image.title}\` : "Open image",
			background: "transparent",
			disabled: isLoading,
			height: "100%",
			onClick: () => {
				const action = props.onClickAction || state?.default_on_click_action;
				const payload = action?.payload;
				if (action?.type === "issue_new_turn" && (action.handler === void 0 || action.handler === "client") && action.fallbackAction === void 0 && action.loadingBehavior === void 0 && (payload?.action ?? action.type) === "issue_new_turn" && payload?.event_source === void 0 && (payload?.prompt == null || payload.prompt === payload.query) && typeof payload?.query === "string") GenUI.issueNewTurn(payload.query, {
					append_to_current_leaf: payload.append_to_current_leaf === true,
					event_name: payload.event_name,
					statsig_event_name: payload.statsig_event_name,
					event_data: payload.event_data
				});
				else if (action) GenUI.dispatchAction(action);
				else GenUI.openImageLightbox(state?.images ?? [], 0);
			},
			radius: "none",
			width: "100%"
		}, imageElement)));
	}

//#endregion
return GenImage;
})();
return __dilDefaultExport;
})()))`,Image:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentImage(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "Image",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "Image",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Image",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Image",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "Image", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentImage, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


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
//#region Image.dil.tsx
/** Resolved image presentation with the host's standard single-image viewer. */
	function Image(props) {
		const { image: input, interactive = true, children, __state, __resolutionId, ...presentation } = props;
		const resolved = useResolvedComponentResult("Image", props);
		const isReference = typeof input === "string" && /^turn\\d+image\\d+$/.test(input);
		if (isReference && !__resolutionId && resolved.status === "failed") throw new Error("Image references must be literals, such as image=\\"turn0image0\\". Dynamic image values must be resolved image records or host-approved URLs.");
		const image = typeof input === "string" ? isReference ? resolved.state?.image : {
			content_url: input,
			thumbnail_url: input,
			url: input
		} : input ?? resolved.state?.image;
		const alt = props.alt ?? image?.title ?? "";
		const action = interactive && hasImageSource(image) ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: alt ? \`Open \${alt}\` : "Open image",
			background: "transparent",
			height: "100%",
			onClick: () => GenUI.openImageLightbox([image], 0),
			radius: "none",
			width: "100%"
		}, children) : children;
		return typeof input === "string" && !isReference ? /* @__PURE__ */ __dil.jsx("image", {
			...presentation,
			alt,
			src: input
		}, action) : /* @__PURE__ */ __dil.jsx("search-image", {
			...presentation,
			alt,
			searchImage: image
		}, action);
	}

//#endregion
return Image;
})();
return __dilDefaultExport;
})()))`,LearningVizDil:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentLearningVizDil(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "LearningVizDil",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "LearningVizDil",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "LearningVizDil",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "LearningVizDil",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "LearningVizDil", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentLearningVizDil, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region learning-viz-dil/lottie-playback.dil.ts
	function positionAt(playback, now, duration) {
		const elapsed = playback.startedAt === null ? 0 : (now - playback.startedAt) / 1e3;
		return Math.min(duration, playback.position + Math.max(0, elapsed));
	}
	function useLottiePlayback(source, animated) {
		const duration = (Number(source.op) - Number(source.ip)) / Number(source.fr);
		const [playback, setPlayback] = DIL.useState(() => ({
			position: 0,
			startedAt: animated ? Date.now() : null
		}));
		const now = DIL.useNow(playback.startedAt !== null);
		const playing = playback.startedAt !== null && positionAt(playback, now, duration) < duration;
		DIL.useEffect(() => {
			if (playback.startedAt !== null && !playing) setPlayback({
				position: duration,
				startedAt: null
			});
		}, [
			playing,
			playback.startedAt,
			duration
		]);
		const currentTime = DIL.useMemo(() => playback.startedAt !== null && !playing ? duration : positionAt(playback, Date.now(), duration), [
			source,
			playback,
			playing,
			duration
		]);
		const toggle = () => {
			const timestamp = Date.now();
			setPlayback((previous) => {
				const position = positionAt(previous, timestamp, duration);
				return previous.startedAt !== null && position < duration ? {
					position,
					startedAt: null
				} : {
					position: position === duration ? 0 : position,
					startedAt: timestamp
				};
			});
		};
		return {
			playing,
			currentTime,
			toggle
		};
	}

//#endregion
//#region learning-viz-dil/lottie-diagram.dil.tsx
	function LottieDiagram({ data }) {
		const { theme } = DIL.useTheme();
		const playback = useLottiePlayback(data.src[theme], data.animated);
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100vw",
			maxWidth: "100%",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", {
			width: "100%",
			maxWidth: 480
		}, /* @__PURE__ */ __dil.jsx("lottie", {
			key: theme,
			src: data.src,
			alt: data.alt,
			width: "100%",
			aspectRatio: "8/5",
			currentTime: playback.currentTime,
			advanceRate: playback.playing ? 1 : 0,
			loop: false
		})), data.animated ? /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			maxWidth: 480,
			align: "end",
			justify: "end",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", { padding: {
			bottom: 3,
			right: 3
		} }, /* @__PURE__ */ __dil.jsx("pressable", {
			onClick: playback.toggle,
			ariaLabel: playback.playing ? data.pause_label : data.play_label,
			size: 36,
			radius: "full",
			align: "center",
			justify: "center"
		}, /* @__PURE__ */ __dil.jsx("box", {
			key: theme,
			size: 24,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: playback.playing ? "pause-sm" : "play-sm",
			size: "2xl",
			color: theme === "dark" ? "#ffffff" : "#0d0d0d"
		}))))) : null);
	}

//#endregion
//#region learning-viz-dil/feedback.dil.tsx
	function LearningVizFeedback({ labels }) {
		const appData = DIL.useAppData();
		const form = DIL.useRef({
			text: "",
			reasons: [],
			status: "closed"
		});
		const [, render] = DIL.useState(0);
		const mounted = DIL.useRef(true);
		DIL.useEffect(() => {
			mounted.current = true;
			return () => {
				mounted.current = false;
			};
		}, []);
		const ready = appData.opGenui?.isShared !== true && appData.opGenui?.nativeServerActions?.ready === true;
		function update(patch) {
			if (!mounted.current) return;
			form.current = {
				...form.current,
				...patch
			};
			render((previous) => previous + 1);
		}
		async function submit() {
			const { status: status$1, text: text$1, reasons: reasons$1 } = form.current;
			if (!ready || status$1 === "sending" || !text$1.trim()) return;
			update({ status: "sending" });
			try {
				const result = await GenUI.dispatchAction({
					handler: "server",
					type: "learning_viz_dil_feedback",
					payload: {
						feedback: text$1.trim(),
						checked_reasons: reasons$1
					}
				});
				if (result?.status !== "success" || result.response !== void 0 && result.response.status !== "success") {
					update({ status: "error" });
					return;
				}
				update({
					status: "sent",
					text: "",
					reasons: []
				});
			} catch {
				update({ status: "error" });
			}
		}
		if (!ready) return null;
		const { status, text, reasons } = form.current;
		const sending = status === "sending";
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			maxWidth: 480,
			gap: 2
		}, status === "sent" ? /* @__PURE__ */ __dil.jsx("text", {
			size: "xs",
			color: "secondary"
		}, labels.success) : status !== "closed" ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			padding: 3
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "bold"
		}, labels.title), labels.description && /* @__PURE__ */ __dil.jsx("text", { size: "xs" }, labels.description), /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, (labels.reasons ?? []).map((reason) => /* @__PURE__ */ __dil.jsx("checkbox", {
			key: reason.value,
			name: "learning-visualization-feedback-reason",
			value: reason.value,
			label: reason.label,
			shape: "square",
			lineThrough: false,
			checked: reasons.includes(reason.value),
			disabled: sending,
			onChange: (checked) => update({ reasons: checked ? [...form.current.reasons, reason.value] : form.current.reasons.filter((value) => value !== reason.value) })
		}))), /* @__PURE__ */ __dil.jsx("label", null, labels.comment), /* @__PURE__ */ __dil.jsx("textarea", {
			name: "learning-visualization-feedback",
			rows: 3,
			value: text,
			placeholder: reasons.length > 0 ? labels.placeholder_with_reasons : labels.placeholder,
			disabled: sending,
			onChange: (value) => update({ text: value.slice(0, 1600) })
		}), status === "error" && /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, labels.error), /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			variant: "ghost",
			disabled: sending,
			onClick: () => update({ status: "closed" })
		}, labels.cancel), /* @__PURE__ */ __dil.jsx("button", {
			size: "sm",
			disabled: sending || !text.trim(),
			onClick: submit
		}, sending ? labels.sending : labels.send))) : /* @__PURE__ */ __dil.jsx("row", { justify: "end" }, /* @__PURE__ */ __dil.jsx("button", {
			size: "xs",
			variant: "ghost",
			color: "secondary",
			onClick: () => update({ status: "editing" })
		}, labels.open)));
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
//#region LearningVizDil.dil.tsx
	function LearningVizDil(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("LearningVizDil", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 300
		});
		return /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "center",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx(LottieDiagram, { data: state.block_data }), state.feedback_labels && /* @__PURE__ */ __dil.jsx(LearningVizFeedback, { labels: state.feedback_labels }));
	}

//#endregion
return LearningVizDil;
})();
return __dilDefaultExport;
})()))`,Link:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentLink(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "Link",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "Link",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Link",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "Link",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "Link", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentLink, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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

//#endregion
//#region internal/ImpressionLink.dil.tsx
/** Preserve inline layout even when the renderer cannot observe link visibility. */
	function ImpressionLink({ href, onClick, children }) {
		const visibility = useLinkImpression({ url: href });
		return /* @__PURE__ */ __dil.jsx("link", {
			href,
			onClick,
			...visibility
		}, children);
	}

//#endregion
//#region link-children.dil.ts
	function hasLinkChildren(children) {
		if (Array.isArray(children)) return children.some(hasLinkChildren);
		return typeof children === "string" ? children.trim().length > 0 : children != null && typeof children !== "boolean";
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
//#region Link.dil.tsx
	function Link(props) {
		const opGenui = DIL.useAppData((data) => data.opGenui);
		const isMobile = DIL.useIsMobile();
		const linkLabels = DIL.useAppData((appData) => appData.opGenui?.linkLabels);
		const hostLinkUrls = DIL.useAppData((appData) => appData.opGenui?.hostLinkUrls);
		const hasChildren = hasLinkChildren(props.children);
		const needsResolution = !(typeof props.url === "string" && props.url.length > 0 && (typeof props.title === "string" && props.title.length > 0 || hasChildren));
		const { resolutionComplete, state } = useResolvedComponentResult("Link", props);
		if (!state && needsResolution) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading link" });
		const url = state?.url ?? props.url ?? "";
		const isContact = typeof url === "string" && /^(tel|mailto):/i.test(url);
		const candidateTitle = state?.title ?? props.title;
		const fallbackTitle = typeof candidateTitle === "string" && candidateTitle.trim() ? candidateTitle : url || "Link";
		const visibleLabel = hasChildren ? props.children : fallbackTitle;
		if (isContact && opGenui?.contactLinkMode !== "action") return opGenui?.contactLinkMode === "anchor" ? /* @__PURE__ */ __dil.jsx("link", { href: url }, visibleLabel) : /* @__PURE__ */ __dil.jsx("text", { inline: true }, visibleLabel);
		const openUrl = () => {
			if (isContact) {
				GenUI.dispatchAction({
					handler: "client",
					type: "open_url",
					payload: { url }
				});
				return;
			}
			const metadata = typeof url === "string" ? opGenui?.linkMetadataByUrl?.[url.trim()] : void 0;
			if (metadata?.activationEvent && metadata.activationSurface && metadata.activationSurface === opGenui?.interactionSurface) GenUI.logEvent?.({ event_name: metadata.activationEvent });
			GenUI.openUrl(url);
		};
		if (!isContact && hostLinkUrls?.includes(url)) return /* @__PURE__ */ __dil.jsx("link", { href: url }, visibleLabel);
		const title = hasChildren ? "" : fallbackTitle;
		if (!isMobile && typeof url === "string" && /^https?:\\/\\//i.test(url)) return /* @__PURE__ */ __dil.jsx("popover", {
			hoverOpenDelay: 150,
			showOnHover: true
		}, /* @__PURE__ */ __dil.jsx("popover-trigger", { role: "presentation" }, /* @__PURE__ */ __dil.jsx(ImpressionLink, {
			href: url,
			onClick: openUrl
		}, hasChildren ? props.children : title)), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "center",
			side: "top",
			sideOffset: 8
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			maxWidth: "100%",
			minHeight: 40,
			padding: {
				x: 3,
				y: 1.5
			},
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 16,
			url
		}), /* @__PURE__ */ __dil.jsx("box", { minWidth: 0 }, /* @__PURE__ */ __dil.jsx("link", {
			href: url,
			onClick: openUrl,
			title: url
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "primary",
			inline: true,
			size: "xs"
		}, url.length > 40 ? \`\${url.slice(0, 40)}...\` : url))), /* @__PURE__ */ __dil.jsx("tooltip", { content: linkLabels?.copy ?? "Copy" }, /* @__PURE__ */ __dil.jsx("button", {
			color: "secondary",
			label: linkLabels?.copyUrl ?? "Copy URL",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "copy",
				payload: {
					value: url,
					format: "url"
				}
			}),
			pill: false,
			size: "xs",
			uniform: true,
			variant: "ghost"
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "copy",
			size: "sm"
		}))))));
		if (typeof url === "string" && /^https?:\\/\\//i.test(url)) return /* @__PURE__ */ __dil.jsx(ImpressionLink, {
			href: url,
			onClick: openUrl
		}, hasChildren ? props.children : title);
		const finalWordStart = /\\S+\\s*$/u.exec(title)?.index ?? 0;
		const leadingTitle = title.slice(0, finalWordStart);
		const trailingTitle = title.slice(finalWordStart);
		const label = hasChildren ? /* @__PURE__ */ __dil.jsx("text", { inline: true }, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, props.children), /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-up-right-link"
		})) : /* @__PURE__ */ __dil.jsx("text", { inline: true }, leadingTitle ? /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, leadingTitle) : null, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			width: "max-content"
		}, /* @__PURE__ */ __dil.jsx("text", {
			color: "inherit",
			inline: true,
			underline: "dotted"
		}, trailingTitle), /* @__PURE__ */ __dil.jsx("icon", {
			inline: true,
			name: "arrow-up-right-link"
		})));
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: hasChildren ? void 0 : \`Open \${title}\`,
			inline: true,
			onClick: openUrl,
			role: "link"
		}, label);
	}

//#endregion
return Link;
})();
return __dilDefaultExport;
})()))`,LinkCard:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentLinkCard(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "LinkCard",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "LinkCard",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "LinkCard",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "LinkCard",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "LinkCard", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentLinkCard, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region LinkCard.dil.tsx
	function LinkCard(props) {
		const needsResolution = !props.url || !props.title;
		const { resolutionComplete, state } = useResolvedComponentResult("LinkCard", props);
		if (!state && needsResolution) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading link" });
		const title = state?.title ?? props.title ?? props.url ?? "Link";
		const url = state?.url ?? props.url ?? "";
		const source = state?.source_label ?? props.subtitle;
		const snippet = state?.snippet ?? props.snippet;
		return /* @__PURE__ */ __dil.jsx(LinkImpression, { url }, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${title}\`,
			onClick: () => GenUI.openUrl(url)
		}, /* @__PURE__ */ __dil.jsx("card", {
			gap: 2,
			size: "sm"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			minWidth: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 20,
			url
		}), source ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "xs",
			truncate: true
		}, source) : null), /* @__PURE__ */ __dil.jsx("text", {
			color: "prose",
			maxLines: 2,
			size: "sm",
			truncate: true,
			weight: "medium"
		}, title), snippet ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 2,
			size: "sm",
			truncate: true
		}, snippet) : null)));
	}

//#endregion
return LinkCard;
})();
return __dilDefaultExport;
})()))`,MapBox:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentMapBox(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "MapBox",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "MapBox",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MapBox",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MapBox",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "MapBox", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentMapBox, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region map-preview/MapPreview.dil.tsx
	function MapPreview(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("MapBox", props);
		const supported = DIL.useAppData((data) => data.opGenui?.supportedClientActions?.includes("open_place_map"));
		const legacyThumbnailHost = DIL.useAppData((data) => data.opGenui?.legacyMapThumbnails === true);
		const [hovered, setHovered] = DIL.useState(false);
		const { isDark } = DIL.useTheme();
		if (!state && !resolutionComplete) return /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 120,
			height: 120
		});
		const point = state?.points[0];
		if (!point) return null;
		const key = props.__resolutionId ?? componentDataKey("MapBox", props);
		const theme = isDark ? "dark" : "light";
		const legacy = state?.thumbnail_urls === void 0;
		const src = legacy ? \`place-map:\${theme}:\${key}\` : state.thumbnail_urls?.[theme];
		const image = legacy && legacyThumbnailHost ? /* @__PURE__ */ __dil.jsx("legacy-map-thumbnail", {
			componentKey: key,
			theme
		}) : src ? /* @__PURE__ */ __dil.jsx("image", {
			src,
			alt: "",
			width: 120,
			height: 120,
			fit: "cover",
			radius: "xl",
			hideOnFailure: true
		}) : null;
		const tile = /* @__PURE__ */ __dil.jsx("stack", null, /* @__PURE__ */ __dil.jsx("box", {
			width: 120,
			height: 120,
			radius: "xl",
			background: "surface-secondary",
			imageObservation: image ? "active" : "unavailable",
			imageObservationType: "map-box",
			imageObservationAction: supported ? "enabled" : "disabled"
		}, image), /* @__PURE__ */ __dil.jsx("stack-item", {
			placement: "center-center",
			decorative: true
		}, /* @__PURE__ */ __dil.jsx("box", {
			background: "surface",
			radius: "full",
			padding: 1.5,
			border: {
				size: hovered ? 2 : 1,
				color: hovered ? "strong" : "default"
			}
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "map-pin",
			size: "lg"
		}))));
		return /* @__PURE__ */ __dil.jsx("stack", null, supported ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open map for \${point.name}\`,
			width: 120,
			height: 120,
			radius: "xl",
			focusStyle: "inset",
			onHover: setHovered,
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_place_map",
				payload: { component_key: key }
			})
		}, tile) : /* @__PURE__ */ __dil.jsx("box", {
			role: "img",
			ariaLabel: \`Map of \${point.name}\`
		}, tile), /* @__PURE__ */ __dil.jsx("stack-item", {
			placement: "end-end",
			inset: 1
		}, /* @__PURE__ */ __dil.jsx("popover", null, /* @__PURE__ */ __dil.jsx("popover-trigger", null, /* @__PURE__ */ __dil.jsx("box", {
			ariaLabel: "Map information",
			role: "img",
			radius: "full",
			background: "surface",
			padding: 1
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "info-circle",
			size: "sm",
			color: "secondary"
		}))), /* @__PURE__ */ __dil.jsx("popover-content", {
			align: "end",
			side: "bottom",
			sideOffset: 4
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			padding: 2
		}, /* @__PURE__ */ __dil.jsx("link", { href: "https://www.mapbox.com/about/maps" }, "© Mapbox"), /* @__PURE__ */ __dil.jsx("link", { href: "https://www.openstreetmap.org/copyright" }, "© OpenStreetMap"), /* @__PURE__ */ __dil.jsx("link", { href: "https://apps.mapbox.com/feedback/" }, "Improve this map"))))));
	}

//#endregion
return MapPreview;
})();
return __dilDefaultExport;
})()))`,MediaFallback:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentMediaFallback(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "MediaFallback",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "MediaFallback",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MediaFallback",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MediaFallback",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "MediaFallback", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentMediaFallback, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region MediaFallback.dil.tsx
	function MediaFallback({ children, height = "100%", width = "100%" }) {
		return /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			background: "surface-tertiary",
			height,
			justify: "center",
			width
		}, children);
	}

//#endregion
return MediaFallback;
})();
return __dilDefaultExport;
})()))`,MemoryCite:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentMemoryCite(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "MemoryCite",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "MemoryCite",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MemoryCite",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MemoryCite",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "MemoryCite", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentMemoryCite, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region MemoryCite.dil.tsx
	function MemoryCite() {
		return null;
	}

//#endregion
return MemoryCite;
})();
return __dilDefaultExport;
})()))`,MessageReaction:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentMessageReaction(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "MessageReaction",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "MessageReaction",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MessageReaction",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "MessageReaction",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "MessageReaction", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentMessageReaction, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region MessageReaction.dil.tsx
	function MessageReaction() {
		return null;
	}

//#endregion
return MessageReaction;
})();
return __dilDefaultExport;
})()))`,NewsCarousel:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentNewsCarousel(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "NewsCarousel",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "NewsCarousel",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "NewsCarousel",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "NewsCarousel",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "NewsCarousel", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentNewsCarousel, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
//#region NewsCarousel.dil.tsx
	function NewsCarousel(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("NewsCarousel", props);
		const isSm = DIL.useBreakpoint("sm");
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading news" });
		const items = state.items ?? [];
		return items.length ? /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			width: "100%"
		}, state.title ? /* @__PURE__ */ __dil.jsx("text", { strong: true }, state.title) : null, /* @__PURE__ */ __dil.jsx("carousel", {
			ariaLabel: "News",
			gap: 4
		}, items.map((item) => /* @__PURE__ */ __dil.jsx("carousel-item", {
			background: "surface-elevated",
			key: item.ref,
			padding: 0,
			variant: "outline",
			width: isSm ? "31.5%" : "47.5%"
		}, /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url: item.url,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("pressable", {
			onClick: () => GenUI.openUrl(item.url),
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 4,
			height: "100%",
			padding: { bottom: 6 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			align: "center",
			background: "surface-secondary",
			clip: true,
			height: "144px",
			justify: "center",
			width: "100%"
		}, item.thumbnail_url ? /* @__PURE__ */ __dil.jsx("image", {
			alt: item.title,
			fit: "cover",
			height: "100%",
			radius: "none",
			src: item.thumbnail_url,
			width: "100%"
		}) : /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 40,
			url: item.url
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			padding: { x: 4 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			frame: true,
			size: 16,
			url: item.url
		}), /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 1,
			size: "xs",
			truncate: true
		}, item.source_label)), /* @__PURE__ */ __dil.jsx("text", {
			maxLines: 5,
			size: "sm"
		}, item.title), item.date_label ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "xs"
		}, item.date_label) : null)))))))) : null;
	}

//#endregion
return NewsCarousel;
})();
return __dilDefaultExport;
})()))`,ProductCard:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentProductCard(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "ProductCard",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "ProductCard",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "ProductCard",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "ProductCard",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "ProductCard", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentProductCard, unscopedComponent);
  })((DIL, GenUI) => ((() => {
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
	/** Preserve native inline/single-card impression timing without changing layout. */
	function useProductShownOnRender(product) {
		const currentProduct = DIL.useRef(product);
		currentProduct.current = product;
		const shownProductId = DIL.useRef(void 0);
		DIL.useEffect(() => {
			const current = currentProduct.current;
			if (!GenUI.logEvent || !current || shownProductId.current === current.productId) return;
			shownProductId.current = current.productId;
			logProductShown(current);
		}, [product?.productId]);
	}

//#endregion
//#region ProductCard.dil.tsx
	function ProductCard(props) {
		const { resolutionComplete, state } = useResolvedComponentResult("ProductCard", props);
		useProductShownOnRender(state?.image_url ? productAnalytics(state.product) : void 0);
		if (!state) return resolutionComplete ? null : /* @__PURE__ */ __dil.jsx("loading", { label: "Loading product" });
		if (!state.image_url) return null;
		const onClick = () => GenUI.openEntityDetail("product", state.title, { product: state.product });
		if (state.render_as === "item") return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`View details for \${state.title}\`,
			height: "100%",
			onClick,
			padding: { x: 2 },
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 2,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			aspectRatio: "1 / 1",
			radius: "lg",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("image", {
			alt: state.title,
			fit: "contain",
			height: "100%",
			radius: "lg",
			src: state.image_url,
			width: "100%"
		})), /* @__PURE__ */ __dil.jsx("col", {
			gap: 1,
			minWidth: 0,
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "sm",
			weight: "semibold"
		}, state.title), state.price || state.description ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			maxLines: 3,
			size: "sm"
		}, state.price ? /* @__PURE__ */ __dil.jsx("text", {
			inline: true,
			strong: true
		}, state.price) : null, state.description ? /* @__PURE__ */ __dil.jsx("text", { inline: true }, state.price ? " • " : "", state.description) : null) : null)));
		if (state.render_as === "hero") return /* @__PURE__ */ __dil.jsx("card", { width: "100%" }, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`View details for \${state.title}\`,
			onClick
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 4,
			wrap: "nowrap",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			aspectRatio: "4 / 3",
			maxWidth: "38%",
			minWidth: 144,
			width: 260
		}, /* @__PURE__ */ __dil.jsx("image", {
			alt: state.title,
			fit: "contain",
			height: "100%",
			radius: "lg",
			src: state.image_url,
			width: "100%"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			gap: 2,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			wrap: "wrap"
		}, state.price ? /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, state.price) : null, state.merchant ? /* @__PURE__ */ __dil.jsx("text", { color: "secondary" }, state.merchant) : null), state.description ? /* @__PURE__ */ __dil.jsx("text", null, state.description) : null))));
		return /* @__PURE__ */ __dil.jsx("card", { width: "100%" }, /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`View details for \${state.title}\`,
			onClick
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 3,
			wrap: "nowrap",
			width: "100%"
		}, /* @__PURE__ */ __dil.jsx("box", {
			aspectRatio: "4 / 3",
			maxWidth: "32%",
			minWidth: 96,
			width: 132
		}, /* @__PURE__ */ __dil.jsx("image", {
			alt: state.title,
			fit: "contain",
			height: "100%",
			radius: "lg",
			src: state.image_url,
			width: "100%"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: "auto",
			gap: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2,
			wrap: "wrap"
		}, state.price ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, state.price) : null, state.merchant ? /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm"
		}, state.merchant) : null), state.description ? /* @__PURE__ */ __dil.jsx("text", { size: "sm" }, state.description) : null))));
	}

//#endregion
return ProductCard;
})();
return __dilDefaultExport;
})()))`,SpeechSynthesizer:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentSpeechSynthesizer(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "SpeechSynthesizer",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "SpeechSynthesizer",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "SpeechSynthesizer",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "SpeechSynthesizer",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "SpeechSynthesizer", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentSpeechSynthesizer, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region SpeechSynthesizer.dil.tsx
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
return SpeechSynthesizer;
})();
return __dilDefaultExport;
})()))`,WritingBlock:`((createComponent) => {
    const hostGenUI = GenUI;
    const unscopedComponent = createComponent(DIL, hostGenUI);
    function ResolvedComponentWritingBlock(props) {
      const resolutionId = props.__resolutionId;
      const Component = DIL.useMemo(() => {
        if (typeof resolutionId !== "string") return unscopedComponent;
        const widgetGenUI = Object.freeze({
          ...hostGenUI,
          ...(hostGenUI.startDictationWithDeferredTurn ? {
            startDictationWithDeferredTurn: (session) => hostGenUI.startDictationWithDeferredTurn(session, {
              nativeWidgetResolutionId: resolutionId,
              componentName: "WritingBlock",
            }),
          } : {}),
          refresh: hostGenUI.refreshWidget ? () => hostGenUI.refreshWidget({
            nativeWidgetResolutionId: resolutionId,
            componentName: "WritingBlock",
          }) : undefined,
          dispatchWidgetClientAction(action) {
            return hostGenUI.dispatchWidgetAction({
              handler: "client",
              type: action.type,
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "WritingBlock",
            });
          },
          dispatchAction(action) {
            const isBoundShare = action.handler === "client" &&
              action.type === "share" && action.payload?.share_options != null;
            if (action.handler !== "server" && !isBoundShare) return hostGenUI.dispatchAction(action);
            return hostGenUI.dispatchWidgetAction({
              ...(isBoundShare ? { handler: "client" } : {}),
              type: action.type,
              ...(action.context === "none" ? { context: "none" } : {}),
              payload: action.payload,
              nativeWidgetResolutionId: resolutionId,
              componentName: "WritingBlock",
            });
          },
        });
        const widgetDIL = Object.freeze({
          ...DIL,
          useState(initialState, options) {
            return DIL.useState(initialState, { ...options, widgetId: resolutionId });
          },
        });
        return createComponent(widgetDIL, widgetGenUI);
      }, [resolutionId]);
      return __dil.jsx(OpGenuiResolvedComponentBoundary, { componentName: "WritingBlock", componentProps: props, Component });
    }
    return Object.assign(ResolvedComponentWritingBlock, unscopedComponent);
  })((DIL, GenUI) => ((() => {
var __dilDefaultExport = (function() {


//#region WritingBlock.dil.tsx
	function WritingBlock({ children, content, recipient, cc, bcc, subject, variant }) {
		const body = content ?? children;
		const hasEmailFields = variant === "email" && (recipient || cc || bcc || subject);
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, hasEmailFields ? /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, recipient ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, "To"), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, recipient)) : null, cc ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, "Cc"), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, cc)) : null, bcc ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, "Bcc"), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, bcc)) : null, subject ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			color: "secondary",
			size: "sm",
			weight: "medium"
		}, "Subject"), /* @__PURE__ */ __dil.jsx("text", { weight: "semibold" }, subject)) : null, /* @__PURE__ */ __dil.jsx("divider", null)) : /* @__PURE__ */ __dil.jsx("title", null, "Writing Block"), /* @__PURE__ */ __dil.jsx("text", { preserveWhitespace: true }, body)));
	}

//#endregion
return WritingBlock;
})();
return __dilDefaultExport;
})()))`})})))()}var it;function at(){return(at=e((()=>{rt(),it=nt})))()}function ot(e){return typeof it[e]==`string`||T.includes(e)}function st(){return(st=e((()=>{at(),rt(),D()})))()}var ct;function lt(){return(lt=e((()=>{ct=new URL(`59fdc673f4a4.png`,import.meta.url).href})))()}var ut;function dt(){return(dt=e((()=>{ut=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.0633%205.67387C18.5196%205.98499%2018.6374%206.60712%2018.3262%207.06343L10.8262%2018.0634C10.6585%2018.3095%2010.3898%2018.4679%2010.0934%2018.4957C9.79688%2018.5235%209.50345%2018.4178%209.29289%2018.2072L4.79289%2013.7072C4.40237%2013.3167%204.40237%2012.6835%204.79289%2012.293C5.18342%2011.9025%205.81658%2011.9025%206.20711%2012.293L9.85368%2015.9396L16.6738%205.93676C16.9849%205.48045%2017.607%205.36275%2018.0633%205.67387Z'%20fill='%230D0D0D'/%3e%3c/svg%3e`})))()}var ft;function pt(){return(pt=e((()=>{ft=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='currentColor'%20viewBox='0%200%2016%2016'%3e%3cpath%20fill-rule='evenodd'%20d='M5.47%202.97a.75.75%200%200%201%201.06%200l4.5%204.5a.75.75%200%200%201%200%201.06l-4.5%204.5a.75.75%200%200%201-1.06-1.06L9.44%208%205.47%204.03a.75.75%200%200%201%200-1.06Z'%20clip-rule='evenodd'/%3e%3c/svg%3e`})))()}var mt;function ht(){return(ht=e((()=>{mt=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20fill='none'%20viewBox='0%200%2016%2016'%3e%3cpath%20d='m6.75%203.6667%204%204.3333-4%204.3333'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`})))()}var gt;function _t(){return(_t=e((()=>{gt=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='18'%20fill='none'%20viewBox='0%200%2012%2018'%3e%3cpath%20d='m2.5%207%203.5-3.5L9.5%207M2.5%2011l3.5%203.5%203.5-3.5'%20stroke='currentColor'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`})))()}var vt,yt,bt,xt,St,Ct,wt;function Tt(){return(Tt=e((()=>{pe(),lt(),dt(),pt(),ht(),_t(),vt=ct,yt=ut,bt=ft,xt=mt,St=gt,Ct={activityRing:j(`oai_ui/res/activityRing`,vt,96,576),oaiCheckMd:j(`oai_ui/res/oaiCheckMd`,yt,24,24),oaiChevronRightSm:j(`oai_ui/res/oaiChevronRightSm`,bt,16,16),oaiChevronRightSystem:j(`oai_ui/res/oaiChevronRightSystem`,xt,16,16),oaiChevronUpDownSystem:j(`oai_ui/res/oaiChevronUpDownSystem`,St,12,18)},wt=Ct})))()}function Et(e){let t=R(e,`Tax Checkup response`);if(t.report===null)return null;let n=R(t.report,`Tax Checkup report`);return{taxYear:qe(n.tax_year),jurisdictions:At(n.jurisdictions,jt),netRange:Ft(n.net_range),confidenceLabel:B(n.confidence_label),beforeYearEnd:Nt(n.before_year_end),checklist:At(n.checklist,Mt),estimate:Ot(t.estimate_widget)}}function Dt(e,t,n,r){return JSON.stringify({version:`2.0`,code:Ht,constants:{},appData:{opGenui:{componentResults:{[Vt]:{status:`resolved`,componentName:Bt,state:n?{sensitiveValuesHidden:!0}:{...e,locale:t,confidence:r}}}}}})}function Ot(e){if(!z(e)||e.version!==`2.0`||e.component!==`LedgerTaxEstimateWidget`||!z(e.state))return;let{status:t,amount:n,range:r,marker:i,segments:a}=e.state;if(t!==`refund`&&t!==`owed`&&t!==`even`&&t!==`range`&&t!==`unavailable`||!Array.isArray(a))return;let o=[];for(let e of a){if(!z(e))return;let{jurisdiction:t,label:n,amount:r,color:i}=e;if(n!==`tax`&&n!==`paid`&&n!==`refund`&&n!==`remaining`||!L(r)||r<0||i!==`federal`&&i!==`state`&&i!==`refund`&&i!==`remaining`)return;o.push({jurisdiction:B(t),label:n,amount:r,color:i})}let s=Ft(r);return{status:t,amount:V(n),range:s===void 0?void 0:[s.low,s.high],marker:kt(i),segments:o}}function kt(e){if(z(e)&&(e.label===`owed`||e.label===`paid`)&&L(e.amount))return{label:e.label,amount:e.amount}}function At(e,t){if(e==null)return[];if(!Array.isArray(e))throw TypeError(`Tax Checkup entries must be a list`);return e.map(t)}function jt(e){let t=R(e,`Tax Checkup jurisdiction`);return{name:B(t.name),liability:V(t.liability),estimatedPayments:V(t.estimated_payments)}}function Mt(e){let t=R(e,`Tax Checkup checklist item`);return{label:Ye(t.label,`Tax Checkup checklist item label`),done:typeof t.done==`boolean`?t.done:void 0}}function Nt(e){return Array.isArray(e)?e.map(Pt).filter(Je):[]}function Pt(e){if(!z(e))return;let t=B(e.label);if(t!==void 0)return{label:t,detail:B(e.detail),value:L(e.value)?e.value:B(e.value)}}function Ft(e){if(!Array.isArray(e)||e.length!==2)return;let t=V(e[0]),n=V(e[1]);if(t!==void 0&&n!==void 0&&t<=n)return{low:t,high:n}}function V(e){return L(e)?e:void 0}function It(e){let t=zt(e.map(e=>e.liability)),n=zt(e.map(e=>e.estimatedPayments));return{estimatedTax:H(t),estimatedPayments:H(n),net:H(t===void 0||n===void 0?void 0:n-t)}}function Lt(e){return e===void 0?void 0:H(Rt(e))}function Rt(e){let[t,n=`0`]=Math.abs(e).toString().split(`e`);return Math.sign(e)*Math.round(Number(`${t}e${Number(n)+2}`))}function H(e){return e!==void 0&&Number.isSafeInteger(e)?e/100:void 0}function zt(e){if(e.length===0)return;let t=0;for(let n of e){if(n===void 0)return;let e=Rt(n);if(!Number.isSafeInteger(e)||(t+=e,!Number.isSafeInteger(t)))return}return t}var U,Bt,Vt,Ht;function Ut(){return(Ut=e((()=>{(function(e){e.High=`high`,e.Moderate=`moderate`,e.Low=`low`,e.Neutral=`neutral`})(U||={}),Bt=`LedgerTaxEstimateWidget`,Vt=`finance-taxes-estimate`,Ht=`DIL.render(__dil.jsx(${Bt}, {__resolutionId: "${Vt}", embedded: true}));`})))()}function Wt(e){return k(e).resolve(Gt,()=>new Kt(new ke(e)))}var Gt,Kt;function qt(){return(qt=e((()=>{E(),Oe(),Ut(),Gt={},Kt=class{constructor(e){this.client=e,this.requests=new Set}read(){let e=this.client.requestJson({request:{method:`GET`,path:`/backend-api/aip/ledger/tax_checkup`,useSheepGateway:!0},decode:Et});return this.requests.add(e),e.result.then(()=>this.requests.delete(e)),e}dispose(){for(let e of this.requests)e.cancel();this.requests.clear()}}})))()}var Jt;function Yt(){return(Yt=e((()=>{Jt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURUdwTC+e/2jE/0iv/2jD/0qv/y6f/y+f/2jE/y+e/2jE/y6e/1i6/zqm//QX5NAAAAAKdFJOUwDDijC9QIWn3N9bhAv9AAAA7klEQVRIx+3WMQ6CMBSAYQwSVycXVicmZl2IoxNXcHZx9wYewIVNGUgDAzHBmCcXQE4Al3EppSR9j5rg1n/+Uvo6tFiWaersQwQAkK983Dgu8PIQRWcQFZhZgNRpfCGAJ7IjGHRVbn4G6l7yrFvAkmY9okia1cVRP2sEGksBVaiDljrooYMKHZRPhkCgsmbK6rZHZcWQ0laghqFlHSoZUcvRm0IfjhoKZRxVFEp/QYzMIIP+gC6USTjaUyjmyKPQjaMNhe4czSkUdM8GhcR1741vifxe0L8u3vhCluUgRxUPHlt7rTj2ZOebX5jJ+wKaBegttDoBlAAAAABJRU5ErkJggg==`})))()}var Xt,Zt,Qt;function $t(){return($t=e((()=>{pe(),Yt(),Xt=Jt,Zt={taxesFolder:j(`chatgpt_finance/res/taxesFolder`,Xt,24,24)},Qt=Zt})))()}function en(e){ze(e,C,`en`)}var W;function tn(){return(tn=e((()=>{Re(),w(),Xe(),en(Ze),W=Ze})))()}var G,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,K;function mn(){return(mn=e((()=>{_e(),Ce(),Fe(),Le(),fe(),x(),de(),$t(),tn(),G=me,nn=G.makeNodePrototype(`layout`,void 0,`7S7Vf9YWGm7QT2TC`),rn=G.makeNodePrototype(`view`,void 0,`zlh5BbVTRVfz-Xwh`),an=G.makeNodePrototype(`image`,void 0,`_c7mQzjDcKDBYSbS`),on=G.makeNodePrototype(`layout`,void 0,`QL7CFnoBMkwwfUvO`),sn=G.makeComponentPrototype([`accessibilityCategory`,`header`,`align`,`center`,`lines`,0],`DH2C7QhhiIGPYSSQ`),cn=G.makeComponentPrototype([`align`,`center`,`lines`,0],`TBHluhJatC96GyQg`),ln=G.makeComponentPrototype(void 0,`btfYs95cnz7KahOF`),un=`Let's do a 2026 tax checkup`,dn=144,fn=320,pn=class extends ue{constructor(){super(...arguments),this.state={windowHeight:S.getWindowHeight()}}onCreate(){this.displaySizeObserver=S.observeDisplaySizeChange(()=>{this.setState({windowHeight:S.getWindowHeight()})})}onDestroy(){this.displaySizeObserver?.cancel()}onRender(){let{desktop:e,onStart:t}=this.viewModel,n=S.isWeb()?dn:fn,r=e?48:40;G.beginRenderWithStringKey(nn,void 0),G.setAttributeStyle(`style`,K.invitation),G.setAttributeNumber(`minHeight`,Math.max(0,this.state.windowHeight-n)),G.setAttributeNumber(`maxWidth`,e?384:320),G.beginRenderWithStringKey(rn,void 0),G.setAttributeStyle(`style`,K.tile),G.setAttributeString(`backgroundColor`,P.BgTertiary),G.setAttributeNumber(`width`,r),G.setAttributeNumber(`height`,r),G.beginRenderWithStringKey(an,void 0),G.setAttributeStyle(`style`,K.folder),G.setAttribute(`src`,Qt.taxesFolder),G.endRender(),G.endRender(),G.beginRenderWithStringKey(on,void 0),G.setAttributeStyle(`style`,K.copy),G.beginComponentWithStringKey(F,sn,void 0,void 0),G.setViewModelProperty(`size`,N.TitleMedium),G.setViewModelProperty(`value`,W.financeTaxesEmptyTitle()),G.endComponent(),G.beginComponentWithStringKey(F,cn,void 0,void 0),G.setViewModelProperty(`size`,N.BodyLarge),G.setViewModelProperty(`tone`,I.Secondary),G.setViewModelProperty(`value`,W.financeTaxesEmptyDescription()),G.endComponent(),G.endRender(),G.beginComponentWithStringKey(Ie,ln,void 0,void 0),G.setViewModelProperty(`label`,W.financeTaxesEmptyEstimate()),G.setViewModelProperty(`onPress`,t),G.endComponent(),G.endRender()}},K={invitation:new A({width:`100%`,alignSelf:`center`,alignItems:`center`,justifyContent:`center`,gap:24,paddingTop:16,paddingBottom:16}),tile:new A({alignItems:`center`,justifyContent:`center`,borderRadius:Te.Lg}),folder:new A({accessibilityNavigation:`ignored`,objectFit:`contain`,width:24,height:24}),copy:new A({width:`100%`,alignItems:`center`,gap:4})}})))()}var q,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,J,br,xr,Sr,Cr,wr,Tr,Y,Er,X;function Dr(){return(Dr=e((()=>{_e(),st(),O(),Se(),Ce(),Oe(),Tt(),Ve(),Fe(),we(),Pe(),Le(),fe(),x(),de(),Ge(),Ut(),qt(),mn(),tn(),q=me,hn=q.makeComponentPrototype(void 0,`B6i0uIYs09HJI5dw`),gn=q.makeNodePrototype(`scroll`,void 0,`xU4t5QRi1ztHrJQn`),_n=q.makeNodePrototype(`layout`,void 0,`F0l-rnNuDPiFJKOY`),vn=q.makeNodePrototype(`layout`,void 0,`YRnazvJi8ce53umU`),yn=q.makeComponentPrototype([`accessibilityCategory`,`header`,`lines`,0],`7AwXN1x6h1MXwfLR`),bn=q.makeComponentPrototype([`lines`,0],`c1UotC_Loiat7QkY`),xn=q.makeComponentPrototype(void 0,`MEmJ6BKEzl83WfYI`),Sn=q.makeNodePrototype(`view`,void 0,`TkF3-OEu7OTzQ-fx`),Cn=q.makeComponentPrototype([`lines`,0],`mEnB_R4OfXG6aSX5`),wn=q.makeNodePrototype(`layout`,void 0,`Kdtf25nDbM5vodN8`),Tn=q.makeComponentPrototype(void 0,`4o24JeGh3TQN_1Jj`),En=q.makeNodePrototype(`layout`,void 0,`rXqvolasG1m4wDkl`),Dn=q.makeComponentPrototype(void 0,`fISEOdJjiwaRr0p4`),On=q.makeComponentPrototype([`lines`,0],`sGX_Zh3wavv4pkkA`),kn=q.makeNodePrototype(`layout`,void 0,`w_4Pg7mJNRrCaI1M`),An=q.makeNodePrototype(`view`,[`accessibilityId`,`finance-taxes-before-year-end`],`fho6wnVKvZ1DwBhw`),jn=q.makeNodePrototype(`layout`,void 0,`36kmF5KuiOrf7U5I`),Mn=q.makeComponentPrototype([`accessibilityCategory`,`header`,`lines`,0],`nXOwz8c-NftMb3Iz`),Nn=q.makeNodePrototype(`layout`,void 0,`ct-rua2hAfTMxnJ9`),Pn=q.makeNodePrototype(`view`,void 0,`DIZtz8G1DKtabMND`),Fn=q.makeComponentPrototype([`accessibilityCategory`,`button`],`tYjJdMXjRhs5MMdN`),In=q.makeNodePrototype(`layout`,void 0,`_KTvyAnlEXOOh-C-`),Ln=q.makeComponentPrototype([`lines`,0],`uxfC28vn9DCEENBj`),Rn=q.makeComponentPrototype([`lines`,0],`MV9SNNaZtBEZIaFl`),zn=q.makeComponentPrototype(void 0,`a42nIwPVNPSfIr_p`),Bn=q.makeNodePrototype(`view`,void 0,`hu4j2bh9OHr8LQhK`),Vn=q.makeNodePrototype(`view`,void 0,`F3GiBwzcPGUw5E9d`),Hn=q.makeNodePrototype(`layout`,void 0,`J3Jnph6i5ZGS96uW`),Un=q.makeComponentPrototype(void 0,`PqCVOtILVR9mgeLW`),Wn=q.makeComponentPrototype(void 0,`o-I7k5ERNEGA3XnW`),Gn=q.makeNodePrototype(`layout`,void 0,`WUT7BQ0rUQxqqYzK`),Kn=q.makeNodePrototype(`layout`,void 0,`sTqu8vgjOAg_RTjj`),qn=q.makeNodePrototype(`layout`,void 0,`0vfNXlfsb9TjoF3N`),Jn=q.makeComponentPrototype([`accessibilityCategory`,`header`,`font`,`system-semibold 16`,`lines`,0],`wOeTLMO_6BQ3yCjG`),Yn=q.makeNodePrototype(`layout`,void 0,`DAHxAvMpBPWfuFhT`),Xn=q.makeComponentPrototype([`font`,`system-semibold 16`,`lines`,0,`align`,`right`],`kqlk5Fq4agWOoNqT`),Zn=q.makeNodePrototype(`layout`,void 0,`FfOw9E1mcLRzMsqu`),Qn=q.makeNodePrototype(`view`,[`accessibilityNavigation`,`ignored`],`wiWms5U-SRChglXn`),$n=q.makeComponentPrototype([`lines`,0],`01LhuPkbu5gZzpCh`),er=q.makeNodePrototype(`layout`,void 0,`SIhlu8P5G3C_DWm0`),tr=q.makeNodePrototype(`view`,void 0,`1zcvXMxh-wYJb-jO`),nr=q.makeNodePrototype(`layout`,void 0,`-_1q-O6a3LtJrCP7`),rr=q.makeComponentPrototype([`lines`,0],`b_kB7Y7B_SVnWIFy`),ir=q.makeNodePrototype(`layout`,void 0,`Lmg1Af3f48I1Ws0x`),ar=q.makeNodePrototype(`layout`,void 0,`rpkzkqZa4WF-fmN2`),or=q.makeNodePrototype(`layout`,[`flexBasis`,0],`8dKNtNaAuNhgtocD`),sr=q.makeNodePrototype(`layout`,void 0,`w-34XEFiZRYSKWpg`),cr=q.makeNodePrototype(`view`,[`accessibilityNavigation`,`ignored`],`_xqKvG4fZZNExp-h`),lr=q.makeNodePrototype(`layout`,[`flexBasis`,0],`1tPl2A6wC-9gXMs-`),ur=q.makeNodePrototype(`view`,[`accessibilityNavigation`,`ignored`],`036UblburmSNUuH6`),dr=q.makeNodePrototype(`view`,[`accessibilityNavigation`,`ignored`],`eK62Uhi7xw_n-GSL`),fr=q.makeNodePrototype(`view`,void 0,`eQnCg3-uWzGlpsVX`),pr=q.makeNodePrototype(`layout`,void 0,`u1rN0YrBvy99tOLN`),mr=q.makeNodePrototype(`view`,void 0,`hImH_0VaC980Ca1q`),hr=q.makeNodePrototype(`layout`,void 0,`vqpfECuue3JkkJwJ`),gr=q.makeNodePrototype(`layout`,void 0,`uMzbt1pnIKK7CNIu`),_r=q.makeComponentPrototype([`lines`,0],`6gf1jiUOIm2kvKbc`),vr=q.makeComponentPrototype([`lines`,0],`xogzGxnKreXjQNd9`),yr=600,J=`••••`,br={actionHandler:{handle(){}},messageMetadata:{isModelWrittenDil:!0,isReadOnly:!0}},xr={card:`#F7F7F7`,border:`#E4E4E4`,chartMarker:`#8E8E8E`,taxes:[`#00A240`,`#40C977`,`#537B6C`],refund:`#99CEFF`,due:`#E8E8E8`},Sr={card:P.BgSecondary,border:P.BorderLight,chartMarker:`#A3A3A3`,taxes:[`#00A240`,`#40C977`,`#62A391`],refund:`#80BAFF`,due:`#4A4A4A`},Cr={[U.High]:P.IconStatusSuccess,[U.Moderate]:P.IconStatusWarning,[U.Low]:P.IconStatusError,[U.Neutral]:P.IconSecondary},wr=class extends ue{constructor(){super(...arguments),this.state={failed:!1,wide:!1,systemIsDark:S.isDarkMode()},this.load=()=>{this.pending?.cancel(),this.pending=void 0,this.setState({report:void 0,failed:!1});try{let{accountId:e,platformServices:t}=this.context;if(!e){this.setState({failed:!0});return}let n=Wt(t).read();this.pending=n,n.result.then(e=>{this.pending===n&&(this.pending=void 0,e.kind===Ae.Success?this.setState({report:e.value}):this.setState({failed:!0}))})}catch{console.warn(`Unable to start the account-scoped Tax Checkup request`),this.setState({failed:!0})}},this.measure=e=>{let t=e.width>=yr;t!==this.state.wide&&this.setState({wide:t})}}get colors(){return this.viewModel.isDarkMode??this.state.systemIsDark?Sr:xr}onCreate(){this.darkModeObserver=S.observeDarkMode(e=>{this.setState({systemIsDark:e})}),this.load()}onViewModelUpdate(e){e!==void 0&&e.refreshKey!==this.viewModel.refreshKey&&this.load()}onDestroy(){this.darkModeObserver?.cancel(),this.pending?.cancel(),this.pending=void 0}onRender(){let e=this.viewModel.hostScroll===!0,t=this.viewModel.isDarkMode,n=t===void 0?De.System:t?De.Dark:De.Light;q.beginComponentWithStringKey(xe,hn,void 0,void 0),q.setViewModelProperty(`fill`,!e),q.setViewModelProperty(`mode`,n),q.setUnnamedSlot(()=>{e?this.renderPage():(q.beginRenderWithStringKey(gn,void 0),q.setAttributeStyle(`style`,X.scroll),this.renderPage(),q.endRender())}),q.endComponent()}openChat(e){let t=this.state.report?.taxYear;this.context.host.openTaxCheckup(t===void 0?e:W.financeTaxesPromptWithYear(e,String(t)))}renderPage(){let{report:e,wide:t}=this.state,n=t&&S.isWeb();q.beginRenderWithStringKey(_n,void 0),q.setAttributeStyle(`style`,X.page),q.setAttributeFunction(`onLayout`,this.measure),(e!==null||n)&&(q.beginRenderWithStringKey(vn,void 0),q.setAttributeStyle(`style`,X.pageHeader),q.beginComponentWithStringKey(F,yn,void 0,void 0),q.setViewModelProperty(`size`,N.HeadlineSmall),q.setViewModelProperty(`value`,W.financeTaxesTitle()),q.endComponent(),e?.taxYear!==void 0&&(q.beginComponentWithStringKey(F,bn,void 0,void 0),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`size`,N.BodyMedium),q.setViewModelProperty(`value`,W.financeTaxesYear(String(e.taxYear))),q.endComponent()),q.endRender()),e===null?(q.beginComponentWithStringKey(pn,xn,void 0,void 0),q.setViewModelProperty(`desktop`,n),q.setViewModelProperty(`onStart`,()=>this.context.host.openTaxCheckup(un)),q.endComponent()):e===void 0?this.renderReportStatus():this.renderReport(e),q.endRender()}renderReportStatus(){this.state.failed?(q.beginRenderWithStringKey(Sn,void 0),q.setAttributeStyle(`style`,X.card),q.setAttributeString(`backgroundColor`,this.colors.card),q.setAttributeString(`borderColor`,this.colors.border),q.beginComponentWithStringKey(F,Cn,void 0,void 0),q.setViewModelProperty(`value`,W.financeTaxesFailed()),q.endComponent(),q.beginRenderWithStringKey(wn,void 0),q.setAttributeStyle(`style`,X.actionButton),q.beginComponentWithStringKey(Ie,Tn,void 0,void 0),q.setViewModelProperty(`label`,W.financeTaxesRetry()),q.setViewModelProperty(`onPress`,this.load),q.setViewModelProperty(`variant`,Be.Secondary),q.endComponent(),q.endRender(),q.endRender()):(q.beginRenderWithStringKey(En,void 0),q.setAttributeStyle(`style`,X.loading),q.beginComponentWithStringKey(Me,Dn,void 0,void 0),q.setViewModelProperty(`size`,je.Medium),q.endComponent(),q.beginComponentWithStringKey(F,On,void 0,void 0),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`value`,W.financeTaxesLoading()),q.endComponent(),q.endRender())}renderReport(e){q.beginRenderWithStringKey(kn,void 0),q.setAttributeStyle(`style`,X.widgets),this.renderEstimate(e),this.renderRecommendations(e.beforeYearEnd),q.endRender()}renderRecommendations(e){e.length!==0&&this.viewModel.sensitiveValuesHidden!==!0&&(q.beginRenderWithStringKey(An,void 0),q.setAttributeStyle(`style`,X.recommendationCard),q.setAttributeString(`backgroundColor`,P.BgPrimary),q.setAttributeString(`borderColor`,P.BorderLight),q.beginRenderWithStringKey(jn,void 0),q.setAttributeStyle(`style`,X.recommendationHeading),q.beginComponentWithStringKey(F,Mn,void 0,void 0),q.setViewModelProperty(`size`,N.TitleMedium),q.setViewModelProperty(`value`,W.financeTaxesToDoList()),q.endComponent(),q.endRender(),e.map((e,t)=>this.renderRecommendation(e,t)),q.endRender())}renderRecommendation(e,t){let{label:n,detail:r}=e,i=this.state.report?.taxYear,a=r===void 0?W.financeTaxesRecommendationActionLabel(n):W.financeTaxesRecommendationActionWithDetailLabel(n,r);q.beginRenderWithStringKey(Nn,String(t)),q.beginRenderWithStringKey(Pn,void 0),q.setAttributeStyle(`style`,X.divider),q.setAttributeString(`backgroundColor`,P.BorderLight),q.endRender(),q.beginComponentWithStringKey(He,Fn,void 0,void 0),q.setViewModelProperty(`accessibilityId`,`finance-taxes-recommendation-${t}`),q.setViewModelProperty(`accessibilityLabel`,a),q.setViewModelProperty(`style`,X.recommendationRow),q.setViewModelProperty(`onPress`,()=>this.context.host.openTaxCheckup(i===void 0?W.financeTaxesRecommendationPrompt(n):W.financeTaxesRecommendationPromptWithYear(String(i),n))),q.setUnnamedSlot(()=>{q.beginRenderWithStringKey(In,void 0),q.setAttributeStyle(`style`,X.recommendationText),q.beginComponentWithStringKey(F,Ln,void 0,void 0),q.setViewModelProperty(`size`,N.TitleSmall),q.setViewModelProperty(`value`,n),q.endComponent(),r!==void 0&&(q.beginComponentWithStringKey(F,Rn,void 0,void 0),q.setViewModelProperty(`size`,N.BodyMedium),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`value`,r),q.endComponent()),q.endRender(),q.beginComponentWithStringKey(Ee,zn,void 0,void 0),q.setViewModelProperty(`src`,wt.oaiChevronRightSm),q.setViewModelProperty(`color`,P.IconTertiary),q.setViewModelProperty(`size`,M.Two),q.endComponent()}),q.endComponent(),q.endRender()}renderEstimate(e){let t=this.estimateConfidence(e.confidenceLabel);q.beginRenderWithStringKey(Bn,void 0),q.setAttributeStyle(`style`,X.card),q.setAttributeString(`backgroundColor`,P.BgPrimary),q.setAttributeString(`borderColor`,P.BorderLight),e.estimate!==void 0&&ot(`LedgerTaxEstimateWidget`)?this.renderDilEstimate(e.estimate,t):this.renderLegacyEstimate(e,t),q.beginRenderWithStringKey(Vn,void 0),q.setAttributeStyle(`style`,X.divider),q.setAttributeString(`backgroundColor`,P.BorderLight),q.endRender(),q.beginRenderWithStringKey(Hn,void 0),q.setAttributeStyle(`style`,X.estimateFooter),q.beginComponentWithStringKey(Ie,Un,void 0,void 0),q.setViewModelProperty(`label`,W.financeTaxesRefineEstimate()),q.setViewModelProperty(`size`,this.state.wide?be.Sm:be.Md),q.setViewModelProperty(`onPress`,()=>this.openChat(W.financeTaxesImprovePrompt())),q.endComponent(),q.endRender(),q.endRender()}renderDilEstimate(e,t){let{locale:n,sensitiveValuesHidden:r}=this.viewModel,i=r===!0,a=this.viewModel.isDarkMode??this.state.systemIsDark?`dark`:`light`;q.beginComponentWithStringKey(le,Wn,i?`hidden`:`visible`,void 0),q.hasContext()||q.setContext(br),q.setViewModelProperty(`colorScheme`,a),q.setViewModelProperty(`dilJson`,Dt(e,n,i,t)),q.endComponent()}estimateConfidence(e){if(e!==void 0&&this.viewModel.sensitiveValuesHidden!==!0)switch(e.trim().toLowerCase()){case`high`:case`high confidence`:return{label:W.financeTaxesHighConfidence(),tone:U.High};case`moderate`:case`moderate confidence`:return{label:W.financeTaxesModerateConfidence(),tone:U.Moderate};case`low`:case`low confidence`:return{label:W.financeTaxesLowConfidence(),tone:U.Low};default:return{label:e,tone:U.Neutral}}}renderLegacyEstimate(e,t){let n=this.colors,{wide:r}=this.state,{estimatedTax:i,estimatedPayments:a,net:o}=It(e.jurisdictions),s=e.jurisdictions.map((e,t)=>({label:e.name===void 0?W.financeTaxesEstimatedTax():W.financeTaxesJurisdictionTax(e.name),amount:Lt(e.liability),color:n.taxes[t%n.taxes.length]})),c=this.viewModel.sensitiveValuesHidden===!0,ee=o===void 0||c?W.financeTaxesEstimate():o===0?W.financeTaxesBalance():o>0?W.financeTaxesEstimatedRefund():W.financeTaxesEstimatedDue(),l=o===void 0?this.formatRange(e.netRange):this.money(Math.abs(o)),u=!c&&i!==void 0&&a!==void 0&&i>=0&&a>=0&&Math.max(i,a)>0&&e.jurisdictions.every(e=>(e.liability??-1)>=0&&(e.estimatedPayments??-1)>=0),d=o!==void 0&&o<0,te=W.financeTaxesEstimatedTax(),ne=W.financeTaxesEstimatedPayments(),f=(d?e.jurisdictions.map((e,t)=>({label:e.name===void 0?ne:W.financeTaxesJurisdictionPaid(e.name),amount:Lt(e.estimatedPayments),color:n.taxes[t%n.taxes.length]})):s).filter(({amount:e})=>(e??0)>0),p=o!==void 0&&o!==0?{label:d?W.financeTaxesAmountRemaining():W.financeTaxesRefund(),amount:Math.abs(o),color:d?n.due:n.refund}:void 0,re=u?f:s,m=p===void 0?re:[...re,p],h=d?a:i;q.beginRenderWithStringKey(Gn,void 0),q.setAttributeStyle(`style`,X.legacyEstimate),q.beginRenderWithStringKey(Kn,void 0),q.setAttributeStyle(`style`,X.estimateHeader),q.beginRenderWithStringKey(qn,void 0),q.setAttributeStyle(`style`,X.estimateHeading),q.beginComponentWithStringKey(F,Jn,void 0,void 0),q.setViewModelProperty(`size`,N.TitleSmall),q.setViewModelProperty(`value`,ee),q.endComponent(),q.endRender(),q.beginRenderWithStringKey(Yn,void 0),q.setAttributeStyle(`style`,X.estimateHeading),q.beginComponentWithStringKey(F,Xn,void 0,void 0),q.setViewModelProperty(`size`,N.TitleSmall),q.setViewModelProperty(`value`,l),q.endComponent(),q.endRender(),q.endRender(),t!==void 0&&(q.beginRenderWithStringKey(Zn,void 0),q.setAttributeStyle(`style`,X.estimateConfidence),q.beginRenderWithStringKey(Qn,void 0),q.setAttributeStyle(`style`,X.confidenceDot),q.setAttributeString(`backgroundColor`,Cr[t.tone]),q.endRender(),q.beginComponentWithStringKey(F,$n,void 0,void 0),q.setViewModelProperty(`size`,N.BodySmall),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`value`,t.label),q.endComponent(),q.endRender()),!c&&(i!==void 0||a!==void 0||m.length>0)&&(q.beginRenderWithStringKey(er,void 0),q.setAttributeStyle(`style`,X.breakdown),q.beginRenderWithStringKey(tr,void 0),q.setAttributeStyle(`style`,X.divider),q.setAttributeString(`backgroundColor`,P.BorderLight),q.endRender(),u?this.renderChart(f,p,h,d?W.financeTaxesTotalPaid():W.financeTaxesTotalOwed()):i!==void 0&&this.renderAmount(te,i),!u&&a!==void 0&&this.renderAmount(ne,a),m.length>0&&(q.beginRenderWithStringKey(nr,void 0),q.setAttributeStyle(`style`,r?X.wideLegend:X.narrowLegend),m.map((e,t)=>this.renderLegendItem(e,t)),q.endRender()),q.endRender()),q.endRender()}renderAmount(e,t,n){let r=this.money(t),i=W.financeTaxesLabelValue(e,r),a=i.lastIndexOf(r),o=a<0?i:new Ue().appendText(i.slice(0,a)).append(r,{font:`system-semibold 12`,color:P.TextPrimary}).appendText(i.slice(a+r.length)).build();q.beginComponentWithStringKey(F,rr,void 0,void 0),q.setViewModelProperty(`align`,n),q.setViewModelProperty(`size`,N.BodySmall),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`accessibilityLabel`,i),q.setViewModelProperty(`value`,o),q.endComponent()}renderChart(e,t,n,r){let i=n!==void 0&&t?.amount!==void 0&&n/(n+t.amount)>=.55;q.beginRenderWithStringKey(ir,void 0),q.setAttributeStyle(`style`,X.chartGroup),!i&&this.renderAmount(r,n,`right`),q.beginRenderWithStringKey(ar,void 0),q.setAttributeStyle(`style`,X.chartRow),e.length>0&&(q.beginRenderWithStringKey(or,void 0),q.setAttributeStyle(`style`,X.chartGroup),q.setAttributeNumber(`flexGrow`,n),i&&(q.beginRenderWithStringKey(sr,void 0),q.setAttributeStyle(`style`,X.chartCaption),this.renderAmount(r,n,`right`),q.endRender()),q.beginRenderWithStringKey(cr,void 0),q.setAttributeStyle(`style`,X.chart),q.setAttributeNumber(`height`,38),e.map((r,i)=>this.renderChartSegment(r,i,n??1,i===0,t===void 0&&i===e.length-1)),q.endRender(),q.endRender()),t!==void 0&&(q.beginRenderWithStringKey(lr,void 0),q.setAttributeStyle(`style`,X.chartTail),q.setAttributeNumber(`flexGrow`,t.amount),q.beginRenderWithStringKey(ur,void 0),q.setAttributeStyle(`style`,X.chart),q.setAttributeNumber(`height`,38),this.renderChartSegment(t,0,t.amount??1,e.length===0,!0),q.endRender(),i&&(q.beginRenderWithStringKey(dr,void 0),q.setAttributeStyle(`style`,X.marker),q.setAttributeString(`borderColor`,this.colors.chartMarker),q.setAttributeNumber(`height`,54),q.endRender()),q.endRender()),q.endRender(),q.endRender()}renderChartSegment(e,t,n,r,i){e.amount!==void 0&&e.amount>0&&(q.beginRenderWithStringKey(fr,String(t)),q.setAttributeStyle(`style`,X.segment),q.setAttributeString(`borderRadius`,`${r?12:4} ${i?12:4} ${i?12:4} ${r?12:4}`),q.setAttributeString(`backgroundColor`,e.color),q.setAttributeNumber(`flexGrow`,e.amount/n),q.endRender())}renderLegendItem(e,t){let{wide:n}=this.state;q.beginRenderWithStringKey(pr,String(t)),q.setAttributeStyle(`style`,n?X.wideLegendItem:X.legendItem),q.beginRenderWithStringKey(mr,void 0),q.setAttributeStyle(`style`,X.legendMark),q.setAttributeString(`backgroundColor`,e.color),q.endRender(),q.beginRenderWithStringKey(hr,void 0),q.setAttributeStyle(`style`,n?X.wideLegendValues:X.narrowLegendValues),q.beginRenderWithStringKey(gr,void 0),q.setAttributeStyle(`style`,X.estimateHeading),q.beginComponentWithStringKey(F,_r,void 0,void 0),q.setViewModelProperty(`size`,N.BodySmall),q.setViewModelProperty(`tone`,I.Secondary),q.setViewModelProperty(`value`,e.label),q.endComponent(),q.endRender(),q.beginComponentWithStringKey(F,vr,void 0,void 0),q.setViewModelProperty(`size`,N.BodySmall),q.setViewModelProperty(`align`,n?void 0:`right`),q.setViewModelProperty(`value`,this.money(e.amount)),q.endComponent(),q.endRender(),q.endRender()}money(e){return e===void 0?W.financeTaxesUnknown():this.viewModel.sensitiveValuesHidden===!0?J:Ne(e,`USD`,{minimumFractionDigits:0,maximumFractionDigits:2,localeIdentifier:this.viewModel.locale})}formatRange(e){if(e===void 0)return W.financeTaxesUnknown();if(this.viewModel.sensitiveValuesHidden===!0)return J;let{low:t,high:n}=e;return t>=0?W.financeTaxesRefundRange(this.money(t),this.money(n)):n<=0?W.financeTaxesDueRange(this.money(-n),this.money(-t)):W.financeTaxesMixedRange(this.money(-t),this.money(n))}},Tr=new A({borderWidth:1,borderRadius:24,gap:14,padding:22}),Y=new A({flexDirection:`row`,alignItems:`center`,justifyContent:`space-between`,gap:10}),Er=new A({flexDirection:`row`,alignItems:`stretch`,gap:8}),X={page:new A({gap:19,paddingBottom:24,width:`100%`}),scroll:new A({flexGrow:1,width:`100%`}),loading:new A({flexDirection:`row`,alignItems:`center`,gap:8}),widgets:new A({gap:18}),recommendationCard:Tr.extend({gap:0,paddingBottom:M.One}),recommendationHeading:new A({paddingBottom:M.Two}),recommendationRow:new A({flexDirection:`row`,alignItems:`center`,justifyContent:`space-between`,gap:M.Two,minHeight:M.FivePointFive,paddingTop:M.Two,paddingBottom:M.Two}),recommendationText:new A({flexShrink:1,minWidth:0,gap:M.Half}),pageHeader:Y.extend({alignItems:`baseline`}),narrowLegend:new A({gap:10}),card:Tr,actionButton:new A({alignSelf:`flex-start`}),legacyEstimate:new A({gap:8}),estimateHeader:Y.extend({alignItems:`baseline`}),estimateHeading:new A({flexShrink:1}),estimateConfidence:new A({flexDirection:`row`,alignItems:`center`,gap:6}),confidenceDot:new A({width:6,height:6,borderRadius:Te.Pill,flexShrink:0}),breakdown:new A({gap:11}),chartRow:new A({flexDirection:`row`,alignItems:`flex-end`,gap:3}),chartGroup:new A({gap:5}),chartCaption:new A({paddingRight:3}),chartTail:new A({position:`relative`}),chart:new A({flexDirection:`row`,gap:3}),marker:new A({position:`absolute`,bottom:-2,left:-1,width:0,borderWidth:.5,borderStyle:`dashed`,touchEnabled:!1}),segment:new A({flexBasis:0}),legendItem:Er,wideLegend:new A({flexDirection:`row`,gap:10}),wideLegendItem:Er.extend({flexGrow:1,flexBasis:0}),legendMark:new A({width:4,borderRadius:Te.Pill,flexShrink:0}),wideLegendValues:new A({flexShrink:1,gap:2}),narrowLegendValues:Y.extend({alignItems:`baseline`,flexGrow:1,flexShrink:1}),estimateFooter:new A({alignItems:`flex-end`}),divider:new A({height:1})}})))()}function Or(e){let t=(0,Z.c)(9),n=u(f),{locale:r}=a(),{isPending:i}=c($e,r);if(i||n==null){let e;return t[0]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(`div`,{className:`flex min-h-32 items-center justify-center`,children:(0,$.jsx)(h,{className:`icon-sm`})}),t[0]=e):e=t[0],e}let o;t[1]!==e.accountId||t[2]!==n?(o=JSON.stringify([e.accountId,n]),t[1]=e.accountId,t[2]=n,t[3]=o):o=t[3];let s;return t[4]!==r||t[5]!==e||t[6]!==o||t[7]!==n?(s=(0,$.jsx)(kr,{...e,userId:n,locale:r},o),t[4]=r,t[5]=e,t[6]=o,t[7]=n,t[8]=s):s=t[8],s}function kr(e){let t=(0,Z.c)(23),{accountId:r,userId:i,locale:o,connectAccounts:ee}=e,l=s(se),u=a(),d=n(),te=ie(),m=ae(te),h=c(ve,r),g=(0,Q.useRef)(!1),_=(0,Q.useRef)(!1),[v]=(0,Q.useState)(jr),y,b;t[0]===v?(y=t[1],b=t[2]):(y=()=>(_.current=!0,()=>{_.current=!1,queueMicrotask(()=>{_.current||v.abort()})}),b=[v],t[0]=v,t[1]=y,t[2]=b),(0,Q.useEffect)(y,b);let x=oe(ee),S;t[3]!==r||t[4]!==u||t[5]!==v.signal||t[6]!==d||t[7]!==l||t[8]!==i?(S=e=>{if(v.signal.aborted||g.current||l.get(p)!==r||l.get(f)!==i)return;g.current=!0;let t=new AbortController,n=()=>t.abort();v.signal.addEventListener(`abort`,n,{once:!0}),et(l,{accountId:r,prompt:e,signal:t.signal,onConversationStarted:e=>{v.signal.removeEventListener(`abort`,n),d(re(e),ce(l,r))}}).catch(()=>{l.get(ne).danger(u.formatMessage({id:`personalFinance.taxes.conversationError`,defaultMessage:`Your tax checkup conversation couldn’t be started`,description:`Error toast when a Taxes tab action cannot start a tax checkup conversation`}),{errorAnalytics:{toastId:`personalFinance.taxes.conversationError`}})}).finally(()=>{v.signal.removeEventListener(`abort`,n),g.current=!1})},t[3]=r,t[4]=u,t[5]=v.signal,t[6]=d,t[7]=l,t[8]=i,t[9]=S):S=t[9];let C=oe(S),w;t[10]!==r||t[11]!==x||t[12]!==v.signal||t[13]!==C||t[14]!==i?(w=()=>({accountId:r,host:{connectAccounts:x,openTaxCheckup:C},platformServices:{accountScope:Mr(`finance-taxes:${crypto.randomUUID()}`,v.signal),apiService:Ke({accountId:r,userId:i,signal:v.signal,isRequestAllowed:Ar})}}),t[10]=r,t[11]=x,t[12]=v.signal,t[13]=C,t[14]=i,t[15]=w):w=t[15];let[T]=(0,Q.useState)(w),E=m===`dark`,D;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(D={className:`w-full min-w-0 flex-none`},t[16]=D):D=t[16];let O=m===`dark`,k;return t[17]!==T||t[18]!==o||t[19]!==h||t[20]!==E||t[21]!==O?(k=(0,$.jsx)(Nr,{context:T,darkModeOverride:E,hostProps:D,hostScroll:!0,isDarkMode:O,locale:o,sensitiveValuesHidden:h}),t[17]=T,t[18]=o,t[19]=h,t[20]=E,t[21]=O,t[22]=k):k=t[22],k}function Ar(e){let{method:t,path:n}=e;return[`GET`].includes(t)&&n===`/backend-api/aip/ledger/tax_checkup`}function jr(){return new AbortController}function Mr(e,t){return{identifier:e,lifetime:{observeIsActive:()=>({subscribe:e=>{let n=!0,r=()=>{n&&(n=!1,t.removeEventListener(`abort`,i))},i=()=>{n&&(e(1,void 0,!1,void 0),e(3,void 0,void 0,void 0),r())};e(0,r,void 0,void 0),e(1,void 0,!t.aborted,void 0),t.aborted?(e(3,void 0,void 0,void 0),r()):t.addEventListener(`abort`,i,{once:!0})}})}}}var Z,Q,$,Nr;function Pr(){return(Pr=e((()=>{Z=ee(),Dr(),ge(),l(),Q=t(),i(),o(),m(),te(),g(),d(),v(),_(),y(),We(),tt(),ye(),b(),Qe(),$=r(),Nr=he(wr)})))()}Pr();export{Or as PersonalFinanceTaxesValdi};
//# sourceMappingURL=taxes-valdi-a313f6050abe.js.map