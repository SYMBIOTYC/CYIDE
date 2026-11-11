const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-27d7596b62df.js","./index--yvJOvLS-630fc6f83f59.js","./rolldown-runtime-428824ca0286.js","./app-initial-48d97b67aa1f.js","./app-initial-bf355fcf8471.js","./app-initial-25ee126179db.js","./app-initial-de6cf345968e.js","./c820ee6bfcdd.css","./app-initial-5ab9006bca67.js","./c019493ad456.css","./ae30b3952d5b.css","./d7a6e5f10992.css","./579c7693869a.css","./dist-b78edb20ecb9.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-428824ca0286.js";import{E6 as t,O6 as n,T6 as r,mI as i,vit as a,yI as o,yit as s}from"./app-initial-48d97b67aa1f.js";import{IE as c,LE as l,OBt as u,kBt as d}from"./app-initial-bf355fcf8471.js";import{aPt as f,iPt as p,oPt as m}from"./app-initial-25ee126179db.js";import{K$ as h,g1 as g,q$ as _,v1 as v}from"./app-initial-5ab9006bca67.js";function y(e){let t=(0,S.c)(40),n,i,a;t[0]===e?(n=t[1],i=t[2],a=t[3]):({onCommittedState:n,onRenderRoot:i,...a}=e,t[0]=e,t[1]=n,t[2]=i,t[3]=a);let o=(0,C.useContext)(c),s=o!=null||i!=null,l,u;t[4]===i?(l=t[5],u=t[6]):(l=()=>()=>i?.(null),u=[i],t[4]=i,t[5]=l,t[6]=u),(0,C.useEffect)(l,u);let d=(0,C.useId)(),f=typeof a.widget.id==`string`?a.widget.id:d,p;t[7]!==s||t[8]!==a.widget||t[9]!==f?(p=s&&typeof a.widget.id!=`string`?{...a.widget,id:f}:a.widget,t[7]=s,t[8]=a.widget,t[9]=f,t[10]=p):p=t[10];let m=p,h=(0,C.useRef)(null),[g,_]=(0,C.useState)(null),[v,y]=(0,C.useState)(null),[x,D]=(0,C.useState)(!1),[O,k]=(0,C.useState)(null),A=(0,C.useRef)(null),j;t[11]!==n||t[12]!==a.widget?(j=()=>n==null?null:(A.current?.widget!==a.widget&&(A.current={widget:a.widget}),A.current),t[11]=n,t[12]=a.widget,t[13]=j):j=t[13];let M=j,N;t[14]===M?N=t[15]:(N=()=>{let e=M();e!=null&&(e.failed=!0)},t[14]=M,t[15]=N);let P=N,F=x&&`my-3`,I;t[16]===F?I=t[17]:(I=r(F),t[16]=F,t[17]=I);let L=o?`true`:void 0,R=o?`dil-widget-shell`:void 0,z=o?String(g===a.widget):void 0,B=o?String(O?.widget===a.widget):void 0,V=o?String(v===a.widget):void 0,H;t[18]===o?H=t[19]:(H=e=>{if(e==null)return;o&&Object.defineProperty(e,"__maraschinoLegacyRenderRoot",{configurable:!0,get:()=>h.current?.()??null});let t=new ResizeObserver(()=>D(e.getBoundingClientRect().height>0));return t.observe(e),()=>{t.disconnect(),Reflect.deleteProperty(e,`__maraschinoLegacyRenderRoot`)}},t[18]=o,t[19]=H);let U;t[20]!==P||t[21]!==O?.widget||t[22]!==M||t[23]!==o||t[24]!==s||t[25]!==n||t[26]!==i||t[27]!==a||t[28]!==m||t[29]!==f?(U=O?.widget===a.widget?(0,w.jsx)(b,{onRetry:()=>{A.current=null,k(null)}}):(0,w.jsx)(E,{...a,disableExternalMedia:o?.disableExternalMedia??a.disableExternalMedia,widget:m,onLoad:(e,t)=>{s&&(h.current=()=>t(f),i?.(h.current())),a.onLoad?.(e,t)},onInitialRenderCommit:()=>{i?.(h.current?.()??null),o&&_(a.widget),a.onInitialRenderCommit?.()},onCommittedState:n==null?void 0:e=>{M()?.failed||n(e)},onSoftFailure:e=>{e.scope!==`action-resolution`&&P(),o&&y(a.widget),a.onSoftFailure?.(e)},supportedClientActions:o?[]:a.supportedClientActions,onAction:o?void 0:a.onAction,onStateMutation:o?void 0:a.onStateMutation,customCss:T,errorMode:`soft`,onError:e=>{P(),i?.(null),k({widget:a.widget}),a.onError?.(e)}}),t[20]=P,t[21]=O?.widget,t[22]=M,t[23]=o,t[24]=s,t[25]=n,t[26]=i,t[27]=a,t[28]=m,t[29]=f,t[30]=U):U=t[30];let W;return t[31]!==z||t[32]!==B||t[33]!==V||t[34]!==H||t[35]!==U||t[36]!==I||t[37]!==L||t[38]!==R?(W=(0,w.jsx)(`div`,{className:I,"data-internal-render-legacy-dil":L,"data-testid":R,"data-internal-render-dil-initial-render-committed":z,"data-internal-render-dil-render-failure":B,"data-internal-render-dil-soft-render-failure":V,ref:H,children:U}),t[31]=z,t[32]=B,t[33]=V,t[34]=H,t[35]=U,t[36]=I,t[37]=L,t[38]=R,t[39]=W):W=t[39],W}function b(e){let t=(0,S.c)(10),{reload:n,onRetry:r}=e,i=(0,C.useContext)(c)?`true`:void 0,a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,w.jsx)(o,{id:`chatgptConversations.dil.renderFailure`,defaultMessage:`This widget couldn’t load`,description:`Shown in a ChatGPT response when a legacy widget fails to load or render`}),t[0]=a):a=t[0];let s;t[1]!==r||t[2]!==n?(s=()=>{n?window.location.reload():r?.()},t[1]=r,t[2]=n,t[3]=s):s=t[3];let l;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,w.jsx)(o,{id:`chatgptConversations.dil.retry`,defaultMessage:`Try again`,description:`Button to retry a failed widget, reloading the page if its renderer could not be downloaded`}),t[4]=l):l=t[4];let u;t[5]===s?u=t[6]:(u=(0,w.jsx)(g,{type:`button`,color:`secondary`,onClick:s,children:l}),t[5]=s,t[6]=u);let d;return t[7]!==i||t[8]!==u?(d=(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-secondary`,role:`status`,"data-internal-render-dil-render-failure":i,children:[a,u]}),t[7]=i,t[8]=u,t[9]=d):d=t[9],d}function x(e){let t=(0,S.c)(5),{widget:n,state:r}=e,i=m(f()),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[0]=a):a=t[0];let o;return t[1]!==r||t[2]!==i||t[3]!==n?(o=(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(y,{theme:i,widget:n,initialState:r,supportedClientActions:a})}),t[1]=r,t[2]=i,t[3]=n,t[4]=o):o=t[4],o}var S,C,w,T,E;function D(){return(D=e((()=>{S=a(),t(),C=s(),i(),v(),h(),p(),l(),w=n(),d(),T=`
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
`,E=_(async()=>(await u(async()=>{let{DILRenderer:e}=await import(`./dist-27d7596b62df.js`);return{DILRenderer:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url)).DILRenderer,{errorFallback:(0,w.jsx)(b,{reload:!0})})})))()}export{D as i,y as n,x as r,T as t};
//# sourceMappingURL=renderer-ebaaa0b26a1d.js.map