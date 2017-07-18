var a = '';

function foo() {
    a = 'private variable';
    return function bar() {
        console.log(a);
    }
}

var callAlert = foo();

var a = 'public';

callAlert(); // private variable

console.log(typeof a);