function createMaterial(e){var t=document.getElementById("shader").textContent,r="#define VERTEX_SHADER\n"+t,s="#define FRAGMENT_SHADER\n"+t,i=THREE.ImageUtils.loadTexture(e)
return i.magFilter=THREE.LinearFilter,i.minFilter=THREE.LinearFilter,new THREE.ShaderMaterial({uniforms:{gradient:{type:"t",value:i},t:{type:"f",value:0}},attributes:{heights:{type:"v3",value:[]}},wireframe:!0,vertexShader:r,fragmentShader:s})}function GeometryStressTestScene(e,t){GraphicsTestBase.call(this,"Geometry Stress Test",!0),this.gradientAddress=t,this.heightAddresses=e,this.calculator=new WorkloadCalculator(200,40,20),this.cameraSpeed=.1,this.fullDuration=0,this.fullFrames=0,this.updateTimePerRender=.03}function SphericalToCartesian(e,t,r){return new THREE.Vector3(e*Math.sin(t)*Math.cos(r),e*Math.sin(t)*Math.sin(r),e*Math.cos(t))}GeometryStressTestScene.prototype=Object.create(GraphicsTestBase.prototype),GeometryStressTestScene.prototype.initializeAssets=function(){GraphicsTestBase.prototype.initializeAssets.call(this),this.material=createMaterial(this.gradientAddress),_this=this,this.waitingForHeightMap=this.heightAddresses.length,this.generator=new HeightMapGeometryGenerator
for(var e=new THREE.ImageLoader,t=0;t<this.heightAddresses.length;++t)e.load(this.heightAddresses[t],function(e){_this.heightMapReady(t,e)},function(e){},function(e){})
this.demoMode===!0?this.setRenderFrameCount(30*this.numberOfRendersPerRenderLoop):this.setRenderFrameCount(10*this.numberOfRendersPerRenderLoop)},GeometryStressTestScene.prototype.renderLoopResultsReceived=function(e,t){this.calculator.reportCurrentWorkloadScore(t/(.001*e)),this.fullDuration=this.fullDuration+e,this.fullFrames=this.fullFrames+t},GeometryStressTestScene.prototype.shouldRestartRenderLoop=function(){if(this.demoMode===!0)return!1
var e=this.calculator.isTargetScoreReceived(),t=this.calculator.runsDoneForCurrentWorkload()
return!e&&t>0},GeometryStressTestScene.prototype.shouldRecreateScene=function(){return this.demoMode===!0?!1:!this.calculator.isTargetScoreReceived()},GeometryStressTestScene.prototype.testCompleted=function(){for(var e=BasemarkWebEngine.getElapsedTime(),t=this.calculator.getScores(),r=Object.keys(t),s="",i=0;i<r.length;++i){var a=r[i]
s+=a+", score: "+t[a].score+" wl: "+t[a].workload+" sd; "+t[a].variance+"\n"}this.showInfo(s),BasemarkWebEngine.submitResult(t.peak.workload,guide,t,e,t.peak.score,-1),BasemarkWebEngine.nextPage(location.pathname)},GeometryStressTestScene.prototype.createScene=function(){var e=new THREE.Vector3(30,30,2.2)
GraphicsTestBase.prototype.createScene.call(this)
var t=this.calculator.getWorkload()
this.generateGeometry(e,t,t)
for(var r=this.calculator.getScores(),s=Object.keys(r),i="",a=0;a<s.length;++a){var n=s[a]
i+=n+", score: "+r[n].score+" wl: "+r[n].workload+" sd; "+r[n].variance+"\n"}i+=" next workload: "+t,this.showInfo(i)},GeometryStressTestScene.prototype.checkReady=function(){0==this.waitingForHeightMap&&(this.initializeScene(),this.assetInitializationDone())},GeometryStressTestScene.prototype.heightMapReady=function(e,t){this.waitingForHeightMap=this.waitingForHeightMap-1
var r=3,s=getImageData(t,r)
this.generator.setHeightMap(s,r),this.checkReady()},GeometryStressTestScene.prototype.animate=function(e){e*=.1
var t=e%1,r=this.material.uniforms
r.t.value=t},GeometryStressTestScene.prototype.update=function(e){this.animate(e),rotateCameraAroundPoint(this.camera,new THREE.Vector3(0,0,0),e*this.cameraSpeed*Math.PI),GraphicsTestBase.prototype.update.call(this,e)},GeometryStressTestScene.prototype.initializeScene=function(){var e=new THREE.Scene
this.scene=e,this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,1e3),this.renderer=new THREE.WebGLRenderer,this.renderer.autoClear=!1,this.renderer.setSize(window.innerWidth,window.innerHeight),document.getElementById(testContainerName).appendChild(this.renderer.domElement),this.camera.position.set(15,15,15)},GeometryStressTestScene.prototype.generateGeometry=function(e,t,r){var s=this.renderer.getContext()
void 0!==this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),delete this.mesh,this.renderer.render(this.scene,this.camera),s.finish())
var i=this.material.uniforms
i.dimensions={type:"v3",value:e},i.invDimensions={type:"v3",value:new THREE.Vector3(1/e.x,1/e.y,1/e.z)}
try{s.getError()
var a=this.generator.generate(e,t,r)
this.mesh=new THREE.Mesh(a,this.material),this.mesh.name="terrain",this.mesh.rotation.set(0,0,0),this.scene.add(this.mesh),this.renderer.render(this.scene,this.camera),this.renderer.clear(!0,!1,!1),s.finish()
var n=s.getError()
if(n!==s.NO_ERROR)throw new Error('"WebGL error code '+n)
return!0}catch(o){"Failed tesselation, error: "+(void 0!==o.message?o.message:o)
return!1}}
