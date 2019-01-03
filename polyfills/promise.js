/*

Please implement a pure-ES5 Promise polyfill.
Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
for details about how a Promise works.
*/

Promise = function(executor) {
  if (typeof executor !== 'function') {
    // Promise resolver 123 is not a function
    throw new TypeError('Promise resolver ' + executor + ' is not a function');
  }

  this.value = null;
  this.error = null;
  this.subscribers = [];
  var state = 'pending';
  Object.defineProperty(this, 'state', {
    get() {
      return state;
    },
    set(newState) {
      state = newState;

      if (newState === 'fulfilled' || newState === 'rejected') {
        this.subscribers.forEach(function(handler) {
          handler(newState);
        })
      }
    }
  });

  var _this = this;
  var resolve = function(result) {
    _this.state = 'fulfilled';
    _this.value = result;
  };

  var reject = function(error) {
    _this.state = 'rejected';
    _this.error = error;
  };

  try {
    executor(resolve, reject);
  } catch(e) {
    this.state = 'rejected';
    this.error = e;
  }
};

Promise.prototype.then = function(onFulFilled, onRejected) {
  if (typeof onRejected !== 'function') {
    onRejected = function(error) {
      throw new Error(error.message);
    }
  }
  var currentPromise = this;
  return new Promise(function(resolve, reject) {
    var handler = function(state) {
      setTimeout(function() {
        try {
          if (state === 'fulfilled') {
            resolve(onFulFilled(currentPromise.value));
          } else {
            resolve(onRejected(currentPromise.error));
          }
        } catch(e) {
          reject(e);
        }
      });
    };

    if (currentPromise.state === 'fulfilled') {
      handler('fulfilled');
    } else if (currentPromise.state === 'rejected') {
      handler('rejected');
    } else {
      // default state is pending
      currentPromise.subscribers.push(handler);
    }
  });
};

Promise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected);
};

const p = new Promise(res => {
  console.log('what\'s the answer to The Ultimate Question of Life, the Universe, and Everything?');
  res(42);
});

p.then(l => {
  console.log('The answer is', l);
  return 'Who said it?'
}).then(s => {
  console.log(s);
  throw new Error('I don\'t know who said it');
  // return 3;
}).then(r => {
  console.log('should never reach this', r);
}).catch(e => {
  console.log('error', e);
});

p.then(l => {
  console.log('this is another sequence with the same question!');
  return l;
}).then(s => {
  console.log('As I said, the answer is', s);
});

console.log('contemplating...');

/*
the sequence should be:

what's the answer to The Ultimate Question of Life, the Universe, and Everything?
contemplating...
The answer is 42
this is another sequence with the same question!
Who said it?
As I said, the answer is 42
error Error: I don't know who said it
    at onRejected (promise.js:50)
    at promise.js:61
 */