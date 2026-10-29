import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{rS as t,ym as n}from"./app-initial-13f932cb2f13.js";import{t as r}from"./compiler-runtime-2015039f3c68.js";var i,a,o,s,c;function l(){return(l=e((()=>{i=`_Fill_1azzv_1`,a=`_Reveal_1azzv_62`,o=`_Mask_1azzv_8`,s=`_Canvas_1azzv_47`,c={Fill:i,Reveal:a,Mask:o,Canvas:s}})))()}function u(e){let t=(0,m.c)(7),{active:n,reveal:r,shouldReduceMotion:i}=e,a=(0,h.useRef)(null),o,s;t[0]!==n||t[1]!==i?(o=()=>{if(!n)return;let e=a.current;if(e!=null)return d(e,i)},s=[n,i],t[0]=n,t[1]=i,t[2]=o,t[3]=s):(o=t[2],s=t[3]),(0,h.useEffect)(o,s);let l;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,g.jsx)(`span`,{className:c.Mask,children:(0,g.jsx)(`canvas`,{className:c.Canvas,ref:a})}),t[4]=l):l=t[4];let u;return t[5]===r?u=t[6]:(u=(0,g.jsx)(`span`,{"aria-hidden":!0,className:c.Fill,"data-reveal":r,children:l}),t[5]=r,t[6]=u),u}function d(e,t){if(typeof WebGLRenderingContext>`u`||typeof ResizeObserver>`u`)return;let n=e.getContext(`webgl`,{alpha:!0,antialias:!1,depth:!1,powerPreference:`high-performance`,stencil:!1});if(n==null)return;let r=f(n);if(r==null)return;let i=n.createBuffer();if(i==null){n.deleteProgram(r);return}let a=n.getAttribLocation(r,`aPosition`),o=n.getUniformLocation(r,`uResolution`),s=n.getUniformLocation(r,`uTime`),c=performance.now(),l=0;n.useProgram(r),n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,y,n.STATIC_DRAW),n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,0,0);let u=e=>{n.uniform1f(s,e),n.drawArrays(n.TRIANGLES,0,6)},d=()=>{let r=Math.min(window.devicePixelRatio,2),{height:i,width:a}=e.getBoundingClientRect(),s=Math.max(Math.round(a),1),l=Math.max(Math.round(i),1);e.width=Math.round(s*r),e.height=Math.round(l*r),n.viewport(0,0,e.width,e.height),n.uniform2f(o,s,l),u(t?0:(performance.now()-c)/1e3)},p=e=>{l=0,u((e-c)/1e3),l=window.requestAnimationFrame(p)},m=new ResizeObserver(d);return d(),m.observe(e),t||(l=window.requestAnimationFrame(p)),()=>{l!==0&&window.cancelAnimationFrame(l),m.disconnect(),n.deleteBuffer(i),n.deleteProgram(r)}}function f(e){let t=p(e,e.VERTEX_SHADER,_),n=p(e,e.FRAGMENT_SHADER,v);if(t==null||n==null)return t!=null&&e.deleteShader(t),n!=null&&e.deleteShader(n),null;let r=e.createProgram();return r==null?(e.deleteShader(t),e.deleteShader(n),null):(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.deleteShader(t),e.deleteShader(n),e.getProgramParameter(r,e.LINK_STATUS)?r:(e.deleteProgram(r),null))}function p(e,t,n){let r=e.createShader(t);return r==null?null:(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null))}var m,h,g,_,v,y;function b(){return(b=e((()=>{m=r(),h=t(),l(),g=n(),_=`
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,v=`
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uResolution;

  const vec3 COLOR_1 = vec3(0.592, 0.388, 0.945);
  const vec3 COLOR_2 = vec3(0.831, 0.710, 0.953);
  const vec3 COLOR_3 = vec3(0.286, 0.000, 0.404);
  const vec3 COLOR_4 = vec3(0.145, 0.055, 0.478);
  const vec3 COLOR_5 = vec3(0.592, 0.000, 0.996);
  const vec3 COLOR_6 = vec3(0.780, 0.459, 0.914);
  const vec3 COLOR_7 = vec3(0.725, 0.576, 1.000);
  const vec3 COLOR_8 = vec3(0.400, 0.212, 0.820);
  const vec3 COLOR_9 = vec3(0.882, 0.690, 1.000);
  const vec3 COLOR_10 = vec3(0.498, 0.345, 0.957);
  const vec3 COLOR_11 = vec3(0.659, 0.275, 0.910);
  const vec3 COLOR_12 = vec3(0.212, 0.063, 0.400);

  float grain(vec2 uv) {
    vec2 grainUv = uv * uResolution * 0.5;
    return fract(sin(dot(grainUv + uTime, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0;
  }

  float fieldWeight(vec2 point, vec2 center) {
    return exp(-dot(point - center, point - center) * 12.0);
  }

  vec3 fieldColor(vec2 rawUv) {
    const float speed = 1.25;
    vec2 uv = vec2(rawUv.x, 0.40 + rawUv.y * 0.18);
    vec2 spatialScale = vec2(1.55, 1.0);
    vec2 point = uv * spatialScale;
    vec2 center1 = vec2(0.18 + sin(uTime * speed * 0.42) * 0.18, 0.36 + cos(uTime * speed * 0.50) * 0.42) * spatialScale;
    vec2 center2 = vec2(0.34 + cos(uTime * speed * 0.62) * 0.24, 0.62 + sin(uTime * speed * 0.47) * 0.38) * spatialScale;
    vec2 center3 = vec2(0.52 + sin(uTime * speed * 0.38) * 0.28, 0.30 + cos(uTime * speed * 0.58) * 0.36) * spatialScale;
    vec2 center4 = vec2(0.70 + cos(uTime * speed * 0.54) * 0.24, 0.68 + sin(uTime * speed * 0.41) * 0.36) * spatialScale;
    vec2 center5 = vec2(0.88 + sin(uTime * speed * 0.74) * 0.16, 0.36 + cos(uTime * speed * 0.64) * 0.40) * spatialScale;
    vec2 center6 = vec2(0.12 + cos(uTime * speed * 0.48) * 0.20, 0.72 + sin(uTime * speed * 0.70) * 0.30) * spatialScale;
    vec2 center7 = vec2(0.30 + sin(uTime * speed * 0.58) * 0.22, 0.44 + cos(uTime * speed * 0.52) * 0.42) * spatialScale;
    vec2 center8 = vec2(0.46 + cos(uTime * speed * 0.68) * 0.26, 0.72 + sin(uTime * speed * 0.56) * 0.32) * spatialScale;
    vec2 center9 = vec2(0.60 + sin(uTime * speed * 0.44) * 0.28, 0.26 + cos(uTime * speed * 0.60) * 0.38) * spatialScale;
    vec2 center10 = vec2(0.76 + cos(uTime * speed * 0.50) * 0.22, 0.54 + sin(uTime * speed * 0.66) * 0.40) * spatialScale;
    vec2 center11 = vec2(0.92 + sin(uTime * speed * 0.70) * 0.15, 0.66 + cos(uTime * speed * 0.46) * 0.30) * spatialScale;
    vec2 center12 = vec2(0.06 + cos(uTime * speed * 0.40) * 0.14, 0.32 + sin(uTime * speed * 0.60) * 0.40) * spatialScale;
    float weight1 = fieldWeight(point, center1) * (0.7 + 0.3 * sin(uTime * 0.91));
    float weight2 = fieldWeight(point, center2) * (0.7 + 0.3 * cos(uTime * 1.07));
    float weight3 = fieldWeight(point, center3) * (0.7 + 0.3 * sin(uTime * 0.76));
    float weight4 = fieldWeight(point, center4) * (0.7 + 0.3 * cos(uTime * 1.18));
    float weight5 = fieldWeight(point, center5) * (0.7 + 0.3 * sin(uTime * 1.03));
    float weight6 = fieldWeight(point, center6) * (0.7 + 0.3 * cos(uTime * 0.83));
    float weight7 = fieldWeight(point, center7) * (0.7 + 0.3 * sin(uTime * 1.24));
    float weight8 = fieldWeight(point, center8) * (0.7 + 0.3 * cos(uTime * 0.96));
    float weight9 = fieldWeight(point, center9) * (0.7 + 0.3 * sin(uTime * 1.11));
    float weight10 = fieldWeight(point, center10) * (0.7 + 0.3 * cos(uTime * 0.72));
    float weight11 = fieldWeight(point, center11) * (0.7 + 0.3 * sin(uTime * 1.29));
    float weight12 = fieldWeight(point, center12) * (0.7 + 0.3 * cos(uTime * 0.88));
    float totalWeight = max(
      weight1 + weight2 + weight3 + weight4 + weight5 + weight6 +
        weight7 + weight8 + weight9 + weight10 + weight11 + weight12,
      0.0001
    );
    vec3 color = (
      COLOR_1 * weight1 + COLOR_2 * weight2 + COLOR_3 * weight3 +
      COLOR_4 * weight4 + COLOR_5 * weight5 + COLOR_6 * weight6 +
      COLOR_7 * weight7 + COLOR_8 * weight8 + COLOR_9 * weight9 +
      COLOR_10 * weight10 + COLOR_11 * weight11 + COLOR_12 * weight12
    ) / totalWeight;
    color = mix(COLOR_4, color, 0.96);

    return pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(0.9));
  }

  void main() {
    vec3 color = fieldColor(vUv);
    color += grain(vUv) * 0.012;
    color.r += sin(uTime * 0.5) * 0.02;
    color.g += cos(uTime * 0.7) * 0.02;
    color.b += sin(uTime * 0.6) * 0.02;
    color = pow(color, vec3(0.92));

    gl_FragColor = vec4(color, 1.0);
  }
`,y=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1])})))()}b();export{u as ModelPickerPowerSliderMaxFill};
//# sourceMappingURL=max-fill-38b8b7b371d3.js.map