const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lottie_light-ed2aa08ba8d4.js","./lottie_light-c815d06f80f2.js","./rolldown-runtime-428824ca0286.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-428824ca0286.js";import{Mtt as n,i3 as r,n3 as i,t3 as a}from"./app-initial-ef83d79c5fa7.js";import{Cyn as o,wyn as s}from"./app-initial-f8f84852daaa.js";import{a as c,c as l,n as u,u as d}from"./helpers-a29a11f4d227.js";import{n as f,t as p}from"./useStableCallback-2dfc314eeb7c.js";import{D as m,E as h,a as g,i as _,r as v,t as y}from"./Button-a8dcf59ef5c0.js";import{a as b,c as x,d as S,f as C,i as w,l as T,m as E,n as D,o as ee,p as O,r as k,s as A,t as j,u as te}from"./RadioGroup-4bee9f495448.js";import{l as M,u as N}from"./SelectControl-c24e4dd35467.js";import{n as P,t as F}from"./Tooltip-f54dd2ca7d97.js";import{n as ne,t as I}from"./ChevronLeft-59d0bd734301.js";import{n as L,t as re}from"./ChevronRight-4d3318682c94.js";import{d as ie,t as R}from"./src-8c9fc4afe422.js";import{$ as z,A as B,At as ae,B as oe,Bt as V,C as se,Ct as ce,D as le,Dt as H,Et as ue,F as de,Ft as fe,Gt as pe,H as me,I as he,Jt as ge,K as _e,Kt as ve,M as ye,N as be,O as xe,Ot as Se,P as Ce,Pt as we,Q as Te,R as Ee,S as De,St as Oe,T as ke,Tt as Ae,U as je,V as Me,W as Ne,Wt as Pe,Yt as Fe,Z as Ie,Zt as Le,_ as Re,_t as ze,a as Be,at as Ve,b as He,bt as Ue,ct as We,dt as Ge,et as Ke,f as qe,ft as Je,gt as Ye,h as Xe,ht as Ze,i as Qe,it as $e,j as et,k as tt,kt as nt,l as rt,lt as it,m as at,n as ot,nt as st,o as ct,ot as lt,p as ut,pt as dt,qt as U,r as ft,st as pt,t as mt,tt as ht,u as gt,ut as _t,v as vt,vt as yt,wt as bt,xt,y as St,z as Ct,zt as wt}from"./List.module-e0bd3b1a9ba2.js";import{n as Tt,t as Et}from"./Badge-11e4e491ac51.js";import{a as Dt,d as Ot,f as kt,l as At,n as jt,o as Mt,p as Nt,r as Pt,s as Ft,t as It,u as Lt}from"./Table.module-aa9732f9fba4.js";import{At as Rt,Dt as zt,Ot as Bt,g as Vt,h as Ht,kt as Ut,m as Wt,p as Gt}from"./Slider-9667273463e9.js";import{i as Kt,r as qt}from"./Mobile-5627eb05a2bf.js";import{n as Jt,t as Yt}from"./Checkbox-533f10f59b5a.js";import{n as Xt,t as Zt}from"./SegmentedControl-7107eee1b63e.js";function Qt(e){return{dimension:e.dimension,enter:$t(e.enter),exit:$t(e.exit),forceCompositeLayer:e.forceCompositeLayer,hideOverflow:e.hideOverflow,initial:$t(e.initial),insertMethod:e.insertMethod,itemAnchor:e.itemAnchor,layoutEnter:e.layoutEnter,layoutExit:e.layoutExit,layoutMove:e.layoutMove,preventInitialTransition:e.preventInitialTransition}}function $t(e){if(!e)return;let{translateX:t,translateY:n,...r}=e;return{...r,x:t,y:n}}function en(e){let{children:t}=e;return(0,on.jsx)(O,{...Qt(e),children:t})}function tn(e){let{children:t}=e;return(0,on.jsx)(S,{...Qt(e),children:t})}function nn({children:e}){return(0,on.jsx)(fe,{children:e})}function rn(e){let{children:t}=e,n=(0,an.useMemo)(()=>typeof t==`string`||typeof t==`number`?(0,on.jsx)(an.Fragment,{children:t},`transition-child`):(0,an.isValidElement)(t)?t.key==null?(0,an.cloneElement)(t,{key:`transition-child`}):t:an.Children.toArray(t),[t]);return(0,on.jsx)(O,{...Qt(e),children:n})}var an,on;function sn(){return(sn=e((()=>{U(),E(),C(),an=n(),on=r()})))()}var cn,ln;function un(){return(un=e((()=>{cn=`_Badge_147vh_1`,ln={Badge:cn}})))()}function dn({children:e,color:t,label:n,maxWidth:r,onHover:i,padding:a,pill:o=!0,size:s,variant:c,weight:l=`medium`}){let u=(0,pn.useContext)(V),d=fn(t),f=d==null?t:void 0,p=typeof a==`number`||typeof a==`string`||a?.bottom!=null||a?.top!=null||a?.y!=null,m={className:ln.Badge,color:d,"data-d-component":`badge`,"data-d-hoverable":i?``:void 0,"data-d-weight":l,pill:o,size:s,style:{...Lt(a),maxWidth:r,...f==null?{}:{backgroundColor:Mt(Nt(u,f),u)},...p?{height:`auto`}:{}},variant:c,...i==null?{}:{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)}};return(0,mn.jsx)(Et,{className:m.className,color:m.color,"data-d-component":m[`data-d-component`],"data-d-hoverable":m[`data-d-hoverable`],"data-d-weight":m[`data-d-weight`],onMouseEnter:m.onMouseEnter,onMouseLeave:m.onMouseLeave,pill:m.pill,size:m.size,style:m.style,variant:m.variant,children:e??n??null})}function fn(e){switch(e){case`secondary`:return`secondary`;case`success`:return`success`;case`danger`:return`danger`;case`warning`:return`warning`;case`info`:return`info`;case`discovery`:return`discovery`;default:return}}var pn,mn;function hn(){return(hn=e((()=>{Tt(),U(),pn=n(),un(),Pt(),mn=r()})))()}var gn,_n,vn,yn,bn;function xn(){return(xn=e((()=>{gn=`_Bento_w10w8_1`,_n=`_Items_w10w8_23`,vn=`_Tile_w10w8_31`,yn=`_Count_w10w8_105`,bn={Bento:gn,Items:_n,Tile:vn,Count:yn}})))()}function Sn(e){return Tn.Children.toArray(Tn.Children.map(e,e=>(0,Tn.isValidElement)(e)&&e.type===Tn.Fragment?Sn(e.props.children):e))}function Cn(e){let t=(0,Tn.useRef)(null),[n,r]=(0,Tn.useState)(null);return(0,Tn.useLayoutEffect)(()=>{let n=t.current;if(!e||!n)return;let i=n.closest(`[data-d-direction="col"]:not([data-d-component])`);if(!i)return;let a=[];for(let e=n.parentElement;e&&(a.push(e),e!==i);e=e.parentElement);let o=()=>{let e=n.getBoundingClientRect();if(!e.width||!n.offsetWidth)return;let t=e.width/n.offsetWidth,o=n;for(let e of a){let n=getComputedStyle(e);if(n.display===`contents`)continue;let a=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight);if(Math.abs(o.getBoundingClientRect().width/t-a)>1||e!==i&&n.overflowX!==`visible`){r(null);return}o=e}let s=i.getBoundingClientRect(),c=Math.max(0,(e.left-s.left)/t),l=Math.max(0,(s.right-e.right)/t);r(e=>e?.left===c&&e.right===l?e:{left:c,right:l})};o();let s=typeof ResizeObserver>`u`?null:new ResizeObserver(o);return s?.observe(n),a.forEach(e=>s?.observe(e)),()=>s?.disconnect()},[e]),{ref:t,bleed:e?n:null}}function wn({children:e,overflow:t=`hidden`}){let n=Sn(e),r=t===`scroll`,{ref:i,bleed:a}=Cn(r&&n.length>0);if(!n.length)return null;let o=r?n:n.slice(0,3),s=n.length-o.length;return(0,En.jsxs)(`div`,{ref:i,className:bn.Bento,"data-d-component":`bento`,"data-d-full-width":a!==null||void 0,style:a?{"--bento-bleed-left":`${a.left}px`,"--bento-bleed-right":`${a.right}px`}:void 0,children:[(0,En.jsx)(`div`,{className:bn.Items,"data-d-overflow":t,"data-d-count":o.length,role:`region`,"aria-label":`Bento`,tabIndex:r&&n.length>3?0:void 0,children:o.map((e,t)=>(0,En.jsx)(`div`,{className:bn.Tile,children:e},(0,Tn.isValidElement)(e)?e.key??t:t))}),s>0&&(0,En.jsxs)(`span`,{className:bn.Count,children:[(0,En.jsx)(Ut,{"aria-hidden":!0,width:16,height:16}),`+${s}`]})]})}var Tn,En;function Dn(){return(Dn=e((()=>{Tn=n(),Rt(),xn(),En=r()})))()}function On({children:e}){return(0,kn.jsx)(`blockquote`,{className:nt.Blockquote,"data-d-component":`blockquote`,children:ue(e)})}var kn;function An(){return(An=e((()=>{ae(),Ae(),kn=r()})))()}function jn({children:e,content:t}){return(0,In.jsx)(F,{compact:!0,content:t,children:e})}function Mn({children:e,component:t}){return(0,In.jsx)(Rn.Provider,{value:t,children:e})}function Nn({content:e,children:t}){return(0,In.jsx)(Ln.Provider,{value:e,children:(0,In.jsx)(fe,{children:t})})}function Pn({children:e,content:t,disabled:n,theme:r}){let i=(0,Fn.useContext)(Ln),a=(0,Fn.useContext)(V),o=(0,Fn.useContext)(Rn),s=t??(n?void 0:i);return(0,In.jsx)(Ln.Provider,{value:void 0,children:s?(0,In.jsx)(o,{content:s,theme:r??a,children:e}):e})}var Fn,In,Ln,Rn;function zn(){return(zn=e((()=>{P(),U(),Fn=n(),In=r(),Ln=(0,Fn.createContext)(void 0),Rn=(0,Fn.createContext)(jn)})))()}var Bn,Vn;function Hn(){return(Hn=e((()=>{Bn=`_Button_1vmzz_1`,Vn={Button:Bn}})))()}function Un({block:e,children:t,color:n=`primary`,disabled:r,label:i,loading:a,onClick:o,pill:s=!0,size:c=`lg`,submit:l,uniform:u,variant:d=`solid`}){let f=Le(),p=(0,Wn.jsx)(y,{"aria-label":t==null?void 0:i,block:e,color:n,className:Vn.Button,disabled:r,loading:a,onClick:e=>{e.stopPropagation(),f(it.button,Pe(o))},pill:s,size:c,type:l?`submit`:`button`,uniform:u,variant:d,"data-d-component":`button`,"data-d-block":e?``:void 0,children:t??i});return(0,Wn.jsx)(Pn,{disabled:r,children:p})}var Wn;function Gn(){return(Gn=e((()=>{v(),U(),zn(),_t(),Hn(),Wn=r()})))()}var Kn,qn,Jn,Yn,Xn,Zn,Qn,$n;function er(){return(er=e((()=>{Kn=`_Frame_reixg_1`,qn=`_Carousel_reixg_8`,Jn=`_Item_reixg_45`,Yn=`_MediaFrame_reixg_63`,Xn=`_ScrollControl_reixg_83`,Zn=`_ScrollControlLeft_reixg_104`,Qn=`_ScrollControlRight_reixg_109`,$n={Frame:Kn,Carousel:qn,Item:Jn,MediaFrame:Yn,ScrollControl:Xn,ScrollControlLeft:Zn,ScrollControlRight:Qn}})))()}var tr,nr;function rr(){return(rr=e((()=>{tr=`_Edges_cl5yn_1`,nr={Edges:tr}})))()}function ir({viewportRef:e}){let[t,n]=(0,ar.useState)();return(0,ar.useEffect)(()=>{let t=e.current;if(t==null)return;let r=()=>{let e=getComputedStyle(t),r=e.overflowX===`auto`||e.overflowX===`scroll`,i=Math.max(0,t.scrollWidth-t.clientWidth),a=e.direction===`rtl`,o=Math.min(i,Math.max(0,a?-t.scrollLeft:t.scrollLeft)),s=r&&o>sr,c=r&&i-o>sr,l={left:a?c:s,right:a?s:c,x:t.offsetLeft+t.clientLeft,y:t.offsetTop+t.clientTop,width:t.clientWidth,height:t.clientHeight};n(e=>e?.left===l.left&&e.right===l.right&&e.x===l.x&&e.y===l.y&&e.width===l.width&&e.height===l.height?e:l)},i=typeof ResizeObserver>`u`?null:new ResizeObserver(r),a=()=>{i?.disconnect(),i?.observe(t),Array.from(t.children).forEach(e=>i?.observe(e))},o=typeof ResizeObserver>`u`?null:new ResizeObserver(r);o?.observe(t,{box:`border-box`});let s=typeof MutationObserver>`u`?null:new MutationObserver(()=>{a(),r()});s?.observe(t,{attributes:!0,attributeFilter:cr,childList:!0,characterData:!0,subtree:!0});for(let e=t.parentElement;e!=null;e=e.parentElement)s?.observe(e,{attributes:!0,attributeFilter:cr});return a(),r(),t.addEventListener(`scroll`,r,{passive:!0}),t.addEventListener(`load`,r,!0),window.addEventListener(`resize`,r),()=>{i?.disconnect(),o?.disconnect(),s?.disconnect(),t.removeEventListener(`scroll`,r),t.removeEventListener(`load`,r,!0),window.removeEventListener(`resize`,r)}},[e]),(0,or.jsx)(`div`,{"aria-hidden":`true`,className:nr.Edges,"data-d-overflow-left":t?.left?``:void 0,"data-d-overflow-right":t?.right?``:void 0,style:t==null?void 0:{left:t.x,top:t.y,width:t.width,height:t.height}})}var ar,or,sr,cr;function lr(){return(lr=e((()=>{ar=n(),rr(),or=r(),sr=1,cr=[`class`,`style`,`dir`,`data-d-column-sizing`,`data-d-direction`,`data-d-scrollable`]})))()}function ur({activeIndex:e,ariaLabel:t=`Carousel`,children:n,flush:r=!1,gap:i=2,onChange:o,previousLabel:s=`Previous carousel items`,nextLabel:c=`Next carousel items`,showArrows:l=!0,snap:u=`proximity`,snapAlign:d=`start`,visibleItems:f}){let p=(0,W.useId)(),m=(0,W.useRef)(null),h=(0,W.useRef)(void 0),g=(0,W.useRef)(void 0),_=(0,W.useRef)(void 0),v=(0,W.useRef)(void 0),b=(0,W.useRef)(!1),x=(0,W.useRef)(!1),S=Sr(e);x.current=S!==void 0;let C=e!==void 0||o!==void 0,w=C?`start`:d,T=Cr(f),[E,D]=(0,W.useState)(),[ee,O]=(0,W.useState)(0),[k,A]=(0,W.useState)(`ltr`),[j,te]=(0,W.useState)({previous:!1,next:!1}),M=(0,W.useCallback)(()=>{let e=m.current;if(e==null)return;let{textDirection:t,carouselRect:n,alignedInlineStart:r,items:i}=yr(e),a=i.at(0),o=i.at(-1);if(A(t),a==null||o==null){te({previous:!1,next:!1});return}let s=gr(a.getBoundingClientRect(),n,t),c=o.getBoundingClientRect(),l=gr(c,n,t)+c.width;te({previous:s<r-Er,next:l>e.clientWidth+Er})},[]),N=(0,W.useCallback)(()=>{let e=m.current;e!=null&&D(wr(e,T))},[T]),P=(0,W.useCallback)(()=>{let e=m.current;if(!C||e==null||g.current!==void 0)return;let{currentOffset:t,itemOffsets:n}=br(e);g.current=xr(n,t)},[C]),F=(0,W.useCallback)(()=>{let e=m.current;if(e==null)return;let{currentOffset:t,itemOffsets:n}=br(e),r=xr(n,t);if(r===void 0)return;let i=_.current;_.current=void 0,!(i!==void 0&&Math.abs(t-i)<=Or)&&r!==g.current&&(g.current=r,r!==S&&o?.(r))},[S,o]),ne=(0,W.useCallback)(()=>{h.current!==void 0&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=void 0,F()},Dr)},[F]);(0,W.useEffect)(()=>{let e=m.current;if(e==null)return;let t=()=>{N(),M(),P(),x.current&&O(e=>e+1)},n=typeof ResizeObserver>`u`?null:new ResizeObserver(t),r=()=>{hr(e).forEach(e=>n?.observe(e))};t(),e.addEventListener(`scroll`,M,{passive:!0}),n?.observe(e),r();let i=typeof MutationObserver>`u`?null:new MutationObserver(()=>{r(),t()});return i?.observe(e,{childList:!0}),()=>{e.removeEventListener(`scroll`,M),i?.disconnect(),n?.disconnect()}},[r,i,P,N,M]),(0,W.useEffect)(()=>()=>{h.current!==void 0&&(window.clearTimeout(h.current),h.current=void 0)},[]),(0,W.useEffect)(()=>{N(),M()},[n,N,M]),(0,W.useEffect)(()=>{M()},[E,M]);let L=(0,W.useCallback)(e=>{let t=m.current;if(t==null||S===void 0)return;let{currentOffset:n,itemOffsets:r,items:i,maxScrollOffset:a}=br(t),o=r[S],s=i[S];if(o===void 0||s==null){_.current=void 0;return}let c=Math.min(o,a);if(g.current=S,Math.abs(n-c)<=Or){let e=_.current;e!==void 0&&Math.abs(e-c)>Or&&(_.current=void 0)}else _.current=c,s.scrollIntoView({behavior:e&&!Tr()?`smooth`:`instant`,block:`nearest`,inline:`start`})},[S]);(0,W.useEffect)(()=>{let e=b.current&&v.current!==S;v.current=S,b.current=!0,L(e)},[S,ee,L]),(0,W.useEffect)(()=>{E!==void 0&&L(!1)},[E,L]),(0,W.useEffect)(()=>{let e=m.current?.closest(`[dir]`);if(e==null||typeof MutationObserver>`u`)return;let t=new MutationObserver(M);return t.observe(e,{attributes:!0,attributeFilter:[`dir`]}),()=>t.disconnect()},[M]);let ie=e=>{let t=m.current;if(t==null)return;let{textDirection:n,carouselRect:r,alignedInlineStart:i,items:a}=yr(t);(e===`previous`?a.slice().reverse():a).find(t=>{let a=gr(t.getBoundingClientRect(),r,n);return e===`previous`?a<i-Er:a>i+Er})?.scrollIntoView({behavior:Tr()?`auto`:`smooth`,block:`nearest`,inline:`start`})},R=j.previous||j.next,z=a($n.ScrollControl,k===`rtl`?$n.ScrollControlRight:$n.ScrollControlLeft),B=a($n.ScrollControl,k===`rtl`?$n.ScrollControlLeft:$n.ScrollControlRight),ae=k===`rtl`?(0,G.jsx)(re,{height:16,width:16}):(0,G.jsx)(I,{height:16,width:16}),oe=k===`rtl`?(0,G.jsx)(I,{height:16,width:16}):(0,G.jsx)(re,{height:16,width:16});return(0,G.jsxs)(`div`,{className:$n.Frame,children:[(0,G.jsx)(`div`,{"aria-label":t,className:$n.Carousel,"data-d-component":`carousel`,"data-d-flush":r?``:void 0,"data-d-snap":u,id:p,onScroll:C?ne:void 0,ref:m,role:`list`,style:{gap:Ot(i)},tabIndex:R?0:void 0,children:(0,G.jsx)(Ar.Provider,{value:{itemWidth:E,snapAlign:w},children:n})}),(0,G.jsx)(ir,{viewportRef:m}),l&&R?(0,G.jsx)(`div`,{className:z,children:(0,G.jsx)(y,{"aria-controls":p,"aria-disabled":!j.previous,"aria-label":s,color:`secondary`,onClick:()=>{j.previous&&ie(`previous`)},tabIndex:j.previous?0:-1,pill:!0,size:`sm`,uniform:!0,variant:`outline`,children:ae})}):null,l&&R?(0,G.jsx)(`div`,{className:B,children:(0,G.jsx)(y,{"aria-controls":p,"aria-disabled":!j.next,"aria-label":c,color:`secondary`,onClick:()=>{j.next&&ie(`next`)},tabIndex:j.next?0:-1,pill:!0,size:`sm`,uniform:!0,variant:`outline`,children:oe})}):null]})}function dr({aspectRatio:e,background:t,border:n,children:r,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:c,minWidth:l,padding:u,radius:d,variant:f,width:p}){return(0,G.jsx)(pr,{aspectRatio:e,background:t,border:n,component:`carousel-item`,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:c,minWidth:l,padding:u,radius:d,variant:f,width:p,children:r})}function fr({aspectRatio:e,background:t,border:n,children:r,gap:i,height:a,maxHeight:o,maxWidth:s,media:c,minHeight:l,minWidth:u,padding:d,radius:f,size:p=`sm`,variant:m,width:h}){let{itemWidth:g}=(0,W.useContext)(Ar),_=h??(g==null&&u==null?`min-content`:void 0),v=g!=null||_!=null||u!=null,y=ve(c),b=y!=null&&y.props.radius!=null;return(0,G.jsxs)(pr,{aspectRatio:e,background:t,border:n,component:`carousel-media-item`,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:l,minWidth:u,padding:d,radius:f,variant:m,width:_,children:[(0,G.jsx)(He,{align:`stretch`,as:`div`,className:$n.MediaFrame,clip:!0,direction:`row`,height:kr[p],radius:b?void 0:`xl`,width:v?`100%`:`fit-content`,children:c}),(0,G.jsx)(He,{as:`div`,gap:i??1,padding:{x:1},width:`100%`,children:r})]})}function pr({aspectRatio:e,background:t,border:n,children:r,component:i,gap:a,height:o,maxHeight:s,maxWidth:c,minHeight:l,minWidth:u,padding:d,radius:f,variant:p=`none`,width:m}){let{itemWidth:h,snapAlign:g=`start`}=(0,W.useContext)(Ar),_=p===`outline`||p===`elevated`,v=p===`soft`?`surface-elevated-secondary`:p===`elevated`?`surface`:void 0,y=_?{color:`default`,size:1}:void 0,b=m??h,x=u??b;return(0,G.jsx)(He,{aspectRatio:e,as:`div`,background:t??v,border:n??y,className:$n.Item,clip:p!==`none`,component:i,flex:`0 0 auto`,gap:a,height:o,maxHeight:s,maxWidth:c,minHeight:l,minWidth:x,padding:d??(p===`none`?void 0:4),radius:f??(p===`none`?void 0:`xl`),role:`listitem`,snapAlign:g,variant:p,width:b,children:r})}function mr(e){return getComputedStyle(e).direction===`rtl`?`rtl`:`ltr`}function hr(e){return Array.from(e.children).filter(e=>e instanceof HTMLElement)}function gr(e,t,n){return n===`rtl`?t.right-e.right:e.left-t.left}function _r(e){let t=Number.parseFloat(e);return Number.isFinite(t)?t:0}function vr(e){return _r(getComputedStyle(e).scrollPaddingInlineStart)}function yr(e){return{textDirection:mr(e),carouselRect:e.getBoundingClientRect(),alignedInlineStart:vr(e),items:hr(e)}}function br(e){let t=yr(e),n=t.items.at(0);if(n==null)return{...t,currentOffset:0,itemOffsets:[],maxScrollOffset:0};let r=gr(n.getBoundingClientRect(),t.carouselRect,t.textDirection),i=t.items.map(e=>Math.abs(gr(e.getBoundingClientRect(),t.carouselRect,t.textDirection)-r));return{...t,currentOffset:t.alignedInlineStart-r,itemOffsets:i,maxScrollOffset:Math.max(0,e.scrollWidth-e.clientWidth)}}function xr(e,t){let n,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}function Sr(e){return typeof e==`number`&&Number.isInteger(e)?e:void 0}function Cr(e){if(!(e==null||!Number.isFinite(e)||e<1))return Math.floor(e)}function wr(e,t){if(t==null)return;let n=getComputedStyle(e),r=e.clientWidth-_r(n.paddingInlineStart)-_r(n.paddingInlineEnd),i=_r(n.columnGap),a=Number(n.getPropertyValue(`--carousel-continuation-cue-ratio`)),o=hr(e).length>t&&a>0,s=o?r*a:0,c=(r-i*(o?t:t-1)-s)/t;return Math.max(0,Math.round(c*1e3)/1e3)}function Tr(){return typeof window<`u`&&window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches===!0}var W,G,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{U(),v(),ne(),L(),i(),W=n(),De(),er(),Pt(),lr(),G=r(),Er=1,Dr=120,Or=1,kr={lg:`220px`,sm:`140px`},Ar=(0,W.createContext)({})})))()}var Mr,Nr,Pr,Fr;function Ir(){return(Ir=e((()=>{Mr=`_Round_d8sr0_1`,Nr=`_RoundLabel_d8sr0_14`,Pr=`_CheckedLabel_d8sr0_24`,Fr={Round:Mr,RoundLabel:Nr,CheckedLabel:Pr}})))()}function Lr({checked:e,children:t,defaultChecked:n=!1,disabled:r,label:i,lineThrough:o=!1,name:s,onChange:c,required:l,shape:u=`round`,value:d=`on`}){let f=Le(),[p,m]=(0,Rr.useState)(n),h=e!=null,g=h?e:p,_=t??i;return(0,zr.jsx)(Yt,{checked:g,className:u===`round`?Fr.Round:void 0,"data-d-component":`checkbox`,disabled:r,label:_==null?void 0:(0,zr.jsx)(`span`,{children:ue(_)}),labelClassName:a(u===`round`&&Fr.RoundLabel,g&&o&&Fr.CheckedLabel),name:s,onCheckedChange:e=>{h||m(e),f({...it.checkbox,value:e?`checked`:`unchecked`},Pe(c,e))},required:l,value:d})}var Rr,zr;function Br(){return(Br=e((()=>{Jt(),U(),i(),Rr=n(),Ir(),Ae(),_t(),zr=r()})))()}var Vr,Hr,Ur,Wr,Gr;function Kr(){return(Kr=e((()=>{Vr=`_Pill_127va_24`,Hr=`_Favicon_127va_38`,Ur=`_Label_127va_44`,Wr=`_Count_127va_50`,Gr={Pill:Vr,Favicon:Hr,Label:Ur,Count:Wr}})))()}var qr,Jr,Yr,Xr;function Zr(){return(Zr=e((()=>{qr=`_FaviconBox_m8xgh_1`,Jr=`_Image_m8xgh_14`,Yr=`_Frame_m8xgh_23`,Xr={FaviconBox:qr,Image:Jr,Frame:Yr}})))()}function Qr({alt:e,frame:t=!1,inline:n=!1,size:r,url:i}){let a=(0,$r.useContext)(we),o=u(i??``,32),s=r??(n?`1em`:12);return o?(0,ei.jsxs)(He,{as:`div`,className:Xr.FaviconBox,component:`favicon`,height:s,inline:n,role:`presentation`,width:s,children:[a?(0,ei.jsx)(qt,{"aria-hidden":!e||void 0,"aria-label":e,className:Xr.Image,role:e?`img`:void 0,style:{color:`var(--color-text-secondary)`}}):(0,ei.jsx)(T,{alt:e,className:Xr.Image,forceRenderAfterLoadFail:!0,src:o}),t?(0,ei.jsx)(`div`,{"aria-hidden":`true`,className:Xr.Frame}):null]}):null}var $r,ei;function ti(){return(ti=e((()=>{U(),c(),Kt(),te(),$r=n(),De(),Zr(),ei=r()})))()}function ni({color:e,count:t,label:n,onHover:r,url:i}){let a=(0,ri.useContext)(V);return(0,ii.jsxs)(ai,{className:Gr.Pill,color:`secondary`,"data-d-component":`badge`,"data-d-hoverable":r?``:void 0,onMouseEnter:r?()=>r(!0):void 0,onMouseLeave:r?()=>r(!1):void 0,pill:!0,size:`sm`,style:{background:Mt(Nt(a,e),a)},variant:`soft`,children:[i?(0,ii.jsx)(`span`,{className:Gr.Favicon,children:(0,ii.jsx)(Qr,{size:12,url:i})}):null,(0,ii.jsx)(`span`,{className:Gr.Label,children:(0,ii.jsx)(st,{color:`secondary`,inline:!0,maxLines:1,size:`3xs`,truncate:!0,children:n})}),t>1?(0,ii.jsx)(`span`,{className:Gr.Count,children:(0,ii.jsxs)(st,{color:`tertiary`,inline:!0,size:`3xs`,children:[`+`,t-1]})}):null]})}var ri,ii,ai;function oi(){return(oi=e((()=>{U(),Tt(),ri=n(),Kr(),ti(),Pt(),$e(),ii=r(),ai=Et})))()}var si,ci,li,ui;function di(){return(di=e((()=>{si=`_Frame_1as10_1`,ci=`_Overlay_1as10_6`,li=`_Particle_1as10_17`,ui={Frame:si,Overlay:ci,Particle:li}})))()}function fi(e,t){let n=_i[e],r=(t-160)/1e3,i=r<=1?r:1+(r-1)*.6,a=vi[e],o=a&&r>=a.start?r<a.end?a.start:r-(a.end-a.start):r,s=o<=1?o:1+(o-1)/(1+4*(o-1)),c=1.5*(n.left-106+n.vx*s+n.ax*s*s),l=a&&r>=a.start?r<a.end?a.top:a.top+a.gravity*(r-a.end)**2:-38+1.25*(n.top+n.vy*i+n.ay*i*i)+(i>.25&&i<1?42*Math.sin((i-.25)*4.18879):0),u=Math.abs(Math.cos(o*n.flip+n.phase)),d=r<=n.life-.55?1:r>=n.life?0:(n.life-r)/.55;return{width:n.size,height:n.size,background:`var(--${n.color})`,left:`calc(50% + ${c}px)`,top:l,transform:`translate(-50%, -50%) rotate(${n.phase*57.2958+o*n.flip*18}deg) ${e%2==0?`scaleX`:`scaleY`}(${.12+.88*u})`,opacity:(.65+.35*u)*d}}function pi(){let[e,t]=(0,hi.useState)(0);return(0,hi.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);if(e.matches)return;let n=Date.now(),r=window.setInterval(()=>{let e=Date.now()-n;t(e),e>=5200&&window.clearInterval(r)},50),i=()=>{e.matches&&(window.clearInterval(r),t(5200))};return e.addEventListener(`change`,i),()=>{window.clearInterval(r),e.removeEventListener(`change`,i)}},[]),e<160||e>=5200?null:(0,gi.jsx)(`div`,{className:ui.Overlay,"aria-hidden":`true`,"data-celebration-confetti":`true`,children:_i.map((t,n)=>(0,gi.jsx)(`span`,{className:ui.Particle,"data-celebration-piece":`true`,style:fi(n,e)},n))})}function mi({trigger:e,children:t}){return(0,gi.jsxs)(`div`,{className:ui.Frame,"data-d-component":`celebration`,children:[t,e!=null&&(0,gi.jsx)(pi,{},e)]})}var hi,gi,_i,vi;function yi(){return(yi=e((()=>{hi=n(),di(),gi=r(),_i=[{left:83,top:6.7,color:`blue-400`,size:7,vx:-138.7,vy:-234.1,ax:85.9,ay:376.3,flip:5.1,phase:0,life:3.9},{left:129.4,top:7.2,color:`blue-400`,size:8,vx:78.3,vy:-363.2,ax:-60.4,ay:431.9,flip:7.4,phase:.71,life:3.55},{left:123.6,top:27.9,color:`blue-400`,size:7,vx:-175.6,vy:-173,ax:137.5,ay:346.5,flip:6.2,phase:1.42,life:3.65},{left:138,top:38.7,color:`blue-400`,size:6,vx:80.9,vy:-183.2,ax:-38.7,ay:347.2,flip:8.5,phase:2.13,life:3.4},{left:103.3,top:46.4,color:`blue-400`,size:8,vx:27,vy:-301.7,ax:-27.9,ay:422.8,flip:4.8,phase:2.84,life:3.75},{left:100.8,top:52.6,color:`blue-400`,size:7,vx:141.9,vy:-302.1,ax:-100.4,ay:349.2,flip:7.8,phase:3.55,life:3.95},{left:78.1,top:58.5,color:`blue-400`,size:6,vx:29.1,vy:-302.5,ax:-44.6,ay:400.4,flip:9.1,phase:4.26,life:3.35},{left:120.6,top:60.3,color:`blue-400`,size:8,vx:-70.8,vy:-286.8,ax:57.6,ay:412.7,flip:5.5,phase:4.97,life:3.8},{left:92.5,top:66.3,color:`blue-400`,size:6,vx:-139.9,vy:-295,ax:102,ay:371.9,flip:8.8,phase:5.68,life:3.6},{left:93.2,top:-4.3,color:`pink-400`,size:6,vx:79.3,vy:-246.3,ax:-38.9,ay:393.3,flip:6.6,phase:.11,life:3.5},{left:110.1,top:13.1,color:`pink-400`,size:7,vx:-59.8,vy:-270.3,ax:64.8,ay:404.3,flip:7.2,phase:.82,life:3.7},{left:75.3,top:14.5,color:`pink-400`,size:6,vx:143.3,vy:-228,ax:-110.8,ay:377.5,flip:8.1,phase:1.53,life:3.85},{left:88.5,top:25.9,color:`pink-400`,size:7,vx:58.1,vy:-251.3,ax:-50,ay:395.6,flip:5.9,phase:2.24,life:3.45},{left:92.4,top:48.9,color:`pink-400`,size:8,vx:150.1,vy:-330.9,ax:-91.5,ay:406.9,flip:9,phase:2.95,life:4},{left:93.2,top:73.6,color:`pink-400`,size:7,vx:203.1,vy:-122.5,ax:-133.9,ay:171.6,flip:4.7,phase:3.66,life:3.65},{left:115.1,top:-13,color:`yellow-400`,size:6,vx:-187.1,vy:-234.5,ax:130.9,ay:323.5,flip:7.6,phase:4.37,life:3.75},{left:81.8,top:-9.8,color:`yellow-400`,size:6,vx:-39.2,vy:-290.4,ax:-1.6,ay:415.9,flip:6,phase:5.08,life:3.55},{left:142.3,top:-7.4,color:`yellow-400`,size:8,vx:192.5,vy:-338,ax:-123.6,ay:446.3,flip:8.7,phase:5.79,life:3.85},{left:121.9,top:7.2,color:`yellow-400`,size:7,vx:21.9,vy:-203.2,ax:-22.1,ay:268.8,flip:5.3,phase:.21,life:3.95},{left:69.7,top:26,color:`yellow-400`,size:8,vx:-152.3,vy:-231.4,ax:82.9,ay:383.3,flip:9.3,phase:.92,life:3.4},{left:102.4,top:34.1,color:`yellow-400`,size:6,vx:-1.3,vy:-254.7,ax:-.5,ay:378.9,flip:6.8,phase:1.63,life:3.65},{left:80.1,top:47.2,color:`yellow-400`,size:8,vx:-53.7,vy:-248.9,ax:33.9,ay:387.6,flip:7,phase:2.34,life:3.9},{left:71.9,top:54.1,color:`yellow-400`,size:7,vx:-77.3,vy:-272.5,ax:24.3,ay:394.1,flip:8.3,phase:3.05,life:3.5},{left:111.2,top:66.2,color:`yellow-400`,size:7,vx:-23.2,vy:-217.5,ax:15.9,ay:375.6,flip:5.7,phase:3.76,life:4}],vi={0:{start:.58,end:2.45,top:-1,gravity:260},1:{start:.82,end:2.65,top:-9,gravity:245},9:{start:.6,end:2.8,top:-9,gravity:240},12:{start:.48,end:2.55,top:-9,gravity:250},15:{start:.76,end:2.95,top:-9,gravity:235},17:{start:.77,end:3.1,top:-9,gravity:230}}})))()}function bi({children:e=``}){return(0,xi.jsx)(`code`,{className:ut.Code,"data-d-component":`code`,children:typeof e==`string`||typeof e==`number`?(0,xi.jsx)(H,{value:e}):e})}var xi;function Si(){return(Si=e((()=>{at(),Se(),xi=r()})))()}var Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi;function Ii(){return(Ii=e((()=>{Ci=`_Stack_jnc8p_1`,wi=`_Active_jnc8p_16`,Ti=`_Upcoming_jnc8p_17`,Ei=`_Outgoing_jnc8p_18`,Di=`_Front_jnc8p_31`,Oi=`_Back_jnc8p_31`,ki=`_Perspective_jnc8p_43`,Ai=`_Lift_jnc8p_204`,ji=`_Flipper_jnc8p_226`,Mi=`_Hint_jnc8p_256`,Ni=`_Feedback_jnc8p_265`,Pi=`_dismiss_jnc8p_445`,Fi={Stack:Ci,Active:wi,Upcoming:Ti,Outgoing:Ei,Front:Di,Back:Oi,Perspective:ki,"onboarding-tap":`_onboarding-tap_jnc8p_445`,"onboarding-known":`_onboarding-known_jnc8p_445`,"onboarding-missed":`_onboarding-missed_jnc8p_445`,Lift:Ai,"flip-lift":`_flip-lift_jnc8p_445`,Flipper:ji,Hint:Mi,Feedback:Ni,dismiss:Pi,"card-rise":`_card-rise_jnc8p_445`,"card-return":`_card-return_jnc8p_445`,"card-return-opacity":`_card-return-opacity_jnc8p_445`,"card-return-behind":`_card-return-behind_jnc8p_445`,"shuffle-in":`_shuffle-in_jnc8p_445`,"shuffle-out":`_shuffle-out_jnc8p_445`}})))()}function Li({activeKey:e,ariaLabel:t,backFace:n,children:r,disabled:i=!1,dismissDirection:a,faceBackground:o,flipped:s=!1,hint:c,isMobile:l=!1,onboardingStep:u,onInteractionChange:d,onSwipeProgress:f,onSwipeLeft:p,onSwipeRight:h,reducedMotion:g=!1,restoreDirection:_,shuffleKey:v,swipeLeftColor:y=`#ee7c37`,swipeRightColor:b=`#53b559`}){let x=K.Children.toArray(r),S=(0,K.useContext)(V),C=o?.[S],w=(0,K.useRef)(null),T=(0,K.useRef)(null),E=(0,K.useRef)(null),D=(0,K.useRef)(!1),ee=(0,K.useRef)(0),O=(0,K.useRef)(null),k=(0,K.useRef)(v),A=(0,K.useRef)({activeKey:e,flipped:s}),j=(0,K.useRef)(null),te=(0,K.useRef)(null),M=(0,K.useRef)({drag:!1,motion:!1,flip:!1}),[N,P]=(0,K.useState)(null),F=N?.kind===`outgoing`?N:null,[ne,I]=(0,K.useState)(!1),L=m(d),re=m(f),ie=(0,K.useRef)(0),R=Le(),z=(0,K.useCallback)((e,t)=>{if(M.current[e]===t)return;let n=Object.values(M.current).some(Boolean);M.current[e]=t,e===`flip`&&I(t);let r=Object.values(M.current).some(Boolean);n!==r&&T.current&&L.current?.(r)},[L]),B=(0,K.useCallback)(e=>{ie.current!==e&&(ie.current=e,T.current&&re.current?.(e))},[re]),ae=(0,K.useCallback)(()=>{E.current=null,T.current?.removeAttribute(`data-d-dragging`),T.current?.removeAttribute(`data-d-swipe-direction`),T.current?.style.removeProperty(`--swipe-progress`),w.current?.style.removeProperty(`transform`),B(0)},[B]);(0,K.useLayoutEffect)(()=>{let t=O.current,r=k.current;if(k.current=v,O.current={key:e,front:x[0],backFace:n,flipped:s,hint:c},!t||t.key===e)return;j.current!==null&&clearTimeout(j.current);let i=g||Vi(),o=v!==void 0&&r!==void 0&&v!==r&&x.length>1,l=o?`shuffle`:a;if((_||l)&&!i){let e=((_??l)===`left`?-1:1)*(Bi(T.current)?-1:1);_?P({kind:`restoring`,exitSign:e}):l&&P({...t,kind:`outgoing`,direction:l,exitSign:e,x:E.current?.x??0,rotation:E.current?.rotation??0,progress:E.current?.progress??0}),z(`motion`,!0),j.current=setTimeout(()=>{j.current=null,D.current=!1,P(null),z(`motion`,!1)},o||_?Ui:Hi)}else P(null),D.current=!1,z(`motion`,!1);z(`drag`,!1),ae()},[e,n,x,a,s,c,g,_,v,ae,z]),(0,K.useLayoutEffect)(()=>{let t=A.current;A.current={activeKey:e,flipped:s},(t.activeKey!==e||t.flipped!==s||g)&&(te.current!==null&&clearTimeout(te.current),t.activeKey!==e||g||Vi()?z(`flip`,!1):(z(`flip`,!0),te.current=setTimeout(()=>{te.current=null,z(`flip`,!1)},300)))},[e,s,g,z]),(0,K.useEffect)(()=>()=>{j.current!==null&&clearTimeout(j.current),te.current!==null&&clearTimeout(te.current)},[]),(0,K.useEffect)(()=>{let e=w.current;if(!e||i)return;let t=e=>{e.cancelable&&E.current&&e.preventDefault()};return e.addEventListener(`touchmove`,t,{passive:!1}),()=>e.removeEventListener(`touchmove`,t)},[i]);let oe={disabled:i||N!==null||ne,enabled:!!(p||h),interactive:!0,targetRef:w,onDragStart:()=>{D.current||(T.current?.setAttribute(`data-d-dragging`,``),z(`drag`,!0))},onDragMove:e=>{if(D.current)return;E.current=e;let t=Bi(T.current)?e.direction===`left`?`right`:`left`:e.direction;if(T.current?.setAttribute(`data-d-swipe-direction`,t),T.current?.style.setProperty(`--swipe-progress`,String(e.progress)),B((t===`left`?-1:1)*Math.round(e.progress*16)),w.current){let t=g||Vi()?0:e.rotation;w.current.style.transform=`translateX(${e.x}px) rotate(${t}deg)`}},onDragEnd:()=>{ee.current=Date.now()+350,!D.current&&(ae(),z(`drag`,!1))},onSwipe:e=>{if(D.current)return;let t=Bi(T.current)?e!==1:e===1,n=t?p:h;n&&(D.current=!0,j.current=setTimeout(()=>{j.current=null,D.current=!1,ae(),z(`drag`,!1)},Hi),R({target:`swipe_stack`,value:t?`left`:`right`},Pe(n)))}},se=e=>{e.detail===0||Date.now()>=ee.current||(e.preventDefault(),e.stopPropagation())},ce={key:e,front:x[0],backFace:n,flipped:s,hint:c};return(0,q.jsxs)(`div`,{"aria-label":t,className:Fi.Stack,"data-d-component":`swipe-stack`,"data-d-disabled":i?``:void 0,"data-d-dismissing":F&&F.direction!==`shuffle`?``:void 0,"data-d-flipping":ne?``:void 0,"data-d-mobile":l?``:void 0,"data-d-onboarding-step":!i&&!s&&N===null&&!ne?u:void 0,"data-d-reduced-motion":g?``:void 0,"data-d-restoring":N?.kind===`restoring`?``:void 0,"data-d-shuffling":F?.direction===`shuffle`?``:void 0,onClickCapture:se,ref:T,role:t?`group`:void 0,style:{"--swipe-left-color":Mt(Nt(S,y),S),"--swipe-right-color":Mt(Nt(S,b),S),"--swipe-release-progress":F?.progress??0,"--swipe-exit-sign":N?.exitSign},children:[(0,q.jsx)(Ri,{options:oe},e),x.slice(1,3).map((e,t)=>(0,q.jsx)(`div`,{"aria-hidden":!0,className:Fi.Upcoming,"data-d-stack-depth":t+1,inert:!0,style:{"--stack-depth":t+1,backgroundColor:C},children:e},t)),(0,q.jsxs)(`div`,{className:Fi.Active,inert:i||N!==null,ref:w,children:[(0,q.jsx)(zi,{card:ce,backgroundColor:C},e),(0,q.jsx)(`div`,{"aria-hidden":!0,className:Fi.Feedback})]}),F&&(0,q.jsxs)(`div`,{"aria-hidden":!0,className:Fi.Outgoing,"data-d-swipe-direction":F.direction,inert:!0,style:{"--swipe-from-x":`${F.x}px`,"--swipe-from-rotation":`${F.rotation}deg`},children:[(0,q.jsx)(zi,{card:F,backgroundColor:C}),(0,q.jsx)(`div`,{className:Fi.Feedback})]},F.key)]})}function Ri({options:e}){return x(e),null}function zi({card:e,backgroundColor:t}){return(0,q.jsx)(`div`,{className:Fi.Perspective,children:(0,q.jsx)(`div`,{className:Fi.Lift,children:(0,q.jsxs)(`div`,{className:Fi.Flipper,"data-d-flipped":e.flipped?``:void 0,children:[(0,q.jsxs)(`div`,{"aria-hidden":e.flipped,className:Fi.Front,inert:e.flipped,style:{backgroundColor:t},children:[e.front,!e.flipped&&e.hint&&(0,q.jsx)(`div`,{className:Fi.Hint,children:e.hint})]}),e.backFace&&(0,q.jsxs)(`div`,{"aria-hidden":!e.flipped,className:Fi.Back,inert:!e.flipped,style:{backgroundColor:t},children:[e.backFace,e.flipped&&e.hint&&(0,q.jsx)(`div`,{className:Fi.Hint,children:e.hint})]})]})})})}function Bi(e){return e!==null&&window.getComputedStyle(e).direction===`rtl`}function Vi(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches===!0}var K,q,Hi,Ui;function Wi(){return(Wi=e((()=>{U(),A(),h(),K=n(),Ii(),Pt(),q=r(),Hi=240,Ui=300})))()}function Gi({children:e,...t}){let[n,r,...i]=Ki.Children.toArray(e);if(n===void 0||r===void 0)throw Error(`DIL flashcard-flip requires question and answer children.`);return(0,Ki.createElement)(Li,{...t,backFace:r,faceBackground:qi},[n,...i])}var Ki,qi;function Ji(){return(Ji=e((()=>{Ki=n(),Wi(),qi={light:`#fff`,dark:`#212121`}})))()}function Yi({onSubmit:e,...t}){return(0,Xi.jsx)(He,{as:`form`,component:`form`,hostProps:{onSubmit(t){t.preventDefault(),t.stopPropagation(),e?.()}},layout:t})}var Xi;function Zi(){return(Zi=e((()=>{De(),Xi=r()})))()}function Qi(e){let t=$i(e);return String.raw`
(() => {
  const PROTOCOL = "dil-html-view";
  const { channelId, token } = ${t};
  let messenger = null;
  const pendingRequests = Object.create(null);
  const queuedCommands = [];
  const queuedEvents = [];

  const randomId = () =>
    globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

  const post = (message) => {
    globalThis.parent.postMessage(
      {
        __dilHtmlView: PROTOCOL,
        channelId,
        token,
        ...message,
      },
      "*",
    );
  };

  const isMessageForThisView = (event) => {
    const { data } = event;
    return Boolean(
      data &&
        data.__dilHtmlView === PROTOCOL &&
        data.channelId === channelId &&
        data.token === token,
    );
  };

  const requestCommand = (type, data) => {
    const id = randomId();

    return new Promise((resolve, reject) => {
      pendingRequests[id] = {
        reject,
        resolve,
      };

      post({
        data,
        id,
        kind: "command",
        type,
      });
    });
  };

  const respondToCommand = (id, result, error) => {
    post({
      error,
      id,
      kind: "response",
      result,
    });
  };

  const runCommand = (message) => {
    if (!messenger) {
      queuedCommands.push(message);
      return;
    }

    const handler = messenger._commands[message.type];
    if (typeof handler !== "function") {
      respondToCommand(message.id, undefined, {
        message: 'Unknown DILMessenger command "' + message.type + '"',
      });
      return;
    }

    Promise.resolve()
      .then(() => handler(message.data))
      .then(
        (result) => {
          respondToCommand(message.id, result, undefined);
        },
        (error) => {
          respondToCommand(message.id, undefined, {
            message: error && error.message ? String(error.message) : String(error),
          });
        },
      );
  };

  const emitEvent = (message) => {
    if (!messenger) {
      queuedEvents.push(message);
      return;
    }

    const handlers = messenger._eventHandlers[message.type] ?? [];
    handlers.slice().forEach((handler) => handler(message.data));
  };

  const handleResponse = (message) => {
    const pending = pendingRequests[message.id];
    if (!pending) {
      return;
    }

    delete pendingRequests[message.id];

    if (message.error) {
      pending.reject(new Error(message.error.message || "DIL command failed"));
      return;
    }

    pending.resolve(message.result);
  };

  const handleMessage = (event) => {
    if (!isMessageForThisView(event)) {
      return;
    }

    const { data: message } = event;
    switch (message.kind) {
      case "command":
        runCommand(message);
        return;
      case "event":
        emitEvent(message);
        return;
      case "response":
        handleResponse(message);
        return;
      default:
        return;
    }
  };

  const createCommandsProxy = () =>
    new Proxy(Object.create(null), {
      get(_target, property) {
        if (typeof property !== "string" || property === "then") {
          return undefined;
        }

        return (data) => requestCommand(property, data);
      },
    });

  class DILMessenger {
    constructor(options) {
      this._commands = options?.commands ?? {};
      this._eventHandlers = Object.create(null);
      this.commands = createCommandsProxy();
      messenger = this;

      while (queuedCommands.length > 0) {
        runCommand(queuedCommands.shift());
      }

      Promise.resolve().then(() => {
        while (queuedEvents.length > 0) {
          emitEvent(queuedEvents.shift());
        }
      });
    }

    emit(type, data) {
      post({
        data,
        kind: "event",
        type,
      });
    }

    on(type, handler) {
      const handlers = this._eventHandlers[type] ?? [];
      handlers.push(handler);
      this._eventHandlers[type] = handlers;

      return () => {
        const index = handlers.indexOf(handler);
        if (index !== -1) {
          handlers.splice(index, 1);
        }
      };
    }
  }

  globalThis.addEventListener("message", handleMessage);
  globalThis.DILMessenger = DILMessenger;
  post({ kind: "bridge-ready" });
})();
`}function $i(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var ea,ta,na;function ra(){return(ra=e((()=>{ea=`_Root_12enh_1`,ta=`_Frame_12enh_8`,na={Root:ea,Frame:ta}})))()}function ia({height:e=360,html:t,messenger:n,title:r=`DIL HTML view`,width:i=`100%`,...a}){let o=(0,ua.useRef)(null),s=(0,ua.useRef)(null),c=(0,ua.useRef)(null);c.current===null&&(c.current=ca());let l=n?.channelId??`html-view`,u=c.current,[d,f]=(0,ua.useState)(void 0),[p,m]=(0,ua.useState)(void 0),h=sa({channelId:l,html:t,token:u});return(0,ua.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t={channelId:l,iframe:e,messenger:n,srcDoc:h,token:u},r=s.current;return r?.matches(t)?r.updateOptions(t):(r=new pa(t),s.current=r),r.listen(),f(e=>e===h?e:h),r.teardown},[l,n,h,u]),(0,da.jsx)(He,{as:`div`,className:na.Root,component:`html-view`,height:e,layout:a,width:i,children:(0,da.jsx)(`iframe`,{ref:o,className:na.Frame,"data-loaded":d&&p===d?``:void 0,onLoad:()=>m(d),sandbox:`allow-scripts`,srcDoc:d,title:r})})}function aa(e,t){if(!e.id)return;let n=t.get(e.id);n&&(t.delete(e.id),e.error?n.reject(Error(e.error.message??`DIL command failed`)):n.resolve(e.result))}async function oa(e,t,n){if(!e.id||typeof e.type!=`string`)return;let r=t?.commands[e.type];if(!r)n({error:{message:`Unknown DILMessenger command "${e.type}"`},id:e.id,kind:`response`});else try{let t=await r(e.data);n({id:e.id,kind:`response`,result:t})}catch(t){n({error:{message:t instanceof Error?t.message:String(t)},id:e.id,kind:`response`})}}function sa({channelId:e,html:t,token:n}){return`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Security-Policy" content="${la(fa)}" />
    <script>
      ${Qi({channelId:e,token:n})}
    <\/script>
  </head>
  <body>
