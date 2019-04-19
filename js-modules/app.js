import { Add, ALU, Math, a } from './lib/alu.mjs';
// const { Add, ALU, Math } = require('./lib/alu.mjs');

console.log(a);
console.log(Add(1, 2, 3, 4));
console.log(Add(1, 2, 3, 4));

const alu = new ALU();
console.log(alu.Add(1, 2));
const math = new Math();
console.log(math.Multiply(3, 4));
