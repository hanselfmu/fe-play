/**
 * Created by chan on 3/1/17.
 */

function testFn() {
    var args = new Array(arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
    }

    console.log(arguments);
    return args;
}

function printStatus(fn) {
    switch (%GetOptimizationStatus(fn)) {
        case 1: console.log("Function is optimized"); break;
        case 2: console.log("Function is not optimized"); break;
        case 3: console.log("Function is always optimized"); break;
        case 4: console.log("Function is never optimized"); break;
        case 6: console.log("Function is maybe deoptimized"); break;
        case 7: console.log("Function is optimized by TurboFan"); break;
        default: console.log("Unknown optimization status"); break;
    }
}

//Fill type-info
testFn();
// 2 calls are needed to go from uninitialized -> pre-monomorphic -> monomorphic
testFn();

%OptimizeFunctionOnNextCall(testFn);
//The next call
testFn();

//Check
printStatus(testFn);