${t}
  </body>
</html>`}function ca(){return globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2)}function la(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}var ua,da,fa,pa;function ma(){return(ma=e((()=>{ua=n(),De(),ra(),da=r(),fa=[`default-src 'none'`,`base-uri 'none'`,`object-src 'none'`,`form-action 'none'`,`frame-src 'none'`,`script-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com https://cdn.tailwindcss.com`,`style-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://fonts.googleapis.com`,`img-src data: blob: https:`,`font-src data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com`,`connect-src https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com`,`media-src data: blob: https:`,`worker-src blob:`].join(`; `),pa=class{options;isChildReady=!1;isListening=!1;pendingRequests=new Map;queuedMessages=[];teardownTimer;unregisterTransport;constructor(e){this.options=e}matches(e){return this.options.channelId===e.channelId&&this.options.iframe===e.iframe&&this.options.srcDoc===e.srcDoc&&this.options.token===e.token}updateOptions(e){this.options=e}listen(){this.teardownTimer&&=(clearTimeout(this.teardownTimer),void 0),!this.isListening&&(window.addEventListener(`message`,this.handleMessage),this.unregisterTransport=this.options.messenger?.registerTransport({command:this.sendCommand,event:this.emitEvent}),this.isListening=!0)}teardown=()=>{this.isListening&&(window.removeEventListener(`message`,this.handleMessage),this.unregisterTransport?.(),this.unregisterTransport=void 0,this.isListening=!1,this.teardownTimer=setTimeout(()=>{this.teardownTimer=void 0,this.queuedMessages.length=0,this.rejectPending(Error(`DIL html-view was unmounted`))},0))};sendToFrame=e=>this.isChildReady?this.postToFrame(e):(this.queuedMessages.push(e),!0);postToFrame(e){let t=this.options.iframe.contentWindow;return t?(t.postMessage({__dilHtmlView:`dil-html-view`,channelId:this.options.channelId,token:this.options.token,...e},`*`),!0):!1}sendCommand=(e,t)=>{let n=ca();return new Promise((r,i)=>{this.pendingRequests.set(n,{reject:i,resolve:r}),this.sendToFrame({data:t,id:n,kind:`command`,type:e})||(this.pendingRequests.delete(n),i(Error(`DIL html-view is not ready`)))})};emitEvent=(e,t)=>{this.sendToFrame({data:t,kind:`event`,type:e})};handleMessage=e=>{if(e.source!==this.options.iframe.contentWindow)return;let t=e.data;if(t.__dilHtmlView===`dil-html-view`&&t.channelId===this.options.channelId&&t.token===this.options.token)switch(t.kind){case`response`:this.markChildReady(),aa(t,this.pendingRequests);return;case`command`:this.markChildReady(),oa(t,this.options.messenger,this.sendToFrame);return;case`event`:this.markChildReady(),typeof t.type==`string`&&this.options.messenger?.onEvent(t.type,t.data);return;case`bridge-ready`:this.markChildReady();return;case void 0:return;default:throw Error(`Unknown DIL html-view message kind "${String(t.kind)}"`)}};markChildReady(){this.isChildReady||(this.isChildReady=!0,this.flushQueuedMessages())}flushQueuedMessages(){for(;this.queuedMessages.length>0;){let e=this.queuedMessages.shift();if(!e)return;if(!this.postToFrame(e)){this.queuedMessages.unshift(e);return}}}rejectPending(e){for(let t of this.pendingRequests.values())t.reject(e);this.pendingRequests.clear()}}})))()}var ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,J;function Oa(){return(Oa=e((()=>{ha=`_Image_sv61e_1`,ga=`_OverlayBox_sv61e_11`,_a=`_LoadingFrame_sv61e_15`,va=`_LoadingImage_sv61e_28`,ya=`_HoverContent_sv61e_34`,ba=`_LoadingSurface_sv61e_58`,xa=`_Crop_sv61e_76`,Sa=`_Fallback_sv61e_80`,Ca=`_Overlay_sv61e_11`,wa=`_ActionOverlayContainer_sv61e_91`,Ta=`_ActionOverlay_sv61e_91`,Ea=`_Frame_sv61e_109`,Da=`_SecondaryAction_sv61e_140`,J={Image:ha,OverlayBox:ga,LoadingFrame:_a,LoadingImage:va,HoverContent:ya,LoadingSurface:ba,Crop:xa,Fallback:Sa,"image-fallback-fade-in":`_image-fallback-fade-in_sv61e_209`,Overlay:Ca,ActionOverlayContainer:wa,ActionOverlay:Ta,Frame:Ea,SecondaryAction:Da}})))()}function ka(e,t,n=`contain`){if(!e)return;let r=e.aspect_ratio,i=e.placement,a=t??r;if(!Number.isFinite(r)||r<=0||!Number.isFinite(a)||a<=0||!i||!Number.isFinite(i.left)||!Number.isFinite(i.top)||!Number.isFinite(i.width)||i.width<=0||!Number.isFinite(i.height)||i.height<=0)return;let o=n===`cover`?Math.max:Math.min,s=100*o(1,r/a),c=100*o(1,a/r);return{viewport:{left:(100-s)/2,top:(100-c)/2,width:s,height:c},image:i}}var Aa,ja,Ma,Na,Pa;function Fa(){return(Fa=e((()=>{Aa=`_LoadingBlock_1ky5y_1`,ja=`_WithContent_1ky5y_10`,Ma=`_Background_1ky5y_14`,Na=`_ReducedMotion_1ky5y_30`,Pa={LoadingBlock:Aa,"loading-block-pulse":`_loading-block-pulse_1ky5y_52`,WithContent:ja,Background:Ma,ReducedMotion:Na}})))()}function Ia({background:e=`surface-tertiary`,children:t,duration:n=1500,label:r,reducedMotion:i=!1,...o}){return(0,La.jsx)(He,{as:`div`,ariaLabel:r,className:a(Pa.LoadingBlock,t!=null&&Pa.WithContent,i&&Pa.ReducedMotion),component:`loading-block`,layout:{...o,background:t==null?e:void 0,children:t==null?t:(0,La.jsxs)(La.Fragment,{children:[(0,La.jsx)(He,{as:`div`,ariaHidden:!0,className:Pa.Background,layout:{background:e}}),t]})},role:r?`status`:void 0,style:l({"loading-block-duration":d(n)})})}var La;function Ra(){return(Ra=e((()=>{c(),i(),De(),Fa(),La=r()})))()}var za,Ba,Va,Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{za=`_Pressable_1u142_1`,Ba=`_PreserveOpacity_1u142_21`,Va=`_InsetFocus_1u142_27`,Ha=`_Ghost_1u142_32`,Ua=`_RevealOnHover_1u142_57`,Wa={Pressable:za,PreserveOpacity:Ba,InsetFocus:Va,Ghost:Ha,RevealOnHover:Ua}})))()}function Ka({ariaLabel:e,ariaPressed:t,capture:n=!1,disabled:r,dimWhenDisabled:i,focusStyle:o,gap:s,hoverBackground:c,inline:u=!1,insetBorder:d=!1,variant:f,onClick:p,onHover:m,revealOnHover:h=!1,tooltip:g,..._}){let v=Le(),y=(0,qa.useContext)(Ya),b=(0,qa.useContext)(V),x=_.theme??b;if(y){let e=(0,Ja.jsx)(He,{as:`span`,component:`pressable`,gap:u?s??0:s,inline:u,layout:_,role:void 0,style:u?{display:`inline`}:void 0});return u?(0,Ja.jsx)(Ye.Provider,{value:!0,children:e}):e}let S=()=>v(it.pressable,Pe(p)),C=e=>{e.stopPropagation(),n&&e.preventDefault(),!r&&S()},w=e=>{e.key!==`Enter`&&(e.key!==` `||_.role===`link`)||e.target!==e.currentTarget&&!n||r&&!n||(e.preventDefault(),e.stopPropagation(),r||S())},T=n?{..._,children:(0,Ja.jsx)(Ya.Provider,{value:!0,children:_.children})}:_,E=_.role===`link`,D=u||E,ee=(0,Ja.jsx)(D?Za:Xa,{ariaLabel:e,"aria-pressed":t,className:a(Wa.Pressable,h&&Wa.RevealOnHover,f===`ghost`&&Wa.Ghost,o===`inset`&&Wa.InsetFocus,i===!1&&Wa.PreserveOpacity),disabled:r,gap:u?s??0:s,inline:u,layout:T,onClick:n?void 0:C,onClickCapture:n?C:void 0,onKeyDown:D&&!n?w:void 0,onKeyDownCapture:D&&n?w:void 0,onMouseEnter:r?void 0:()=>m?.(!0),onMouseLeave:()=>m?.(!1),style:{...l({"pressable-hover-background":Mt(Nt(x,c),x)}),...u?{display:`inline`}:{},...d?{boxShadow:`inset 0 0 0 1px currentColor`}:{}},role:_.role??(u?`button`:void 0),tabIndex:D&&!r?0:void 0,type:`button`}),O=(0,Ja.jsx)(Pn,{content:g,disabled:r,theme:_.theme,children:ee});return u?(0,Ja.jsx)(Ye.Provider,{value:!0,children:O}):O}var qa,Ja,Ya,Xa,Za;function Qa(){return(Qa=e((()=>{U(),i(),c(),qa=n(),zn(),De(),ze(),Pt(),Ga(),_t(),Ja=r(),Ya=(0,qa.createContext)(!1),Xa=(0,qa.forwardRef)(function({layout:e,...t},n){return(0,Ja.jsx)(He,{ariaLabel:t.ariaLabel,as:`button`,boxRef:n,className:t.className,component:`pressable`,gap:t.gap,hostProps:t,inline:t.inline,layout:e,style:t.style})}),Za=(0,qa.forwardRef)(function({layout:e,...t},n){return(0,Ja.jsx)(He,{ariaLabel:t.ariaLabel,as:`span`,boxRef:n,className:t.className,component:`pressable`,gap:t.gap,hostProps:t,inline:t.inline,layout:e,role:t.role,style:t.style})})})))()}function $a({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:i,children:a,containOutsideAspectRatio:o,contentCrop:s,contentCropFit:c,fallback:l,fit:u,frame:d,height:f,hideOnFailure:p=!1,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,onImageError:y,onImageLoad:b,imageRef:x,imageFrameRef:S,imageFrameComponent:C,imageContentComponent:w,loadedOverlay:E,position:D,radius:ee,secondaryAction:O,size:k,src:A,width:j}){let te=(0,to.useContext)(wt),M=(0,to.useContext)(V),N=(0,to.useContext)(Ya),[P]=(0,to.useState)(te),[F,ne]=(0,to.useState)(null),[I,L]=(0,to.useState)(),re=(0,to.useRef)(void 0),ie=E!=null,R=I?.src===A?I?.aspectRatio:void 0,z=o&&R!==void 0&&(R<=o.min||R>=o.max)?`contain`:u,B=m&&C&&w,ae=B?C:`div`,oe=B?w:null,se=(0,to.useRef)(null),[ce,le]=(0,to.useState)(),H=ka(s,ce,c),ue=H!=null,de=(0,to.useCallback)(e=>{if(se.current=e,typeof S==`function`)return S(e);S&&(S.current=e)},[S]);(0,to.useLayoutEffect)(()=>{let e=se.current;if(!ue||!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&le(t.width/t.height)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[ue,A,F]);let fe=f??k,pe=j??k,me={...At(ee),aspectRatio:Dt(n)??(ue?s?.aspect_ratio:void 0),height:fe,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,width:pe},he=Bt(Mt(Nt(M,r),M)),ge={...me,...he,overflow:`hidden`};if((0,to.useEffect)(()=>{ne(null)},[A]),(0,to.useEffect)(()=>{(o||O||e||ie)&&re.current?.src===A&&L(re.current)},[e,o,O,ie,A]),F===A&&l!=null)return(0,Y.jsxs)(`div`,{ref:de,className:`${J.Image} ${J.OverlayBox} ${J.Fallback}`,"data-d-component":`image`,"data-d-image-fallback":``,"data-d-frame":d?``:void 0,style:ge,children:[l,a==null?null:(0,Y.jsx)(`div`,{className:J.Overlay,children:a})]});if(F===A&&p)return null;let _e=A?(0,Y.jsx)(T,{ref:x,alt:t,className:`${J.Image} ${J.LoadingImage}`,forceRenderAfterLoadFail:!p&&l==null,onError:e=>{ne(A),y?.(e)},onLoad:t=>{ne(null);let n=t.currentTarget;if(n.getAttribute(`src`)===A&&Number.isFinite(n.naturalWidth)&&Number.isFinite(n.naturalHeight)&&n.naturalWidth>0&&n.naturalHeight>0){let t={aspectRatio:n.naturalWidth/n.naturalHeight,src:A};re.current=t,(o||O||e||ie)&&L(t)}b?.(t)},referrerPolicy:`no-referrer`,src:A,style:{...me,mixBlendMode:i,objectFit:z,objectPosition:D,...B&&!H?{width:pe==null?void 0:`100%`,height:fe==null?void 0:`100%`,maxWidth:`none`,maxHeight:`none`,minWidth:0,minHeight:0}:{},...H?{position:`absolute`,left:`${H.image.left}%`,top:`${H.image.top}%`,width:`${H.image.width}%`,height:`${H.image.height}%`,aspectRatio:void 0,maxWidth:`none`,maxHeight:`none`,minWidth:0,minHeight:0,objectFit:`fill`}:{}}},A):null,ve=oe?(0,Y.jsx)(oe,{className:J.HoverContent,style:i?he:void 0,children:_e}):_e,ye=!N&&I!=null&&I.src===A&&e!=null;return(0,Y.jsxs)(ae,{ref:de,className:`${J.Image} ${J.OverlayBox} ${J.LoadingFrame}${e?` group/search-image`:``}`,"data-d-component":`image`,"data-d-stream-media":P?``:void 0,"data-d-frame":d?``:void 0,"data-d-hover-zoom":m&&!B?``:void 0,"data-d-host-hover":B?``:void 0,style:ge,children:[H?(0,Y.jsx)(`div`,{className:J.Crop,"data-d-image-crop":``,style:{left:`${H.viewport.left}%`,top:`${H.viewport.top}%`,width:`${H.viewport.width}%`,height:`${H.viewport.height}%`},children:ve}):ve,(0,Y.jsx)(`div`,{className:J.LoadingSurface,"data-d-image-loading":``,children:(0,Y.jsx)(Ia,{background:no,duration:1e3,height:`100%`,width:`100%`})}),a==null?null:(0,Y.jsx)(`div`,{className:J.Overlay,children:a}),O&&I?.src===A?(0,Y.jsx)(`div`,{className:J.SecondaryAction,children:(0,Y.jsx)(Ka,{ariaLabel:O.label,onClick:O.onClick,children:O.icon?(0,Y.jsx)(Me,{inline:!0,name:O.icon,size:`sm`}):O.label})}):null,ye?(0,Y.jsx)(eo,{children:e}):null,d?(0,Y.jsx)(`div`,{"aria-hidden":`true`,className:J.Frame}):null,I?.src===A&&F!==A&&ie?E:null]})}function eo({children:e}){return(0,Y.jsx)(`div`,{className:J.ActionOverlayContainer,children:(0,Y.jsx)(`div`,{className:J.ActionOverlay,children:e})})}var to,Y,no;function ro(){return(ro=e((()=>{te(),zt(),U(),to=n(),Oa(),me(),Ra(),Qa(),Pt(),Y=r(),no=`light-dark(var(--dil-image-loading-light-bg, var(--theme-user-msg-bg, var(--color-background-info-surface))), var(--theme-user-msg-bg, var(--color-background-info-surface)))`})))()}function io(e){let t=e.trim();if(!t)return null;if(!/^[a-z][a-z\d+.-]*:/i.test(t)){if(t.startsWith(`//`)||!t.includes(`.`))return null;t=`https://${t}`}try{let e=new URL(t);if(e.protocol!==`http:`&&e.protocol!==`https:`)return null}catch{return null}return t}function ao({children:e,href:t,onClick:n,onVisible:r,onVisibleWhen:i,onVisibleKey:a,title:o,anchorComponent:s}){let c=s??`a`,l=Le(),u=io(t),d=bt({onVisible:r,onVisibleKey:a,onVisibleWhen:i!==!1&&u!==null},c);if(!u)return(0,so.jsx)(fe,{children:e});let f=oo.Children.toArray(e),p=f.some(e=>typeof e!=`string`||e.trim())?f:[o?.trim()||new URL(u).hostname],m=p.pop(),h=p.length===0&&typeof m==`string`&&!/\s/u.test(m.trim());if(typeof m==`string`){let e=m.trimEnd();p.push(e),m=m.slice(e.length)}return(0,so.jsx)(c,{ref:d,className:h?ft.NoWrap:void 0,"data-d-component":`link`,href:u,onClick:n?e=>{e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),e.stopPropagation(),l(it.link,Pe(n)))}:void 0,rel:`noopener noreferrer`,target:`_blank`,title:o,children:(0,so.jsxs)(st,{color:`inherit`,inline:!0,underline:`dotted`,children:[p,(0,so.jsxs)(`span`,{className:ft.Tail,children:[ue(m),(0,so.jsx)(`span`,{"aria-hidden":`true`,children:(0,so.jsx)(Me,{inline:!0,name:`arrow-up-right-link`})})]})]})})}var oo,so;function co(){return(co=e((()=>{oo=n(),U(),ce(),me(),Ae(),$e(),Qe(),_t(),so=r()})))()}function lo({children:e,connector:t=`none`,gap:n,items:r,marker:i=`bullet`,maxMarkerSize:a,start:o}){let s=r??[],c=mo(a,xo),l={maxMarkerSize:c,reserveMarkerLane:c!==xo},u=t===`none`&&c===xo&&go(i)?i:null,d=i===`number`?`ol`:`ul`,f=i===`number`&&o!=null&&Number.isFinite(o)?o:void 0,p=c!==xo||ho(t,i??`none`)?4:0,m=Ot(n??p);return(0,bo.jsx)(So.Provider,{value:t,children:(0,bo.jsx)(Co.Provider,{value:{inheritedMarker:i,nativeMarker:u},children:(0,bo.jsx)(To.Provider,{value:l,children:(0,bo.jsxs)(d,{className:mt.List,"data-d-component":`list`,"data-d-connector":t===`solid`?t:void 0,"data-d-marker":typeof i==`string`?i:`rich`,"data-d-marker-layout":u==null?`custom`:`native`,start:f,style:{"--d-list-row-gap":m.includes(`(`)?m:m.split(/\s+/)[0],counterReset:f==null?void 0:`d-list-item `+(f-1),gap:m},children:[s.map((e,t)=>(0,bo.jsx)(uo,{disabled:typeof e==`string`?void 0:e.disabled,label:typeof e==`string`?e:e.label,description:typeof e==`string`?void 0:e.description,children:typeof e==`string`?e:e.children},t)),_o(e).map((e,t)=>vo(e)?e:(0,bo.jsx)(uo,{children:e},t))]})})})})}function uo({children:e,description:t,disabled:n,label:r,marker:i,markerSize:a}){let o=(0,yo.useContext)(So),s=(0,yo.useContext)(Co),c=i??s.inheritedMarker??`none`,l=i==null&&c===s.nativeMarker,u=(0,yo.useContext)(To),d=po(mo(a,u.maxMarkerSize),u.maxMarkerSize),f=typeof c!=`string`,p=f?`rich`:c,m=ho(o,c),h=(0,yo.useContext)(xt),g=m&&!h;return(0,bo.jsxs)(`li`,{className:mt.Item,"data-d-component":`list-item`,"data-d-connector":o===`solid`?o:void 0,"data-d-marker":o===`solid`?p:void 0,"data-d-marker-layout":l?`native`:`custom`,"data-d-rich-marker-size":f?d:void 0,"data-d-rich-marker-lane":f&&u.reserveMarkerLane?u.maxMarkerSize:void 0,children:[l?null:(0,bo.jsx)(fo,{marker:c,markerSize:d,maxMarkerSize:u.maxMarkerSize,reserveMarkerLane:u.reserveMarkerLane}),(0,bo.jsxs)(`div`,{className:mt.Content,children:[(0,bo.jsx)(`div`,{className:mt.Label,"data-d-disabled":n?``:void 0,"data-d-list-item-content":g?`connected`:m?void 0:``,children:ue(e??r,g)}),t?(0,bo.jsx)(`div`,{className:mt.Description,children:ue(t)}):null]})]})}function fo({marker:e,markerSize:t,maxMarkerSize:n,reserveMarkerLane:r}){return e===`none`?null:typeof e==`string`?(0,bo.jsx)(`span`,{"aria-hidden":`true`,className:mt.Marker,"data-d-marker":e}):(0,bo.jsx)(`span`,{"aria-hidden":`true`,inert:!0,className:mt.Marker,"data-d-marker":`rich`,"data-d-max-marker-size":r?n:void 0,children:(0,bo.jsx)(`span`,{className:mt.RichMarker,"data-d-marker-size":t,children:e})})}function po(e,t){return wo[Math.min(wo.indexOf(e),wo.indexOf(t))]}function mo(e,t){return wo.find(t=>t===e)??t}function ho(e,t){return e===`solid`&&(go(t)||typeof t!=`string`)}function go(e){return e===`bullet`||e===`number`}function _o(e){let t=[],n=e=>{yo.Children.forEach(e,e=>{(0,yo.isValidElement)(e)&&e.type===yo.Fragment?n(e.props.children):t.push(e)})};return n(e),t.map((e,t)=>!(0,yo.isValidElement)(e)||e.key!=null?e:(0,yo.cloneElement)(e,{key:t}))}function vo(e){return ve(e)?.type===uo}var yo,bo,xo,So,Co,wo,To;function Eo(){return(Eo=e((()=>{yo=n(),U(),ot(),Oe(),Pt(),Ae(),bo=r(),xo=`md`,So=(0,yo.createContext)(`none`),Co=(0,yo.createContext)({inheritedMarker:`none`,nativeMarker:null}),wo=[`md`,`lg`,`xl`],To=(0,yo.createContext)({maxMarkerSize:xo,reserveMarkerLane:!1})})))()}var Do,Oo;function ko(){return(ko=e((()=>{Do=`_Loading_yokv2_1`,Oo={Loading:Do}})))()}function Ao({label:e=`Loading`,size:t=`md`}){return(0,jo.jsx)(`div`,{"aria-label":e,className:Oo.Loading,"data-d-component":`loading`,role:`status`,children:(0,jo.jsx)(_,{size:Mo[t]})})}var jo,Mo;function No(){return(No=e((()=>{g(),ko(),jo=r(),Mo={sm:16,md:20,lg:24}})))()}var Po,Fo,Io;function Lo(){return(Lo=e((()=>{Po=`_LoadingIndicator_3a2ma_1`,Fo=`_rotate_3a2ma_14`,Io={LoadingIndicator:Po,rotate:Fo}})))()}function Ro({color:e=`prose`,size:t=`md`}){let n=(0,zo.useContext)(V);return(0,Bo.jsx)(Gt,{className:a(Io.LoadingIndicator,{"text-xs":t===`xs`,"text-sm":t===`sm`,"text-base":t===`md`,"text-lg":t===`lg`,"text-xl":t===`xl`,"text-2xl":t===`2xl`,"text-3xl":t===`3xl`}),"data-d-component":`loading-indicator`,name:`empty-circle`,style:{color:kt(Nt(n,e))}})}var zo,Bo;function Vo(){return(Vo=e((()=>{Wt(),i(),U(),zo=n(),Pt(),Lo(),Bo=r()})))()}function Ho({advanceRate:e=0,animationEndTime:t=0,animationStartTime:n=0,currentTime:r=0,data:i,fit:a=`contain`,loop:o=!1,player:s}){let c=(0,Uo.useRef)(null),[l,u]=(0,Uo.useState)();(0,Uo.useEffect)(()=>{let e=c.current;if(!e)return;let t=!0,n,r=e=>{t&&(console.warn(`Failed to load Lottie animation`,e),t=!1,n?.destroy(),u(void 0))};try{s.setIDPrefix(`dil-`);let a={autoloadSegments:!1,autoplay:!1,container:e,loop:!1,renderer:`svg`,rendererSettings:{preserveAspectRatio:`xMidYMid meet`,runExpressions:!1}};n=s.loadAnimation(a);let o=n;o.addEventListener(`DOMLoaded`,()=>{t&&u(o)}),o.addEventListener(`data_failed`,r),o.addEventListener(`error`,r),o.setupAnimation(structuredClone(i))}catch(e){r(e)}return()=>{t&&(t=!1,n?.destroy())}},[i,s]);let d=l?.frameRate??0,f=typeof i?.ip==`number`?i.ip:0,p=typeof i?.op==`number`&&d>0?Math.max(0,(i.op-f)/d):0,m=Math.max(0,Math.min(n,p)),h=Math.max(m,Math.min(t>0?t:p,p)),g=h-m;(0,Uo.useEffect)(()=>{l?.setLoop(o)},[l,o]),(0,Uo.useEffect)(()=>{p>0&&l?.setSegment(f+(g>0?m*d:0),f+(g>0?h:p)*d)},[l,p,h,d,f,m,g]),(0,Uo.useEffect)(()=>{if(!l||p<=0)return;let e=g<=0?Math.max(0,Math.min(m*d,p*d-1)):l.loop?(r%g+g)%g*d:Math.max(0,Math.min(r*d,g*d-1));l.goToAndStop(e,!0)},[l,r,p,d,m,g]),(0,Uo.useEffect)(()=>{l&&(e===0||g*d<=1?l.pause():(l.setSpeed(e),l.play()))},[e,l,r,d,o,m,g]),(0,Uo.useEffect)(()=>{let e=c.current?.querySelector(`svg`);e&&e.setAttribute(`preserveAspectRatio`,a===`fill`?`none`:a===`cover`?`xMidYMid slice`:`xMidYMid meet`)},[l,a]);let _=typeof i?.w==`number`&&i.w>0?i.w:void 0,v=typeof i?.h==`number`&&i.h>0?i.h:void 0;return(0,Wo.jsx)(`div`,{"aria-hidden":`true`,ref:c,style:a===`none`&&_!=null&&v!=null?{height:v,left:`50%`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,width:_}:{height:`100%`,width:`100%`}})}var Uo,Wo;function Go(){return(Go=e((()=>{Uo=n(),Wo=r()})))()}async function Ko(e,t){if(typeof e!=`string`)return e;let n=await fetch(e,{redirect:`error`,referrerPolicy:`no-referrer`,signal:t});if(!n.ok)throw Error(`Animation request failed with ${n.status}`);return n.json()}function qo(e,t){return typeof e!=`string`&&!(`layers`in e&&Array.isArray(e.layers))&&`light`in e&&`dark`in e?e[t]:e}function Jo(e){return/^data:application\/(?:json|[^;,]+\+json|octet-stream)(?:[;,]|$)/i.test(e)}function Yo(e){return typeof e==`string`&&e.length<=ts&&$o.test(e)}function Xo(e){return typeof e==`string`&&(/^data:/i.test(e)?!Jo(e):es.test(e))}function Zo(e,t){if(!Qo(e)||!Array.isArray(e.layers))throw Error(`Invalid Lottie animation data`);if(e.segments!=null&&(!Array.isArray(e.segments)||e.segments.length>0))throw Error(`External Lottie animation segments are not supported`);if(e.slots!=null&&(!Qo(e.slots)||Object.keys(e.slots).length>0))throw Error(`Lottie asset slots are not supported`);if(e.assets!=null&&!Array.isArray(e.assets))throw Error(`Invalid Lottie assets`);let n=typeof t==`string`&&!Jo(t)?new URL(t,document.baseURI).href:document.baseURI,r=new Set,i=e.assets?.map(e=>{if(!Qo(e))throw Error(`Invalid Lottie asset`);if(Array.isArray(e.layers)&&e.p==null&&e.u==null&&e.sid==null)return e;if(typeof e.p!=`string`||e.u!=null&&typeof e.u!=`string`||e.sid!=null)throw Error(`Invalid Lottie image source`);let t=e.e?e.p:`${e.u??``}${e.p}`,i=t;if(!Yo(t)){let e=new URL(t,n);if(e.protocol!==`https:`&&e.protocol!==`http:`)throw Error(`Unsupported Lottie image URL protocol`);i=e.href,r.add(i)}return{...e,e:1,p:i,u:``}});if(e.fonts!=null&&(!Qo(e.fonts)||e.fonts.list!=null&&!Array.isArray(e.fonts.list)||!(e.fonts.list??[]).every(e=>Qo(e)&&(e.fPath==null||e.fPath===``))))throw Error(`External or invalid Lottie fonts are not supported`);return{data:i===void 0?e:{...e,assets:i},imageUrls:[...r]}}function Qo(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var $o,es,ts;function ns(){return(ns=e((()=>{$o=/^data:image\/(?:avif|jpeg|png|webp);base64,/i,es=/^[^?#]*\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#].*)?$/i,ts=2097152})))()}function rs({sourceUrlGate:e,src:t,...n}){let r=qo(t,(0,os.useContext)(V)),i=(0,ss.jsx)(is,{advanceRate:n.advanceRate,alt:n.alt,animationEndTime:n.animationEndTime,animationStartTime:n.animationStartTime,aspectRatio:n.aspectRatio,assetUrlGate:n.assetUrlGate,currentTime:n.currentTime,fit:n.fit,height:n.height,loop:n.loop,maxHeight:n.maxHeight,maxWidth:n.maxWidth,minHeight:n.minHeight,minWidth:n.minWidth,radius:n.radius,source:r,width:n.width});return e&&typeof r==`string`&&!/^data:/i.test(r)?(0,ss.jsx)(e,{url:r,children:i}):i}function is({advanceRate:e,alt:n,animationEndTime:r,animationStartTime:i,aspectRatio:a,assetUrlGate:s,currentTime:c,fit:l=`contain`,height:u,loop:d,maxHeight:f,maxWidth:p,minHeight:m,minWidth:h,radius:g,source:_,width:v}){let y=(0,os.useContext)(we),b=(0,os.useMemo)(()=>JSON.stringify(_),[_]),x=Xo(_),S=typeof _==`string`&&(/^data:/i.test(_)?!Jo(_)&&!Yo(_):y),[C,w]=(0,os.useState)(),T=!S&&C?.serializedSource===b?C:void 0;(0,os.useEffect)(()=>{if(w(void 0),S||x)return;let e=new AbortController;return(async()=>{let n=JSON.parse(b),[r,i]=await Promise.all([Ko(n,e.signal),o(()=>import(`./lottie_light-ed2aa08ba8d4.js`).then(e=>t(e.default,1)),__vite__mapDeps([0,1,2]),import.meta.url)]);e.signal.aborted||w({...Zo(r,n),player:i.default,serializedSource:b})})().catch(t=>{e.signal.aborted||console.warn(`Failed to load Lottie animation`,t)}),()=>e.abort()},[S,x,b]);let E=as({width:v,height:u,aspectRatio:a},typeof _==`string`?T?.data:_),D;return x&&typeof _==`string`&&!S?D=(0,ss.jsx)(`img`,{alt:``,"aria-hidden":`true`,referrerPolicy:`no-referrer`,src:_,style:{height:`100%`,objectFit:l,width:`100%`}}):T&&!(y&&T.imageUrls.length>0)&&(D=(0,ss.jsx)(Ho,{advanceRate:e,animationEndTime:r,animationStartTime:i,currentTime:c,data:T.data,fit:l,loop:d,player:T.player}),s&&T.imageUrls.length>0&&(D=(0,ss.jsx)(s,{urls:T.imageUrls,children:D}))),(0,ss.jsx)(`div`,{"aria-label":n,"data-d-component":`lottie`,role:n?`img`:void 0,style:{...At(g),...E,maxHeight:f,maxWidth:p,minHeight:m,minWidth:h,overflow:`hidden`,position:`relative`},children:D})}function as({width:e,height:t,aspectRatio:n},r){let i={width:e,height:t,aspectRatio:Dt(n)};if(e!==void 0&&t!==void 0||(e!==void 0||t!==void 0)&&i.aspectRatio!==void 0)return i;let a=r?.w,o=r?.h;return typeof a!=`number`||!Number.isFinite(a)||a<=0||typeof o!=`number`||!Number.isFinite(o)||o<=0||(e!==void 0||t!==void 0?i.aspectRatio=a/o:(i.width=a,i.aspectRatio===void 0&&(i.height=o))),i}var os,ss;function cs(){return(cs=e((()=>{U(),os=n(),Go(),ns(),Pt(),ss=r(),s()})))()}function ls({children:e,streaming:t=!1}){return(0,us.jsx)(`div`,{"data-d-component":`markdown`,children:(0,us.jsx)(k,{animateHeight:!0,includeMath:!0,streaming:t,children:e??``})})}var us;function ds(){return(ds=e((()=>{w(),us=r()})))()}var fs;function ps(){return(ps=e((()=>{fs={Math:`_Math_vpo6j_1`}})))()}function ms({block:e=!1,value:t}){return(0,hs.jsx)(b,{block:e,className:fs.Math,"data-d-block":e?``:void 0,"data-d-component":`math`,value:t})}var hs;function gs(){return(gs=e((()=>{ee(),ps(),hs=r()})))()}var _s,vs,ys;function bs(){return(bs=e((()=>{_s=`_Trigger_ny75x_1`,vs=`_TriggerBlock_ny75x_23`,ys={Trigger:_s,TriggerBlock:vs}})))()}function xs({children:e,hoverOpenDelay:t,open:n,showOnHover:r}){return(0,Ts.jsx)(M,{hoverOpenDelay:t,open:n,showOnHover:r,children:e})}function Ss({block:e=!1,children:t,onClick:n,role:r=`button`}){let i=Le(),o=(0,ws.useContext)(Ye),s=e?`div`:`span`;return(0,Ts.jsx)(M.Trigger,{children:(0,Ts.jsx)(s,{className:a(ys.Trigger,e&&ys.TriggerBlock),"data-d-component":`popover-trigger`,"data-d-inline":e?void 0:``,"data-d-inline-text":!e&&o?``:void 0,onClick:e=>{e.stopPropagation(),i(it[`popover-trigger`],Pe(n))},onKeyDown:r===`presentation`?void 0:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),e.currentTarget.click())},role:r,tabIndex:r===`presentation`?void 0:0,children:t})})}function Cs({align:e,children:t,side:n,sideOffset:r,width:i}){return(0,Ts.jsx)(M.Content,{align:e,"data-d-component":`popover-content`,minWidth:`auto`,side:n,sideOffset:r,width:i,children:t})}var ws,Ts;function Es(){return(Es=e((()=>{N(),U(),i(),ws=n(),ze(),bs(),_t(),Ts=r()})))()}var Ds,Os,ks;function As(){return(As=e((()=>{Ds=`_PulseIndicator_hcfma_1`,Os=`_pulse_hcfma_47`,ks={PulseIndicator:Ds,pulse:Os}})))()}function js({color:e,duration:t,endScale:n,pulseColor:r,size:i=12,startOpacity:a}){let o=(0,Ms.useContext)(V);return(0,Ns.jsx)(`span`,{className:ks.PulseIndicator,"data-d-component":`pulse-indicator`,style:l({"pulse-color":kt(Nt(o,e)),"pulse-duration":t?`${t}ms`:void 0,"pulse-end-scale":n?String(n):void 0,"pulse-size":i,"pulse-start-opacity":a==null?void 0:String(a),"pulse-wave-color":kt(Nt(o,r??e))})})}var Ms,Ns;function Ps(){return(Ps=e((()=>{c(),U(),Ms=n(),Pt(),As(),Ns=r()})))()}var Fs,Is;function Ls(){return(Ls=e((()=>{Fs=`_Reveal_1m8wt_2`,Is={Reveal:Fs}})))()}var Rs,zs,Bs,Vs;function Hs(){return(Hs=e((()=>{Rs=`_Root_2mcct_1`,zs=`_Item_2mcct_17`,Bs=`_Content_2mcct_41`,Vs={Root:Rs,Item:zs,Content:Bs}})))()}function Us(e){let t=e.replace(/[^a-zA-Z0-9_-]/gu,e=>`\\${e.codePointAt(0).toString(16)} `),n=`[data-id~="${t}"]:not(template, :scope [data-dil-response] *)`,r=`.${Is.Reveal}[data-d-reveal-for="${t}"]:not(:hover, :focus-within)`;return`
    @media (hover: hover) and (pointer: fine) {
      @scope ([data-dil-response]) to ([data-dil-response]) {
        :scope:has(${n}):not(:has(${n}:is(:hover, :focus-within))) {
          ${r} {
            opacity: 0;
            pointer-events: none;
          }
          .${Vs.Content}:has(> ${r}) {
            pointer-events: none;
          }
        }
      }
    }
  `}function Ws({children:e,targetId:t}){return(0,Gs.jsxs)(`div`,{className:Is.Reveal,"data-d-reveal-for":t,children:[e,ie(t)&&!t.includes(`\0`)&&(0,Gs.jsx)(`style`,{children:Us(t)})]})}var Gs;function Ks(){return(Ks=e((()=>{R(),Ls(),Hs(),Gs=r()})))()}function qs({"aria-label":e,children:t,disabled:n,id:r,hideIndicator:i,required:a,value:o}){return(0,Js.jsx)(j.Item,{"aria-label":e,"data-d-component":`radio`,disabled:n,id:r,hideIndicator:i,required:a,value:o,children:t})}var Js;function Ys(){return(Ys=e((()=>{D(),Js=r()})))()}function Xs(e,t=!0){let n=e.target;if(e.defaultPrevented||!(n instanceof HTMLButtonElement)||n.getAttribute(`role`)!==`radio`||n.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let r=n.closest(`[data-d-component="radio-group"], [data-d-component="segmented-control"]`);if(r!==e.currentTarget||r.closest(`[role="toolbar"]`))return;let i=r.matches(`[role="radiogroup"]`)?r:r.querySelector(`[role="radiogroup"], [role="group"]`);if(!i)return;let a=getComputedStyle(i).direction===`rtl`,o;switch(e.key){case`ArrowLeft`:o=a?1:-1;break;case`ArrowRight`:o=a?-1:1;break;case`ArrowUp`:o=-1;break;case`ArrowDown`:o=1;break;default:return}let s=Array.from(i.querySelectorAll(`button[role="radio"]:not([disabled])`)).filter(e=>e.closest(`[data-d-component="radio-group"], [data-d-component="segmented-control"]`)===r),c=s.indexOf(n)+o,l=s[t?(c+s.length)%s.length:c];e.preventDefault(),e.stopPropagation(),l&&(l.focus(),l.getAttribute(`aria-checked`)!==`true`&&l.click())}var Zs,Qs;function $s(){return($s=e((()=>{Zs=`_RadioGroup_18e4u_1`,Qs={RadioGroup:Zs}})))()}function ec(e){let{captureInteraction:t,runInteraction:n}=Fe(),[r,i]=(0,nc.useState)(null),[a,o]=(0,nc.useState)(`ltr`);(0,nc.useLayoutEffect)(()=>{let e=r?.parentElement;if(!e)return;let t=()=>{o(getComputedStyle(e).direction===`rtl`?`rtl`:`ltr`)};t();let n=new MutationObserver(t);return n.observe(e.closest(`[dir]`)??e,{attributes:!0,attributeFilter:[`dir`],characterData:!0,childList:!0,subtree:!0}),()=>n.disconnect()},[r]);let{children:s,defaultValue:c,disabled:l,direction:u=`row`,label:d,name:f,onChange:p,options:m,required:h,spacing:g,value:_}=e,v=c??(`defaultValue`in e?void 0:m?.[0]?.value??``),y=tc(u);return(0,rc.jsx)(j,{ref:i,"aria-label":d??f??`Options`,asChild:!0,className:Qs.RadioGroup,"data-d-component":`radio-group`,defaultValue:_==null?v:void 0,disabled:l,dir:a,direction:y,name:f,onChange:e=>n({...it[`radio-group`],value:e},Pe(p,e)),onClickCapture:e=>{l||ge(e)||t({...it[`radio-group`],value:pe(e,m)??_??c})},required:h,spacing:g,value:_,children:(0,rc.jsx)(`div`,{dir:void 0,onKeyDownCapture:Xs,children:m?.map(e=>(0,rc.jsx)(qs,{disabled:e.disabled,value:e.value,children:e.description?(0,rc.jsxs)(`span`,{children:[(0,rc.jsx)(`span`,{children:e.label}),(0,rc.jsx)(dt,{color:`secondary`,size:`sm`,children:e.description})]}):e.label},e.value))??s})})}function tc(e){return e===`vertical`||e===`col`?`col`:`row`}var nc,rc;function ic(){return(ic=e((()=>{D(),nc=n(),U(),Ze(),Ys(),$s(),_t(),rc=r()})))()}var ac;function oc(){return(oc=e((()=>{ac=`// @ts-check

