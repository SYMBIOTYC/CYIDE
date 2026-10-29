import{n as e,o as t}from"./rolldown-runtime-2d059c5e81f4.js";import{$t as n,Bd as r,Cc as i,Ec as a,Ep as o,Fp as s,Ip as c,Mp as l,Np as u,Oc as d,Vd as f,a as p,c as m,df as h,gf as g,i as _,kp as v,mi as y,pi as b,rS as x,uf as S,wc as C,xc as w,xp as T,yl as E}from"./app-initial-13f932cb2f13.js";import{t as D}from"./compiler-runtime-2015039f3c68.js";import{S as O,T as ee,b as k,c as A,n as j,r as M,t as N,u as te}from"./app-scope-2dce3358324c.js";import{c as ne,s as P}from"./app-server-client-signals-46e112ab39dd.js";import{n as F,r as I}from"./use-host-config-e86732ef3454.js";import"./host-ids-55018f80fce1.js";import{n as L,r as re}from"./app-server-manager-rpc-1c84818c5904.js";import{n as R,t as z}from"./registry-30374645eb4c.js";import{n as B,t as V}from"./query-stale-times-4ac7dce757af.js";import{n as H,r as U}from"./experimental-features-queries-3bc21ca3f235.js";import{n as W,r as G}from"./rpc-256c20b50b7b.js";import{r as ie,t as K}from"./invalidate-queries-and-broadcast-a651e5b17ed8.js";import{d as ae,i as oe}from"./setting-storage-aba02981a06f.js";import{r as se}from"./workspace-permission-access-bd9c072a87d8.js";import{s as ce}from"./accounts-check-query-3b756d7bc93e.js";import{t as le}from"./skus-41fd3474ebd5.js";import{d as q,f as J}from"./codex-feature-access-37e786565697.js";import{r as Y,t as ue}from"./access-input-queries-a2f20846bf72.js";import{l as de,s as fe}from"./statsig-5c529db404a8.js";import{u as pe}from"./path-9d75f818f99e.js";import{c as me,i as he}from"./config-queries-dd5a557b51f7.js";import{i as ge,s as _e,u as ve}from"./thread-context-inputs-aeda39e9072e.js";import{i as ye,n as be,t as xe}from"./workspace-binary-files-e5da603512b0.js";import{r as Se,t as Ce,v as we,y as Te}from"./use-auth-22a784c824b8.js";import{n as Ee,t as De}from"./use-chatgpt-account-info-602b1c4a0aac.js";import{n as Oe,t as ke}from"./use-platform-4b207ad78d0a.js";import{n as Ae,t as je}from"./use-is-plugins-enabled-ed11a0f1e332.js";import{o as Me,r as Ne}from"./known-app-presentation-c7e20061ab37.js";import{n as Pe,t as Fe}from"./known-plugin-icon-url-f8d60ce331b1.js";function Ie(e,t){let n=(0,Re.c)(4),r;n[0]===e?r=n[1]:(r=e==null?void 0:{hostId:e},n[0]=e,n[1]=r);let i=t?.enabled!==!1,a;return n[2]===i?a=n[3]:(a={enabled:i},n[2]=i,n[3]=a),A(ge,r,a)}function Le(e,t){return Ie(e,t).data?.codexHome}var Re;function ze(){return(ze=e((()=>{Re=D(),M(),_e()})))()}var Be;function Ve(){return(Ve=e((()=>{M(),me(),j(),Be=ee(N,({authMethod:e,hostId:t},{get:n})=>{let{data:r,isPending:i}=n(he,{authMethod:e,hostId:t});return{allowed:r!=null&&r.requirements?.allowBrowserAndComputerUse!==!1,isPending:i}})})))()}function He(e){let t=(0,Ue.c)(12),{hostId:n,featureName:r,defaultEnabled:i,enabled:a}=e,o=i===void 0||i,s=a===void 0||a,c;t[0]===s?c=t[1]:(c={enabled:s},t[0]=s,t[1]=c);let{data:l,isLoading:u}=A(H,n,c),d;t[2]===l?d=t[3]:(d=l===void 0?[]:l,t[2]=l,t[3]=d);let f=d,p;if(t[4]!==r||t[5]!==f){let e;t[7]===r?e=t[8]:(e=e=>e.name===r,t[7]=r,t[8]=e),p=f.find(e),t[4]=r,t[5]=f,t[6]=p}else p=t[6];let m=s&&(p?.enabled??o),h;return t[9]!==u||t[10]!==m?(h={enabled:m,isLoading:u},t[9]=u,t[10]=m,t[11]=h):h=t[11],h}var Ue;function We(){return(We=e((()=>{Ue=D(),M(),U()})))()}function Ge(e){return e===`macOS`||e===`windows`}function Ke(e){let t=(0,Ye.c)(24),{enabled:n,hostId:r}=e,i=n===void 0||n,{isLoading:a,platform:o}=Oe(),s=de(`1506311413`),c;t[0]!==i||t[1]!==r?(c={enabled:i,featureName:`computer_use`,hostId:r},t[0]=i,t[1]=r,t[2]=c):c=t[2];let l=He(c),u=Se(r),d=u?.authMethod??null,f;t[3]!==r||t[4]!==d?(f={authMethod:d,hostId:r},t[3]=r,t[4]=d,t[5]=f):f=t[5];let p;t[6]===i?p=t[7]:(p={enabled:i},t[6]=i,t[7]=p);let m=A(Be,f,p),h=o===`windows`&&!a,g=i&&h,_;t[8]===g?_=t[9]:(_={enabled:g},t[8]=g,t[9]=_);let v=qe(_),y=l.isLoading||h&&v.isLoading,b=l.enabled&&(!h||v.enabled),x=i&&(!!u?.isLoading||m.isPending),S=!i||m.allowed,C;t[10]!==b||t[11]!==i||t[12]!==y||t[13]!==s||t[14]!==a||t[15]!==o||t[16]!==x||t[17]!==S?(C=Je({areRequirementsPending:x,areRequiredFeaturesEnabled:b,enabled:i,isBrowserAndComputerUseAllowed:S,isAnyFeatureLoading:y,isComputerUseGateEnabled:s,isHostCompatiblePlatform:Ge(o),isPlatformLoading:a,windowType:`extension`}),t[10]=b,t[11]=i,t[12]=y,t[13]=s,t[14]=a,t[15]=o,t[16]=x,t[17]=S,t[18]=C):C=t[18];let w=C,T=w===`available`,E=w===`loading`&&y,D=w===`loading`,O;return t[19]!==w||t[20]!==T||t[21]!==E||t[22]!==D?(O={available:T,isFetching:E,isLoading:D,reason:w},t[19]=w,t[20]=T,t[21]=E,t[22]=D,t[23]=O):O=t[23],O}function qe(e){let t=(0,Ye.c)(12),{enabled:n}=e,r=(0,Xe.useContext)(we)?.authMethod===`chatgpt`,i=te(n&&r?Ze:null),a=i?.data,o=i?.errorUpdatedAt??0,s=i?.isLoading??!1,c=a?.account_ordering?.[0],l;t[0]!==a?.accounts||t[1]!==c?(l=a?.accounts?.find(e=>e.id===c),t[0]=a?.accounts,t[1]=c,t[2]=l):l=t[2];let u=l,d=u==null&&(!s||o!==0),f=n&&r&&d,p;t[3]===f?p=t[4]:(p={enabled:f},t[3]=f,t[4]=p);let{data:m,isLoading:h}=Ee(p),g=u?.id??(d?m?.accountId:void 0),_=u?.plan_type??(d?m?.plan:void 0),v=r?_:void 0,y;t[5]===v?y=t[6]:(y=se(v),t[5]=v,t[6]=y);let b=y,x=n&&b&&r,S;t[7]===x?S=t[8]:(S={enabled:x},t[7]=x,t[8]=S);let C=A(g==null?null:q,g??``,S),w=!r||_!=null&&(!b||(C?.data?.beta_settings?.windows_computer_use??!1)),T=n&&r&&(s&&!d||h||(C?.isLoading??!1)),E;return t[9]!==w||t[10]!==T?(E={enabled:w,isLoading:T},t[9]=w,t[10]=T,t[11]=E):E=t[11],E}function Je({areRequirementsPending:e,areRequiredFeaturesEnabled:t,enabled:n,isBrowserAndComputerUseAllowed:r,isAnyFeatureLoading:i,isComputerUseGateEnabled:a,isHostCompatiblePlatform:o,isPlatformLoading:s,windowType:c}){return n?c===`electron`?e?`loading`:r?a?s?`loading`:o?i?`loading`:t?`available`:`config-requirement-disabled`:`unsupported-platform`:`statsig-disabled`:`config-requirement-disabled`:`window-type-disabled`:`disabled`}var Ye,Xe,Ze;function Qe(){return(Qe=e((()=>{Ye=D(),M(),Xe=x(),Y(),Te(),J(),Ce(),De(),G(),j(),fe(),B(),le(),Ve(),ke(),We(),Ze=O(N,({get:e,scope:t})=>{let n=e(ce);return{queryKey:[`accounts`,`check`],queryFn:({signal:e})=>{if(n)throw Error(`Account input subscription unavailable`);return ue(t,e)},staleTime:W?.accessInputs==null?V.ONE_MINUTE:0,refetchOnMount:!0}})})))()}async function $e(e,t,n,r,i,a){let o=await tt(e,t,n,r,i,a);return o==null?null:`data:${o.mimeType};base64,${o.base64}`}function et(e,t,n,r,i){if(E(t)&&r!=null&&i==null)return null;let a=rt(e);for(let o of[e,a]){if(o==null)continue;let e=n.getQueryData(ye({path:o,hostId:t,conversationId:r,environmentId:i}));if(e?.contentsBase64)return`data:${e.mimeType??it(o)};base64,${e.contentsBase64}`}return null}async function tt(e,t,n,r,i,a){let o=rt(e);if(o==null)return null;try{let e={path:o,hostId:t,conversationId:i,environmentId:a},s=await n.fetchQuery({queryFn:({signal:t})=>be(e,r==null?t:AbortSignal.any([t,r])),queryKey:ye(e),retry:!1,gcTime:V.FIVE_MINUTES,staleTime:E(t)&&i!=null&&a==null?0:V.INFINITE});return s.contentsBase64?{base64:s.contentsBase64,mimeType:it(o)}:null}catch(e){return p.warning(`Failed to inline local image`,{safe:{},sensitive:{error:e,resolvedImagePath:o}}),null}}function nt(e,t){return`data:${it(e)};base64,${t}`}function rt(e){if(e==null)return null;let t=e.trim();if(t.length===0||!/^(?:[\\/]|[A-Za-z]:[\\/])/.test(t))return null;let n=d(t);return w(n)?n:null}function it(e){return ot[at.default.extname(e).toLowerCase()]??`application/octet-stream`}var at,ot;function st(){return(st=e((()=>{at=t(y(),1),m(),xe(),_(),B(),ot={".svg":`image/svg+xml`,".png":`image/png`,".jpg":`image/jpeg`,".jpeg":`image/jpeg`,".webp":`image/webp`,".gif":`image/gif`,".avif":`image/avif`}})))()}function ct(e,t=`ui`){let n=new Map,r=new Set;for(let i of e)for(let e of i.plugins){if(c(e.name,S(e.id)??i.name,t))continue;let a=X(e);e.installed||r.add(a);let o={description:e.interface?.shortDescription??null,displayName:e.interface?.displayName??null,marketplaceDisplayName:i.interface?.displayName??null,marketplaceName:i.name,plugin:e,keywords:e.keywords,...lt({marketplaceName:i.name,marketplacePath:i.path})},s=n.get(a);if(s==null){n.set(a,o);continue}let l=s;(s.plugin.installed&&!e.installed||s.plugin.installed===e.installed&&s.plugin.interface==null&&e.interface!=null)&&(l=o),s.plugin.installed&&!e.installed&&n.delete(a);let u=null;if(s.plugin.installed?u=s.plugin:e.installed&&(u=e),u==null){n.set(a,l);continue}n.set(a,{...l,plugin:{...l.plugin,enabled:u.enabled,installed:!0,installPolicy:u.installPolicy,localVersion:u.localVersion,remotePluginId:l.plugin.remotePluginId??u.remotePluginId}})}return{plugins:Array.from(n.values()),freshDirectoryPluginIds:r}}function lt({marketplaceName:e,marketplacePath:t}){return t==null?{marketplacePath:null,remoteMarketplaceName:e}:{marketplacePath:t,remoteMarketplaceName:null}}function X(e){return e.remotePluginId??e.shareContext?.remotePluginId??e.id}function ut(){return(ut=e((()=>{u(),b(),h()})))()}function dt(e){return e.marketplacePath==null?pt(e.plugin):e.plugin.name}function ft(e){return e.marketplacePath==null?pt(e.plugin):e.plugin.id}function pt(e){if(e.remotePluginId==null)throw Error(`remote plugin ${e.id} is missing remotePluginId`);return e.remotePluginId}function mt(){return(mt=e((()=>{})))()}function ht(e){let t=(0,_t.c)(21),{enabled:r,hostId:i,windowType:a}=e,o=r===void 0||r,s=a===void 0?`extension`:a,c=de(`410065390`),l;t[0]!==o||t[1]!==i?(l={enabled:o,featureName:`browser_use_external`,hostId:i},t[0]=o,t[1]=i,t[2]=l):l=t[2];let u=He(l),d=Se(i),f=o||s===`chrome-extension`,p=d?.authMethod??null,m;t[3]!==i||t[4]!==p?(m={authMethod:p,hostId:i},t[3]=i,t[4]=p,t[5]=m):m=t[5];let h;t[6]===f?h=t[7]:(h={enabled:f},t[6]=f,t[7]=h);let g=A(Be,m,h),_=ae(n.runCodexInWsl),v=I(i),y=f&&(!!d?.isLoading||g.isPending),b=!f||g.allowed,x=_===!0||v.kind===`wsl`,S;t[8]!==u.enabled||t[9]!==u.isLoading||t[10]!==c||t[11]!==y||t[12]!==b||t[13]!==x||t[14]!==s?(S=gt({areRequirementsPending:y,isBrowserAndComputerUseAllowed:b,isExternalBrowserUseFeatureEnabled:u.enabled,isExternalBrowserUseFeatureLoading:u.isLoading,isExternalBrowserUseGateEnabled:c,runCodexInWsl:x,windowType:s}),t[8]=u.enabled,t[9]=u.isLoading,t[10]=c,t[11]=y,t[12]=b,t[13]=x,t[14]=s,t[15]=S):S=t[15];let C=S,w=C===`available`,T=C===`available`,E=C===`loading`,D;return t[16]!==C||t[17]!==w||t[18]!==T||t[19]!==E?(D={allowed:w,available:T,isLoading:E,reason:C},t[16]=C,t[17]=w,t[18]=T,t[19]=E,t[20]=D):D=t[20],D}function gt({areRequirementsPending:e,isBrowserAndComputerUseAllowed:t,isExternalBrowserUseFeatureEnabled:n,isExternalBrowserUseFeatureLoading:r,isExternalBrowserUseGateEnabled:i,runCodexInWsl:a,windowType:o}){return e?`loading`:t?o===`chrome-extension`?`available`:r?`loading`:n?a?`wsl-disabled`:i?`available`:`statsig-disabled`:`config-requirement-disabled`:`config-requirement-disabled`}var _t;function vt(){return(vt=e((()=>{_t=D(),M(),m(),Ce(),oe(),F(),fe(),Ve(),We()})))()}function yt(e){let t=(0,xt.c)(22),{enabled:r,hostId:i}=e,a=r===void 0||r,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o={name:`browser.in-app`},t[0]=o):o=t[0];let s=A(z,o).isCapable,c=de(`410262010`),l;t[1]!==a||t[2]!==i?(l={enabled:a,featureName:`browser_use`,hostId:i},t[1]=a,t[2]=i,t[3]=l):l=t[3];let u=He(l),d=Se(i),f=d?.authMethod??null,p;t[4]!==i||t[5]!==f?(p={authMethod:f,hostId:i},t[4]=i,t[5]=f,t[6]=p):p=t[6];let m;t[7]===a?m=t[8]:(m={enabled:a},t[7]=a,t[8]=m);let h=A(Be,p,m),g=ae(n.runCodexInWsl),_=I(i),v=u.enabled&&!u.isLoading,y=u.isLoading,b=a&&(!!d?.isLoading||h.isPending),x=!a||h.allowed,S=g===!0||_.kind===`wsl`,C;t[9]!==c||t[10]!==s||t[11]!==v||t[12]!==y||t[13]!==b||t[14]!==x||t[15]!==S?(C=bt({areRequirementsPending:b,isBrowserAgentGateEnabled:c,isBrowserAndComputerUseAllowed:x,isBrowserEnabled:s,isBrowserUseEnabled:v,isLoading:y,runCodexInWsl:S,windowType:`extension`}),t[9]=c,t[10]=s,t[11]=v,t[12]=y,t[13]=b,t[14]=x,t[15]=S,t[16]=C):C=t[16];let w=C,T=w===`available`,E=w===`available`,D=w===`loading`,O;return t[17]!==w||t[18]!==T||t[19]!==E||t[20]!==D?(O={allowed:T,available:E,isLoading:D,reason:w},t[17]=w,t[18]=T,t[19]=E,t[20]=D,t[21]=O):O=t[21],O}function bt({areRequirementsPending:e,isBrowserAgentGateEnabled:t,isBrowserAndComputerUseAllowed:n,isBrowserEnabled:r,isBrowserUseEnabled:i,isLoading:a,runCodexInWsl:o,windowType:s}){return s===`chrome-extension`?`window-type-disabled`:e?`loading`:n?a?`loading`:r?t?i?o?`wsl-disabled`:`available`:`config-requirement-disabled`:`statsig-disabled`:`browser-pane-disabled`:`config-requirement-disabled`}var xt;function St(){return(St=e((()=>{xt=D(),M(),m(),R(),Ce(),oe(),F(),fe(),Ve(),We()})))()}function Ct(e){let t=(0,wt.c)(3),{computerUseAvailability:n,hostId:r}=e,{isLoading:i,platform:a}=Oe();de(`419294242`);let o;return t[0]!==!1||t[1]!==!1?(o={available:!1,isLoading:!1},t[0]=!1,t[1]=!1,t[2]=o):o=t[2],o}var wt;function Tt(){return(Tt=e((()=>{wt=D(),ke(),fe()})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{m(),Et=`${o}@${v}`,Dt=`com.apple.MobileSMS`})))()}function kt(e){return e===`chatgpt`}function At(){return(At=e((()=>{})))()}var jt;function Mt(){return(Mt=e((()=>{jt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#EBEBEB"
    d="M6 21c-.775 0-1.467-.167-2.075-.5A3.66 3.66 0 0 1 2.5 19.075c-.333-.608-.5-1.3-.5-2.075V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C4.533 3.17 5.225 3 6 3h12c.775 0 1.467.17 2.075.513.608.333 1.08.804 1.413 1.412.341.608.512 1.3.512 2.075v10c0 .775-.17 1.467-.512 2.075a3.576 3.576 0 0 1-1.413 1.425c-.608.333-1.3.5-2.075.5H6Z"
  />
  <path
    fill="#2E9EFF"
    d="M18 3c.775 0 1.467.171 2.075.513a3.492 3.492 0 0 1 1.412 1.412C21.83 5.533 22 6.225 22 7v2H2V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C4.533 3.17 5.225 3 6 3h12Z"
  />
  <path
    fill="#77C0FF"
    d="M8.287 6.713c.2.191.438.287.713.287a.953.953 0 0 0 .7-.287c.2-.2.3-.438.3-.713 0-.275-.1-.508-.3-.7A.933.933 0 0 0 9 5c-.275 0-.512.1-.713.3A.953.953 0 0 0 8 6c0 .275.096.513.287.713Zm3 0c.2.191.438.287.713.287a.953.953 0 0 0 .7-.287c.2-.2.3-.438.3-.713 0-.275-.1-.508-.3-.7A.933.933 0 0 0 12 5c-.275 0-.512.1-.713.3A.953.953 0 0 0 11 6c0 .275.096.513.287.713Zm-6 0c.2.191.438.287.713.287a.953.953 0 0 0 .7-.287c.2-.2.3-.438.3-.713 0-.275-.1-.508-.3-.7A.933.933 0 0 0 6 5c-.275 0-.513.1-.713.3A.953.953 0 0 0 5 6c0 .275.096.513.287.713Z"
  />
</svg>
`})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FFD400"
    d="M10.56 11.133v11.939h-.035a2.318 2.318 0 0 1-1.288-.412l-4.175-2.85a2.555 2.555 0 0 1-.787-.876A2.392 2.392 0 0 1 4 17.81V7.96c0-.374.08-.725.242-1.052l6.318 4.226Z"
  />
  <path
    fill="#F75858"
    d="M19.725 5.447A2.2 2.2 0 0 1 20 6.522v9.862c0 .409-.104.796-.313 1.163-.2.366-.48.658-.837.875l-7 4.3c-.399.243-.828.36-1.29.35V11.121l9.144-5.711.02.037Z"
  />
  <path
    fill="#8166E1"
    d="M20 16.384c0 .409-.104.796-.313 1.163-.2.366-.48.658-.837.875l-7 4.3c-.399.243-.828.36-1.29.35v-5.75l9.144-5.71c.01.01.296-.175.296-.175v4.947Z"
  />
  <path
    fill="#BDAAFF"
    d="M10.56 17.335v5.737h-.035a2.318 2.318 0 0 1-1.288-.412l-4.175-2.85a2.555 2.555 0 0 1-.787-.876A2.392 2.392 0 0 1 4 17.81v-4.84l6.56 4.366Z"
  />
  <path
    fill="#FFA43D"
    d="M4.242 6.907a2.285 2.285 0 0 1 .896-.985L12.1 1.646c.4-.25.834-.37 1.3-.362.467 0 .896.132 1.287.399l4.288 2.925c.312.216.554.484.728.8L10.56 11.12v.012L4.242 6.907Z"
  />
</svg>
`})))()}var Ft;function It(){return(It=e((()=>{Ft=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#DC7157"
    d="M12 20.962c-.311 0-.644-.089-1-.289-2.433-1.355-5.367-1.666-7.8-1.122-1.4.311-2.2-.166-2.2-1.6V6.407c0-.911.433-1.69 1.5-2.067 3.122-1.089 7.211-.444 9.5 1.545 2.289-1.99 6.378-2.634 9.5-1.545 1.067.378 1.5 1.156 1.5 2.067V17.95c0 1.433-.8 1.911-2.2 1.6-2.433-.544-5.367-.233-7.8 1.122-.356.2-.689.29-1 .29Z"
  />
  <path
    fill="#EFEBDC"
    d="M3.381 3.403c2.962-1.043 7.07.074 8.623 2.479v12.876c-2.42-1.543-5.62-1.874-8.934-1.323V3.855c0-.202.121-.385.311-.452Z"
  />
  <path
    fill="#FBF2DF"
    d="M20.626 3.403c-2.962-1.043-7.07.074-8.622 2.479v12.876c2.42-1.543 5.62-1.874 8.934-1.323V3.855a.475.475 0 0 0-.312-.452Z"
  />
</svg>
`})))()}var Lt;function Rt(){return(Rt=e((()=>{Lt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#7DCC60"
    d="M12 22a9.804 9.804 0 0 1-5.013-1.337 10.084 10.084 0 0 1-3.65-3.65A9.812 9.812 0 0 1 2 12c0-1.808.446-3.48 1.337-5.013a9.987 9.987 0 0 1 3.65-3.637A9.727 9.727 0 0 1 12 2c1.808 0 3.48.45 5.012 1.35a9.891 9.891 0 0 1 3.638 3.637A9.727 9.727 0 0 1 22 12c0 1.808-.45 3.48-1.35 5.012a9.987 9.987 0 0 1-3.637 3.65C15.478 21.555 13.807 22 12 22Z"
  />
  <path
    fill="#fff"
    d="M17 8.462c.167.334.12.68-.137 1.038L12.15 16c-.292.4-.638.617-1.037.65-.4.033-.784-.13-1.15-.487l-2.638-2.55c-.317-.3-.425-.63-.325-.988a.988.988 0 0 1 .687-.7c.359-.117.696-.025 1.013.275l2.213 2.125 4.337-6.013c.258-.358.57-.508.938-.45.375.059.645.259.812.6Z"
  />
</svg>
`})))()}var zt;function Bt(){return(Bt=e((()=>{zt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#BEBEBE"
    d="M7 21c-.725 0-1.396-.18-2.013-.538a4.03 4.03 0 0 1-1.45-1.45A3.936 3.936 0 0 1 3 17V7c0-.725.18-1.392.538-2a4 4 0 0 1 1.45-1.462A3.936 3.936 0 0 1 7 3h10c.725 0 1.392.18 2 .538A3.971 3.971 0 0 1 20.462 5 3.87 3.87 0 0 1 21 7v10c0 .725-.18 1.396-.538 2.012A4 4 0 0 1 19 20.462 3.87 3.87 0 0 1 17 21H7Z"
  />
  <path
    fill="#9B9B9B"
    d="M8.294 18.402A7.183 7.183 0 0 0 12 19.4c1.34 0 2.575-.333 3.707-.998a7.466 7.466 0 0 0 2.695-2.696A7.184 7.184 0 0 0 19.4 12c0-1.34-.333-2.575-.998-3.707a7.466 7.466 0 0 0-2.696-2.695A7.184 7.184 0 0 0 12 4.6a7.18 7.18 0 0 0-3.706.998 7.466 7.466 0 0 0-2.696 2.696A7.184 7.184 0 0 0 4.6 12c0 1.34.333 2.575.998 3.707a7.466 7.466 0 0 0 2.696 2.695Z"
  />
  <path
    fill="#F4F4F4"
    d="M14.902 7.977a.916.916 0 0 1 1.121 1.121l-1.308 4.76c-.066.227-.169.41-.308.549-.14.14-.322.242-.55.308l-4.759 1.308a.916.916 0 0 1-1.121-1.121l1.308-4.76c.066-.227.169-.41.308-.549.14-.14.322-.242.55-.308l4.759-1.308Z"
  />
  <path
    fill="#F75858"
    d="m9.593 9.593 4.814 4.814c-.14.14-.322.242-.55.308l-4.759 1.308a.915.915 0 0 1-1.121-1.121l1.308-4.76c.066-.227.168-.41.308-.549Z"
  />
  <path
    fill="#EBEBEB"
    d="M6.907 12a.72.72 0 0 0-.72-.72H4.492a.72.72 0 0 0 0 1.44h1.697a.72.72 0 0 0 .719-.72Zm13.323 0a.72.72 0 0 0-.72-.72h-1.696a.72.72 0 0 0 0 1.44h1.697a.72.72 0 0 0 .719-.72ZM12 17.093a.72.72 0 0 0-.72.72v1.697a.72.72 0 0 0 1.44 0v-1.697a.72.72 0 0 0-.72-.72ZM12 3.77a.72.72 0 0 0-.72.72v1.697a.72.72 0 0 0 1.44 0V4.49a.72.72 0 0 0-.72-.72Z"
  />
</svg>
`})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#EBEBEB"
    d="M18 3c.775 0 1.467.171 2.075.513a3.493 3.493 0 0 1 1.412 1.412C21.83 5.533 22 6.225 22 7v10c0 .775-.171 1.467-.513 2.075a3.575 3.575 0 0 1-1.412 1.425c-.608.333-1.3.5-2.075.5H6c-.775 0-1.467-.167-2.075-.5A3.66 3.66 0 0 1 2.5 19.075c-.333-.608-.5-1.3-.5-2.075V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C4.533 3.17 5.225 3 6 3h12Z"
  />
  <rect width="8" height="5" x="5" y="6" fill="#B7B7B7" rx="1" />
  <rect width="4" height="5" x="15" y="6" fill="#B7B7B7" rx="1" />
  <rect width="14" height="5" x="5.014" y="13.081" fill="#B7B7B7" rx="1" />
</svg>
`})))()}var Ut;function Wt(){return(Wt=e((()=>{Ut=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#EBEBEB"
    d="M13 2.594c.267 0 .538.074.813.224.274.15.583.393.924.726l4.95 4.9c.542.541.813 1.091.813 1.65v7.45c0 .725-.179 1.396-.537 2.013a4.001 4.001 0 0 1-1.463 1.449 3.87 3.87 0 0 1-2 .538h-9c-.725 0-1.396-.18-2.013-.538a4.031 4.031 0 0 1-1.45-1.45 3.937 3.937 0 0 1-.537-2.012V6.594c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7.5 2.594H13Z"
  />
  <path
    fill="#F5F5F5"
    d="M13 2.594c.267 0 .537.075.813.225.274.15.583.391.925.725l4.95 4.9c.541.541.812 1.091.812 1.65h-4.787c-.834 0-1.496-.242-1.988-.725C13.242 8.877 13 8.215 13 7.38V2.594Z"
  />
</svg>
`})))()}var Gt;function Kt(){return(Kt=e((()=>{Gt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#DFDFDF"
    d="M13 2.594c.267 0 .538.074.813.224.274.15.583.393.924.726l4.95 4.9c.542.541.813 1.091.813 1.65v7.45c0 .725-.179 1.396-.537 2.013a4.001 4.001 0 0 1-1.463 1.449 3.87 3.87 0 0 1-2 .538h-9c-.725 0-1.396-.18-2.013-.538a4.031 4.031 0 0 1-1.45-1.45 3.937 3.937 0 0 1-.537-2.012V6.594c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7.5 2.594H13Z"
  />
  <path
    fill="#00C2A2"
    d="M9.818 8.606c-.25.142-.525.213-.825.213-.3 0-.58-.071-.838-.213-.25-.15-.45-.35-.6-.6a1.714 1.714 0 0 1-.212-.837c0-.3.07-.575.213-.825.15-.259.35-.459.6-.6a1.64 1.64 0 0 1 .837-.225c.3 0 .575.075.825.225.258.141.458.341.6.6.15.25.225.525.225.825 0 .3-.075.579-.225.837a1.6 1.6 0 0 1-.6.6Zm1.787 3.325c-.091.092-.22.138-.387.138h-4.45c-.167 0-.296-.046-.388-.138-.091-.091-.12-.22-.087-.387.075-.425.242-.804.5-1.138a2.729 2.729 0 0 1 2.2-1.088 2.729 2.729 0 0 1 2.2 1.088c.258.334.425.713.5 1.138.033.166.004.296-.088.387Z"
  />
  <path
    fill="#FDFDFD"
    d="M13 2.594c.267 0 .537.075.813.225.274.15.583.391.925.725l4.95 4.9c.541.541.812 1.091.812 1.65h-4.787c-.834 0-1.496-.242-1.988-.725C13.242 8.877 13 8.215 13 7.38V2.594Z"
  />
  <path
    fill="#9B9B9B"
    d="M17 14.005a.72.72 0 0 1 0 1.44H7a.72.72 0 0 1 0-1.44h10Zm-3.28 3.715A.72.72 0 0 0 13 17H7a.72.72 0 0 0 0 1.44h6a.72.72 0 0 0 .72-.72Z"
  />
</svg>
`})))()}var qt;function Jt(){return(Jt=e((()=>{qt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#2E9EFF"
    d="M22 9v4H2V7c0-2.35 1.65-4 4-4h2.637c2.988 0 2.75 2 4.613 2H18c2.35 0 4 1.65 4 4Z"
  />
  <path
    fill="#68C4FF"
    d="M18 21c2.35 0 4-1.65 4-4v-5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v5c0 2.35 1.65 4 4 4h12Z"
  />
</svg>
`})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="9" fill="#CDF3FF" />
  <path
    fill="#41CEF9"
    fill-rule="evenodd"
    d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2ZM9.172 13c.146 4.477 1.284 7 2.828 7 1.544 0 2.682-2.523 2.828-7H9.172Zm-5.108 0a7.994 7.994 0 0 0 4.313 6.134C7.686 17.622 7.261 15.549 7.174 13h-3.11Zm12.762 0c-.087 2.55-.512 4.622-1.204 6.134A7.994 7.994 0 0 0 19.936 13h-3.11Zm-8.45-8.135A7.995 7.995 0 0 0 4.065 11h3.11c.087-2.55.511-4.623 1.203-6.135ZM12.001 4c-1.544 0-2.682 2.523-2.828 7h5.656C14.682 6.523 13.544 4 12 4Zm3.622.865C16.314 6.377 16.74 8.45 16.826 11h3.11a7.995 7.995 0 0 0-4.314-6.135Z"
    clip-rule="evenodd"
  />
</svg>
`})))()}var Zt;function Qt(){return(Qt=e((()=>{Zt=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#3C5CD8"
    d="M13 10.5h4.5c.708 0 1.325.142 1.85.425.533.283.942.692 1.225 1.225.283.525.425 1.142.425 1.85v2h-2v-2c0-.467-.134-.833-.4-1.1-.267-.266-.633-.4-1.1-.4H13V16h-2v-3.5H6.5c-.458 0-.825.134-1.1.4-.266.267-.4.633-.4 1.1v2H3v-2c0-.708.142-1.325.425-1.85a2.916 2.916 0 0 1 1.213-1.225c.533-.283 1.154-.425 1.862-.425H11V8h2v2.5Z"
  />
  <path
    fill="#6582F1"
    d="M9.012 2.513C8.671 2.854 8.5 3.35 8.5 4v2.5c0 .65.17 1.146.512 1.487.342.342.838.513 1.488.513h3c.65 0 1.146-.17 1.488-.513.341-.341.512-.837.512-1.487V4c0-.65-.17-1.146-.512-1.487C14.646 2.17 14.15 2 13.5 2h-3c-.65 0-1.146.17-1.488.513Zm.011 13.499c-.341.342-.512.838-.512 1.488V20c0 .65.17 1.146.512 1.488.342.341.838.512 1.488.512h3c.65 0 1.146-.17 1.487-.512.342-.342.513-.838.513-1.488v-2.5c0-.65-.171-1.146-.513-1.488-.341-.341-.837-.512-1.487-.512h-3c-.65 0-1.146.17-1.488.512Zm8 0c-.341.342-.512.838-.512 1.488V20c0 .65.17 1.146.512 1.488.342.341.838.512 1.488.512h3c.65 0 1.146-.17 1.487-.512.342-.342.513-.838.513-1.488v-2.5c0-.65-.171-1.146-.513-1.488-.341-.341-.837-.512-1.487-.512h-3c-.65 0-1.146.17-1.488.512Zm-16 0c-.341.342-.512.838-.512 1.488V20c0 .65.17 1.146.512 1.488.342.341.838.512 1.488.512h3c.65 0 1.146-.17 1.487-.512.342-.342.513-.838.513-1.488v-2.5c0-.65-.171-1.146-.513-1.488-.341-.341-.837-.512-1.487-.512h-3c-.65 0-1.146.17-1.488.512Z"
  />
</svg>
`})))()}var $t;function en(){return(en=e((()=>{$t=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FFD500"
    d="M12 1.62c4.566 0 7.777 3.256 7.777 7.556 0 4.166-3.244 5.722-3.244 7.955v.7l-.003.174H7.47a6.237 6.237 0 0 1-.004-.174v-.7c0-2.233-3.244-3.789-3.244-7.955 0-4.3 3.21-7.556 7.778-7.556Z"
  />
  <path
    fill="#BDBBBB"
    d="M16.53 18.005c-.048 2.655-1.781 4.317-4.53 4.317-2.75 0-4.483-1.662-4.532-4.317h9.063Z"
  />
  <path
    fill="#FFEFA0"
    d="M10.299 17.51h1v-7.19c0-1.098-.911-2.008-2.033-2.008-1.112 0-2.023.91-2.023 2.008 0 1.11.911 2.03 2.023 2.03h5.468c1.112 0 2.023-.92 2.023-2.03a2.026 2.026 0 0 0-2.023-2.008c-1.122 0-2.033.91-2.033 2.008v7.19h1v-7.19c0-.565.467-1.031 1.033-1.031a1.03 1.03 0 0 1 1.034 1.031c0 .577-.456 1.032-1.034 1.032H9.266a1.024 1.024 0 0 1-1.034-1.032 1.03 1.03 0 0 1 1.034-1.03c.566 0 1.033.466 1.033 1.031v7.19Z"
  />
  <path
    fill="#D9D9D9"
    d="M16.533 17.13v.701A6.254 6.254 0 0 1 16.425 19h-8.85a5.54 5.54 0 0 1-.108-1.169v-.7c0-.039-.004-.077-.006-.115h9.078c-.002.038-.006.076-.006.115Z"
  />
</svg>
`})))()}var tn;function nn(){return(nn=e((()=>{tn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#43D0FB"
    d="M10.84 19.23c-4.63 0-8.39-3.76-8.39-8.39 0-4.63 3.76-8.39 8.39-8.39 4.63 0 8.39 3.76 8.39 8.39 0 4.63-3.76 8.39-8.39 8.39Zm10.3 1.92c-.4.39-1.03.4-1.42 0l-3.99-4 1.41-1.41 4 3.99c.4.39.39 1.02 0 1.42Z"
  />
  <path
    fill="#CDF3FF"
    d="M17.23 10.84c0 3.53-2.86 6.39-6.39 6.39s-6.39-2.86-6.39-6.39 2.86-6.39 6.39-6.39 6.39 2.86 6.39 6.39Z"
  />
  <path
    fill="#1BA5CF"
    d="m21.35 19.58-3.77-3.77c-.5.67-1.09 1.27-1.77 1.77l3.77 3.77c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77Z"
  />
</svg>
`})))()}var rn;function an(){return(an=e((()=>{rn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#fff"
    d="M9.012 17.15c.917.533 1.913.8 2.988.8a5.771 5.771 0 0 0 2.975-.8 5.978 5.978 0 0 0 2.162-2.162c.534-.917.8-1.913.8-2.988a5.771 5.771 0 0 0-.8-2.975 5.978 5.978 0 0 0-2.162-2.163 5.77 5.77 0 0 0-2.975-.8c-1.075 0-2.07.267-2.988.8A5.978 5.978 0 0 0 6.85 9.025 5.77 5.77 0 0 0 6.05 12c0 1.075.267 2.07.8 2.988a5.978 5.978 0 0 0 2.162 2.162Z"
  />
  <path fill="#fff" d="M13 21V3h-2v18h2Z" />
  <path fill="#fff" d="M21 16.887 3 9.25V7.075l18 7.65v2.162Z" />
  <path
    fill="#FFC93C"
    d="M21 16.888V17c0 .775-.171 1.467-.513 2.075a3.576 3.576 0 0 1-1.412 1.425c-.608.333-1.3.5-2.075.5h-4v-3.135a5.714 5.714 0 0 0 1.975-.715 5.965 5.965 0 0 0 2.032-1.957L21 16.888Z"
  />
  <path
    fill="#FF8BC9"
    d="m3 9.25 3.212 1.362A5.979 5.979 0 0 0 6.05 12c0 1.075.266 2.07.8 2.987a5.981 5.981 0 0 0 2.163 2.163c.625.364 1.288.6 1.987.716V21H7c-.775 0-1.467-.167-2.075-.5A3.66 3.66 0 0 1 3.5 19.075c-.333-.608-.5-1.3-.5-2.075V9.25Z"
  />
  <path
    fill="#7DCC60"
    d="M11 6.146c-.7.115-1.362.352-1.987.716a5.966 5.966 0 0 0-2.008 1.915L3 7.075V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C5.533 3.17 6.225 3 7 3h4v3.146ZM17 3c.775 0 1.467.171 2.075.513a3.493 3.493 0 0 1 1.412 1.412C20.83 5.533 21 6.225 21 7v7.725l-3.218-1.368c.101-.437.155-.89.155-1.357a5.77 5.77 0 0 0-.8-2.975 5.981 5.981 0 0 0-2.162-2.163A5.716 5.716 0 0 0 13 6.146V3h4Z"
  />
  <path
    fill="#2E9EFF"
    d="M10.012 15.425A3.92 3.92 0 0 0 12 15.95a3.85 3.85 0 0 0 1.975-.525 3.993 3.993 0 0 0 1.425-1.438c.358-.608.537-1.27.537-1.987a3.78 3.78 0 0 0-.537-1.975A3.895 3.895 0 0 0 13.975 8.6 3.78 3.78 0 0 0 12 8.063a3.85 3.85 0 0 0-1.988.537 3.99 3.99 0 0 0-1.437 1.425A3.85 3.85 0 0 0 8.05 12c0 .717.175 1.38.525 1.988a4.09 4.09 0 0 0 1.438 1.437Z"
  />
</svg>
`})))()}var on;function sn(){return(sn=e((()=>{on=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#EBEBEB"
    fill-rule="evenodd"
    d="M7.759 3h8.482c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C22 7.29 22 7.954 22 8.758v6.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 16.71 2 16.046 2 15.242V8.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 3 6.954 3 7.758 3Z"
    clip-rule="evenodd"
  />
  <path
    fill="#B7B7B7"
    d="M13.5 8a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1H17a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1Zm-7.502 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-10a1 1 0 0 1-1-1Z"
  />
  <path
    fill="#9B9B9B"
    d="M6 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8Z"
  />
</svg>
`})))()}var cn;function ln(){return(ln=e((()=>{cn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#9B9B9B"
    d="M12 22.033c-3.933 0-7.033-3.1-7.033-7.033V8.944c0-.555.444-1 1-1 .555 0 1 .445 1 1v6.045c0 2.822 2.21 5.044 5.033 5.044 2.822 0 5.033-2.21 5.033-5.033V6.989a2.997 2.997 0 0 0-3.022-3.022 2.997 2.997 0 0 0-3.022 3.022v7.989A1 1 0 0 0 12 15.988a1 1 0 0 0 1.011-1.01V8.944c0-.555.445-1 1-1 .556 0 1 .445 1 1v6.034A2.979 2.979 0 0 1 12 17.988a2.979 2.979 0 0 1-3.011-3.01v-7.99c0-2.81 2.211-5.021 5.022-5.021 2.811 0 5.022 2.21 5.022 5.022V15c0 3.933-3.1 7.033-7.033 7.033Z"
  />
</svg>
`})))()}var un;function dn(){return(dn=e((()=>{un=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FEBD08"
    d="M19.58 4.39c-1.53-1.52-3.9-1.5-5.4 0l-8.91 8.94c-1.01 1.01-1.42 1.59-1.67 2.93l-.53 3.3c-.18.91.44 1.53 1.37 1.37l3.31-.54c1.32-.21 1.9-.63 2.91-1.64l8.92-8.92c1.52-1.52 1.54-3.89 0-5.42v-.02Z"
  />
  <path
    fill="#FF928C"
    d="M19.58 9.82c1.52-1.52 1.54-3.89 0-5.42-1.53-1.52-3.9-1.5-5.4 0l-.41.41 5.41 5.41.4-.4Z"
  />
  <path
    fill="#D9D9D9"
    d="m13.77 4.813-1.415 1.414 5.41 5.41 1.414-1.415-5.41-5.409Z"
  />
  <path
    fill="#fff"
    d="m12.36 6.23-7.09 7.11c-1.01 1.01-1.42 1.59-1.67 2.93l-.53 3.3c-.09.45.02.83.26 1.08L15.05 8.93l-2.69-2.7Z"
    opacity=".5"
  />
  <path
    fill="#FFDDBC"
    d="M4.6 14.05c-.54.64-.81 1.22-1 2.21l-.09.55 3.67 3.67.57-.09c.99-.16 1.56-.43 2.2-.98L4.6 14.05Z"
  />
  <path
    fill="#4D4D4D"
    d="m3.51 16.81-.44 2.75c-.18.91.44 1.53 1.37 1.37l2.74-.45-3.67-3.67Z"
  />
</svg>
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#2E9EFF"
    d="M12.725 20.288c-.367.716-.842 1.166-1.425 1.35-.583.191-1.15.12-1.7-.213-.55-.325-.954-.846-1.213-1.563L3.787 6.95c-.175-.492-.216-.958-.124-1.4.091-.45.291-.83.6-1.137a2.187 2.187 0 0 1 1.137-.6c.45-.092.92-.05 1.412.125l12.913 4.6c.717.258 1.237.662 1.563 1.212.333.542.404 1.104.212 1.688-.183.583-.633 1.058-1.35 1.425l-4.925 2.512-2.5 4.913Z"
  />
</svg>
`})))()}var mn;function hn(){return(hn=e((()=>{mn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FFD400"
    d="M12 12v9H7a3.87 3.87 0 0 1-2-.537 4.003 4.003 0 0 1-1.463-1.45A3.936 3.936 0 0 1 3 17v-5h9Z"
  />
  <path
    fill="#FFA43D"
    d="M12 12H9.605a2.167 2.167 0 1 1-4.232 0H3V7c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7 3h5v9Z"
  />
  <path
    fill="#F75858"
    d="M12 12V9.605a2.167 2.167 0 1 1 0-4.232V3h5a3.87 3.87 0 0 1 2 .537 4.002 4.002 0 0 1 1.463 1.45c.359.617.538 1.288.538 2.013v5h-9Z"
  />
  <path
    fill="#FF8082"
    d="M12 12h2.395a2.167 2.167 0 1 1 4.232 0H21v5a3.87 3.87 0 0 1-.537 2 4.002 4.002 0 0 1-1.45 1.463A3.937 3.937 0 0 1 17 21h-5v-9Z"
  />
  <circle
    cx="12.464"
    cy="16.5"
    r="2.167"
    fill="#FFC93C"
    transform="rotate(-90 12.464 16.5)"
  />
</svg>
`})))()}var gn;function _n(){return(_n=e((()=>{gn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="10" fill="#36DEC3" fill-opacity=".25" />
  <circle cx="12" cy="12" r="6" fill="#36DEC3" fill-opacity=".25" />
  <path
    fill="#36DEC3"
    d="M12 22a9.804 9.804 0 0 1-5.013-1.337 10.084 10.084 0 0 1-3.65-3.65A9.812 9.812 0 0 1 2 12c0-1.808.446-3.48 1.337-5.013a9.987 9.987 0 0 1 3.65-3.637A9.727 9.727 0 0 1 12 2c.275 0 .508.1.7.3.2.192.3.425.3.7a.97.97 0 0 1-.3.712A.953.953 0 0 1 12 4c-1.45 0-2.787.358-4.013 1.075a8.001 8.001 0 0 0-2.912 2.912A7.805 7.805 0 0 0 4 12a7.8 7.8 0 0 0 1.075 4.012 8.001 8.001 0 0 0 2.912 2.913A7.804 7.804 0 0 0 12 20a7.8 7.8 0 0 0 4.012-1.075 8.002 8.002 0 0 0 2.913-2.913A7.804 7.804 0 0 0 20 12a7.79 7.79 0 0 0-.45-2.637 7.74 7.74 0 0 0-1.262-2.3c-.292-.375-.367-.738-.226-1.088.15-.35.405-.563.763-.637.367-.084.68.033.938.35a9.746 9.746 0 0 1 1.65 2.925A9.817 9.817 0 0 1 22 12c0 1.808-.45 3.48-1.35 5.012a9.987 9.987 0 0 1-3.637 3.65C15.478 21.555 13.807 22 12 22Z"
  />
  <path
    fill="#2EC9B0"
    d="M8.988 17.2c.916.533 1.92.8 3.012.8a5.884 5.884 0 0 0 3.012-.8 6.015 6.015 0 0 0 2.175-2.188c.542-.916.813-1.92.813-3.012a5.8 5.8 0 0 0-.288-1.825 5.68 5.68 0 0 0-.8-1.625c-.2-.283-.487-.404-.862-.363a.971.971 0 0 0-.8.55c-.167.317-.113.705.162 1.163.392.642.588 1.342.588 2.1 0 .733-.18 1.404-.537 2.012a4.03 4.03 0 0 1-1.45 1.45A3.893 3.893 0 0 1 12 16c-.733 0-1.404-.18-2.012-.537a4.03 4.03 0 0 1-1.45-1.45A3.892 3.892 0 0 1 8 12c0-.733.18-1.404.537-2.012a4.03 4.03 0 0 1 1.45-1.45A3.892 3.892 0 0 1 12 8a.953.953 0 0 0 .7-.287c.2-.2.3-.438.3-.713 0-.275-.1-.508-.3-.7A.933.933 0 0 0 12 6c-1.092 0-2.096.27-3.012.813A6.016 6.016 0 0 0 6.8 8.988C6.267 9.904 6 10.908 6 12s.267 2.096.8 3.012A6.115 6.115 0 0 0 8.988 17.2Z"
  />
  <path
    fill="#00B194"
    d="M12 .925c.275 0 .508.1.7.3.2.191.3.425.3.7v8.35l.112.069c.255.167.46.386.613.656.183.3.275.633.275 1s-.092.704-.275 1.013c-.175.3-.417.541-.725.724-.3.175-.633.263-1 .263s-.704-.088-1.013-.263a2.155 2.155 0 0 1-.724-.724A2.017 2.017 0 0 1 10 12c0-.367.088-.7.263-1a2.02 2.02 0 0 1 .724-.725l.013-.007V1.925a.95.95 0 0 1 .287-.7c.2-.2.438-.3.713-.3Z"
  />
</svg>
`})))()}var vn;function yn(){return(yn=e((()=>{vn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#4D6FE6"
    d="M12 2.75c.248 0 .492.059.712.172l6 3.077A1.6 1.6 0 0 1 19.6 7.42v4.067c0 4.328-2.861 8.043-6.9 9.287a2.362 2.362 0 0 1-1.4 0c-4.039-1.244-6.9-4.959-6.9-9.287V7.42c0-.6.338-1.148.888-1.42l6-3.077A1.55 1.55 0 0 1 12 2.75Z"
  />
  <path
    fill="#86A0F2"
    d="M12 5.154 7.4 7.512v3.975c0 3.084 1.862 5.812 4.6 7.05V5.154Z"
  />
</svg>
`})))()}var bn;function xn(){return(xn=e((()=>{bn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#5856D6"
    d="M9 21c-1.217 0-2.28-.242-3.188-.725a5.14 5.14 0 0 1-2.087-2.087C3.242 17.279 3 16.216 3 15V9c0-1.217.242-2.275.725-3.175a5.04 5.04 0 0 1 2.087-2.088C6.721 3.246 7.784 3 9 3h6c1.217 0 2.275.246 3.175.737a4.946 4.946 0 0 1 2.087 2.088c.492.9.738 1.958.738 3.175v6c0 1.217-.246 2.28-.738 3.188a5.04 5.04 0 0 1-2.087 2.087c-.9.483-1.958.725-3.175.725H9Z"
  />
  <path
    fill="#FFC93C"
    d="M9.337 16.1a.84.84 0 0 0 .513-.038l2.15-.875 2.137.876a.806.806 0 0 0 .5.037.697.697 0 0 0 .388-.275.808.808 0 0 0 .125-.487l-.175-2.3 1.5-1.776a.686.686 0 0 0 .188-.462.692.692 0 0 0-.138-.463.705.705 0 0 0-.425-.262l-2.25-.55-1.225-1.963a.768.768 0 0 0-.387-.325.666.666 0 0 0-.476 0 .777.777 0 0 0-.375.325L10.15 9.525l-2.25.55a.704.704 0 0 0-.425.263.75.75 0 0 0-.15.462c.008.167.075.32.2.462l1.5 1.763-.188 2.313a.807.807 0 0 0 .125.487.696.696 0 0 0 .375.275Z"
  />
</svg>
`})))()}var Sn;function Cn(){return(Cn=e((()=>{Sn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FFA43D"
    d="M6.775 20.725a2.053 2.053 0 0 1-1.275.25 1.725 1.725 0 0 1-1.075-.55c-.283-.308-.425-.7-.425-1.175V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C6.533 3.17 7.225 3 8 3h8c.775 0 1.467.17 2.075.513.608.333 1.08.804 1.413 1.412.341.608.512 1.3.512 2.075v12.25c0 .442-.142.82-.425 1.137-.275.309-.63.5-1.063.575-.433.076-.862-.004-1.287-.237L12 17.837l-5.225 2.888Z"
  />
  <path
    fill="#FBF4EB"
    d="M14.5 14.75a.78.78 0 0 1-.475-.025L12 13.887l-2.038.838a.78.78 0 0 1-.475.025.721.721 0 0 1-.362-.262.757.757 0 0 1-.113-.45l.175-2.2-1.412-1.663a.71.71 0 0 1-.188-.438.7.7 0 0 1 .138-.425.72.72 0 0 1 .4-.25l2.125-.524 1.175-1.85a.672.672 0 0 1 .35-.3.6.6 0 0 1 .45 0c.15.05.275.15.375.3l1.138 1.85 2.137.524a.66.66 0 0 1 .387.25c.1.126.146.267.138.426a.65.65 0 0 1-.175.437l-1.413 1.675.163 2.188a.71.71 0 0 1-.125.45.657.657 0 0 1-.35.262Z"
  />
</svg>
`})))()}var wn;function Tn(){return(Tn=e((()=>{wn=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#EBEBEB"
    d="M13 2.594c.267 0 .538.074.813.224.274.15.583.393.924.726l4.95 4.9c.542.541.813 1.091.813 1.65v7.45c0 .725-.179 1.396-.537 2.013a4.001 4.001 0 0 1-1.463 1.449 3.87 3.87 0 0 1-2 .538h-9c-.725 0-1.396-.18-2.013-.538a4.031 4.031 0 0 1-1.45-1.45 3.937 3.937 0 0 1-.537-2.012V6.594c0-.725.179-1.392.537-2a4.002 4.002 0 0 1 1.45-1.463A3.936 3.936 0 0 1 7.5 2.594H13Z"
  />
  <path
    fill="#9B9B9B"
    d="M14.696 16.734c.374 0 .677.323.677.72 0 .398-.303.72-.677.72H7.304c-.374 0-.677-.322-.677-.72 0-.397.303-.72.677-.72h7.392Zm2-3.004c.374 0 .677.323.677.72 0 .398-.303.72-.677.72H7.304c-.374 0-.677-.322-.677-.72 0-.397.303-.72.677-.72h9.392Z"
  />
  <path
    fill="#F5F5F5"
    d="M13 2.594c.267 0 .537.075.813.225.274.15.583.391.925.725l4.95 4.9c.541.541.812 1.091.812 1.65h-4.787c-.834 0-1.496-.242-1.988-.725C13.242 8.877 13 8.215 13 7.38V2.594Z"
  />
</svg>
`})))()}var En;function Dn(){return(Dn=e((()=>{En=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    fill="#FFDE83"
    d="M17.287 3.008c.66.036 1.256.2 1.788.492A3.66 3.66 0 0 1 20.5 4.925c.25.456.406.96.469 1.51A4.73 4.73 0 0 1 21 7v7.942h-4.993V21H7c-.775 0-1.467-.167-2.075-.5A3.66 3.66 0 0 1 3.5 19.075c-.333-.608-.5-1.3-.5-2.075V7c0-.775.167-1.467.5-2.075a3.575 3.575 0 0 1 1.425-1.412C5.533 3.17 6.225 3 7 3h10l.287.008Z"
  />
  <path
    fill="#EEC35F"
    d="M15.104 15a1 1 0 1 1 0 2H7.015a1 1 0 1 1 0-2h8.089Zm-3.089-4a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2h5Zm4.907-4a1 1 0 1 1 0 2H7.015a1 1 0 1 1 0-2h9.907Z"
  />
  <path
    fill="#2E9EFF"
    d="M14.9 22.012a1.58 1.58 0 0 1-.725-.887l-2.825-7.912c-.1-.3-.125-.588-.075-.863.058-.275.183-.508.375-.7.192-.192.425-.313.7-.363.275-.058.563-.033.863.075l7.912 2.825c.4.142.696.388.887.738.192.342.234.696.125 1.063-.1.358-.354.641-.762.85l-3.025 1.524-1.513 3.013c-.208.408-.495.663-.862.762a1.358 1.358 0 0 1-1.075-.125Z"
  />
</svg>
`})))()}function On(e){let t=g(e)?e.replace(/^plugins~/,``):e,n=0;for(let e=0;e<t.length;e+=1)n=(n*31+t.charCodeAt(e))%kn.length;return kn[n]??``}var kn;function An(){return(An=e((()=>{m(),Mt(),Pt(),It(),Rt(),Bt(),Ht(),Wt(),Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn=[jt,Nt,Ft,Lt,zt,Vt,Ut,Gt,qt,Yt,Zt,$t,rn,tn,on,cn,un,fn,mn,gn,vn,bn,Sn,wn,En].map(e=>`data:image/svg+xml,${encodeURIComponent(e)}`)})))()}function jn(e){return{...pr(e.summary),description:e.summary.interface?.shortDescription??e.description??null,displayName:e.summary.interface?.displayName??null,marketplaceDisplayName:null,marketplaceName:e.marketplaceName,plugin:e.summary,keywords:e.summary.keywords,...lt({marketplaceName:e.marketplaceName,marketplacePath:e.marketplacePath})}}function Mn({marketplacePath:e,remoteMarketplaceName:t}){if(e!=null&&t!=null)throw Error(`plugin marketplace request requires one marketplace source`);if(e!=null)return{marketplacePath:e};if(t!=null)return{remoteMarketplaceName:t};throw Error(`plugin marketplace request requires a marketplace source`)}function Nn(e){return e.marketplacePath??`remote:${e.remoteMarketplaceName}`}function Pn(e){let t=e.plugin.remotePluginId??e.plugin.shareContext?.remotePluginId;return`${Nn(e)}:${e.plugin.id}:${t??``}`}function Fn(e){return e.filter(e=>{let t=nr(e).toLowerCase();return!wr.some(e=>t===e||t.startsWith(`${e}-`))})}function In(e){return{...Mn(e),pluginName:dt(e)}}function Ln(e,t,n){let r=(0,mr.c)(78),i=n?.enabled!==!1,a;r[0]!==e||r[1]!==i?(a={enabled:i,hostId:e},r[0]=e,r[1]=i,r[2]=a):a=r[2];let o=Ae(a)&&i,s=n?.additionalMarketplaceKinds??vr,c=de(`4218407052`),l=Se(e),u=n?.includeRemoteCatalog??!0,d;r[3]!==s||r[4]!==l?.authMethod||r[5]!==c||r[6]!==n?.includeRemoteCatalog||r[7]!==u?(d=Hn({additionalMarketplaceKinds:s,includeRemoteCatalog:u,includeVerticalCatalog:n?.includeRemoteCatalog!==!1&&!c&&kt(l?.authMethod??null)}),r[3]=s,r[4]=l?.authMethod,r[5]=c,r[6]=n?.includeRemoteCatalog,r[7]=u,r[8]=d):d=r[8];let f=d,p=ie(),m=te(ne),h;r[9]!==e||r[10]!==m?(h=m.includes(e),r[9]=e,r[10]=m,r[11]=h):h=r[11];let g=h,_=t===void 0,v;r[12]===e?v=r[13]:(v={hostId:e},r[12]=e,r[13]=v);let y=o&&g&&_,b;r[14]===y?b=r[15]:(b={enabled:y},r[14]=y,r[15]=b);let x=A(ve,v,b),S;r[16]===o?S=r[17]:(S={enabled:o},r[16]=o,r[17]=S);let C=Le(e,S),w=o&&g,T;r[18]!==e||r[19]!==w?(T={enabled:w,hostId:e},r[18]=e,r[19]=w,r[20]=T):T=r[20];let E=Ke(T),D;r[21]!==E||r[22]!==e?(D={computerUseAvailability:E,hostId:e},r[21]=E,r[22]=e,r[23]=D):D=r[23];let O=Ct(D),ee=o&&g,k;r[24]!==e||r[25]!==ee?(k={enabled:ee,hostId:e},r[24]=e,r[25]=ee,r[26]=k):k=r[26];let j=yt(k),M=o&&g,N;r[27]!==e||r[28]!==M?(N={enabled:M,hostId:e},r[27]=e,r[28]=M,r[29]=N):N=r[29];let P=ht(N),F=x.data?.roots,I;r[30]!==C||r[31]!==e||r[32]!==t||r[33]!==F?(I=lr({codexHome:C,hostId:e,rootsOverrideCwd:t,workspaceRoots:F}),r[30]=C,r[31]=e,r[32]=t,r[33]=F,r[34]=I):I=r[34];let L=I,re=o&&l?.isLoading!==!0&&g&&(t!==void 0||x.isFetched),R;r[35]!==e||r[36]!==c||r[37]!==f||r[38]!==L?(R={hostId:e,isOpenAICuratedRemoteMarketplaceEnabled:c,marketplaceKinds:f,roots:L},r[35]=e,r[36]=c,r[37]=f,r[38]=L,r[39]=R):R=r[39];let z;r[40]===re?z=r[41]:(z={enabled:re},r[40]=re,r[41]=z);let B=A(Er,R,z);if(!o||!g){let e;return r[42]===Symbol.for(`react.memo_cache_sentinel`)?(e={availablePlugins:$,featuredPluginIds:gr,installedPlugins:$,marketplaceLoadErrors:_r,marketplaces:br,errorMessage:null,isLoading:!1,isFetching:!1,refetch:Bn,reload:zn,forceReload:Rn},r[42]=e):e=r[42],e}let V,H,U,W,G;r[43]!==E.available||r[44]!==P.available||r[45]!==j.available||r[46]!==O.available||r[47]!==B.data?.bundledCodexAppToolsPlugin||r[48]!==B.data?.featuredPluginIds||r[49]!==B.data?.plugins?(V={isComputerUseAvailable:E.available,isExternalBrowserUseAvailable:P.available,isInAppBrowserUseAvailable:j.available,isMessagesAvailable:O.available},H=B.data?.plugins??$,U=Jn({plugins:H,...V}),W=B.data?.bundledCodexAppToolsPlugin,G=qn({featuredPluginIds:B.data?.featuredPluginIds??gr,...V}),r[43]=E.available,r[44]=P.available,r[45]=j.available,r[46]=O.available,r[47]=B.data?.bundledCodexAppToolsPlugin,r[48]=B.data?.featuredPluginIds,r[49]=B.data?.plugins,r[50]=V,r[51]=H,r[52]=U,r[53]=W,r[54]=G):(V=r[50],H=r[51],U=r[52],W=r[53],G=r[54]);let K;r[55]===H?K=r[56]:(K=Yn(H),r[55]=H,r[56]=K);let ae=B.data?.marketplaceLoadErrors??_r,oe=B.data?.marketplaces??br,se=B.error?B.error.message:null,ce=_&&x.isLoading||B.isLoading||j.isLoading||P.isLoading||E.isLoading||O.isLoading,le=_&&x.isFetching||B.isFetching||E.isFetching,q;r[57]!==V||r[58]!==B?(q=async()=>{let e=(await B.refetch()).data?.plugins??$;return{availablePlugins:Jn({plugins:e,...V}),installedPlugins:Yn(e)}},r[57]=V,r[58]=B,r[59]=q):q=r[59];let J;r[60]===p?J=r[61]:(J=()=>p(Z),r[60]=p,r[61]=J);let Y;r[62]!==e||r[63]!==p?(Y=async()=>{Q.add(e),await(async()=>{await p(Z)})().finally(()=>{Q.delete(e)})},r[62]=e,r[63]=p,r[64]=Y):Y=r[64];let ue;return r[65]!==U||r[66]!==W||r[67]!==G||r[68]!==K||r[69]!==ae||r[70]!==oe||r[71]!==se||r[72]!==ce||r[73]!==le||r[74]!==q||r[75]!==J||r[76]!==Y?(ue={availablePlugins:U,bundledCodexAppToolsPlugin:W,featuredPluginIds:G,installedPlugins:K,marketplaceLoadErrors:ae,marketplaces:oe,errorMessage:se,isLoading:ce,isFetching:le,refetch:q,reload:J,forceReload:Y},r[65]=U,r[66]=W,r[67]=G,r[68]=K,r[69]=ae,r[70]=oe,r[71]=se,r[72]=ce,r[73]=le,r[74]=q,r[75]=J,r[76]=Y,r[77]=ue):ue=r[77],ue}async function Rn(){}async function zn(){}async function Bn(){return{availablePlugins:$,installedPlugins:$}}function Vn(e){let t=(0,mr.c)(10),{enabled:n,hostId:r,marketplaceKind:i}=e,a=n===void 0||n,o;t[0]===r?o=t[1]:(o={hostId:r},t[0]=r,t[1]=o);let s=Ae(o),c=Se(r),l;t[2]!==c?.authMethod||t[3]!==i?(l=i===`local`||kt(c?.authMethod??null),t[2]=c?.authMethod,t[3]=i,t[4]=l):l=t[4];let u=l,d;t[5]!==r||t[6]!==i?(d={hostId:r,marketplaceKind:i},t[5]=r,t[6]=i,t[7]=d):d=t[7];let f=a&&s&&u,p;return t[8]===f?p=t[9]:(p={enabled:f},t[8]=f,t[9]=p),A(Dr,d,p)}function Hn({additionalMarketplaceKinds:e,includeRemoteCatalog:t,includeVerticalCatalog:n}){return t&&!n&&e.length===0?null:n?[`local`,`vertical`,...e]:[`local`,...e]}function Un(e,t,n,r){let i=Wn(r);return n==null?[...Z,e,t,`curated-marketplace`,i]:[...Z,e,t,`marketplace-kinds`,n,`curated-marketplace`,i]}function Wn(e){return e?f:r}function Gn({isOpenAICuratedRemoteMarketplaceEnabled:e}){return e?xr:yr}function Kn(e,t){return t.length===0?e:e.filter(e=>!t.includes(e.name))}function qn({featuredPluginIds:e,...t}){return e.filter(e=>Qn(e,t))}function Jn({plugins:e,...t}){return e.filter(e=>Qn(e.plugin.id,t))}function Yn(e){return e.filter(e=>e.plugin.installed)}function Xn({enabled:e,hostId:t,installed:n,pluginId:r,queryClient:i}){i.setQueriesData({queryKey:[...Z,t]},t=>{if(t==null)return t;let i=Zn({enabled:e,installed:n,pluginId:r,plugins:t.plugins});return i===t.plugins?void 0:{...t,plugins:i}}),i.setQueriesData({queryKey:[...Z,`marketplace-kind`,t]},t=>{if(t==null)return;let i=Zn({enabled:e,installed:n,pluginId:r,plugins:t});return i===t?void 0:i}),i.setQueriesData({queryKey:[...Z,`installed`,t]},t=>{if(t==null)return;if(!n){let e=t.filter(e=>e.plugin.id!==r);return e.length===t.length?void 0:e}let i=Zn({enabled:e,installed:n,pluginId:r,plugins:t});return i===t?void 0:i}),i.setQueriesData({queryKey:[...Z,`detail`,t]},t=>{if(!(t==null||t.summary.id!==r||t.summary.installed===n&&t.summary.enabled===e))return{...t,summary:{...t.summary,enabled:e,installed:n}}})}function Zn({enabled:e,installed:t,pluginId:n,plugins:r}){return r.some(r=>r.plugin.id===n&&(r.plugin.installed!==t||r.plugin.enabled!==e))?r.map(r=>r.plugin.id===n?{...r,plugin:{...r.plugin,enabled:e,installed:t}}:r):r}function Qn(e,{isComputerUseAvailable:t,isExternalBrowserUseAvailable:n,isInAppBrowserUseAvailable:r,isMessagesAvailable:i}){return nr(e)===`browser`?r||n:!(!r&&$n(e)||!n&&er(e)||!t&&tr(e)||!i&&e===Et)}function $n(e){let t=nr(e);return t===`browser`||t===`browser-use`}function er(e){let t=nr(e);return t===`chrome`||t===`chrome-dev`||t===`chrome-internal`}function tr(e){return nr(e)===Sr}function nr(e){let t=e.indexOf(`@`);return t===-1?e:e.slice(0,t)}function rr({buildFlavor:e,plugins:t}){let n=l(e);return t.filter(e=>!s(e.marketplaceName)||e.marketplaceName===n)}function ir(e){return e.trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)}function ar(e){return Tr.has(ir(e))}function or(e){let t=new Map;for(let n of e){let e=`${n.name}\u0000${n.path??``}`;if(t.has(e))continue;let r=ar(n.name);t.set(e,{displayName:n.interface?.displayName??null,isBuiltIn:r,name:n.name,path:n.path,pluginCount:n.plugins.length})}return Array.from(t.values()).sort((e,t)=>{let n=e.displayName?.trim()||e.name,r=t.displayName?.trim()||t.name;return n.localeCompare(r)})}async function sr({hostId:e,plugins:t,queryClient:n,signal:r}){let i=[...t];async function a(o){let s=t[o];if(s==null)return;let[c,l,u]=await Promise.all([cr(s.composerIconPath,e,n,r),cr(s.logoPath,e,n,r),cr(s.logoDarkPath,e,n,r)]);(c!=null||l!=null||u!=null)&&(i[o]={...s,composerIconPath:c??s.composerIconPath,logoDarkPath:u??s.logoDarkPath,logoPath:l??s.logoPath,plugin:s.plugin.interface?{...s.plugin,interface:{...s.plugin.interface,composerIcon:c??s.plugin.interface.composerIcon,logo:l??s.plugin.interface.logo,...u==null?{}:{logoDark:u}}}:s.plugin}),await a(o+hr)}return await Promise.all(Array.from({length:Math.min(hr,t.length)},(e,t)=>a(t))),i}async function cr(e,t,n,r){return $e(e,t,n,r)}function lr({codexHome:e,hostId:t,rootsOverrideCwd:n,workspaceRoots:r}){let i=t===`local`&&e!=null?a(e,Cr):null;return ur([...typeof n==`string`?[n]:n??r??[],...i==null?[]:[i]],e)}function ur(e,t){return Array.from(new Set(e.map(e=>e.trim()).filter(e=>w(e)&&dr(e,t))))}function dr(e,t){return t==null?!0:i(t)||C(t)?i(e)||C(e):e.startsWith(`/`)&&!e.startsWith(`//`)}function fr(e,t=$,n=`ui`){let{plugins:r,freshDirectoryPluginIds:i}=ct(e,n),a=new Map(t.map(e=>[X(e.plugin),e])),o=!1,s=r.map(e=>{let t={...e,...pr(e.plugin)},n=X(t.plugin),r=a.get(n);return!t.plugin.installed||r==null||i.has(n)?t:(o||=t.marketplaceName!==r.marketplaceName||t.marketplacePath!==r.marketplacePath,{...r,plugin:{...t.plugin,id:r.plugin.id,interface:r.plugin.interface??t.plugin.interface,keywords:r.plugin.keywords??t.plugin.keywords,name:r.plugin.name,remotePluginId:r.plugin.remotePluginId??t.plugin.remotePluginId,shareContext:r.plugin.shareContext??t.plugin.shareContext,source:r.plugin.source}})});if(!o)return s;let c=new Map(s.map(e=>[X(e.plugin),e]));return[...t.flatMap(e=>{let t=X(e.plugin),n=c.get(t);return c.delete(t),n==null?[]:[n]}),...c.values()]}function pr(e,t){let n=Ne(e.remotePluginId)?.iconUrl;if(n!=null)return{composerIconPath:n,logoDarkPath:n,logoPath:n};let r=e.interface,i=r?.composerIcon??r?.composerIconUrl,a=r?.logo??r?.logoUrl,o=r?.logoDark??r?.logoUrlDark,s=Fe(e),c=a!=null||o!=null,l=i??(c?null:s),u=c?a??o??null:s??t?.logoUrl??t?.logoUrlDark??null,d=c?o??null:s??t?.logoUrlDark??t?.logoUrl??null;if(u!=null)return{composerIconPath:l,logoDarkPath:d,logoPath:u};let f=On(e.remotePluginId??e.shareContext?.remotePluginId??e.id);return{composerIconPath:l??f,logoDarkPath:null,logoPath:f}}var mr,Z,hr,Q,gr,_r,vr,yr,br,$,xr,Sr,Cr,wr,Tr,Er,Dr;function Or(){return(Or=e((()=>{mr=D(),M(),m(),ut(),re(),P(),Me(),Ce(),ze(),Qe(),vt(),St(),je(),Tt(),Ot(),K(),j(),_e(),F(),fe(),pe(),B(),Pe(),An(),st(),Z=[`plugins`],hr=4,Q=new Set,gr=[],_r=[],vr=[],yr=[],br=[],$=[],xr=[r],Sr=`computer-use`,Cr=`.tmp/marketplaces/openai-internal-testing`,wr=[`datadog`,`statsig`],Tr=new Set([`codex-official`,v,r,f,`openai-primary-runtime`].map(ir)),Er=k(N,({hostId:e,isOpenAICuratedRemoteMarketplaceEnabled:t,marketplaceKinds:n,roots:r},{queryClient:i,scope:a})=>{let o=Gn({isOpenAICuratedRemoteMarketplaceEnabled:t}),c=Un(e,r,n,t);return{queryKey:c,queryFn:async()=>{let t=await L(a,e).sendRequest(`plugin/list`,n==null?{...r.length>0?{cwds:r}:{},forceRefetch:Q.has(e)||void 0}:{...r.length>0?{cwds:r}:{},marketplaceKinds:n,forceRefetch:Q.has(e)||void 0}),l=Kn(t.marketplaces,o),u=fr(l,i.getQueryData(c)?.plugins),d=Fn(t.featuredPluginIds).filter(e=>!o.some(t=>e.endsWith(`@${t}`)));return{bundledCodexAppToolsPlugin:l.find(({name:e})=>s(e))?.plugins.find(({name:e})=>e===T),featuredPluginIds:d,marketplaceLoadErrors:t.marketplaceLoadErrors,marketplaces:or(l),plugins:await sr({hostId:e,plugins:u,queryClient:i})}},staleTime:V.SIX_HOURS,gcTime:V.FIVE_MINUTES}}),Dr=k(N,({hostId:e,marketplaceKind:t},{queryClient:n,scope:r})=>{let i=[...Z,`marketplace-kind`,e,t];return{queryKey:i,queryFn:async()=>sr({hostId:e,plugins:fr((await L(r,e).sendRequest(`plugin/list`,{marketplaceKinds:[t],forceRefetch:Q.has(e)||void 0})).marketplaces,n.getQueryData(i)),queryClient:n}),staleTime:V.SIX_HOURS}})})))()}export{ze as $,Ot as A,mt as B,Vn as C,At as D,kt as E,vt as F,et as G,ut as H,ht as I,$e as J,st as K,dt as L,Ct as M,St as N,Et as O,yt as P,He as Q,ft as R,Ln as S,An as T,nt as U,X as V,rt as W,Ke as X,Qe as Y,We as Z,er as _,rr as a,or as b,Nn as c,In as d,Le as et,lr as f,tr as g,ar as h,Jn as i,Tt as j,Dt as k,Mn as l,sr as m,jn as n,fr as o,Or as p,tt as q,qn as r,pr as s,Z as t,Ie as tt,Pn as u,$n as v,On as w,Xn as x,Er as y,pt as z};
//# sourceMappingURL=use-plugins-52fc2bccd2b9.js.map