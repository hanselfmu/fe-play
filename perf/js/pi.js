
let sum = 1000;

for (let i = 1; i < 1000; i++) {
    let diff = 1000 / (i * 2 + 1);
    if (i % 2 === 1) {
        sum -= diff;
    } else {
        sum += diff;
    }
}

console.log(sum * 4);