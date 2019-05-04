function PriorityQueue(priorityFn) {
  this.q = [];
  this.priorityFn = priorityFn; // form of (a, b) => is a higher priority than b
}

PriorityQueue.prototype.enqueue = function(v) {
  const q = this.q;
  let i = q.length;
  let parent = Math.floor((i - 1) / 2); // 0 -> 1, 2; 2 -> 5, 6;
  q.push(v);
  // JS does not do integer division, so Math.floor(-1 / 2) = -1;
  // while in other languages that support integer division, we have to check
  // if parent is i itself.
  while (parent >= 0 && this.priorityFn(q[i], q[parent])) {
    _swap(q, i, parent);
    i = parent;
    parent = (i - 1) / 2;
  }
}

PriorityQueue.prototype.dequeue = function() {
  const q = this.q;
  const i = q.length - 1;
  if (i < 0) return null;
  _swap(q, 0, i);
  i--;

  const r = q.pop();


  return r;
}

function _swap(q, a, b) {
  const tmp = q[a];
  q[a] = q[b];
  q[b] = tmp;
}
