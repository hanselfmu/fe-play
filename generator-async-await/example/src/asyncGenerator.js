/**
 * Created by chan on 1/4/17.
 */

// 4. async flow with Generator
// a fake async request that takes in some data
// and return it unmodified after some milliseconds (by default 2000)
const makeRequest = (data, ms = 2000) => new Promise(r => setTimeout(r.bind(null, data), ms));

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