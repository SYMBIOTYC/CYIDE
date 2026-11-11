const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ayu-dark-154c529ab84d.js","./rolldown-runtime-428824ca0286.js","./catppuccin-latte-face62c36ca7.js","./catppuccin-mocha-403a470a2703.js","./dark-plus-81a4815845e9.js","./dracula-2881f9255350.js","./everforest-dark-b056f786fd1f.js","./everforest-light-cb3c6736ad32.js","./github-dark-default-f4a63cd975fb.js","./github-light-default-93ae4b944b49.js","./gruvbox-dark-medium-5828d6e6387f.js","./gruvbox-light-medium-7ad39f0bae91.js","./light-plus-9c937dd3d79d.js","./material-theme-darker-2b3220903073.js","./monokai-b62704b8dcdc.js","./night-owl-7a58f788d634.js","./nord-c309d63ae559.js","./one-dark-pro-301bec747122.js","./one-light-b7f76e3837b7.js","./rose-pine-dawn-9e9e831cc449.js","./rose-pine-moon-6840a755be79.js","./solarized-dark-ddd58538adca.js","./solarized-light-951a9cc6d52a.js","./tokyo-night-bf3a3bffa19a.js","./absolutely-dark-f42943a0038c.js","./absolutely-light-dc9d22876e7f.js","./codex-dark-37dabca62e5e.js","./codex-light-cba5eca4ad8d.js","./linear-dark-439a67d9f453.js","./linear-light-4ed6dfecbe92.js","./lobster-dark-6503807229da.js","./matrix-dark-7efd6a2d23ea.js","./notion-dark-2e2a04f72129.js","./notion-light-9e69acdaed2e.js","./og-dark-d8f57ad0a809.js","./oscurange-5901adeea142.js","./proof-light-9e1e9e2b44d8.js","./raycast-dark-48f9b1b016cb.js","./raycast-light-38a6919df47f.js","./sentry-dark-3ea0d9b68ea0.js","./temple-dark-778d04b90439.js","./vercel-dark-86d97735ef1d.js","./vercel-light-dfdbbef1ba41.js","./xcode-dark-c5192dee152f.js","./xcode-light-35bc39e0b49d.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-428824ca0286.js";import{JR as t,O6 as n,QR as r,yit as i}from"./app-initial-48d97b67aa1f.js";import{Ijt as a,OBt as o,Pjt as s,Rjt as c,kBt as l,mEt as u}from"./app-initial-bf355fcf8471.js";function d(e){let t=(0,f.useRef)(e);return(0,f.useInsertionEffect)(()=>void(t.current=e)),(0,f.useCallback)((...e)=>t.current(...e),[])}var f;function p(){return(p=e((()=>{f=i()})))()}function m({children:e,createEditor:t}){let n=d((e,n,r)=>t(e,n,r));return(0,_.jsx)(v.Provider,{value:n,children:e})}function h(){return(0,g.useContext)(v)}var g,_,v;function y(){return(y=e((()=>{p(),g=i(),_=n(),v=(0,g.createContext)(void 0)})))()}function ee(){return null}var b,x;function S(){return(S=e((()=>{b={position:`absolute`,top:0,bottom:0,textAlign:`center`,whiteSpace:`normal`,touchAction:`none`},x={display:`contents`}})))()}function te(){return(0,C.useContext)(w)}var C,w;function T(){return(T=e((()=>{C=i(),n(),w=(0,C.createContext)(void 0)})))()}function E(e,t){return typeof window>`u`&&t!=null?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t}}),e]}):(0,D.jsx)(D.Fragment,{children:e})}var D;function O(){return(O=e((()=>{D=n()})))()}function k(){return(0,A.useContext)(j)}var A,j;function M(){return(M=e((()=>{A=i(),n(),j=(0,A.createContext)(void 0)})))()}function N({alignCommentGutter:e=!1,includeDiffHeader:t,includeSimpleLineSeparators:n,rootSelector:r,surface:i,useReviewLineInfoSeparators:a=!1}){let o=t?`[data-diffs-header],
  ${r}`:r,s=n?`
  :host(.composer-diff-simple-line) [data-separator]:empty {
    background-color: transparent;
  }

  :host(.composer-diff-simple-line) [data-separator]:empty::after {
    content: "";
    grid-column: 2 / 3;
    align-self: center;
    margin-inline: 1ch;
    border-top: 1px solid color-mix(in srgb, var(--diffs-fg) 18%, transparent);
  }
