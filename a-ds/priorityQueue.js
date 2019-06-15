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
    parent = Math.floor((i - 1) / 2);
  }
}

PriorityQueue.prototype.dequeue = function() {
  const q = this.q;
  let lastIdx = q.length - 1;
  if (lastIdx < 0) return null;
  _swap(q, 0, lastIdx);
  let i = 0;
  let lc = i * 2 + 1;
  let rc = i * 2 + 2;
  while (lc < lastIdx) {
    let j = i;
    if (this.priorityFn(q[lc], q[i])) {
      j = lc;
    }
    if (rc < lastIdx && this.priorityFn(q[rc], q[j])) {
      j = rc;
    }
    if (i === j) break;
    _swap(q, i, j);
    i = j;
    lc = i * 2 + 1;
    rc = i * 2 + 2;
  }

  return q.pop();
}

function _swap(q, a, b) {
  const tmp = q[a];
  q[a] = q[b];
  q[b] = tmp;
}


/*
tests
*/
const pq = new PriorityQueue((a, b) => a < b);
pq.enqueue(5);
pq.enqueue(7);
pq.enqueue(2);
pq.enqueue(3);
pq.enqueue(1);
pq.enqueue(-6);
pq.enqueue(9);
pq.enqueue(12);
pq.enqueue(-2);
pq.enqueue(4);
pq.enqueue(3);

let v;
while (v = pq.dequeue()) {
  console.log(v);
}
