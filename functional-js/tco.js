/*
 normal tail call flag:--harmony-tailcalls
 proper/syntactic/explicit tail call flag: --harmony-explicit-tailcalls.
 */

"use strict";

function a() { return b(); }
function b() { return c(); }
function c() {
    console.trace();
}

a();

function direct() {
    return (function f(n){
        if (n <= 0) {
            return  "foo";
        }
        return f(n - 1);
    }(100000)) === "foo";
}

console.log(direct());
