function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function Add() {
  return Array.from(arguments).reduce(function(prev, cur) {
    return prev + cur;
  });
}

export let a = 0;

function Multiply() {
  a = 1;
  console.log('I should be tree-shaked');
  return Array.from(arguments).reduce(function(prev, cur) {
    return prev * cur;
  });
}
function Subtract() {
  console.log('I should be tree-shaked');
  return Array.from(arguments).reduce(function(prev, cur) {
    return prev - cur;
  });
}
var ALU =
  function() {
    function ALU() {
      _classCallCheck(this, ALU);

      console.log("hello it's ".concat(Date()));
    }

    _createClass(ALU, [{
      key: "Add",
      value: function Add(a, b) {
        return a + b;
      }
    }]);

    return ALU;
  }();
var Math =
  function() {
    function Math() {
      _classCallCheck(this, Math);
    }

    _createClass(Math, [{
      key: "Multiply",
      value: function Multiply(a, b) {
        return a * b;
      }
    }]);

    return Math;
  }();

export { ALU, Add, Math, Multiply, Subtract };
