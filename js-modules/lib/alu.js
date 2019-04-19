export function Add() {
  return Array.from(arguments).reduce((prev, cur) => prev + cur);
}

export function Multiply() {
  console.log('I should be tree-shaked');
  return Array.from(arguments).reduce((prev, cur) => prev * cur);
}

export function Subtract() {
  console.log('I should be tree-shaked');
  return Array.from(arguments).reduce((prev, cur) => prev - cur);
}

export class ALU {
  constructor() {
    console.log(`hello it's ${Date()}`);
  }

  Add(a, b) {
    return a + b;
  }
}

export class Math {
  Multiply(a, b) {
    return a * b;
  }
}
