const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lottie_light-ed2aa08ba8d4.js","./lottie_light-c815d06f80f2.js","./rolldown-runtime-428824ca0286.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-428824ca0286.js";import{C3 as n,b3 as r,tnt as i,x3 as a}from"./app-initial-1f5245639493.js";import{Jwn as o,Ywn as s}from"./app-initial-4ce6c66b1093.js";import{a as c,c as l,n as u,u as d}from"./helpers-4c4c3e797607.js";import{n as f,t as p}from"./useStableCallback-4fc6a56863d5.js";import{D as m,E as h,a as g,i as _,r as v,t as y}from"./Button-666c4e0e2092.js";import{a as b,c as x,d as S,f as C,i as w,l as T,m as E,n as D,o as ee,p as O,r as k,s as A,t as j,u as te}from"./RadioGroup-8a7b4ad27777.js";import{l as M,u as ne}from"./SelectControl-c0ccb1a6fa67.js";import{n as N,t as re}from"./Tooltip-a457b08279fc.js";import{n as ie,t as P}from"./ChevronLeft-8a90c7de6d2a.js";import{n as F,t as ae}from"./ChevronRight-bc849bec3ebd.js";import{d as oe,t as I}from"./src-c7c87230969c.js";import{$ as se,A as L,B as ce,C as le,Ct as ue,D as de,Dt as fe,Et as R,F as pe,Gt as me,H as he,I as ge,Jt as _e,K as ve,Kt as z,Lt as ye,M as be,Mt as xe,N as Se,Nt as Ce,O as we,Ot as Te,P as Ee,Q as De,R as Oe,Rt as ke,S as Ae,St as je,T as Me,Tt as Ne,U as Pe,Ut as Fe,V as Ie,W as Le,Wt as Re,Xt as ze,Z as Be,_ as Ve,_t as He,a as Ue,at as We,b as Ge,bt as Ke,ct as qe,dt as Je,et as Ye,f as Xe,ft as Ze,gt as Qe,h as $e,ht as et,i as tt,it as nt,j as rt,k as it,l as at,lt as ot,m as st,n as ct,nt as lt,o as ut,ot as dt,p as ft,pt,qt as mt,r as ht,rn as gt,st as _t,t as vt,tt as yt,u as bt,ut as xt,v as St,vt as Ct,wt,xt as Tt,y as Et,z as Dt,zt as Ot}from"./List.module-132d0d53410c.js";import{n as kt,t as At}from"./Badge-2f5a770a6f22.js";import{a as jt,d as Mt,f as Nt,l as Pt,n as Ft,o as It,p as Lt,r as B,s as Rt,t as zt,u as Bt}from"./Table.module-c1141e26cca1.js";import{At as Vt,Dt as Ht,Ot as Ut,g as Wt,h as Gt,kt as Kt,m as qt,p as Jt}from"./Slider-c74359d70029.js";import{i as Yt,r as Xt}from"./Mobile-dc946ce5cff5.js";import{n as Zt,t as Qt}from"./Checkbox-f918b712e12c.js";import{n as $t,t as en}from"./SegmentedControl-aad66c87278f.js";function tn(e){return{dimension:e.dimension,enter:nn(e.enter),exit:nn(e.exit),forceCompositeLayer:e.forceCompositeLayer,hideOverflow:e.hideOverflow,initial:nn(e.initial),insertMethod:e.insertMethod,itemAnchor:e.itemAnchor,layoutEnter:e.layoutEnter,layoutExit:e.layoutExit,layoutMove:e.layoutMove,preventInitialTransition:e.preventInitialTransition}}function nn(e){if(!e)return;let{translateX:t,translateY:n,...r}=e;return{...r,x:t,y:n}}function rn(e){let{children:t}=e;return(0,ln.jsx)(O,{...tn(e),children:t})}function an(e){let{children:t}=e;return(0,ln.jsx)(S,{...tn(e),children:t})}function on({children:e}){return(0,ln.jsx)(Ce,{children:e})}function sn(e){let{children:t}=e,n=(0,cn.useMemo)(()=>typeof t==`string`||typeof t==`number`?(0,ln.jsx)(cn.Fragment,{children:t},`transition-child`):(0,cn.isValidElement)(t)?t.key==null?(0,cn.cloneElement)(t,{key:`transition-child`}):t:cn.Children.toArray(t),[t]);return(0,ln.jsx)(O,{...tn(e),children:n})}var cn,ln;function un(){return(un=e((()=>{z(),E(),C(),cn=i(),ln=n()})))()}var dn,fn;function pn(){return(pn=e((()=>{dn=`_Badge_a97fl_1`,fn={Badge:dn}})))()}function mn({children:e,color:t,label:n,maxWidth:r,onHover:i,padding:a,pill:o=!0,size:s,variant:c,weight:l=`medium`}){let u=(0,gn.useContext)(ke),d=hn(t),f=d==null?t:void 0,p=typeof a==`number`||typeof a==`string`||a?.bottom!=null||a?.top!=null||a?.y!=null,m={className:fn.Badge,color:d,"data-d-component":`badge`,"data-d-hoverable":i?``:void 0,"data-d-weight":l,pill:o,size:s,style:{...Bt(a),maxWidth:r,...f==null?{}:{backgroundColor:It(Lt(u,f),u)},...p?{height:`auto`}:{}},variant:c,...i==null?{}:{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)}};return(0,_n.jsx)(At,{className:m.className,color:m.color,"data-d-component":m[`data-d-component`],"data-d-hoverable":m[`data-d-hoverable`],"data-d-weight":m[`data-d-weight`],onMouseEnter:m.onMouseEnter,onMouseLeave:m.onMouseLeave,pill:m.pill,size:m.size,style:m.style,variant:m.variant,children:e??n??null})}function hn(e){switch(e){case`secondary`:return`secondary`;case`success`:return`success`;case`danger`:return`danger`;case`warning`:return`warning`;case`info`:return`info`;case`discovery`:return`discovery`;default:return}}var gn,_n;function vn(){return(vn=e((()=>{kt(),z(),gn=i(),pn(),B(),_n=n()})))()}var yn,bn,xn,Sn,Cn;function wn(){return(wn=e((()=>{yn=`_Bento_18wmu_1`,bn=`_Items_18wmu_23`,xn=`_Tile_18wmu_31`,Sn=`_Count_18wmu_105`,Cn={Bento:yn,Items:bn,Tile:xn,Count:Sn}})))()}function Tn(e){return On.Children.toArray(On.Children.map(e,e=>(0,On.isValidElement)(e)&&e.type===On.Fragment?Tn(e.props.children):e))}function En(e){let t=(0,On.useRef)(null),[n,r]=(0,On.useState)(null);return(0,On.useLayoutEffect)(()=>{let n=t.current;if(!e||!n)return;let i=n.closest(`[data-d-direction="col"]:not([data-d-component])`);if(!i)return;let a=[];for(let e=n.parentElement;e&&(a.push(e),e!==i);e=e.parentElement);let o=()=>{let e=n.getBoundingClientRect();if(!e.width||!n.offsetWidth)return;let t=e.width/n.offsetWidth,o=n;for(let e of a){let n=getComputedStyle(e);if(n.display===`contents`)continue;let a=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight);if(Math.abs(o.getBoundingClientRect().width/t-a)>1||e!==i&&n.overflowX!==`visible`){r(null);return}o=e}let s=i.getBoundingClientRect(),c=Math.max(0,(e.left-s.left)/t),l=Math.max(0,(s.right-e.right)/t);r(e=>e?.left===c&&e.right===l?e:{left:c,right:l})};o();let s=typeof ResizeObserver>`u`?null:new ResizeObserver(o);return s?.observe(n),a.forEach(e=>s?.observe(e)),()=>s?.disconnect()},[e]),{ref:t,bleed:e?n:null}}function Dn({children:e,overflow:t=`hidden`}){let n=Tn(e),r=t===`scroll`,{ref:i,bleed:a}=En(r&&n.length>0);if(!n.length)return null;let o=r?n:n.slice(0,3),s=n.length-o.length;return(0,kn.jsxs)(`div`,{ref:i,className:Cn.Bento,"data-d-component":`bento`,"data-d-full-width":a!==null||void 0,style:a?{"--bento-bleed-left":`${a.left}px`,"--bento-bleed-right":`${a.right}px`}:void 0,children:[(0,kn.jsx)(`div`,{className:Cn.Items,"data-d-overflow":t,"data-d-count":o.length,role:`region`,"aria-label":`Bento`,tabIndex:r&&n.length>3?0:void 0,children:o.map((e,t)=>(0,kn.jsx)(`div`,{className:Cn.Tile,children:e},(0,On.isValidElement)(e)?e.key??t:t))}),s>0&&(0,kn.jsxs)(`span`,{className:Cn.Count,children:[(0,kn.jsx)(Kt,{"aria-hidden":!0,width:16,height:16}),`+${s}`]})]})}var On,kn;function An(){return(An=e((()=>{On=i(),Vt(),wn(),kn=n()})))()}function jn({children:e}){return(0,Mn.jsx)(`blockquote`,{className:fe.Blockquote,"data-d-component":`blockquote`,children:R(e)})}var Mn;function Nn(){return(Nn=e((()=>{Te(),Ne(),Mn=n()})))()}function Pn({children:e,content:t}){return(0,zn.jsx)(re,{compact:!0,content:t,children:e})}function Fn({children:e,component:t}){return(0,zn.jsx)(Vn.Provider,{value:t,children:e})}function In({content:e,children:t}){return(0,zn.jsx)(Bn.Provider,{value:e,children:(0,zn.jsx)(Ce,{children:t})})}function Ln({children:e,content:t,disabled:n,theme:r}){let i=(0,Rn.useContext)(Bn),a=(0,Rn.useContext)(ke),o=(0,Rn.useContext)(Vn),s=t??(n?void 0:i);return(0,zn.jsx)(Bn.Provider,{value:void 0,children:s?(0,zn.jsx)(o,{content:s,theme:r??a,children:e}):e})}var Rn,zn,Bn,Vn;function Hn(){return(Hn=e((()=>{N(),z(),Rn=i(),zn=n(),Bn=(0,Rn.createContext)(void 0),Vn=(0,Rn.createContext)(Pn)})))()}var Un,Wn;function Gn(){return(Gn=e((()=>{Un=`_Button_c23f6_1`,Wn={Button:Un}})))()}function Kn({block:e,children:t,color:n=`primary`,disabled:r,label:i,loading:a,onClick:o,pill:s=!0,size:c=`lg`,submit:l,uniform:u,variant:d=`solid`}){let f=ze(),p=(0,qn.jsx)(y,{"aria-label":t==null?void 0:i,block:e,color:n,className:Wn.Button,disabled:r,loading:a,onClick:e=>{e.stopPropagation(),f(ot.button,Fe(o))},pill:s,size:c,type:l?`submit`:`button`,uniform:u,variant:d,"data-d-component":`button`,"data-d-block":e?``:void 0,children:t??i});return(0,qn.jsx)(Ln,{disabled:r,children:p})}var qn;function Jn(){return(Jn=e((()=>{v(),z(),Hn(),xt(),Gn(),qn=n()})))()}var Yn,Xn,Zn,Qn,$n,er,tr,nr;function rr(){return(rr=e((()=>{Yn=`_Frame_1nxk5_1`,Xn=`_Carousel_1nxk5_8`,Zn=`_Item_1nxk5_45`,Qn=`_MediaFrame_1nxk5_63`,$n=`_ScrollControl_1nxk5_83`,er=`_ScrollControlLeft_1nxk5_104`,tr=`_ScrollControlRight_1nxk5_109`,nr={Frame:Yn,Carousel:Xn,Item:Zn,MediaFrame:Qn,ScrollControl:$n,ScrollControlLeft:er,ScrollControlRight:tr}})))()}var ir,ar;function or(){return(or=e((()=>{ir=`_Edges_1sxud_1`,ar={Edges:ir}})))()}function sr({viewportRef:e}){let[t,n]=(0,cr.useState)();return(0,cr.useEffect)(()=>{let t=e.current;if(t==null)return;let r=()=>{let e=getComputedStyle(t),r=e.overflowX===`auto`||e.overflowX===`scroll`,i=Math.max(0,t.scrollWidth-t.clientWidth),a=e.direction===`rtl`,o=Math.min(i,Math.max(0,a?-t.scrollLeft:t.scrollLeft)),s=r&&o>ur,c=r&&i-o>ur,l={left:a?c:s,right:a?s:c,x:t.offsetLeft+t.clientLeft,y:t.offsetTop+t.clientTop,width:t.clientWidth,height:t.clientHeight};n(e=>e?.left===l.left&&e.right===l.right&&e.x===l.x&&e.y===l.y&&e.width===l.width&&e.height===l.height?e:l)},i=typeof ResizeObserver>`u`?null:new ResizeObserver(r),a=()=>{i?.disconnect(),i?.observe(t),Array.from(t.children).forEach(e=>i?.observe(e))},o=typeof ResizeObserver>`u`?null:new ResizeObserver(r);o?.observe(t,{box:`border-box`});let s=typeof MutationObserver>`u`?null:new MutationObserver(()=>{a(),r()});s?.observe(t,{attributes:!0,attributeFilter:dr,childList:!0,characterData:!0,subtree:!0});for(let e=t.parentElement;e!=null;e=e.parentElement)s?.observe(e,{attributes:!0,attributeFilter:dr});return a(),r(),t.addEventListener(`scroll`,r,{passive:!0}),t.addEventListener(`load`,r,!0),window.addEventListener(`resize`,r),()=>{i?.disconnect(),o?.disconnect(),s?.disconnect(),t.removeEventListener(`scroll`,r),t.removeEventListener(`load`,r,!0),window.removeEventListener(`resize`,r)}},[e]),(0,lr.jsx)(`div`,{"aria-hidden":`true`,className:ar.Edges,"data-d-overflow-left":t?.left?``:void 0,"data-d-overflow-right":t?.right?``:void 0,style:t==null?void 0:{left:t.x,top:t.y,width:t.width,height:t.height}})}var cr,lr,ur,dr;function fr(){return(fr=e((()=>{cr=i(),or(),lr=n(),ur=1,dr=[`class`,`style`,`dir`,`data-d-column-sizing`,`data-d-direction`,`data-d-scrollable`]})))()}function pr({activeIndex:e,ariaLabel:t=`Carousel`,children:n,flush:i=!1,gap:a=2,onChange:o,previousLabel:s=`Previous carousel items`,nextLabel:c=`Next carousel items`,showArrows:l=!0,snap:u=`proximity`,snapAlign:d=`start`,visibleItems:f}){let p=(0,V.useId)(),m=(0,V.useRef)(null),h=(0,V.useRef)(void 0),g=(0,V.useRef)(void 0),_=(0,V.useRef)(void 0),v=(0,V.useRef)(void 0),b=(0,V.useRef)(!1),x=(0,V.useRef)(!1),S=Tr(e);x.current=S!==void 0;let C=e!==void 0||o!==void 0,w=C?`start`:d,T=Er(f),[E,D]=(0,V.useState)(),[ee,O]=(0,V.useState)(0),[k,A]=(0,V.useState)(`ltr`),[j,te]=(0,V.useState)({previous:!1,next:!1}),M=(0,V.useCallback)(()=>{let e=m.current;if(e==null)return;let{textDirection:t,carouselRect:n,alignedInlineStart:r,items:i}=Sr(e),a=i.at(0),o=i.at(-1);if(A(t),a==null||o==null){te({previous:!1,next:!1});return}let s=yr(a.getBoundingClientRect(),n,t),c=o.getBoundingClientRect(),l=yr(c,n,t)+c.width;te({previous:s<r-kr,next:l>e.clientWidth+kr})},[]),ne=(0,V.useCallback)(()=>{let e=m.current;e!=null&&D(Dr(e,T))},[T]),N=(0,V.useCallback)(()=>{let e=m.current;if(!C||e==null||g.current!==void 0)return;let{currentOffset:t,itemOffsets:n}=Cr(e);g.current=wr(n,t)},[C]),re=(0,V.useCallback)(()=>{let e=m.current;if(e==null)return;let{currentOffset:t,itemOffsets:n}=Cr(e),r=wr(n,t);if(r===void 0)return;let i=_.current;_.current=void 0,!(i!==void 0&&Math.abs(t-i)<=jr)&&r!==g.current&&(g.current=r,r!==S&&o?.(r))},[S,o]),ie=(0,V.useCallback)(()=>{h.current!==void 0&&window.clearTimeout(h.current),h.current=window.setTimeout(()=>{h.current=void 0,re()},Ar)},[re]);(0,V.useEffect)(()=>{let e=m.current;if(e==null)return;let t=()=>{ne(),M(),N(),x.current&&O(e=>e+1)},n=typeof ResizeObserver>`u`?null:new ResizeObserver(t),r=()=>{vr(e).forEach(e=>n?.observe(e))};t(),e.addEventListener(`scroll`,M,{passive:!0}),n?.observe(e),r();let i=typeof MutationObserver>`u`?null:new MutationObserver(()=>{r(),t()});return i?.observe(e,{childList:!0}),()=>{e.removeEventListener(`scroll`,M),i?.disconnect(),n?.disconnect()}},[i,a,N,ne,M]),(0,V.useEffect)(()=>()=>{h.current!==void 0&&(window.clearTimeout(h.current),h.current=void 0)},[]),(0,V.useEffect)(()=>{ne(),M()},[n,ne,M]),(0,V.useEffect)(()=>{M()},[E,M]);let F=(0,V.useCallback)(e=>{let t=m.current;if(t==null||S===void 0)return;let{currentOffset:n,itemOffsets:r,items:i,maxScrollOffset:a}=Cr(t),o=r[S],s=i[S];if(o===void 0||s==null){_.current=void 0;return}let c=Math.min(o,a);if(g.current=S,Math.abs(n-c)<=jr){let e=_.current;e!==void 0&&Math.abs(e-c)>jr&&(_.current=void 0)}else _.current=c,s.scrollIntoView({behavior:e&&!Or()?`smooth`:`instant`,block:`nearest`,inline:`start`})},[S]);(0,V.useEffect)(()=>{let e=b.current&&v.current!==S;v.current=S,b.current=!0,F(e)},[S,ee,F]),(0,V.useEffect)(()=>{E!==void 0&&F(!1)},[E,F]),(0,V.useEffect)(()=>{let e=m.current?.closest(`[dir]`);if(e==null||typeof MutationObserver>`u`)return;let t=new MutationObserver(M);return t.observe(e,{attributes:!0,attributeFilter:[`dir`]}),()=>t.disconnect()},[M]);let oe=e=>{let t=m.current;if(t==null)return;let{textDirection:n,carouselRect:r,alignedInlineStart:i,items:a}=Sr(t);(e===`previous`?a.slice().reverse():a).find(t=>{let a=yr(t.getBoundingClientRect(),r,n);return e===`previous`?a<i-kr:a>i+kr})?.scrollIntoView({behavior:Or()?`auto`:`smooth`,block:`nearest`,inline:`start`})},I=j.previous||j.next,se=r(nr.ScrollControl,k===`rtl`?nr.ScrollControlRight:nr.ScrollControlLeft),L=r(nr.ScrollControl,k===`rtl`?nr.ScrollControlLeft:nr.ScrollControlRight),ce=k===`rtl`?(0,H.jsx)(ae,{height:16,width:16}):(0,H.jsx)(P,{height:16,width:16}),le=k===`rtl`?(0,H.jsx)(P,{height:16,width:16}):(0,H.jsx)(ae,{height:16,width:16});return(0,H.jsxs)(`div`,{className:nr.Frame,children:[(0,H.jsx)(`div`,{"aria-label":t,className:nr.Carousel,"data-d-component":`carousel`,"data-d-flush":i?``:void 0,"data-d-snap":u,id:p,onScroll:C?ie:void 0,ref:m,role:`list`,style:{gap:Mt(a)},tabIndex:I?0:void 0,children:(0,H.jsx)(Nr.Provider,{value:{itemWidth:E,snapAlign:w},children:n})}),(0,H.jsx)(sr,{viewportRef:m}),l&&I?(0,H.jsx)(`div`,{className:se,children:(0,H.jsx)(y,{"aria-controls":p,"aria-disabled":!j.previous,"aria-label":s,color:`secondary`,onClick:()=>{j.previous&&oe(`previous`)},tabIndex:j.previous?0:-1,pill:!0,size:`sm`,uniform:!0,variant:`outline`,children:ce})}):null,l&&I?(0,H.jsx)(`div`,{className:L,children:(0,H.jsx)(y,{"aria-controls":p,"aria-disabled":!j.next,"aria-label":c,color:`secondary`,onClick:()=>{j.next&&oe(`next`)},tabIndex:j.next?0:-1,pill:!0,size:`sm`,uniform:!0,variant:`outline`,children:le})}):null]})}function mr({aspectRatio:e,background:t,border:n,children:r,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:c,minWidth:l,padding:u,radius:d,variant:f,width:p}){return(0,H.jsx)(gr,{aspectRatio:e,background:t,border:n,component:`carousel-item`,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:c,minWidth:l,padding:u,radius:d,variant:f,width:p,children:r})}function hr({aspectRatio:e,background:t,border:n,children:r,gap:i,height:a,maxHeight:o,maxWidth:s,media:c,minHeight:l,minWidth:u,padding:d,radius:f,size:p=`sm`,variant:m,width:h}){let{itemWidth:g}=(0,V.useContext)(Nr),_=h??(g==null&&u==null?`min-content`:void 0),v=g!=null||_!=null||u!=null,y=me(c),b=y!=null&&y.props.radius!=null;return(0,H.jsxs)(gr,{aspectRatio:e,background:t,border:n,component:`carousel-media-item`,gap:i,height:a,maxHeight:o,maxWidth:s,minHeight:l,minWidth:u,padding:d,radius:f,variant:m,width:_,children:[(0,H.jsx)(Ge,{align:`stretch`,as:`div`,className:nr.MediaFrame,clip:!0,direction:`row`,height:Mr[p],radius:b?void 0:`xl`,width:v?`100%`:`fit-content`,children:c}),(0,H.jsx)(Ge,{as:`div`,gap:i??1,padding:{x:1},width:`100%`,children:r})]})}function gr({aspectRatio:e,background:t,border:n,children:r,component:i,gap:a,height:o,maxHeight:s,maxWidth:c,minHeight:l,minWidth:u,padding:d,radius:f,variant:p=`none`,width:m}){let{itemWidth:h,snapAlign:g=`start`}=(0,V.useContext)(Nr),_=p===`outline`||p===`elevated`,v=p===`soft`?`surface-elevated-secondary`:p===`elevated`?`surface`:void 0,y=_?{color:`default`,size:1}:void 0,b=m??h,x=u??b;return(0,H.jsx)(Ge,{aspectRatio:e,as:`div`,background:t??v,border:n??y,className:nr.Item,clip:p!==`none`,component:i,flex:`0 0 auto`,gap:a,height:o,maxHeight:s,maxWidth:c,minHeight:l,minWidth:x,padding:d??(p===`none`?void 0:4),radius:f??(p===`none`?void 0:`xl`),role:`listitem`,snapAlign:g,variant:p,width:b,children:r})}function _r(e){return getComputedStyle(e).direction===`rtl`?`rtl`:`ltr`}function vr(e){return Array.from(e.children).filter(e=>e instanceof HTMLElement)}function yr(e,t,n){return n===`rtl`?t.right-e.right:e.left-t.left}function br(e){let t=Number.parseFloat(e);return Number.isFinite(t)?t:0}function xr(e){return br(getComputedStyle(e).scrollPaddingInlineStart)}function Sr(e){return{textDirection:_r(e),carouselRect:e.getBoundingClientRect(),alignedInlineStart:xr(e),items:vr(e)}}function Cr(e){let t=Sr(e),n=t.items.at(0);if(n==null)return{...t,currentOffset:0,itemOffsets:[],maxScrollOffset:0};let r=yr(n.getBoundingClientRect(),t.carouselRect,t.textDirection),i=t.items.map(e=>Math.abs(yr(e.getBoundingClientRect(),t.carouselRect,t.textDirection)-r));return{...t,currentOffset:t.alignedInlineStart-r,itemOffsets:i,maxScrollOffset:Math.max(0,e.scrollWidth-e.clientWidth)}}function wr(e,t){let n,r=1/0;return e.forEach((e,i)=>{let a=Math.abs(e-t);a<r&&(n=i,r=a)}),n}function Tr(e){return typeof e==`number`&&Number.isInteger(e)?e:void 0}function Er(e){if(!(e==null||!Number.isFinite(e)||e<1))return Math.floor(e)}function Dr(e,t){if(t==null)return;let n=getComputedStyle(e),r=e.clientWidth-br(n.paddingInlineStart)-br(n.paddingInlineEnd),i=br(n.columnGap),a=Number(n.getPropertyValue(`--carousel-continuation-cue-ratio`)),o=vr(e).length>t&&a>0,s=o?r*a:0,c=(r-i*(o?t:t-1)-s)/t;return Math.max(0,Math.round(c*1e3)/1e3)}function Or(){return typeof window<`u`&&window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches===!0}var V,H,kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{z(),v(),ie(),F(),a(),V=i(),Ae(),rr(),B(),fr(),H=n(),kr=1,Ar=120,jr=1,Mr={lg:`220px`,sm:`140px`},Nr=(0,V.createContext)({})})))()}var Fr,Ir,Lr,Rr;function zr(){return(zr=e((()=>{Fr=`_Round_jk909_1`,Ir=`_RoundLabel_jk909_14`,Lr=`_CheckedLabel_jk909_24`,Rr={Round:Fr,RoundLabel:Ir,CheckedLabel:Lr}})))()}function Br({checked:e,children:t,defaultChecked:n=!1,disabled:i,label:a,lineThrough:o=!1,name:s,onChange:c,required:l,shape:u=`round`,value:d=`on`}){let f=ze(),[p,m]=(0,Vr.useState)(n),h=e!=null,g=h?e:p,_=t??a;return(0,Hr.jsx)(Qt,{checked:g,className:u===`round`?Rr.Round:void 0,"data-d-component":`checkbox`,disabled:i,label:_==null?void 0:(0,Hr.jsx)(`span`,{children:R(_)}),labelClassName:r(u===`round`&&Rr.RoundLabel,g&&o&&Rr.CheckedLabel),name:s,onCheckedChange:e=>{h||m(e),f({...ot.checkbox,value:e?`checked`:`unchecked`},Fe(c,e))},required:l,value:d})}var Vr,Hr;function Ur(){return(Ur=e((()=>{Zt(),z(),a(),Vr=i(),zr(),Ne(),xt(),Hr=n()})))()}var Wr,Gr,Kr,qr,Jr;function Yr(){return(Yr=e((()=>{Wr=`_Pill_1ayg2_24`,Gr=`_Favicon_1ayg2_38`,Kr=`_Label_1ayg2_44`,qr=`_Count_1ayg2_50`,Jr={Pill:Wr,Favicon:Gr,Label:Kr,Count:qr}})))()}var Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{Xr=`_FaviconBox_mw8af_1`,Zr=`_Image_mw8af_14`,Qr=`_Frame_mw8af_23`,$r={FaviconBox:Xr,Image:Zr,Frame:Qr}})))()}function ti({alt:e,frame:t=!1,inline:n=!1,size:r,url:i}){let a=(0,ni.useContext)(xe),o=u(i??``,32),s=r??(n?`1em`:12);return o?(0,ri.jsxs)(Ge,{as:`div`,className:$r.FaviconBox,component:`favicon`,height:s,inline:n,role:`presentation`,width:s,children:[a?(0,ri.jsx)(Xt,{"aria-hidden":!e||void 0,"aria-label":e,className:$r.Image,role:e?`img`:void 0,style:{color:`var(--color-text-secondary)`}}):(0,ri.jsx)(T,{alt:e,className:$r.Image,forceRenderAfterLoadFail:!0,src:o}),t?(0,ri.jsx)(`div`,{"aria-hidden":`true`,className:$r.Frame}):null]}):null}var ni,ri;function ii(){return(ii=e((()=>{z(),c(),Yt(),te(),ni=i(),Ae(),ei(),ri=n()})))()}function ai({color:e,count:t,label:n,onHover:r,url:i}){let a=(0,oi.useContext)(ke);return(0,si.jsxs)(ci,{className:Jr.Pill,color:`secondary`,"data-d-component":`badge`,"data-d-hoverable":r?``:void 0,onMouseEnter:r?()=>r(!0):void 0,onMouseLeave:r?()=>r(!1):void 0,pill:!0,size:`sm`,style:{background:It(Lt(a,e),a)},variant:`soft`,children:[i?(0,si.jsx)(`span`,{className:Jr.Favicon,children:(0,si.jsx)(ti,{size:12,url:i})}):null,(0,si.jsx)(`span`,{className:Jr.Label,children:(0,si.jsx)(lt,{color:`secondary`,inline:!0,maxLines:1,size:`3xs`,truncate:!0,children:n})}),t>1?(0,si.jsx)(`span`,{className:Jr.Count,children:(0,si.jsxs)(lt,{color:`tertiary`,inline:!0,size:`3xs`,children:[`+`,t-1]})}):null]})}var oi,si,ci;function li(){return(li=e((()=>{z(),kt(),oi=i(),Yr(),ii(),B(),nt(),si=n(),ci=At})))()}var ui,di,fi,pi;function mi(){return(mi=e((()=>{ui=`_Frame_tcamf_1`,di=`_Overlay_tcamf_6`,fi=`_Particle_tcamf_17`,pi={Frame:ui,Overlay:di,Particle:fi}})))()}function hi(e,t){let n=bi[e],r=(t-160)/1e3,i=r<=1?r:1+(r-1)*.6,a=xi[e],o=a&&r>=a.start?r<a.end?a.start:r-(a.end-a.start):r,s=o<=1?o:1+(o-1)/(1+4*(o-1)),c=1.5*(n.left-106+n.vx*s+n.ax*s*s),l=a&&r>=a.start?r<a.end?a.top:a.top+a.gravity*(r-a.end)**2:-38+1.25*(n.top+n.vy*i+n.ay*i*i)+(i>.25&&i<1?42*Math.sin((i-.25)*4.18879):0),u=Math.abs(Math.cos(o*n.flip+n.phase)),d=r<=n.life-.55?1:r>=n.life?0:(n.life-r)/.55;return{width:n.size,height:n.size,background:`var(--${n.color})`,left:`calc(50% + ${c}px)`,top:l,transform:`translate(-50%, -50%) rotate(${n.phase*57.2958+o*n.flip*18}deg) ${e%2==0?`scaleX`:`scaleY`}(${.12+.88*u})`,opacity:(.65+.35*u)*d}}function gi(){let[e,t]=(0,vi.useState)(0);return(0,vi.useEffect)(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);if(e.matches)return;let n=Date.now(),r=window.setInterval(()=>{let e=Date.now()-n;t(e),e>=5200&&window.clearInterval(r)},50),i=()=>{e.matches&&(window.clearInterval(r),t(5200))};return e.addEventListener(`change`,i),()=>{window.clearInterval(r),e.removeEventListener(`change`,i)}},[]),e<160||e>=5200?null:(0,yi.jsx)(`div`,{className:pi.Overlay,"aria-hidden":`true`,"data-celebration-confetti":`true`,children:bi.map((t,n)=>(0,yi.jsx)(`span`,{className:pi.Particle,"data-celebration-piece":`true`,style:hi(n,e)},n))})}function _i({trigger:e,children:t}){return(0,yi.jsxs)(`div`,{className:pi.Frame,"data-d-component":`celebration`,children:[t,e!=null&&(0,yi.jsx)(gi,{},e)]})}var vi,yi,bi,xi;function Si(){return(Si=e((()=>{vi=i(),mi(),yi=n(),bi=[{left:83,top:6.7,color:`blue-400`,size:7,vx:-138.7,vy:-234.1,ax:85.9,ay:376.3,flip:5.1,phase:0,life:3.9},{left:129.4,top:7.2,color:`blue-400`,size:8,vx:78.3,vy:-363.2,ax:-60.4,ay:431.9,flip:7.4,phase:.71,life:3.55},{left:123.6,top:27.9,color:`blue-400`,size:7,vx:-175.6,vy:-173,ax:137.5,ay:346.5,flip:6.2,phase:1.42,life:3.65},{left:138,top:38.7,color:`blue-400`,size:6,vx:80.9,vy:-183.2,ax:-38.7,ay:347.2,flip:8.5,phase:2.13,life:3.4},{left:103.3,top:46.4,color:`blue-400`,size:8,vx:27,vy:-301.7,ax:-27.9,ay:422.8,flip:4.8,phase:2.84,life:3.75},{left:100.8,top:52.6,color:`blue-400`,size:7,vx:141.9,vy:-302.1,ax:-100.4,ay:349.2,flip:7.8,phase:3.55,life:3.95},{left:78.1,top:58.5,color:`blue-400`,size:6,vx:29.1,vy:-302.5,ax:-44.6,ay:400.4,flip:9.1,phase:4.26,life:3.35},{left:120.6,top:60.3,color:`blue-400`,size:8,vx:-70.8,vy:-286.8,ax:57.6,ay:412.7,flip:5.5,phase:4.97,life:3.8},{left:92.5,top:66.3,color:`blue-400`,size:6,vx:-139.9,vy:-295,ax:102,ay:371.9,flip:8.8,phase:5.68,life:3.6},{left:93.2,top:-4.3,color:`pink-400`,size:6,vx:79.3,vy:-246.3,ax:-38.9,ay:393.3,flip:6.6,phase:.11,life:3.5},{left:110.1,top:13.1,color:`pink-400`,size:7,vx:-59.8,vy:-270.3,ax:64.8,ay:404.3,flip:7.2,phase:.82,life:3.7},{left:75.3,top:14.5,color:`pink-400`,size:6,vx:143.3,vy:-228,ax:-110.8,ay:377.5,flip:8.1,phase:1.53,life:3.85},{left:88.5,top:25.9,color:`pink-400`,size:7,vx:58.1,vy:-251.3,ax:-50,ay:395.6,flip:5.9,phase:2.24,life:3.45},{left:92.4,top:48.9,color:`pink-400`,size:8,vx:150.1,vy:-330.9,ax:-91.5,ay:406.9,flip:9,phase:2.95,life:4},{left:93.2,top:73.6,color:`pink-400`,size:7,vx:203.1,vy:-122.5,ax:-133.9,ay:171.6,flip:4.7,phase:3.66,life:3.65},{left:115.1,top:-13,color:`yellow-400`,size:6,vx:-187.1,vy:-234.5,ax:130.9,ay:323.5,flip:7.6,phase:4.37,life:3.75},{left:81.8,top:-9.8,color:`yellow-400`,size:6,vx:-39.2,vy:-290.4,ax:-1.6,ay:415.9,flip:6,phase:5.08,life:3.55},{left:142.3,top:-7.4,color:`yellow-400`,size:8,vx:192.5,vy:-338,ax:-123.6,ay:446.3,flip:8.7,phase:5.79,life:3.85},{left:121.9,top:7.2,color:`yellow-400`,size:7,vx:21.9,vy:-203.2,ax:-22.1,ay:268.8,flip:5.3,phase:.21,life:3.95},{left:69.7,top:26,color:`yellow-400`,size:8,vx:-152.3,vy:-231.4,ax:82.9,ay:383.3,flip:9.3,phase:.92,life:3.4},{left:102.4,top:34.1,color:`yellow-400`,size:6,vx:-1.3,vy:-254.7,ax:-.5,ay:378.9,flip:6.8,phase:1.63,life:3.65},{left:80.1,top:47.2,color:`yellow-400`,size:8,vx:-53.7,vy:-248.9,ax:33.9,ay:387.6,flip:7,phase:2.34,life:3.9},{left:71.9,top:54.1,color:`yellow-400`,size:7,vx:-77.3,vy:-272.5,ax:24.3,ay:394.1,flip:8.3,phase:3.05,life:3.5},{left:111.2,top:66.2,color:`yellow-400`,size:7,vx:-23.2,vy:-217.5,ax:15.9,ay:375.6,flip:5.7,phase:3.76,life:4}],xi={0:{start:.58,end:2.45,top:-1,gravity:260},1:{start:.82,end:2.65,top:-9,gravity:245},9:{start:.6,end:2.8,top:-9,gravity:240},12:{start:.48,end:2.55,top:-9,gravity:250},15:{start:.76,end:2.95,top:-9,gravity:235},17:{start:.77,end:3.1,top:-9,gravity:230}}})))()}function Ci({children:e=``}){let t=(0,wi.useContext)(gt);return(0,Ti.jsx)(`code`,{className:ft.Code,"data-d-component":`code`,children:(0,Ti.jsx)(gt.Provider,{value:{...t,bold:!1},children:R(e,{reveal:typeof e==`string`||typeof e==`number`})})})}var wi,Ti;function Ei(){return(Ei=e((()=>{z(),wi=i(),st(),Ne(),Ti=n()})))()}var Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi;function Bi(){return(Bi=e((()=>{Di=`_Stack_68gmg_1`,Oi=`_Active_68gmg_17`,ki=`_Upcoming_68gmg_18`,Ai=`_Outgoing_68gmg_19`,ji=`_Front_68gmg_32`,Mi=`_Back_68gmg_32`,Ni=`_Perspective_68gmg_44`,Pi=`_Lift_68gmg_206`,Fi=`_Flipper_68gmg_228`,Ii=`_Hint_68gmg_259`,Li=`_Feedback_68gmg_268`,Ri=`_dismiss_68gmg_448`,zi={Stack:Di,Active:Oi,Upcoming:ki,Outgoing:Ai,Front:ji,Back:Mi,Perspective:Ni,"onboarding-tap":`_onboarding-tap_68gmg_448`,"onboarding-known":`_onboarding-known_68gmg_448`,"onboarding-missed":`_onboarding-missed_68gmg_448`,Lift:Pi,"flip-lift":`_flip-lift_68gmg_448`,Flipper:Fi,Hint:Ii,Feedback:Li,dismiss:Ri,"card-rise":`_card-rise_68gmg_448`,"card-return":`_card-return_68gmg_448`,"card-return-opacity":`_card-return-opacity_68gmg_448`,"card-return-behind":`_card-return-behind_68gmg_448`,"shuffle-in":`_shuffle-in_68gmg_448`,"shuffle-out":`_shuffle-out_68gmg_448`}})))()}function Vi({activeKey:e,ariaLabel:t,backFace:n,children:r,disabled:i=!1,dismissDirection:a,faceBackground:o,flipped:s=!1,hint:c,isMobile:l=!1,onboardingStep:u,onInteractionChange:d,onSwipeProgress:f,onSwipeLeft:p,onSwipeRight:h,reducedMotion:g=!1,restoreDirection:_,shuffleKey:v,swipeLeftColor:y=`#ee7c37`,swipeRightColor:b=`#53b559`}){let x=U.Children.toArray(r),S=(0,U.useContext)(ke),C=(0,U.useRef)(null),w=(0,U.useRef)(null),T=(0,U.useRef)(null),E=(0,U.useRef)(!1),D=(0,U.useRef)(0),ee=(0,U.useRef)(null),O=(0,U.useRef)(v),k=(0,U.useRef)({activeKey:e,flipped:s}),A=(0,U.useRef)(null),j=(0,U.useRef)(null),te=(0,U.useRef)({drag:!1,motion:!1,flip:!1}),[M,ne]=(0,U.useState)(null),N=M?.kind===`outgoing`?M:null,[re,ie]=(0,U.useState)(!1),P=m(d),F=m(f),ae=(0,U.useRef)(0),oe=ze(),I=(0,U.useCallback)((e,t)=>{if(te.current[e]===t)return;let n=Object.values(te.current).some(Boolean);te.current[e]=t,e===`flip`&&ie(t);let r=Object.values(te.current).some(Boolean);n!==r&&w.current&&P.current?.(r)},[P]),se=(0,U.useCallback)(e=>{ae.current!==e&&(ae.current=e,w.current&&F.current?.(e))},[F]),L=(0,U.useCallback)(()=>{T.current=null,w.current?.removeAttribute(`data-d-dragging`),w.current?.removeAttribute(`data-d-swipe-direction`),w.current?.style.removeProperty(`--swipe-progress`),C.current?.style.removeProperty(`transform`),se(0)},[se]);(0,U.useLayoutEffect)(()=>{let t=ee.current,r=O.current;if(O.current=v,ee.current={key:e,front:x[0],backFace:n,flipped:s,hint:c},!t||t.key===e)return;A.current!==null&&clearTimeout(A.current);let i=g||Gi(),o=v!==void 0&&r!==void 0&&v!==r&&x.length>1,l=o?`shuffle`:a;if((_||l)&&!i){let e=((_??l)===`left`?-1:1)*(Wi(w.current)?-1:1);_?ne({kind:`restoring`,exitSign:e}):l&&ne({...t,kind:`outgoing`,direction:l,exitSign:e,x:T.current?.x??0,rotation:T.current?.rotation??0,progress:T.current?.progress??0}),I(`motion`,!0),A.current=setTimeout(()=>{A.current=null,E.current=!1,ne(null),I(`motion`,!1)},o||_?qi:Ki)}else ne(null),E.current=!1,I(`motion`,!1);I(`drag`,!1),L()},[e,n,x,a,s,c,g,_,v,L,I]),(0,U.useLayoutEffect)(()=>{let t=k.current;k.current={activeKey:e,flipped:s},(t.activeKey!==e||t.flipped!==s||g)&&(j.current!==null&&clearTimeout(j.current),t.activeKey!==e||g||Gi()?I(`flip`,!1):(I(`flip`,!0),j.current=setTimeout(()=>{j.current=null,I(`flip`,!1)},300)))},[e,s,g,I]),(0,U.useEffect)(()=>()=>{A.current!==null&&clearTimeout(A.current),j.current!==null&&clearTimeout(j.current)},[]),(0,U.useEffect)(()=>{let e=C.current;if(!e||i)return;let t=e=>{e.cancelable&&T.current&&e.preventDefault()};return e.addEventListener(`touchmove`,t,{passive:!1}),()=>e.removeEventListener(`touchmove`,t)},[i]);let ce={disabled:i||M!==null||re,enabled:!!(p||h),interactive:!0,targetRef:C,onDragStart:()=>{E.current||(w.current?.setAttribute(`data-d-dragging`,``),I(`drag`,!0))},onDragMove:e=>{if(E.current)return;T.current=e;let t=Wi(w.current)?e.direction===`left`?`right`:`left`:e.direction;if(w.current?.setAttribute(`data-d-swipe-direction`,t),w.current?.style.setProperty(`--swipe-progress`,String(e.progress)),se((t===`left`?-1:1)*Math.round(e.progress*16)),C.current){let t=g||Gi()?0:e.rotation;C.current.style.transform=`translateX(${e.x}px) rotate(${t}deg)`}},onDragEnd:()=>{D.current=Date.now()+350,!E.current&&(L(),I(`drag`,!1))},onSwipe:e=>{if(E.current)return;let t=Wi(w.current)?e!==1:e===1,n=t?p:h;n&&(E.current=!0,A.current=setTimeout(()=>{A.current=null,E.current=!1,L(),I(`drag`,!1)},Ki),oe({target:`swipe_stack`,value:t?`left`:`right`},Fe(n)))}},le=e=>{e.detail===0||Date.now()>=D.current||(e.preventDefault(),e.stopPropagation())},ue={key:e,front:x[0],backFace:n,flipped:s,hint:c};return(0,W.jsxs)(`div`,{"aria-label":t,className:zi.Stack,"data-d-component":`swipe-stack`,"data-scroll-anchor-boundary":``,"data-d-disabled":i?``:void 0,"data-d-dismissing":N&&N.direction!==`shuffle`?``:void 0,"data-d-flipping":re?``:void 0,"data-d-mobile":l?``:void 0,"data-d-onboarding-step":!i&&!s&&M===null&&!re?u:void 0,"data-d-reduced-motion":g?``:void 0,"data-d-restoring":M?.kind===`restoring`?``:void 0,"data-d-shuffling":N?.direction===`shuffle`?``:void 0,onClickCapture:le,ref:w,role:t?`group`:void 0,style:{"--swipe-card-background":Lt(S,o),"--swipe-left-color":It(Lt(S,y),S),"--swipe-right-color":It(Lt(S,b),S),"--swipe-release-progress":N?.progress??0,"--swipe-exit-sign":M?.exitSign},children:[(0,W.jsx)(Hi,{options:ce},e),x.slice(1,3).map((e,t)=>(0,W.jsx)(`div`,{"aria-hidden":!0,className:zi.Upcoming,"data-d-stack-depth":t+1,inert:!0,style:{"--stack-depth":t+1},children:e},t)),(0,W.jsxs)(`div`,{className:zi.Active,inert:i||M!==null,ref:C,children:[(0,W.jsx)(Ui,{card:ue},e),(0,W.jsx)(`div`,{"aria-hidden":!0,className:zi.Feedback})]}),N&&(0,W.jsxs)(`div`,{"aria-hidden":!0,className:zi.Outgoing,"data-d-swipe-direction":N.direction,inert:!0,style:{"--swipe-from-x":`${N.x}px`,"--swipe-from-rotation":`${N.rotation}deg`},children:[(0,W.jsx)(Ui,{card:N}),(0,W.jsx)(`div`,{className:zi.Feedback})]},N.key)]})}function Hi({options:e}){return x(e),null}function Ui({card:e}){return(0,W.jsx)(`div`,{className:zi.Perspective,children:(0,W.jsx)(`div`,{className:zi.Lift,children:(0,W.jsxs)(`div`,{className:zi.Flipper,"data-d-flipped":e.flipped?``:void 0,children:[(0,W.jsxs)(`div`,{"aria-hidden":e.flipped,className:zi.Front,inert:e.flipped,children:[e.front,!e.flipped&&e.hint&&(0,W.jsx)(`div`,{className:zi.Hint,children:e.hint})]}),e.backFace&&(0,W.jsxs)(`div`,{"aria-hidden":!e.flipped,className:zi.Back,inert:!e.flipped,children:[e.backFace,e.flipped&&e.hint&&(0,W.jsx)(`div`,{className:zi.Hint,children:e.hint})]})]})})})}function Wi(e){return e!==null&&window.getComputedStyle(e).direction===`rtl`}function Gi(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches===!0}var U,W,Ki,qi;function Ji(){return(Ji=e((()=>{z(),A(),h(),U=i(),Bi(),B(),W=n(),Ki=240,qi=300})))()}function Yi({children:e,faceBackground:t,...n}){let[r,i,...a]=Xi.Children.toArray(e);if(r===void 0||i===void 0)throw Error(`DIL flashcard-flip requires question and answer children.`);return(0,Xi.createElement)(Vi,{...n,backFace:i,faceBackground:t??Zi},[r,...a])}var Xi,Zi;function Qi(){return(Qi=e((()=>{Xi=i(),Ji(),Zi={light:`var(--color-surface, #fff)`,dark:`var(--color-surface, #212121)`}})))()}function $i({onSubmit:e,...t}){return(0,ea.jsx)(Ge,{as:`form`,component:`form`,hostProps:{onSubmit(t){t.preventDefault(),t.stopPropagation(),e?.()}},layout:t})}var ea;function ta(){return(ta=e((()=>{Ae(),ea=n()})))()}function na(e){let t=ra(e);return String.raw`
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
`}function ra(e){return JSON.stringify(e).replace(/</g,`\\u003c`)}var ia,aa,oa;function sa(){return(sa=e((()=>{ia=`_Root_135fn_1`,aa=`_Frame_135fn_8`,oa={Root:ia,Frame:aa}})))()}function ca({height:e=360,html:t,messenger:n,title:r=`DIL HTML view`,width:i=`100%`,...a}){let o=(0,ma.useRef)(null),s=(0,ma.useRef)(null),c=(0,ma.useRef)(null);c.current===null&&(c.current=fa());let l=n?.channelId??`html-view`,u=c.current,[d,f]=(0,ma.useState)(void 0),[p,m]=(0,ma.useState)(void 0),h=da({channelId:l,html:t,token:u});return(0,ma.useLayoutEffect)(()=>{let e=o.current;if(!e)return;let t={channelId:l,iframe:e,messenger:n,srcDoc:h,token:u},r=s.current;return r?.matches(t)?r.updateOptions(t):(r=new _a(t),s.current=r),r.listen(),f(e=>e===h?e:h),r.teardown},[l,n,h,u]),(0,ha.jsx)(Ge,{as:`div`,className:oa.Root,component:`html-view`,height:e,layout:a,width:i,children:(0,ha.jsx)(`iframe`,{ref:o,className:oa.Frame,"data-loaded":d&&p===d?``:void 0,onLoad:()=>m(d),sandbox:`allow-scripts`,srcDoc:d,title:r})})}function la(e,t){if(!e.id)return;let n=t.get(e.id);n&&(t.delete(e.id),e.error?n.reject(Error(e.error.message??`DIL command failed`)):n.resolve(e.result))}async function ua(e,t,n){if(!e.id||typeof e.type!=`string`)return;let r=t?.commands[e.type];if(!r)n({error:{message:`Unknown DILMessenger command "${e.type}"`},id:e.id,kind:`response`});else try{let t=await r(e.data);n({id:e.id,kind:`response`,result:t})}catch(t){n({error:{message:t instanceof Error?t.message:String(t)},id:e.id,kind:`response`})}}function da({channelId:e,html:t,token:n}){return`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Security-Policy" content="${pa(ga)}" />
    <script>
      ${na({channelId:e,token:n})}
    <\/script>
  </head>
  <body>
