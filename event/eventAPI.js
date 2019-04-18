/*
events = {
  click: {
    capture: {
      'dom_uuid_1': PQ,
      'dom_uuid_2': PQ,
      'dom_uuid_3': PQ,
    },
    bubble: {
      'dom_uuid_3': PQ,
    },
  },
  mousemove: {
    capture: {
      'dom_uuid_3': PQ,
    },
    bubble: {
      'dom_uuid_4': PQ,
    },
  }
}
*/
const events = {};

let uuidCounter = 0;
const uuidPropName = '_uuid';

function addEventListener(el, type, listener, options = false, priority = 0) {
  if (!events.hasOwnProperty(type)) {
    events[type] = {
      capture: {},
      bubble: {},
      length: 0,
    };
    document.addEventListener(type, delegate);
  }

  const useCapture = typeof options === "boolean" ? options : options.useCapture;
  const phasedEvents = events[type][useCapture ? 'capture' : 'bubble'];

  if (!el.hasOwnProperty(uuidPropName)) {
    el[uuidPropName] = `dom_event_host_${++uuidCounter}`;
  }
  const uuid = el[uuidPropName];

  if (!phasedEvents.hasOwnProperty(uuid)) {
    phasedEvents[uuid] = new PriorityQueue();
  }
  const pq = phasedEvents[uuid];
  pq.enqueue(listener, priority);
}

function delegate(e) {
  const { type, path } = e;
  if (!events[type]) return;
  const { capture: capturedEvents, bubble: bubbledEvents } = events[type];
  const captureListeners = [];
  const bubbleListeners = [];
  for (let i = path.length - 1; i >= 0; i--) {
    const el = path[i];
    const uuid = el[uuidPropName];
    if (uuid) {
      console.log(capturedEvents, uuid);
      if (capturedEvents[uuid]) {
        captureListeners.push(...capturedEvents[uuid].getSortedTasks());
      }
      if (bubbledEvents[uuid]) {
        bubbleListeners.unshift(...bubbledEvents[uuid].getSortedTasks());
      }
    }
  }
  captureListeners.forEach(listener => listener(e));
  bubbleListeners.forEach(listener => listener(e));
}

/* PriorityQueue implementation */
function PriorityQueue() {
  this.queue = [];
}

PriorityQueue.prototype.getSortedTasks = function() {
  return this.queue.sort((el1, el2) => el1.priority - el2.priority).map(el => el.task);
}

PriorityQueue.prototype.enqueue = function(task, priority) {
  const q = this.queue;
  const el = { task, priority };
  q.push(el);
  const curIdx = q.length - 1;
  const parentIdx = getParentIdx(curIdx);
  while (parentIdx >= 0 && q[parentIdx].priority > q[curIdx].priority) {
    this.swap(curIdx, parentIdx);
    curIdx = parentIdx;
    parentIdx = getParentIdx(curIdx);
  }
}

PriorityQueue.prototype.dequeue = function() {
  const q = this.queue;
  this.swap(0, q.length - 1);
  const el = q.pop();

  const curIdx = 0;
  const leftChildIdx = getLeftChildIdx(curIdx);
  const rightChildIdx = getRightChildIdx(curIdx);
  const highestPriority = this.highestPriorityAmongThree(curIdx, leftChildIdx, rightChildIdx);
  while (highestPriority !== q[curIdx].priority) {
    if (highestPriority === q[leftChildIdx].priority) {
      this.swap(curIdx, leftChildIdx);
      curIdx = leftChildIdx;
    } else {
      this.swap(curIdx, rightChildIdx);
      curIdx = rightChildIdx;
    }
    leftChildIdx = getLeftChildIdx(curIdx);
    rightChildIdx = getRightChildIdx(curIdx);
    highestPriority = this.highestPriorityAmongThree(curIdx, leftChildIdx, rightChildIdx);
  }

  return el;
}

PriorityQueue.prototype.highestPriorityAmongThree = function(idx1, idx2, idx3) {
  const q = this.queue;
  const maxIdx = q.length - 1;
  const pr1 = idx1 > maxIdx ? Number.MAX_VALUE : q[idx1].priority;
  const pr2 = idx2 > maxIdx ? Number.MAX_VALUE : q[idx2].priority;
  const pr3 = idx3 > maxIdx ? Number.MAX_VALUE : q[idx3].priority;

  return Math.min(pr1, pr2, pr3);
}

PriorityQueue.prototype.swap = function(idx1, idx2) {
  const q = this.queue;
  const tmp = q[idx1];
  q[idx1] = q[idx2];
  q[idx2] = tmp;
}

const getParentIdx = idx => Math.floor((idx - 1) / 2);
const getLeftChildIdx = idx => idx * 2 + 1;
const getRightChildIdx = idx => idx * 2 + 2;
