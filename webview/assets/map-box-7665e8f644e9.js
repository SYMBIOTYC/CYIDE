import{n as e}from"./rolldown-runtime-428824ca0286.js";var t;function n(){return(n=e((()=>{t=`(() => {
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
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=map-box-7665e8f644e9.js.map