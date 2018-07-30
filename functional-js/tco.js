/*
 normal tail call flag:--harmony-tailcalls
 proper/syntactic/explicit tail call flag: --harmony-explicit-tailcalls.
 */

"use strict";

function fib(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return f(n - 1) + f(n -2);
}

console.log(fib(10));
