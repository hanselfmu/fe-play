const { performance } = require('perf_hooks');
function SimpleDSet() {
    this.dset = {};
}

SimpleDSet.prototype.union = function (a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA && rootB) {
        if (rootA === rootB) return;
        this.dset[rootA] = rootB;
    } else if (rootA) {
        this.dset[b] = rootA;
    } else if (rootB) {
        this.dset[a] = rootB;
    } else {
        this.dset[a] = this.dset[b] = b;
    }
}

SimpleDSet.prototype.find = function (a) {
    if (!this.dset[a]) return null;
    while (a !== this.dset[a]) a = this.dset[a];
    return a;
}

function SizedDSet() {
    this.dset = {};
    this.size = {};
}

SizedDSet.prototype.union = function (a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA && rootB) {
        if (rootA === rootB) return;
        if (this.size[rootA] > this.size[rootB]) {
            this.mergeWithSize(rootB, rootA);
        } else {
            this.mergeWithSize(rootA, rootB);
        }
    } else if (rootA) {
        this.mergeWithSize(b, rootA);
    } else if (rootB) {
        this.mergeWithSize(a, rootB);
    } else {
        this.dset[a] = this.dset[b] = b;
        this.size[b] = 2;
    }
}

SizedDSet.prototype.mergeWithSize = function (newChild, newParent) {
    this.dset[newChild] = newParent;
    this.size[newParent] += this.size[newChild] || 1;
    delete this.size[newChild];
}

SizedDSet.prototype.find = function (a) {
    if (!this.dset[a]) return null;
    if (this.dset[a] === a)
        return a;
    else {
        this.dset[a] = this.find(this.dset[a]);
        return this.dset[a];
    }
}

/*
benchmarks

We perform 1e6 uniformly distributed sequences of unions and finds, with random values in [1, 100]
*/
// [0, max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// this number controls how many distinct numbers exist, therefore how deep a disjoint set tree can grow.
// For a simple tree with no path compression, it can grow as tall as O(maxNumber),
// where for a union-by-size / rank tree with path compression, it can grow as tall as O(log(maxNumber)).
// The bigger this number is set, the more advantage an advanced disjoint set solution can provide.
const maxNumber = 100;
const actionSequence = [];
for (let i = 0; i < 1e6; i++) {
    const id = getRandomInt(2);
    if (id === 0) { // union
        actionSequence.push({
            id,
            value: [getRandomInt(maxNumber), getRandomInt(maxNumber)],
        })
    } else {    // find
        actionSequence.push({
            id,
            value: getRandomInt(maxNumber),
        })
    }
}

const simpleDSet = new SimpleDSet();
const sizedDSet = new SizedDSet();

let now = performance.now();
for (let action of actionSequence) {
    if (action.id === 1) {
        simpleDSet.find(action.value);
    } else {
        simpleDSet.union(action.value[0], action.value[1]);
    }
}
console.log(`simple dset took ${performance.now() - now}ms`);
now = performance.now();
for (let action of actionSequence) {
    if (action.id === 1) {
        sizedDSet.find(action.value);
    } else {
        sizedDSet.union(action.value[0], action.value[1]);
    }
}
console.log(`sized dset took ${performance.now() - now}ms`);
