function foo(x, y, z) {
    console.log(foo.length);
    console.log(arguments.length);
}

console.log(foo.length);

foo(1, 2);