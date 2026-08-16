import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{n as t,r as n}from"./chunk-Y2CYZVJY-C9L_9xF4.js";import{g as r,h as i,t as a}from"./src-C8sOGI-B.js";import{U as o,W as s,a as c,c as l,f as u,j as d,q as f,v as p,w as m,x as h,y as g}from"./chunk-WYO6CB5R-CvrTUja3.js";import{Y as _,nt as v,yn as y}from"./src-B3dWbf0X.js";import{n as b,t as x}from"./chunk-VAUOI2AC-JgT4Wl8k.js";import{n as S,t as C}from"./chunk-JWPE2WC7-Blh_Vn-A.js";import{n as w,r as T}from"./mermaid-parser.core-fy_mH8cO.js";import{d as E,i as D,m as O}from"./chunk-ICXQ74PX-WYXKsSsv.js";var k,A,j,M,N,P,F,I,L,R,z;e((()=>{C(),x(),E(),d(),i(),n(),w(),a(),k=u.pie,A={sections:new Map,showData:!1,config:k},j=A.sections,M=A.showData,N=structuredClone(k),P={getConfig:t(()=>structuredClone(N),`getConfig`),clear:t(()=>{j=new Map,M=A.showData,c()},`clear`),setDiagramTitle:f,getDiagramTitle:m,setAccTitle:s,getAccTitle:g,setAccDescription:o,getAccDescription:p,addSection:t(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);j.has(e)||(j.set(e,t),r.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:t(()=>j,`getSections`),setShowData:t(e=>{M=e},`setShowData`),getShowData:t(()=>M,`getShowData`)},F=t((e,t)=>{S(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),I={parse:t(async e=>{let t=await T(`pie`,e);r.debug(t),F(t,P)},`parse`)},L=t(e=>`
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
`,`getStyles`),R=t(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return _().value(e=>e.value).sort(null)(n)},`createPieArcs`),z={parser:I,db:P,renderer:{draw:t((e,t,n,i)=>{r.debug(`rendering pie chart
`+e);let a=i.db,o=h(),s=D(a.getConfig(),o.pie),c=b(t),u=c.append(`g`);u.attr(`transform`,`translate(225,225)`);let{themeVariables:d}=o,[f]=O(d.pieOuterStrokeWidth);f??=2;let p=s.legendPosition,m=s.textPosition,g=s.donutHole>0&&s.donutHole<=.9?s.donutHole:0,_=v().innerRadius(g*185).outerRadius(185),x=v().innerRadius(185*m).outerRadius(185*m),S=u.append(`g`);S.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+f/2).attr(`class`,`pieOuterCircle`);let C=a.getSections(),w=R(C),T=[d.pie1,d.pie2,d.pie3,d.pie4,d.pie5,d.pie6,d.pie7,d.pie8,d.pie9,d.pie10,d.pie11,d.pie12],E=0;C.forEach(e=>{E+=e});let k=w.filter(e=>(e.data.value/E*100).toFixed(0)!==`0`),A=y(T).domain([...C.keys()]);S.selectAll(`mySlices`).data(k).enter().append(`path`).attr(`d`,_).attr(`fill`,e=>A(e.data.label)).attr(`class`,e=>{let t=`pieCircle`;return s.highlightSlice===`hover`?t+=` highlightedOnHover`:s.highlightSlice===e.data.label&&(t+=` highlighted`),t}),S.selectAll(`mySlices`).data(k).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let j=u.append(`text`).text(a.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),M=[...C.entries()].map(([e,t])=>({label:e,value:t})),N=u.selectAll(`.legend`).data(M).enter().append(`g`).attr(`class`,`legend`);N.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>A(e.label)).style(`stroke`,e=>A(e.label)),N.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>a.getShowData()?`${e.label} [${e.value}]`:e.label);let P=Math.max(...N.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0)),F=450,I=490,L=M.length*22;switch(p){case`center`:N.attr(`transform`,(e,t)=>{let n=22*M.length/2,r=-P/2-22,i=t*22-n;return`translate(`+r+`,`+i+`)`});break;case`top`:F+=L,N.attr(`transform`,(e,t)=>`translate(${-P/2-22}, ${t*22-185})`),S.attr(`transform`,()=>`translate(0, ${L+22})`);break;case`bottom`:F+=L,N.attr(`transform`,(e,t)=>{let n=-P/2-22,r=t*22- -207;return`translate(`+n+`,`+r+`)`});break;case`left`:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(-207,`+(t*22-n)+`)`}),S.attr(`transform`,()=>`translate(${P+18+4}, 0)`);break;default:I+=22+P,N.attr(`transform`,(e,t)=>{let n=22*M.length/2;return`translate(216,`+(t*22-n)+`)`});break}let z=j.node()?.getBoundingClientRect().width??0,B=450/2-z/2,V=450/2+z/2,H=Math.min(0,B),U=Math.max(I,V)-H;c.attr(`viewBox`,`${H} 0 ${U} ${F}`),l(c,F,U,s.useMaxWidth)},`draw`)},styles:L}}))();export{z as diagram};
//# sourceMappingURL=pieDiagram-ENE6RG2P-Cy22Mb1L.js.map