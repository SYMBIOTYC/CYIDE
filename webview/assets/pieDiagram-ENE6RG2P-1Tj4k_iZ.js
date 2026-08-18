import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{Pt as t}from"./src--5vrm9cX.js";import{n,r}from"./chunk-Y2CYZVJY-C9L_9xF4.js";import{m as i,p as a,t as o}from"./src-DVePe7UO.js";import{U as s,W as c,a as l,c as u,f as d,j as f,q as p,v as m,w as h,x as g,y as _}from"./chunk-WYO6CB5R-Dc_stTtn.js";import{Y as v,nt as y}from"./src-BgZN5txD.js";import{n as b,t as x}from"./chunk-VAUOI2AC-CwR_vcLk.js";import{n as S,t as C}from"./chunk-JWPE2WC7-Blh_Vn-A.js";import{n as w,r as T}from"./mermaid-parser.core-CFbYfGtG.js";import{d as E,i as D,m as O}from"./chunk-ICXQ74PX-C5wlQkqS.js";var k,A,j,M,N,P,F,I,L,R,z;e((()=>{C(),x(),E(),f(),a(),r(),w(),o(),k=d.pie,A={sections:new Map,showData:!1,config:k},j=A.sections,M=A.showData,N=structuredClone(k),P={getConfig:n(()=>structuredClone(N),`getConfig`),clear:n(()=>{j=new Map,M=A.showData,l()},`clear`),setDiagramTitle:p,getDiagramTitle:h,setAccTitle:c,getAccTitle:_,setAccDescription:s,getAccDescription:m,addSection:n(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);j.has(e)||(j.set(e,t),i.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:n(()=>j,`getSections`),setShowData:n(e=>{M=e},`setShowData`),getShowData:n(()=>M,`getShowData`)},F=n((e,t)=>{S(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),I={parse:n(async e=>{let t=await T(`pie`,e);i.debug(t),F(t,P)},`parse`)},L=n(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),R=n(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return v().value(e=>e.value).sort(null)(n)},`createPieArcs`),z={parser:I,db:P,renderer:{draw:n((e,n,r,a)=>{i.debug(`rendering pie chart
`+e);let o=a.db,s=g(),c=D(o.getConfig(),s.pie),l=b(n),d=l.append(`g`);d.attr(`transform`,`translate(225,225)`);let{themeVariables:f}=s,[p]=O(f.pieOuterStrokeWidth);p??=2;let m=c.legendPosition,h=c.textPosition,_=c.donutHole>0&&c.donutHole<=.9?c.donutHole:0,v=y().innerRadius(_*185).outerRadius(185),x=y().innerRadius(185*h).outerRadius(185*h),S=d.append(`g`);S.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+p/2).attr(`class`,`pieOuterCircle`);let C=o.getSections(),w=R(C),T=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],E=0;C.forEach(e=>{E+=e});let k=w.filter(e=>(e.data.value/E*100).toFixed(0)!==`0`),A=t(T).domain([...C.keys()]);S.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,v).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return c.highlightSlice===`hover`?t+=` highlightedOnHover`:c.highlightSlice===e.data.label&&(t+=` highlighted`),t}),S.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=d.append(`text`).text(o.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),M=[...C.entries()].map(([e,t])=>({label:e,value:t})),N=d.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let P=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),F=450,I=490,L=M.length*22;switch(m){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-P/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:F+=L,N.attr(`transform`,(e,t)=>`translate(${-P/2-22}, ${t*22-185})`),S.attr(`transform`,()=>`translate(0, ${L+22})`);break;case`bottom`:F+=L,N.attr(`transform`,(e,t)=>{let n=-P/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),S.attr(`transform`,()=>`translate(${P+18+4}, 0)`);break;default:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`});break}let z=j.node()?.getBoundingClientRect().width??0,B=450/2-z/2,V=450/2+z/2,H=Math.min(0,B),U=Math.max(I,V)-H;l.attr(`viewBox`,`${H} 0 ${U} ${F}`),u(l,F,U,c.useMaxWidth)},`draw`)},styles:L}}))();export{z as diagram};
//# sourceMappingURL=pieDiagram-ENE6RG2P-1Tj4k_iZ.js.map