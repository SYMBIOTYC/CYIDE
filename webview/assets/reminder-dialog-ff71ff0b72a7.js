import{n as e,o as t}from"./rolldown-runtime-428824ca0286.js";import{Ant as n,BR as r,D9 as i,Eet as a,KR as o,Q3 as s,VR as c,ZR as l,az as u,d9 as d,eet as f,hV as p,i9 as m,knt as h,l5 as g,mV as _,met as v,rz as y,sL as b,uz as x}from"./app-initial-9f20463a6878.js";import{Bcn as S,CDt as C,DDt as w,EDt as T,G0t as E,MDt as D,NDt as O,Run as k,SDt as A,Sdn as j,U0t as M,Wun as N,bDt as ee,gnn as P,mnn as F}from"./app-initial-553f37c950ea.js";import{$fn as I,Cjn as L,JPn as te,JTn as ne,KTn as R,Qfn as z,YPn as B,dMn as re,hMn as ie,vMn as ae,yMn as oe}from"./app-initial-df9c4d3df63b.js";import{n as se,t as ce}from"./automation-schedule-time-dropdown-5c3c916914a2.js";import{m as le}from"./startup-diagnostics-8e9af68f948e.js";import{a as ue,n as de,r as fe,t as pe}from"./tooltip-28e85b8da18b.js";import{t as me}from"./runtime-865bcbbf1c33.js";import{d as he,f as ge,i as _e,l as V,n as ve,r as ye}from"./get-course-e34d69390442.js";import{n as be,t as xe}from"./icon-85309ada485a.js";var H;function U(){return(U=e((()=>{H=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`]})))()}var W,G;function K(){return(K=e((()=>{W=`const ReminderEditor = (() => {
var __dilDefaultExport = (function() {


//#region ReminderEditorContent.dil.tsx
	function EditorForm({ data, settings, dispatchAction }) {
		const { labels, days, picker, usesAccessibilityLayout } = data;
		const [custom, setCustom] = DIL.useState(settings.weekdays.length > 0 && settings.weekdays.length < 7);
		const [selected, setSelected] = DIL.useState(settings.weekdays);
		const [time, setTime] = DIL.useState(settings.localTime ?? "19:00");
		const [error, setError] = DIL.useState("done");
		const [pending, setPending] = DIL.useState(false);
		const busy = DIL.useRef(false);
		const locked = pending || error === "retry";
		const scheduledDays = custom ? selected : days.map((day) => day.value);
		const valid = /^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(time) && scheduledDays.length > 0;
		async function dispatch(action) {
			if (busy.current) return;
			busy.current = true;
			setPending(true);
			let outcome;
			try {
				outcome = await dispatchAction(action);
			} catch {
				outcome = "retry";
			}
			if (outcome === "done") return;
			setError(outcome);
			busy.current = false;
			setPending(false);
		}
		const primaryAction = () => {
			if (error === "retry") dispatch({ type: "retry" });
			else if (valid) dispatch({
				type: "save",
				weekdays: scheduledDays,
				localTime: time
			});
		};
		const repeatMode = custom ? "custom" : "daily";
		const repeatOptions = [{
			value: "daily",
			label: labels.daily
		}, {
			value: "custom",
			label: labels.custom
		}];
		function changeRepeat(mode) {
			setCustom(mode === "custom");
			if (mode === "custom" && !selected.length) setSelected(days.map((day) => day.value));
		}
		const timeControls = /* @__PURE__ */ __dil.jsx(__dil.Fragment, null, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, labels.time), picker.kind === "host" ? /* @__PURE__ */ __dil.jsx("learning-course-reminder-time-picker", {
			ariaLabel: labels.time,
			value: time,
			disabled: locked,
			onChange: setTime
		}) : /* @__PURE__ */ __dil.jsx("select", {
			ariaLabel: labels.time,
			variant: "ghost",
			value: time,
			disabled: locked,
			options: picker.options,
			onChange: setTime
		}));
		const pauseButton = settings.enabled && error !== "retry" && /* @__PURE__ */ __dil.jsx("button", {
			label: labels.pause,
			variant: "ghost",
			size: "xl",
			block: usesAccessibilityLayout,
			disabled: locked,
			onClick: () => void dispatch({ type: "pause" })
		}, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "tertiary"
		}, labels.pause));
		const saveButton = /* @__PURE__ */ __dil.jsx("button", {
			size: "xl",
			block: usesAccessibilityLayout,
			disabled: pending || !locked && !valid,
			onClick: primaryAction
		}, error === "retry" ? labels.retry : settings.enabled ? labels.save : labels.enable);
		return /* @__PURE__ */ __dil.jsx("col", {
			minHeight: 248,
			justify: "between",
			gap: custom ? 5 : 4
		}, /* @__PURE__ */ __dil.jsx("col", { gap: 3 }, usesAccessibilityLayout ? /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			align: "stretch",
			border: true,
			radius: "xl",
			padding: 4,
			gap: 2
		}, timeControls) : /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 64,
			border: true,
			radius: "xl",
			padding: { x: 4 },
			justify: "between",
			align: "center"
		}, timeControls), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			weight: "medium"
		}, labels.repeat), usesAccessibilityLayout ? /* @__PURE__ */ __dil.jsx("col", {
			role: "group",
			ariaLabel: labels.repeat,
			gap: 2
		}, repeatOptions.map((option) => {
			const active = option.value === repeatMode;
			return /* @__PURE__ */ __dil.jsx("pressable", {
				key: option.value,
				direction: "row",
				width: "100%",
				minHeight: 44,
				align: "center",
				gap: 2,
				padding: {
					x: 4,
					y: 2
				},
				border: true,
				radius: "md",
				background: active ? "surface-secondary" : "transparent",
				ariaLabel: option.label,
				ariaPressed: active,
				disabled: locked,
				onClick: () => {
					if (!active) changeRepeat(option.value);
				}
			}, /* @__PURE__ */ __dil.jsx("box", {
				flex: 1,
				minWidth: 0
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "md",
				weight: active ? "semibold" : void 0
			}, option.label)), active && /* @__PURE__ */ __dil.jsx("icon", {
				name: "check",
				size: "sm"
			}));
		})) : /* @__PURE__ */ __dil.jsx("segmented-control", {
			label: labels.repeat,
			block: true,
			pill: false,
			variant: "soft",
			size: "xl",
			disabled: locked,
			value: repeatMode,
			options: repeatOptions,
			onChange: changeRepeat
		}), custom && /* @__PURE__ */ __dil.jsx("row", {
			role: "group",
			ariaLabel: labels.days,
			gap: 1
		}, days.map((day) => {
			const active = selected.includes(day.value);
			return /* @__PURE__ */ __dil.jsx("pressable", {
				key: day.value,
				flex: 1,
				minWidth: 0,
				minHeight: 36,
				align: "center",
				justify: "center",
				radius: "md",
				border: active ? {
					size: 1,
					color: "transparent"
				} : true,
				background: active ? "surface-inverted" : "surface-secondary",
				disabled: locked,
				ariaLabel: day.full,
				ariaPressed: active,
				onClick: () => setSelected(active ? selected.filter((d) => d !== day.value) : [...selected, day.value])
			}, /* @__PURE__ */ __dil.jsx("text", {
				size: "sm",
				color: active ? {
					light: "gray-0",
					dark: "gray-1000"
				} : "primary"
			}, day.short));
		}))), error !== "done" && /* @__PURE__ */ __dil.jsx("row", {
			role: "alert",
			align: "start",
			gap: 2,
			radius: "lg",
			padding: 3,
			background: "danger",
			border: {
				color: "danger",
				size: 1
			}
		}, /* @__PURE__ */ __dil.jsx("icon", {
			name: "info-circle",
			size: "sm",
			color: "danger"
		}), /* @__PURE__ */ __dil.jsx("box", { flex: 1 }, /* @__PURE__ */ __dil.jsx("text", {
			size: "sm",
			color: "danger"
		}, error === "retry" ? labels.retryMessage : labels[error])))), usesAccessibilityLayout ? /* @__PURE__ */ __dil.jsx("col", {
			width: "100%",
			gap: 2,
			align: "stretch"
		}, pauseButton, saveButton) : /* @__PURE__ */ __dil.jsx("row", {
			gap: 2,
			justify: "end",
			align: "center"
		}, pauseButton && /* @__PURE__ */ __dil.jsx("box", {
			flex: 1,
			align: "start"
		}, pauseButton), saveButton));
	}
	function ReminderEditorContent({ dispatchAction }) {
		const data = DIL.useAppData((value) => value);
		const { settings, labels } = data;
		if (settings.state === "ready") return /* @__PURE__ */ __dil.jsx(EditorForm, {
			data,
			settings,
			dispatchAction
		});
		if (settings.state === "unavailable") return /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			align: "start"
		}, /* @__PURE__ */ __dil.jsx("box", { role: "alert" }, /* @__PURE__ */ __dil.jsx("text", null, labels.unavailable)), /* @__PURE__ */ __dil.jsx("button", { onClick: () => void dispatchAction({ type: "reload" }) }, labels.reload));
		return /* @__PURE__ */ __dil.jsx("col", {
			minHeight: 248,
			justify: "between",
			gap: 4,
			role: "status",
			ariaLabel: labels.loading
		}, /* @__PURE__ */ __dil.jsx("col", {
			gap: 3,
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("row", {
			minHeight: 64,
			border: true,
			radius: "xl",
			padding: { x: 4 },
			justify: "between",
			align: "center"
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 96,
			height: 16,
			radius: "md",
			reducedMotion: true
		}), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 112,
			height: 28,
			radius: "md",
			reducedMotion: true
		})), /* @__PURE__ */ __dil.jsx("col", { gap: 2 }, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 64,
			height: 20,
			radius: "md",
			reducedMotion: true
		}), /* @__PURE__ */ __dil.jsx("loading-block", {
			width: "100%",
			height: 40,
			radius: "md",
			reducedMotion: true
		}))), /* @__PURE__ */ __dil.jsx("row", {
			justify: "end",
			ariaHidden: true
		}, /* @__PURE__ */ __dil.jsx("loading-block", {
			width: 144,
			height: 44,
			radius: "full",
			reducedMotion: true
		})));
	}

