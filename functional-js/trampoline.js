// tail recursion and trampolines
// we use Factorial as demo usage of recursion.

/**
 * 1. normal recursion calls
 */
function normalFactorial(n) {
    return n < 1 ? 1 : n * normalFactorial(n - 1);
}

console.assert(6 === normalFactorial(3));
console.assert(24 ===  normalFactorial(4));
console.assert(3628800 === normalFactorial(10));

try {
    normalFactorial(10000);     // in fact in my Chrome, the "max stack exceeded" throws at 8350.
} catch(e) {
    console.log('normal factorial stack size error');
    console.error(e);
}

/**
 * 2. tail recursion with memoization
 */
function tailFactorial(n, mem) {
    if (mem === undefined) {
        return tailFactorial(n - 1, n);
    } else {
        return n < 1 ? mem : tailFactorial(n - 1, n * mem);
    }
}

console.assert(6 === tailFactorial(3));
console.assert(24 ===  tailFactorial(4));
console.assert(3628800 === tailFactorial(10));

try {
    tailFactorial(10000);
} catch(e) {
    console.log('tail factorial stack size error');
    console.error(e);
}

/**
 * takes in a function and return a trampolined version of it.
 *
 * From Wikipedia:
 * As used in some Lisp implementations, a trampoline is a loop
 * that iteratively invokes thunk-returning functions (continuation-passing style).
 * A single trampoline suffices to express all control transfers of a program;
 * a program so expressed is trampolined, or in trampolined style;
 * converting a program to trampolined style is trampolining.
 * Programmers can use trampolined functions to implement tail-recursive function calls
 * in stack-oriented programming languages.
 *
 * @param fn original function to be trampolined
 * @return fn trampolined version of the original function
 */
function trampoline(fn) {
    return function() {
        let res = fn.apply(this, arguments);

        while (typeof res === 'function') {
            res = res();
        }

        return res;
    }
}

function trampolinedFactorial(n) {
    const _factorial = trampoline(function myself (n, mem) {
        return n < 1 ? mem : function () { return myself(n - 1, mem * n); };
    });

    return _factorial(n, 1);
}

console.assert(6 === trampolinedFactorial(3));
console.assert(24 ===  trampolinedFactorial(4));
console.assert(3628800 === trampolinedFactorial(10));

console.log(trampolinedFactorial(32768));
