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
//#region MedicalJournalFigure.dil.tsx
	function MedicalJournalFigure(props) {
		const { isDark } = DIL.useTheme();
		const { state } = useResolvedComponentResult("MedicalJournalFigure", props);
		if (!state) return null;
		const { title, caption, alt_text, journal_logo, image_url, thumbnail_url, article_url, article_title, source_name, attribution, pub_date } = state;
		const logoUrl = isDark ? journal_logo?.dark_url : journal_logo?.url;
		const canExpand = typeof GenUI !== "undefined" && typeof GenUI.openImageLightbox === "function";
		const image = {
			content_url: image_url,
			thumbnail_url: thumbnail_url ?? image_url,
			url: image_url,
			show_url: false,
			title: alt_text?.trim() || title?.trim() || "Figure"
		};
		const openFigure = () => {
			GenUI.openImageLightbox([image], 0);
		};
		const sourceName = source_name?.trim() || attribution?.trim() || article_url?.match(/^https?:\\/\\/(?:www\\.)?([^/?#]+)/i)?.[1];
		const authors = state.authors?.map((author) => author.trim()).filter(Boolean);
		const authorLabel = !authors?.length ? void 0 : authors.length === 1 ? authors[0] : authors.length === 2 ? authors.join(" & ") : \`\${authors[0]}, et al.\`;
		const publicationDate = pub_date == null ? void 0 : /* @__PURE__ */ new Date(pub_date * 1e3);
		const sourceMetadata = [sourceName, publicationDate && !Number.isNaN(publicationDate.getTime()) ? new Intl.DateTimeFormat(void 0, {
			timeZone: "UTC",
			year: "numeric",
			month: "short",
			day: "numeric"
		}).format(publicationDate) : void 0].filter(Boolean).join(" · ");
		return /* @__PURE__ */ __dil.jsx("card", {
			width: "100%",
			size: "sm",
			gap: 3
		}, logoUrl || canExpand ? /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			align: "center"
		}, logoUrl ? /* @__PURE__ */ __dil.jsx("image", {
			src: logoUrl,
			alt: "",
			width: "100%",
			maxWidth: 160,
			height: 28,
			fit: "contain",
			position: "left center",
			hideOnFailure: true
		}) : null, /* @__PURE__ */ __dil.jsx("spacer", null), canExpand ? /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: "Expand figure",
			variant: "ghost",
			size: 36,
			padding: 0,
			align: "center",
			justify: "center",
			onClick: openFigure
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "expand-large",
			size: "md"
		})) : null) : null, /* @__PURE__ */ __dil.jsx("search-image", {
			searchImage: image,
			upgradeToFullRes: true,
			alt: image.title,
			fit: "contain",
			width: "100%"
		}), title || caption ? /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, title ? /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			weight: "semibold"
		}, title) : null, caption ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "normal",
			color: "secondary"
		}, caption) : null) : null, article_url ? /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", { gap: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "semibold"
		}, /* @__PURE__ */ __dil.jsx("link", { href: article_url }, article_title || article_url)), /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 1.5,
			wrap: "wrap"
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			size: 16,
			url: article_url
		}), sourceMetadata ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, sourceMetadata) : null, sourceMetadata && authorLabel ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, "·") : null, authorLabel ? /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			italic: true
		}, authorLabel) : null))) : null);
	}

//#endregion
return MedicalJournalFigure;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=medical-journal-figure-61472687aa61.js.map