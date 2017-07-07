/**
 * Created by chan on 2/2/17.
 */

//"use strict";

console.log("start tests");

function foo() {
    console.log("creating foo");

    bar = function () {
        console.log("this is bar");
    };
}

bar = function () {
    console.log("this is global bar");
}

foo();

bar();


/*

 A throttle function.

 The usage usually is like this:

 throttle(function() {}, 300);
 */

function throttle(fn, interval) {
    var isThrottling = false;

    return function () {
        var context = this;

        if (!isThrottling) {
            fn.apply(context, arguments);
            isThrottling = true;
            setTimeout(() => {
                console.log(this);
                console.log(context);
                isThrottling = false;
            }, interval);
        } else {
            console.warn('throttling');
        }
    }
}

/*
 A debounce function.

 Starts a timer, and when the timer is up,
 */
function debounce(fn, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        timeout && clearTimeout(timeout);

        timeout = setTimeout(function () {
            console.log(this);
            console.log(context);
            fn.apply(context, args);
        }, wait);

    }
}

var counter = 0;

document.getElementById('throttle').addEventListener('click', throttle(function (e) {
    console.log("adding counter ");
    console.log(e);
    console.log(++counter);
}, 1000));

document.getElementById('debounce').addEventListener('click', debounce(function () {
    console.log("adding counter ");
    console.log(++counter);
}, 1000));


//"use strict";

// difference between arrow function and normal function

document.getElementById('normal-func').addEventListener('click', function (e) {
    console.log("this is declared function");
    console.log(this);
});

document.getElementById('arrow-func').addEventListener('click', (e) => {
    console.log("this is arrow function");
    console.log(this);
});

// Object, prototype, "new", and "this"

/*
 A function defines an object class. If a function returns nothing, or returns primitive types,
 calling "new" would return itself. If it returns a reference type, calling "new" returns that object.

 When calling a function with the "new" keyword, it will bind "this" to this function object; otherwise
 "this" will be bound to the global Window object.
 */

function globalNormal() {
    console.log("this is a normal function");
    console.log(this);
}

// This globally defined arrow function will have its "this" bound
// to its lexical scope "this", which is "window". However it is called
// will not change "this".
var globalArrow = () => {
    console.log("this is a global arrow function");
    console.log(this);
}

function Person() {
    console.log(this);

    this.name = "person";

    return {
        foo: function () {
            console.log("this is a normal function");
            console.log(this);
        },

        globalNormal,

        bar: () => {
            console.log("this is an arrow function");
            console.log(this);
        },

        globalArrow
    };
}

var obj = {
    foo: globalNormal
};

var p = Person();
var newP = new Person;

p.foo();    // object{}
p.bar();    // window
p.globalArrow();    // window

newP.foo();     // object{}
newP.bar();     // {name: "person"}
newP.globalArrow();     // window

/* Different ways to bind events */
var eventCb = function () {
    console.log("event callback");
    console.log(this);
}

var eventsContainer = document.getElementById('events');

// 1. DOM Level 0 inline model
var dom0Inline = document.createElement('button');
dom0Inline.setAttribute('onclick', 'eventCb();');
dom0Inline.appendChild(document.createTextNode('DOM Level 0 Inline Model'));

eventsContainer.appendChild(dom0Inline);

// 2. DOM Level 0 traditional model
var dom0traditional = document.createElement('button');
dom0traditional.onclick = eventCb;
dom0traditional.appendChild(document.createTextNode('DOM Level 0 Traditional Model'));

eventsContainer.appendChild(dom0traditional);

// 3. DOM Level 2 W3C

var dom2W3C = document.createElement('button');
dom2W3C.addEventListener('click', eventCb);
dom2W3C.appendChild(document.createTextNode('DOM Level 2 W3C'));

eventsContainer.appendChild(dom2W3C);

// 4 DOM Level 2 IE
// This is omitted.

/* Deep vs. Shallow copies (and function arguments leak) */
function argumentsLeak() {
    var args = [].slice.call(arguments);    // or simply console.log(arguments) would do
    // because basically the engine doesn't and cannot optimize against function arguments passed
    // around as references.
}

// from: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
function argumentsProxied() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; ++i) {
        //i is always valid index in the arguments object
        args[i] = arguments[i];
    }
    return args;
}

var refObj = {
    a: 1
}

function modifier(o) {
    o.a = 2;

}

console.log(refObj);
