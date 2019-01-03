/*
Compares several object cloning techniques, including:
1. normal recursive clone
2. normal iterative clone
3. JSON stringify clone
 */

function cloneRecursive(src) {
  if (src === null || src === undefined) {
    return src;
  }

  if (typeof src === 'object') {
    if (Array.isArray(src)) {
      const res = [];
      for (let i = 0; i < src.length; i++) {
        res[i] = cloneRecursive(src[i]);
      }
      // ignoring array's custom enumerable properties, just treating array as a barebone array
      return res;
    } else {
      const res = Object.getPrototypeOf(src) ? Object.create(Object.getPrototypeOf(src)) : {};
      const keys = Object.keys(src);
      for (let i = 0; i < keys.length; i++) {
        res[keys[i]] = cloneRecursive(src[keys[i]]);
      }
      return res;
    }
  } else if (typeof src === 'function') {
    return src;   // do not handle function deep clone right now
  } else {
    return src;
  }
}

/* test code */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.add = function(x, y) {
  this.x += x;
  this.y += y;
};

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);
const obj = {
  p1,
  arr: [ p1, p2, null ],
  p3: { x: 5, y: 6},
  deep: {
    l1: {
      l2: [{ p1, p2 }]
    }
  }
};

let cloned, jsoned;

const start = performance.now();

for (let i = 0; i < 1e5; i++) {
  cloned = cloneRecursive(obj);
}

const endRecursiveClone = performance.now();

for (let i = 0; i < 1e5 ; i++) {
  jsoned = JSON.parse(JSON.stringify(obj));
}

const endJSONParse = performance.now();

console.log(`recursive clone takes ${endRecursiveClone - start}ms.`);
console.log('result:', cloned);
console.log(`json parse stringify takes ${endJSONParse - endRecursiveClone}ms.`);
console.log('result:', jsoned);

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

