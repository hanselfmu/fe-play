# ES6 Generator基础

## Promise现有的问题

Promise作为ES6中实现的异步操作API，使得Javascript中的异步编程变得简单了许多。Promise为我们解决了回调地狱的问题，也让我们可以把异步调用作为变量来传递。但是Promise还存在一些问题或不足，比如：
1. Promise一旦创建就会直接开始执行，也无法取消或中止；
2. Promise本质更适合处理一次性异步操作；重复的异步操作不符合Promise的状态机；
3. 与普通回调类似的跳跃性的执行顺序，在同步操作与异步操作中切换依然比较困难；
4. try catch与同步操作的代码书写方式不一致。

我们理想中的异步操作应该是这样的：

```
// pseudocode
get something from server asynchronously;
wait until the results come back

```

## Generator

generator是ES6带给我们的新特性之一。虽然对于Javascript来说，它还是一种新的特性，但是在别的语言中，generator也存在一段时间了。generator是一种十分强大的功能，它为Javascript编程带来了许多新的可能性。

generator本身是一种特殊的方程。不同于普通的方程的是，generator提供了一种暂停的机制。在方程的执行过程中，它可以暂停*一次或多次*，在每次暂停的时候都会把execution交还给generator的caller，由caller决定什么时候继续generator的执行。具体如何使用generator呢？先来看一下它的语法。

### generator基本语法

generator方程的声明方式与普通方程不一样：

```
function *someFun() {
  // ...
}

let someFun = function*() {

}
```

在function与方程名字的中间加了一个\*号，这是generator方程的特殊标记。虽然它看起来和C语言中的指针很像，但是它俩没什么关系。这个星号只是用来向JS的编译器声明：此方程为generator方程。你也可以把星号写在function之后，把空格放在\*与function name之间。当然了，假如你希望在自己的代码库中统一\*的位置（比如我），可以使用[这条校验规则](http://eslint.org/docs/rules/generator-star-spacing)。

值得注意的是，箭头函数无法成为generator。

generator方程的内部和普通的方程没有什么不同，除了一个新的关键词：**yield**。它是一种特殊的Javascript expression；更准确得说，`yield`后面跟随的是Javascript expression（*注意expression与statement的区别：expression可以作为statement，而反之则不行*）。

例如：
```
let x = 1;

// valid
yield (x + 1);

// invalid
yield (if (x = 1));
```

**yield** 是generator提供暂停重启机制的关键点。当JS执行到yield语句时，它会做以下事情：

1. 获取yield后面的表达式，并对其求值；
2. 暂停generator；
3. 将求得的值返回给generator的caller；
4. caller获得执行权。

那么generator如何从caller手中拿回执行权呢？这需要caller使用类似迭代器的一种方程：`next()`。当caller方程使用next(param)时，它会做以下事情：

1. 将 *param* 作为一个参数传给`next()`；
2. caller将执行权交给generator；
3. 如果yield表达式在一个赋值语句中，*param* 会被赋值给等号左边的变量；
4. generator由刚才暂停的地方（yield表达式）重新开始。

干巴巴地说是很难理解的，让我们来看一段简单的代码：
```
// callee -- generator
function *foo() {
  let x = 1;
  let y = yield x + 1;
  console.log(y);       // prints out 10
}

// caller code
let g = foo();
console.log(g.next());
console.log(g.next(10));  // prints out {value: 2, done: false}

```

这段代码的执行基本上是以下步骤：
1. 定义名为foo的generator方程；
2. 将foo初始化，并把generator的实例赋值给变量g（通过`foo()`)；
3. caller执行第一条console.log()，遇到第一条g.next()；
4. caller暂停，将执行权传递给foo，直到yield表达式；
5. yield表达式对（x + 1）进行求值，并将值以及执行权返回给caller；
6. caller在console打出generator的返回值：{ value: 2, done: false }；
7. caller继续执行，遇到第二条g.next(10)；
8. 此时，10这个参数会和执行权一起被传递给foo，10被赋值给y；
9. foo在console中打出10；
10. foo执行完毕，返回最终值：{ value: undefined, done: true }，并将执行权交给caller；
11. caller打出foo返回的最终值。

可以看出来，generator可以十分简单地完成暂停与重新开始的一套流程。如果我们在Chrome中观察generator执行的stack，可以看到，其实每次generator执行到yield表达式，JS引擎都会把generator的stack frame移除（类似一个return），从而使得执行指针重新回到caller中。当caller执行到`next()`时，JS引擎会把之前移除的stack frame重新取回并放在call stack最上层，并由之前暂停的语句继续执行。

### ES5中的Generator

