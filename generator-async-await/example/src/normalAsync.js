/**
 * Created by chan on 1/4/17.
 */

// 3. normal async flow with Promise
// a fake async request that takes in some data
// and return it unmodified after some milliseconds (by default 2000)
const makeRequest = (data, ms = 2000) => new Promise(r => setTimeout(r.bind(null, data), ms));

makeRequest('first request')
    .then(res => {
        console.log(res);
        return makeRequest('second request');
    })
    .then(res => {
        console.log(res);
        return makeRequest('third request');
    })
    .then(res => {
        console.log(res);
    }).catch(err => {
    console.error(err);
});