`:``,c=e?`
  ${r} [data-column-number] {
    padding-inline-start: calc(var(--spacing) * 10);
  }
`:``,l=a?`
  ${r} [data-column-number] {
    padding-inline: 1.5ch;
    text-align: center;
  }

  ${r} [data-separator='line-info'] :is([data-separator-wrapper], [data-expand-button], [data-separator-content]) {
    border-radius: 0;
  }

  ${r} [data-separator='line-info'] [data-separator-wrapper] {
    padding: 0;
  }

  ${r} [data-unified] [data-separator='line-info'] [data-separator-wrapper] {
    grid-template-columns: var(--diffs-column-number-width) minmax(0, 1fr);
  }

  ${r} [data-unified] [data-separator='line-info'] [data-expand-button] {
    min-width: 0;
  }

  /* Pierre duplicates split separators into each gutter and content cell. */
  ${r} [data-deletions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    background-color: var(--diffs-bg);
    grid-template-columns: minmax(0, 1fr);
  }

  ${r} [data-deletions] [data-gutter] [data-separator='line-info'] [data-separator-content],
  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-expand-button] {
    display: none;
  }

  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-separator-wrapper] {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  ${r} [data-deletions] [data-content] [data-separator='line-info'] [data-separator-content] {
    grid-column: 1;
  }

  ${r} [data-additions] [data-gutter] [data-separator='line-info'],
  ${r} [data-additions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    background-color: var(--diffs-bg-separator);
  }

  ${r}[data-overflow='scroll'] [data-additions] [data-gutter] [data-separator='line-info'] [data-separator-wrapper] {
    width: 100cqi;
  }

  ${r} [data-additions] [data-content] [data-separator='line-info'] [data-separator-wrapper] {
    margin-inline-end: 0;
  }
`:``,u=`
  /* Preserve the pre-beta split-column width instead of reserving a scrollbar gutter in every pane. */
  ${r} [data-code] {
    scrollbar-gutter: auto;
  }

  ${r} [data-line-type='change-addition']:is([data-line], [data-no-newline]) {
    --diffs-computed-diff-line-bg: var(--diffs-bg-addition);
  }

  ${r} [data-line-type='change-addition']:is([data-column-number], [data-gutter-buffer]) {
    --diffs-computed-diff-line-bg: var(--codex-diffs-addition-number);
  }

  ${r} [data-line-type='change-deletion']:is([data-line], [data-no-newline]) {
    --diffs-computed-diff-line-bg: var(--diffs-bg-deletion);
  }

  ${r} [data-line-type='change-deletion']:is([data-column-number], [data-gutter-buffer]) {
    --diffs-computed-diff-line-bg: var(--codex-diffs-deletion-number);
  }

  ${r} [data-line-type='change-addition'][data-hovered]:not([data-selected-line]) {
    --diffs-computed-hovered-line-bg: var(--codex-diffs-addition-hover);
  }

  ${r} [data-line-type='change-deletion'][data-hovered]:not([data-selected-line]) {
    --diffs-computed-hovered-line-bg: var(--codex-diffs-deletion-hover);
  }
`;return`
  [data-unmodified-lines][hidden] { display: none !important; }
  [data-context-pending] > svg { visibility: hidden; }
  [data-context-pending] { position: relative; }
  [data-context-pending]::after, [data-context-label-pending]::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 11px;
    height: 11px;
    box-sizing: border-box;
    border: 1.5px solid currentColor;
    border-inline-end-color: transparent;
    border-radius: 50%;
    animation: codex-context-loading .8s linear infinite;
    animation-play-state: var(--decorative-animation-play-state, running);
  }
  [data-context-label-pending]::before {
    position: static;
    display: inline-block;
    margin-inline-end: .5em;
    vertical-align: middle;
  }
  @keyframes codex-context-loading { to { transform: rotate(1turn); } }
  @media (prefers-reduced-motion: reduce) { [data-context-pending]::after, [data-context-label-pending]::before { animation: none; } }
  [data-context-message] { color: var(--diffs-fg); }
  [data-context-retry] {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: var(--cursor-interaction);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  ${o} {
    ${L}
    --diffs-bg: ${i} !important;
    background-color: ${i} !important;
  }

  ${r} [data-language-symbol-highlight] {
    background-color: var(--color-background-secondary-ghost-hover) !important;
  }

  ${r} [data-language-symbol-link] {
    text-decoration: underline;
    cursor: var(--cursor-interaction);
  }

  ${r} [data-utility-button] {
    background-color: var(--color-text);
    color: var(--color-surface-secondary);
    border: none;
    border-radius: 4px;
    margin-right: 0;
  }

  ${r} [data-utility-button]:hover {
    background-color: color-mix(
      in srgb,
      var(--color-text) 88%,
      var(--color-surface-secondary)
    );
  }

  ${r} [data-selected-line][data-line-annotation] {
    background-color: var(--diffs-bg);
  }

  [data-placeholder][data-loading] {
    --codex-diffs-placeholder-base: color-mix(
      in srgb,
      var(--color-codex-description) 10%,
      transparent
    );
    --codex-diffs-placeholder-highlight: color-mix(
      in srgb,
      var(--color-codex-description) 16%,
      transparent
    );
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(
      to right,
      var(--codex-diffs-placeholder-base) 0 82%,
      transparent 82%
    );
    background-position: 12px 8px;
    background-size: calc(100% - 24px) 22px;
    background-repeat: repeat-y;
  }

  [data-placeholder][data-loading]::before {
    content: "";
    position: absolute;
    inset: 8px 12px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--codex-diffs-placeholder-highlight) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: codex-diffs-placeholder-shimmer 3000ms linear infinite;
    mask-image: repeating-linear-gradient(
      to bottom,
      #000 0 14px,
      transparent 14px 22px
    );
  }

  @media (prefers-reduced-motion: reduce) {
    [data-placeholder][data-loading]::before {
      animation: none;
    }
  }

  @keyframes codex-diffs-placeholder-shimmer {
    to {
      transform: translateX(100%);
    }
  }

