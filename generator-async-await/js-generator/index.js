/**
 * Created by chan on 11/10/16.
 */

// callee -- generator
function *foo() {
    let x = 1;
    let y = yield x + 1;
    console.log(y);       // prints out 10
}

// caller code
let g = foo();
console.log(g.next());
console.log(g.next(10));  // prints out {value: 2, done: false}