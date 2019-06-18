// const { performance } = require('perf_hooks');

function Container() {
    this.q = [];
}

Container.prototype.push = function (v) {
    this.q.push(v);
}
const b = 1e7;

let now = performance.now();
const container1 = new Container();
for (let i = 0; i < b; i++) container1.push([i, 'i']);
console.log(`array took ${performance.now() - now}ms`);

// let memUsed = process.memoryUsage().heapUsed / 1024;
// console.log(`The script uses approximately ${Math.round(memUsed * 100) / 100} KB`);

now = performance.now();
const container2 = new Container();
for (let i = 0; i < b; i++) container2.push({ i, s: 'i' });
console.log(`object took ${performance.now() - now}ms`);

// memUsed = process.memoryUsage().heapUsed / 1024;
// console.log(`The script uses approximately ${Math.round(memUsed * 100) / 100} KB`);
