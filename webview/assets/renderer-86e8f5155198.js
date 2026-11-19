const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-c12b6755fddf.js","./index-C_GQX6nt-6566773e16f2.js","./rolldown-runtime-428824ca0286.js","./app-initial-ef83d79c5fa7.js","./app-initial-f8f84852daaa.js","./app-initial-17dd08407f00.js","./app-initial-2301d91e88a2.js","./app-initial-050fbd442c4f.js","./c33752c5468c.css","./49150e6a0951.css","./bbfced09aa26.css","./70020a532256.css","./486da44dbe36.css","./dist-3a4e9cbb2cba.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-428824ca0286.js";import{Mtt as t,WL as n,i3 as r,jtt as i,n3 as a,t3 as o,zL as s}from"./app-initial-ef83d79c5fa7.js";import{Cyn as c,G5t as l,K5t as u,XW as d,Y9t as f,Z9t as p,ZW as m,wyn as h}from"./app-initial-f8f84852daaa.js";import{GNt as g,UNt as _,WNt as v}from"./app-initial-17dd08407f00.js";function y(e){let t=(0,S.c)(40),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({onCommittedState:n,onRenderRoot:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=(0,C.useContext)(d),s=a!=null||r!=null,c,l;t[4]===r?(c=t[5],l=t[6]):(c=()=>()=>r?.(null),l=[r],t[4]=r,t[5]=c,t[6]=l),(0,C.useEffect)(c,l);let u=(0,C.useId)(),f=typeof i.widget.id==`string`?i.widget.id:u,p;t[7]!==s||t[8]!==i.widget||t[9]!==f?(p=s&&typeof i.widget.id!=`string`?{...i.widget,id:f}:i.widget,t[7]=s,t[8]=i.widget,t[9]=f,t[10]=p):p=t[10];let m=p,h=(0,C.useRef)(null),[g,_]=(0,C.useState)(null),[v,y]=(0,C.useState)(null),[x,D]=(0,C.useState)(!1),[O,k]=(0,C.useState)(null),A=(0,C.useRef)(null),j;t[11]!==n||t[12]!==i.widget?(j=()=>n==null?null:(A.current?.widget!==i.widget&&(A.current={widget:i.widget}),A.current),t[11]=n,t[12]=i.widget,t[13]=j):j=t[13];let M=j,N;t[14]===M?N=t[15]:(N=()=>{let e=M();e!=null&&(e.failed=!0)},t[14]=M,t[15]=N);let P=N,F=x&&`my-3`,I;t[16]===F?I=t[17]:(I=o(F),t[16]=F,t[17]=I);let L=a?`true`:void 0,R=a?`dil-widget-shell`:void 0,z=a?String(g===i.widget):void 0,B=a?String(O?.widget===i.widget):void 0,V=a?String(v===i.widget):void 0,H;t[18]===a?H=t[19]:(H=e=>{if(e==null)return;a&&Object.defineProperty(e,"__maraschinoLegacyRenderRoot",{configurable:!0,get:()=>h.current?.()??null});let t=new ResizeObserver(()=>D(e.getBoundingClientRect().height>0));return t.observe(e),()=>{t.disconnect(),Reflect.deleteProperty(e,`__maraschinoLegacyRenderRoot`)}},t[18]=a,t[19]=H);let U;t[20]!==P||t[21]!==O?.widget||t[22]!==M||t[23]!==a||t[24]!==s||t[25]!==n||t[26]!==r||t[27]!==i||t[28]!==m||t[29]!==f?(U=O?.widget===i.widget?(0,w.jsx)(b,{onRetry:()=>{A.current=null,k(null)}}):(0,w.jsx)(E,{...i,disableExternalMedia:a?.disableExternalMedia??i.disableExternalMedia,widget:m,onLoad:(e,t)=>{s&&(h.current=()=>t(f),r?.(h.current())),i.onLoad?.(e,t)},onInitialRenderCommit:()=>{r?.(h.current?.()??null),a&&_(i.widget),i.onInitialRenderCommit?.()},onCommittedState:n==null?void 0:e=>{M()?.failed||n(e)},onSoftFailure:e=>{e.scope!==`action-resolution`&&P(),a&&y(i.widget),i.onSoftFailure?.(e)},supportedClientActions:a?[]:i.supportedClientActions,onAction:a?void 0:i.onAction,onStateMutation:a?void 0:i.onStateMutation,customCss:T,errorMode:`soft`,onError:e=>{P(),r?.(null),k({widget:i.widget}),i.onError?.(e)}}),t[20]=P,t[21]=O?.widget,t[22]=M,t[23]=a,t[24]=s,t[25]=n,t[26]=r,t[27]=i,t[28]=m,t[29]=f,t[30]=U):U=t[30];let W;return t[31]!==z||t[32]!==B||t[33]!==V||t[34]!==H||t[35]!==U||t[36]!==I||t[37]!==L||t[38]!==R?(W=(0,w.jsx)(`div`,{className:I,"data-internal-render-legacy-dil":L,"data-testid":R,"data-internal-render-dil-initial-render-committed":z,"data-internal-render-dil-render-failure":B,"data-internal-render-dil-soft-render-failure":V,ref:H,children:U}),t[31]=z,t[32]=B,t[33]=V,t[34]=H,t[35]=U,t[36]=I,t[37]=L,t[38]=R,t[39]=W):W=t[39],W}function b(e){let t=(0,S.c)(10),{reload:r,onRetry:i}=e,a=(0,C.useContext)(d)?`true`:void 0,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,w.jsx)(n,{id:`chatgptConversations.dil.renderFailure`,defaultMessage:`This widget couldn’t load`,description:`Shown in a ChatGPT response when a legacy widget fails to load or render`}),t[0]=o):o=t[0];let s;t[1]!==i||t[2]!==r?(s=()=>{r?window.location.reload():i?.()},t[1]=i,t[2]=r,t[3]=s):s=t[3];let c;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,w.jsx)(n,{id:`chatgptConversations.dil.retry`,defaultMessage:`Try again`,description:`Button to retry a failed widget, reloading the page if its renderer could not be downloaded`}),t[4]=c):c=t[4];let l;t[5]===s?l=t[6]:(l=(0,w.jsx)(f,{type:`button`,color:`secondary`,onClick:s,children:c}),t[5]=s,t[6]=l);let u;return t[7]!==a||t[8]!==l?(u=(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-secondary`,role:`status`,"data-internal-render-dil-render-failure":a,children:[o,l]}),t[7]=a,t[8]=l,t[9]=u):u=t[9],u}function x(e){let t=(0,S.c)(5),{widget:n,state:r}=e,i=g(v()),a;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=[],t[0]=a):a=t[0];let o;return t[1]!==r||t[2]!==i||t[3]!==n?(o=(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(y,{theme:i,widget:n,initialState:r,supportedClientActions:a})}),t[1]=r,t[2]=i,t[3]=n,t[4]=o):o=t[4],o}var S,C,w,T,E;function D(){return(D=e((()=>{S=i(),a(),C=t(),s(),p(),l(),_(),m(),w=r(),h(),T=`
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
`,E=u(async()=>(await c(async()=>{let{DILRenderer:e}=await import(`./dist-c12b6755fddf.js`);return{DILRenderer:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url)).DILRenderer,{errorFallback:(0,w.jsx)(b,{reload:!0})})})))()}export{D as i,y as n,x as r,T as t};
//# sourceMappingURL=renderer-86e8f5155198.js.map