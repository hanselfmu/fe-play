function render() {}
function update() {}
function now() {
  return new Date();
}

const updateFPS = 25;
const renderFPS = 60;
const maxRenderFrameSkip = 4;

const updateInterval = 1000 / updateFPS;
const renderInterval = 1000 / renderFPS;

let nextUpdateTick = now();
let nextRenderTick = now();

while (true) {
  let updateCount = 0;
  let renderCount = 0;
  // if update() finishes within updateInterval, this run will only update once;
  // if update() takes more than updateInterval, this run will update for a maximum of maxRenderFrameSkip times
  while (now() >= nextUpdateTick && updateCount < maxRenderFrameSkip) {
    nextUpdateTick = now() + updateInterval;
    update();
    updateCount++;
  }

  const interpolation = nextUpdateTick - now();
  if (now() >= nextRenderTick) {
    render(interpolation);
    nextRenderTick = now() + renderInterval;
  }
}