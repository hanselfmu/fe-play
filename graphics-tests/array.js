var guide = {
  isDoable: !0,
  operations: 1228,
  time: 0,
  internalCounter: !1,
  testName: "Array Test",
  testVersion: "1.0",
  isConformity: 0,
  isStressTest: 0
}, primeTests = [], primes = [], meta = [], test = {
  init: function () {
    for (var e = 1; primeTests.length < 1e4;) primeTests.push(++e)
    return primes.push(1), guide
  }, run: function (e, t, r) {
    if (e) {
      var s = ""
      for (var n in primes) {
        var i = primes.slice(n, n + 1), a = 0 == n ? "" : ", "
        s += a + i[0], BasemarkWebEngine.increaseCounter()
      }
      document.getElementById("array-test-content-area").textContent = s
      var m = BasemarkWebEngine.getElapsedTime()
      s == primes.join(", ") ? (BasemarkWebEngine.increaseCounter(), BasemarkWebEngine.submitResult(counter, guide, meta, m, 0, 13685), BasemarkWebEngine.nextPage(location.pathname)) : (meta.push({
        error: "Output doesn't match join!",
        time: m
      }), BasemarkWebEngine.submitResult(0, guide, meta, m, 0, 13685), BasemarkWebEngine.nextPage(location.pathname))
    } else {
      var o = primeTests[0]
      for (var n in primeTests) primeTests[n] % o == 0 && (primeTests.splice(n, 1), BasemarkWebEngine.increaseCounter())
      primes.push(o), meta.push({prime: o, loop: t, time: r}), BasemarkWebEngine.increaseCounter()
    }
  }
}