(() => {
  "use strict";
  const maxFragmentBytes = 256 * 1024;
  const maxDomNodes = 5000;
  const maxDomDepth = 128;
  const maxImages = 256;
  const version = 1;
  const metadata = document.querySelector(
    'meta[name="oai-email-html-channel-token"]',
  );
  const channelToken =
    metadata instanceof HTMLMetaElement ? metadata.content : undefined;
  if (!channelToken) return;
  const source = document.getElementById("email-html-source");
  const content = document.getElementById("email-html-content");
  if (!(source instanceof HTMLTemplateElement) || !content) return;
  const fragmentSource = source.content.textContent || "";
  const imageSource = document.getElementById("email-html-images");
  /** @type {Map<string, string>} */
  const imagesByToken = new Map();
  if (imageSource instanceof HTMLTemplateElement) {
    try {
      const imageEntries = JSON.parse(imageSource.content.textContent || "[]");
      if (Array.isArray(imageEntries) && imageEntries.length <= maxImages) {
        imageEntries.forEach((entry, index) => {
          if (
            !entry ||
            typeof entry !== "object" ||
            Object.keys(entry).length !== 2 ||
            entry.token !== \`i\${index}\` ||
            typeof entry.url !== "string"
          ) {
            return;
          }
          try {
            const url = new URL(entry.url);
            if (url.protocol === "https:" && !url.username && !url.password) {
              imagesByToken.set(entry.token, entry.url);
            }
          } catch {}
        });
      }
    } catch {}
  }
  source.remove();
  imageSource?.remove();
  content.replaceChildren();
  if (new TextEncoder().encode(fragmentSource).byteLength > maxFragmentBytes)
    return;
  const allowedTags = new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "article",
    "aside",
    "b",
    "bdi",
    "bdo",
    "blockquote",
    "br",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "figcaption",
    "figure",
    "footer",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "i",
    "img",
    "ins",
    "kbd",
    "li",
    "main",
    "mark",
    "nav",
    "ol",
    "p",
    "pre",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "section",
    "small",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "tt",
    "u",
    "ul",
    "var",
    "wbr",
  ]);
  const dropSubtreeTags = new Set([
    "frame",
    "frameset",
    "head",
    "iframe",
    "math",
    "noscript",
    "script",
    "style",
    "svg",
    "template",
    "title",
  ]);
  const allowedAttributes = new Set([
    "style",
    "lang",
    "dir",
    "data-oai-link-token",
    "data-oai-image-token",
    "data-oai-image-fallback-token",
    "alt",
    "colspan",
    "rowspan",
    "scope",
    "align",
    "valign",
    "width",
    "height",
    "cellpadding",
    "cellspacing",
    "border",
    "bgcolor",
    "role",
    "hidden",
    "open",
  ]);
  const allowedCssProperties = new Set([
    "background",
    "background-color",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-style",
    "border-top-width",
    "border-width",
    "box-shadow",
    "box-sizing",
    "color",
    "display",
    "font",
    "font-family",
    "font-size",
    "font-style",
    "font-weight",
    "height",
    "letter-spacing",
    "line-height",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "opacity",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "overflow-wrap",
    "table-layout",
    "text-align",
    "text-decoration",
    "text-indent",
    "text-transform",
    "vertical-align",
    "visibility",
    "white-space",
    "width",
    "word-break",
    "word-spacing",
    "word-wrap",
  ]);
  const allowedCssFunctions = new Set(["rgb", "rgba", "hsl", "hsla"]);
  const allowedCssDimensionUnits = new Set([
    "deg",
    "grad",
    "px",
    "rad",
    "turn",
  ]);
  const allowedDisplayValues = new Set([
    "block",
    "inline",
    "inline-block",
    "table",
    "table-row",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-header-group",
    "table-footer-group",
    "table-row-group",
    "flex",
    "inline-flex",
    "grid",
    "list-item",
    "none",
  ]);
  const allowedAlignValues = new Set(["left", "right", "center", "justify"]);
  const allowedValignValues = new Set(["top", "middle", "bottom", "baseline"]);
  const allowedRoleValues = new Set(["presentation", "none"]);
  const allowedVisibilityValues = new Set(["visible", "hidden", "collapse"]);
  const tableLayoutTags = new Set([
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "td",
    "th",
  ]);
  const dimensionAttributeTags = new Set([
    "table",
    "td",
    "th",
    "tr",
    "col",
    "colgroup",
    "img",
  ]);
  /** @param {string} value */
  const containsUnsafeStyleFunction = (value) => {
    const compact = [...value]
      .filter((character) => character.trim())
      .join("")
      .toLowerCase();
    for (const match of compact.matchAll(/([a-z0-9_-]+)\\(/g)) {
      const functionName = match[1];
      if (!allowedCssFunctions.has(functionName)) return true;
    }
    return false;
  };
  /** @param {string | undefined} character */
  const isCssDigit = (character) =>
    character !== undefined && character >= "0" && character <= "9";
  /** @param {string | undefined} character */
  const isCssHexDigit = (character) =>
    isCssDigit(character) ||
    (character !== undefined &&
      ((character >= "a" && character <= "f") ||
        (character >= "A" && character <= "F")));
  /** @param {string | undefined} character */
  const isCssNameStart = (character) =>
    character !== undefined &&
    ((character >= "a" && character <= "z") ||
      (character >= "A" && character <= "Z") ||
      character === "_" ||
      character.charCodeAt(0) >= 0x80);
  /** @param {string | undefined} character */
  const isCssName = (character) =>
    isCssNameStart(character) || isCssDigit(character) || character === "-";
  /** @param {string} value @param {number} index */
  const isValidCssEscape = (value, index) =>
    value[index] === "\\\\" &&
    index + 1 < value.length &&
    !["\\n", "\\r", "\\f"].includes(value[index + 1]);
  /** @param {string} value @param {number} index */
  const cssIdentifierStartsAt = (value, index) => {
    if (isCssNameStart(value[index])) return true;
    if (value[index] === "-") {
      return (
        isCssNameStart(value[index + 1]) ||
        value[index + 1] === "-" ||
        isValidCssEscape(value, index + 1)
      );
    }
    return isValidCssEscape(value, index);
  };
  /** @param {string} value @param {number} index */
  const consumeCssEscape = (value, index) => {
    let nextIndex = index + 1;
    if (!isCssHexDigit(value[nextIndex])) return nextIndex + 1;
    let hexDigits = 0;
    while (hexDigits < 6 && isCssHexDigit(value[nextIndex])) {
      nextIndex += 1;
      hexDigits += 1;
    }
    if (/\\s/.test(value[nextIndex] || "")) nextIndex += 1;
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const consumeCssName = (value, index) => {
    let nextIndex = index;
    while (nextIndex < value.length) {
      if (isCssName(value[nextIndex])) {
        nextIndex += 1;
      } else if (isValidCssEscape(value, nextIndex)) {
        nextIndex = consumeCssEscape(value, nextIndex);
      } else {
        break;
      }
    }
    return nextIndex;
  };
  /** @param {string} value @param {number} index */
  const cssNumberStartsAt = (value, index) => {
    const first = value[index];
    const second = value[index + 1];
    const third = value[index + 2];
    return (
      isCssDigit(first) ||
      (first === "." && isCssDigit(second)) ||
      ((first === "+" || first === "-") &&
        (isCssDigit(second) || (second === "." && isCssDigit(third))))
    );
  };
  /** @param {string} value @param {number} index */
  const consumeCssNumber = (value, index) => {
    let nextIndex = index;
    if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
    while (isCssDigit(value[nextIndex])) nextIndex += 1;
    if (value[nextIndex] === "." && isCssDigit(value[nextIndex + 1])) {
      nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    if (
      (value[nextIndex] === "e" || value[nextIndex] === "E") &&
      (isCssDigit(value[nextIndex + 1]) ||
        ((value[nextIndex + 1] === "+" || value[nextIndex + 1] === "-") &&
          isCssDigit(value[nextIndex + 2])))
    ) {
      nextIndex += 1;
      if (value[nextIndex] === "+" || value[nextIndex] === "-") nextIndex += 1;
      while (isCssDigit(value[nextIndex])) nextIndex += 1;
    }
    return nextIndex;
  };
  /** @param {string} value */
  const sanitizeStyle = (value) => {
    const probe = document.createElement("div");
    value.split(";").forEach((declaration) => {
      const separatorIndex = declaration.indexOf(":");
      if (separatorIndex < 0) return;
      const property = declaration.slice(0, separatorIndex).trim();
      const rawPropertyValue = declaration.slice(separatorIndex + 1).trim();
      const importantMatch = rawPropertyValue.match(/!\\s*important\\s*$/i);
      const propertyValue = importantMatch
        ? rawPropertyValue.slice(0, importantMatch.index).trim()
        : rawPropertyValue;
      /** @type {[string, string][]} */
      const existingImportantDeclarations = [];
      if (!importantMatch) {
        Array.from({ length: probe.style.length }, (_, index) =>
          probe.style.item(index),
        ).forEach((existingProperty) => {
          if (
            probe.style.getPropertyPriority(existingProperty) === "important"
          ) {
            existingImportantDeclarations.push([
              existingProperty,
              probe.style.getPropertyValue(existingProperty),
            ]);
          }
        });
      }
      probe.style.setProperty(
        property,
        propertyValue,
        importantMatch ? "important" : "",
      );
      existingImportantDeclarations.forEach(
        ([importantProperty, importantValue]) =>
          probe.style.setProperty(
            importantProperty,
            importantValue,
            "important",
          ),
      );
    });
    /** @type {string[]} */
    const sanitizedNormalDeclarations = [];
    /** @type {string[]} */
    const sanitizedImportantDeclarations = [];
    Array.from({ length: probe.style.length }, (_, index) =>
      probe.style.item(index),
    ).forEach((property) => {
      const normalizedProperty = property.toLowerCase();
      const propertyValue = probe.style.getPropertyValue(property);
      const propertyPriority = probe.style.getPropertyPriority(property);
      if (!allowedCssProperties.has(normalizedProperty)) return;
      if (
        normalizedProperty === "display" &&
        !allowedDisplayValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (
        normalizedProperty === "opacity" &&
        !opacityValueIsSafe(propertyValue)
      )
        return;
      if (
        normalizedProperty === "visibility" &&
        !allowedVisibilityValues.has(propertyValue.trim().toLowerCase())
      ) {
        return;
      }
      if (containsUnsafeStyleFunction(propertyValue)) return;
      if (!cssNumericValuesAreSafe(propertyValue)) return;
      const serializedDeclaration = \`\${normalizedProperty}: \${propertyValue}\${propertyPriority ? " !important" : ""}\`;
      const declarations = propertyPriority
        ? sanitizedImportantDeclarations
        : sanitizedNormalDeclarations;
      declarations.push(serializedDeclaration);
    });
    return sanitizedNormalDeclarations
      .concat(sanitizedImportantDeclarations)
      .join("; ");
  };
  /** @param {string} value */
  const opacityValueIsSafe = (value) => {
    const trimmed = value.trim().toLowerCase();
    const percentage = trimmed.match(/^(\\d+(?:\\.\\d+)?|\\.\\d+)%$/);
    if (percentage) {
      return Number(percentage[1]) <= 100;
    }
    if (!/^(\\d+(?:\\.\\d+)?|\\.\\d+)$/.test(trimmed)) return false;
    return Number(trimmed) <= 1;
  };
  /** @param {string} value */
  const cssNumericValuesAreSafe = (value) => {
    // Walk CSS tokens so digits in strings, hashes, and identifiers are not
    // mistaken for numeric values with layout-affecting bounds.
    let index = 0;
    while (index < value.length) {
      if (value[index] === '"' || value[index] === "'") {
        const quote = value[index];
        index += 1;
        while (index < value.length && value[index] !== quote) {
          index += value[index] === "\\\\" ? 2 : 1;
        }
        index += 1;
        continue;
      }
      if (value[index] === "#" && isCssName(value[index + 1])) {
        index = consumeCssName(value, index + 1);
        continue;
      }
      if (cssIdentifierStartsAt(value, index)) {
        index = consumeCssName(value, index);
        continue;
      }
      if (!cssNumberStartsAt(value, index)) {
        index += 1;
        continue;
      }
      const numberEnd = consumeCssNumber(value, index);
      const numeric = Number(value.slice(index, numberEnd));
      index = numberEnd;
      let unit;
      if (value[index] === "%") {
        unit = "%";
        index += 1;
      } else if (cssIdentifierStartsAt(value, index)) {
        const unitEnd = consumeCssName(value, index);
        unit = value.slice(index, unitEnd).toLowerCase();
        index = unitEnd;
      }
      if (!Number.isFinite(numeric) || numeric < 0) return false;
      if (unit === "%") {
        if (numeric > 100) return false;
      } else if (
        (unit && !allowedCssDimensionUnits.has(unit)) ||
        numeric > 2000
      ) {
        return false;
      }
    }
    return true;
  };
  /** @param {string} value @param {number} maximum */
  const integerAttributeIsSafe = (value, maximum) => {
    const trimmed = value.trim();
    if (!/^\\d+$/.test(trimmed)) return false;
    return Number(trimmed) <= maximum;
  };
  /** @param {string} value @param {number} maximum */
  const positiveIntegerAttributeIsSafe = (value, maximum) => {
    return integerAttributeIsSafe(value, maximum) && Number(value.trim()) > 0;
  };
  /** @param {string} value */
  const dimensionAttributeIsSafe = (value) => {
    const trimmed = value.trim();
    if (trimmed.endsWith("%")) {
      const percentage = trimmed.slice(0, -1);
      return /^\\d+$/.test(percentage) && Number(percentage) <= 100;
    }
    return integerAttributeIsSafe(trimmed, 2000);
  };
  /** @param {string} value */
  const colorAttributeIsSafe = (value) => {
    if (containsUnsafeStyleFunction(value)) return false;
    const probe = document.createElement("div");
    probe.style.color = value.trim();
    return probe.style.color !== "";
  };
  /** @param {Element} element @param {string} name @param {string} value */
  const attributeIsAllowed = (element, name, value) => {
    if (!allowedAttributes.has(name)) return false;
    if (name === "data-oai-link-token") return element.localName === "a";
    if (name === "data-oai-image-token" || name === "alt") {
      return element.localName === "img";
    }
    if (name === "data-oai-image-fallback-token") {
      return element.localName === "span";
    }
    if (name === "style") return sanitizeStyle(value) !== "";
    if (name === "hidden") return true;
    if (name === "open") return element.localName === "details";
    if (name === "align")
      return allowedAlignValues.has(value.trim().toLowerCase());
    if (name === "role") {
      return (
        element.localName === "table" &&
        allowedRoleValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "valign") {
      return (
        tableLayoutTags.has(element.localName) &&
        allowedValignValues.has(value.trim().toLowerCase())
      );
    }
    if (name === "bgcolor") {
      return (
        tableLayoutTags.has(element.localName) && colorAttributeIsSafe(value)
      );
    }
    if (name === "width" || name === "height") {
      return (
        dimensionAttributeTags.has(element.localName) &&
        dimensionAttributeIsSafe(value)
      );
    }
    if (name === "cellpadding" || name === "cellspacing" || name === "border") {
      return (
        element.localName === "table" && integerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "colspan" || name === "rowspan") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        positiveIntegerAttributeIsSafe(value, 1000)
      );
    }
    if (name === "scope") {
      return (
        (element.localName === "td" || element.localName === "th") &&
        ["col", "colgroup", "row", "rowgroup"].includes(value)
      );
    }
    return true;
  };
  /** @param {string} name @param {string} value */
  const canonicalAttributeValue = (name, value) => {
    if (name === "hidden") {
      return value.trim().toLowerCase() === "until-found" ? "until-found" : "";
    }
    if (name === "open") return "";
    if (name === "style") return sanitizeStyle(value);
    return value;
  };
  /** @param {HTMLImageElement} image */
  const replaceImageWithFallback = (image) => {
    const fallback = document.createElement("span");
    const hidden = image.getAttribute("hidden");
    const style = image.getAttribute("style");
    if (hidden != null) fallback.setAttribute("hidden", hidden);
    if (style != null) fallback.setAttribute("style", style);
    fallback.textContent = image.getAttribute("alt") || "";
    image.replaceWith(fallback);
  };
  /** @param {Element} element */
  const unwrapElement = (element) => {
    const parent = element.parentNode;
    if (!parent) {
      element.remove();
      return;
    }
    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }
    element.remove();
  };
  /** @param {DocumentFragment} root */
  const enforceDomLimits = (root) => {
    let nodeCount = 0;
    /** @type {{ node: Node; depth: number }[]} */
    const stack = [{ node: root, depth: 0 }];
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) break;
      nodeCount += 1;
      if (nodeCount > maxDomNodes || current.depth > maxDomDepth) return false;
      for (
        let index = current.node.childNodes.length - 1;
        index >= 0;
        index -= 1
      ) {
        const child = current.node.childNodes.item(index);
        if (child) stack.push({ node: child, depth: current.depth + 1 });
      }
    }
    return true;
  };
  /** @param {string} fragment */
  const sanitizeFragment = (fragment) => {
    const template = document.createElement("template");
    template.innerHTML = fragment;
    if (!enforceDomLimits(template.content)) return null;
    template.content.querySelectorAll("*").forEach((element) => {
      if (dropSubtreeTags.has(element.localName)) {
        element.remove();
        return;
      }
      if (!allowedTags.has(element.localName)) {
        unwrapElement(element);
        return;
      }
      [...element.attributes].forEach(({ name, value }) => {
        const normalizedName = name.toLowerCase();
        if (!attributeIsAllowed(element, normalizedName, value)) {
          element.removeAttribute(name);
          return;
        }
        element.setAttribute(
          name,
          canonicalAttributeValue(normalizedName, value),
        );
      });
    });
    return template.content;
  };
  let sanitizedFragment;
  try {
    sanitizedFragment = sanitizeFragment(fragmentSource);
  } catch {
    return;
  }
  if (!sanitizedFragment) return;
  content.replaceChildren(sanitizedFragment);
  content.querySelectorAll("img").forEach((image) => {
    const token = image.getAttribute("data-oai-image-token");
    const fallback = image.nextSibling;
    if (
      !token ||
      !(fallback instanceof HTMLSpanElement) ||
      fallback.getAttribute("data-oai-image-fallback-token") !== token
    ) {
      replaceImageWithFallback(image);
      return;
    }
    const url = imagesByToken.get(token);
    if (!url) {
      image.remove();
      return;
    }
    image.setAttribute("referrerpolicy", "no-referrer");
    image.setAttribute("src", url);
    fallback.remove();
  });
  /** @type {string | null} */
  let suppressedKeyboardToken = null;
  content.querySelectorAll("a[data-oai-link-token]").forEach((link) => {
    link.setAttribute("role", "link");
    link.setAttribute("tabindex", "0");
  });
  /** @param {Event} event */
  const getLink = (event) =>
    event.target instanceof Element
      ? event.target.closest("a[data-oai-link-token]")
      : null;
  /** @param {Event} event @param {Element | null} link */
  const activateLink = (event, link) => {
    const token = link?.getAttribute("data-oai-link-token");
    if (!token) return;
    event.preventDefault();
    window.parent.postMessage(
      { type: "link.activate", version, channelToken, token },
      "*",
    );
  };
  document.addEventListener("click", (event) => {
    const link = getLink(event);
    const token = link?.getAttribute("data-oai-link-token");
    if (token && token === suppressedKeyboardToken && event.detail === 0) {
      suppressedKeyboardToken = null;
      event.preventDefault();
      return;
    }
    suppressedKeyboardToken = null;
    activateLink(event, link);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.repeat) return;
    const link = getLink(event);
    suppressedKeyboardToken = link?.getAttribute("data-oai-link-token") ?? null;
    queueMicrotask(() => {
      suppressedKeyboardToken = null;
    });
    activateLink(event, link);
  });
})();
`})))()}var sc;function cc(){return(cc=e((()=>{oc(),sc=ac})))()}var lc;function uc(){return(uc=e((()=>{lc=`'sha256-0qPQ8TbRMhIKuxrQHW6yy8DsXNh2it03McoHfWW1F7w='`})))()}function dc(e,t){if(typeof e!=`object`||!e)return!1;let n=e;return n.type===`link.activate`&&n.version===1&&n.channelToken===t&&typeof n.token==`string`}var fc,pc,mc,hc,gc,_c;function vc(){return(vc=e((()=>{cc(),uc(),fc=`html{color-scheme:light dark}body{margin:0;padding:0;overflow-wrap:anywhere;font:14px/1.5 ui-sans-serif,system-ui,sans-serif}a[data-oai-link-token]{cursor:pointer;text-decoration:underline;text-underline-offset:2px}`,pc=`'sha256-imuDaJTFRRz5n5LmzTCR6fKNDVbyBMuRlkVtFY4dBK8='`,mc=e=>[`default-src 'none'`,`base-uri 'none'`,`form-action 'none'`,`object-src 'none'`,`frame-src 'none'`,`child-src 'none'`,`connect-src 'none'`,`font-src 'none'`,e.length===0?`img-src 'none'`:`img-src https:`,`media-src 'none'`,`worker-src 'none'`,`manifest-src 'none'`,`script-src ${lc}`,`script-src-elem ${lc}`,`script-src-attr 'none'`,`style-src ${pc}`,`style-src-elem ${pc}`,`style-src-attr 'unsafe-inline'`].join(`; `),hc=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),gc=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),_c=(e,t,n=[],r=!1)=>{let i=r?n:[],a=JSON.stringify(i);return[`<!doctype html><html><head>`,`<meta http-equiv="Content-Security-Policy" content="${hc(mc(i))}">`,`<meta name="referrer" content="no-referrer">`,`<meta name="oai-email-html-channel-token" content="${hc(e)}">`,`<style>${fc}</style>`,`</head><body>`,`<template id="email-html-source">${gc(t)}</template>`,`<template id="email-html-images">${gc(a)}</template>`,`<div id="email-html-content"></div>`,`<script>${sc}<\/script>`,`</body></html>`].join(``)}})))()}function yc(e){return typeof e==`object`&&!!e}function bc(e,t){return Object.keys(e).length===t.length&&t.every(t=>Object.prototype.hasOwnProperty.call(e,t))}function xc(e,t){if(typeof e!=`string`||!Cc(e,Nc))return!1;let n=Pc.exec(e);if(Sc(e)||n==null||n[1].includes(`@`))return!1;try{let n=new URL(e);return t.has(n.protocol)&&n.username.length===0&&n.password.length===0}catch{return!1}}function Sc(e){if(Fc.test(e))return!0;for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<=31||n>=127&&n<=159)return!0}return!1}function Cc(e,t){return e.length<=t&&wc(e)<=t}function wc(e){if(typeof TextEncoder<`u`)return new TextEncoder().encode(e).byteLength;let t=0;for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r<128)t+=1;else if(r<2048)t+=2;else if(r>=55296&&r<=56319){let r=e.charCodeAt(n+1);r>=56320&&r<=57343?(t+=4,n+=1):t+=3}else t+=3}return t}function Tc(e,t){try{return Cc(JSON.stringify(e),t)}catch{return!1}}function Ec(e,t){if(typeof document>`u`)return!1;try{let n=document.createElement(`template`);n.innerHTML=e;let r=n.content.querySelectorAll(`[data-oai-link-token]`);return r.length===t.length&&t.every((e,t)=>{let n=r.item(t);return n?.localName===`a`&&n.getAttribute(`data-oai-link-token`)===e.token})}catch{return!1}}function Dc(e){if(!yc(e)||!bc(e,[`fragment`,`links`])&&!bc(e,[`fragment`,`links`,`images`])||typeof e.fragment!=`string`||!Cc(e.fragment,Ac)||e.fragment.trim().length===0||!Array.isArray(e.links)||e.links.length>jc||Object.hasOwn(e,`images`)&&(!Array.isArray(e.images)||e.images.length>Mc))return;let t=[];for(let[n,r]of e.links.entries()){if(!yc(r)||!bc(r,[`token`,`url`])||r.token!==`l${n}`||!xc(r.url,Ic))return;t.push({token:r.token,url:r.url})}if(!Ec(e.fragment,t))return;let n=[],r=Array.isArray(e.images)?e.images:[];for(let[e,t]of r.entries()){if(!yc(t)||!bc(t,[`token`,`url`])||t.token!==`i${e}`||!xc(t.url,Lc))return;n.push({token:t.token,url:t.url})}let i={fragment:e.fragment,links:t,images:n};return Tc(e,kc)?i:void 0}function Oc(e){try{return Dc(e)}catch{return}}var kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc;function Rc(){return(Rc=e((()=>{kc=786432,Ac=262144,jc=256,Mc=256,Nc=2048,Pc=/^https?:\/\/([^/?#]+)/i,Fc=/\s/,Ic=new Set([`http:`,`https:`]),Lc=new Set([`https:`])})))()}function zc({preview:e,labels:t,...n}){let r=(0,Vc.useMemo)(()=>Oc(e),[e]);return r?(0,Hc.jsx)(Bc,{viewProps:{...n,labels:t,preview:r}}):(0,Hc.jsx)(st,{color:`secondary`,children:e===void 0?t.loading:t.unavailable})}function Bc({viewProps:e}){let{preview:t,labels:n,onOpenLink:r,contentScale:i=1,title:a=`HTML preview`,height:o=360,width:s=`100%`,...c}=e,l=(0,Vc.useRef)(null),[u,d]=(0,Vc.useState)(!1),f=Number.isFinite(i)&&i>0?i:1;return(0,Vc.useLayoutEffect)(()=>{let e=l.current;if(!e)return;let n=crypto.randomUUID(),i=new AbortController;if(r&&t.links.length>0){let a=new Map(t.links.map(({token:e,url:t})=>[e,t]));window.addEventListener(`message`,t=>{if(t.source!==e.contentWindow||t.origin!==`null`)return;let o=t.data;if(!dc(o,n))return;let s=a.get(o.token);s!=null&&r(s,i.signal)},{signal:i.signal})}return e.srcdoc=_c(n,t.fragment,t.images,u),()=>{i.abort(),e.removeAttribute(`srcdoc`)}},[u,r,t]),(0,Hc.jsxs)(Ge,{gap:2,width:s,children:[t.images.length>0&&!u&&(0,Hc.jsx)(Ce,{justify:`center`,children:(0,Hc.jsx)(Un,{size:`sm`,color:`secondary`,variant:`outline`,onClick:()=>d(!0),children:n.showImages})}),(0,Hc.jsx)(He,{as:`div`,className:na.Root,component:`read-only-html-view`,height:o,width:`100%`,layout:c,children:(0,Hc.jsx)(`iframe`,{ref:l,title:a,className:na.Frame,sandbox:`allow-scripts`,referrerPolicy:`no-referrer`,style:{width:`${100/f}%`,maxWidth:`none`,height:`${100/f}%`,transform:`scale(${f})`,transformOrigin:`top left`}})})]})}var Vc,Hc;function Uc(){return(Uc=e((()=>{Vc=n(),De(),Gn(),Je(),ra(),de(),$e(),vc(),Rc(),Hc=r()})))()}function Wc({children:e}){return(0,Kc.jsx)(`div`,{className:Vs.Root,"data-d-component":`stack`,children:e})}function Gc({children:e,placement:t=`center-center`,inset:n=0,decorative:r=!1}){let[i,a]=t.split(`-`);return(0,Kc.jsx)(`div`,{"aria-hidden":r||void 0,className:Vs.Item,"data-d-component":`stack-item`,"data-horizontal":a,"data-vertical":i,inert:r||void 0,style:{inset:Ot(Number.isFinite(Number(n))?Number(n):n)},children:(0,Kc.jsx)(`div`,{className:Vs.Content,children:e})})}var Kc;function qc(){return(qc=e((()=>{Pt(),Hs(),Kc=r()})))()}var Jc,Yc,Xc,Zc,Qc,$c;function el(){return(el=e((()=>{Jc=`_Frame_1t9ry_1`,Yc=`_Layer_1t9ry_9`,Xc=`_Bitmaps_1t9ry_15`,Zc=`_Loading_1t9ry_23`,Qc=`_Full_1t9ry_28`,$c={Frame:Jc,Layer:Yc,Bitmaps:Xc,Loading:Zc,Full:Qc}})))()}function tl({upgradeToFullRes:e=!1,sourceIdentity:t,sourcePending:n,...r}){return e?(0,Z.jsx)(rl,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourceIdentity:t,sourcePending:n,children:r.children}):(0,Z.jsx)(nl,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,sourceIdentity:t,sourcePending:n,secondaryAction:r.secondaryAction,width:r.width,children:r.children})}function nl({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:i,children:a,containOutsideAspectRatio:o,contentCropFit:s,fallback:c,fit:l=`cover`,frame:u,height:d,hideOnFailure:p,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,onLoad:y,onError:b,onImageLoad:x,onImageError:S,onImageFallback:C,imageFrameRef:w,imageFrameComponent:T,imageContentComponent:E,loadedOverlay:D,position:ee,radius:O,searchImage:k,sourcePending:A=!1,sourceIdentity:j,secondaryAction:te,width:M}){let N=typeof k==`object`&&!!k,P=N?k:dl,F=P.content_url??``,ne=P.thumbnail_url??``,I=F||ne,L=F&&ne&&F!==ne?ne:``,[re,ie]=(0,X.useState)(),R=I===re&&L?L:I,z=(0,X.useRef)(null),B=(0,X.useRef)(!0),ae=(0,X.useRef)(null),oe=(0,X.useRef)(null),V=j??JSON.stringify([I,L]);(0,X.useLayoutEffect)(()=>(B.current=!0,()=>{B.current=!1}),[]),(0,X.useLayoutEffect)(()=>{oe.current!==V&&(oe.current=V,ae.current=null)},[V]);let se=f(e=>{B.current&&ae.current==null&&(ae.current=e,e===`loaded`?y?.():b?.())});(0,X.useEffect)(()=>{N&&!A&&(!I||re===I&&!L)&&se(`error`)},[re,L,N,I,se,V,A]),(0,X.useEffect)(()=>{ie(void 0)},[I]);let ce=(0,X.useMemo)(()=>al(n),[n]),[le,H]=(0,X.useState)(),[ue,de]=(0,X.useState)(null);(0,X.useEffect)(()=>{let e=z.current;e?.getAttribute(`src`)===R&&e.complete&&e.naturalWidth>0&&se(`loaded`)},[R,se,V]),(0,X.useLayoutEffect)(()=>{let e=z.current;if(l!==`cover`||ce||!e||e.getAttribute(`src`)!==R){H(void 0);return}let t=()=>{let t=sl(e);H(e=>e?.width===t?.width&&e?.height===t?.height?e:t)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[ce,l,ue,R]);let fe=(0,X.useCallback)(e=>{B.current&&e.currentTarget.getAttribute(`src`)===R&&(R===I&&(ie(I),L)?C?.():((R!==I||!A)&&se(`error`),S?.(e)))},[L,C,S,I,se,A,R]),pe=P.thumbnail_size??P.content_size,me=ee??(l===`cover`?ol(P.thumbnail_crop_info,pe,ce??le):void 0);return(0,Z.jsx)($a,{actionOverlay:typeof e==`function`?e(R):e,imageFrameComponent:T,imageContentComponent:E,alt:t??P.title??``,aspectRatio:n,background:r,bitmapBlendMode:i,containOutsideAspectRatio:o,contentCropFit:s,contentCrop:(R===F?P.content_presentation:P.thumbnail_presentation)??void 0,fallback:c,fit:l,frame:u,height:d,hideOnFailure:p,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,imageFrameRef:w,loadedOverlay:D,imageRef:z,onImageError:fe,onImageLoad:e=>{B.current&&e.currentTarget.getAttribute(`src`)===R&&(de(e.currentTarget),se(`loaded`),x?.(e))},position:me,radius:O,src:R,secondaryAction:te,width:M,children:a})}function rl({sourceIdentity:e,children:t,imageFrameRef:n,...r}){let i=(0,X.useContext)(we),a=(0,X.useContext)(Ya),o=r.searchImage,s=e??JSON.stringify([o?.content_url,o?.thumbnail_url]),c=r.hoverZoom&&r.imageFrameComponent&&r.imageContentComponent,l=c?r.imageFrameComponent:`div`;return i?t==null?null:(0,Z.jsx)(vt,{height:r.height,width:r.width,minHeight:r.minHeight,minWidth:r.minWidth,maxHeight:r.maxHeight,maxWidth:r.maxWidth,aspectRatio:r.aspectRatio,radius:r.radius,background:r.background,children:t}):(0,Z.jsxs)(l,{ref:n,className:`${J.Image} ${J.LoadingFrame} ${$c.Frame}${r.actionOverlay?` group/search-image`:``}`,"data-d-component":`image`,"data-d-frame":r.frame?``:void 0,"data-d-hover-zoom":r.hoverZoom&&!c?``:void 0,"data-d-host-hover":c?``:void 0,style:{...At(r.radius),aspectRatio:Dt(r.aspectRatio),width:r.width,height:r.height,minWidth:r.minWidth,minHeight:r.minHeight,maxWidth:r.maxWidth,maxHeight:r.maxHeight},children:[(0,Z.jsx)(`div`,{className:$c.Loading,children:(0,Z.jsx)(Ia,{height:`100%`,width:`100%`})}),(0,Z.jsx)(il,{actionOverlay:a?void 0:r.actionOverlay,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,loadedOverlay:r.loadedOverlay,imageContentComponent:c?r.imageContentComponent:void 0,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourcePending:r.sourcePending,children:t},s)]})}function il({actionOverlay:e,children:t,searchImage:n,loadedOverlay:r,imageContentComponent:i,fallback:a,sourcePending:o,onLoad:s,onError:c,onImageLoad:l,onImageError:u,onImageFallback:d,...p}){let m=i??`div`,h=typeof n==`object`&&!!n,g=h?n:void 0,_=g?.thumbnail_url||``,v=g?.content_url||``,y=_||v,[b,x]=(0,X.useState)(),[S,C]=(0,X.useState)(),w=b?.src===y?b.state:`pending`,T=S?.src===v?S.state:`pending`,E=(0,X.useRef)(!0),D=(0,X.useRef)(null),ee=(0,X.useRef)(!1),O=(0,X.useRef)(void 0),k=!!(_&&v&&v!==_),A=h&&(!y||w===`failed`)&&!o&&(!k||T===`failed`);(0,X.useLayoutEffect)(()=>(E.current=!0,()=>{E.current=!1}),[]);let j=f(e=>{E.current&&D.current==null&&(D.current=e,e===`loaded`?s?.():c?.())});(0,X.useEffect)(()=>{A&&(j(`error`),O.current&&!ee.current&&D.current!==`loaded`&&(ee.current=!0,u?.(O.current)))},[A,u,j]);function te(e){ee.current||(ee.current=!0,l?.(e))}let M={...p,frame:!1,height:`100%`,width:`100%`,minHeight:0,minWidth:0,maxHeight:void 0,maxWidth:void 0,radius:`none`,hideOnFailure:!A||a!=null||p.hideOnFailure};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(m,{className:$c.Bitmaps,children:[(0,Z.jsx)(`div`,{className:$c.Layer,"aria-hidden":T===`loaded`||A||void 0,"data-d-progressive-settled":w===`loaded`||T===`loaded`||A?``:void 0,style:{visibility:T===`loaded`?`hidden`:void 0},children:(0,Z.jsx)(nl,{alt:M.alt,aspectRatio:M.aspectRatio,background:M.background,bitmapBlendMode:M.bitmapBlendMode,containOutsideAspectRatio:M.containOutsideAspectRatio,contentCropFit:M.contentCropFit,fit:M.fit,frame:M.frame,height:M.height,hideOnFailure:M.hideOnFailure,maxHeight:M.maxHeight,maxWidth:M.maxWidth,minHeight:M.minHeight,minWidth:M.minWidth,position:M.position,radius:M.radius,secondaryAction:M.secondaryAction,width:M.width,searchImage:{...g,content_url:y,content_presentation:_?g?.thumbnail_presentation:g?.content_presentation,thumbnail_url:``},onLoad:()=>{E.current&&(x({src:y,state:`loaded`}),j(`loaded`))},onError:()=>{E.current&&x({src:y,state:`failed`})},onImageLoad:e=>{E.current&&te(e)},onImageError:e=>{E.current&&(O.current={...e,currentTarget:e.currentTarget},(k||o)&&d?.())}},y)}),k&&w!==`pending`?(0,Z.jsx)(`div`,{className:$c.Full,"data-d-progressive-full":``,style:{opacity:+(T===`loaded`)},"aria-hidden":T!==`loaded`||void 0,children:(0,Z.jsx)(nl,{alt:M.alt,aspectRatio:M.aspectRatio,background:M.background,bitmapBlendMode:M.bitmapBlendMode,containOutsideAspectRatio:M.containOutsideAspectRatio,contentCropFit:M.contentCropFit,fit:M.fit,frame:M.frame,height:M.height,hideOnFailure:M.hideOnFailure,maxHeight:M.maxHeight,maxWidth:M.maxWidth,minHeight:M.minHeight,minWidth:M.minWidth,position:M.position,radius:M.radius,secondaryAction:M.secondaryAction,width:M.width,searchImage:{...g,content_url:v,thumbnail_url:``},onLoad:()=>{E.current&&(C({src:v,state:`loaded`}),j(`loaded`))},onError:()=>{E.current&&C({src:v,state:`failed`})},onImageLoad:e=>{E.current&&te(e)},onImageError:e=>{E.current&&(O.current={...e,currentTarget:e.currentTarget})}},v)}):null]}),A&&a!=null?(0,Z.jsx)(`div`,{className:$c.Full,children:a}):null,r!=null&&(w===`loaded`||T===`loaded`)?r:null,t==null?null:(0,Z.jsx)(`div`,{className:J.Overlay,children:t}),e!=null&&(T===`loaded`||w===`loaded`)?(0,Z.jsx)(eo,{children:typeof e==`function`?e(T===`loaded`?v:y):e}):null]})}function al(e){if(typeof e==`number`)return Number.isFinite(e)&&e>0?{height:1,width:e}:void 0;if(typeof e!=`string`)return;let t=e.trim().match(/^([0-9]+(?:\.[0-9]+)?)\s*[:/]\s*([0-9]+(?:\.[0-9]+)?)$/);if(!t)return;let n=Number(t[1]),r=Number(t[2]);return cl(n)&&cl(r)?{height:r,width:n}:void 0}function ol(e,t,n){if(!e||!t||!n||!cl(t.width)||!cl(t.height)||!cl(n.width)||!cl(n.height)||!Number.isFinite(e.center_x_percent)||!Number.isFinite(e.center_y_percent))return;let r=t.width/t.height,i=n.width/n.height;if(Math.abs(r-i)<1e-6)return;let a=ll(e.center_x_percent),o=ll(e.center_y_percent),s=50,c=50;if(r>i){let e=r-i;s=ul((a*r-i/2)/e*100,0,100)}else{let e=1/r,t=1/i,n=e-t;c=ul((o*e-t/2)/n*100,0,100)}return`${s.toFixed(1)}% ${c.toFixed(1)}%`}function sl(e){let t=e?.getBoundingClientRect();return t&&cl(t.width)&&cl(t.height)?{height:t.height,width:t.width}:void 0}function cl(e){return Number.isFinite(e)&&e>0}function ll(e){return ul(e>1?e/100:e,0,1)}function ul(e,t,n){return Math.min(Math.max(e,t),n)}var X,Z,dl;function fl(){return(fl=e((()=>{U(),p(),X=n(),ro(),St(),Oa(),Ra(),Qa(),Pt(),el(),Z=r(),dl={}})))()}var pl,ml;function hl(){return(hl=e((()=>{pl=`_SegmentedControl_1wjhj_1`,ml={SegmentedControl:pl}})))()}function gl({block:e,defaultValue:t,disabled:n,label:r,onChange:i,options:a,pill:o=!0,size:s=`lg`,value:c,variant:l=`ghost`}){let{captureInteraction:u,runInteraction:d}=Fe(),f=t??a[0]?.value??``,[p,m]=(0,_l.useState)(f),h=c!=null,g=h?c:p;return(0,vl.jsx)(`div`,{className:ml.SegmentedControl,"data-d-component":`segmented-control`,onKeyDownCapture:e=>Xs(e,!1),onClickCapture:e=>{n||ge(e)||u({...it[`segmented-control`],value:pe(e,a)??c??t})},children:(0,vl.jsx)(Zt,{"aria-label":r??`Options`,block:e,disabled:n,onChange:e=>{h||m(e),d({...it[`segmented-control`],value:e},Pe(i,e))},pill:o,size:s,value:g,variant:l,children:a.map(e=>(0,vl.jsx)(Zt.Option,{"aria-label":e.label,disabled:e.disabled,value:e.value,children:e.label},e.value))})})}var _l,vl;function yl(){return(yl=e((()=>{Xt(),U(),_l=n(),hl(),_t(),vl=r()})))()}var bl,xl,Sl;function Cl(){return(Cl=e((()=>{bl=`_Shimmer_1jck2_1`,xl=`_shimmer_1jck2_85`,Sl={Shimmer:bl,shimmer:xl}})))()}function wl({children:e,color:t,italic:n,lineThrough:r,maxLines:i,minLines:a,size:o=`md`,tabularNums:s,textAlign:c,truncate:l,weight:u,width:d}){return(0,Tl.jsx)(yt,{as:`span`,className:Sl.Shimmer,color:t,"data-d-component":`shimmer-text`,fontStyle:n?`italic`:void 0,maxLines:i,minLines:a,size:o,tabularNums:s,textAlign:c,textDecoration:r?`line-through`:void 0,truncate:l,weight:u,width:d,children:e})}var Tl;function El(){return(El=e((()=>{Cl(),Ue(),Tl=r()})))()}var Dl,Ol;function kl(){return(kl=e((()=>{Dl=`_Spacer_5117t_1`,Ol={Spacer:Dl}})))()}function Al({minSize:e}){return(0,jl.jsx)(`div`,{className:Ol.Spacer,"data-d-component":`spacer`,style:l({"w-spacer-min-size":e})})}var jl;function Ml(){return(Ml=e((()=>{c(),kl(),jl=r()})))()}function Nl(e,t=0,n,r){let i=document.implementation.createHTMLDocument(``).createElementNS(Hl,`svg`),a=e.props;return i.setAttribute(`font-family`,n?.fontFamily||`sans-serif`),i.setAttribute(`font-weight`,n?.fontWeight||`normal`),zl(i,a,t,n?.color),Il(i,a.children,t,r),r?.finish(i),new XMLSerializer().serializeToString(i)}function Pl(e){let t=e.props;if(t[`aria-hidden`]===!0||t[`aria-hidden`]===`true`||t.role===`presentation`||t.role===`none`)return``;if(typeof t[`aria-label`]==`string`)return t[`aria-label`];let n=``;return Ll(t.children,e=>{n||(Rl(e)&&e.type===`title`?n=Fl(e.children):(0,Vl.isValidElement)(e)&&e.type===`title`&&(n=Fl(e.props.children)))}),n}function Fl(e){let t=``;return Ll(e,e=>{typeof e==`string`||typeof e==`number`?t+=String(e):Rl(e)?t+=Fl(e.children):(0,Vl.isValidElement)(e)&&(t+=Fl(e.props.children))}),t}function Il(e,t,n,r,i=``){let a=0;Ll(t,t=>{let o=a++;if(typeof t==`string`||typeof t==`number`){e.append(e.ownerDocument.createTextNode(String(t)));return}let s,c,l,u;if(Rl(t))s=t.type,c=t.props,l=t.children,u=t.key;else if((0,Vl.isValidElement)(t)&&typeof t.type==`string`)s=t.type,c=t.props,l=c.children,u=t.key;else return;let d=e.ownerDocument.createElementNS(Hl,s),f=`${i}/${JSON.stringify([s,u==null?c.id==null?o:[`id`,c.id]:[`key`,u]])}`;zl(d,c,n),Il(d,l,n,r?.visitChildren(s)?r:void 0,f),r?.visit(d,f),e.append(d)})}function Ll(e,t){if(Array.isArray(e))for(let n of e)Ll(n,t);else(0,Vl.isValidElement)(e)&&e.type===Vl.Fragment?Ll(e.props.children,t):e!=null&&typeof e!=`boolean`&&t(e)}function Rl(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=e;return typeof t.type==`string`&&t.props!=null&&typeof t.props==`object`&&!Array.isArray(t.props)&&Array.isArray(t.children)}function zl(e,t,n,r){for(let[i,a]of Object.entries(t)){if(i===`children`||i===`dangerouslySetInnerHTML`||i===`ref`||i.startsWith(`on`)||a==null||a===!1)continue;if(i===`style`&&typeof a==`object`){let t=Object.entries(a).filter(([,e])=>typeof e==`number`||typeof e==`string`).map(([e,t])=>`${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}:${e===`color`&&r?r:String(t)}`);t.length&&e.setAttribute(`style`,t.join(`;`));continue}if(typeof a!=`boolean`&&typeof a!=`number`&&typeof a!=`string`)continue;let t=Gl[i]??i;t===`xlink:href`?e.setAttributeNS(Ul,t,String(a)):i===`begin`&&Wl.has(e.localName)?e.setAttribute(t,Bl(a,n)):e.setAttribute(t,String(a))}n>0&&Wl.has(e.localName)&&!e.hasAttribute(`begin`)&&e.setAttribute(`begin`,`${-n}s`)}function Bl(e,t){return String(e).split(`;`).map(e=>{let n=e.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(ms|s)?$/);return n?`${Number(n[1])/(n[2]===`ms`?1e3:1)-t}s`:e}).join(`;`)}var Vl,Hl,Ul,Wl,Gl;function Kl(){return(Kl=e((()=>{Vl=n(),Hl=`http://www.w3.org/2000/svg`,Ul=`http://www.w3.org/1999/xlink`,Wl=new Set([`animate`,`animateMotion`,`animateTransform`,`set`]),Gl={alignmentBaseline:`alignment-baseline`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,dominantBaseline:`dominant-baseline`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontStyle:`font-style`,fontWeight:`font-weight`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,pointerEvents:`pointer-events`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strokeDasharray:`stroke-dasharray`,strokeDashoffset:`stroke-dashoffset`,strokeLinecap:`stroke-linecap`,strokeLinejoin:`stroke-linejoin`,strokeMiterlimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,textAnchor:`text-anchor`,vectorEffect:`vector-effect`,wordSpacing:`word-spacing`,xlinkHref:`xlink:href`}})))()}var ql,Jl,Yl,Xl;function Zl(){return(Zl=e((()=>{ql=250,Jl=new Set([`circle`,`ellipse`,`foreignObject`,`image`,`line`,`path`,`polygon`,`polyline`,`rect`,`text`,`use`]),Yl=new Set([`clipPath`,`defs`,`desc`,`filter`,`linearGradient`,`marker`,`mask`,`pattern`,`radialGradient`,`script`,`style`,`symbol`,`title`]),Xl=class{previous;animateNewElements;now;mode;starts=new Map;newKeys=new Set;hasReveals=!1;constructor(e,t,n,r=`active`){this.previous=e,this.animateNewElements=t,this.now=n,this.mode=r}visit(e,t){if(!Jl.has(e.localName)||e.localName===`text`&&!e.textContent?.trim()||e.localName===`path`&&!e.getAttribute(`d`)?.trim())return;let n=this.previous.has(t),r=this.mode===`disabled`?null:n?this.previous.get(t):this.animateNewElements?this.now:null;this.starts.set(t,r),!n&&r!==null&&this.newKeys.add(t),!(r===null||this.now-r>=ql)&&(this.hasReveals=!0,e.setAttribute(`data-d-svg-reveal`,``),e.style.setProperty(`--d-svg-reveal-delay`,`${-Math.max(0,this.now-r)}ms`))}visitChildren(e){return!Yl.has(e)&&!Jl.has(e)}finish(e){if(!this.hasReveals||this.mode!==`active`)return;let t=e.ownerDocument.createElementNS(e.namespaceURI,`style`);t.textContent=`
@keyframes d-svg-enter { from { opacity: 0; } }
:where([data-d-svg-reveal]) {
  animation: d-svg-enter ${ql}ms ease-out var(--d-svg-reveal-delay) backwards;
}`,e.prepend(t)}commit(e){for(let t of this.newKeys)this.starts.set(t,e);return this.starts}}})))()}function Ql({svg:e}){let t=(0,iu.useContext)(wt),n=(0,iu.useSyncExternalStore)(nu,ru,()=>!0),[r]=(0,iu.useState)(t),i=(0,iu.useRef)(new Map),a=(0,iu.useRef)(null),o=(0,iu.useRef)(null),s=(0,iu.useRef)(!0),c=(0,iu.useRef)(null),l=(0,iu.useRef)(null),[u,d]=(0,iu.useState)(()=>$l(e));(0,iu.useEffect)(()=>(s.current=!0,()=>{s.current=!1,l.current=null,c.current=null}),[]);let f=(0,iu.useCallback)(function e(){if(!s.current||c.current||!l.current)return;let{svg:t,animateNewElements:n}=l.current;l.current=null;let r=a.current===null?0:(performance.now()-a.current)/1e3,u=o.current?getComputedStyle(o.current):void 0,f=new Xl(i.current,n,performance.now(),ru()?`disabled`:`preload`),p=tu(Nl(t,r,u,f)),m=new Image;c.current=m,m.decoding=`async`,m.src=p,(typeof m.decode==`function`?m.decode():Promise.resolve()).then(()=>{if(!s.current||c.current!==m)return;c.current=null;let r=performance.now(),o=p;f.hasReveals&&(f=new Xl(i.current,n,r,ru()?`disabled`:`active`),o=tu(Nl(t,a.current===null?0:(r-a.current)/1e3,u,f))),a.current??=r,i.current=f.commit(r),d($l(t,o)),e()},()=>{c.current===m&&(c.current=null,e())})},[]);(0,iu.useEffect)(()=>{l.current={svg:e,animateNewElements:!n&&(t||l.current?.animateNewElements===!0||r&&a.current===null)},f()},[t,f,n,e,r]);let p=e.props,{source:m,aspectRatio:h,width:g,height:_,alt:v}=u,y=g==null||g===`auto`,b=_==null||_===`auto`;return(0,au.jsx)(`img`,{ref:o,alt:v,"data-d-component":`svg`,decoding:`async`,src:m,style:{aspectRatio:h?`auto ${h}`:void 0,color:p.style?.color,height:_,width:h&&y&&b?`100%`:g}})}function $l(e,t){let{viewBox:n,width:r,height:i}=e.props;return{source:t,width:r,height:i,aspectRatio:eu(n),alt:Pl(e)}}function eu(e){if(typeof e!=`string`)return;let t=e.replace(/^[\t\n\r ]+|[\t\n\r ]+$/g,``).split(/[\t\n\r ]*,[\t\n\r ]*|[\t\n\r ]+/);if(t.length!==4||!t.every(e=>ou.test(e)))return;let n=t.map(Number),[,,r,i]=n;if(!(!n.every(Number.isFinite)||r<=0||i<=0))return`${r} / ${i}`}function tu(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function nu(e){let t=window.matchMedia?.(su);return t?.addEventListener(`change`,e),()=>t?.removeEventListener(`change`,e)}function ru(){return window.matchMedia?.(su).matches===!0}var iu,au,ou,su;function cu(){return(cu=e((()=>{U(),iu=n(),Kl(),Zl(),au=r(),ou=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,su=`(prefers-reduced-motion: reduce), (forced-colors: active)`})))()}function lu({children:e,color:t=`prose`,fill:n=`currentColor`,height:r,preserveAspectRatio:i,size:a,stroke:o,strokeLinecap:s,strokeLinejoin:c,strokeWidth:l,viewBox:u,width:d}){let f=(0,uu.useContext)(V),p=kt(Nt(f,t));return(0,du.jsx)(Ql,{svg:(0,du.jsx)(`svg`,{"data-d-component":`svg`,fill:n,height:r??a,preserveAspectRatio:i,stroke:o,strokeLinecap:s,strokeLinejoin:c,strokeWidth:l,style:{color:p},viewBox:u,width:d??a,xmlns:`http://www.w3.org/2000/svg`,children:e})})}var uu,du;function fu(){return(fu=e((()=>{U(),uu=n(),Pt(),cu(),du=r(),lu.childHandling=`opaque`})))()}function pu(e){let t=Number(e??1);return Number.isFinite(t)&&t>0?t:1}function mu({columnSizing:e=`auto`,columns:t=[],children:n,dividers:r=!0,emptyLabel:i=`No rows`,rows:a=[],stickyHeader:o=!1}){let s=a,c=Cu.Children.count(n)>0,l=(0,Cu.useRef)(null);return(0,Q.jsxs)(`div`,{className:It.TableFrame,"data-d-column-sizing":e,"data-d-component":`table`,children:[(0,Q.jsx)(`div`,{className:It.TableViewport,"data-d-table-viewport":!0,ref:l,children:(0,Q.jsx)(`table`,{className:It.Table,"data-d-column-sizing":e,"data-d-dividers":r?``:void 0,"data-d-sticky-header":o?``:void 0,style:{tableLayout:e===`equal`?`fixed`:`auto`},children:c?xu(n):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsx)(`tr`,{children:t.map(e=>(0,Q.jsx)(`th`,{"data-d-align":e.align,"data-d-component":`table-cell`,"data-d-has-width":e.width==null?void 0:``,scope:`col`,style:{width:e.width},children:e.label},e.key))})}),(0,Q.jsx)(`tbody`,{children:s.length===0?(0,Q.jsx)(`tr`,{children:(0,Q.jsx)(`td`,{className:It.EmptyCell,colSpan:t.length||1,children:i})}):s.map((e,n)=>(0,Q.jsx)(`tr`,{children:t.map(t=>{let n=yu(e[t.key]);return(0,Q.jsx)(`td`,{"data-d-align":t.align,"data-d-break-long-token":bu(n)?``:void 0,"data-d-component":`table-cell`,children:n},t.key)})},n))})]})})}),(0,Q.jsx)(ir,{viewportRef:l})]})}function hu({children:e,header:t=!1,rowDivider:n}){let r=(0,Cu.useContext)(V);return(0,Q.jsx)(t?`thead`:`tbody`,{"data-d-component":`table-section`,"data-d-row-divider":n==null?void 0:``,style:n==null?void 0:l({"table-section-row-divider":Ft(r,n).border}),children:e})}function gu({children:e,header:t=!1,label:n,labelColSpan:r}){let i=(0,Cu.useContext)(wu),a=t||i,o=(0,Q.jsx)(wu.Provider,{value:a,children:(0,Q.jsx)(`tr`,{className:It.Row,"data-d-component":`table-row`,children:e})});if(!n)return o;let s=r??vu(e);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`tr`,{className:It.Row,"data-d-component":`table-row-label`,children:(0,Q.jsx)(`td`,{className:It.RowLabelCell,colSpan:s,children:(0,Q.jsx)(`div`,{className:It.RowLabelContent,children:(0,Q.jsx)(`span`,{className:It.RowLabelText,children:n})})})}),o]})}function _u({align:e,children:t,colSpan:n,header:r=!1,padding:i,rowSpan:a,vAlign:o=`start`,width:s}){let c=(0,Cu.useContext)(wu),l=r||c,u=l?`th`:`td`,d=!l&&bu(t);return(0,Q.jsx)(u,{"data-d-align":e,"data-d-break-long-token":d?``:void 0,"data-d-component":`table-cell`,"data-d-has-width":s==null?void 0:``,"data-d-valign":o,colSpan:n,rowSpan:a,scope:l?`col`:void 0,style:{...Lt(i),width:s},children:t})}function vu(e){let t=0;for(let n of Cu.Children.toArray(e)){let e=ve(n);(0,Cu.isValidElement)(e)&&e.type===_u&&(t+=pu(e.props.colSpan))}return Math.max(t,1)}function yu(e){return e==null?``:typeof e==`boolean`?e?`Yes`:`No`:String(e)}function bu(e){for(let t of Cu.Children.toArray(e))if((typeof t==`string`||typeof t==`number`)&&Tu.test(String(t))||(0,Cu.isValidElement)(t)&&bu(t.props.children))return!0;return!1}function xu(e){let t=Cu.Children.toArray(e);if(t.some(Su)){let e=[],n=[],r=()=>{n.length!==0&&(e.push((0,Q.jsx)(`tbody`,{children:n},`loose-rows-${e.length}`)),n=[])};return t.forEach(t=>{Su(t)?(r(),e.push(t)):n.push(t)}),r(),e}return(0,Q.jsx)(`tbody`,{children:e})}function Su(e){return ve(e)?.type===hu}var Cu,Q,wu,Tu;function Eu(){return(Eu=e((()=>{U(),c(),Cu=n(),Pt(),lr(),jt(),Q=r(),wu=(0,Cu.createContext)(!1),Tu=/\S{25,}/u})))()}var Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru;function zu(){return(zu=e((()=>{Du=`_YouTubeEmbed_1b0gl_1`,Ou=`_Iframe_1b0gl_6`,ku=`_EnhancedYouTubeEmbed_1b0gl_7`,Au=`_Player_1b0gl_8`,ju=`_Preview_1b0gl_10`,Mu=`_Thumbnail_1b0gl_11`,Nu=`_Loading_1b0gl_12`,Pu=`_ProviderBadge_1b0gl_40`,Fu=`_ProviderIcon_1b0gl_72`,Iu=`_Duration_1b0gl_80`,Lu=`_DurationLoading_1b0gl_96`,Ru={YouTubeEmbed:Du,Iframe:Ou,EnhancedYouTubeEmbed:ku,Player:Au,Preview:ju,Thumbnail:Mu,Loading:Nu,ProviderBadge:Pu,ProviderIcon:Fu,Duration:Iu,DurationLoading:Lu,"duration-shimmer":`_duration-shimmer_1b0gl_134`}})))()}function Bu(e){return typeof e==`object`&&!!e&&`Player`in e&&typeof e.Player==`function`}function Vu(e){let t=window;return Bu(t.YT)?Promise.resolve(t.YT):Uu||(Uu=new Promise((n,r)=>{let i=document.querySelector(`script[src="${Hu}"]`),a=i??document.createElement(`script`),o=t.onYouTubeIframeAPIReady,s=()=>{window.clearTimeout(u),a.removeEventListener(`error`,c),t.onYouTubeIframeAPIReady===l&&(t.onYouTubeIframeAPIReady=o)},c=()=>{s(),i||a.remove(),r(Error(`YouTube IFrame Player API could not load`))},l=()=>{try{o?.()}finally{Bu(t.YT)&&(s(),n(t.YT))}},u=window.setTimeout(c,15e3);t.onYouTubeIframeAPIReady=l,a.addEventListener(`error`,c,{once:!0}),i||(a.src=Hu,a.async=!0,e&&(a.nonce=e),document.head.appendChild(a))}).catch(e=>{throw Uu=void 0,e}),Uu)}var Hu,Uu;function Wu(){return(Wu=e((()=>{Hu=`https://www.youtube.com/iframe_api`})))()}function Gu({aspectRatio:e=`16 / 9`,hoverToPlay:t=!1,maxWidth:n=`100%`,onHover:r,onPlayerError:i,onThumbnailError:a,scriptNonce:o,showDurationBadge:s=!1,showThumbnail:c=!1,title:l=`YouTube video player`,videoId:u,width:d=`100%`}){let f=(0,qu.useContext)(we),[p,m]=(0,qu.useState)(null);return typeof u!=`string`||!/^[A-Za-z0-9_-]{11}$/.test(u)?null:(0,$.jsx)(`div`,{className:Ru.YouTubeEmbed,"data-d-component":`youtube`,style:{aspectRatio:e,maxWidth:n,width:d},children:f?(0,$.jsx)(`div`,{"aria-label":l,role:`img`,style:{alignItems:`center`,backgroundColor:`var(--color-surface-secondary)`,color:`var(--color-text-secondary)`,display:`flex`,height:`100%`,justifyContent:`center`,width:`100%`},children:(0,$.jsx)(`span`,{"aria-hidden":`true`,style:{fontSize:`2.5rem`},children:`▶`})}):c||s||t||r||i?(0,$.jsx)(Ku,{hoverToPlay:t,onHover:r,onPlayerError:i,onThumbnailError:a,scriptNonce:o,showDurationBadge:s,showThumbnail:c,title:l,videoId:u},`${u}:${c}:${s}:${t}`):(0,$.jsx)(`iframe`,{className:Ru.Iframe,"data-loaded":p===u?``:void 0,onLoad:()=>m(u),allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,referrerPolicy:`strict-origin-when-cross-origin`,src:`https://www.youtube.com/embed/${u}`,title:l})})}function Ku({hoverToPlay:e,onHover:t,onPlayerError:n,onThumbnailError:r,scriptNonce:i,showDurationBadge:a,showThumbnail:o,title:s,videoId:c}){let[l,u]=(0,qu.useState)(()=>typeof window<`u`&&(!window.matchMedia(`(hover: hover) and (pointer: fine)`).matches||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1));(0,qu.useEffect)(()=>{let e=window.matchMedia(`(hover: hover) and (pointer: fine)`),t=()=>{u(!e.matches||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1)};return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let d=e&&!l,p=o||e,m=(0,qu.useRef)(null),h=(0,qu.useRef)(null),g=(0,qu.useRef)(!1),[_,v]=(0,qu.useState)(!1),[y,b]=(0,qu.useState)(!0),[x,S]=(0,qu.useState)(null),[C,w]=(0,qu.useState)(`maxresdefault`),[T,E]=(0,qu.useState)(!1),D=f(e=>n?.(e)),ee=f(e=>{e.title=s,p&&(e.tabIndex=-1),e.referrerPolicy=`strict-origin-when-cross-origin`}),O=f(()=>{g.current=!1,h.current?.pauseVideo(),v(!1)});(0,qu.useEffect)(()=>{let e=m.current;if(!e)return;v(!1);let t=!1,n=!1,r,o,s,l=!1,u=()=>{window.clearInterval(o),window.clearTimeout(s)},f=e=>{if(!a)return!0;let t=e.getDuration();return!Number.isFinite(t)||t<=0?!1:(S(Math.round(t)),u(),!0)},p=document.createElement(`iframe`),_=new URLSearchParams({autoplay:`0`,controls:d?`0`:`1`,enablejsapi:`1`,playsinline:`1`,origin:window.location.origin});d&&_.set(`mute`,`1`),p.src=`https://www.youtube.com/embed/${c}?${_}`,p.allow=`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,p.allowFullscreen=!0,ee(p),e.appendChild(p),Vu(i).then(e=>{t||(a&&(s=window.setTimeout(()=>{l=!0,u(),b(!1)},1e4)),r=new e.Player(p,{videoId:c,width:`100%`,height:`100%`,playerVars:{autoplay:0,controls:+!d,playsinline:1,origin:window.location.origin},events:{onReady:({target:e})=>{t||n||h.current||(h.current=e,d&&e.mute(),!f(e)&&!l&&(o=window.setInterval(()=>{f(e)},250)),d&&g.current&&e.playVideo())},onStateChange:({target:e,data:r})=>{t||n||(f(e),d&&(r===1&&!g.current&&e.pauseVideo(),v(r===1&&g.current)))},onError:({data:e})=>{t||n||(n=!0,u(),b(!1),d&&O(),D(e))},onAutoplayBlocked:()=>{!t&&d&&O()}}}),ee(r.getIframe()))}).catch(()=>{t||(u(),b(!1))});let y=()=>{document.visibilityState===`hidden`&&O()};return d&&(document.addEventListener(`visibilitychange`,y),window.addEventListener(`blur`,O)),()=>{t=!0,u(),document.removeEventListener(`visibilitychange`,y),window.removeEventListener(`blur`,O),g.current=!1,h.current=null,r?.destroy(),e.replaceChildren()}},[d,O,ee,D,i,a,c]),(0,qu.useEffect)(()=>{let e=m.current?.querySelector(`iframe`);e&&(e.title=s)},[s]);let k=e=>{let t=e.currentTarget;if(e.type===`error`||t.naturalWidth===120&&t.naturalHeight===90){if(C===`maxresdefault`){w(`hqdefault`);return}w(null),r?.()}E(!0)},A=x===null?null:`${Math.floor(x/60)}:${String(x%60).padStart(2,`0`)}`;return(0,$.jsxs)(`div`,{className:Ru.EnhancedYouTubeEmbed,"aria-label":p?s:void 0,role:p?`img`:void 0,"data-d-click-through":p?``:void 0,"data-d-compact":l?``:void 0,onClickCapture:d?O:void 0,onPointerEnter:d||t?e=>{e.pointerType!==`touch`&&(t?.(),d&&(g.current=!0,h.current?.mute(),h.current?.playVideo()))}:void 0,onPointerLeave:d?O:void 0,children:[(0,$.jsx)(`div`,{"aria-hidden":p||void 0,className:Ru.Player,ref:m}),o&&(0,$.jsxs)(`div`,{"aria-hidden":!0,className:Ru.Preview,hidden:_,children:[C&&(0,$.jsx)(`img`,{alt:``,className:Ru.Thumbnail,draggable:!1,onError:k,onLoad:k,referrerPolicy:`no-referrer`,src:`https://img.youtube.com/vi/${c}/${C}.jpg`}),!l&&!T&&(0,$.jsx)(`div`,{className:Ru.Loading,children:(0,$.jsx)(Ia,{width:`100%`,height:`100%`,duration:1e3})})]}),a&&(0,$.jsx)(`div`,{"aria-hidden":!0,className:Ru.ProviderBadge,hidden:_,children:(0,$.jsxs)(dn,{color:`secondary`,variant:`solid`,size:l?`sm`:`lg`,children:[(0,$.jsx)(Ht,{className:Ru.ProviderIcon}),(0,$.jsx)(`span`,{className:Ru.Duration,children:A?(0,$.jsx)(`span`,{children:A}):y?(0,$.jsx)(`span`,{className:Ru.DurationLoading}):null})]})})]})}var qu,$;function Ju(){return(Ju=e((()=>{U(),p(),Vt(),qu=n(),hn(),Ra(),zu(),Wu(),$=r()})))()}var Yu,Xu;function Zu(){return(Zu=e((()=>{sn(),hn(),Dn(),An(),St(),Gn(),Ze(),Re(),jr(),Br(),We(),oi(),yi(),Si(),Je(),lt(),qe(),ht(),ti(),Ji(),rt(),Zi(),_e(),ma(),me(),ro(),oe(),Ee(),co(),Eo(),No(),Ra(),Vo(),cs(),ds(),gs(),Es(),Ps(),Qa(),Ks(),Ys(),ic(),de(),Uc(),qc(),fl(),be(),yl(),El(),et(),Ml(),fu(),Eu(),$e(),tt(),le(),zn(),Ju(),ze(),se(),Yu={animate:en,"animate-group":tn,"animate-item":nn,badge:dn,bento:wn,blockquote:On,bold:Ie,box:vt,button:Un,card:Xe,carousel:ur,"carousel-item":dr,"carousel-media-item":fr,caption:dt,checkbox:Lr,"chip-input":pt,code:bi,col:Ge,"date-picker":Ve,divider:gt,favicon:Qr,flow:Be,"flow-item":ct,form:Yi,grid:je,"grid-item":Ne,"html-view":ia,icon:Me,image:$a,input:Ct,label:he,link:ao,list:lo,"list-item":uo,loading:Ao,"loading-indicator":Ro,lottie:rs,italic:Te,markdown:ls,math:ms,popover:xs,"popover-content":Cs,"popover-trigger":Ss,"pulse-indicator":js,pressable:Ka,reveal:Ws,radio:qs,"read-only-html-view":zc,"radio-group":ec,row:Ce,stack:Wc,"stack-item":Gc,"search-image":tl,select:ye,"segmented-control":gl,"shimmer-text":wl,slider:B,spacer:Al,strikethrough:z,svg:lu,table:mu,"table-cell":_u,"table-row":gu,"table-section":hu,text:st,textarea:xe,title:ke,tooltip:Nn,transition:rn,underline:Ke},Xu={...Yu,celebration:mi,"citation-pill":ni,"flashcard-flip":Gi,"loading-block":Ia,youtube:Gu}})))()}export{Cs as a,Wi as c,Uc as i,Mn as l,Zu as n,Es as o,zc as r,Li as s,Xu as t,zn as u};
//# sourceMappingURL=src-51c5af08cc07.js.map