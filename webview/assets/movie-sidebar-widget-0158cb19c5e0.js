import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";var t;function n(){return(n=e((()=>{t=`(() => {
var __dilDefaultExport = (function() {


//#region internal/LinkImpression.dil.tsx
/** Observe the rendered link without invoking its click action. */
	function LinkImpression({ url, action, careProvider, disabled, unlessSupportedAction, children, ...boxProps }) {
		const opGenui = DIL.useAppData((data) => data.opGenui);
		const shownUrls = DIL.useRef([]);
		const payload = action?.payload;
		const actionUrl = action?.type === "open_url" && (action.handler === void 0 || action.handler === "client") && !(typeof payload === "object" && payload !== null && "action" in payload && typeof payload.action === "string" && payload.action !== "open_url") && typeof payload === "object" && payload !== null && "url" in payload && typeof payload.url === "string" ? payload.url : void 0;
		const destination = action ? actionUrl : url;
		if (disabled || unlessSupportedAction && opGenui?.supportedClientActions?.includes(unlessSupportedAction) || typeof destination !== "string" || !destination.trim() || !opGenui?.supportedClientActions?.includes("genui_link_impressions")) return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
		const linkType = opGenui.linkMetadataByUrl?.[destination.trim()]?.linkType;
		if (linkType !== void 0 && typeof linkType !== "string") return /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, children);
		return /* @__PURE__ */ __dil.jsx("box", {
			...boxProps,
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
		}, children);
	}

//#endregion
//#region internal/MovieScoreIcon.dil.tsx
	const SvgPath = "path";
	const SvgGroup = "g";
	const SvgMask = "mask";
	function MovieScoreIcon({ score, audience = false }) {
		if (audience) return score >= 60 ? /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: "mask0_1279_21973",
			maskUnits: "userSpaceOnUse",
			x: "4",
			y: "2",
			width: "16",
			height: "20"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M19.4678 2.03125H4.57175V21.9956H19.4678V2.03125Z",
			fill: "white"
		})), /* @__PURE__ */ __dil.jsx(SvgGroup, { mask: "url(#mask0_1279_21973)" }, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18.8393 6.77478C18.7817 7.99887 15.7498 8.96913 12.0219 8.94786C8.76614 8.92928 6.05023 8.16035 5.38495 7.15017C5.53655 6.98169 5.74591 6.86615 5.98175 6.83485C5.97922 6.80511 5.97759 6.77515 5.97774 6.74474C5.98049 6.26065 6.33558 5.86199 6.79826 5.78764C6.78606 5.72504 6.77967 5.66028 6.78004 5.59403C6.78309 5.05493 7.22264 4.62043 7.76175 4.62348C7.77394 4.62355 7.78584 4.62504 7.79796 4.62556C7.76346 4.52474 7.74413 4.41701 7.74472 4.30452C7.74785 3.76541 8.18733 3.33091 8.72643 3.33396C8.85015 3.3347 8.96785 3.35931 9.07655 3.40191C9.23075 3.11165 9.52681 2.90935 9.87201 2.886C9.93216 2.40191 10.3457 2.02846 10.8455 2.03127C11.1601 2.03307 11.4383 2.18414 11.6155 2.41619C11.7952 2.22065 12.0528 2.09797 12.3392 2.09961C12.8783 2.10266 13.3128 2.54221 13.3098 3.08124C13.3092 3.18422 13.2925 3.28318 13.2624 3.37619C13.4824 3.41701 13.6759 3.53136 13.8173 3.69292C13.9296 3.27478 14.3113 2.96749 14.7646 2.97002C15.1881 2.97247 15.5461 3.24474 15.679 3.62251C16.0388 3.76801 16.292 4.12095 16.2896 4.53262C16.2891 4.62407 16.2751 4.7121 16.2511 4.79597C16.3725 4.74288 16.5062 4.71314 16.6472 4.71396C17.0722 4.71641 17.4313 4.99061 17.5631 5.37061C17.6895 5.31188 17.83 5.27849 17.9786 5.27939C18.5177 5.28243 18.9523 5.72191 18.9492 6.26102C18.9482 6.43879 18.8989 6.60474 18.8151 6.74779C18.8236 6.75641 18.8311 6.76585 18.8393 6.77478Z",
			fill: "#F9D320"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.72924 19.0395C7.01578 19.4747 7.57258 19.9253 8.15533 20.2257L7.15913 10.1214C6.5253 9.91778 5.90678 9.64796 5.45117 9.26105L6.72924 19.0395ZM9.14671 20.6472C10.1114 20.9665 10.6723 21.0654 11.4753 21.1442L11.3501 10.7609C10.4631 10.7355 9.31511 10.6152 8.33697 10.4065L9.14671 20.6472ZM14.8981 20.6472L15.7078 10.4065C14.7297 10.6152 13.5817 10.7355 12.6947 10.7609L12.5695 21.1442C13.3725 21.0654 13.9333 20.9665 14.8981 20.6472ZM17.3155 19.0395L18.5936 9.26105C18.138 9.64796 17.5195 9.91778 16.8857 10.1214L15.8895 20.2257C16.4722 19.9253 17.029 19.4747 17.3155 19.0395ZM6.80069 5.40283C6.78805 5.46454 6.78098 5.52833 6.78061 5.59384C6.78024 5.66008 6.78663 5.72484 6.7989 5.78744C6.33615 5.86172 5.98106 6.26038 5.97831 6.74454C5.97816 6.77488 5.97979 6.80491 5.98232 6.83458C5.74649 6.86588 5.53712 6.98142 5.38552 7.1499C6.05072 8.16016 8.76671 8.92908 12.0224 8.94774C15.7503 8.96908 18.7822 7.99889 18.8399 6.77473C18.8317 6.76588 18.8242 6.75636 18.8156 6.74781C18.8732 6.64967 18.9129 6.5403 18.9334 6.42424C19.2904 6.76305 19.5063 7.03621 19.4683 7.43398C19.4647 7.48714 17.8892 18.7678 17.8892 18.7678C17.7074 20.5544 15.113 21.9824 12.0224 22.0001C8.93184 21.9824 6.33734 20.5544 6.15563 18.7678C6.15563 18.7678 4.58009 7.48714 4.57645 7.43398C4.50099 6.63837 5.43191 5.91614 6.80069 5.40283Z",
			fill: "#DB382A"
		})), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M15.707 10.4062L14.8974 20.647C13.9326 20.9662 13.3718 21.0652 12.5688 21.144L12.6939 10.7607C13.581 10.7352 14.729 10.615 15.707 10.4062Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.4749 21.144C10.6719 21.0652 10.1111 20.9662 9.1463 20.647L8.33664 10.4062C9.3147 10.615 10.4627 10.7352 11.3497 10.7607L11.4749 21.144Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.1543 20.2249C7.57155 19.9245 7.01474 19.4739 6.72828 19.0387L5.45013 9.26025C5.90575 9.64717 6.52426 9.91698 7.15809 10.1206L8.1543 20.2249Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18.5928 9.26025L17.3147 19.0387C17.0282 19.4739 16.4714 19.9245 15.8886 20.2249L16.8848 10.1206C17.5186 9.91698 18.1372 9.64717 18.5928 9.26025Z",
			fill: "#FFFFFE"
		})) : /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: "mask0_1279_21975",
			maskUnits: "userSpaceOnUse",
			x: "2",
			y: "5",
			width: "19",
			height: "14"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M2 5.13574H20.4802V18.8806H2V5.13574Z",
			fill: "white"
		})), /* @__PURE__ */ __dil.jsx(SvgGroup, { mask: "url(#mask0_1279_21975)" }, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.3696 15.018C13.4877 14.7253 13.9065 14.5471 14.2073 14.5679C14.5287 14.5902 14.8702 14.9281 14.9298 15.2604C14.9409 15.2484 14.9525 15.237 14.9643 15.2257C15.0675 15.1271 15.1968 15.0617 15.3384 15.0436C15.3167 14.9478 15.3115 14.8452 15.3264 14.7398C15.3786 14.3693 15.6759 14.0915 16.0163 14.0943C16.236 14.096 16.4287 14.2084 16.5543 14.3811C16.5655 14.3671 16.5779 14.3542 16.59 14.3411C16.7336 13.593 16.8246 12.7478 16.8453 11.8509C16.9165 8.76679 16.134 6.24719 15.0976 6.22332C14.0612 6.19938 13.1634 8.68017 13.0923 11.7643C13.0923 11.7643 13.0374 12.8892 13.3696 15.018Z",
			fill: "#185A30"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M20.3858 18.3906C20.447 18.2884 20.4813 18.1658 20.4789 18.0356C20.4988 17.6148 20.2099 17.2334 19.808 17.2756C19.8196 17.2275 19.8272 17.1774 19.8302 17.1258C19.8543 16.7043 19.5636 16.341 19.1809 16.3145C19.1725 16.314 19.1642 16.3137 19.1559 16.3134C19.1957 16.2088 19.2154 16.0921 19.2084 15.9683C19.1886 15.6176 18.9468 15.3221 18.6322 15.264C18.5185 15.243 18.4083 15.2534 18.3074 15.2884C18.212 15.0535 18.0118 14.8793 17.7683 14.8425C17.749 14.4611 17.4735 14.1472 17.1188 14.1226C16.8958 14.1071 16.6909 14.2096 16.5539 14.381C16.4283 14.2084 16.2356 14.0961 16.0159 14.0943C15.6755 14.0915 15.3782 14.3693 15.3259 14.7399C15.3111 14.8451 15.3163 14.9477 15.3379 15.0437C15.1964 15.0616 15.0671 15.1271 14.9639 15.2257C14.9521 15.2369 14.9405 15.2483 14.9294 15.2604C14.8697 14.9281 14.5283 14.5902 14.2068 14.5679C13.9061 14.547 13.4819 14.7297 13.3691 15.018C13.4186 15.5206 13.7328 16.8909 14.8693 18.1202L14.8794 18.1209C14.989 18.2201 15.1321 18.2747 15.2846 18.2611C15.3792 18.2526 15.4663 18.2188 15.5413 18.1666L15.5596 18.1679C15.6596 18.2373 15.7798 18.2736 15.9068 18.2623C15.9553 18.258 16.0016 18.2463 16.0456 18.2297C16.1545 18.4547 16.3972 18.6002 16.6682 18.5763C16.878 18.5578 17.0564 18.4418 17.1612 18.2784L17.1952 18.2808C17.2999 18.3846 17.4391 18.445 17.5893 18.4405C17.7134 18.6283 17.9414 18.7439 18.193 18.7218C18.2878 18.7134 18.3762 18.686 18.4551 18.6445C18.5867 18.8064 18.8027 18.9027 19.0397 18.8818C19.274 18.8613 19.4719 18.7314 19.5796 18.5518C19.6853 18.6367 19.8179 18.6823 19.9586 18.6698C20.0951 18.6576 20.2164 18.5931 20.3076 18.4956L20.3228 18.4966C20.3435 18.4666 20.3612 18.4359 20.3777 18.4048C20.3781 18.4042 20.3784 18.4036 20.3787 18.403C20.3809 18.3989 20.3837 18.3948 20.3858 18.3906Z",
			fill: "#F9D320"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.5523 7.41715L3.64052 8.29577C3.90551 7.7818 4.30302 7.29072 4.68682 7.038L13.311 5.91072C12.9698 6.31262 12.7318 6.85813 12.5523 7.41715ZM13.311 17.502L4.68682 16.3747C4.30302 16.1221 3.90551 15.6309 3.64052 15.117L12.5523 15.9956C12.7318 16.5546 12.9698 17.1002 13.311 17.502ZM3.26879 14.2427C2.98721 13.3918 2.9 12.8971 2.83043 12.1889L11.9882 12.2993C12.0107 13.0816 12.1167 14.0941 12.3008 14.9568L3.26879 14.2427ZM3.26879 9.17006L12.3008 8.45596C12.1167 9.31859 12.0107 10.3311 11.9882 11.1135L2.83043 11.2238C2.9 10.5156 2.98721 10.0209 3.26879 9.17006ZM16.1797 6.07623C15.6083 5.41098 15.1982 5.09865 14.8468 5.13924C14.7813 5.14757 4.85082 6.5321 4.85082 6.5321C3.27502 6.69236 2.01561 8.98056 2 11.7064C2.01561 14.4322 3.27502 16.7204 4.85082 16.8807C4.85082 16.8807 14.7999 18.2703 14.8468 18.2735C14.9299 18.2729 15.0119 18.2618 15.0928 18.2411C15.0141 18.2177 14.9415 18.1767 14.8798 18.1208L14.8697 18.1201C13.7332 16.8909 13.419 15.5206 13.3695 15.0179C13.3696 15.0175 13.3699 15.0171 13.37 15.0168C13.3699 15.0171 13.3696 15.0175 13.3695 15.0179C13.0373 12.8891 13.0922 11.7642 13.0922 11.7642C13.1633 8.68003 14.0612 6.19924 15.0976 6.22311C16.1339 6.24705 16.9164 8.76665 16.8452 11.8508C16.8245 12.7477 16.7335 13.5929 16.5899 14.3409C16.7374 14.1781 16.9353 14.1095 17.1192 14.1225C17.153 14.1249 17.186 14.1307 17.2182 14.1381C17.8476 10.6943 17.1878 7.33164 16.1797 6.07623Z",
			fill: "#129B47"
		})), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.3004 8.45703L3.26844 9.17113C2.98687 10.022 2.89965 10.5167 2.83008 11.2249L11.9878 11.1145C12.0103 10.3322 12.1164 9.31965 12.3004 8.45703Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.3109 5.91064L4.68668 7.03792C4.30287 7.29064 3.90536 7.78173 3.64038 8.29569L12.5521 7.41707C12.7317 6.85805 12.9697 6.31255 13.3109 5.91064Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.64038 15.1172C3.90536 15.6312 4.30287 16.1223 4.68668 16.375L13.3109 17.5022C12.9697 17.1004 12.7317 16.5548 12.5521 15.9959L3.64038 15.1172Z",
			fill: "#FFFFFE"
		}), /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: "mask1_1279_21975",
			maskUnits: "userSpaceOnUse",
			x: "2",
			y: "12",
			width: "20",
			height: "7"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M2.83008 12.1895H21.9358V18.8812H2.83008V12.1895Z",
			fill: "white"
		})), /* @__PURE__ */ __dil.jsx(SvgGroup, { mask: "url(#mask1_1279_21975)" }, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.9878 12.2994L2.83008 12.189C2.89965 12.8972 2.98687 13.3919 3.26844 14.2427L12.3004 14.9568C12.1164 14.0942 12.0103 13.0817 11.9878 12.2994Z",
			fill: "#FFFFFE"
		})));
		return score >= 60 ? /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: "mask0_1279_21990",
			maskUnits: "userSpaceOnUse",
			x: "2",
			y: "6",
			width: "20",
			height: "16"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M2.33203 6.12891H21.6027V21.9958H2.33203V6.12891Z",
			fill: "white"
		})), /* @__PURE__ */ __dil.jsx(SvgGroup, { mask: "url(#mask0_1279_21990)" }, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M21.5854 12.8278C21.3926 9.73571 19.8201 7.42227 17.4539 6.12891C17.4674 6.20426 17.4003 6.29845 17.324 6.26509C15.7763 5.58808 13.1508 7.77911 11.3162 6.63173C11.3299 7.04351 11.2495 9.05223 8.41989 9.16874C8.35308 9.17148 8.31632 9.10326 8.35856 9.05496C8.73698 8.62335 9.11906 7.53057 8.56968 6.94799C7.39317 8.00227 6.70993 8.39903 4.45408 7.87546C3.00976 9.38567 2.19134 11.4526 2.352 14.0275C2.6798 19.2838 7.60321 22.2883 12.5611 21.9789C17.5187 21.6698 21.9133 18.0841 21.5854 12.8278Z",
			fill: "#FA320A"
		})), /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.55 4.86662C13.5688 4.6238 16.4991 4.84297 17.4379 6.08837C17.4943 6.16305 17.4149 6.30438 17.3241 6.26471C15.7764 5.5877 13.1509 7.77874 11.3163 6.63135C11.33 7.04314 11.2496 9.05185 8.41999 9.16837C8.35319 9.1711 8.31643 9.10289 8.35867 9.05459C8.73709 8.62297 9.11908 7.53019 8.56979 6.94762C7.28821 8.09608 6.59344 8.46513 3.81186 7.71326C3.72082 7.6887 3.75186 7.54239 3.84871 7.50546C4.37443 7.30455 5.56547 6.42455 6.69228 6.03666C6.9068 5.96289 7.12066 5.90563 7.32937 5.87235C6.08871 5.76148 5.52945 5.58895 4.74033 5.70795C4.65385 5.72098 4.5951 5.62032 4.64871 5.55127C5.71194 4.18173 7.67062 3.76812 8.87908 4.49567C8.13418 3.57268 7.5507 2.83658 7.5507 2.83658L8.93327 2.05127C8.93327 2.05127 9.50448 3.32745 9.92008 4.25625C10.9485 2.73666 12.8621 2.59641 13.6705 3.67459C13.7185 3.73866 13.6684 3.82978 13.5883 3.82787C12.9303 3.81185 12.568 4.41036 12.5405 4.86554L12.55 4.86662Z",
			fill: "#00912D"
		})) : /* @__PURE__ */ __dil.jsx("svg", {
			width: 24,
			height: 24,
			viewBox: "0 0 24 24",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, /* @__PURE__ */ __dil.jsx(SvgMask, {
			id: "mask0_1279_21992",
			maskUnits: "userSpaceOnUse",
			x: "2",
			y: "2",
			width: "20",
			height: "20"
		}, /* @__PURE__ */ __dil.jsx(SvgPath, {
			d: "M2 2.34961H21.9354V21.6898H2V2.34961Z",
			fill: "white"
		})), /* @__PURE__ */ __dil.jsx(SvgGroup, { mask: "url(#mask0_1279_21992)" }, /* @__PURE__ */ __dil.jsx(SvgPath, {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M19.866 19.8655C16.0865 20.0639 15.3142 15.7392 13.8314 15.77C13.1996 15.7832 12.7016 16.4439 12.9203 17.2138C13.0405 17.637 13.3741 18.2577 13.5843 18.6429C14.3257 20.0021 13.2297 21.5403 11.947 21.6704C9.81554 21.8866 8.92642 20.6501 8.98142 19.3843C9.04326 17.9633 10.2481 16.5114 9.01239 15.8936C7.71739 15.2461 6.66467 17.778 5.42546 18.3431C4.30388 18.8546 2.74695 18.458 2.19344 17.2125C1.80467 16.3374 1.87537 14.6522 3.60633 14.0092C4.68756 13.6076 7.09703 14.5344 7.22063 13.3605C7.36309 12.0074 4.6894 11.8932 3.8844 11.5688C2.46002 10.9947 1.61932 9.7664 2.278 8.44868C2.77221 7.46026 4.22633 7.05807 5.33625 7.49105C6.66589 8.00974 6.87932 9.38886 7.56054 9.96237C8.14739 10.4567 8.95054 10.5185 9.47581 10.1787C9.86318 9.92798 9.99212 9.37737 9.84598 8.87438C9.65212 8.20667 9.13765 7.79 8.63572 7.38175C7.74247 6.65561 6.48142 6.03123 7.24423 4.04921C7.86949 2.42491 9.70335 2.3664 9.70335 2.3664C10.4319 2.28447 11.0844 2.50447 11.6161 2.97947C12.3269 3.61447 12.4653 4.46324 12.3463 5.36877C12.2376 6.19535 11.9451 6.9193 11.7926 7.73824C11.6155 8.68903 12.1237 9.6471 13.0901 9.68438C14.3612 9.73351 14.7424 8.75649 14.8979 8.13719C15.1256 7.23105 15.4245 6.38982 16.2655 5.86C17.4724 5.09956 19.1489 5.26623 19.9267 6.72772C20.5419 7.88412 20.3444 9.47605 19.4006 10.3453C18.9772 10.7353 18.4681 10.8727 17.9174 10.8766C17.1276 10.8822 16.3383 10.8628 15.6052 11.2324C15.1062 11.4839 14.8887 11.8937 14.8888 12.443C14.8888 12.9783 15.1675 13.328 15.6191 13.5555C16.4696 13.9842 17.4084 14.0718 18.3272 14.2327C19.6596 14.4661 20.8311 14.9354 21.5832 16.1718C21.5899 16.1826 21.5965 16.1936 21.6029 16.2046C22.4667 17.6685 21.5634 19.7763 19.866 19.8655Z",
			fill: "#0AC855"
		})));
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
//#region MovieSidebarWidget.dil.tsx
	function MovieSidebarWidget(props) {
		const { state, resolutionComplete } = useResolvedComponentResult("MovieSidebarWidget", props);
		if (!state) return resolutionComplete ? props.fallback ?? null : /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 180
		});
		const scores = [{
			value: state.critic_score,
			label: state.critics_label,
			audience: false
		}, {
			value: state.audience_score,
			label: state.audience_label,
			audience: true
		}];
		return /* @__PURE__ */ __dil.jsx("box", {
			width: "100vw",
			maxWidth: "100%"
		}, /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 3
		}, /* @__PURE__ */ __dil.jsx("title", {
			size: "lg",
			weight: "semibold"
		}, state.title), /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("box", { padding: { bottom: 3 } }, /* @__PURE__ */ __dil.jsx("carousel", {
			gap: 2,
			flush: true,
			showArrows: false
		}, /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: "solid",
			size: "lg",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "issue_new_turn",
				payload: { query: state.showtimes_query }
			})
		}, state.showtimes_label)), state.trailer_url && /* @__PURE__ */ __dil.jsx("carousel-item", null, /* @__PURE__ */ __dil.jsx(LinkImpression, {
			url: state.trailer_url,
			inline: true
		}, /* @__PURE__ */ __dil.jsx("button", {
			color: "primary",
			variant: "outline",
			size: "lg",
			onClick: () => GenUI.dispatchAction({
				handler: "client",
				type: "open_url",
				payload: {
					url: state.trailer_url,
					require_safe_url_confirmation: true
				}
			})
		}, state.trailer_label))))), state.metadata && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "clock",
			weight: "light",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			minWidth: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.metadata))), /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, scores.map((score) => score.value == null ? null : /* @__PURE__ */ __dil.jsx("row", {
			key: score.label,
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx(MovieScoreIcon, {
			score: score.value,
			audience: score.audience
		})), /* @__PURE__ */ __dil.jsx("row", {
			flex: 1,
			minWidth: 0,
			gap: 2,
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, score.value, "%"), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, score.label))))), state.directors.length > 0 && /* @__PURE__ */ __dil.jsx("row", {
			width: "100%",
			minHeight: 44,
			gap: 4,
			padding: { y: 2 },
			align: "center",
			border: { top: {
				size: 1,
				color: "subtle"
			} }
		}, /* @__PURE__ */ __dil.jsx("box", { width: 24 }, /* @__PURE__ */ __dil.jsx("icon", {
			name: "video",
			weight: "light",
			size: "2xl"
		})), /* @__PURE__ */ __dil.jsx("col", {
			flex: 1,
			minWidth: 0,
			gap: 0
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, state.directors.join(", ")), /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "secondary"
		}, state.director_label))))));
	}

//#endregion
return MovieSidebarWidget;
})();
return __dilDefaultExport;
})()`})))()}n();export{t as componentSource};
//# sourceMappingURL=movie-sidebar-widget-0158cb19c5e0.js.map