**TL;DR**
使用[babel的transform-regenerator plugin](http://babeljs.io/docs/plugins/transform-regenerator/)；该插件也被包含在[babel的ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/)中。

Babel的这个插件核心就是Facebook的[regenerator](https://github.com/facebook/regenerator)。假如我们使用命令：
```
// Suppose you have regenerator installed
regenerator --include-runtime index.js > build/regen.js
```
就可以看到regenerator-runtime的代码。本质上来说，generator和iterator是十分相近的，事实上，在regenerator-runtime中，generator使用了iterator的prototype。因此，不仅可以使用`next()`对generator进行迭代，更可以使用iterator的`for..of`来对generator进行遍历求值。比如：
```
function *bar() {
  yield 'h';
  yield 'e';
  yield 'l';
  yield 'l';
  yield 'o';
}

// prints out h e l l o
for (var i of bar()) {
  console.log(i);
}
```

### Generator的实际应用

#### 更好的异步工作流

Generator最常见的应用应该就是与Promise结合处理异步工作流了。先看一段很普通的使用Promise做异步请求的代码：
```
// a fake async request that takes in some data
// and return it unmodified after some milliseconds (by default 2000)
const makeRequest = (data, ms = 2000) => new Promise(r => setTimeout(r.bind(null, data), ms));

makeRequest('first request')
    .then(res => {
        console.log(res);
        return makeRequest('second request');
    })
    .then(res => {
        console.log(res);
        return makeRequest('third request');
    })
    .then(res => {
        console.log(res);
    }).catch(err => {
    console.error(err);
});
```

这种使用Promise Chaining完成的异步工作流应该是很常见的，它也较好地解决了普通的回调方程产生的回调地狱等问题。但是，我们使用generator可以把它变得更易于理解：
```
// a better async flow with generator
const makeGeneratorRequest = (data, ms = 2000) => makeRequest(data, ms).then(res => {
    asyncGenRunner.next(res);
});

function *asyncGen() {
    console.log(yield makeGeneratorRequest('first request'));
    console.log(yield makeGeneratorRequest('second request'));
    console.log(yield makeGeneratorRequest('third request'));
}

let asyncGenRunner = asyncGen();
asyncGenRunner.next();
```

可以看到，这样的代码写出的异步工作流，比链式promise更易读易懂，因为它与同步工作流几乎是没有区别的。在`asyncGen()`中，每一个异步请求`makeGeneratorRequest()`都是在一个yield表达式中，只有当请求完成时才会继续执行。至于真正的异步工作本身则被很好地抽离到了`makeGeneratorRequest()`内部，这也就意味着，`makeGeneratorRequest()`可以随时更改其内部逻辑，比如将Promise改为普通的回调（只是举个例子），而调用部分的代码`asyncGen()`完全不用改变。这种separation of concerns也使得编写测试变得简单了。

值得注意的是，如果将`makeGeneratorRequest()`改为完全的同步工作流：
```
// This code will throw a TypeError
const makeGeneratorRequest = (data) => {
  asyncGenRunner.next(data);
}
```
那么刚才的`asyncGen()`则会报错。这是因为，对generator的迭代（调用`next()`）不能发生在该generator的stack frame上面。完全同步的工作流会在asyncGen的stack frame上放置一个makeGeneratorRequest的stack frame，并试图在这个stack frame中调用`next()`，JS引擎这时就会报错。所以，需要将上面的代码改为：
```
const makeGeneratorRequest = (data) => {
    setTimeout(function() {
        asyncGenRunner.next(data);
    }, 0);
};
```
才可以正常运行。

#### Redux-Saga

[redux-saga](https://github.com/redux-saga/redux-saga)是一个与Redux相关的库，用来解决Redux中复杂的“副作用”问题（如I/O等）。它提供了许多帮助性的方法，如`takeEvery`与`takeLatest`，结合redux-saga的[fork or spawn](https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/ForkModel.md)，可以很好地为复杂的异步工作流提供支持。和上面那个简单的异步工作流示例一样，当我们使用generator把复杂的异步工作抽离出来时，“副作用”就变得更加容易测试了。因此，redux-saga还会使得Redux应用变得更易测试。

#### Koa.js

[Koa](https://github.com/koajs/)作为一个较新的Node框架，支持了基于generator的回调。比如：
```
app.use(function *(next) {
  this.body = yield api.getUserById(this.session.userId);
});
```
而Koa内部使用了[co.js](https://github.com/tj/co)的`co.wrap()`来将generator方程转换成一个返回Promise对象的方程（在co v4之前，`co()`会将generator方程转换成为一个thunk）。

在Koa V2中，generator将被async方程所替代，这也使得Koa离ES7更近一步。

### generator在V8中

#### 如何判断是不是generator function？

```
// line 3293 @ src/parsing/parser-base.h
FunctionKind function_kind = Check(Token::MUL)
                                 ? FunctionKind::kGeneratorFunction
                                 : FunctionKind::kNormalFunction;
```

#### V8 Crankshaft与Generator

V8的优化引擎Crankshaft不支持对generator的优化：
```
if (IsGeneratorFunction(info()->shared_info()->kind())) {
  // Crankshaft does not support generators.
  return AbortOptimization(kGenerator);
}
```

同样地，V8也不支持对于generator的ignition优化：
```
bool ShouldUseIgnition(CompilationInfo* info) {
  ...
  // Resumable functions are not supported by {FullCodeGenerator}, suspended
  // activations stored as {JSGeneratorObject} on the heap always assume the
  // underlying code to be based on the bytecode array.
  DCHECK(!IsResumableFunction(shared->kind()));
  ...
}
```

### 由Generator到Async Await

Generator带来了很多有趣的特性，其中包括了更加强大的异步工作流解决方案，而在ES7中，这种异步工作流可以被 **async/await** 更好地解决。事实上，在很多 **async/await** 的polyfill库中就是使用了generator来实现async方程的。
