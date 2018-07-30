/**
 * Created by chan on 1/3/17.
 */

// #1: createTextNode vs. innerHTML for attaching text
var body = document.body;

let perf = window.performance;
perf.mark('mark_start_createTextNode');

for (let i = 0; i < 1000; i++) {
    body.appendChild(document.createTextNode('this is No. ' + i));
}

perf.mark('mark_end_createTextNode');

perf.mark('mark_start_innerHTML');

for (let i = 0; i < 1000; i++) {
    body.innerHTML += 'this is No. ' + i;
}

perf.mark('mark_end_innerHTML');

perf.measure('measure_createTextNode', 'mark_start_createTextNode', 'mark_end_createTextNode');
perf.measure('measure_innerHTML', 'mark_start_innerHTML', 'mark_end_innerHTML');


// #2: (functional) for-each vs. for-in vs. simple for loop
var testArr = new Array(3000000);

// init
for (let i = 0; i < testArr.length; i++) {
    testArr[i] = 0;
}

perf.mark('mark_start_forEach');
testArr.forEach((el, i) => {
    testArr[i] = 1;
});

perf.mark('mark_end_forEach');

perf.mark('mark_start_forLoop');
for (let i = 0; i < testArr.length; i++) {
    testArr[i] = 3;
}

perf.mark('mark_end_forLoop');

perf.mark('mark_start_forIn');
for (let i of testArr) {
  testArr[i] = 2;
}

perf.mark('mark_end_forIn');

perf.measure('measure_forEach', 'mark_start_forEach', 'mark_end_forEach');
perf.measure('measure_forIn', 'mark_start_forIn', 'mark_end_forIn');
perf.measure('measure_forLoop', 'mark_start_forLoop', 'mark_end_forLoop');

// #3: scope chain

function scope1() {
    var scopeChainN = 500000000;
    var scopeChainGlobal = 0;

    function scope2() {
        function scope3() {
            function scope4() {
                function scope5() {
                    function scope6() {
                        function scope7() {
                            function scope8() {
                                var scopeChainLocal = 0;

                                perf.mark('mark_start_scopeChainGlobal');
                                for (let i = 0; i < scopeChainN; i++) {
                                    scopeChainGlobal++;
                                }
                                perf.mark('mark_end_scopeChainGlobal');

                                perf.mark('mark_start_scopeChainLocal');
                                for (let i = 0; i < scopeChainN; i++) {
                                    scopeChainLocal++;
                                }
                                perf.mark('mark_end_scopeChainLocal');
                            }

                            scope8();
                        }

                        scope7();
                    }

                    scope6();
                }

                scope5();
            }

            scope4();
        }

        scope3();
    }

    scope2();
}

scope1();

perf.measure('measure_scopeChainGlobal', 'mark_start_scopeChainGlobal', 'mark_end_scopeChainGlobal');
perf.measure('measure_scopeChainLocal', 'mark_start_scopeChainLocal', 'mark_end_scopeChainLocal');

// As we can see, modern browsers have enough optimizations so that deeper scope chains would not have practical impacts on 99.9% of the cases.
// But it is always a good general CS practice to maximally localize variables that are frequently used (by frequently I mean more than 1 time..).


// print out results
perf.getEntriesByType('measure').forEach(measure => {
   console.log(`${measure.name} took ${measure.duration} ms`);
});
