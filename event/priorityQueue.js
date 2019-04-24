function PriorityQueue() {
  this.queue = [];
}

PriorityQueue.prototype.enqueue = function (task, priority) {
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

PriorityQueue.prototype.dequeue = function () {
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

PriorityQueue.prototype.highestPriorityAmongThree = function (idx1, idx2, idx3) {
  const q = this.queue;
  const maxIdx = q.length - 1;
  const pr1 = idx1 > maxIdx ? Number.MAX_VALUE : q[idx1].priority;
  const pr2 = idx2 > maxIdx ? Number.MAX_VALUE : q[idx2].priority;
  const pr3 = idx3 > maxIdx ? Number.MAX_VALUE : q[idx3].priority;

  return Math.min(pr1, pr2, pr3);
}

PriorityQueue.prototype.swap = function (idx1, idx2) {
  const q = this.queue;
  const tmp = q[idx1];
  q[idx1] = q[idx2];
  q[idx2] = tmp;
}

const getParentIdx = idx => Math.floor((idx - 1) / 2);
const getLeftChildIdx = idx => idx * 2 + 1;
const getRightChildIdx = idx => idx * 2 + 2;

export default PriorityQueue;
