const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-c84b7f49b34a.js","./index-DLeZi4d7-a9f93f910be9.js","./rolldown-runtime-2d059c5e81f4.js","./app-initial-f1c3ec6698cf.js","./app-initial-a42f602681b3.js","./app-initial-48c569ae16a4.js","./app-initial-cb4050427ba6.js","./app-initial-49150e6a0951.css","./app-initial-67e3b9f0ad44.css","./app-initial-869fc50c4531.css","./app-initial-87fe457828af.css","./dist-59dac0530731.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{COt as t,L_t as n,M_t as r,UOt as i,_kt as a,eDt as o,fDt as s,fOt as c,gkt as l,tDt as u,zOt as d}from"./app-initial-f1c3ec6698cf.js";import{HAt as f,WAt as p,_kt as m,cXt as h,gkt as g,lXt as _}from"./app-initial-a42f602681b3.js";function v(e){let t=(0,b.c)(9),[n,r]=(0,x.useState)(!1),[i,a]=(0,x.useState)(null),s=n&&`my-3`,c;t[0]===s?c=t[1]:(c=o(s),t[0]=s,t[1]=c);let l;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(l=e=>{if(e==null)return;let t=new ResizeObserver(()=>r(e.getBoundingClientRect().height>0));return t.observe(e),()=>t.disconnect()},t[2]=l):l=t[2];let u;t[3]!==i?.widget||t[4]!==e?(u=i?.widget===e.widget?(0,S.jsx)(y,{onRetry:()=>a(null)}):(0,S.jsx)(w,{...e,customCss:C,errorMode:`soft`,onError:t=>{a({widget:e.widget}),e.onError?.(t)}}),t[3]=i?.widget,t[4]=e,t[5]=u):u=t[5];let d;return t[6]!==c||t[7]!==u?(d=(0,S.jsx)(`div`,{className:c,ref:l,children:u}),t[6]=c,t[7]=u,t[8]=d):d=t[8],d}function y(e){let t=(0,b.c)(7),{reload:r,onRetry:i}=e,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,S.jsx)(n,{id:`chatgptConversations.dil.renderFailure`,defaultMessage:`This widget couldn’t load`,description:`Shown in a ChatGPT response when a legacy widget fails to load or render`}),t[0]=a):a=t[0];let o;t[1]!==i||t[2]!==r?(o=()=>{r?window.location.reload():i?.()},t[1]=i,t[2]=r,t[3]=o):o=t[3];let s;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,S.jsx)(n,{id:`chatgptConversations.dil.retry`,defaultMessage:`Try again`,description:`Button to retry a failed widget, reloading the page if its renderer could not be downloaded`}),t[4]=s):s=t[4];let c;return t[5]===o?c=t[6]:(c=(0,S.jsxs)(`div`,{className:`flex items-center gap-2 text-secondary`,role:`status`,children:[a,(0,S.jsx)(f,{type:`button`,color:`secondary`,onClick:o,children:s})]}),t[5]=o,t[6]=c),c}var b,x,S,C,w;function T(){return(T=e((()=>{b=l(),u(),x=a(),r(),p(),g(),S=s(),_(),C=`
:host {
  --codex-dil-host-text: var(--color-text);
  --codex-dil-host-text-tertiary: var(--color-codex-description);
  --codex-dil-host-surface: var(--color-surface);
  --codex-dil-host-surface-secondary: color-mix(in srgb, var(--color-surface-secondary) 92%, transparent);
  --codex-dil-host-surface-tertiary: color-mix(in srgb, var(--color-surface-secondary) 85%, transparent);
  --codex-dil-host-border: var(--color-border);
  --codex-dil-host-border-subtle: var(--color-border-subtle);
  --codex-dil-host-border-strong: var(--color-border-strong);
  --codex-dil-host-ring: var(--color-ring);
}

/* Preserve PUIK's small-text metrics so fixed-height review cards fit their text.
 * https://github.com/openai/openai/blob/master/chatgpt/web/styles/puik/variables-semantic.css
 */
:host,
:where([data-theme]) {
  --font-sans: var(--font-ui-family, var(--font-sans-default));
  --font-text-md-size: var(--codex-chat-font-size);
  --font-text-md-line-height: calc(var(--codex-chat-font-size) + 8px);
}

/* Nested widget themes must keep their own palette. */
:host > :where([data-theme]) {
  --color-text: var(--codex-dil-host-text);
  --color-text-emphasis: var(--codex-dil-host-text);
  --color-text-prose: var(--codex-dil-host-text);
  --color-text-secondary: var(--codex-dil-host-text-tertiary);
  --color-text-tertiary: var(--codex-dil-host-text-tertiary);
  --color-surface: var(--codex-dil-host-surface);
  --color-surface-secondary: var(--codex-dil-host-surface-secondary);
  --color-surface-tertiary: var(--codex-dil-host-surface-tertiary);
  --color-border: var(--codex-dil-host-border);
  --color-border-subtle: var(--codex-dil-host-border-subtle);
  --color-border-strong: var(--codex-dil-host-border-strong);
  --color-ring: var(--codex-dil-host-ring);
}

/* Keep selection local until the vendored DIL bundle includes PUIK's reset. */
@layer base {
  ::selection {
    color: var(--color-text);
  }
}
`,w=m(async()=>(await h(async()=>{let{DILRenderer:e}=await import(`./dist-c84b7f49b34a.js`);return{DILRenderer:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url)).DILRenderer,{errorFallback:(0,S.jsx)(y,{reload:!0})})})))()}function E(e){let t=(0,A.c)(10),{state:n,widget:r,theme:i}=e,a;t[0]===n?a=t[1]:(a=structuredClone(n),t[0]=n,t[1]=a);let o,s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(o=[],s=[],t[2]=o,t[3]=s):(o=t[2],s=t[3]);let c;t[4]===a?c=t[5]:(c={...a,is_unfurl_preview:!0,shared_post:!0,is_creator:!1,role_loading:!1,action_pending:!1,submitted:!1,selected_option_ids:o,submitted_option_ids:s,selected_option_id:``,submitted_option_id:``,can_view_results:!1},t[4]=a,t[5]=c);let l=r,u;return t[6]!==c||t[7]!==l||t[8]!==i?(u=(0,j.jsx)(v,{theme:i,initialState:c,widget:l}),t[6]=c,t[7]=l,t[8]=i,t[9]=u):u=t[9],u}function D(e){let t=(0,A.c)(13),{state:n}=e,r,i,a,o,s;if(t[0]!==n){s=Symbol.for(`react.early_return_sentinel`);bb0:{let e=M.safeParse(n);if(!e.success){s=null;break bb0}a=`flex flex-col gap-3`,o=(0,j.jsx)(`p`,{className:`font-semibold`,children:e.data.question}),r=`flex flex-col gap-2`,i=e.data.options.filter(k).map(O)}t[0]=n,t[1]=r,t[2]=i,t[3]=a,t[4]=o,t[5]=s}else r=t[1],i=t[2],a=t[3],o=t[4],s=t[5];if(s!==Symbol.for(`react.early_return_sentinel`))return s;let c;t[6]!==r||t[7]!==i?(c=(0,j.jsx)(`ul`,{className:r,children:i}),t[6]=r,t[7]=i,t[8]=c):c=t[8];let l;return t[9]!==a||t[10]!==o||t[11]!==c?(l=(0,j.jsxs)(`div`,{className:a,children:[o,c]}),t[9]=a,t[10]=o,t[11]=c,t[12]=l):l=t[12],l}function O(e){return(0,j.jsx)(`li`,{children:e.label},e.id)}function k(e){return e.label.trim()}var A,j,M;function N(){return(N=e((()=>{A=l(),c(),T(),j=s(),M=d({question:i(),options:t(d({id:i(),label:i()}))})})))()}export{v as a,C as i,E as n,T as o,N as r,D as t};
//# sourceMappingURL=preview-32db9948d799.js.map