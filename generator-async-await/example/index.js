/**
 * Created by chan on 11/10/16.
 */

// 1. very simple generator
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

// 2. generator with for..of
function *bar() {
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

// prints out "hello" in separate lines
for (let i of bar()) {
    console.log(i);
}

// 3. generator with async flow
// a fake async request that takes in some data
// and return it unmodified after some milliseconds (by default 2000)
const makeRequest = (data, ms = 2000) => new Promise(r => setTimeout(r.bind(null, data), ms));

//makeRequest('first request')
//    .then(res => {
//        console.log(res);
//        return makeRequest('second request');
//    })
//    .then(res => {
//        console.log(res);
//        return makeRequest('third request');
//    })
//    .then(res => {
//        console.log(res);
//    }).catch(err => {
//    console.error(err);
//});

// a better async flow with generator
const makeGeneratorRequest = (data, ms = 2000) => makeRequest(data, ms).then(res => {
    asyncGenRunner.next(res);
});

function *asyncGen() {
    console.log(yield makeGeneratorRequest('first request'));
    console.log(yield makeGeneratorRequest('second request'));
    console.log(yield makeGeneratorRequest('third request'));
}

let asyncGenRunner = asyncGen();
asyncGenRunner.next();


