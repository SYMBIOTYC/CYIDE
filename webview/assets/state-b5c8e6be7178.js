import{n as e}from"./rolldown-runtime-428824ca0286.js";import{CR as t,DR as n,ER as r,NR as i,dl as a,ku as o,tR as s}from"./app-initial-ef83d79c5fa7.js";import{Hen as c,Mvt as ee,Sin as te,Wen as l,Zvt as u,itn as ne,tan as re}from"./app-initial-f8f84852daaa.js";import{ALt as d,CPt as ie,DFt as ae,Dst as f,ELt as oe,JSn as p,NSn as m,TFt as h,V4t as g,WSn as se,_Ut as _,aUt as ce,cEn as v,dRt as le,dUt as y,f3t as ue,iEn as de,jSn as fe,kst as pe,lEn as me,p3t as he,pUt as b,rEn as x,rxn as S,txn as C,wLt as w,y4t as T}from"./app-initial-17dd08407f00.js";import{Fx as E,Ix as D,Qx as O,Rx as k}from"./app-initial-050fbd442c4f.js";import{i as A,n as j}from"./page-data-681bd44d9f42.js";function M(e){return e.formatMessage({id:`space.gettingStartedPages.pageTitle`,defaultMessage:`Your guide to pages`,description:`Title of the introductory Getting Started Page`})}function N(e,t){let n=e.formatMessage({id:`space.gettingStartedPages.starterBody.guide`,defaultMessage:`> [!CALLOUT] 💡
>
> Pages are a place for you to write, build, and collaborate with ChatGPT and your teammates. Use this page as your playground to learn the basics — and have fun!

## Getting started

- [ ] **Play with this page.** Type \`/\` to add headings, images, checklists, tables, and more. Try it out in the empty space below 👇

- [ ] **Work with ChatGPT.** Type \`@ChatGPT\`, followed by your request, and ChatGPT will jump in to help with whatever you need.

- [ ] **Get organized.** Instead of folders, organize information by nesting pages *inside of* pages. Type \`/page\` to create a page inside this one.

- [ ] When your masterpiece is ready, **share** it with your teammates (using the share button in the upper-right), **collaborate**, and fiercely debate in the **comments**.

## Imagine anything, and make it real

Create **interactive visualizations** by typing \`/visualize\` and describing your idea, whether it’s *“Show me how my savings could grow with an interactive calculator”*, *“Simulate the solar system”*, or even *“Create a playable mini-piano.”*

{savings}

{solar}

{piano}

---

- [ ] Try it out yourself: In the empty space below, type \`/visualize\` and describe your idea 👇

---

## Put ChatGPT to work

You can add instructions to pages, and ChatGPT will do the work for you, like creating a self-updating to-do list or comprehensive trip planner. Here are a couple examples of pages ChatGPT can create for you.

\`\`\`codex-prompt
Create a daily list of prioritized tasks from my email, messages, and calendar, and update it every morning
\`\`\`

\`\`\`codex-prompt
Create a new trip planner page with flight details, hotel reservations, and tour info, pulled from my emails
\`\`\``,description:`Initial Markdown for each user's editable guide to Pages. Preserve headings, the light-bulb callout, pointing-down emoji, checkboxes, emphasis, dividers, code fences, and the literal commands /, /page, @ChatGPT, /visualize, and codex-prompt. Preserve the savings, solar, and piano placeholders: each inserts a complete interactive visualization.`},{savings:t?.savings==null?``:f(t.savings,e.formatMessage({id:`space.welcome.demo.savingsAlt`,defaultMessage:`Savings growth calculator`,description:`Accessible title for the embedded interactive savings calculator in the Welcome Page`})),solar:t?.solar==null?``:f(t.solar,e.formatMessage({id:`space.welcome.demo.solarAlt`,defaultMessage:`Solar system explorer`,description:`Accessible title for the embedded interactive solar system in the Welcome Page`})),piano:t?.piano==null?``:f(t.piano,e.formatMessage({id:`space.welcome.demo.pianoAlt`,defaultMessage:`Mini Piano`,description:`Accessible title for the embedded playable piano in the Welcome Page`}))});return o(n).flatMap(e=>e.startsWith(`- [ ] `)?[e,``]:[e])}function P(e){let t=I.find(t=>e.endsWith(t));return t==null?e:e.slice(0,-t.length)}var F,I;function L(){return(L=e((()=>{a(),pe(),F=[`Welcome to Space`,`🚀 Getting started with pages`,`Getting started with pages`],I=[`⁣⁣`,`⁣⁤`]})))()}function R(e,t){e.set(Y,t,`unknown`),e.set(d,e=>{let{[t]:n,...r}=e;return r}),e.set(oe,e=>{let{[t]:n,...r}=e;return r}),e.get(W)?.identityKey===t&&e.set(W,null),e.set(G,t,{visible:!1,pageId:null})}function ge(e,t){let n=e.get(W);if(n?.pageId!==t)return;let r=e.get(K);r==null||n.identityKey!==r.key||e.get(y,r.key)||(e.get(_)&&S(e,E,{action:D.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_OPENED,item:k.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,pageId:t}),e.get(G,r.key).visible&&e.set(G,r.key,{visible:!1,pageId:t}),p(V,{entries:{[r.key]:{value:`pending`}}}),e.set(W,null),z(e))}async function z(e){if(!e.get(g))return;let t=e.get(K);if(t==null||e.get(y,t.key)||e.get(H)[t.key]!==`pending`||e.get(U,t.key))return;let n=he(e,t.accountId,t.userId);e.set(U,t.key,!0);try{if(await ee(e,B,!1,n.signal),n.signal.throwIfAborted(),e.get(H)[t.key]!==`pending`)return;p(V,{entries:{[t.key]:{value:`saved`}}}),await e.query.snapshot(c).invalidate()}catch{n.signal.aborted||de.warning(`Failed to save Space welcome dismissal`)}finally{n.stop(),e.set(U,t.key,!1)}}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{O(),s(),te(),u(),l(),T(),C(),me(),x(),se(),fe(),ie(),b(),ce(),L(),A(),w(),B=`oai/apps/hasOpenedSpaceWelcome`,V=`space-welcome-dismissal-v1`,H=m(V,{}),U=r(v,e=>!1),W=i(v,()=>null),G=r(v,e=>({visible:!1,pageId:null})),K=n(v,({get:e})=>{let t=e(ue),n=e(re);return t!=null&&n!=null&&t===e(ne)?{accountId:t,userId:n,key:JSON.stringify([t,n])}:null}),q=t(v,(e,{get:t})=>{let n=t(K);return n!=null&&t(d)[n.key]===e}),J=r(v,e=>!1),Y=r(v,e=>`unknown`),X=t(v,(e,{get:t})=>{let n=t(W);return t(_)&&n?.awaitingPaint===!0&&!t(y,n.identityKey)&&n.pageId===e&&n.identityKey===t(K)?.key}),Z=n(v,({get:e})=>{let t=e(K);if(t==null)return;let n=e(H)[t.key];if(n!=null)return n!==!1;let r=e(c);if(r.isSuccess&&!r.isPlaceholderData)return Object.hasOwn(r.data.seenAnnouncements??{},B)}),Q=t(v,(e,{get:t})=>{if(!t(g))return null;let n=t(K);if(n==null)return null;let r=t(G,n.key);if(r.visible)return{pageId:r.pageId};if(t(Z)!==!1)return null;let i=t(ae),a=t(le);if(!t(h)||!i.isSuccess||!i.isFetched||i.isFetching||i.isPlaceholderData||!a.isSuccess||!a.isFetched||a.isFetching)return null;let o=t(j)?.filter(({personal:e})=>e);if(o==null)return null;if(o.length===0)return{pageId:null};let s=o[0].page;return o.length===1&&(s.title===e||s.title===`Your guide to pages`||F.some(e=>s.title===e))?{pageId:null}:null})})))()}export{P as _,W as a,K as c,X as d,G as f,L as g,M as h,ge as i,Z as l,N as m,$ as n,z as o,Q as p,q as r,Y as s,R as t,J as u};
//# sourceMappingURL=state-b5c8e6be7178.js.map