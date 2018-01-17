/**
 * Base class for WebGL tests. Takes care of creation and managing of the offscreen texture as well as updating the screen. Also provides a mechanism for initializing assets in asynchronous way and makes the interface more suitable for graphics benchmarks
 * @author Mikko Alaluusua <mikko.alaluusua@basemark.com>
 * @copyright Basemark Inc. 2015
 **/
function GraphicsTestBase(e, t) {
  this.isStressTest = "undefined" == typeof t ? 0 : 1, this.testName = e, this.sceneConstructionsDone = 0, this.numberOfRendersPerRenderLoop = 128, this.offscreenTexWidth = 1920, this.offscreenTexHeight = 1080, this.displayTexWidth = 600, this.displayTexHeight = 350, this.updateTimePerRender = .01
}

var getTime = function () {
  return BasemarkWebEngine.getElapsedTime()
}
GraphicsTestBase.prototype.init = function () {
  var e = {
    isDoable: !1,
    operations: 0,
    time: 0,
    internalCounter: !0,
    testName: this.testName,
    testVersion: "1.0",
    isConformity: 0,
    isStressTest: this.isStressTest
  }
  return BasemarkWebEngine.webgl() && (e.isDoable = !0), e
}, GraphicsTestBase.prototype.run = function (e, t, s) {
  "undefined" != typeof demoMode ? this.demoMode = !0 : this.demoMode = !1, this.demoMode === !0 && this.onDemoModeInit(), this.initializeAssets()
}, GraphicsTestBase.prototype.onDemoModeInit = function () {
  var e = document.querySelector("body > div.container"), t = parseInt(e.style.width), s = parseInt(e.style.height),
    r = Math.log(2), i = Math.log(t), o = Math.log(s), n = Math.pow(2, Math.ceil(i / r)),
    a = Math.pow(2, Math.ceil(o / r)), h = Math.pow(2, Math.floor(i / r)), u = Math.pow(2, Math.floor(o / r)),
    p = Math.abs(n - t) < Math.abs(h - t) ? n : h, c = Math.abs(a - s) < Math.abs(u - s) ? a : u
  this.offscreenTexWidth = p, this.offscreenTexHeight = c, this.displayTexWidth = p, this.displayTexHeight = c
}, GraphicsTestBase.prototype.onDemoModeDone = function () {
  BasemarkWebEngine.nextPage(location.pathname)
}, GraphicsTestBase.prototype.initializeAssets = function () {
  this.initializeRenderTargetResources()
}, GraphicsTestBase.prototype.assetInitializationDone = function () {
  this.offscreenCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, .01, 100), this.createScene(), this.showInfo("")
  var e = this
  requestAnimationFrame(function () {
    e.startRenderLoop()
  })
}, GraphicsTestBase.prototype.initializeRenderTargetResources = function () {
  this.offScreenTex = new THREE.WebGLRenderTarget(this.offscreenTexWidth, this.offscreenTexHeight, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.NearestFilter
  }), this.displayTex = new THREE.WebGLRenderTarget(this.displayTexWidth, this.displayTexHeight, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBFormat
  }), this.copyTextureScene = new THREE.Scene, this.copyTextureQuad = createTextureCopyMesh(), this.copyTextureQuad.frustumCulled = !1, this.copyTextureScene.add(this.copyTextureQuad)
}, GraphicsTestBase.prototype.createScene = function () {
  ++this.sceneConstructionsDone
}, GraphicsTestBase.prototype.update = function (e) {
}, GraphicsTestBase.prototype.render = function () {
  this.renderer.render(this.scene, this.camera, this.renderTarget, !0)
}, GraphicsTestBase.prototype.setRenderFrameCount = function (e) {
  this.frameCount = e
}, GraphicsTestBase.prototype.startRenderLoop = function () {
  this.startTime = getTime(), this.currentTime = 0, this.currentFrameCount = 0, this.renderLoop()
}, GraphicsTestBase.prototype.renderLoop = function () {
  if (void 0 === this.frameCount || this.currentFrameCount < this.frameCount) {
    for (var e = 0; e < this.numberOfRendersPerRenderLoop && (void 0 === this.frameCount || this.currentFrameCount < this.frameCount) && (this.update(this.currentTime), this.setOffscreenRT(), this.render(), this.copyOffscreenRTToDisplayTex(e), this.currentTime += this.updateTimePerRender, ++this.currentFrameCount, this.demoMode !== !0); ++e) ;
    this.showDisplayTex()
    var t = this
    requestAnimationFrame(function () {
      t.renderLoop()
    })
  } else {
    forceGLFlush(this.renderer.getContext())
    var s = getTime()
    this.renderLoopResultsReceived(s - this.startTime, this.currentFrameCount), this.renderLoopDone()
  }
}, GraphicsTestBase.prototype.renderLoopResultsReceived = function (e, t) {
}, GraphicsTestBase.prototype.shouldRestartRenderLoop = function () {
  return !0
}, GraphicsTestBase.prototype.shouldRecreateScene = function () {
  return !1
}, GraphicsTestBase.prototype.testCompleted = function () {
}, GraphicsTestBase.prototype.testFailed = function (e) {
  BasemarkWebEngine.submitResult(0, guide, {error: e}, 0, 0, -1), BasemarkWebEngine.nextPage(location.pathname)
}, GraphicsTestBase.prototype.renderLoopDone = function () {
  var e = this
  this.shouldRestartRenderLoop() ? requestAnimationFrame(function () {
    e.startRenderLoop()
  }) : this.shouldRecreateScene() ? (this.createScene(), requestAnimationFrame(function () {
    e.startRenderLoop()
  })) : this.demoMode === !0 ? this.onDemoModeDone() : this.testCompleted()
}, GraphicsTestBase.prototype.setOffscreenRT = function () {
  this.renderTarget = this.offScreenTex
}, GraphicsTestBase.prototype.copyOffscreenRTToDisplayTex = function (e) {
  this.renderTarget = this.displayTex, this.copyTextureQuad.material.uniforms.tex.value = this.offScreenTex
  var t = this.demoMode === !0 ? 1 : this.numberOfRendersPerRenderLoop, s = Math.ceil(Math.sqrt(t)),
    r = Math.floor(s / 2), i = 2 / s, o = 2 / s, n = e % s, a = Math.floor(e / s), h = 0
  s % 2 === 0 && (h = -.5, r -= 1), n = h * i - r * i + n * i, a = -h * o + r * o - a * o, this.setupFakeNormalizedViewport(n, a, .5 * i, .5 * o), this.renderer.autoClear = !1, this.renderer.render(this.copyTextureScene, this.offscreenCamera, this.renderTarget), this.renderer.autoClear = !0
}, GraphicsTestBase.prototype.showDisplayTex = function () {
  this.renderTarget = void 0, this.copyTextureQuad.material.uniforms.tex.value = this.displayTex, this.setupFakeNormalizedViewport(0, 0, 1, 1), this.renderer.render(this.copyTextureScene, this.offscreenCamera, this.renderTarget)
}, GraphicsTestBase.prototype.setupFakeNormalizedViewport = function (e, t, s, r) {
  this.copyTextureQuad.material.uniforms.biasScale.value = new THREE.Vector4(e, t, s, r)
}, GraphicsTestBase.prototype.showInfo = function (e) {
  "undefined" == typeof this.logContainer && (this.logContainer = document.createElement("Log"), document.getElementById(testContainerName).appendChild(this.logContainer)), this.logContainer.innerHTML = e
}, GraphicsTestBase.prototype.loadTextures = function (e, t) {
  this.afterAssetPreloadCallback = t, this.texturesLoadingCount = e.length
  for (var s = 0; s < e.length; ++s) {
    var r = e[s]
    r.cubeName ? this.loadTextureCube(r.cubeName, r.urls) : this.loadTexture(r)
  }
}, GraphicsTestBase.prototype.loadTexture = function (e) {
  _this = this
  var t = function () {
    _this.loadTexture(e)
  }, s = function () {
    _this.texturesLoadingCount = _this.texturesLoadingCount - 1, _this.textureLoaded(e, r)
  }, r = THREE.ImageUtils.loadTexture(e, "undefined", s, t)
}, GraphicsTestBase.prototype.loadTextureCube = function (e, t) {
  _this = this
  var s = function () {
    _this.loadTextureCube(e, t)
  }, r = function () {
    _this.texturesLoadingCount = _this.texturesLoadingCount - 1, _this.textureLoaded(e, i)
  }, i = THREE.ImageUtils.loadTextureCube(t, "undefined", r, s)
}, GraphicsTestBase.prototype.textureLoaded = function (e, t) {
  void 0 === this.preloadedTextures && (this.preloadedTextures = {}), this.preloadedTextures[e] = t
  var s = this.getPendingAssetsCount()
  this.showInfo(0 === s ? "loading geometry assets and creating the scene...." : "Loading textures, " + s + " pending..."), 0 === s && void 0 !== this.afterAssetPreloadCallback && this.afterAssetPreloadCallback.call(this)
}, GraphicsTestBase.prototype.getTexture = function (e) {
  return void 0 === this.preloadedTextures && (this.preloadedTextures = {}), this.preloadedTextures[e]
}, GraphicsTestBase.prototype.getPendingAssetsCount = function () {
  return this.texturesLoadingCount
}
var forceGLFlush = function (e) {
  var t = (getTime(), 10), s = 10, r = new Uint8Array(4 * t * s)
  e.readPixels(0, 0, t, s, e.RGBA, e.UNSIGNED_BYTE, r)
  getTime()
}, createTextureCopyMesh = function () {
  var e = createFullScreenQuad(), t = new THREE.RawShaderMaterial({
    attributes: {position: {type: "v3", value: []}, uv: {type: "v2", value: []}},
    uniforms: {tex: {type: "t", value: void 0}, biasScale: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)}},
    vertexShader: "precision mediump float;\nuniform vec4 biasScale;\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\nvoid main() {\n\n	vUv = uv;\n\n	vec3 pos = vec3(position.x * biasScale.z + biasScale.x, position.y * biasScale.w + biasScale.y, position.z);\n\n	gl_Position = vec4( pos, 1.0 );\n}",
    fragmentShader: "precision mediump float;\nuniform sampler2D tex;\nvarying vec2 vUv;\nvoid main() {\n	vec3 color = texture2D(tex, vUv).xyz;\n\n	gl_FragColor = vec4( color, 1.0 );\n}",
    depthTest: !1,
    depthWrite: !1
  })
  return new THREE.Mesh(e, t)
}

