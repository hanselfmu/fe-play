We test the effectiveness of tree shaking in this project.

The setup is simple: app.js uses part of lib/alu.mjs, so **only part of lib/alu.mjs should be included in the final build**.

alu.mjs is compiled with Babel into ES5 using Rollup from alu.js (its source file).

alu.js contains 3 pure functions and two classes.

app.js uses one of the pure functions and both classes from alu.js, so ideally tree shaking should remove the unused 2 pure functions in alu.mjs. Those two functions (Multiply(), Substract()) should not be seen from the final bundle created by Webpack at dist/app.bundle.js.

To turn off tree shaking, use `require` instead of `import` in app.js.
