/*
 normal tail call flag:--harmony-tailcalls
 proper/syntactic/explicit tail call flag: --harmony-explicit-tailcalls.
 */

function a() { return b() }
function b() { return c() }
function c() {
    console.trace();
}

a();
