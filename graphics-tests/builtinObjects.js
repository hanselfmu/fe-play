var guide = {
  isDoable: !0,
  operations: 3,
  time: 0,
  internalCounter: !1,
  testName: "Built-in Objects Test",
  testVersion: "1.0",
  isConformity: 0,
  isStressTest: 0
}, a = null, i = null, check = "", times = [], writeArea = null, meta = [], test = {
  init: function () {
    return i = 973, writeArea = document.getElementById("built-in-objects-test-content-area"), writeArea.textContent = "0: ", check = "0: ", guide
  }, run: function (isFinal, loopCount, elapsedTime) {
    if (isFinal) {
      var elapsed = BasemarkWebEngine.getElapsedTime()
      BasemarkWebEngine.submitResult(counter, guide, meta, elapsed, 0, 21229), BasemarkWebEngine.nextPage(location.pathname)
    } else {
      var startTime = elapsedTime
      for (i = 973; 1021 > i; i++) a = new Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Boolean(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Boolean",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new DataView(new ArrayBuffer(i)), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter(), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "DataView + ArrayBuffer",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 98
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Date(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Date",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Error(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Error",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new EvalError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "EvalError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Float32Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Float32Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Float64Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Float64Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Function(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Function",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Int16Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Int16Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Int32Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Int32Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Int8Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Int8Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Number(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Number",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Object(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Object",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new RangeError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "RangeError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new ReferenceError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "ReferenceError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new RegExp(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "RegExp",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new String(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "String",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new SyntaxError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "SyntaxError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new TypeError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "TypeError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new URIError(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "URIError",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Uint16Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Uint16Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Uint32Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Uint32Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = new Uint8Array(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "Uint8Array",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = decodeURI(encodeURI("http://www.basemark.com/" + i)), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter(), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "decodeURI + encodeURI",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 98
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = decodeURIComponent(encodeURIComponent(i)), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter(), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "decodeURIComponent + encodeURIComponent",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 98
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = eval(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "eval",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = isFinite(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "isFinite",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = isNaN(i), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "isNaN",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = parseFloat(i.toString()), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      for (meta.push({
        object: "parseFloat",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), i = 973; 1021 > i; i++) a = parseInt(i.toString()), i == 1e3 + loopCount && (writeArea.textContent += loopCount + ":" + i + ": " + a.toString(), check += loopCount + ":" + i + ": " + a.toString()), BasemarkWebEngine.increaseCounter()
      meta.push({
        object: "parseInt",
        elapsed: BasemarkWebEngine.getElapsedTime() - elapsedTime,
        count: 49
      }), elapsedTime = BasemarkWebEngine.getElapsedTime(), writeArea.textContent != check || writeArea.textContent.length < 5 ? (meta.push({
        loop: loopCount,
        error: "Write content mismatch!",
        time: elapsedTime - startTime + 1e3
      }), BasemarkWebEngine.increaseElapsedTime(1e3)) : meta.push({
        loop: loopCount,
        ok: "OK",
        time: elapsedTime - startTime
      }), writeArea.textContent = loopCount + 1 + ": ", check = loopCount + 1 + ": "
    }
  }
}