${t}
  </body>
</html>`}function fa(){return globalThis.crypto?.randomUUID?.()??Math.random().toString(36).slice(2)}function pa(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}var ma,ha,ga,_a;function va(){return(va=e((()=>{ma=i(),Ae(),sa(),ha=n(),ga=[`default-src 'none'`,`base-uri 'none'`,`object-src 'none'`,`form-action 'none'`,`frame-src 'none'`,`script-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com https://cdn.tailwindcss.com`,`style-src 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com https://cdnjs.cloudflare.com https://fonts.googleapis.com`,`img-src data: blob: https:`,`font-src data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com`,`connect-src https://cdn.jsdelivr.net https://unpkg.com https://esm.sh https://cdn.skypack.dev https://cdnjs.cloudflare.com`,`media-src data: blob: https:`,`worker-src blob:`].join(`; `),_a=class{options;isChildReady=!1;isListening=!1;pendingRequests=new Map;queuedMessages=[];teardownTimer;unregisterTransport;constructor(e){this.options=e}matches(e){return this.options.channelId===e.channelId&&this.options.iframe===e.iframe&&this.options.srcDoc===e.srcDoc&&this.options.token===e.token}updateOptions(e){this.options=e}listen(){this.teardownTimer&&=(clearTimeout(this.teardownTimer),void 0),!this.isListening&&(window.addEventListener(`message`,this.handleMessage),this.unregisterTransport=this.options.messenger?.registerTransport({command:this.sendCommand,event:this.emitEvent}),this.isListening=!0)}teardown=()=>{this.isListening&&(window.removeEventListener(`message`,this.handleMessage),this.unregisterTransport?.(),this.unregisterTransport=void 0,this.isListening=!1,this.teardownTimer=setTimeout(()=>{this.teardownTimer=void 0,this.queuedMessages.length=0,this.rejectPending(Error(`DIL html-view was unmounted`))},0))};sendToFrame=e=>this.isChildReady?this.postToFrame(e):(this.queuedMessages.push(e),!0);postToFrame(e){let t=this.options.iframe.contentWindow;return t?(t.postMessage({__dilHtmlView:`dil-html-view`,channelId:this.options.channelId,token:this.options.token,...e},`*`),!0):!1}sendCommand=(e,t)=>{let n=fa();return new Promise((r,i)=>{this.pendingRequests.set(n,{reject:i,resolve:r}),this.sendToFrame({data:t,id:n,kind:`command`,type:e})||(this.pendingRequests.delete(n),i(Error(`DIL html-view is not ready`)))})};emitEvent=(e,t)=>{this.sendToFrame({data:t,kind:`event`,type:e})};handleMessage=e=>{if(e.source!==this.options.iframe.contentWindow)return;let t=e.data;if(t.__dilHtmlView===`dil-html-view`&&t.channelId===this.options.channelId&&t.token===this.options.token)switch(t.kind){case`response`:this.markChildReady(),la(t,this.pendingRequests);return;case`command`:this.markChildReady(),ua(t,this.options.messenger,this.sendToFrame);return;case`event`:this.markChildReady(),typeof t.type==`string`&&this.options.messenger?.onEvent(t.type,t.data);return;case`bridge-ready`:this.markChildReady();return;case void 0:return;default:throw Error(`Unknown DIL html-view message kind "${String(t.kind)}"`)}};markChildReady(){this.isChildReady||(this.isChildReady=!0,this.flushQueuedMessages())}flushQueuedMessages(){for(;this.queuedMessages.length>0;){let e=this.queuedMessages.shift();if(!e)return;if(!this.postToFrame(e)){this.queuedMessages.unshift(e);return}}}rejectPending(e){for(let t of this.pendingRequests.values())t.reject(e);this.pendingRequests.clear()}}})))()}var ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,G;function Ma(){return(Ma=e((()=>{ya=`_Image_g1tej_1`,ba=`_OverlayBox_g1tej_11`,xa=`_LoadingFrame_g1tej_15`,Sa=`_LoadingImage_g1tej_28`,Ca=`_HoverContent_g1tej_34`,wa=`_LoadingSurface_g1tej_58`,Ta=`_Crop_g1tej_76`,Ea=`_Fallback_g1tej_80`,Da=`_Overlay_g1tej_11`,Oa=`_ActionOverlayContainer_g1tej_91`,ka=`_ActionOverlay_g1tej_91`,Aa=`_Frame_g1tej_109`,ja=`_SecondaryAction_g1tej_140`,G={Image:ya,OverlayBox:ba,LoadingFrame:xa,LoadingImage:Sa,HoverContent:Ca,LoadingSurface:wa,Crop:Ta,Fallback:Ea,"image-fallback-fade-in":`_image-fallback-fade-in_g1tej_209`,Overlay:Da,ActionOverlayContainer:Oa,ActionOverlay:ka,Frame:Aa,SecondaryAction:ja}})))()}function Na(e,t,n=`contain`){if(!e)return;let r=e.aspect_ratio,i=e.placement,a=t??r;if(!Number.isFinite(r)||r<=0||!Number.isFinite(a)||a<=0||!i||!Number.isFinite(i.left)||!Number.isFinite(i.top)||!Number.isFinite(i.width)||i.width<=0||!Number.isFinite(i.height)||i.height<=0)return;let o=n===`cover`?Math.max:Math.min,s=100*o(1,r/a),c=100*o(1,a/r);return{viewport:{left:(100-s)/2,top:(100-c)/2,width:s,height:c},image:i}}var Pa,Fa,Ia,La,Ra;function za(){return(za=e((()=>{Pa=`_LoadingBlock_1x87f_1`,Fa=`_WithContent_1x87f_10`,Ia=`_Background_1x87f_14`,La=`_ReducedMotion_1x87f_30`,Ra={LoadingBlock:Pa,"loading-block-pulse":`_loading-block-pulse_1x87f_52`,WithContent:Fa,Background:Ia,ReducedMotion:La}})))()}function Ba({background:e=`surface-tertiary`,children:t,duration:n=1500,label:i,reducedMotion:a=!1,...o}){return(0,Va.jsx)(Ge,{as:`div`,ariaLabel:i,className:r(Ra.LoadingBlock,t!=null&&Ra.WithContent,a&&Ra.ReducedMotion),component:`loading-block`,layout:{...o,background:t==null?e:void 0,children:t==null?t:(0,Va.jsxs)(Va.Fragment,{children:[(0,Va.jsx)(Ge,{as:`div`,ariaHidden:!0,className:Ra.Background,layout:{background:e}}),t]})},role:i?`status`:void 0,style:l({"loading-block-duration":d(n)})})}var Va;function Ha(){return(Ha=e((()=>{c(),a(),Ae(),za(),Va=n()})))()}var Ua,Wa,Ga,Ka,qa,Ja;function Ya(){return(Ya=e((()=>{Ua=`_Pressable_1pbaj_1`,Wa=`_PreserveOpacity_1pbaj_21`,Ga=`_InsetFocus_1pbaj_27`,Ka=`_Ghost_1pbaj_32`,qa=`_RevealOnHover_1pbaj_57`,Ja={Pressable:Ua,PreserveOpacity:Wa,InsetFocus:Ga,Ghost:Ka,RevealOnHover:qa}})))()}function Xa({ariaLabel:e,ariaPressed:t,capture:n=!1,disabled:i,dimWhenDisabled:a,focusStyle:o,gap:s,hoverBackground:c,inline:u=!1,insetBorder:d=!1,variant:f,onClick:p,onHover:m,revealOnHover:h=!1,tooltip:g,..._}){let v=ze(),y=(0,Za.useContext)($a),b=(0,Za.useContext)(ke),x=_.theme??b;if(y){let e=(0,Qa.jsx)(Ge,{as:`span`,component:`pressable`,gap:u?s??0:s,inline:u,layout:_,role:void 0,style:u?{display:`inline`}:void 0});return u?(0,Qa.jsx)(Qe.Provider,{value:!0,children:e}):e}let S=()=>v(ot.pressable,Fe(p)),C=e=>{e.stopPropagation(),n&&e.preventDefault(),!i&&S()},w=e=>{e.key!==`Enter`&&(e.key!==` `||_.role===`link`)||e.target!==e.currentTarget&&!n||i&&!n||(e.preventDefault(),e.stopPropagation(),i||S())},T=n?{..._,children:(0,Qa.jsx)($a.Provider,{value:!0,children:_.children})}:_,E=_.role===`link`,D=u||E,ee=(0,Qa.jsx)(D?to:eo,{ariaLabel:e,"aria-pressed":t,className:r(Ja.Pressable,h&&Ja.RevealOnHover,f===`ghost`&&Ja.Ghost,o===`inset`&&Ja.InsetFocus,a===!1&&Ja.PreserveOpacity),disabled:i,gap:u?s??0:s,inline:u,layout:T,onClick:n?void 0:C,onClickCapture:n?C:void 0,onKeyDown:D&&!n?w:void 0,onKeyDownCapture:D&&n?w:void 0,onMouseEnter:i?void 0:()=>m?.(!0),onMouseLeave:()=>m?.(!1),style:{...l({"pressable-hover-background":It(Lt(x,c),x)}),...u?{display:`inline`}:{},...d?{boxShadow:`inset 0 0 0 1px currentColor`}:{}},role:_.role??(u?`button`:void 0),tabIndex:D&&!i?0:void 0,type:`button`}),O=(0,Qa.jsx)(Ln,{content:g,disabled:i,theme:_.theme,children:ee});return u?(0,Qa.jsx)(Qe.Provider,{value:!0,children:O}):O}var Za,Qa,$a,eo,to;function no(){return(no=e((()=>{z(),a(),c(),Za=i(),Hn(),Ae(),He(),B(),Ya(),xt(),Qa=n(),$a=(0,Za.createContext)(!1),eo=(0,Za.forwardRef)(function({layout:e,...t},n){return(0,Qa.jsx)(Ge,{ariaLabel:t.ariaLabel,as:`button`,boxRef:n,className:t.className,component:`pressable`,gap:t.gap,hostProps:t,inline:t.inline,layout:e,style:t.style})}),to=(0,Za.forwardRef)(function({layout:e,...t},n){return(0,Qa.jsx)(Ge,{ariaLabel:t.ariaLabel,as:`span`,boxRef:n,className:t.className,component:`pressable`,gap:t.gap,hostProps:t,inline:t.inline,layout:e,role:t.role,style:t.style})})})))()}function ro({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:i,children:a,containOutsideAspectRatio:o,contentCrop:s,contentCropFit:c,fallback:l,fit:u,frame:d,height:f,hideOnFailure:p=!1,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,onImageError:y,onImageLoad:b,imageRef:x,imageFrameRef:S,imageFrameComponent:C,imageContentComponent:w,loadedOverlay:E,position:D,radius:ee,secondaryAction:O,size:k,src:A,width:j}){let te=(0,ao.useContext)(ye),M=(0,ao.useContext)(ke),ne=(0,ao.useContext)($a),[N]=(0,ao.useState)(te),[re,ie]=(0,ao.useState)(null),[P,F]=(0,ao.useState)(),ae=(0,ao.useRef)(void 0),oe=E!=null,I=P?.src===A?P?.aspectRatio:void 0,se=o&&I!==void 0&&(I<=o.min||I>=o.max)?`contain`:u,L=m&&C&&w,ce=L?C:`div`,le=L?w:null,ue=(0,ao.useRef)(null),[de,fe]=(0,ao.useState)(),R=Na(s,de,c),pe=R!=null,me=(0,ao.useCallback)(e=>{if(ue.current=e,typeof S==`function`)return S(e);S&&(S.current=e)},[S]);(0,ao.useLayoutEffect)(()=>{let e=ue.current;if(!pe||!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&fe(t.width/t.height)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[pe,A,re]);let he=f??k,ge=j??k,_e={...Pt(ee),aspectRatio:jt(n)??(pe?s?.aspect_ratio:void 0),height:he,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,width:ge},ve=Ut(It(Lt(M,r),M)),z={..._e,...ve,overflow:`hidden`};if((0,ao.useEffect)(()=>{ie(null)},[A]),(0,ao.useEffect)(()=>{(o||O||e||oe)&&ae.current?.src===A&&F(ae.current)},[e,o,O,oe,A]),re===A&&l!=null)return(0,K.jsxs)(`div`,{ref:me,className:`${G.Image} ${G.OverlayBox} ${G.Fallback}`,"data-d-component":`image`,"data-d-image-fallback":``,"data-d-frame":d?``:void 0,style:z,children:[l,a==null?null:(0,K.jsx)(`div`,{className:G.Overlay,children:a})]});if(re===A&&p)return null;let be=A?(0,K.jsx)(T,{ref:x,alt:t,className:`${G.Image} ${G.LoadingImage}`,forceRenderAfterLoadFail:!p&&l==null,onError:e=>{ie(A),y?.(e)},onLoad:t=>{ie(null);let n=t.currentTarget;if(n.getAttribute(`src`)===A&&Number.isFinite(n.naturalWidth)&&Number.isFinite(n.naturalHeight)&&n.naturalWidth>0&&n.naturalHeight>0){let t={aspectRatio:n.naturalWidth/n.naturalHeight,src:A};ae.current=t,(o||O||e||oe)&&F(t)}b?.(t)},referrerPolicy:`no-referrer`,src:A,style:{..._e,mixBlendMode:i,objectFit:se,objectPosition:D,...L&&!R?{width:ge==null?void 0:`100%`,height:he==null?void 0:`100%`,maxWidth:`none`,maxHeight:`none`,minWidth:0,minHeight:0}:{},...R?{position:`absolute`,left:`${R.image.left}%`,top:`${R.image.top}%`,width:`${R.image.width}%`,height:`${R.image.height}%`,aspectRatio:void 0,maxWidth:`none`,maxHeight:`none`,minWidth:0,minHeight:0,objectFit:`fill`}:{}}},A):null,xe=le?(0,K.jsx)(le,{className:G.HoverContent,style:i?ve:void 0,children:be}):be,Se=!ne&&P!=null&&P.src===A&&e!=null;return(0,K.jsxs)(ce,{ref:me,className:`${G.Image} ${G.OverlayBox} ${G.LoadingFrame}${e?` group/search-image`:``}`,"data-d-component":`image`,"data-d-stream-media":N?``:void 0,"data-d-frame":d?``:void 0,"data-d-hover-zoom":m&&!L?``:void 0,"data-d-host-hover":L?``:void 0,style:z,children:[R?(0,K.jsx)(`div`,{className:G.Crop,"data-d-image-crop":``,style:{left:`${R.viewport.left}%`,top:`${R.viewport.top}%`,width:`${R.viewport.width}%`,height:`${R.viewport.height}%`},children:xe}):xe,(0,K.jsx)(`div`,{className:G.LoadingSurface,"data-d-image-loading":``,children:(0,K.jsx)(Ba,{background:oo,duration:1e3,height:`100%`,width:`100%`})}),a==null?null:(0,K.jsx)(`div`,{className:G.Overlay,children:a}),O&&P?.src===A?(0,K.jsx)(`div`,{className:G.SecondaryAction,children:(0,K.jsx)(Xa,{ariaLabel:O.label,onClick:O.onClick,children:O.icon?(0,K.jsx)(Ie,{inline:!0,name:O.icon,size:`sm`}):O.label})}):null,Se?(0,K.jsx)(io,{children:e}):null,d?(0,K.jsx)(`div`,{"aria-hidden":`true`,className:G.Frame}):null,P?.src===A&&re!==A&&oe?E:null]})}function io({children:e}){return(0,K.jsx)(`div`,{className:G.ActionOverlayContainer,children:(0,K.jsx)(`div`,{className:G.ActionOverlay,children:e})})}var ao,K,oo;function so(){return(so=e((()=>{te(),Ht(),z(),ao=i(),Ma(),he(),Ha(),no(),B(),K=n(),oo=`light-dark(var(--dil-image-loading-light-bg, var(--theme-user-msg-bg, var(--color-background-info-surface))), var(--theme-user-msg-bg, var(--color-background-info-surface)))`})))()}function co(e){let t=e.trim();if(!t)return null;if(!/^[a-z][a-z\d+.-]*:/i.test(t)){if(t.startsWith(`//`)||!t.includes(`.`))return null;t=`https://${t}`}try{let e=new URL(t);if(e.protocol!==`http:`&&e.protocol!==`https:`)return null}catch{return null}return t}function lo({children:e,href:t,onClick:n,onVisible:r,onVisibleWhen:i,onVisibleKey:a,title:o,anchorComponent:s}){let c=s??`a`,l=ze(),u=co(t),d=wt({onVisible:r,onVisibleKey:a,onVisibleWhen:i!==!1&&u!==null},c);if(!u)return(0,fo.jsx)(Ce,{children:e});let f=uo.Children.toArray(e),p=f.some(e=>typeof e!=`string`||e.trim())?f:[o?.trim()||new URL(u).hostname],m=p.pop(),h=p.length===0&&typeof m==`string`&&!/\s/u.test(m.trim());if(typeof m==`string`){let e=m.trimEnd();p.push(e),m=m.slice(e.length)}return(0,fo.jsx)(c,{ref:d,className:h?ht.NoWrap:void 0,"data-d-component":`link`,href:u,onClick:n?e=>{e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||(e.preventDefault(),e.stopPropagation(),l(ot.link,Fe(n)))}:void 0,rel:`noopener noreferrer`,target:`_blank`,title:o,children:(0,fo.jsxs)(lt,{color:`inherit`,inline:!0,underline:`dotted`,children:[p,(0,fo.jsxs)(`span`,{className:ht.Tail,children:[R(m),(0,fo.jsx)(`span`,{"aria-hidden":`true`,children:(0,fo.jsx)(Ie,{inline:!0,name:`arrow-up-right-link`})})]})]})})}var uo,fo;function po(){return(po=e((()=>{uo=i(),z(),ue(),he(),Ne(),nt(),tt(),xt(),fo=n()})))()}function mo({children:e,connector:t=`none`,gap:n,items:r,marker:i=`bullet`,maxMarkerSize:a,start:o}){let s=r??[],c=vo(a,wo),l={maxMarkerSize:c,reserveMarkerLane:c!==wo},u=t===`none`&&c===wo&&bo(i)?i:null,d=i===`number`?`ol`:`ul`,f=i===`number`&&o!=null&&Number.isFinite(o)?o:void 0,p=c!==wo||yo(t,i??`none`)?4:0,m=Mt(n??p);return(0,q.jsx)(To.Provider,{value:t,children:(0,q.jsx)(Eo.Provider,{value:{inheritedMarker:i,nativeMarker:u},children:(0,q.jsx)(Oo.Provider,{value:l,children:(0,q.jsxs)(d,{className:vt.List,"data-d-component":`list`,"data-d-connector":t===`solid`?t:void 0,"data-d-marker":typeof i==`string`?i:`rich`,"data-d-marker-layout":u==null?`custom`:`native`,start:f,style:{"--d-list-row-gap":m.includes(`(`)?m:m.split(/\s+/)[0],counterReset:f==null?void 0:`d-list-item `+(f-1),gap:m},children:[s.map((e,t)=>(0,q.jsx)(ho,{disabled:typeof e==`string`?void 0:e.disabled,label:typeof e==`string`?e:e.label,description:typeof e==`string`?void 0:e.description,children:typeof e==`string`?e:e.children},t)),xo(e).map((e,t)=>So(e)?e:(0,q.jsx)(ho,{children:e},t))]})})})})}function ho({children:e,description:t,disabled:n,label:r,marker:i,markerSize:a}){let o=(0,Co.useContext)(To),s=(0,Co.useContext)(Eo),c=i??s.inheritedMarker??`none`,l=i==null&&c===s.nativeMarker,u=(0,Co.useContext)(Oo),d=_o(vo(a,u.maxMarkerSize),u.maxMarkerSize),f=typeof c!=`string`,p=f?`rich`:c,m=yo(o,c),h=(0,Co.useContext)(Tt),g=m&&!h;return(0,q.jsxs)(`li`,{className:vt.Item,"data-d-component":`list-item`,"data-d-connector":o===`solid`?o:void 0,"data-d-marker":o===`solid`?p:void 0,"data-d-marker-layout":l?`native`:`custom`,"data-d-rich-marker-size":f?d:void 0,"data-d-rich-marker-lane":f&&u.reserveMarkerLane?u.maxMarkerSize:void 0,children:[l?null:(0,q.jsx)(go,{marker:c,markerSize:d,maxMarkerSize:u.maxMarkerSize,reserveMarkerLane:u.reserveMarkerLane}),(0,q.jsxs)(`div`,{className:vt.Content,children:[(0,q.jsx)(`div`,{className:vt.Label,"data-d-disabled":n?``:void 0,"data-d-list-item-content":g?`connected`:m?void 0:``,children:R(e??r,{markInlineText:g})}),t?(0,q.jsx)(`div`,{className:vt.Description,children:R(t)}):null]})]})}function go({marker:e,markerSize:t,maxMarkerSize:n,reserveMarkerLane:r}){return e===`none`?null:typeof e==`string`?(0,q.jsx)(`span`,{"aria-hidden":`true`,className:vt.Marker,"data-d-marker":e}):(0,q.jsx)(`span`,{"aria-hidden":`true`,inert:!0,className:vt.Marker,"data-d-marker":`rich`,"data-d-max-marker-size":r?n:void 0,children:(0,q.jsx)(`span`,{className:vt.RichMarker,"data-d-marker-size":t,children:e})})}function _o(e,t){return Do[Math.min(Do.indexOf(e),Do.indexOf(t))]}function vo(e,t){return Do.find(t=>t===e)??t}function yo(e,t){return e===`solid`&&(bo(t)||typeof t!=`string`)}function bo(e){return e===`bullet`||e===`number`}function xo(e){let t=[],n=e=>{Co.Children.forEach(e,e=>{(0,Co.isValidElement)(e)&&e.type===Co.Fragment?n(e.props.children):t.push(e)})};return n(e),t.map((e,t)=>!(0,Co.isValidElement)(e)||e.key!=null?e:(0,Co.cloneElement)(e,{key:t}))}function So(e){return me(e)?.type===ho}var Co,q,wo,To,Eo,Do,Oo;function ko(){return(ko=e((()=>{Co=i(),z(),ct(),je(),B(),Ne(),q=n(),wo=`md`,To=(0,Co.createContext)(`none`),Eo=(0,Co.createContext)({inheritedMarker:`none`,nativeMarker:null}),Do=[`md`,`lg`,`xl`],Oo=(0,Co.createContext)({maxMarkerSize:wo,reserveMarkerLane:!1})})))()}var Ao,jo;function Mo(){return(Mo=e((()=>{Ao=`_Loading_19erm_1`,jo={Loading:Ao}})))()}function No({label:e=`Loading`,size:t=`md`}){return(0,Po.jsx)(`div`,{"aria-label":e,className:jo.Loading,"data-d-component":`loading`,role:`status`,children:(0,Po.jsx)(_,{size:Fo[t]})})}var Po,Fo;function Io(){return(Io=e((()=>{g(),Mo(),Po=n(),Fo={sm:16,md:20,lg:24}})))()}var Lo,Ro,zo;function Bo(){return(Bo=e((()=>{Lo=`_LoadingIndicator_f7uw0_1`,Ro=`_rotate_f7uw0_14`,zo={LoadingIndicator:Lo,rotate:Ro}})))()}function Vo({color:e=`prose`,size:t=`md`}){let n=(0,Ho.useContext)(ke);return(0,Uo.jsx)(Jt,{className:r(zo.LoadingIndicator,{"text-xs":t===`xs`,"text-sm":t===`sm`,"text-base":t===`md`,"text-lg":t===`lg`,"text-xl":t===`xl`,"text-2xl":t===`2xl`,"text-3xl":t===`3xl`}),"data-d-component":`loading-indicator`,name:`empty-circle`,style:{color:Nt(Lt(n,e))}})}var Ho,Uo;function Wo(){return(Wo=e((()=>{qt(),a(),z(),Ho=i(),B(),Bo(),Uo=n()})))()}function Go({advanceRate:e=0,animationEndTime:t=0,animationStartTime:n=0,currentTime:r=0,data:i,fit:a=`contain`,loop:o=!1,player:s}){let c=(0,Ko.useRef)(null),[l,u]=(0,Ko.useState)();(0,Ko.useEffect)(()=>{let e=c.current;if(!e)return;let t=!0,n,r=e=>{t&&(console.warn(`Failed to load Lottie animation`,e),t=!1,n?.destroy(),u(void 0))};try{s.setIDPrefix(`dil-`);let a={autoloadSegments:!1,autoplay:!1,container:e,loop:!1,renderer:`svg`,rendererSettings:{preserveAspectRatio:`xMidYMid meet`,runExpressions:!1}};n=s.loadAnimation(a);let o=n;o.addEventListener(`DOMLoaded`,()=>{t&&u(o)}),o.addEventListener(`data_failed`,r),o.addEventListener(`error`,r),o.setupAnimation(structuredClone(i))}catch(e){r(e)}return()=>{t&&(t=!1,n?.destroy())}},[i,s]);let d=l?.frameRate??0,f=typeof i?.ip==`number`?i.ip:0,p=typeof i?.op==`number`&&d>0?Math.max(0,(i.op-f)/d):0,m=Math.max(0,Math.min(n,p)),h=Math.max(m,Math.min(t>0?t:p,p)),g=h-m;(0,Ko.useEffect)(()=>{l?.setLoop(o)},[l,o]),(0,Ko.useEffect)(()=>{p>0&&l?.setSegment(f+(g>0?m*d:0),f+(g>0?h:p)*d)},[l,p,h,d,f,m,g]),(0,Ko.useEffect)(()=>{if(!l||p<=0)return;let e=g<=0?Math.max(0,Math.min(m*d,p*d-1)):l.loop?(r%g+g)%g*d:Math.max(0,Math.min(r*d,g*d-1));l.goToAndStop(e,!0)},[l,r,p,d,m,g]),(0,Ko.useEffect)(()=>{l&&(e===0||g*d<=1?l.pause():(l.setSpeed(e),l.play()))},[e,l,r,d,o,m,g]),(0,Ko.useEffect)(()=>{let e=c.current?.querySelector(`svg`);e&&e.setAttribute(`preserveAspectRatio`,a===`fill`?`none`:a===`cover`?`xMidYMid slice`:`xMidYMid meet`)},[l,a]);let _=typeof i?.w==`number`&&i.w>0?i.w:void 0,v=typeof i?.h==`number`&&i.h>0?i.h:void 0;return(0,qo.jsx)(`div`,{"aria-hidden":`true`,ref:c,style:a===`none`&&_!=null&&v!=null?{height:v,left:`50%`,position:`absolute`,top:`50%`,transform:`translate(-50%, -50%)`,width:_}:{height:`100%`,width:`100%`}})}var Ko,qo;function Jo(){return(Jo=e((()=>{Ko=i(),qo=n()})))()}async function Yo(e,t){if(typeof e!=`string`)return e;let n=await fetch(e,{redirect:`error`,referrerPolicy:`no-referrer`,signal:t});if(!n.ok)throw Error(`Animation request failed with ${n.status}`);return n.json()}function Xo(e,t){return typeof e!=`string`&&!(`layers`in e&&Array.isArray(e.layers))&&`light`in e&&`dark`in e?e[t]:e}function Zo(e){return/^data:application\/(?:json|[^;,]+\+json|octet-stream)(?:[;,]|$)/i.test(e)}function Qo(e){return typeof e==`string`&&e.length<=is&&ns.test(e)}function $o(e){return typeof e==`string`&&(/^data:/i.test(e)?!Zo(e):rs.test(e))}function es(e,t){if(!ts(e)||!Array.isArray(e.layers))throw Error(`Invalid Lottie animation data`);if(e.segments!=null&&(!Array.isArray(e.segments)||e.segments.length>0))throw Error(`External Lottie animation segments are not supported`);if(e.slots!=null&&(!ts(e.slots)||Object.keys(e.slots).length>0))throw Error(`Lottie asset slots are not supported`);if(e.assets!=null&&!Array.isArray(e.assets))throw Error(`Invalid Lottie assets`);let n=typeof t==`string`&&!Zo(t)?new URL(t,document.baseURI).href:document.baseURI,r=new Set,i=e.assets?.map(e=>{if(!ts(e))throw Error(`Invalid Lottie asset`);if(Array.isArray(e.layers)&&e.p==null&&e.u==null&&e.sid==null)return e;if(typeof e.p!=`string`||e.u!=null&&typeof e.u!=`string`||e.sid!=null)throw Error(`Invalid Lottie image source`);let t=e.e?e.p:`${e.u??``}${e.p}`,i=t;if(!Qo(t)){let e=new URL(t,n);if(e.protocol!==`https:`&&e.protocol!==`http:`)throw Error(`Unsupported Lottie image URL protocol`);i=e.href,r.add(i)}return{...e,e:1,p:i,u:``}});if(e.fonts!=null&&(!ts(e.fonts)||e.fonts.list!=null&&!Array.isArray(e.fonts.list)||!(e.fonts.list??[]).every(e=>ts(e)&&(e.fPath==null||e.fPath===``))))throw Error(`External or invalid Lottie fonts are not supported`);return{data:i===void 0?e:{...e,assets:i},imageUrls:[...r]}}function ts(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var ns,rs,is;function as(){return(as=e((()=>{ns=/^data:image\/(?:avif|jpeg|png|webp);base64,/i,rs=/^[^?#]*\.(?:apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#].*)?$/i,is=2097152})))()}function os({sourceUrlGate:e,src:t,...n}){let r=Xo(t,(0,ls.useContext)(ke)),i=(0,us.jsx)(ss,{advanceRate:n.advanceRate,alt:n.alt,animationEndTime:n.animationEndTime,animationStartTime:n.animationStartTime,aspectRatio:n.aspectRatio,assetUrlGate:n.assetUrlGate,currentTime:n.currentTime,fit:n.fit,height:n.height,loop:n.loop,maxHeight:n.maxHeight,maxWidth:n.maxWidth,minHeight:n.minHeight,minWidth:n.minWidth,radius:n.radius,source:r,width:n.width});return e&&typeof r==`string`&&!/^data:/i.test(r)?(0,us.jsx)(e,{url:r,children:i}):i}function ss({advanceRate:e,alt:n,animationEndTime:r,animationStartTime:i,aspectRatio:a,assetUrlGate:s,currentTime:c,fit:l=`contain`,height:u,loop:d,maxHeight:f,maxWidth:p,minHeight:m,minWidth:h,radius:g,source:_,width:v}){let y=(0,ls.useContext)(xe),b=(0,ls.useMemo)(()=>JSON.stringify(_),[_]),x=$o(_),S=typeof _==`string`&&(/^data:/i.test(_)?!Zo(_)&&!Qo(_):y),[C,w]=(0,ls.useState)(),T=!S&&C?.serializedSource===b?C:void 0;(0,ls.useEffect)(()=>{if(w(void 0),S||x)return;let e=new AbortController;return(async()=>{let n=JSON.parse(b),[r,i]=await Promise.all([Yo(n,e.signal),o(()=>import(`./lottie_light-ed2aa08ba8d4.js`).then(e=>t(e.default,1)),__vite__mapDeps([0,1,2]),import.meta.url)]);e.signal.aborted||w({...es(r,n),player:i.default,serializedSource:b})})().catch(t=>{e.signal.aborted||console.warn(`Failed to load Lottie animation`,t)}),()=>e.abort()},[S,x,b]);let E=cs({width:v,height:u,aspectRatio:a},typeof _==`string`?T?.data:_),D;return x&&typeof _==`string`&&!S?D=(0,us.jsx)(`img`,{alt:``,"aria-hidden":`true`,referrerPolicy:`no-referrer`,src:_,style:{height:`100%`,objectFit:l,width:`100%`}}):T&&!(y&&T.imageUrls.length>0)&&(D=(0,us.jsx)(Go,{advanceRate:e,animationEndTime:r,animationStartTime:i,currentTime:c,data:T.data,fit:l,loop:d,player:T.player}),s&&T.imageUrls.length>0&&(D=(0,us.jsx)(s,{urls:T.imageUrls,children:D}))),(0,us.jsx)(`div`,{"aria-label":n,"data-d-component":`lottie`,role:n?`img`:void 0,style:{...Pt(g),...E,maxHeight:f,maxWidth:p,minHeight:m,minWidth:h,overflow:`hidden`,position:`relative`},children:D})}function cs({width:e,height:t,aspectRatio:n},r){let i={width:e,height:t,aspectRatio:jt(n)};if(e!==void 0&&t!==void 0||(e!==void 0||t!==void 0)&&i.aspectRatio!==void 0)return i;let a=r?.w,o=r?.h;return typeof a!=`number`||!Number.isFinite(a)||a<=0||typeof o!=`number`||!Number.isFinite(o)||o<=0||(e!==void 0||t!==void 0?i.aspectRatio=a/o:(i.width=a,i.aspectRatio===void 0&&(i.height=o))),i}var ls,us;function ds(){return(ds=e((()=>{z(),ls=i(),Jo(),as(),B(),us=n(),s()})))()}function fs({children:e,streaming:t=!1}){return(0,ps.jsx)(`div`,{"data-d-component":`markdown`,children:(0,ps.jsx)(k,{animateHeight:!0,includeMath:!0,streaming:t,children:e??``})})}var ps;function ms(){return(ms=e((()=>{w(),ps=n()})))()}var hs;function gs(){return(gs=e((()=>{hs={Math:`_Math_1j17l_1`}})))()}function _s({block:e=!1,value:t}){return(0,vs.jsx)(b,{block:e,className:hs.Math,"data-d-block":e?``:void 0,"data-d-component":`math`,value:t})}var vs;function ys(){return(ys=e((()=>{ee(),gs(),vs=n()})))()}var bs,xs,Ss;function Cs(){return(Cs=e((()=>{bs=`_Trigger_afxn4_1`,xs=`_TriggerBlock_afxn4_23`,Ss={Trigger:bs,TriggerBlock:xs}})))()}function ws({children:e,hoverOpenDelay:t,open:n,showOnHover:r}){return(0,Os.jsx)(M,{hoverOpenDelay:t,open:n,showOnHover:r,children:e})}function Ts({block:e=!1,children:t,onClick:n,role:i=`button`}){let a=ze(),o=(0,Ds.useContext)(Qe),s=e?`div`:`span`;return(0,Os.jsx)(M.Trigger,{children:(0,Os.jsx)(s,{className:r(Ss.Trigger,e&&Ss.TriggerBlock),"data-d-component":`popover-trigger`,"data-d-inline":e?void 0:``,"data-d-inline-text":!e&&o?``:void 0,onClick:e=>{e.stopPropagation(),a(ot[`popover-trigger`],Fe(n))},onKeyDown:i===`presentation`?void 0:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),e.currentTarget.click())},role:i,tabIndex:i===`presentation`?void 0:0,children:t})})}function Es({align:e,children:t,side:n,sideOffset:r,width:i}){return(0,Os.jsx)(M.Content,{align:e,"data-d-component":`popover-content`,minWidth:`auto`,side:n,sideOffset:r,width:i,children:t})}var Ds,Os;function ks(){return(ks=e((()=>{ne(),z(),a(),Ds=i(),He(),Cs(),xt(),Os=n()})))()}var As,js,Ms;function Ns(){return(Ns=e((()=>{As=`_PulseIndicator_13jn9_1`,js=`_pulse_13jn9_47`,Ms={PulseIndicator:As,pulse:js}})))()}function Ps({color:e,duration:t,endScale:n,pulseColor:r,size:i=12,startOpacity:a}){let o=(0,Fs.useContext)(ke);return(0,Is.jsx)(`span`,{className:Ms.PulseIndicator,"data-d-component":`pulse-indicator`,style:l({"pulse-color":Nt(Lt(o,e)),"pulse-duration":t?`${t}ms`:void 0,"pulse-end-scale":n?String(n):void 0,"pulse-size":i,"pulse-start-opacity":a==null?void 0:String(a),"pulse-wave-color":Nt(Lt(o,r??e))})})}var Fs,Is;function Ls(){return(Ls=e((()=>{c(),z(),Fs=i(),B(),Ns(),Is=n()})))()}var Rs,zs;function Bs(){return(Bs=e((()=>{Rs=`_Reveal_jkjqz_2`,zs={Reveal:Rs}})))()}var Vs,Hs,Us,Ws;function Gs(){return(Gs=e((()=>{Vs=`_Root_17824_1`,Hs=`_Item_17824_22`,Us=`_Content_17824_46`,Ws={Root:Vs,Item:Hs,Content:Us}})))()}function Ks(e){let t=e.replace(/[^a-zA-Z0-9_-]/gu,e=>`\\${e.codePointAt(0).toString(16)} `),n=`[data-id~="${t}"]:not(template, :scope [data-dil-response] *)`,r=`.${zs.Reveal}[data-d-reveal-for="${t}"]:not(:hover, :focus-within)`;return`
    @media (hover: hover) and (pointer: fine) {
      @scope ([data-dil-response]) to ([data-dil-response]) {
        :scope:has(${n}):not(:has(${n}:is(:hover, :focus-within))) {
          ${r} {
            opacity: 0;
            pointer-events: none;
          }
          .${Ws.Content}:has(> ${r}) {
            pointer-events: none;
          }
        }
      }
    }
  `}function qs({children:e,targetId:t}){return(0,Js.jsxs)(`div`,{className:zs.Reveal,"data-d-reveal-for":t,children:[e,oe(t)&&!t.includes(`\0`)&&(0,Js.jsx)(`style`,{children:Ks(t)})]})}var Js;function Ys(){return(Ys=e((()=>{I(),Bs(),Gs(),Js=n()})))()}function Xs({"aria-label":e,children:t,disabled:n,id:r,hideIndicator:i,required:a,value:o}){return(0,Zs.jsx)(j.Item,{"aria-label":e,"data-d-component":`radio`,disabled:n,id:r,hideIndicator:i,required:a,value:o,children:t})}var Zs;function Qs(){return(Qs=e((()=>{D(),Zs=n()})))()}function $s(e,t=!0){let n=e.target;if(e.defaultPrevented||!(n instanceof HTMLButtonElement)||n.getAttribute(`role`)!==`radio`||n.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let r=n.closest(`[data-d-component="radio-group"], [data-d-component="segmented-control"]`);if(r!==e.currentTarget||r.closest(`[role="toolbar"]`))return;let i=r.matches(`[role="radiogroup"]`)?r:r.querySelector(`[role="radiogroup"], [role="group"]`);if(!i)return;let a=getComputedStyle(i).direction===`rtl`,o;switch(e.key){case`ArrowLeft`:o=a?1:-1;break;case`ArrowRight`:o=a?-1:1;break;case`ArrowUp`:o=-1;break;case`ArrowDown`:o=1;break;default:return}let s=Array.from(i.querySelectorAll(`button[role="radio"]:not([disabled])`)).filter(e=>e.closest(`[data-d-component="radio-group"], [data-d-component="segmented-control"]`)===r),c=s.indexOf(n)+o,l=s[t?(c+s.length)%s.length:c];e.preventDefault(),e.stopPropagation(),l&&(l.focus(),l.getAttribute(`aria-checked`)!==`true`&&l.click())}var ec,tc;function nc(){return(nc=e((()=>{ec=`_RadioGroup_n6708_1`,tc={RadioGroup:ec}})))()}function rc(e){let{captureInteraction:t,runInteraction:n}=_e(),[r,i]=(0,ac.useState)(null),[a,o]=(0,ac.useState)(`ltr`);(0,ac.useLayoutEffect)(()=>{let e=r?.parentElement;if(!e)return;let t=()=>{o(getComputedStyle(e).direction===`rtl`?`rtl`:`ltr`)};t();let n=new MutationObserver(t);return n.observe(e.closest(`[dir]`)??e,{attributes:!0,attributeFilter:[`dir`],characterData:!0,childList:!0,subtree:!0}),()=>n.disconnect()},[r]);let{children:s,defaultValue:c,disabled:l,direction:u=`row`,label:d,name:f,onChange:p,options:m,required:h,spacing:g,value:_}=e,v=c??(`defaultValue`in e?void 0:m?.[0]?.value??``),y=ic(u);return(0,oc.jsx)(j,{ref:i,"aria-label":d??f??`Options`,asChild:!0,className:tc.RadioGroup,"data-d-component":`radio-group`,defaultValue:_==null?v:void 0,disabled:l,dir:a,direction:y,name:f,onChange:e=>n({...ot[`radio-group`],value:e},Fe(p,e)),onClickCapture:e=>{l||mt(e)||t({...ot[`radio-group`],value:Re(e,m)??_??c})},required:h,spacing:g,value:_,children:(0,oc.jsx)(`div`,{dir:void 0,onKeyDownCapture:$s,children:m?.map(e=>(0,oc.jsx)(Xs,{disabled:e.disabled,value:e.value,children:e.description?(0,oc.jsxs)(`span`,{children:[(0,oc.jsx)(`span`,{children:e.label}),(0,oc.jsx)(pt,{color:`secondary`,size:`sm`,children:e.description})]}):e.label},e.value))??s})})}function ic(e){return e===`vertical`||e===`col`?`col`:`row`}var ac,oc;function sc(){return(sc=e((()=>{D(),ac=i(),z(),et(),Qs(),nc(),xt(),oc=n()})))()}var cc;function lc(){return(lc=e((()=>{cc=`// @ts-check

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
`})))()}var uc;function dc(){return(dc=e((()=>{lc(),uc=cc})))()}var fc;function pc(){return(pc=e((()=>{fc=`'sha256-0qPQ8TbRMhIKuxrQHW6yy8DsXNh2it03McoHfWW1F7w='`})))()}function mc(e,t){if(typeof e!=`object`||!e)return!1;let n=e;return n.type===`link.activate`&&n.version===1&&n.channelToken===t&&typeof n.token==`string`}var hc,gc,_c,vc,yc,bc;function xc(){return(xc=e((()=>{dc(),pc(),hc=`html{color-scheme:light dark}body{margin:0;padding:0;overflow-wrap:anywhere;font:14px/1.5 ui-sans-serif,system-ui,sans-serif}a[data-oai-link-token]{cursor:pointer;text-decoration:underline;text-underline-offset:2px}`,gc=`'sha256-imuDaJTFRRz5n5LmzTCR6fKNDVbyBMuRlkVtFY4dBK8='`,_c=e=>[`default-src 'none'`,`base-uri 'none'`,`form-action 'none'`,`object-src 'none'`,`frame-src 'none'`,`child-src 'none'`,`connect-src 'none'`,`font-src 'none'`,e.length===0?`img-src 'none'`:`img-src https:`,`media-src 'none'`,`worker-src 'none'`,`manifest-src 'none'`,`script-src ${fc}`,`script-src-elem ${fc}`,`script-src-attr 'none'`,`style-src ${gc}`,`style-src-elem ${gc}`,`style-src-attr 'unsafe-inline'`].join(`; `),vc=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),yc=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),bc=(e,t,n=[],r=!1)=>{let i=r?n:[],a=JSON.stringify(i);return[`<!doctype html><html><head>`,`<meta http-equiv="Content-Security-Policy" content="${vc(_c(i))}">`,`<meta name="referrer" content="no-referrer">`,`<meta name="oai-email-html-channel-token" content="${vc(e)}">`,`<style>${hc}</style>`,`</head><body>`,`<template id="email-html-source">${yc(t)}</template>`,`<template id="email-html-images">${yc(a)}</template>`,`<div id="email-html-content"></div>`,`<script>${uc}<\/script>`,`</body></html>`].join(``)}})))()}function Sc(e){return typeof e==`object`&&!!e}function Cc(e,t){return Object.keys(e).length===t.length&&t.every(t=>Object.prototype.hasOwnProperty.call(e,t))}function wc(e,t){if(typeof e!=`string`||!Ec(e,Ic))return!1;let n=Lc.exec(e);if(Tc(e)||n==null||n[1].includes(`@`))return!1;try{let n=new URL(e);return t.has(n.protocol)&&n.username.length===0&&n.password.length===0}catch{return!1}}function Tc(e){if(Rc.test(e))return!0;for(let t=0;t<e.length;t+=1){let n=e.charCodeAt(t);if(n<=31||n>=127&&n<=159)return!0}return!1}function Ec(e,t){return e.length<=t&&Dc(e)<=t}function Dc(e){if(typeof TextEncoder<`u`)return new TextEncoder().encode(e).byteLength;let t=0;for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r<128)t+=1;else if(r<2048)t+=2;else if(r>=55296&&r<=56319){let r=e.charCodeAt(n+1);r>=56320&&r<=57343?(t+=4,n+=1):t+=3}else t+=3}return t}function Oc(e,t){try{return Ec(JSON.stringify(e),t)}catch{return!1}}function kc(e,t){if(typeof document>`u`)return!1;try{let n=document.createElement(`template`);n.innerHTML=e;let r=n.content.querySelectorAll(`[data-oai-link-token]`);return r.length===t.length&&t.every((e,t)=>{let n=r.item(t);return n?.localName===`a`&&n.getAttribute(`data-oai-link-token`)===e.token})}catch{return!1}}function Ac(e){if(!Sc(e)||!Cc(e,[`fragment`,`links`])&&!Cc(e,[`fragment`,`links`,`images`])||typeof e.fragment!=`string`||!Ec(e.fragment,Nc)||e.fragment.trim().length===0||!Array.isArray(e.links)||e.links.length>Pc||Object.hasOwn(e,`images`)&&(!Array.isArray(e.images)||e.images.length>Fc))return;let t=[];for(let[n,r]of e.links.entries()){if(!Sc(r)||!Cc(r,[`token`,`url`])||r.token!==`l${n}`||!wc(r.url,zc))return;t.push({token:r.token,url:r.url})}if(!kc(e.fragment,t))return;let n=[],r=Array.isArray(e.images)?e.images:[];for(let[e,t]of r.entries()){if(!Sc(t)||!Cc(t,[`token`,`url`])||t.token!==`i${e}`||!wc(t.url,Bc))return;n.push({token:t.token,url:t.url})}let i={fragment:e.fragment,links:t,images:n};return Oc(e,Mc)?i:void 0}function jc(e){try{return Ac(e)}catch{return}}var Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc;function Vc(){return(Vc=e((()=>{Mc=786432,Nc=262144,Pc=256,Fc=256,Ic=2048,Lc=/^https?:\/\/([^/?#]+)/i,Rc=/\s/,zc=new Set([`http:`,`https:`]),Bc=new Set([`https:`])})))()}function Hc({preview:e,labels:t,...n}){let r=(0,Wc.useMemo)(()=>jc(e),[e]);return r?(0,Gc.jsx)(Uc,{viewProps:{...n,labels:t,preview:r}}):(0,Gc.jsx)(lt,{color:`secondary`,children:e===void 0?t.loading:t.unavailable})}function Uc({viewProps:e}){let{preview:t,labels:n,onOpenLink:r,contentScale:i=1,title:a=`HTML preview`,height:o=360,width:s=`100%`,...c}=e,l=(0,Wc.useRef)(null),[u,d]=(0,Wc.useState)(!1),f=Number.isFinite(i)&&i>0?i:1;return(0,Wc.useLayoutEffect)(()=>{let e=l.current;if(!e)return;let n=crypto.randomUUID(),i=new AbortController;if(r&&t.links.length>0){let a=new Map(t.links.map(({token:e,url:t})=>[e,t]));window.addEventListener(`message`,t=>{if(t.source!==e.contentWindow||t.origin!==`null`)return;let o=t.data;if(!mc(o,n))return;let s=a.get(o.token);s!=null&&r(s,i.signal)},{signal:i.signal})}return e.srcdoc=bc(n,t.fragment,t.images,u),()=>{i.abort(),e.removeAttribute(`srcdoc`)}},[u,r,t]),(0,Gc.jsxs)(Je,{gap:2,width:s,children:[t.images.length>0&&!u&&(0,Gc.jsx)(Ee,{justify:`center`,children:(0,Gc.jsx)(Kn,{size:`sm`,color:`secondary`,variant:`outline`,onClick:()=>d(!0),children:n.showImages})}),(0,Gc.jsx)(Ge,{as:`div`,className:oa.Root,component:`read-only-html-view`,height:o,width:`100%`,layout:c,children:(0,Gc.jsx)(`iframe`,{ref:l,title:a,className:oa.Frame,sandbox:`allow-scripts`,referrerPolicy:`no-referrer`,style:{width:`${100/f}%`,maxWidth:`none`,height:`${100/f}%`,transform:`scale(${f})`,transformOrigin:`top left`}})})]})}var Wc,Gc;function Kc(){return(Kc=e((()=>{Wc=i(),Ae(),Jn(),Ze(),sa(),pe(),nt(),xc(),Vc(),Gc=n()})))()}function qc({block:e,children:t}){return(0,Yc.jsx)(`div`,{className:Ws.Root,"data-d-component":`stack`,"data-block":e||void 0,children:t})}function Jc({children:e,placement:t=`center-center`,inset:n=0,decorative:r=!1}){let[i,a]=t.split(`-`);return(0,Yc.jsx)(`div`,{"aria-hidden":r||void 0,className:Ws.Item,"data-d-component":`stack-item`,"data-horizontal":a,"data-vertical":i,inert:r||void 0,style:{inset:Mt(Number.isFinite(Number(n))?Number(n):n)},children:(0,Yc.jsx)(`div`,{className:Ws.Content,children:e})})}var Yc;function Xc(){return(Xc=e((()=>{B(),Gs(),Yc=n()})))()}var Zc,Qc,$c,el,tl,nl;function rl(){return(rl=e((()=>{Zc=`_Frame_1xwjf_1`,Qc=`_Layer_1xwjf_9`,$c=`_Bitmaps_1xwjf_15`,el=`_Loading_1xwjf_23`,tl=`_Full_1xwjf_28`,nl={Frame:Zc,Layer:Qc,Bitmaps:$c,Loading:el,Full:tl}})))()}function il({upgradeToFullRes:e=!1,sourceIdentity:t,sourcePending:n,...r}){return e?(0,Y.jsx)(ol,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourceIdentity:t,sourcePending:n,children:r.children}):(0,Y.jsx)(al,{actionOverlay:r.actionOverlay,imageFrameComponent:r.imageFrameComponent,imageContentComponent:r.imageContentComponent,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,hoverZoom:r.hoverZoom,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,imageFrameRef:r.imageFrameRef,loadedOverlay:r.loadedOverlay,position:r.position,radius:r.radius,searchImage:r.searchImage,sourceIdentity:t,sourcePending:n,secondaryAction:r.secondaryAction,width:r.width,children:r.children})}function al({actionOverlay:e,alt:t,aspectRatio:n,background:r,bitmapBlendMode:i,children:a,containOutsideAspectRatio:o,contentCropFit:s,fallback:c,fit:l=`cover`,frame:u,height:d,hideOnFailure:p,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,onLoad:y,onError:b,onImageLoad:x,onImageError:S,onImageFallback:C,imageFrameRef:w,imageFrameComponent:T,imageContentComponent:E,loadedOverlay:D,position:ee,radius:O,searchImage:k,sourcePending:A=!1,sourceIdentity:j,secondaryAction:te,width:M}){let ne=typeof k==`object`&&!!k,N=ne?k:ml,re=N.content_url??``,ie=N.thumbnail_url??``,P=re||ie,F=re&&ie&&re!==ie?ie:``,[ae,oe]=(0,J.useState)(),I=P===ae&&F?F:P,se=(0,J.useRef)(null),L=(0,J.useRef)(!0),ce=(0,J.useRef)(null),le=(0,J.useRef)(null),ue=j??JSON.stringify([P,F]);(0,J.useLayoutEffect)(()=>(L.current=!0,()=>{L.current=!1}),[]),(0,J.useLayoutEffect)(()=>{le.current!==ue&&(le.current=ue,ce.current=null)},[ue]);let de=f(e=>{L.current&&ce.current==null&&(ce.current=e,e===`loaded`?y?.():b?.())});(0,J.useEffect)(()=>{ne&&!A&&(!P||ae===P&&!F)&&de(`error`)},[ae,F,ne,P,de,ue,A]),(0,J.useEffect)(()=>{oe(void 0)},[P]);let fe=(0,J.useMemo)(()=>cl(n),[n]),[R,pe]=(0,J.useState)(),[me,he]=(0,J.useState)(null);(0,J.useEffect)(()=>{let e=se.current;e?.getAttribute(`src`)===I&&e.complete&&e.naturalWidth>0&&de(`loaded`)},[I,de,ue]),(0,J.useLayoutEffect)(()=>{let e=se.current;if(l!==`cover`||fe||!e||e.getAttribute(`src`)!==I){pe(void 0);return}let t=()=>{let t=ul(e);pe(e=>e?.width===t?.width&&e?.height===t?.height?e:t)};if(t(),typeof ResizeObserver>`u`)return;let n=new ResizeObserver(t);return n.observe(e),()=>{n.disconnect()}},[fe,l,me,I]);let ge=(0,J.useCallback)(e=>{L.current&&e.currentTarget.getAttribute(`src`)===I&&(I===P&&(oe(P),F)?C?.():((I!==P||!A)&&de(`error`),S?.(e)))},[F,C,S,P,de,A,I]),_e=N.thumbnail_size??N.content_size,ve=ee??(l===`cover`?ll(N.thumbnail_crop_info,_e,fe??R):void 0);return(0,Y.jsx)(ro,{actionOverlay:typeof e==`function`?e(I):e,imageFrameComponent:T,imageContentComponent:E,alt:t??N.title??``,aspectRatio:n,background:r,bitmapBlendMode:i,containOutsideAspectRatio:o,contentCropFit:s,contentCrop:(I===re?N.content_presentation:N.thumbnail_presentation)??void 0,fallback:c,fit:l,frame:u,height:d,hideOnFailure:p,hoverZoom:m,maxHeight:h,maxWidth:g,minHeight:_,minWidth:v,imageFrameRef:w,loadedOverlay:D,imageRef:se,onImageError:ge,onImageLoad:e=>{L.current&&e.currentTarget.getAttribute(`src`)===I&&(he(e.currentTarget),de(`loaded`),x?.(e))},position:ve,radius:O,src:I,secondaryAction:te,width:M,children:a})}function ol({sourceIdentity:e,children:t,imageFrameRef:n,...r}){let i=(0,J.useContext)(xe),a=(0,J.useContext)($a),o=r.searchImage,s=e??JSON.stringify([o?.content_url,o?.thumbnail_url]),c=r.hoverZoom&&r.imageFrameComponent&&r.imageContentComponent,l=c?r.imageFrameComponent:`div`;return i?t==null?null:(0,Y.jsx)(St,{height:r.height,width:r.width,minHeight:r.minHeight,minWidth:r.minWidth,maxHeight:r.maxHeight,maxWidth:r.maxWidth,aspectRatio:r.aspectRatio,radius:r.radius,background:r.background,children:t}):(0,Y.jsxs)(l,{ref:n,className:`${G.Image} ${G.LoadingFrame} ${nl.Frame}${r.actionOverlay?` group/search-image`:``}`,"data-d-component":`image`,"data-d-frame":r.frame?``:void 0,"data-d-hover-zoom":r.hoverZoom&&!c?``:void 0,"data-d-host-hover":c?``:void 0,style:{...Pt(r.radius),aspectRatio:jt(r.aspectRatio),width:r.width,height:r.height,minWidth:r.minWidth,minHeight:r.minHeight,maxWidth:r.maxWidth,maxHeight:r.maxHeight},children:[(0,Y.jsx)(`div`,{className:nl.Loading,children:(0,Y.jsx)(Ba,{height:`100%`,width:`100%`})}),(0,Y.jsx)(sl,{actionOverlay:a?void 0:r.actionOverlay,alt:r.alt,aspectRatio:r.aspectRatio,background:r.background,bitmapBlendMode:r.bitmapBlendMode,containOutsideAspectRatio:r.containOutsideAspectRatio,contentCropFit:r.contentCropFit,fallback:r.fallback,fit:r.fit,frame:r.frame,height:r.height,hideOnFailure:r.hideOnFailure,maxHeight:r.maxHeight,maxWidth:r.maxWidth,minHeight:r.minHeight,minWidth:r.minWidth,onLoad:r.onLoad,onError:r.onError,onImageLoad:r.onImageLoad,onImageError:r.onImageError,onImageFallback:r.onImageFallback,loadedOverlay:r.loadedOverlay,imageContentComponent:c?r.imageContentComponent:void 0,position:r.position,radius:r.radius,searchImage:r.searchImage,secondaryAction:r.secondaryAction,width:r.width,sourcePending:r.sourcePending,children:t},s)]})}function sl({actionOverlay:e,children:t,searchImage:n,loadedOverlay:r,imageContentComponent:i,fallback:a,sourcePending:o,onLoad:s,onError:c,onImageLoad:l,onImageError:u,onImageFallback:d,...p}){let m=i??`div`,h=typeof n==`object`&&!!n,g=h?n:void 0,_=g?.thumbnail_url||``,v=g?.content_url||``,y=_||v,[b,x]=(0,J.useState)(),[S,C]=(0,J.useState)(),w=b?.src===y?b.state:`pending`,T=S?.src===v?S.state:`pending`,E=(0,J.useRef)(!0),D=(0,J.useRef)(null),ee=(0,J.useRef)(!1),O=(0,J.useRef)(void 0),k=!!(_&&v&&v!==_),A=h&&(!y||w===`failed`)&&!o&&(!k||T===`failed`);(0,J.useLayoutEffect)(()=>(E.current=!0,()=>{E.current=!1}),[]);let j=f(e=>{E.current&&D.current==null&&(D.current=e,e===`loaded`?s?.():c?.())});(0,J.useEffect)(()=>{A&&(j(`error`),O.current&&!ee.current&&D.current!==`loaded`&&(ee.current=!0,u?.(O.current)))},[A,u,j]);function te(e){ee.current||(ee.current=!0,l?.(e))}let M={...p,frame:!1,height:`100%`,width:`100%`,minHeight:0,minWidth:0,maxHeight:void 0,maxWidth:void 0,radius:`none`,hideOnFailure:!A||a!=null||p.hideOnFailure};return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(m,{className:nl.Bitmaps,children:[(0,Y.jsx)(`div`,{className:nl.Layer,"aria-hidden":T===`loaded`||A||void 0,"data-d-progressive-settled":w===`loaded`||T===`loaded`||A?``:void 0,style:{visibility:T===`loaded`?`hidden`:void 0},children:(0,Y.jsx)(al,{alt:M.alt,aspectRatio:M.aspectRatio,background:M.background,bitmapBlendMode:M.bitmapBlendMode,containOutsideAspectRatio:M.containOutsideAspectRatio,contentCropFit:M.contentCropFit,fit:M.fit,frame:M.frame,height:M.height,hideOnFailure:M.hideOnFailure,maxHeight:M.maxHeight,maxWidth:M.maxWidth,minHeight:M.minHeight,minWidth:M.minWidth,position:M.position,radius:M.radius,secondaryAction:M.secondaryAction,width:M.width,searchImage:{...g,content_url:y,content_presentation:_?g?.thumbnail_presentation:g?.content_presentation,thumbnail_url:``},onLoad:()=>{E.current&&(x({src:y,state:`loaded`}),j(`loaded`))},onError:()=>{E.current&&x({src:y,state:`failed`})},onImageLoad:e=>{E.current&&te(e)},onImageError:e=>{E.current&&(O.current={...e,currentTarget:e.currentTarget},(k||o)&&d?.())}},y)}),k&&w!==`pending`?(0,Y.jsx)(`div`,{className:nl.Full,"data-d-progressive-full":``,style:{opacity:+(T===`loaded`)},"aria-hidden":T!==`loaded`||void 0,children:(0,Y.jsx)(al,{alt:M.alt,aspectRatio:M.aspectRatio,background:M.background,bitmapBlendMode:M.bitmapBlendMode,containOutsideAspectRatio:M.containOutsideAspectRatio,contentCropFit:M.contentCropFit,fit:M.fit,frame:M.frame,height:M.height,hideOnFailure:M.hideOnFailure,maxHeight:M.maxHeight,maxWidth:M.maxWidth,minHeight:M.minHeight,minWidth:M.minWidth,position:M.position,radius:M.radius,secondaryAction:M.secondaryAction,width:M.width,searchImage:{...g,content_url:v,thumbnail_url:``},onLoad:()=>{E.current&&(C({src:v,state:`loaded`}),j(`loaded`))},onError:()=>{E.current&&C({src:v,state:`failed`})},onImageLoad:e=>{E.current&&te(e)},onImageError:e=>{E.current&&(O.current={...e,currentTarget:e.currentTarget})}},v)}):null]}),A&&a!=null?(0,Y.jsx)(`div`,{className:nl.Full,children:a}):null,r!=null&&(w===`loaded`||T===`loaded`)?r:null,t==null?null:(0,Y.jsx)(`div`,{className:G.Overlay,children:t}),e!=null&&(T===`loaded`||w===`loaded`)?(0,Y.jsx)(io,{children:typeof e==`function`?e(T===`loaded`?v:y):e}):null]})}function cl(e){if(typeof e==`number`)return Number.isFinite(e)&&e>0?{height:1,width:e}:void 0;if(typeof e!=`string`)return;let t=e.trim().match(/^([0-9]+(?:\.[0-9]+)?)\s*[:/]\s*([0-9]+(?:\.[0-9]+)?)$/);if(!t)return;let n=Number(t[1]),r=Number(t[2]);return dl(n)&&dl(r)?{height:r,width:n}:void 0}function ll(e,t,n){if(!e||!t||!n||!dl(t.width)||!dl(t.height)||!dl(n.width)||!dl(n.height)||!Number.isFinite(e.center_x_percent)||!Number.isFinite(e.center_y_percent))return;let r=t.width/t.height,i=n.width/n.height;if(Math.abs(r-i)<1e-6)return;let a=fl(e.center_x_percent),o=fl(e.center_y_percent),s=50,c=50;if(r>i){let e=r-i;s=pl((a*r-i/2)/e*100,0,100)}else{let e=1/r,t=1/i,n=e-t;c=pl((o*e-t/2)/n*100,0,100)}return`${s.toFixed(1)}% ${c.toFixed(1)}%`}function ul(e){let t=e?.getBoundingClientRect();return t&&dl(t.width)&&dl(t.height)?{height:t.height,width:t.width}:void 0}function dl(e){return Number.isFinite(e)&&e>0}function fl(e){return pl(e>1?e/100:e,0,1)}function pl(e,t,n){return Math.min(Math.max(e,t),n)}var J,Y,ml;function hl(){return(hl=e((()=>{z(),p(),J=i(),so(),Et(),Ma(),Ha(),no(),B(),rl(),Y=n(),ml={}})))()}var gl,_l;function vl(){return(vl=e((()=>{gl=`_SegmentedControl_3w620_1`,_l={SegmentedControl:gl}})))()}function yl({block:e,defaultValue:t,disabled:n,label:r,onChange:i,options:a,pill:o=!0,size:s=`lg`,value:c,variant:l=`ghost`}){let{captureInteraction:u,runInteraction:d}=_e(),f=t??a[0]?.value??``,[p,m]=(0,bl.useState)(f),h=c!=null,g=h?c:p;return(0,xl.jsx)(`div`,{className:_l.SegmentedControl,"data-d-component":`segmented-control`,onKeyDownCapture:e=>$s(e,!1),onClickCapture:e=>{n||mt(e)||u({...ot[`segmented-control`],value:Re(e,a)??c??t})},children:(0,xl.jsx)(en,{"aria-label":r??`Options`,block:e,disabled:n,onChange:e=>{h||m(e),d({...ot[`segmented-control`],value:e},Fe(i,e))},pill:o,size:s,value:g,variant:l,children:a.map(e=>(0,xl.jsx)(en.Option,{"aria-label":e.label,disabled:e.disabled,value:e.value,children:e.label},e.value))})})}var bl,xl;function Sl(){return(Sl=e((()=>{$t(),z(),bl=i(),vl(),xt(),xl=n()})))()}var Cl,wl,Tl;function El(){return(El=e((()=>{Cl=`_Shimmer_1e9vk_1`,wl=`_shimmer_1e9vk_85`,Tl={Shimmer:Cl,shimmer:wl}})))()}function Dl({children:e,color:t,italic:n,lineThrough:r,maxLines:i,minLines:a,size:o=`md`,tabularNums:s,textAlign:c,truncate:l,weight:u,width:d}){return(0,Ol.jsx)(Ct,{as:`span`,className:Tl.Shimmer,color:t,"data-d-component":`shimmer-text`,fontStyle:n?`italic`:void 0,maxLines:i,minLines:a,size:o,tabularNums:s,textAlign:c,textDecoration:r?`line-through`:void 0,truncate:l,weight:u,width:d,children:e})}var Ol;function kl(){return(kl=e((()=>{El(),Ke(),Ol=n()})))()}var Al,jl;function Ml(){return(Ml=e((()=>{Al=`_Spacer_1001o_1`,jl={Spacer:Al}})))()}function Nl({minSize:e}){return(0,Pl.jsx)(`div`,{className:jl.Spacer,"data-d-component":`spacer`,style:l({"w-spacer-min-size":e})})}var Pl;function Fl(){return(Fl=e((()=>{c(),Ml(),Pl=n()})))()}function Il(e,t=0,n,r,i){let a=document.implementation.createHTMLDocument(``).createElementNS(Gl,`svg`),o=e.props;return a.setAttribute(`font-family`,n?.fontFamily||`sans-serif`),a.setAttribute(`font-weight`,n?.fontWeight||`normal`),Hl(a,o,t,n?.color),zl(a,o.children,t,r),r?.finish(a),i?.finish(a),new XMLSerializer().serializeToString(a)}function Ll(e){let t=e.props;if(t[`aria-hidden`]===!0||t[`aria-hidden`]===`true`||t.role===`presentation`||t.role===`none`)return``;if(typeof t[`aria-label`]==`string`)return t[`aria-label`];let n=``;return Bl(t.children,e=>{n||(Vl(e)&&e.type===`title`?n=Rl(e.children):(0,Wl.isValidElement)(e)&&e.type===`title`&&(n=Rl(e.props.children)))}),n}function Rl(e){let t=``;return Bl(e,e=>{typeof e==`string`||typeof e==`number`?t+=String(e):Vl(e)?t+=Rl(e.children):(0,Wl.isValidElement)(e)&&(t+=Rl(e.props.children))}),t}function zl(e,t,n,r,i=``){let a=0;Bl(t,t=>{let o=a++;if(typeof t==`string`||typeof t==`number`){e.append(e.ownerDocument.createTextNode(String(t)));return}let s,c,l,u;if(Vl(t))s=t.type,c=t.props,l=t.children,u=t.key;else if((0,Wl.isValidElement)(t)&&typeof t.type==`string`)s=t.type,c=t.props,l=c.children,u=t.key;else return;let d=e.ownerDocument.createElementNS(Gl,s),f=`${i}/${JSON.stringify([s,u==null?c.id==null?o:[`id`,c.id]:[`key`,u]])}`;Hl(d,c,n),zl(d,l,n,r?.visitChildren(s)?r:void 0,f),r?.visit(d,f),e.append(d)})}function Bl(e,t){if(Array.isArray(e))for(let n of e)Bl(n,t);else(0,Wl.isValidElement)(e)&&e.type===Wl.Fragment?Bl(e.props.children,t):e!=null&&typeof e!=`boolean`&&t(e)}function Vl(e){if(typeof e!=`object`||!e||Array.isArray(e))return!1;let t=e;return typeof t.type==`string`&&t.props!=null&&typeof t.props==`object`&&!Array.isArray(t.props)&&Array.isArray(t.children)}function Hl(e,t,n,r){for(let[i,a]of Object.entries(t)){if(i===`children`||i===`dangerouslySetInnerHTML`||i===`ref`||i.startsWith(`on`)||a==null||a===!1)continue;if(i===`style`&&typeof a==`object`){let t=Object.entries(a).filter(([,e])=>typeof e==`number`||typeof e==`string`).map(([e,t])=>`${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}:${e===`color`&&r?r:String(t)}`);t.length&&e.setAttribute(`style`,t.join(`;`));continue}if(typeof a!=`boolean`&&typeof a!=`number`&&typeof a!=`string`)continue;let t=Jl[i]??i;t===`xlink:href`?e.setAttributeNS(Kl,t,String(a)):i===`begin`&&ql.has(e.localName)?e.setAttribute(t,Ul(a,n)):e.setAttribute(t,String(a))}n>0&&ql.has(e.localName)&&!e.hasAttribute(`begin`)&&e.setAttribute(`begin`,`${-n}s`)}function Ul(e,t){return String(e).split(`;`).map(e=>{let n=e.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(ms|s)?$/);return n?`${Number(n[1])/(n[2]===`ms`?1e3:1)-t}s`:e}).join(`;`)}var Wl,Gl,Kl,ql,Jl;function Yl(){return(Yl=e((()=>{Wl=i(),Gl=`http://www.w3.org/2000/svg`,Kl=`http://www.w3.org/1999/xlink`,ql=new Set([`animate`,`animateMotion`,`animateTransform`,`set`]),Jl={alignmentBaseline:`alignment-baseline`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,dominantBaseline:`dominant-baseline`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontStyle:`font-style`,fontWeight:`font-weight`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,pointerEvents:`pointer-events`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strokeDasharray:`stroke-dasharray`,strokeDashoffset:`stroke-dashoffset`,strokeLinecap:`stroke-linecap`,strokeLinejoin:`stroke-linejoin`,strokeMiterlimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,textAnchor:`text-anchor`,vectorEffect:`vector-effect`,wordSpacing:`word-spacing`,xlinkHref:`xlink:href`}})))()}var Xl,Zl,Ql,$l;function eu(){return(eu=e((()=>{Xl=250,Zl=new Set([`circle`,`ellipse`,`foreignObject`,`image`,`line`,`path`,`polygon`,`polyline`,`rect`,`text`,`use`]),Ql=new Set([`clipPath`,`defs`,`desc`,`filter`,`linearGradient`,`marker`,`mask`,`pattern`,`radialGradient`,`script`,`style`,`symbol`,`title`]),$l=class{previous;animateNewElements;now;mode;starts=new Map;newKeys=new Set;hasReveals=!1;constructor(e,t,n,r=`active`){this.previous=e,this.animateNewElements=t,this.now=n,this.mode=r}visit(e,t){if(!Zl.has(e.localName)||e.localName===`text`&&!e.textContent?.trim()||e.localName===`path`&&!e.getAttribute(`d`)?.trim())return;let n=this.previous.has(t),r=this.mode===`disabled`?null:n?this.previous.get(t):this.animateNewElements?this.now:null;this.starts.set(t,r),!n&&r!==null&&this.newKeys.add(t),!(r===null||this.now-r>=Xl)&&(this.hasReveals=!0,e.setAttribute(`data-d-svg-reveal`,``),e.style.setProperty(`--d-svg-reveal-delay`,`${-Math.max(0,this.now-r)}ms`))}visitChildren(e){return!Ql.has(e)&&!Zl.has(e)}finish(e){if(!this.hasReveals||this.mode!==`active`)return;let t=e.ownerDocument.createElementNS(e.namespaceURI,`style`);t.textContent=`
@keyframes d-svg-enter { from { opacity: 0; } }
:where([data-d-svg-reveal]) {
  animation: d-svg-enter ${Xl}ms ease-out var(--d-svg-reveal-delay) backwards;
}`,e.prepend(t)}commit(e){for(let t of this.newKeys)this.starts.set(t,e);return this.starts}}})))()}var tu,nu;function ru(){return(ru=e((()=>{tu=/^translate\(\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*(?:[,\s]\s*([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?))?\s*\)$/i,nu=class{previous;active;positions=new Map;hasChanges=!1;constructor(e,t){this.previous=e,this.active=t}finish(e){let t=e.querySelectorAll(`g[id][transform]`),n=new Set,r=new Set;for(let e of t)n.has(e.id)&&r.add(e.id),n.add(e.id);for(let n of t){if(r.has(n.id))continue;let t=tu.exec(n.getAttribute(`transform`)??``);if(!t||n.querySelector(`animateTransform`))continue;let i=Number(t[1]),a=Number(t[2]??0);if(!Number.isFinite(i)||!Number.isFinite(a))continue;let o=`${i} ${a}`;this.positions.set(n.id,o);let s=this.previous.get(n.id);if(s==null||s===o||(this.hasChanges=!0,!this.active))continue;let c=e.ownerDocument.createElementNS(e.namespaceURI,`animateTransform`);c.setAttribute(`attributeName`,`transform`),c.setAttribute(`type`,`translate`),c.setAttribute(`from`,s),c.setAttribute(`to`,o),c.setAttribute(`dur`,`0.22s`),c.setAttribute(`calcMode`,`spline`),c.setAttribute(`keyTimes`,`0;1`),c.setAttribute(`keySplines`,`0.42 0 0.58 1`),c.setAttribute(`fill`,`freeze`),n.append(c)}}}})))()}function iu({svg:e}){let t=(0,X.useContext)(ye),n=(0,X.useContext)(Ot),r=(0,X.useRef)(new Map),i=(0,X.useSyncExternalStore)(cu,lu,()=>!0),[a]=(0,X.useState)(t),o=(0,X.useRef)(new Map),s=(0,X.useRef)(null),c=(0,X.useRef)(null),l=(0,X.useRef)(!0),u=(0,X.useRef)(null),d=(0,X.useRef)(null),[f,p]=(0,X.useState)(()=>au(e));(0,X.useEffect)(()=>(l.current=!0,()=>{l.current=!1,d.current=null,u.current=null}),[]);let m=(0,X.useCallback)(function e(){if(!l.current||u.current||!d.current)return;let{svg:t,animateNewElements:i}=d.current;d.current=null;let a=s.current===null?0:(performance.now()-s.current)/1e3,f=c.current?getComputedStyle(c.current):void 0,m=new $l(o.current,i,performance.now(),lu()?`disabled`:`preload`),h=n?new nu(r.current,!1):void 0,g=su(Il(t,a,f,m,h)),_=new Image;u.current=_,_.decoding=`async`,_.src=g,(typeof _.decode==`function`?_.decode():Promise.resolve()).then(()=>{if(!l.current||u.current!==_)return;u.current=null;let n=performance.now(),a=g;(m.hasReveals||h?.hasChanges&&!lu())&&(m=new $l(o.current,i,n,lu()?`disabled`:`active`),a=su(Il(t,s.current===null?0:(n-s.current)/1e3,f,m,h?new nu(r.current,!lu()):void 0))),h?r.current=h.positions:r.current.clear(),s.current??=n,o.current=m.commit(n),p(au(t,a)),e()},()=>{u.current===_&&(u.current=null,e())})},[n]);(0,X.useEffect)(()=>{d.current={svg:e,animateNewElements:!i&&(t||d.current?.animateNewElements===!0||a&&s.current===null)},m()},[t,m,i,e,a]);let h=e.props,{source:g,aspectRatio:_,width:v,height:y,alt:b}=f,x=v==null||v===`auto`,S=y==null||y===`auto`;return(0,uu.jsx)(`img`,{ref:c,alt:b,"data-d-component":`svg`,decoding:`async`,src:g,style:{aspectRatio:_?`auto ${_}`:void 0,color:h.style?.color,height:y,width:_&&x&&S?`100%`:v}})}function au(e,t){let{viewBox:n,width:r,height:i}=e.props;return{source:t,width:r,height:i,aspectRatio:ou(n),alt:Ll(e)}}function ou(e){if(typeof e!=`string`)return;let t=e.replace(/^[\t\n\r ]+|[\t\n\r ]+$/g,``).split(/[\t\n\r ]*,[\t\n\r ]*|[\t\n\r ]+/);if(t.length!==4||!t.every(e=>du.test(e)))return;let n=t.map(Number),[,,r,i]=n;if(!(!n.every(Number.isFinite)||r<=0||i<=0))return`${r} / ${i}`}function su(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}function cu(e){let t=window.matchMedia?.(fu);return t?.addEventListener(`change`,e),()=>t?.removeEventListener(`change`,e)}function lu(){return window.matchMedia?.(fu).matches===!0}var X,uu,du,fu;function pu(){return(pu=e((()=>{z(),X=i(),Yl(),eu(),ru(),uu=n(),du=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/,fu=`(prefers-reduced-motion: reduce), (forced-colors: active)`})))()}function mu({children:e,color:t=`prose`,fill:n=`currentColor`,height:r,preserveAspectRatio:i,size:a,stroke:o,strokeLinecap:s,strokeLinejoin:c,strokeWidth:l,viewBox:u,width:d}){let f=(0,hu.useContext)(ke),p=Nt(Lt(f,t));return(0,gu.jsx)(iu,{svg:(0,gu.jsx)(`svg`,{"data-d-component":`svg`,fill:n,height:r??a,preserveAspectRatio:i,stroke:o,strokeLinecap:s,strokeLinejoin:c,strokeWidth:l,style:{color:p},viewBox:u,width:d??a,xmlns:`http://www.w3.org/2000/svg`,children:e})})}var hu,gu;function _u(){return(_u=e((()=>{z(),hu=i(),B(),pu(),gu=n(),mu.childHandling=`opaque`})))()}function vu(e){let t=Number(e??1);return Number.isFinite(t)&&t>0?t:1}function yu({columnSizing:e=`auto`,columns:t=[],children:n,dividers:r=!0,emptyLabel:i=`No rows`,rows:a=[],stickyHeader:o=!1}){let s=a,c=Ou.Children.count(n)>0,l=(0,Ou.useRef)(null);return(0,Z.jsxs)(`div`,{className:zt.TableFrame,"data-d-column-sizing":e,"data-d-component":`table`,children:[(0,Z.jsx)(`div`,{className:zt.TableViewport,"data-d-table-viewport":!0,ref:l,children:(0,Z.jsx)(`table`,{className:zt.Table,"data-d-column-sizing":e,"data-d-dividers":r?``:void 0,"data-d-sticky-header":o?``:void 0,style:{tableLayout:e===`equal`?`fixed`:`auto`},children:c?Eu(n):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`thead`,{children:(0,Z.jsx)(`tr`,{children:t.map(e=>(0,Z.jsx)(`th`,{"data-d-align":e.align,"data-d-component":`table-cell`,"data-d-has-width":e.width==null?void 0:``,scope:`col`,style:{width:e.width},children:e.label},e.key))})}),(0,Z.jsx)(`tbody`,{children:s.length===0?(0,Z.jsx)(`tr`,{children:(0,Z.jsx)(`td`,{className:zt.EmptyCell,colSpan:t.length||1,children:i})}):s.map((e,n)=>(0,Z.jsx)(`tr`,{children:t.map(t=>{let n=wu(e[t.key]);return(0,Z.jsx)(`td`,{"data-d-align":t.align,"data-d-break-long-token":Tu(n)?``:void 0,"data-d-component":`table-cell`,children:n},t.key)})},n))})]})})}),(0,Z.jsx)(sr,{viewportRef:l})]})}function bu({children:e,header:t=!1,rowDivider:n}){let r=(0,Ou.useContext)(ke);return(0,Z.jsx)(t?`thead`:`tbody`,{"data-d-component":`table-section`,"data-d-row-divider":n==null?void 0:``,style:n==null?void 0:l({"table-section-row-divider":Rt(r,n).border}),children:e})}function xu({children:e,header:t=!1,label:n,labelColSpan:r}){let i=(0,Ou.useContext)(ku),a=t||i,o=(0,Z.jsx)(ku.Provider,{value:a,children:(0,Z.jsx)(`tr`,{className:zt.Row,"data-d-component":`table-row`,children:e})});if(!n)return o;let s=r??Cu(e);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`tr`,{className:zt.Row,"data-d-component":`table-row-label`,children:(0,Z.jsx)(`td`,{className:zt.RowLabelCell,colSpan:s,children:(0,Z.jsx)(`div`,{className:zt.RowLabelContent,children:(0,Z.jsx)(`span`,{className:zt.RowLabelText,children:n})})})}),o]})}function Su({align:e,children:t,colSpan:n,header:r=!1,padding:i,rowSpan:a,vAlign:o=`start`,width:s}){let c=(0,Ou.useContext)(ku),l=r||c,u=l?`th`:`td`,d=!l&&Tu(t);return(0,Z.jsx)(u,{"data-d-align":e,"data-d-break-long-token":d?``:void 0,"data-d-component":`table-cell`,"data-d-has-width":s==null?void 0:``,"data-d-valign":o,colSpan:n,rowSpan:a,scope:l?`col`:void 0,style:{...Bt(i),width:s},children:t})}function Cu(e){let t=0;for(let n of Ou.Children.toArray(e)){let e=me(n);(0,Ou.isValidElement)(e)&&e.type===Su&&(t+=vu(e.props.colSpan))}return Math.max(t,1)}function wu(e){return e==null?``:typeof e==`boolean`?e?`Yes`:`No`:String(e)}function Tu(e){for(let t of Ou.Children.toArray(e))if((typeof t==`string`||typeof t==`number`)&&Au.test(String(t))||(0,Ou.isValidElement)(t)&&Tu(t.props.children))return!0;return!1}function Eu(e){let t=Ou.Children.toArray(e);if(t.some(Du)){let e=[],n=[],r=()=>{n.length!==0&&(e.push((0,Z.jsx)(`tbody`,{children:n},`loose-rows-${e.length}`)),n=[])};return t.forEach(t=>{Du(t)?(r(),e.push(t)):n.push(t)}),r(),e}return(0,Z.jsx)(`tbody`,{children:e})}function Du(e){return me(e)?.type===bu}var Ou,Z,ku,Au;function ju(){return(ju=e((()=>{z(),c(),Ou=i(),B(),fr(),Ft(),Z=n(),ku=(0,Ou.createContext)(!1),Au=/\S{25,}/u})))()}var Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu;function Wu(){return(Wu=e((()=>{Mu=`_YouTubeEmbed_1arkp_1`,Nu=`_Iframe_1arkp_6`,Pu=`_EnhancedYouTubeEmbed_1arkp_7`,Fu=`_Player_1arkp_8`,Iu=`_Preview_1arkp_10`,Lu=`_Thumbnail_1arkp_11`,Ru=`_Loading_1arkp_12`,zu=`_ProviderBadge_1arkp_40`,Bu=`_ProviderIcon_1arkp_72`,Vu=`_Duration_1arkp_80`,Hu=`_DurationLoading_1arkp_96`,Uu={YouTubeEmbed:Mu,Iframe:Nu,EnhancedYouTubeEmbed:Pu,Player:Fu,Preview:Iu,Thumbnail:Lu,Loading:Ru,ProviderBadge:zu,ProviderIcon:Bu,Duration:Vu,DurationLoading:Hu,"duration-shimmer":`_duration-shimmer_1arkp_134`}})))()}function Gu(e){return typeof e==`object`&&!!e&&`Player`in e&&typeof e.Player==`function`}function Ku(e){let t=window;return Gu(t.YT)?Promise.resolve(t.YT):Ju||(Ju=new Promise((n,r)=>{let i=document.querySelector(`script[src="${qu}"]`),a=i??document.createElement(`script`),o=t.onYouTubeIframeAPIReady,s=()=>{window.clearTimeout(u),a.removeEventListener(`error`,c),t.onYouTubeIframeAPIReady===l&&(t.onYouTubeIframeAPIReady=o)},c=()=>{s(),i||a.remove(),r(Error(`YouTube IFrame Player API could not load`))},l=()=>{try{o?.()}finally{Gu(t.YT)&&(s(),n(t.YT))}},u=window.setTimeout(c,15e3);t.onYouTubeIframeAPIReady=l,a.addEventListener(`error`,c,{once:!0}),i||(a.src=qu,a.async=!0,e&&(a.nonce=e),document.head.appendChild(a))}).catch(e=>{throw Ju=void 0,e}),Ju)}var qu,Ju;function Yu(){return(Yu=e((()=>{qu=`https://www.youtube.com/iframe_api`})))()}function Xu({aspectRatio:e=`16 / 9`,hoverToPlay:t=!1,maxWidth:n=`100%`,onHover:r,onPlayerError:i,onThumbnailError:a,scriptNonce:o,showDurationBadge:s=!1,showThumbnail:c=!1,title:l=`YouTube video player`,videoId:u,width:d=`100%`}){let f=(0,Q.useContext)(xe),[p,m]=(0,Q.useState)(null);return typeof u!=`string`||!/^[A-Za-z0-9_-]{11}$/.test(u)?null:(0,$.jsx)(`div`,{className:Uu.YouTubeEmbed,"data-d-component":`youtube`,style:{aspectRatio:e,maxWidth:n,width:d},children:f?(0,$.jsx)(`div`,{"aria-label":l,role:`img`,style:{alignItems:`center`,backgroundColor:`var(--color-surface-secondary)`,color:`var(--color-text-secondary)`,display:`flex`,height:`100%`,justifyContent:`center`,width:`100%`},children:(0,$.jsx)(`span`,{"aria-hidden":`true`,style:{fontSize:`2.5rem`},children:`▶`})}):c||s||t||r||i?(0,$.jsx)(Zu,{hoverToPlay:t,onHover:r,onPlayerError:i,onThumbnailError:a,scriptNonce:o,showDurationBadge:s,showThumbnail:c,title:l,videoId:u},`${u}:${c}:${s}:${t}`):(0,$.jsx)(`iframe`,{className:Uu.Iframe,"data-loaded":p===u?``:void 0,onLoad:()=>m(u),allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0,referrerPolicy:`strict-origin-when-cross-origin`,src:`https://www.youtube.com/embed/${u}`,title:l})})}function Zu({hoverToPlay:e,onHover:t,onPlayerError:n,onThumbnailError:r,scriptNonce:i,showDurationBadge:a,showThumbnail:o,title:s,videoId:c}){let[l,u]=(0,Q.useState)(()=>typeof window<`u`&&(!window.matchMedia(`(hover: hover) and (pointer: fine)`).matches||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1));(0,Q.useEffect)(()=>{let e=window.matchMedia(`(hover: hover) and (pointer: fine)`),t=()=>{u(!e.matches||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1)};return t(),e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]);let d=e&&!l,p=o||e,m=(0,Q.useRef)(null),h=(0,Q.useRef)(null),g=(0,Q.useRef)(!1),[_,v]=(0,Q.useState)(!1),[y,b]=(0,Q.useState)(!0),[x,S]=(0,Q.useState)(null),[C,w]=(0,Q.useState)(`maxresdefault`),[T,E]=(0,Q.useState)(!1),D=f(e=>n?.(e)),ee=f(e=>{e.title=s,p&&(e.tabIndex=-1),e.referrerPolicy=`strict-origin-when-cross-origin`}),O=f(()=>{g.current=!1,h.current?.pauseVideo(),v(!1)});(0,Q.useEffect)(()=>{let e=m.current;if(!e)return;v(!1);let t=!1,n=!1,r,o,s,l=!1,u=()=>{window.clearInterval(o),window.clearTimeout(s)},f=e=>{if(!a)return!0;let t=e.getDuration();return!Number.isFinite(t)||t<=0?!1:(S(Math.round(t)),u(),!0)},p=document.createElement(`iframe`),_=new URLSearchParams({autoplay:`0`,controls:d?`0`:`1`,enablejsapi:`1`,playsinline:`1`,origin:window.location.origin});d&&_.set(`mute`,`1`),p.src=`https://www.youtube.com/embed/${c}?${_}`,p.allow=`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,p.allowFullscreen=!0,ee(p),e.appendChild(p),Ku(i).then(e=>{t||(a&&(s=window.setTimeout(()=>{l=!0,u(),b(!1)},1e4)),r=new e.Player(p,{videoId:c,width:`100%`,height:`100%`,playerVars:{autoplay:0,controls:+!d,playsinline:1,origin:window.location.origin},events:{onReady:({target:e})=>{t||n||h.current||(h.current=e,d&&e.mute(),!f(e)&&!l&&(o=window.setInterval(()=>{f(e)},250)),d&&g.current&&e.playVideo())},onStateChange:({target:e,data:r})=>{t||n||(f(e),d&&(r===1&&!g.current&&e.pauseVideo(),v(r===1&&g.current)))},onError:({data:e})=>{t||n||(n=!0,u(),b(!1),d&&O(),D(e))},onAutoplayBlocked:()=>{!t&&d&&O()}}}),ee(r.getIframe()))}).catch(()=>{t||(u(),b(!1))});let y=()=>{document.visibilityState===`hidden`&&O()};return d&&(document.addEventListener(`visibilitychange`,y),window.addEventListener(`blur`,O)),()=>{t=!0,u(),document.removeEventListener(`visibilitychange`,y),window.removeEventListener(`blur`,O),g.current=!1,h.current=null,r?.destroy(),e.replaceChildren()}},[d,O,ee,D,i,a,c]),(0,Q.useEffect)(()=>{let e=m.current?.querySelector(`iframe`);e&&(e.title=s)},[s]);let k=e=>{let t=e.currentTarget;if(e.type===`error`||t.naturalWidth===120&&t.naturalHeight===90){if(C===`maxresdefault`){w(`hqdefault`);return}w(null),r?.()}E(!0)},A=x===null?null:`${Math.floor(x/60)}:${String(x%60).padStart(2,`0`)}`;return(0,$.jsxs)(`div`,{className:Uu.EnhancedYouTubeEmbed,"aria-label":p?s:void 0,role:p?`img`:void 0,"data-d-click-through":p?``:void 0,"data-d-compact":l?``:void 0,onClickCapture:d?O:void 0,onPointerEnter:d||t?e=>{e.pointerType!==`touch`&&(t?.(),d&&(g.current=!0,h.current?.mute(),h.current?.playVideo()))}:void 0,onPointerLeave:d?O:void 0,children:[(0,$.jsx)(`div`,{"aria-hidden":p||void 0,className:Uu.Player,ref:m}),o&&(0,$.jsxs)(`div`,{"aria-hidden":!0,className:Uu.Preview,hidden:_,children:[C&&(0,$.jsx)(`img`,{alt:``,className:Uu.Thumbnail,draggable:!1,onError:k,onLoad:k,referrerPolicy:`no-referrer`,src:`https://img.youtube.com/vi/${c}/${C}.jpg`}),!l&&!T&&(0,$.jsx)(`div`,{className:Uu.Loading,children:(0,$.jsx)(Ba,{width:`100%`,height:`100%`,duration:1e3})})]}),a&&(0,$.jsx)(`div`,{"aria-hidden":!0,className:Uu.ProviderBadge,hidden:_,children:(0,$.jsxs)(mn,{color:`secondary`,variant:`solid`,size:l?`sm`:`lg`,children:[(0,$.jsx)(Gt,{className:Uu.ProviderIcon}),(0,$.jsx)(`span`,{className:Uu.Duration,children:A?(0,$.jsx)(`span`,{children:A}):y?(0,$.jsx)(`span`,{className:Uu.DurationLoading}):null})]})})]})}var Q,$;function Qu(){return(Qu=e((()=>{z(),p(),Wt(),Q=i(),vn(),Ha(),Wu(),Yu(),$=n()})))()}var $u,ed;function td(){return(td=e((()=>{un(),vn(),An(),Nn(),Et(),Jn(),et(),Ve(),Pr(),Ur(),qe(),li(),Si(),Ei(),Ze(),dt(),Xe(),yt(),ii(),Qi(),at(),ta(),ve(),va(),he(),so(),ce(),Oe(),po(),ko(),Io(),Ha(),Wo(),ds(),ms(),ys(),ks(),Ls(),no(),Ys(),Qs(),sc(),pe(),Kc(),Xc(),hl(),Se(),Sl(),kl(),rt(),Fl(),_u(),ju(),nt(),it(),de(),Hn(),Qu(),He(),le(),$u={animate:rn,"animate-group":an,"animate-item":on,badge:mn,bento:Dn,blockquote:jn,bold:Be,box:St,button:Kn,card:$e,carousel:pr,"carousel-item":mr,"carousel-media-item":hr,caption:pt,checkbox:Br,"chip-input":_t,code:Ci,col:Je,"date-picker":We,divider:bt,favicon:ti,flow:Ue,"flow-item":ut,form:$i,grid:Pe,"grid-item":Le,"html-view":ca,icon:Ie,image:ro,input:Dt,label:ge,link:lo,list:mo,"list-item":ho,loading:No,"loading-indicator":Vo,lottie:os,italic:De,markdown:fs,math:_s,popover:ws,"popover-content":Es,"popover-trigger":Ts,"pulse-indicator":Ps,pressable:Xa,reveal:qs,radio:Xs,"read-only-html-view":Hc,"radio-group":rc,row:Ee,stack:qc,"stack-item":Jc,"search-image":il,select:be,"segmented-control":yl,"shimmer-text":Dl,slider:L,spacer:Nl,strikethrough:se,svg:mu,table:yu,"table-cell":Su,"table-row":xu,"table-section":bu,text:lt,textarea:we,title:Me,tooltip:In,transition:sn,underline:Ye},ed={...$u,celebration:_i,"citation-pill":ai,"flashcard-flip":Yi,"loading-block":Ba,youtube:Xu}})))()}export{Es as a,Ji as c,Kc as i,Fn as l,td as n,ks as o,Hc as r,Vi as s,ed as t,Hn as u};
//# sourceMappingURL=src-9b80e62b7464.js.map