function BufferGeometryToBufferGeometryDef(t,e){var r=new THREE.BufferGeometry,a=t.getAttribute("position").array,n=t.getAttribute("index"),o=void 0!==n,i=o?n.length/3:a.length/9,u=new Float32Array(3*i*3),f=new Float32Array(3*i*3),d=new Uint16Array(3*e)
if(o)throw"NOT YET IMPLEMENTED!"
for(var l=0;l<a.length;l+=3)u[l]=a[l],u[l+1]=a[l+1],u[l+2]=a[l+2],addVertexColor(a[l],a[l+1],a[l+2],f,l)
var h=0
for(h=0;h<d.length;++h)d[h]=h
var E=Math.floor(i/(h/3))
return r.addAttribute("position",new THREE.BufferAttribute(u,3)),r.addAttribute("color",new THREE.BufferAttribute(f,3)),r.addAttribute("index",new THREE.BufferAttribute(d,1)),{geometry:r,batches:E,batchSize:h}}function GeometryToBufferGeometryDef(t){for(var e=new THREE.BufferGeometry,r=t.vertices,a=t.faces,n=new Float32Array(3*a.length*3),o=new Float32Array(3*a.length*3),i=new Uint16Array(9),u=0,f=0,d=[],l=0;l<a.length;++l){d.push(r[a[l].a]),d.push(r[a[l].b]),d.push(r[a[l].c])
for(var h=0;3>h;++h){var E=d[h]
n[3*f]=E.x,n[3*f+1]=E.y,n[3*f+2]=E.z,addVertexColor(E.x,E.y,E.z,o,3*f),++f}++u,d.length=0}var c=0
for(c=0;c<i.length;++c)i[c]=c
var s=Math.floor((u+1)/(c/3))
return e.addAttribute("position",new THREE.BufferAttribute(n,3)),e.addAttribute("color",new THREE.BufferAttribute(o,3)),e.addAttribute("index",new THREE.BufferAttribute(i,1)),{geometry:e,batches:s,batchSize:c}}function generateSphereGeometry(t,e,r,a,n){for(var o=new THREE.BufferGeometry,i=t*e,u=3*i,f=new Float32Array(3*u),d=new Float32Array(3*u),l=new Uint16Array(3),h=Math.PI,E=2*Math.PI,c=0,s=0;t>s;++s)for(var A=s/t*E,b=0;e>b;++b){var w=b/e*h,y=sphericalToCartesian(r,w,A)
addTriangle(y,f,c,a,n),++c}for(var b=0;b<f.length;b+=3)addVertexColor(f[b],f[b+1],f[b+2],d,b)
return l[0]=0,l[1]=1,l[2]=2,o.addAttribute("position",new THREE.BufferAttribute(f,3)),o.addAttribute("color",new THREE.BufferAttribute(d,3)),o.addAttribute("index",new THREE.BufferAttribute(l,1)),{geometry:o,batches:i,batchSize:3}}function cartesianToSpherical(t,e,r){var a=Math.sqrt(t*t+e*e+r*r),n=Math.acos(r/a),o=Math.atan2(e,t)
return new THREE.Vector3(a,n,o)}function sphericalToCartesian(t,e,r){return new THREE.Vector3(t*Math.sin(e)*Math.cos(r),t*Math.sin(e)*Math.sin(r),t*Math.cos(e))}var addTriangle=function(t,e,r,a,n){var o=3*r*3,i=getRandomGenerator(r),u=i(),f=a*u+n*(1-u)
u=i()
var d=a*u+n*(1-u)
u=i()
var l=a*u+n*(1-u),h=new THREE.Vector3(i(),i(),i()).normalize(),E=new THREE.Vector3(i(),i(),i()).normalize(),c=new THREE.Vector3(i(),i(),i()).normalize()
points=[],points.push(h.multiplyScalar(f).add(t)),points.push(E.multiplyScalar(d).add(t)),points.push(c.multiplyScalar(l).add(t))
for(var s=0;3>s;++s)e[o]=points[s].x,++o,e[o]=points[s].y,++o,e[o]=points[s].z,++o},addVertexColor=function(t,e,r,a,n){a[n]=0,++n,a[n]=.635,++n,a[n]=1,++n}