${u}

  ${r} [data-line-type="change-deletion"][data-column-number]::before {
    background-color: var(--diffs-deletion-base);
    background-image: none;
  }

  /* Cover fractional-pixel gaps between consecutive solid change markers. */
  ${r} [data-line-type="change-addition"][data-column-number]
    + [data-line-type="change-addition"][data-column-number]::before,
  ${r} [data-line-type="change-deletion"][data-column-number]
    + [data-line-type="change-deletion"][data-column-number]::before {
    contain: none;
    top: -1px;
    height: calc(100% + 1px);
  }

${l}

${c}

${s}`}function P(e,t){return e?t===`diff`?I:F:`var(--color-surface-secondary)`}var F,I,L;function R(){return(R=e((()=>{F=`var(--color-surface)`,I=`var(--color-codex-diff-surface)`,L=`
  --codex-diffs-surface: ${F};
  --codex-diffs-context-surface: color-mix(
  in srgb,
  var(--codex-diffs-surface) 94%,
  var(--color-surface)
);
  --codex-diffs-separator-surface: color-mix(
  in srgb,
  var(--codex-diffs-surface) 94%,
  var(--color-text-info)
);
  --codex-diffs-hover-surface: color-mix(
  in srgb,
  var(--codex-diffs-surface) 92%,
  var(--color-surface)
);
  --codex-diffs-header-surface: var(--codex-diffs-surface);
  --codex-diffs-context-number: color-mix(
  in lab,
  var(--codex-diffs-surface) 98.5%,
  var(--diffs-mixer)
);
  --codex-diffs-addition-number: light-dark(
  color-mix(in lab, var(--diffs-light-bg, #fff) 91%, var(--diffs-addition-base)),
  color-mix(in lab, var(--diffs-dark-bg, #000) 85%, var(--diffs-addition-base))
);
  --codex-diffs-deletion-number: light-dark(
  color-mix(in lab, var(--diffs-light-bg, #fff) 91%, var(--diffs-deletion-base)),
  color-mix(in lab, var(--diffs-dark-bg, #000) 85%, var(--diffs-deletion-base))
);
  --codex-diffs-addition-hover: light-dark(
  color-mix(
    in lab,
    var(--diffs-light-bg, #fff) 80%,
    var(--diffs-addition-base)
  ),
  color-mix(
    in lab,
    var(--diffs-dark-bg, #000) 70%,
    var(--diffs-addition-base)
  )
);
  --codex-diffs-deletion-hover: light-dark(
  color-mix(
    in lab,
    var(--diffs-light-bg, #fff) 80%,
    var(--diffs-deletion-base)
  ),
  color-mix(
    in lab,
    var(--diffs-dark-bg, #000) 75%,
    var(--diffs-deletion-base)
  )
);
  /* Keep unhighlighted lines readable while syntax tokens are pending. */
  --diffs-dark: var(--color-text);
  --diffs-light: var(--color-text);
  --diffs-bg-context-override: var(--codex-diffs-context-surface);
  --diffs-bg-separator-override: var(--codex-diffs-separator-surface);
  --diffs-bg-hover-override: var(--codex-diffs-hover-surface);
`})))()}function z(){return`shiki-js`}function B(){return(B=e((()=>{})))()}function V(){return J.flatMap(e=>Object.values(e.registrationByVariant)).filter(e=>e!=null)}function H(e,t){let{id:n}=a(e,t),r=J.find(e=>e.id===n)?.registrationByVariant[t];if(r==null)throw Error(`Missing ${t} code theme registration`);return r}function U(e){return q[e]()}function W(e,t){let n=t.dark,r=t.light;return G(e,{dark:n==null?void 0:{load:()=>U(n),name:n},light:r==null?void 0:{load:()=>U(r),name:r}})}function G(e,t){let n={},r=t.dark,i=t.light;return r!=null&&(n.dark=K(r.name,r.load)),i!=null&&(n.light=K(i.name,i.load)),{id:e,registrationByVariant:n}}function K(e,t){let n=null;return{load:async()=>(n??=t().then(e=>typeof e==`object`&&e&&`default`in e?e.default:e).catch(e=>{throw n=null,e}),n),name:e}}var q,J;function Y(){return(Y=e((()=>{c(),l(),q={"ayu-dark"(){return o(()=>import(`./ayu-dark-154c529ab84d.js`),__vite__mapDeps([0,1]),import.meta.url)},"catppuccin-latte"(){return o(()=>import(`./catppuccin-latte-face62c36ca7.js`),__vite__mapDeps([2,1]),import.meta.url)},"catppuccin-mocha"(){return o(()=>import(`./catppuccin-mocha-403a470a2703.js`),__vite__mapDeps([3,1]),import.meta.url)},"dark-plus"(){return o(()=>import(`./dark-plus-81a4815845e9.js`),__vite__mapDeps([4,1]),import.meta.url)},dracula(){return o(()=>import(`./dracula-2881f9255350.js`),__vite__mapDeps([5,1]),import.meta.url)},"everforest-dark"(){return o(()=>import(`./everforest-dark-b056f786fd1f.js`),__vite__mapDeps([6,1]),import.meta.url)},"everforest-light"(){return o(()=>import(`./everforest-light-cb3c6736ad32.js`),__vite__mapDeps([7,1]),import.meta.url)},"github-dark-default"(){return o(()=>import(`./github-dark-default-f4a63cd975fb.js`),__vite__mapDeps([8,1]),import.meta.url)},"github-light-default"(){return o(()=>import(`./github-light-default-93ae4b944b49.js`),__vite__mapDeps([9,1]),import.meta.url)},"gruvbox-dark-medium"(){return o(()=>import(`./gruvbox-dark-medium-5828d6e6387f.js`),__vite__mapDeps([10,1]),import.meta.url)},"gruvbox-light-medium"(){return o(()=>import(`./gruvbox-light-medium-7ad39f0bae91.js`),__vite__mapDeps([11,1]),import.meta.url)},"light-plus"(){return o(()=>import(`./light-plus-9c937dd3d79d.js`),__vite__mapDeps([12,1]),import.meta.url)},"material-theme-darker"(){return o(()=>import(`./material-theme-darker-2b3220903073.js`),__vite__mapDeps([13,1]),import.meta.url)},monokai(){return o(()=>import(`./monokai-b62704b8dcdc.js`),__vite__mapDeps([14,1]),import.meta.url)},"night-owl"(){return o(()=>import(`./night-owl-7a58f788d634.js`),__vite__mapDeps([15,1]),import.meta.url)},nord(){return o(()=>import(`./nord-c309d63ae559.js`),__vite__mapDeps([16,1]),import.meta.url)},"one-dark-pro"(){return o(()=>import(`./one-dark-pro-301bec747122.js`),__vite__mapDeps([17,1]),import.meta.url)},"one-light"(){return o(()=>import(`./one-light-b7f76e3837b7.js`),__vite__mapDeps([18,1]),import.meta.url)},"rose-pine-dawn"(){return o(()=>import(`./rose-pine-dawn-9e9e831cc449.js`),__vite__mapDeps([19,1]),import.meta.url)},"rose-pine-moon"(){return o(()=>import(`./rose-pine-moon-6840a755be79.js`),__vite__mapDeps([20,1]),import.meta.url)},"solarized-dark"(){return o(()=>import(`./solarized-dark-ddd58538adca.js`),__vite__mapDeps([21,1]),import.meta.url)},"solarized-light"(){return o(()=>import(`./solarized-light-951a9cc6d52a.js`),__vite__mapDeps([22,1]),import.meta.url)},"tokyo-night"(){return o(()=>import(`./tokyo-night-bf3a3bffa19a.js`),__vite__mapDeps([23,1]),import.meta.url)}},J=[W(s.AYU,{dark:`ayu-dark`}),W(s.CATPPUCCIN,{dark:`catppuccin-mocha`,light:`catppuccin-latte`}),G(s.ABSOLUTELY,{dark:{load:()=>o(()=>import(`./absolutely-dark-f42943a0038c.js`),__vite__mapDeps([24,1]),import.meta.url),name:`Absolutely Dark`},light:{load:()=>o(()=>import(`./absolutely-light-dc9d22876e7f.js`),__vite__mapDeps([25,1]),import.meta.url),name:`Absolutely Light`}}),G(s.CODEX,{dark:{load:()=>o(()=>import(`./codex-dark-37dabca62e5e.js`),__vite__mapDeps([26,1]),import.meta.url),name:`Codex Dark`},light:{load:()=>o(()=>import(`./codex-light-cba5eca4ad8d.js`),__vite__mapDeps([27,1]),import.meta.url),name:`Codex Light`}}),W(s.DRACULA,{dark:`dracula`}),W(s.EVERFOREST,{dark:`everforest-dark`,light:`everforest-light`}),W(s.GITHUB,{dark:`github-dark-default`,light:`github-light-default`}),W(s.GRUVBOX,{dark:`gruvbox-dark-medium`,light:`gruvbox-light-medium`}),G(s.LINEAR,{dark:{load:()=>o(()=>import(`./linear-dark-439a67d9f453.js`),__vite__mapDeps([28,1]),import.meta.url),name:`Linear Dark`},light:{load:()=>o(()=>import(`./linear-light-4ed6dfecbe92.js`),__vite__mapDeps([29,1]),import.meta.url),name:`Linear Light`}}),G(s.LOBSTER,{dark:{load:()=>o(()=>import(`./lobster-dark-6503807229da.js`),__vite__mapDeps([30,1]),import.meta.url),name:`Lobster Dark`}}),W(s.MATERIAL,{dark:`material-theme-darker`}),G(s.MATRIX,{dark:{load:()=>o(()=>import(`./matrix-dark-7efd6a2d23ea.js`),__vite__mapDeps([31,1]),import.meta.url),name:`Matrix Dark`}}),W(s.MONOKAI,{dark:`monokai`}),W(s.NIGHT_OWL,{dark:`night-owl`}),W(s.NORD,{dark:`nord`}),G(s.NOTION,{dark:{load:()=>o(()=>import(`./notion-dark-2e2a04f72129.js`),__vite__mapDeps([32,1]),import.meta.url),name:`Notion Dark`},light:{load:()=>o(()=>import(`./notion-light-9e69acdaed2e.js`),__vite__mapDeps([33,1]),import.meta.url),name:`Notion Light`}}),G(s.OG,{dark:{load:()=>o(()=>import(`./og-dark-d8f57ad0a809.js`),__vite__mapDeps([34,1]),import.meta.url),name:`OG Dark`}}),G(s.OSCURANGE,{dark:{load:()=>o(()=>import(`./oscurange-5901adeea142.js`),__vite__mapDeps([35,1]),import.meta.url),name:`Oscurange`}}),W(s.ONE,{dark:`one-dark-pro`,light:`one-light`}),G(s.PROOF,{light:{load:()=>o(()=>import(`./proof-light-9e1e9e2b44d8.js`),__vite__mapDeps([36,1]),import.meta.url),name:`Proof Light`}}),G(s.RAYCAST,{dark:{load:()=>o(()=>import(`./raycast-dark-48f9b1b016cb.js`),__vite__mapDeps([37,1]),import.meta.url),name:`Raycast Dark`},light:{load:()=>o(()=>import(`./raycast-light-38a6919df47f.js`),__vite__mapDeps([38,1]),import.meta.url),name:`Raycast Light`}}),W(s.ROSE_PINE,{dark:`rose-pine-moon`,light:`rose-pine-dawn`}),G(s.SENTRY,{dark:{load:()=>o(()=>import(`./sentry-dark-3ea0d9b68ea0.js`),__vite__mapDeps([39,1]),import.meta.url),name:`Sentry Dark`}}),W(s.SOLARIZED,{dark:`solarized-dark`,light:`solarized-light`}),W(s.TOKYO_NIGHT,{dark:`tokyo-night`}),G(s.TEMPLE,{dark:{load:()=>o(()=>import(`./temple-dark-778d04b90439.js`),__vite__mapDeps([40,1]),import.meta.url),name:`Temple Dark`}}),G(s.VERCEL,{dark:{load:()=>o(()=>import(`./vercel-dark-86d97735ef1d.js`),__vite__mapDeps([41,1]),import.meta.url),name:`Vercel Dark`},light:{load:()=>o(()=>import(`./vercel-light-dfdbbef1ba41.js`),__vite__mapDeps([42,1]),import.meta.url),name:`Vercel Light`}}),W(s.VSCODE_PLUS,{dark:`dark-plus`,light:`light-plus`}),G(s.XCODE,{dark:{load:()=>o(()=>import(`./xcode-dark-c5192dee152f.js`),__vite__mapDeps([43,1]),import.meta.url),name:`Xcode Dark`},light:{load:()=>o(()=>import(`./xcode-light-35bc39e0b49d.js`),__vite__mapDeps([44,1]),import.meta.url),name:`Xcode Light`}})]})))()}function X(){return(X=e((()=>{u(),Y()})))()}function ne(e,t){let n=t.tokenColors??t.settings??[],r=n.find(e=>e.scope==null)?.settings,i=t.type===`light`?`light`:`dark`,a=t.fg??t.colors?.[`editor.foreground`]??r?.foreground??(i===`light`?`#333333`:`#bbbbbb`),o=t.bg??t.colors?.[`editor.background`]??r?.background??(i===`light`?`#ffffff`:`#1e1e1e`),s={};for(let[e,t]of Object.entries(Z)){let r={},i=-1,a=-1;for(let e of n){let n=typeof e.scope==`string`?e.scope.split(`,`):e.scope??[];for(let o of n){let n=o.trim();n&&t.some(e=>e===n||e.startsWith(`${n}.`))&&(e.settings.foreground!=null&&n.length>=i&&(r.color=e.settings.foreground,i=n.length),e.settings.fontStyle!=null&&n.length>=a&&(r.font_style=e.settings.fontStyle.includes(`italic`)?`italic`:`normal`,r.font_weight=e.settings.fontStyle.includes(`bold`)?700:400,a=n.length))}}s[e]=r}let c={name:e,appearance:i,style:{"editor.foreground":a,"editor.background":o,syntax:s}};return{name:e,type:i,fg:a,bg:o,colors:{...t.colors,"editor.foreground":a,"editor.background":o},textmate:{...t,name:e,type:i,fg:a,bg:o,settings:n},zed:c}}var Z;function Q(){return(Q=e((()=>{Z={comment:[`comment`],string:[`string`],"string.escape":[`constant.character.escape`],"string.regex":[`string.regexp`],"text.literal":[`markup.inline.raw`],keyword:[`keyword`,`storage.type`,`storage.modifier`],operator:[`keyword.operator`],preproc:[`keyword.control.directive`],boolean:[`constant.language.boolean`,`constant.language`],number:[`constant.numeric`],constant:[`constant`],variable:[`variable`],"variable.special":[`variable.language`],"variable.parameter":[`variable.parameter`],property:[`variable.other.property`,`support.type.property-name`],"property.json_key":[`support.type.property-name.json`],function:[`entity.name.function`,`support.function`],constructor:[`entity.name.type.class`],type:[`entity.name.type`,`support.type`],attribute:[`entity.other.attribute-name`],tag:[`entity.name.tag`],punctuation:[`punctuation`],link_text:[`markup.underline.link`],link_uri:[`markup.underline.link`,`string.other.link`],"diff.plus":[`markup.inserted`],"diff.minus":[`markup.deleted`],emphasis:[`markup.italic`],"emphasis.strong":[`markup.bold`],title:[`markup.heading`]}})))()}function $(){return($=e((()=>{t(),X(),Q();for(let e of V())r(e.name,async()=>ne(e.name,await e.load()),`diffs`)})))()}export{y as C,d as E,m as S,p as T,te as _,z as a,S as b,N as c,M as d,k as f,T as g,w as h,Y as i,R as l,E as m,X as n,B as o,O as p,H as r,P as s,$ as t,j as u,b as v,h as w,ee as x,x as y};
//# sourceMappingURL=register-pierre-themes-5b7d955bf81a.js.map