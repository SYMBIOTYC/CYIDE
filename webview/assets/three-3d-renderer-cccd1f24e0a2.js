import{n as e,o as t}from"./rolldown-runtime-2d059c5e81f4.js";import{Tnt as n,gnt as r,mtt as i,ott as a,ynt as o}from"./app-initial-4a1ac6d05078.js";import{m as s,o as c,u as l}from"./learning-block-pointer-label-656b2fcb6aa0.js";import{r as u,t as d}from"./format-coordinate-734ce4ce99ea.js";import{a as f,c as p,d as m,f as h,i as g,n as _,p as v,r as y,u as b}from"./equation-44cf0b1d4b75.js";import{i as ee,t as x}from"./restrictions-e423e45ffc9f.js";import{t as S}from"./extends-df342f7c2e8b.js";import{$i as te,A as ne,H as C,Ha as w,Hi as re,Jn as T,Na as ie,Nt as ae,Qn as oe,Sr as E,T as se,Ua as D,Va as ce,Zn as le,br as O,cn as k,en as A,eo as j,tn as ue,wn as de}from"./three.core-cb39b1271a0d.js";import{r as M,t as fe}from"./three.module-b65ff644899d.js";import{i as N,l as pe,n as me,r as he,s as ge,t as _e}from"./OrbitControls-b8314f108775.js";function ve(e,t,n){let r=Ee.setFromMatrixPosition(e.matrixWorld);r.project(t);let i=n.width/2,a=n.height/2;return[r.x*i+i,-(r.y*a)+a]}function ye(e,t){let n=Ee.setFromMatrixPosition(e.matrixWorld),r=De.setFromMatrixPosition(t.matrixWorld),i=n.sub(r),a=t.getWorldDirection(Oe);return i.angleTo(a)>Math.PI/2}function be(e,t,n,r){let i=Ee.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),ke.set(a.x,a.y),n.setFromCamera(ke,t);let o=n.intersectObjects(r,!0);if(o.length){let e=o[0].distance;return i.distanceTo(n.ray.origin)<e}return!0}function xe(e,t){if(t instanceof O)return t.zoom;if(t instanceof E){let n=Ee.setFromMatrixPosition(e.matrixWorld),r=De.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,a=n.distanceTo(r);return 1/(2*Math.tan(i/2)*a)}return 1}function Se(e,t,n){if(t instanceof E||t instanceof O){let r=Ee.setFromMatrixPosition(e.matrixWorld),i=De.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(i),o=(n[1]-n[0])/(t.far-t.near),s=n[1]-o*t.far;return Math.round(o*a+s)}}function Ce(e,t,n=``){let r=`matrix3d(`;for(let n=0;n!==16;n++)r+=Ae(t[n]*e.elements[n])+(n===15?`)`:`,`);return n+r}function we(e){return e&&typeof e==`object`&&`current`in e}var P,Te,Ee,De,Oe,ke,Ae,je,Me,Ne;function Pe(){return(Pe=e((()=>{P=t(n()),Te=t(r()),M(),N(),Ee=new w,De=new w,Oe=new w,ke=new ce,Ae=e=>Math.abs(e)<1e-10?0:e,je=(e=>t=>Ce(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Me=(e=>(t,n)=>Ce(t,e(n),`translate(-50%,-50%)`))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]),Ne=P.forwardRef(({children:e,eps:t=.001,style:n,className:r,prepend:i,center:a,fullscreen:o,portal:s,distanceFactor:c,sprite:l=!1,transform:u=!1,occlude:d,onOcclude:f,castShadow:p,receiveShadow:m,material:h,geometry:g,zIndexRange:_=[16777271,0],calculatePosition:v=ve,as:y=`div`,wrapperClass:b,pointerEvents:ee=`auto`,...x},te)=>{let{gl:ne,camera:C,scene:re,size:T,raycaster:ie,events:ae,viewport:oe}=pe(),[E]=P.useState(()=>document.createElement(y)),se=P.useRef(null),D=P.useRef(null),ce=P.useRef(0),le=P.useRef([0,0]),O=P.useRef(null),k=P.useRef(null),A=s?.current||ae.connected||ne.domElement.parentNode,j=P.useRef(null),ue=P.useRef(!1),de=P.useMemo(()=>d&&d!==`blending`||Array.isArray(d)&&d.length&&we(d[0]),[d]);P.useLayoutEffect(()=>{let e=ne.domElement;d&&d===`blending`?(e.style.zIndex=`${Math.floor(_[0]/2)}`,e.style.position=`absolute`,e.style.pointerEvents=`none`):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)},[d]),P.useLayoutEffect(()=>{if(D.current){let e=se.current=Te.createRoot(E);if(re.updateMatrixWorld(),u)E.style.cssText=`position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;else{let e=v(D.current,C,T);E.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${e[0]}px,${e[1]}px,0);transform-origin:0 0;`}return A&&(i?A.prepend(E):A.appendChild(E)),()=>{A&&A.removeChild(E),e.unmount()}}},[A,u]),P.useLayoutEffect(()=>{b&&(E.className=b)},[b]);let M=P.useMemo(()=>u?{position:`absolute`,top:0,left:0,width:T.width,height:T.height,transformStyle:`preserve-3d`,pointerEvents:`none`}:{position:`absolute`,transform:a?`translate3d(-50%,-50%,0)`:`none`,...o&&{top:-T.height/2,left:-T.width/2,width:T.width,height:T.height},...n},[n,a,o,T,u]),fe=P.useMemo(()=>({position:`absolute`,pointerEvents:ee}),[ee]);P.useLayoutEffect(()=>{if(ue.current=!1,u){var t;(t=se.current)==null||t.render(P.createElement(`div`,{ref:O,style:M},P.createElement(`div`,{ref:k,style:fe},P.createElement(`div`,{ref:te,className:r,style:n,children:e}))))}else{var i;(i=se.current)==null||i.render(P.createElement(`div`,{ref:te,style:M,className:r,children:e}))}});let N=P.useRef(!0);ge(e=>{if(D.current){C.updateMatrixWorld(),D.current.updateWorldMatrix(!0,!1);let e=u?le.current:v(D.current,C,T);if(u||Math.abs(ce.current-C.zoom)>t||Math.abs(le.current[0]-e[0])>t||Math.abs(le.current[1]-e[1])>t){let t=ye(D.current,C),n=!1;de&&(Array.isArray(d)?n=d.map(e=>e.current):d!==`blending`&&(n=[re]));let r=N.current;if(n){let e=be(D.current,C,ie,n);N.current=e&&!t}else N.current=!t;r!==N.current&&(f?f(!N.current):E.style.display=N.current?`block`:`none`);let i=Math.floor(_[0]/2),a=d?de?[_[0],i]:[i-1,0]:_;if(E.style.zIndex=`${Se(D.current,C,a)}`,u){let[e,t]=[T.width/2,T.height/2],n=C.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:i,left:a,bottom:o,right:s}=C,u=je(C.matrixWorldInverse),d=r?`scale(${n})translate(${Ae(-(s+a)/2)}px,${Ae((i+o)/2)}px)`:`translateZ(${n}px)`,f=D.current.matrixWorld;l&&(f=C.matrixWorldInverse.clone().transpose().copyPosition(f).scale(D.current.scale),f.elements[3]=f.elements[7]=f.elements[11]=0,f.elements[15]=1),E.style.width=T.width+`px`,E.style.height=T.height+`px`,E.style.perspective=r?``:`${n}px`,O.current&&k.current&&(O.current.style.transform=`${d}${u}translate(${e}px,${t}px)`,k.current.style.transform=Me(f,1/((c||10)/400)))}else{let t=c===void 0?1:xe(D.current,C)*c;E.style.transform=`translate3d(${e[0]}px,${e[1]}px,0) scale(${t})`}le.current=e,ce.current=C.zoom}}if(!de&&j.current&&!ue.current){if(u){if(O.current){let e=O.current.children[0];if(e!=null&&e.clientWidth&&e!=null&&e.clientHeight){let{isOrthographicCamera:t}=C;if(t||g)x.scale&&(Array.isArray(x.scale)?x.scale instanceof w?j.current.scale.copy(x.scale.clone().divideScalar(1)):j.current.scale.set(1/x.scale[0],1/x.scale[1],1/x.scale[2]):j.current.scale.setScalar(1/x.scale));else{let t=(c||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;j.current.scale.set(n,r,1)}ue.current=!0}}}else{let t=E.children[0];if(t!=null&&t.clientWidth&&t!=null&&t.clientHeight){let e=1/oe.factor,n=t.clientWidth*e,r=t.clientHeight*e;j.current.scale.set(n,r,1),ue.current=!0}j.current.lookAt(e.camera.position)}}});let me=P.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return P.createElement(`group`,S({},x,{ref:D}),d&&!de&&P.createElement(`mesh`,{castShadow:p,receiveShadow:m,ref:j},g||P.createElement(`planeGeometry`,null),h||P.createElement(`shaderMaterial`,{side:2,vertexShader:me.vertexShader,fragmentShader:me.fragmentShader})))})})))()}var Fe;function Ie(){return(Ie=e((()=>{M(),Fe=parseInt(`179`.replace(/\D+/g,``))})))()}var Le;function Re(){return(Re=e((()=>{Ie(),Le=Fe>=125?`uv1`:`uv2`})))()}var ze,Be,Ve;function He(){return(He=e((()=>{M(),ze=new se,Be=new w,Ve=class extends A{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new ae([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new ae([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new ue(t,6,1);return this.setAttribute(`instanceStart`,new k(n,3,0)),this.setAttribute(`instanceEnd`,new k(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new ue(n,t*2,1);return this.setAttribute(`instanceColorStart`,new k(r,t,0)),this.setAttribute(`instanceColorEnd`,new k(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new j(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new se);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ze.setFromBufferAttribute(t),this.boundingBox.union(ze))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new te),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Be.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Be)),Be.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Be));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}}})))()}var Ue;function We(){return(We=e((()=>{He(),Ue=class extends Ve{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}})))()}var Ge;function Ke(){return(Ke=e((()=>{M(),Ie(),Ge=class extends re{constructor(e){super({type:`LineMaterial`,uniforms:ie.clone(ie.merge([fe.common,fe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Fe>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}})))()}function qe(e,t,n){return z.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),z.multiplyScalar(1/z.w),z.x=it/n.width,z.y=it/n.height,z.applyMatrix4(e.projectionMatrixInverse),z.multiplyScalar(1/z.w),Math.abs(Math.max(z.x,z.y))}function Je(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){R.start.fromBufferAttribute(i,r),R.end.fromBufferAttribute(a,r),R.applyMatrix4(n);let o=new w,s=new w;B.distanceSqToSegment(R.start,R.end,s,o),s.distanceTo(o)<it*.5&&t.push({point:s,pointOnLine:o,distance:B.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[Le]:null})}}function Ye(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;B.at(1,L),L.w=1,L.applyMatrix4(t.matrixWorldInverse),L.applyMatrix4(r),L.multiplyScalar(1/L.w),L.x*=i.x/2,L.y*=i.y/2,L.z=0,$e.copy(L),et.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(F.fromBufferAttribute(s,t),I.fromBufferAttribute(c,t),F.w=1,I.w=1,F.applyMatrix4(et),I.applyMatrix4(et),F.z>u&&I.z>u)continue;if(F.z>u){let e=F.z-I.z,t=(F.z-u)/e;F.lerp(I,t)}else if(I.z>u){let e=I.z-F.z,t=(I.z-u)/e;I.lerp(F,t)}F.applyMatrix4(r),I.applyMatrix4(r),F.multiplyScalar(1/F.w),I.multiplyScalar(1/I.w),F.x*=i.x/2,F.y*=i.y/2,I.x*=i.x/2,I.y*=i.y/2,R.start.copy(F),R.start.z=0,R.end.copy(I),R.end.z=0;let o=R.closestPointToPointParameter($e,!0);R.at(o,tt);let l=T.lerp(F.z,I.z,o),d=l>=-1&&l<=1,f=$e.distanceTo(tt)<it*.5;if(d&&f){R.start.fromBufferAttribute(s,t),R.end.fromBufferAttribute(c,t),R.start.applyMatrix4(a),R.end.applyMatrix4(a);let r=new w,i=new w;B.distanceSqToSegment(R.start,R.end,i,r),n.push({point:i,pointOnLine:r,distance:B.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[Le]:null})}}}var Xe,Ze,Qe,F,I,L,$e,et,R,tt,nt,rt,z,B,it,at;function ot(){return(ot=e((()=>{M(),He(),Ke(),Re(),Xe=new D,Ze=new w,Qe=new w,F=new D,I=new D,L=new D,$e=new w,et=new le,R=new de,tt=new w,nt=new se,rt=new te,z=new D,at=class extends oe{constructor(e=new Ve,t=new Ge({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Ze.fromBufferAttribute(t,e),Qe.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Ze.distanceTo(Qe);let i=new ue(r,2,1);return e.setAttribute(`instanceDistanceStart`,new k(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new k(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;B=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;it=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),rt.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?it*.5:qe(r,Math.max(r.near,rt.distanceToPoint(B.origin)),s.resolution),rt.radius+=c,B.intersectsSphere(rt)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),nt.copy(o.boundingBox).applyMatrix4(a);let l;l=n?it*.5:qe(r,Math.max(r.near,nt.distanceToPoint(B.origin)),s.resolution),nt.expandByScalar(l),B.intersectsBox(nt)!==!1&&(n?Je(this,t):Ye(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Xe),this.material.uniforms.resolution.value.set(Xe.z,Xe.w))}}})))()}var st;function ct(){return(ct=e((()=>{ot(),We(),Ke(),st=class extends at{constructor(e=new Ue,t=new Ge({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}}})))()}var V,lt;function ut(){return(ut=e((()=>{V=t(n()),M(),N(),ot(),ct(),Ke(),He(),We(),lt=V.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...s},c){var l;let u=pe(e=>e.size),d=V.useMemo(()=>a?new at:new st,[a]),[f]=V.useState(()=>new Ge),p=(n==null||(l=n[0])==null?void 0:l.length)===4?4:3,m=V.useMemo(()=>{let r=a?new Ve:new Ue,i=e.map(e=>{let t=Array.isArray(e);return e instanceof w||e instanceof D?[e.x,e.y,e.z]:e instanceof ce?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof C?e.toArray():e);r.setColors(e.flat(),p)}return r},[e,a,n,p]);return V.useLayoutEffect(()=>{d.computeLineDistances()},[e,d]),V.useLayoutEffect(()=>{o?f.defines.USE_DASH=``:delete f.defines.USE_DASH,f.needsUpdate=!0},[o,f]),V.useEffect(()=>()=>{m.dispose(),f.dispose()},[m]),V.createElement(`primitive`,S({object:d,ref:c},s),V.createElement(`primitive`,{object:m,attach:`geometry`}),V.createElement(`primitive`,S({object:f,attach:`material`,color:t,vertexColors:!!n,resolution:[u.width,u.height],linewidth:r??i??1,dashed:o,transparent:p===4},s)))})})))()}var dt,ft;function pt(){return(pt=e((()=>{n(),dt=o(),ft=e=>(0,dt.jsxs)(`svg`,{width:20,height:20,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...e,children:[(0,dt.jsx)(`path`,{d:`M9.99976 7.875C11.1734 7.875 12.1248 8.8264 12.1248 10C12.1248 11.1736 11.1734 12.125 9.99976 12.125C8.82626 12.1249 7.87476 11.1735 7.87476 10C7.87476 8.82648 8.82626 7.87513 9.99976 7.875Z`,fill:`currentColor`}),(0,dt.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M9.99976 1.625C10.483 1.625 10.8748 2.01675 10.8748 2.5V4.95898H13.3337C14.2769 4.95925 15.0416 5.72382 15.0417 6.66699V9.12891H17.4958C17.9787 9.12917 18.3706 9.52104 18.3708 10.0039C18.3708 10.4868 17.9796 10.8784 17.4968 10.8789H15.0417V13.334C15.0415 14.2771 14.2768 15.0417 13.3337 15.042H10.8748V17.5C10.8748 17.9832 10.483 18.375 9.99976 18.375C9.51662 18.3749 9.12476 17.9832 9.12476 17.5V15.042H6.66675C5.72357 15.0418 4.959 14.2771 4.95874 13.334V10.8789H2.49585C2.01276 10.8789 1.62111 10.4879 1.62085 10.0049C1.62085 9.52163 2.0126 9.12891 2.49585 9.12891H4.95874V6.66699C4.95892 5.72376 5.72352 4.95916 6.66675 4.95898H9.12476V2.5C9.12476 2.01683 9.51662 1.62513 9.99976 1.625ZM6.70874 13.292H13.2917V6.70898H6.70874V13.292Z`,fill:`currentColor`})]})})))()}var H,mt;function ht(){return(ht=e((()=>{H=([e,t,n])=>[e,n,-t],mt=([e,t,n])=>[e,-n,t]})))()}var U,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,W,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It;function Lt(){return(Lt=e((()=>{b(),ee(),ht(),U=48,gt=24,_t=96,vt=1e-9,yt=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],bt=yt.slice(0,4),xt=[[0,5,1,7],[0,1,3,7],[0,3,2,7],[0,2,6,7],[0,6,4,7],[0,4,5,7]],St=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],Ct=[[0,1,3],[0,3,2]],wt=[[0,1],[1,2],[2,0]],Tt=(e,t)=>{let n=e.value-t.value,r=n===0?.5:e.value/n;return[e.point[0]+r*(t.point[0]-e.point[0]),e.point[1]+r*(t.point[1]-e.point[1]),e.point[2]+r*(t.point[2]-e.point[2])]},Et=(e,...t)=>{for(let n of t)e.push(...H(n))},W=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Dt=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Ot=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],kt=e=>{let t=Math.hypot(...e);return t===0?[0,0,0]:[e[0]/t,e[1]/t,e[2]/t]},At=e=>{let t=e.reduce((t,n)=>[t[0]+n[0]/e.length,t[1]+n[1]/e.length,t[2]+n[2]/e.length],[0,0,0]),n=kt(W(e[0],t)),r=kt(Ot(W(e[1],e[0]),W(e[2],e[0]))),i=Ot(r,n);return e.toSorted((e,r)=>Math.atan2(Dt(W(e,t),i),Dt(W(e,t),n))-Math.atan2(Dt(W(r,t),i),Dt(W(r,t),n)))},jt=(e,t)=>{let n=[];for(let[e,r]of St){let i=t[e],a=t[r];i.value<=0!=a.value<=0&&n.push(Tt(i,a))}if(n.length===3)Et(e,...n);else if(n.length===4){let t=At(n);Et(e,t[0],t[1],t[2]),Et(e,t[0],t[2],t[3])}},Mt=(e,t)=>{let n=[];for(let[e,r]of wt){let i=t[e],a=t[r];i.value<=0!=a.value<=0&&n.push(Tt(i,a))}n.length===2&&Math.hypot(...W(n[0],n[1]))>vt&&e.push([H(n[0]),H(n[1])])},Nt=e=>e.map(e=>Math.round(e/vt)).join(`:`),Pt=e=>{let t=new Map;for(let[n,r]of e.entries())for(let e of r){let r=Nt(e),i=t.get(r);i?i.push(n):t.set(r,[n])}let n=new Set(e.keys()),r=r=>{let i=Nt(r),a=t.get(i)?.find(e=>n.has(e));if(a===void 0)return null;n.delete(a);let[o,s]=e[a];return Nt(o)===i?s:o},i=[];for(;n.size>0;){let t=n.values().next().value;if(t===void 0)break;n.delete(t);let a=[...e[t]],o=r(a[a.length-1]);for(;o;)a.push(o),o=r(o);let s=r(a[0]);for(;s;)a.unshift(s),s=r(s);i.push(a)}return i},Ft=({constants:e,equation:t,resolveFunction:n,restrictions:r=[]})=>{let i=[];for(let a=0;a<=_t;a+=1){let o=-10+20*a/_t;for(let a=0;a<=_t;a+=1){let s=-10+20*a/_t;i.push({point:[s,o,0],value:x(r,{constants:e,resolveFunction:n,x:s,y:o,z:0})?y({constants:e,equation:t,resolveFunction:n,x:s,y:o,z:0}):NaN})}}let a=(e,t)=>i[t*97+e],o=[];for(let e=0;e<_t;e+=1)for(let t=0;t<_t;t+=1){let n=bt.map(([n,r])=>a(t+n,e+r));if(!n.some(e=>!Number.isFinite(e.value)))for(let e of Ct)Mt(o,e.map(e=>n[e]))}return Pt(o)},It=({constants:e,equation:t,resolveFunction:n,restrictions:r=[],zRange:i={max:10,min:-10}})=>{let a=[],o=[];for(let a=0;a<=gt;a+=1){let s=i.min+(i.max-i.min)*a/gt;for(let i=0;i<=U;i+=1){let a=-10+20*i/U;for(let i=0;i<=U;i+=1){let c=-10+20*i/U;o.push(x(r,{constants:e,resolveFunction:n,x:c,y:a,z:s})?y({constants:e,equation:t,resolveFunction:n,x:c,y:a,z:s}):NaN)}}}let s=(e,t,n)=>o[n*2401+t*49+e];for(let e=0;e<gt;e+=1)for(let t=0;t<U;t+=1)for(let n=0;n<U;n+=1){let r=yt.map(([r,a,o])=>({point:[-10+20*(n+r)/U,-10+20*(t+a)/U,i.min+(i.max-i.min)*(e+o)/gt],value:s(n+r,t+a,e+o)}));if(!r.some(e=>!Number.isFinite(e.value))){for(let e of xt)if(jt(a,e.map(e=>r[e])),a.length/9>=7e4)return a}}return a}})))()}var G,K,q,J,Rt,zt,Y,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,X,Z,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,Q,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,$,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr;function _r(){return(_r=e((()=>{Pe(),ut(),me(),N(),G=n(),a(),M(),u(),l(),pt(),b(),ee(),ht(),Lt(),K=o(),q=10,J=96,Rt=24,zt=320,Y=10,Bt=[-10,0,10],Vt=15,Ht=2,Ut=[11,9,11],Wt=[0,28,.001],Gt=3,Kt=Math.max(30,2.5*Math.max(Y,Vt)),qt=Math.hypot(...Ut),Jt=Ut.map(e=>e*Kt/qt),Yt=1e-6,Xt=.01,Zt=.31,Qt=.31,$t=.82,X=48,Z=24,en={max:Vt,min:-15},tn=(e,{max:t,min:n})=>Math.max(n,Math.min(t,e)),nn=(e,{max:t,min:n})=>e>=n-Yt&&e<=t+Yt,rn=he,an=Ne,on=_e,sn=`ambientLight`,cn=`directionalLight`,ln=`gridHelper`,un=`mesh`,dn=`meshBasicMaterial`,fn=`meshStandardMaterial`,pn=`sphereGeometry`,mn=lt,hn=(e,t)=>{let n=new ne;return n.setAttribute(`position`,new ae(e,3)),n.setIndex(t),n.computeVertexNormals(),n},gn=(e,t)=>e.length>0?hn(e,t):void 0,_n=e=>({geometry:e}),vn={color:`#6b7280`,fontSize:11,fontWeight:600,pointerEvents:`none`,textShadow:`0 1px 2px white`},yn={...vn,fontSize:13},bn={bottom:12,display:`flex`,gap:6,position:`absolute`,right:12},xn={alignItems:`center`,border:`1px solid var(--border-light)`,borderRadius:9999,background:`var(--bg-primary)`,boxShadow:`0 2px 8px rgb(0 0 0 / 8%)`,color:`var(--text-primary)`,cursor:`pointer`,display:`inline-flex`,height:32,justifyContent:`center`,padding:0,width:32},Sn={alignItems:`center`,background:`var(--bg-primary)`,border:`1px solid var(--border-light)`,borderRadius:9999,bottom:12,boxShadow:`0 2px 8px rgb(0 0 0 / 8%)`,color:`var(--text-primary)`,display:`inline-flex`,height:32,justifyContent:`center`,left:12,padding:0,position:`absolute`,transition:`opacity 160ms ease, transform 160ms ease`,width:32,zIndex:2},Cn={pointerEvents:`none`,transform:`translate3d(-50%, -100%, 0) scale(0.65)`,transformOrigin:`bottom center`},wn=({children:e,position:t,style:n=vn})=>(0,K.jsx)(an,{center:!0,distanceFactor:12,position:t,style:{pointerEvents:`none`},children:(0,K.jsx)(`span`,{style:n,children:e})}),Tn=({max:e,min:t})=>[t,0,e].filter((e,t,n)=>n.findIndex(t=>Math.abs(t-e)<Yt)===t),En=({zRange:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(wn,{position:[Y+.45,0,0],style:yn,children:`x`}),(0,K.jsx)(wn,{position:[0,0,-Y-.45],style:yn,children:`y`}),(0,K.jsx)(wn,{position:[0,e.max+.45,0],style:yn,children:`z`}),Bt.map(e=>(0,K.jsx)(wn,{position:[e,0,.35],children:e},`x-${e}`)),Bt.filter(e=>e!==0).map(e=>(0,K.jsx)(wn,{position:[.35,0,-e],children:e},`y-${e}`)),Tn(e).map(e=>(0,K.jsx)(wn,{position:[.35,e,0],children:d(e,Ht)},`z-${e}`))]}),Dn=({zRange:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(mn,{color:`#9ca3af`,lineWidth:2,points:[[-Y,0,0],[Y,0,0]]}),(0,K.jsx)(mn,{color:`#9ca3af`,lineWidth:2,points:[[0,0,Y],[0,0,-Y]]}),(0,K.jsx)(mn,{color:`#9ca3af`,lineWidth:2,points:[[0,e.min,0],[0,e.max,0]]})]}),On=({color:e,point:[t,n,r]})=>{let i=`(${d(t,Ht)}, ${d(n,Ht)}, ${d(r,Ht)})`;return(0,K.jsx)(an,{position:[0,0,0],style:Cn,children:(0,K.jsx)(c,{"aria-hidden":!0,bodyWidth:s(i),contentClassName:`text-[var(--learning-block-tooltip-text)] font-semibold`,fill:e,pointerSide:`bottom`,stroke:`var(--bg-primary)`,strokeWidth:2,children:i})})},kn=({columnSteps:e,getPoint:t,rowSteps:n})=>{let r=[],i=[],a=[];for(let i=0;i<=n;i+=1)for(let n=0;n<=e;n+=1){let e=t(n,i);a.push(e!=null),r.push(...H(e??[0,0,0]))}let o=e+1;for(let t=0;t<n;t+=1)for(let n=0;n<e;n+=1){let e=t*o+n,r=e+1,s=e+o,c=s+1;a[e]&&a[r]&&a[s]&&a[c]&&(i.push(e,s,r),i.push(r,s,c))}return hn(r,i)},An=(e,t,n,r,i)=>kn({columnSteps:J,getPoint:(a,o)=>{let s=-q+2*q*a/J,c=-q+2*q*o/J,l=g({constants:t,tokens:e,x:s,y:c,resolveFunction:i});return Number.isFinite(l)&&nn(l,r)&&x(n,{constants:t,resolveFunction:i,x:s,y:c,z:l})?[s,c,l]:null},rowSteps:J}),jn=e=>{if(e.some(({value:e})=>!Number.isFinite(e)))return[];let t=[];for(let n=0;n<e.length;n+=1){let r=e[n],i=e[(n+1)%e.length],a=r.value>=0,o=i.value>=0;if(a&&t.push(r),a!==o){let e=r.value/(r.value-i.value);t.push({value:0,x:r.x+(i.x-r.x)*e,y:r.y+(i.y-r.y)*e})}}return t},Mn=(e,t,n,r,i)=>{let a=[],o=[],s=new Map,c=[];for(let n=0;n<=J;n+=1){let r=-q+2*q*n/J;for(let n=0;n<=J;n+=1){let a=-q+2*q*n/J;c.push({value:g({constants:t,tokens:e,x:a,y:r,resolveFunction:i}),x:a,y:r})}}let l=e=>{let t=H(e),n=t.map(e=>e.toFixed(10)).join(`:`),r=s.get(n);if(r!=null)return r;let i=a.length/3;return s.set(n,i),a.push(...t),i},u=(e,a)=>{for(let s=1;s<e.length-1;s+=1){let c=[e[0],e[s],e[s+1]].map(({value:e,x:t,y:n})=>[t,n,a*Math.sqrt(Math.max(0,e))]);if(!c.every(([e,a,o])=>nn(o,r)&&x(n,{constants:t,resolveFunction:i,x:e,y:a,z:o})))continue;let u=c.map(l);o.push(...a===1?u:[u[0],u[2],u[1]])}},d=(e,t)=>c[t*97+e];for(let e=0;e<J;e+=1)for(let t=0;t<J;t+=1){let n=d(t,e),r=d(t+1,e),i=d(t,e+1),a=d(t+1,e+1);for(let e of[[n,i,r],[r,i,a]]){let t=jn(e);t.length<3||(u(t,1),u(t,-1))}}return hn(a,o)},Nn=(e,t,n,r,i)=>{let a=Array.from({length:97},(n,r)=>{let a=-q+2*q*r/J;return g({constants:t,tokens:e,x:a,resolveFunction:i})});return kn({columnSteps:J,getPoint:(e,o)=>{let s=-q+2*q*e/J,c=a[e],l=r.min+(r.max-r.min)*o/Rt;return Number.isFinite(c)&&Math.abs(c)<=q&&x(n,{constants:t,resolveFunction:i,x:s,y:c,z:l})?[s,c,l]:null},rowSteps:Rt})},Pn=e=>(e.kind===`explicit-2d`||e.kind===`implicit-2d`||e.kind===`compound-2d-inequality`)&&v(e.relation),Fn=e=>(e.kind===`explicit-3d`||e.kind===`implicit-3d`||e.kind===`compound-3d-inequality`)&&v(e.relation),Q=e=>e===`<=`||e===`>=`,In=e=>({...e,relation:`=`}),Ln=e=>e===`<`||e===`>`,Rn=(e,t,n,r)=>kn({columnSteps:J,getPoint:(i,a)=>{let o=-q+2*q*i/J,s=-q+2*q*a/J;return f({constants:t,equation:e,resolveFunction:r,x:o,y:s})&&x(n,{constants:t,resolveFunction:r,x:o,y:s,z:0})?[o,s,Xt]:null},rowSteps:J}),zn=(e,t,...n)=>{let r=e.length/3;for(let t of n)e.push(...H(t));t.push(r,r+1,r+2),t.push(r,r+2,r+3)},Bn=(e,t,n)=>{if(n.length<3)return;let r=e.length/3;for(let t of n)e.push(...H(t));for(let e=1;e<n.length-1;e+=1)t.push(r,r+e,r+e+1)},Vn=(e,t)=>e.some(e=>e.type===`identifier`&&e.value===t),Hn=e=>e.some(e=>e.comparisons.some(e=>Vn(e.left,`z`)||Vn(e.right,`z`))),Un=(e,t,n)=>e+(t-e)*n,Wn=(e,t)=>{let n=tn(e.lower,t),r=tn(e.upper,t);return{lower:n,lowerInclusive:n===e.lower&&e.lowerInclusive,restrictionZ:(n+r)/2,upper:r,upperInclusive:r===e.upper&&e.upperInclusive}},Gn=(e,t)=>Number.isFinite(e)&&(t===`<`||t===`<=`?e<=0:e>=0),Kn=(e,t,n)=>({lower:Un(e.lower,t.lower,n),lowerInclusive:e.lowerInclusive||t.lowerInclusive,restrictionZ:Un(e.restrictionZ,t.restrictionZ,n),upper:Un(e.upper,t.upper,n),upperInclusive:e.upperInclusive||t.upperInclusive,x:Un(e.x,t.x,n),y:Un(e.y,t.y,n)}),qn=(e,{relation:t,valueAt:n})=>{if(e.length<3)return[];let r=[];for(let i=0;i<e.length;i+=1){let a=e[i],o=e[(i+1)%e.length],s=n(a),c=n(o),l=Gn(s,t),u=Gn(c,t);if(l&&u){r.push(o);continue}if(!l&&!u)continue;let d=Number.isFinite(s)&&Number.isFinite(c)&&s!==c?Math.max(0,Math.min(1,s/(s-c))):.5,f=Kn(a,o,d);r.push(f),!l&&u&&r.push(o)}return r},Jn=(e,t,n)=>(m(e)?e.comparisons:[e]).map(e=>({inclusive:Q(e.relation),relation:e.relation,valueAt:({x:r,y:i})=>_({constants:t,equation:e,resolveFunction:n,x:r,y:i})})),$=(e,t)=>Math.abs(e-t)<=Yt,Yn=(e,t,n,r,i,a)=>$(e.x,n)&&$(t.x,n)||$(e.x,r)&&$(t.x,r)||$(e.y,i)&&$(t.y,i)||$(e.y,a)&&$(t.y,a),Xn=(e,t)=>$(e.x,-q)&&$(t.x,-q)||$(e.x,q)&&$(t.x,q)||$(e.y,-q)&&$(t.y,-q)||$(e.y,q)&&$(t.y,q),Zn=(e,t,n)=>{let r=Kn(e,t,.5);return n.some(({valueAt:e})=>{let t=e(r);return Number.isFinite(t)&&Math.abs(t)<=1e-5})},Qn=(e,t,n)=>{let r=Kn(e,t,.5);return n.some(({inclusive:e,valueAt:t})=>{let n=t(r);return e&&Number.isFinite(n)&&Math.abs(n)<=1e-5})},$n=({upper:e,x:t,y:n})=>[t,n,e],er=({lower:e,x:t,y:n})=>[t,n,e],tr=({clippingInequalities:e,constants:t,getRange:n,restrictions:r,resolveFunction:i})=>{let a=[],o=[],s=[],c=[],l=(...e)=>{zn(a,o,...e)},u=e=>{Bn(a,o,e)},d=(...e)=>{zn(s,c,...e)},f=e=>{Bn(s,c,e)},p=(e,a)=>{let o=n(e,a);return!o||!Number.isFinite(o.lower)||!Number.isFinite(o.upper)||o.lower>=o.upper||!x(r,{constants:t,resolveFunction:i,x:e,y:a,z:o.restrictionZ})?null:{...o,x:e,y:a}},m=[],h=(e,t)=>{let n=t*49+e;if(m[n]!==void 0)return m[n];let r=-q+2*q*e/X,i=-q+2*q*t/X,a=p(r,i);return m[n]=a,a};for(let t=0;t<X;t+=1){let n=-q+2*q*t/X,r=-q+2*q*(t+1)/X;for(let i=0;i<X;i+=1){let a=-q+2*q*i/X,o=-q+2*q*(i+1)/X,s=[h(i,t),h(i+1,t),h(i+1,t+1),h(i,t+1)];if(s.some(e=>e==null))continue;let c=s;for(let t of e)if(c=qn(c,t),c.length<3)break;if(c.length<3)continue;let p=c.map($n),m=[...c].reverse().map(er);u(p),u(m),c.some(e=>e.upperInclusive)&&f(p),c.some(e=>e.lowerInclusive)&&f(m);for(let t=0;t<c.length;t+=1){let i=c[t],s=c[(t+1)%c.length];(!Yn(i,s,a,o,n,r)||Xn(i,s)||Zn(i,s,e))&&(l(er(i),$n(i),$n(s),er(s)),Qn(i,s,e)&&d(er(i),$n(i),$n(s),er(s)))}}}return{geometry:hn(a,o),inclusiveBoundaryGeometry:gn(s,c)}},nr=(e,t,n,r,i)=>Hn(n)?_n(or(e,t,n,r,i)):tr({clippingInequalities:Jn(e,t,i),constants:t,getRange:()=>({lower:r.min,restrictionZ:0,upper:r.max}),resolveFunction:i,restrictions:n}),rr=(e,t,n,r,i,a)=>{let o=t===`<`||t===`<=`;return tr({clippingInequalities:[],constants:n,getRange:(t,r)=>{let s=g({constants:n,tokens:e,resolveFunction:a,x:t,y:r});if(!Number.isFinite(s))return null;let c=o?i.min:s,l=o?s:i.max;return Wn({lower:c,restrictionZ:s,upper:l},i)},resolveFunction:a,restrictions:r})},ir=(e,t,n,r,i)=>tr({clippingInequalities:[],constants:t,getRange:(n,a)=>{let o=-1/0,s=!1,c=1/0,l=!1;for(let r of e){let e=g({constants:t,tokens:r.expression,resolveFunction:i,x:n,y:a});if(!Number.isFinite(e))return null;r.relation===`<`||r.relation===`<=`?e<c&&(c=e,l=Q(r.relation)):e>o&&(o=e,s=Q(r.relation))}return Wn({lower:o,lowerInclusive:s,restrictionZ:(o+c)/2,upper:c,upperInclusive:l},r)},resolveFunction:i,restrictions:n}),ar=(e,t,n,r,i,a)=>tr({clippingInequalities:t.map(e=>({inclusive:Q(e.relation),relation:e.relation,valueAt:({restrictionZ:t,x:r,y:i})=>y({constants:n,equation:e,resolveFunction:a,x:r,y:i,z:t})})),constants:n,getRange:(t,r)=>{let o=-1/0,s=!1,c=1/0,l=!1;for(let i of e){let e=g({constants:n,tokens:i.expression,resolveFunction:a,x:t,y:r});if(!Number.isFinite(e))return null;i.relation===`<`||i.relation===`<=`?e<c&&(c=e,l=Q(i.relation)):e>o&&(o=e,s=Q(i.relation))}return Wn({lower:o,lowerInclusive:s,restrictionZ:(o+c)/2,upper:c,upperInclusive:l},i)},resolveFunction:a,restrictions:r}),or=(e,t,n,r,i)=>{let a=[],o=[],s=[],c=[],l=(r,a,o)=>f({constants:t,equation:e,resolveFunction:i,x:r,y:a,z:o})&&x(n,{constants:t,resolveFunction:i,x:r,y:a,z:o});for(let e=0;e<=Z;e+=1){let t=r.min+(r.max-r.min)*e/Z;for(let e=0;e<=X;e+=1){let n=-q+2*q*e/X;for(let e=0;e<=X;e+=1){let r=-q+2*q*e/X;s.push(l(r,n,t))}}}let u=(e,t,n)=>n*2401+t*49+e,d=(e,t,n)=>n*X*X+t*X+e;for(let e=0;e<Z;e+=1)for(let t=0;t<X;t+=1)for(let n=0;n<X;n+=1){let i=[s[u(n,t,e)],s[u(n+1,t,e)],s[u(n,t+1,e)],s[u(n+1,t+1,e)],s[u(n,t,e+1)],s[u(n+1,t,e+1)],s[u(n,t+1,e+1)],s[u(n+1,t+1,e+1)]],a=-q+2*q*(n+.5)/X,o=-q+2*q*(t+.5)/X,f=r.min+(r.max-r.min)*(e+.5)/Z;c[d(n,t,e)]=i.some(Boolean)||l(a,o,f)}let p=(...e)=>{zn(a,o,...e)},m=(e,t,n)=>e>=0&&e<X&&t>=0&&t<X&&n>=0&&n<Z&&c[d(e,t,n)];for(let e=0;e<Z;e+=1){let t=r.min+(r.max-r.min)*e/Z,n=r.min+(r.max-r.min)*(e+1)/Z;for(let r=0;r<X;r+=1){let i=-q+2*q*r/X,a=-q+2*q*(r+1)/X;for(let o=0;o<X;o+=1){if(!m(o,r,e))continue;let s=-q+2*q*o/X,c=-q+2*q*(o+1)/X;m(o,r,e-1)||p([s,a,t],[c,a,t],[c,i,t],[s,i,t]),m(o,r,e+1)||p([s,i,n],[c,i,n],[c,a,n],[s,a,n]),m(o-1,r,e)||p([s,i,t],[s,i,n],[s,a,n],[s,a,t]),m(o+1,r,e)||p([c,a,t],[c,a,n],[c,i,n],[c,i,t]),m(o,r-1,e)||p([c,i,t],[c,i,n],[s,i,n],[s,i,t]),m(o,r+1,e)||p([s,a,t],[s,a,n],[c,a,n],[c,a,t])}}}return hn(a,o)},sr=({constants:e,equation:t,resolveFunction:n,restrictions:r,zRange:i})=>{let a=new ne;return a.setAttribute(`position`,new ae(It({constants:e,equation:t,resolveFunction:n,restrictions:r,zRange:i}),3)),a.computeVertexNormals(),a},cr=e=>h(e)&&e.comparisons.every(e=>e.kind===`explicit-3d`)?e.comparisons:null,lr=e=>e.kind===`implicit-3d`&&(Vn(e.left,`z`)||Vn(e.right,`z`)),ur=e=>{if(!h(e))return null;let t=[],n=[];for(let r of e.comparisons)if(r.kind===`explicit-3d`)t.push(r);else if(!lr(r))n.push(r);else return null;return t.length>0&&n.length>0?{xyComparisons:n,zComparisons:t}:null},dr=(e,t)=>t.kind===`explicit`&&t.dependentVariable===`z`&&Fn(e)&&t.relation!==e.relation?{...e,relation:t.relation}:e,fr=(e,t,n,r,i,a,o,s,c)=>{if(Fn(e)){let n=cr(e),i=ur(e);return n&&!Hn(o)?ir(n,a,o,s,c):i&&!Hn(o)?ar(i.zComparisons,i.xyComparisons,a,o,s,c):t&&r===`z`&&!Hn(o)?rr(t,e.relation,a,o,s,c):_n(or(e,a,o,s,c))}return Pn(e)?i===`prism-2d-inequality`?nr(e,a,o,s,c):_n(Rn(e,a,o,c)):_n(n?Mn(n,a,o,s,c):t&&r?r===`z`?An(t,a,o,s,c):Nn(t,a,o,s,c):sr({constants:a,equation:e,resolveFunction:c,restrictions:o,zRange:s}))},pr=({color:e,constants:t,dependentVariable:n,equation:r,expression:i,interactive:a,mirroredRadicand:o,resolveFunction:s,restrictions:c,surfaceStyle:l,zRange:u})=>{"use forget";let[d,f]=(0,G.useState)(null),p=v(r.relation),m=Fn(r),h=(0,G.useDeferredValue)(t),g=(0,G.useDeferredValue)(r),_=(0,G.useDeferredValue)(c),y=!(o!=null||i!=null&&n!=null),b=y?h:t,ee=y?g:r,x=y?_:c,S=(0,G.useMemo)(()=>fr(ee,i,o,n,l,b,x,u,s),[n,i,o,b,ee,x,s,l,u]);return(0,G.useEffect)(()=>()=>{S.geometry.dispose(),S.inclusiveBoundaryGeometry?.dispose()},[S]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(un,{geometry:S.geometry,onPointerMove:a?e=>{e.stopPropagation();let t=mt([e.point.x,e.point.y,e.point.z]);f(t)}:void 0,onPointerOut:a?()=>f(null):void 0,children:[(0,K.jsx)(fn,{color:e,depthWrite:!p,metalness:.05,opacity:m?Qt:p?Zt:$t,roughness:.7,side:2,transparent:!0}),d?(0,K.jsxs)(un,{position:H(d),raycast:()=>null,children:[(0,K.jsx)(pn,{args:[.14,16,16]}),(0,K.jsx)(dn,{color:e}),(0,K.jsx)(On,{color:e,point:d})]}):null]}),S.inclusiveBoundaryGeometry?(0,K.jsx)(un,{geometry:S.inclusiveBoundaryGeometry,raycast:()=>null,children:(0,K.jsx)(fn,{color:e,depthWrite:!1,metalness:.05,opacity:$t,roughness:.7,side:2,transparent:!0})}):null]})},mr=({color:e,constants:t,equation:n,renderPlan:r,resolveFunction:i,restrictions:a})=>{let o=v(n.relation)&&Ln(n.relation),s=(0,G.useMemo)(()=>{if(r.kind===`implicit`)return n.kind===`implicit-2d`?Ft({constants:t,equation:n,resolveFunction:i,restrictions:a}):[];let e=[];for(let n of r.expressions){let r=[];for(let o=0;o<=zt;o+=1){let s=-10+20*o/zt,c=g({constants:t,tokens:n,resolveFunction:i,x:s});if(!Number.isFinite(c)||Math.abs(c)>10||!x(a,{constants:t,resolveFunction:i,x:s,y:c,z:0})){r.length>1&&e.push(r),r=[];continue}r.push(H([s,c,0]))}r.length>1&&e.push(r)}return e},[t,n,r,i,a]);return(0,K.jsx)(K.Fragment,{children:s.map((t,n)=>(0,K.jsx)(mn,{color:e,dashSize:.3,dashed:o,gapSize:.16,lineWidth:2,points:t},`${t[0].join(`:`)}:${n}`))})},hr=({color:e,connectPoints:t,interactive:n,points:r})=>{let[i,a]=(0,G.useState)(null),o=n?e=>{e.stopPropagation();let t=mt([e.point.x,e.point.y,e.point.z]),n=0,i=1/0;for(let[e,a]of r.entries()){let r=a.reduce((e,n,r)=>e+(n-t[r])**2,0);r<i&&(i=r,n=e)}a(n)}:void 0,s=n?()=>a(null):void 0;return(0,K.jsxs)(K.Fragment,{children:[t&&r.length>1?(0,K.jsx)(mn,{color:e,lineWidth:2,onPointerMove:o,onPointerOut:s,points:r.map(H)}):null,r.map((t,n)=>(0,K.jsxs)(un,{onPointerMove:o,onPointerOut:s,position:H(t),children:[(0,K.jsx)(pn,{args:[.16,16,16]}),(0,K.jsx)(dn,{color:e}),i===n?(0,K.jsx)(On,{color:e,point:t}):null]},`${t.join(`:`)}:${n}`))]})},gr=({ariaLabel:e,constants:t,interactive:n,onViewportPan:r,onViewportReset:a,plots:o,resolveFunction:s})=>{"use forget";let c=i(),l=(0,G.useRef)(null),[u,d]=(0,G.useState)(!1),f=c.formatMessage({id:`learning_blocks.graphing_calculator.viewport.reset`,defaultMessage:`Reset viewport`}),g=c.formatMessage({id:`learning_blocks.graphing_calculator.viewport.xy_orientation`,defaultMessage:`XY orientation`}),_=en,v=e=>{let t=l.current;t&&(t.object.position.set(...e),t.target.set(0,0,0),t.update())},y=()=>{let e=l.current;e&&d(Jt.some((t,n)=>Math.abs(t-e.object.position.getComponent(n))>Yt)||e.target.lengthSq()>Yt**2)};return(0,K.jsxs)(`div`,{className:`relative aspect-[4/3] w-full min-w-0${n?``:` pointer-events-none`}`,children:[(0,K.jsxs)(rn,{"aria-label":e,camera:{fov:42,position:Jt},frameloop:`demand`,onCreated:({gl:e})=>{e.domElement.classList.add(`size-full!`)},role:`img`,children:[(0,K.jsx)(sn,{intensity:1.1}),(0,K.jsx)(cn,{intensity:1.4,position:[6,10,8]}),(0,K.jsx)(ln,{args:[20,20,`#d1d5db`,`#e5e7eb`]}),(0,K.jsx)(Dn,{zRange:_}),(0,K.jsx)(En,{zRange:_}),o.map(e=>{if(e.kind===`curve`)return(0,K.jsx)(mr,{color:e.color,constants:t,equation:e.equation,renderPlan:e.renderPlan,resolveFunction:s,restrictions:e.restrictions},e.id);if(e.kind===`table`)return(0,K.jsx)(hr,{color:e.color,connectPoints:e.connectPoints,interactive:n,points:e.points},e.id);let r={color:e.color,constants:t,interactive:n,resolveFunction:s,restrictions:e.restrictions,zRange:_},i=({equation:t,keyPrefix:n,renderPlan:i,surfaceStyle:a})=>{let o=i??e.renderPlan,s=dr(t,o);return o.kind===`explicit`?o.dependentVariable===`z`&&o.expressions.length===2&&o.mirroredRadicand?[(0,K.jsx)(pr,{dependentVariable:`z`,equation:s,expression:null,mirroredRadicand:o.mirroredRadicand,surfaceStyle:a,...r},`${n}:mirrored`)]:o.expressions.map((e,t)=>(0,K.jsx)(pr,{dependentVariable:o.dependentVariable,equation:s,expression:e,mirroredRadicand:null,surfaceStyle:a,...r},`${n}:${t}`)):[(0,K.jsx)(pr,{dependentVariable:null,equation:s,expression:null,mirroredRadicand:null,surfaceStyle:a,...r},n)]},a=(n,r,i)=>(0,K.jsx)(mr,{color:e.color,constants:t,equation:n,renderPlan:r,resolveFunction:s,restrictions:e.restrictions},i),o=Pn(e.equation)?m(e.equation)?e.equation.comparisons.map((n,r)=>a(n,p(n,{constants:t,resolveFunction:s}),`${e.id}:boundary:${r}`)):[a(e.equation,e.renderPlan,`${e.id}:boundary`)]:[],c=(e,n,r)=>{e.push(...i({equation:n,keyPrefix:r,renderPlan:p(n,{constants:t,resolveFunction:s})}))},l=(t,n)=>{n&&(h(e.equation)||e.equation.kind===`compound-2d-inequality`||Q(e.equation.relation)&&c(t,In(e.equation),`${e.id}:equality`))};if(o.length>0){let t=i({equation:e.equation,keyPrefix:e.id,surfaceStyle:e.surfaceStyle});return l(t,e.surfaceStyle===`prism-2d-inequality`),t.push(...o),t}let u=i({equation:e.equation,keyPrefix:e.id,surfaceStyle:e.surfaceStyle});return l(u,Fn(e.equation)),u}),(0,K.jsx)(on,{enablePan:n,enableRotate:n,enableZoom:n,makeDefault:!0,maxDistance:Kt,minDistance:Gt,onEnd:()=>{y(),r?.()},ref:l,target:[0,0,0]})]}),n?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`button`,{"aria-label":f,onClick:()=>{v(Jt),a?.(),d(!1)},style:{...Sn,opacity:+!!u,pointerEvents:u?`auto`:`none`,transform:u?`translateY(0)`:`translateY(6px)`},title:f,type:`button`,children:(0,K.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`,"aria-hidden":`true`,children:[(0,K.jsx)(`path`,{d:`M16 10a6 6 0 1 1-1.76-4.24`}),(0,K.jsx)(`path`,{d:`M16 4v4h-4`})]})}),(0,K.jsx)(`div`,{style:bn,children:(0,K.jsx)(`button`,{"aria-label":g,onClick:()=>{v(Wt),y(),r?.()},style:xn,title:g,type:`button`,children:(0,K.jsx)(ft,{"aria-hidden":`true`})})})]}):null]})}})))()}_r();export{gr as Three3DRenderer};
//# sourceMappingURL=three-3d-renderer-cccd1f24e0a2.js.map