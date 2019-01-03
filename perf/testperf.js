const now = performance.now();
var res = '';
for (var i = 0; i < 1e7; i++) {
    res += i;
}

console.log(`took ${performance.now() - now} ms`);