//#endregion
//#region ReminderEditor.dil.tsx
	function ReminderEditor() {
		return /* @__PURE__ */ __dil.jsx(ReminderEditorContent, { dispatchAction: (action) => LearningCourseReminderHost.dispatch(action) });
	}

//#endregion
return ReminderEditor;
})();
return __dilDefaultExport;
})();
DIL.render(__dil.jsx(ReminderEditor, {}));`,G={version:`2.0`,code:W}})))()}var q;function J(){return(J=e((()=>{c(),q=r({time:{id:`chatgpt.learning_course.reminder.editor.time.label`,defaultMessage:`Remind me at`,description:`Label for the local time picker in the course reminder editor.`},repeat:{id:`chatgpt.learning_course.reminder.editor.repeat.label`,defaultMessage:`Repeat`,description:`Label for the course reminder recurrence selector.`},daily:{id:`chatgpt.learning_course.reminder.editor.repeat.daily`,defaultMessage:`Daily`,description:`Reminder repeat option that selects all seven days.`},custom:{id:`chatgpt.learning_course.reminder.editor.repeat.custom`,defaultMessage:`Custom`,description:`Reminder repeat option that lets the learner choose weekdays.`},days:{id:`chatgpt.learning_course.reminder.editor.days.label`,defaultMessage:`Days`,description:`Accessible name of the weekday selection group in the reminder editor.`},enable:{id:`chatgpt.learning_course.reminder.editor.enable`,defaultMessage:`Turn on reminders`,description:`Explicit opt-in button to enable reminders for this course.`},save:{id:`chatgpt.learning_course.reminder.editor.save`,defaultMessage:`Save changes`,description:`Button to update an active course reminder schedule.`},pause:{id:`chatgpt.learning_course.reminder.editor.pause`,defaultMessage:`Turn off reminders`,description:`Button to pause reminders for this course, preserving the saved schedule.`},reload:{id:`chatgpt.learning_course.reminder.editor.reload`,defaultMessage:`Reload`,description:`Button to fetch the course's reminder settings again.`},retry:{id:`chatgpt.learning_course.reminder.editor.retry`,defaultMessage:`Retry`,description:`Button to retry the identical reminder update after a failed save.`},retryMessage:{id:`chatgpt.learning_course.reminder.editor.error.retry`,defaultMessage:`We couldn’t confirm the change. Retry to finish saving it.`,description:`Message after an ambiguous course reminder save or timer sync failure; retry repeats the same request.`},invalid:{id:`chatgpt.learning_course.reminder.editor.error.invalid`,defaultMessage:`Choose at least one day and a valid time.`,description:`Validation message for an invalid course reminder schedule.`},unavailable:{id:`chatgpt.learning_course.reminder.editor.unavailable`,defaultMessage:`Reminder settings are unavailable. Try reloading.`,description:`Error when the course reminder settings cannot be read, including older backend versions.`},loading:{id:`chatgpt.learning_course.reminder.editor.loading`,defaultMessage:`Loading reminders…`,description:`Status while the course reminder editor loads saved settings.`}})})))()}function Se(e){let t=(0,Y.c)(6),{value:n,disabled:r,onChange:i}=e,a;t[0]!==i||t[1]!==n?(a=(0,Q.jsx)(ce,{appearance:`prominent`,value:n,onChange:i}),t[0]=i,t[1]=n,t[2]=a):a=t[2];let o;return t[3]!==r||t[4]!==a?(o=(0,Q.jsx)(`fieldset`,{disabled:r,children:a}),t[3]=r,t[4]=a,t[5]=o):o=t[5],o}function Ce(e){let t=(0,Y.c)(55),n=u(te),r=(0,Z.useRef)(!1),i=ne(he),a=x(j),o=x(k),s;t[0]!==e||t[1]!==n?(s=()=>!r.current&&e.isOpen()&&n.get(j)===e.accountId&&n.get(k)===e.userId&&ae(n,`1506768434`),t[0]=e,t[1]=n,t[2]=s):s=t[2];let c=s,l;t[3]===e?l=t[4]:(l=()=>{r.current=!0,e.onClose()},t[3]=e,t[4]=l);let d=l,f=i&&a===e.accountId&&o===e.userId,{onPresented:m}=e,h,g;t[5]!==f||t[6]!==m?(h=()=>{f&&m()},g=[f,m],t[5]=f,t[6]=m,t[7]=h,t[8]=g):(h=t[7],g=t[8]),(0,Z.useEffect)(h,g);let _=e.onClose,v,y;t[9]!==f||t[10]!==_?(v=()=>{f||(r.current=!0,_())},y=[f,_],t[9]=f,t[10]=_,t[11]=v,t[12]=y):(v=t[11],y=t[12]),(0,Z.useEffect)(v,y);let b;t[13]!==e.accountId||t[14]!==e.courseId||t[15]!==e.loadId||t[16]!==e.userId?(b=[`learning-course-reminder`,e.accountId,e.userId,e.courseId,e.loadId],t[13]=e.accountId,t[14]=e.courseId,t[15]=e.loadId,t[16]=e.userId,t[17]=b):b=t[17];let S;t[18]!==c||t[19]!==e.accountId||t[20]!==e.courseId||t[21]!==e.userId?(S=t=>{let{signal:n}=t;return ve(e.courseId,{accountId:e.accountId,userId:e.userId},()=>{if(!c())throw Error(`Reminder unavailable`)},n)},t[18]=c,t[19]=e.accountId,t[20]=e.courseId,t[21]=e.userId,t[22]=S):S=t[22];let T;t[23]!==b||t[24]!==S?(T={queryKey:b,queryFn:S,staleTime:0,gcTime:0,retry:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1},t[23]=b,t[24]=S,t[25]=T):T=t[25];let{data:E,isPending:D,isError:O,refetch:A,dataUpdatedAt:M}=p(T);if(!f)return null;let N;t[26]!==d||t[27]!==c||t[28]!==E?.reminder?.is_enabled||t[29]!==e?(N=t=>{t||(c()&&e.track(`dismissed`,{wasEnabled:E?.reminder?.is_enabled}),d())},t[26]=d,t[27]=c,t[28]=E?.reminder?.is_enabled,t[29]=e,t[30]=N):N=t[30];let P=E?.course_metadata,F;t[31]!==D||t[32]!==P?(F=(0,Q.jsx)(we,{loading:D,metadata:P}),t[31]=D,t[32]=P,t[33]=F):F=t[33];let I=O?null:E?.reminder,L;t[34]===A?L=t[35]:(L=()=>void A(),t[34]=A,t[35]=L);let R;t[36]!==d||t[37]!==c||t[38]!==M||t[39]!==D||t[40]!==e.accountId||t[41]!==e.courseId||t[42]!==e.onSaved||t[43]!==e.track||t[44]!==e.userId||t[45]!==I||t[46]!==L?(R=(0,Q.jsx)(C,{spacing:`large`,children:(0,Q.jsx)(Te,{reminder:I,loading:D,courseId:e.courseId,accountId:e.accountId,userId:e.userId,track:e.track,current:c,onClose:d,onSaved:e.onSaved,reload:L},M)}),t[36]=d,t[37]=c,t[38]=M,t[39]=D,t[40]=e.accountId,t[41]=e.courseId,t[42]=e.onSaved,t[43]=e.track,t[44]=e.userId,t[45]=I,t[46]=L,t[47]=R):R=t[47];let z;t[48]!==D||t[49]!==F||t[50]!==R?(z=(0,Q.jsxs)(ee,{size:`viewport`,className:`min-h-92`,"aria-busy":D,children:[F,R]}),t[48]=D,t[49]=F,t[50]=R,t[51]=z):z=t[51];let B;return t[52]!==z||t[53]!==N?(B=(0,Q.jsx)(w,{open:!0,size:`responsiveSheet`,variant:`form`,contentOverflow:`visible`,widthHint:440,onOpenChange:N,children:z}),t[52]=z,t[53]=N,t[54]=B):B=t[54],B}function we(e){let t=(0,Y.c)(9),{metadata:n,loading:r}=e,i=r!==void 0&&r,a;t[0]===i?a=t[1]:(a=i&&(0,Q.jsx)(`div`,{className:`mb-1 flex h-5 items-center`,"aria-hidden":!0,children:(0,Q.jsx)(M,{className:`w-48`,animate:!1})}),t[0]=i,t[1]=a);let s;t[2]!==i||t[3]!==n?(s=!i&&n?.title&&(0,Q.jsxs)(`div`,{className:`mb-1 flex items-center gap-1.5 text-sm font-normal text-secondary`,children:[(0,Q.jsx)(xe,{iconUrlOrEmoji:n.icon_url_or_emoji}),(0,Q.jsx)(`span`,{children:n.title})]}),t[2]=i,t[3]=n,t[4]=s):s=t[4];let c;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,Q.jsx)(D,{children:(0,Q.jsx)(o,{id:`chatgpt.learning_course.reminder.editor.title`,defaultMessage:`Lesson reminders`,description:`Title of the dialog for scheduling reminders for one learning course.`})}),t[5]=c):c=t[5];let l;return t[6]!==a||t[7]!==s?(l=(0,Q.jsx)(A,{title:(0,Q.jsxs)(Q.Fragment,{children:[a,s,c]})}),t[6]=a,t[7]=s,t[8]=l):l=t[8],l}function Te(e){let t=(0,Y.c)(40),{reminder:n,loading:r,courseId:i,accountId:a,userId:o,current:s,track:c,onSaved:u,onClose:d,reload:f}=e,p=l(),m=I(),h=(0,Z.useRef)(!1),g=(0,Z.useRef)(null),_;if(t[0]!==p.locale){let e=new Intl.Locale(p.locale);_=e.getWeekInfo?.().firstDay??e.weekInfo?.firstDay??1,t[0]=p.locale,t[1]=_}else _=t[1];let v=_,y,b,x;if(t[2]!==v||t[3]!==p){let e=[...H.slice(v-1),...H.slice(0,v-1)],n;t[7]===p?n=t[8]:(n=(0,X.default)(q,e=>p.formatMessage(e)),t[7]=p,t[8]=n),y=n,b=y,x=e.map(e=>{let t=new Date(Date.UTC(2024,0,1+H.indexOf(e),12));return{value:e,short:p.formatDate(t,{weekday:`short`,timeZone:`UTC`}),full:p.formatDate(t,{weekday:`long`,timeZone:`UTC`})}}),t[2]=v,t[3]=p,t[4]=y,t[5]=b,t[6]=x}else y=t[4],b=t[5],x=t[6];let S;t[9]===Symbol.for(`react.memo_cache_sentinel`)?(S={kind:`host`},t[9]=S):S=t[9];let C;t[10]!==r||t[11]!==n?(C=n?{state:`ready`,enabled:n.is_enabled,localTime:n.local_time??null,weekdays:H.filter(e=>n.weekdays.includes(e))}:{state:r?`loading`:`unavailable`},t[10]=r,t[11]=n,t[12]=C):C=t[12];let w;t[13]!==b||t[14]!==x||t[15]!==C?(w={labels:b,days:x,picker:S,settings:C},t[13]=b,t[14]=x,t[15]=C,t[16]=w):w=t[16];let T=w,E;if(t[17]!==a||t[18]!==i||t[19]!==s||t[20]!==d||t[21]!==u||t[22]!==f||t[23]!==n||t[24]!==c||t[25]!==o){E=async function(t){let r=Ee.safeParse(t);if(!r.success||!s()||h.current||!le())return`invalid`;let i=r.data;if(i.type===`reload`)return f(),`done`;if(!n)return`invalid`;let a;if(i.type===`retry`){if(!g.current)return`invalid`;a=g.current}else if(i.type===`pause`)a={is_enabled:!1};else{let e=Intl.DateTimeFormat().resolvedOptions().timeZone;if(!e)return`invalid`;a={is_enabled:!0,weekdays:H.filter(e=>i.weekdays.includes(e)),local_time:i.localTime,device_timezone:e}}return h.current=!0,e(a).finally(()=>{h.current=!1})};async function e(e){let t={operationId:crypto.randomUUID(),wasEnabled:n?.is_enabled};c(`attempted`,t);try{let n=await L.safePut(`/learning/courses/{course_id}/reminder`,{parameters:{path:{course_id:i}},requestBody:e,expectedIdentity:{accountId:a,userId:o},assertRequestCurrent:()=>{if(!s())throw Error(`Reminder unavailable`)},additionalHeaders:{"x-openai-use-sheep":`1`},expectedErrorStatuses:[404,422,503],retry:`never`});return s()&&(c(`result`,{...t,result:V.saved,settingsRevision:String(n.revision)}),u(n),d()),`done`}catch(n){let r=n;if(!s())return`done`;if(r instanceof re){if(r.status===404)return c(`result`,{...t,result:V.unavailable}),d(),`done`;if(r.status===422)return c(`result`,{...t,result:V.invalid}),g.current=null,`invalid`}return c(`result`,{...t,result:V.unconfirmed}),g.current=e,`retry`}}t[17]=a,t[18]=i,t[19]=s,t[20]=d,t[21]=u,t[22]=f,t[23]=n,t[24]=c,t[25]=o,t[26]=E}else E=t[26];let D;t[27]===E?D=t[28]:(D={LearningCourseReminderHost:{dispatch:E}},t[27]=E,t[28]=D);let O=m?`dark`:`light`,k;t[29]!==y.reload||t[30]!==f?(k=(0,Q.jsx)(F,{onClick:f,children:y.reload}),t[29]=y.reload,t[30]=f,t[31]=k):k=t[31];let A;t[32]!==y.unavailable||t[33]!==k?(A=(0,Q.jsxs)(`div`,{role:`alert`,children:[y.unavailable,` `,k]}),t[32]=y.unavailable,t[33]=k,t[34]=A):A=t[34];let j;return t[35]!==T||t[36]!==A||t[37]!==D||t[38]!==O?(j=(0,Q.jsx)(fe,{dil:G.code,components:De,appData:T,globals:D,theme:O,tooltipComponent:pe,errorFallback:A}),t[35]=T,t[36]=A,t[37]=D,t[38]=O,t[39]=j):j=t[39],j}var Y,X,Z,Q,Ee,De;function $(){return($=e((()=>{Y=h(),ue(),me(),U(),K(),_(),X=t(b(),1),y(),Z=n(),c(),g(),N(),se(),S(),de(),P(),O(),T(),E(),B(),R(),oe(),z(),ie(),ye(),be(),_e(),J(),ge(),Q=s(),Ee=i(`type`,[v({type:f(`save`),localTime:a().regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/),weekdays:d(m(H)).min(1).max(7).refine(e=>new Set(e).size===e.length)}),v({type:f(`pause`)}),v({type:f(`retry`)}),v({type:f(`reload`)})]),De={"learning-course-reminder-time-picker":Se}})))()}$();export{Ce as ReminderDialog};
//# sourceMappingURL=reminder-dialog-ff71ff0b72a7.js.map