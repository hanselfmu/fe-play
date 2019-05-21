function shortestDistanceAllUndirected(graph) {
  // process all the adjacency lists
  const matrix = {};
  const nodes = Object.keys(graph);
  for (let s of nodes) {
    matrix[s] = {};
    for (let t of nodes) {
      matrix[s][t] = s === t ? 0 : Number.POSITIVE_INFINITY;
    }
  }
  const minHeap = new MinHeap((e1, e2) => e1.dist <= e2.dist);
  for (let s in graph) {
    for (let t in graph[s]) {
      const dist = graph[s][t];
      matrix[s][t] = matrix[t][s] = dist;
      minHeap.push({ s, t, dist });
    }
  }
  while (minHeap.size() > 0) {
    const { s, t, dist } = minHeap.pop();
    console.log(`s: ${s}, t: ${t}, dist: ${dist}`);
    for (let vFromS in matrix[s]) {
      const newVTDist = matrix[s][vFromS] + dist;
      if (newVTDist < matrix[vFromS][t]) {
        matrix[vFromS][t] = matrix[t][vFromS] = newVTDist;
        minHeap.push({ s: vFromS, t, dist: newVTDist });
      }
    }
    for (let vFromT in matrix[t]) {
      const newVSDist = matrix[t][vFromT] + dist;
      if (newVSDist < matrix[vFromT][s]) {
        matrix[vFromT][s] = matrix[s][vFromT] = newVSDist;
        minHeap.push({ s, t: vFromT, dist: newVSDist });
      }
    }
  }
  console.log(matrix);
  return matrix;
}

function MinHeap(minFn) {
  this.q = [];
  this.minFn = minFn;   // (a, b) => true of a < b
}

MinHeap.prototype.size = function() {
  return this.q.length;
}

MinHeap.prototype.push = function(v) {
  const q = this.q;
  let i = q.length;
  q.push(v);
  let parent = Math.floor((i - 1) / 2);
  while (parent >= 0 && this.minFn(q[i], q[parent])) {
    _swap(q, parent, i);
    i = parent;
    parent = Math.floor((i - 1) / 2);
  }
}

MinHeap.prototype.pop = function() {
  const q = this.q;
  _swap(q, 0, q.length - 1);
  let i = 0;
  let lcIdx = 1;
  let rcIdx = 2;
  while (lcIdx < q.length - 1) {
    let replaceIdx = i;
    if (this.minFn(q[lcIdx], q[i])) {
      replaceIdx = lcIdx;
    }
    if (rcIdx < q.length - 1 && this.minFn(q[rcIdx], q[replaceIdx])) {
      replaceIdx = rcIdx;
    }
    if (replaceIdx === i)
      break;
    _swap(q, i, replaceIdx);
    i = replaceIdx;
    lcIdx = i * 2 + 1;
    rcIdx = i * 2 + 2;
  }

  return q.pop();
}

function _swap(q, i, j) {
  const tmp = q[i];
  q[i] = q[j];
  q[j] = tmp;
}

// an undirected graph
const graph = {
  A: {
    B: 3,
    C: 4,
  },
  B: {
    D: 2,
    E: 5,
  },
  C: {
    D: 9,
    F: 2,
  },
  D: {
    E: 3,
    F: 9,
  },
  E: {
    F: 5,
  },
  F: {},
};

shortestDistanceAllUndirected(graph);