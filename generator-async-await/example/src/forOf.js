/**
 * Created by chan on 1/4/17.
 */
// 2. generator with for..of
function *bar() {
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
}

// prints out "hello" in separate lines
for (let i of bar()) {
    console.log(i);
}