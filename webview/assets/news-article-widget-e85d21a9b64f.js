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
//#region NewsArticleWidget.dil.tsx
	function NewsArticleWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("NewsArticleWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		return /* @__PURE__ */ __dil.jsx("pressable", {
			ariaLabel: \`Open \${state.title}\`,
			onClick: () => GenUI.dispatchAction({
				type: "open_url",
				handler: "client",
				payload: {
					url: state.url,
					event_name: "news_article_widget_clicked",
					event_data: {
						widget_name: "news_article_widget",
						ref: state.ref,
						url: state.url,
						domain: state.domain
					}
				}
			})
		}, /* @__PURE__ */ __dil.jsx("card", {
			size: "sm",
			padding: 4,
			gap: 4,
			shadow: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "start",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minWidth: 0,
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("favicon", {
			url: state.url,
			size: 20
		}), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary",
			truncate: true,
			maxLines: 1
		}, state.source_label)), /* @__PURE__ */ __dil.jsx("title", {
			size: "md",
			maxLines: 3
		}, state.title)), state.thumbnail_url && /* @__PURE__ */ __dil.jsx("image", {
			src: state.thumbnail_url,
			alt: state.title,
			width: 100,
			height: 100,
			radius: "lg",
			fit: "cover",
			hideOnFailure: true
		})), state.snippet && /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("divider", null), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 1
		}, state.date_label && /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, state.date_label), /* @__PURE__ */ __dil.jsx("text", {
			size: "md",
			color: "prose",
			maxLines: 4
		}, state.snippet)))));
	}

//#endregion
return NewsArticleWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=news-article-widget-e85d21a9b64f.js.map