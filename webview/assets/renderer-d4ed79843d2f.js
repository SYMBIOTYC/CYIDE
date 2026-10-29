const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-57f0e38c8deb.js","./index-CgCByfHL-762720d45d54.js","./rolldown-runtime-2d059c5e81f4.js","./app-initial-13f932cb2f13.js","./app-initial-b2ef6e3b3412.css","./compiler-runtime-2015039f3c68.js","./dist-629f11fa15be.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{Xx as t,Yx as n,rS as r,ym as i}from"./app-initial-13f932cb2f13.js";import{t as a}from"./compiler-runtime-2015039f3c68.js";import{n as o,t as s}from"./clsx-4831e7669c42.js";import{s as c}from"./lib-72ce426c00b2.js";import{t as l}from"./message-a17254c4ba02.js";import{r as u,t as d}from"./button-d29ce781be5b.js";import{n as f,t as p}from"./lazy-component-19c444196c4a.js";import{n as m,r as h,t as g}from"./use-resolved-theme-variant-831dc58fe351.js";import{n as _,t as v}from"./internal-render-context-432f6e3aa44f.js";function y(e){let t=(0,S.c)(23),n=(0,C.useContext)(v),r=(0,C.useId)(),i=typeof e.widget.id==`string`?e.widget.id:r,a;t[0]!==n||t[1]!==e.widget||t[2]!==i?(a=n&&typeof e.widget.id!=`string`?{...e.widget,id:i}:e.widget,t[0]=n,t[1]=e.widget,t[2]=i,t[3]=a):a=t[3];let o=a,c=(0,C.useRef)(null),[l,u]=(0,C.useState)(null),[d,f]=(0,C.useState)(null),[p,m]=(0,C.useState)(!1),[h,g]=(0,C.useState)(null),_=p&&`my-3`,y;t[4]===_?y=t[5]:(y=s(_),t[4]=_,t[5]=y);let x=n?`true`:void 0,D=n?`dil-widget-shell`:void 0,O=n?String(l===e.widget):void 0,k=n?String(h?.widget===e.widget):void 0,A=n?String(d===e.widget):void 0,j;t[6]===n?j=t[7]:(j=e=>{if(e==null)return;n&&Object.defineProperty(e,"__maraschinoLegacyRenderRoot",{configurable:!0,get:()=>c.current?.()??null});let t=new ResizeObserver(()=>m(e.getBoundingClientRect().height>0));return t.observe(e),()=>{t.disconnect(),Reflect.deleteProperty(e,`__maraschinoLegacyRenderRoot`)}},t[6]=n,t[7]=j);let M;t[8]!==h?.widget||t[9]!==n||t[10]!==e||t[11]!==o||t[12]!==i?(M=h?.widget===e.widget?(0,w.jsx)(b,{onRetry:()=>g(null)}):(0,w.jsx)(E,{...e,disableExternalMedia:n?.disableExternalMedia??e.disableExternalMedia,widget:o,onLoad:(t,r)=>{n&&(c.current=()=>r(i)),e.onLoad?.(t,r)},onInitialRenderCommit:()=>{n&&u(e.widget),e.onInitialRenderCommit?.()},onSoftFailure:t=>{n&&f(e.widget),e.onSoftFailure?.(t)},supportedClientActions:n?[]:e.supportedClientActions,onAction:n?void 0:e.onAction,onStateMutation:n?void 0:e.onStateMutation,customCss:T,errorMode:`soft`,onError:t=>{g({widget:e.widget}),e.onError?.(t)}}),t[8]=h?.widget,t[9]=n,t[10]=e,t[11]=o,t[12]=i,t[13]=M):M=t[13];let N;return t[14]!==y||t[15]!==x||t[16]!==D||t[17]!==O||t[18]!==k||t[19]!==A||t[20]!==j||t[21]!==M?(N=(0,w.jsx)(`div`,{className:y,"data-internal-render-legacy-dil":x,"data-testid":D,"data-internal-render-dil-initial-render-committed":O,"data-internal-render-dil-render-failure":k,"data-internal-render-dil-soft-render-failure":A,ref:j,children:M}),t[14]=y,t[15]=x,t[16]=D,t[17]=O,t[18]=k,t[19]=A,t[20]=j,t[21]=M,t[22]=N):N=t[22],N}function b(e){let t=(0,S.c)(10),{reload:n,onRetry:r}=e,i=(0,C.useContext)(v)?`true`:void 0,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,w.jsx)(l,{id:`chatgptConversations.dil.renderFailure`,defaultMessage:`This widget couldn’t load`,description:`Shown in a ChatGPT response when a legacy widget fails to load or render`}),t[0]=a):a=t[0];let o;t[1]!==r||t[2]!==n?(o=()=>{n?window.location.reload():r?.()},t[1]=r,t[2]=n,t[3]=o):o=t[3];let s;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,w.jsx)(l,{id:`chatgptConversations.dil.retry`,defaultMessage:`Try again`,description:`Button to retry a failed widget, reloading the page if its renderer could not be downloaded`}),t[4]=s):s=t[4];let c;t[5]===o?c=t[6]:(c=(0,w.jsx)(d,{type:`button`,color:`secondary`,onClick:o,children:s}),t[5]=o,t[6]=c);let u;return t[7]!==i||t[8]!==c?(u=(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-secondary`,role:`status`,"data-internal-render-dil-render-failure":i,children:[a,c]}),t[7]=i,t[8]=c,t[9]=u):u=t[9],u}function x(e){let t=(0,S.c)(5),{widget:n,state:r}=e,i=h(m()),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[0]=a):a=t[0];let o;return t[1]!==r||t[2]!==i||t[3]!==n?(o=(0,w.jsx)(`div`,{inert:!0,children:(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(y,{theme:i,widget:n,initialState:r,supportedClientActions:a})})}),t[1]=r,t[2]=i,t[3]=n,t[4]=o):o=t[4],o}var S,C,w,T,E;function D(){return(D=e((()=>{S=a(),o(),C=r(),c(),u(),p(),g(),_(),w=i(),t(),T=`
:host {
  --codex-dil-host-text: var(--color-text);
  --codex-dil-host-text-secondary: var(--color-text-secondary);
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
  --color-text-secondary: var(--codex-dil-host-text-secondary);
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
`,E=f(async()=>(await n(async()=>{let{DILRenderer:e}=await import(`./dist-57f0e38c8deb.js`);return{DILRenderer:e}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).DILRenderer,{errorFallback:(0,w.jsx)(b,{reload:!0})})})))()}export{D as i,y as n,x as r,T as t};
//# sourceMappingURL=renderer-d4ed79843d2f.js.map