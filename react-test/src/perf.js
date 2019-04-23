let renderCount = 0;

export function addRender() {
  renderCount++;
}

let lastRAF = performance.now();
let lastRenderCount = renderCount;
function update() {
  const curRAF = performance.now();
  if (curRAF - lastRAF > 30) {
    console.log(`long task took ${curRAF - lastRAF}ms, rendered ${renderCount - lastRenderCount} times`)

  }
  lastRenderCount = renderCount;
  lastRAF = curRAF;
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
