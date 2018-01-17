function draw() {
  if (BasemarkWebEngine.getElapsedTime() >= 15e3) {
    var t = ballPhysicsTest.getStats(), e = BasemarkWebEngine.getElapsedTime(), i = Math.round(e / 1e3),
      s = t.primitiveCount / e * 1e3
    debugData.push({
      Second: i,
      FrameCount: t.frameCount,
      InternalRenderTime: t.renderTime,
      InternalUpdateTime: t.updateTime,
      InternalTotalTime: t.totalTime,
      BenchmarkTime: e,
      PrimitiveCount: t.primitiveCount,
      PrimitivePerSecond: s
    }), counter = t.primitiveCount, $("canvas").remove(), clearTimeout(timerDraw), e = BasemarkWebEngine.getElapsedTime(), debugData.push({elapsedTime: e}), debugData.push({operations: counter}), "undefined" == typeof demoMode && BasemarkWebEngine.submitResult(counter, guide, debugData, e, 0, 0), BasemarkWebEngine.nextPage(location.pathname)
  } else ballPhysicsTest.draw(), timerDraw = setTimeout("draw()", 1)
}

function testStats() {
  if (BasemarkWebEngine.getElapsedTime() < 14e3) {
    var t = ballPhysicsTest.getStats()
    if (t.primitiveCount > 0) {
      var e = BasemarkWebEngine.getElapsedTime(), i = Math.round(e / 1e3), s = t.primitiveCount / e * 1e3
      debugData.push({
        Second: i,
        FrameCount: t.frameCount,
        InternalRenderTime: t.renderTime,
        InternalUpdateTime: t.updateTime,
        InternalTotalTime: t.totalTime,
        BenchmarkTime: e,
        PrimitiveCount: t.primitiveCount,
        PrimitivePerSecond: s
      })
    }
    timerStats = setTimeout("testStats()", 982)
  } else clearTimeout(timerStats)
}

