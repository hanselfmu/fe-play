/*
This script is to test if RAF can precisely capture when img finishes rendering;
or it could capture the length of time from
when the img data is fully received to
when the img is fully drawn on the screen

Turns out it cannot. Drawing happens too low on the browser stack to be interacted with RAF.
I'm guessing drawing is between browser and the screen, and RAF and other event-related API
is within browser. I'll have to verify that.
 */

console.log('script loaded');

// this function, if executed here, will delay domcontentloaded event
function heavyFn() {
  var str = '';

  for (var i = 0; i < 20000000; i++) {
    str += i;
  }

  console.log('str is done');
  return str;
}

var frameCount = 0;

let prevFrame;

function checkFrame() {
  const curFrame = performance.now();
  console.log(`frame: ${frameCount}: took ${curFrame - prevFrame} ms`);
  prevFrame = curFrame;
  frameCount++;

  if (frameCount < 100) {
    window.requestAnimationFrame(checkFrame);
  }
}

document.getElementById('big-img').addEventListener('load', function () {
  console.log('img loaded, which means browser has complete img data, but yet to draw it');
  console.log('this is when "load" event is fired');
  console.log('at this point the image might not be completely drawn by the rendering engine');

  prevFrame = performance.now();
  checkFrame();

  console.log('start heavy fn in the onload callback');
  heavyFn().slice(0, 100);
  console.log('the heavy fn is done');
});


console.log('this is when "domcontentloaded" event is fired');