/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.OBJLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(e,t,r,a){var n=this,d=new THREE.XHRLoader(n.manager)
d.setCrossOrigin(this.crossOrigin),d.load(e,function(e){t(n.parse(e))},r,a)},parse:function(e){function t(e){var t=parseInt(e)
return 3*(t>=0?t-1:t+E.length/3)}function r(e){var t=parseInt(e)
return 3*(t>=0?t-1:t+m.length/3)}function a(e){var t=parseInt(e)
return 2*(t>=0?t-1:t+c.length/2)}function n(e,t,r){u.vertices.push(E[e],E[e+1],E[e+2],E[t],E[t+1],E[t+2],E[r],E[r+1],E[r+2])}function d(e,t,r){u.normals.push(m[e],m[e+1],m[e+2],m[t],m[t+1],m[t+2],m[r],m[r+1],m[r+2])}function o(e,t,r){u.uvs.push(c[e],c[e+1],c[t],c[t+1],c[r],c[r+1])}function s(e,s,i,u,l,v,E,m,c,f,p,h){var g,H=t(e),R=t(s),T=t(i)
void 0===u?n(H,R,T):(g=t(u),n(H,R,g),n(R,T,g)),void 0!==l&&(H=a(l),R=a(v),T=a(E),void 0===u?o(H,R,T):(g=a(m),o(H,R,g),o(R,T,g))),void 0!==c&&(H=r(c),R=r(f),T=r(p),void 0===u?d(H,R,T):(g=r(h),d(H,R,g),d(R,T,g)))}var i,u,l,v=[];/^o /gm.test(e)===!1&&(u={vertices:[],normals:[],uvs:[]},l={name:""},i={name:"",geometry:u,material:l},v.push(i))
for(var E=[],m=[],c=[],f=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,p=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,h=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,g=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,H=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,R=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,T=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,b=e.split("\n"),w=0;w<b.length;w++){var F=b[w]
F=F.trim()
var A
0!==F.length&&"#"!==F.charAt(0)&&(null!==(A=f.exec(F))?E.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])):null!==(A=p.exec(F))?m.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])):null!==(A=h.exec(F))?c.push(parseFloat(A[1]),parseFloat(A[2])):null!==(A=g.exec(F))?s(A[1],A[2],A[3],A[4]):null!==(A=H.exec(F))?s(A[2],A[5],A[8],A[11],A[3],A[6],A[9],A[12]):null!==(A=R.exec(F))?s(A[2],A[6],A[10],A[14],A[3],A[7],A[11],A[15],A[4],A[8],A[12],A[16]):null!==(A=T.exec(F))?s(A[2],A[5],A[8],A[11],void 0,void 0,void 0,void 0,A[3],A[6],A[9],A[12]):/^o /.test(F)?(u={vertices:[],normals:[],uvs:[]},l={name:""},i={name:F.substring(2).trim(),geometry:u,material:l},v.push(i)):/^g /.test(F)||(/^usemtl /.test(F)?l.name=F.substring(7).trim():/^mtllib /.test(F)||/^s /.test(F)))}for(var y=new THREE.Object3D,w=0,x=v.length;x>w;w++){i=v[w],u=i.geometry
var B=new THREE.BufferGeometry
B.addAttribute("position",new THREE.BufferAttribute(new Float32Array(u.vertices),3)),u.normals.length>0&&B.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(u.normals),3)),u.uvs.length>0&&B.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(u.uvs),2)),l=new THREE.MeshLambertMaterial,l.name=i.material.name
var L=new THREE.Mesh(B,l)
L.name=i.name,y.add(L)}return y}}