/** Utility **/
function getImageData(t, e) {
  var a = document.createElement("CANVAS"), r = a.getContext("2d")
  a.width = t.width, a.height = t.height, r.drawImage(t, 0, 0, t.width, t.height)
  var i = r.getImageData(0, 0, t.width, t.height)
  delete a
  for (var h = i.width, n = i.height, o = i.data, d = [], u = 0; n > u; ++u) for (var g = 0; h > g; ++g) for (var f = u * h + g, l = 0; e > l; ++l) d.push(o[4 * f + l])
  return {width: t.width, height: t.height, data: d}
}

function createFullScreenQuad() {
  var t = new THREE.BufferGeometry, e = new Float32Array(18), a = new Float32Array(12)
  e[0] = -1, e[1] = 1, e[2] = 0, e[3] = -1, e[4] = -1, e[5] = 0, e[6] = 1, e[7] = 1, e[8] = 0, e[9] = 1, e[10] = 1, e[11] = 0, e[12] = -1, e[13] = -1, e[14] = 0, e[15] = 1, e[16] = -1, e[17] = 0
  for (var r = 0; r < e.length / 3; ++r) {
    var i = 3 * r, h = 2 * r
    a[h] = .5 * e[i] + .5, a[h + 1] = .5 * e[i + 1] + .5
  }
  return t.addAttribute("position", new THREE.BufferAttribute(e, 3)), t.addAttribute("uv", new THREE.BufferAttribute(a, 2)), t
}

var rotateCameraAroundPoint = function (t, e, a) {
  var r = t.position, i = r.y
  r.y = 0
  var h = r.length()
  r.x = Math.cos(a), r.z = Math.sin(a), r.normalize().multiplyScalar(h), r.y = i, t.position.set(r.x, r.y, r.z), t.lookAt(e)
}
