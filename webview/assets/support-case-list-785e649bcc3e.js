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
//#region SupportCaseList.dil.tsx
	function CaseStatus({ item }) {
		return /* @__PURE__ */ __dil.jsx("badge", {
			size: "sm",
			variant: "soft",
			color: item.status_group === "closed" ? "success" : "info"
		}, item.status_label);
	}
	function CaseSubject({ item, missing }) {
		return item.subject ? /* @__PURE__ */ __dil.jsx("text", null, item.subject) : /* @__PURE__ */ __dil.jsx("box", {
			role: "group",
			ariaLabel: missing
		}, /* @__PURE__ */ __dil.jsx("text", null, "—"));
	}
	function SupportCaseList(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("SupportCaseList", props);
		const wide = DIL.useBreakpoint("sm");
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 140
		});
		const labels = state.labels;
		const showUpdated = state.cases.some((item) => Boolean(item.updated_at));
		const missingSubject = labels.missing_subject ?? "No subject";
		return /* @__PURE__ */ __dil.jsx("card", { size: "full" }, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, /* @__PURE__ */ __dil.jsx("title", { size: "md" }, labels.title), state.cases.length === 0 ? /* @__PURE__ */ __dil.jsx("text", null, labels.empty) : wide ? /* @__PURE__ */ __dil.jsx("table", null, /* @__PURE__ */ __dil.jsx("table-section", { header: true }, /* @__PURE__ */ __dil.jsx("table-row", { header: true }, /* @__PURE__ */ __dil.jsx("table-cell", null, labels.case ?? "Case"), /* @__PURE__ */ __dil.jsx("table-cell", null, labels.subject ?? "Subject"), /* @__PURE__ */ __dil.jsx("table-cell", null, labels.status ?? "Status"), /* @__PURE__ */ __dil.jsx("table-cell", null, labels.created), showUpdated && /* @__PURE__ */ __dil.jsx("table-cell", null, labels.last_updated ?? labels.updated))), /* @__PURE__ */ __dil.jsx("table-section", null, state.cases.map((item) => /* @__PURE__ */ __dil.jsx("table-row", { key: item.id }, /* @__PURE__ */ __dil.jsx("table-cell", null, /* @__PURE__ */ __dil.jsx("link", { href: item.case_url }, \`#\${item.case_reference}\`)), /* @__PURE__ */ __dil.jsx("table-cell", null, /* @__PURE__ */ __dil.jsx(CaseSubject, {
			item,
			missing: missingSubject
		})), /* @__PURE__ */ __dil.jsx("table-cell", null, /* @__PURE__ */ __dil.jsx(CaseStatus, { item })), /* @__PURE__ */ __dil.jsx("table-cell", null, item.created_at?.slice(0, 10) ?? "—"), showUpdated && /* @__PURE__ */ __dil.jsx("table-cell", null, item.updated_at?.slice(0, 10) ?? "—"))))) : /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, state.cases.map((item) => /* @__PURE__ */ __dil.jsx("col", {
			key: item.id,
			gap: 1
		}, /* @__PURE__ */ __dil.jsx("row", {
			align: "center",
			gap: 2
		}, /* @__PURE__ */ __dil.jsx("link", { href: item.case_url }, \`#\${item.case_reference}\`), /* @__PURE__ */ __dil.jsx(CaseStatus, { item })), /* @__PURE__ */ __dil.jsx(CaseSubject, {
			item,
			missing: missingSubject
		}), /* @__PURE__ */ __dil.jsx("caption", null, \`\${labels.created} \${item.created_at?.slice(0, 10) ?? "—"}\`), item.updated_at && /* @__PURE__ */ __dil.jsx("caption", null, \`\${labels.last_updated ?? labels.updated} \${item.updated_at.slice(0, 10)}\`)))), state.next_cursor && /* @__PURE__ */ __dil.jsx("caption", null, labels.partial)));
	}

//#endregion
return SupportCaseList;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=support-case-list-785e649bcc3e.js.map