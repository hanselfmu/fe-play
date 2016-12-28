# generator 与 Async/Await

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

1. 将 *param* 作为一个参数传给next()；
2. caller将执行权交给generator；
3. 如果yield表达式在一个赋值语句中，*param* 会被赋值给等号左边的变量；
4. generator由刚才暂停的地方（yield表达式）重新开始。

干巴巴地说是很难理解的，让我们来看一段简单的代码：
```
// callee -- generator
function *gen() {
  let x = 1;
  let y = yield x + 1;
  console.log(y);       // prints out 10
}

// caller code
let g = gen();
console.log(g.next(10));  // prints out {value: 2, done: false}
```

这段代码的执行基本上是以下步骤：
1. 定义名为gen的generator方程；
2. 将gen初始化，并把generator的实例赋值给变量g（通过`gen()`)；
3. 执行console.log语句，遇到g.next()；
4. 执行g.next(1)
3. gen开始执行，创建本地变量x；
4. gen继续执行，遇到yield表达式；
5. 对yield表达式`x + 1`求值，得到2；
6. gen将2这个结果返回给caller，暂停自身；
7. caller获得执行权；继续执行，遇到console.log

### generator