var guide = {
  isDoable: !1,
  operations: 0,
  time: 0,
  internalCounter: !0,
  testName: "Canvas Test",
  testVersion: "1.0",
  isConformity: 0,
  isStressTest: 0
}, ballPhysicsTest, debugData = [], test = {
  init: function () {
    if (Modernizr.canvas) {
      guide.isDoable = !0, guide.operations = 1
      try {
        var t = document.getElementById("tutorial")
        if (t.getContext) {
          var e = t.getContext("2d")
          ballPhysicsTest = new CanvasTest(e)
        }
      } catch (i) {
        guide.isDoable = !1
      }
    }
    return guide
  }, run: function (t, e) {
    draw(), testStats()
  }
}, Statistics = function () {
  this.reset()
}
Statistics.prototype.reset = function () {
  this.frameCount = 0, this.renderTime = 0, this.updateTime = 0, this.totalTime = 0, this.primitiveCount = 0
}, Statistics.prototype.addPrimitive = function () {
  ++this.primitiveCount
}, Statistics.prototype.addFrame = function (t, e) {
  ++this.frameCount, this.renderTime += e, this.updateTime += t, this.totalTime = this.renderTime + this.updateTime
}
var Stats, physScale = 10, randomSeed = 1, random = function () {
  var t = [.0976592, .558489, .741295, .412519, .493332, .20716, .977569, .0885342, .515885, .372387, .628986, .155705, .861415, .860805, .0907926, .483505, .255867, .99118, .4167, .380078, .867153, .482955, .27897, .836909, .195837, .908963, .235145, .853664, .725944, .86874, .832759, .249336, .116062, .539048, .582873, .866054, .213477, .757561, .334452, .571551, .671346, .295785, .0800501, .966826, .450728, .47795, .724448, .205145, .988861, .801691, .84753, .828639, .314158, .716941, .992492, .0284738, .890622, .219337, .510605, .235603]
  return randomSeed = (randomSeed + 1) % t.length, t[randomSeed]
}, screenToPhys = function (t) {
  return t / physScale
}, physToScreen = function (t) {
  return t * physScale
}, rgba = function (t, e, i, s) {
  return 0 >= s ? "rgba(" + t + "," + e + "," + i + ",0.0)" : s >= 1 ? "rgb(" + t + "," + e + "," + i + ")" : "rgba(" + t + "," + e + "," + i + "," + s + ")"
}, lineColor = function (t) {
  return rgba(0, 13, 55, t)
}, HitEffect = function (t, e) {
  this.posX = t, this.posY = e, this.TTL = 0
}
HitEffect.prototype.draw = function (t) {
  var e = 6, i = 35, s = 1
  this.TTL += s
  for (var r = 0, o = this.TTL; o >= 1; o -= e) ++r, e / 2 >= r && (t.beginPath(), t.arc(this.posX, this.posY, o, 0, 2 * Math.PI, !1), t.strokeStyle = lineColor(1 - o / i), t.lineWidth = 2, Stats.addPrimitive(), t.stroke())
  return e + 1 > r
}
var HitEffectController = function () {
  this.effects = new Array
}
HitEffectController.prototype.draw = function (t) {
  for (var e = 0; e < this.effects.length; ++e) this.effects[e].draw(t), 0 == this.effects[e].draw(t) && (this.effects.pop(), --e)
}, HitEffectController.prototype.hasSimilar = function (t, e) {
  for (var i = 0; i < this.effects.length; ++i) {
    var s = Math.abs(this.effects[i].posX - t), r = Math.abs(this.effects[i].posY - e)
    if (25 > s && 25 > r) return this.effects.posX = (this.effects.posX + t) / 2, this.effects.posY = (this.effects.posY + e) / 2, !0
  }
  return !1
}, HitEffectController.prototype.add = function (t, e) {
  0 == this.hasSimilar(t, e) && this.effects.unshift(new HitEffect(t, e))
}
var Ball = function (t, e, i, s, r, o, a) {
  this.radius = s, this.speed = r
  var n = new b2CircleDef
  n.density = 10, n.radius = screenToPhys(s), n.restitution = o, n.friction = a
  var l = new b2BodyDef
  l.AddShape(n), l.position.Set(screenToPhys(e), screenToPhys(i)), l.linearVelocity = new b2Vec2(2 * (random() - .5), 2 * (random() - .5)), l.linearVelocity.Normalize(), l.linearVelocity.x *= screenToPhys(r), l.linearVelocity.y *= screenToPhys(r), this.body = t.CreateBody(l), this.prevVelocity = this.body.GetLinearVelocity().Copy(), this.prevVelocity.Normalize(), this.collisionPosition = new b2Vec2(0, 0), this.prevPos = new b2Vec2(e, i), this.trajectories = new Array, this.trajectories[this.trajectories.length] = new b2Vec2(e, i)
}
Ball.prototype.detectCollision = function () {
  var t = this.body.GetLinearVelocity().Copy()
  t.Normalize(), this.collisionPosition = t.Copy(), this.collisionPosition.Subtract(this.prevVelocity)
  var e = !1
  if (this.collisionPosition.Length() > .05) {
    this.collisionPosition.Normalize()
    var i = this.body.GetCenterPosition().Copy()
    i.Multiply(physToScreen(1)), this.trajectories[this.trajectories.length] = this.prevPos.Copy(), this.collisionPosition.Multiply(-this.radius), this.collisionPosition.Add(i), e = !0
  }
  return this.prevVelocity = t.Copy(), e
}, Ball.prototype.drawTrajectories = function (t) {
  var e = 400, i = physToScreen(this.body.GetCenterPosition().x), s = physToScreen(this.body.GetCenterPosition().y)
  this.prevPos.x = i, this.prevPos.y = s
  for (var r = new b2Vec2(i, s), o = 0, a = this.trajectories.length - 1; a >= 0; --a) {
    var n = this.trajectories[a].Copy()
    n.Subtract(r)
    var l = n.Length(), h = .999 - o / e
    if (h > 0) {
      var d = .999 - (o + l) / e, c = 1
      0 > d && (d = 0, c = (e - o) / l, c > 1 && (c = 1)), t.beginPath(), t.lineWidth = 3, t.lineCap = "butt", t.moveTo(r.x, r.y)
      var p = t.createLinearGradient(r.x, r.y, this.trajectories[a].x, this.trajectories[a].y)
      p.addColorStop(0, lineColor(h)), p.addColorStop(c, lineColor(d)), h = d, t.strokeStyle = p, t.lineTo(this.trajectories[a].x, this.trajectories[a].y), Stats.addPrimitive(), t.stroke(), r.x = this.trajectories[a].x, r.y = this.trajectories[a].y
    } else for (var u = 0; a > u; ++u) this.trajectories.shift()
    o += l
  }
}, Ball.prototype.draw = function (t) {
  var e = this.body.GetLinearVelocity()
  e.Normalize(), e.x *= screenToPhys(this.speed), e.y *= screenToPhys(this.speed), this.body.SetLinearVelocity(e)
  var i = this.body.GetRotation(), s = 2 * Math.PI, r = physToScreen(this.body.GetCenterPosition().x),
    o = physToScreen(this.body.GetCenterPosition().y)
  this.drawTrajectories(t), t.beginPath(), t.arc(r, o, this.radius + 6, i, i + s, !1)
  var a = t.createRadialGradient(r, o, this.radius + 2, r, o, this.radius + 6)
  a.addColorStop(0, lineColor(.35)), a.addColorStop(1, lineColor(0)), t.fillStyle = a, Stats.addPrimitive(), t.fill(), t.beginPath(), t.arc(r, o, this.radius, i, i + s, !1), t.fillStyle = "#f0f0f0", Stats.addPrimitive(), t.fill()
  var n = this.body.GetWorldPoint(new b2Vec2(screenToPhys(-this.radius), 0))
  t.lineTo(physToScreen(n.x), physToScreen(n.y)), t.strokeStyle = lineColor(1), t.lineWidth = 2, Stats.addPrimitive(), t.stroke()
}
var Box = function (t, e, i, s, r, o, a, n) {
  this.sizeX = r, this.sizeY = o
  var l = new b2BoxDef
  l.extents.Set(screenToPhys(.5 * r), screenToPhys(.5 * o)), l.restitution = a, l.friction = n
  var h = new b2BodyDef
  h.AddShape(l), h.position.Set(screenToPhys(e), screenToPhys(i)), h.rotation = s, this.body = t.CreateBody(h)
}
Box.prototype.draw = function (t) {
  var e = physToScreen(this.body.GetCenterPosition().x), i = physToScreen(this.body.GetCenterPosition().y),
    s = this.body.GetRotation()
  t.translate(e, i), t.rotate(s)
  var r = 20
  t.beginPath(), t.moveTo(0, .5 * -this.sizeY + .5 * this.sizeX), t.lineTo(0, .5 * this.sizeY - .5 * this.sizeX), t.lineWidth = r, t.lineCap = "round", t.strokeStyle = lineColor(.15), Stats.addPrimitive(), t.stroke(), t.lineWidth = r + 2, Stats.addPrimitive(), t.stroke(), t.strokeStyle = lineColor(.08), t.lineWidth = r + 4, Stats.addPrimitive(), t.stroke(), t.strokeStyle = lineColor(.08), t.lineWidth = r + 8, Stats.addPrimitive(), t.stroke(), t.strokeStyle = lineColor(.04), t.lineWidth = r + 12, Stats.addPrimitive(), t.stroke(), t.beginPath(), t.rect(.5 * -this.sizeX, .5 * -this.sizeY, this.sizeX, this.sizeY), t.lineWidth = 2, t.strokeStyle = lineColor(1), t.fillStyle = "#f0f0f0", Stats.addPrimitive(), t.fill(), Stats.addPrimitive(), t.stroke(), t.rotate(-s), t.translate(-e, -i)
}
var GridImpulse = function (t, e, i) {
  this.reset(t, e, i)
}
GridImpulse.prototype.reset = function (t, e, i) {
  this.impulsePosX = t, this.impulsePosY = e, this.delta = i
}, GridImpulse.prototype.drawImpulse = function (t, e, i, s, r) {
  var o = Math.round(e - s), a = Math.round(i - r), n = Math.round(e), l = Math.round(i),
    h = t.createLinearGradient(o, a, n, l)
  h.addColorStop(1, rgba(255, 255, 255, 1)), h.addColorStop(0, lineColor(0)), t.strokeStyle = h, t.lineWidth = 2, t.beginPath(), t.moveTo(e - s, i - r), t.lineTo(e, i), Stats.addPrimitive(), t.stroke(), t.beginPath(), t.arc(e, i, 3, 0, 2 * Math.PI, !1)
  var h = t.createRadialGradient(e, i, 0, e, i, 3)
  h.addColorStop(0, rgba(255, 255, 255, 1)), h.addColorStop(1, lineColor(0)), t.fillStyle = h, Stats.addPrimitive(), t.fill(), t.closePath()
}, GridImpulse.prototype.drawHorizontal = function (t) {
  var e = 20
  this.impulsePosX += e
  var i = this.delta * e
  return this.impulsePosY += i, this.drawImpulse(t, this.impulsePosX, this.impulsePosY, e, e * this.delta), !(this.impulsePosX > 3900)
}, GridImpulse.prototype.drawVertical = function (t) {
  var e = 20
  this.impulsePosY -= e
  var i = this.delta * e
  return this.impulsePosX += i, this.drawImpulse(t, this.impulsePosX, this.impulsePosY, e * this.delta, -e), !(this.impulsePosY < -1210)
}
var Level = function (t, e, i, s, r) {
  this.boxes = new Array
  var o = e * i / 6e5, a = 12 * o, n = .5 * a
  this.boxes[0] = new Box(t, -n, .5 * i, 0, a, i, s, r), this.boxes[1] = new Box(t, e + n, .5 * i, 0, a, i, s, r), this.boxes[2] = new Box(t, .5 * e, -n, .5 * Math.PI, a, e, s, r), this.boxes[3] = new Box(t, .5 * e, i + n, .5 * Math.PI, a, e, s, r), this.boxes[4] = new Box(t, .8 * e, .75 * i, .25 * Math.PI, a, 200 * o, s, r), this.boxes[5] = new Box(t, .2 * e, .75 * i, .25 * -Math.PI, a, 200 * o, s, r), this.boxes[6] = new Box(t, .8 * e, .25 * i, .25 * -Math.PI, a, 200 * o, s, r), this.boxes[7] = new Box(t, .2 * e, .25 * i, .25 * Math.PI, a, 200 * o, s, r), this.verticalGridStarts = new Array, this.verticalGridDeltas = new Array, this.horizontalGridStarts = new Array, this.horizontalGridDeltas = new Array
  for (var l = .5, h = -2500, d = 0; 26 > d; ++d) {
    this.verticalGridStarts[d] = 60 + d * (80 - .9 * d)
    var c = l * h - this.verticalGridStarts[d], p = i - h
    this.verticalGridDeltas[d] = c / p
  }
  for (var l = 44, h = 60, d = 0; 15 > d; ++d) {
    this.horizontalGridStarts[d] = -15 + d * (40 + 1.7 * d)
    var c = l * h - 0, p = h - this.horizontalGridStarts[d]
    this.horizontalGridDeltas[d] = p / c
  }
  random() * this.horizontalGridDeltas.length - 1
  this.horizontalGridImpulse = new GridImpulse(0, this.horizontalGridStarts[7], this.horizontalGridDeltas[7])
  random() * this.verticalGridDeltas.length - 1
  this.verticalGridImpulse = new GridImpulse(this.verticalGridStarts[25], i, this.verticalGridDeltas[25])
}
Level.prototype.generateHorizontalGridImpulse = function () {
  var t = Math.round(random() * (this.horizontalGridStarts.length - 1))
  t %= this.horizontalGridStarts.length
  var e = this.horizontalGridStarts[t], i = this.horizontalGridDeltas[t]
  this.horizontalGridImpulse = new GridImpulse(0, e, i)
}, Level.prototype.generateVerticalGridImpulse = function () {
  var t = Math.round(random() * (this.verticalGridStarts.length - 1))
  t %= this.verticalGridStarts.length
  var e = this.verticalGridStarts[t], i = this.verticalGridDeltas[t]
  this.verticalGridImpulse = new GridImpulse(e, 600, i)
}, drawLine = function (t, e, i, s, r) {
  t.beginPath(), t.moveTo(e, i), t.lineTo(s, r), t.lineWidth = 2, t.strokeStyle = lineColor(.1), Stats.addPrimitive(), t.stroke(), t.lineWidth = 14, t.strokeStyle = lineColor(.008), Stats.addPrimitive(), t.stroke()
}, Level.prototype.draw = function (t) {
  for (var e = 0; e < this.horizontalGridStarts.length; ++e) drawLine(t, 0, this.horizontalGridStarts[e], 1e3, this.horizontalGridStarts[e] + 1e3 * this.horizontalGridDeltas[e])
  for (var e = 0; e < this.verticalGridStarts.length; ++e) drawLine(t, this.verticalGridStarts[e], 600, this.verticalGridStarts[e] + 600 * this.verticalGridDeltas[e], 0)
  this.horizontalGridImpulse.drawHorizontal(t) || this.generateHorizontalGridImpulse(), this.verticalGridImpulse.drawVertical(t) || this.generateVerticalGridImpulse()
  for (var e = 4; e < this.boxes.length; ++e) this.boxes[e].draw(t)
}
var CanvasTest = function (t) {
  this.sizeX = 1e3, this.sizeY = 600, this.ctx = t, this.hitEffects = new HitEffectController
  var e = new b2AABB
  e.minVertex.Set(-50, -50), e.maxVertex.Set(this.sizeX + 50, this.sizeY + 50)
  var i = new b2Vec2(0, 0), s = !1
  this.physWorld = new b2World(e, i, s), this.level = new Level(this.physWorld, this.sizeX, this.sizeY, .8, .95)
  var r = this.sizeX * this.sizeY / 6e5
  this.balls = new Array
  for (var o = 0; 5 > o; ++o) this.balls[2 * o + 0] = new Ball(this.physWorld, this.sizeX * (.35 + .07 * o), .2 * this.sizeY, 5 + r * (15 + o), 500 * r, 1, 1), this.balls[2 * o + 1] = new Ball(this.physWorld, this.sizeX * (.35 + .07 * o), .8 * this.sizeY, 5 + r * (15 + o), 500 * r, 1, 1)
  Stats = new Statistics, Stats.reset()
}
CanvasTest.prototype.draw = function () {
  var t = new Date, e = t.getTime(), i = 1 / 120, s = 10
  this.physWorld.Step(i, s)
  var t = new Date, r = t.getTime()
  this.ctx.beginPath(), this.ctx.rect(0, 0, this.sizeX, this.sizeY)
  var o = this.ctx.createLinearGradient(0, this.sizeY, this.sizeX, 0)
  o.addColorStop(0, "rgba(255,255,255,1.0)"), o.addColorStop(1, "rgba(225,225,225,1.0)"), this.ctx.fillStyle = o, Stats.addPrimitive(), this.ctx.fill(), this.level.draw(this.ctx)
  for (var a = 0; a < this.balls.length; ++a) this.balls[a].detectCollision() && this.hitEffects.add(this.balls[a].collisionPosition.x, this.balls[a].collisionPosition.y), this.balls[a].draw(this.ctx)
  this.hitEffects.draw(this.ctx)
  var t = new Date, n = t.getTime()
  Stats.addFrame(r - e, n - r)
}, CanvasTest.prototype.getStats = function () {
  return Stats
}
