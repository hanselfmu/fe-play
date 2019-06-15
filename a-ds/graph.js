/*
There are a total of n courses you have to take, labeled from 0 to n-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1,
which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (numCourses === 0) return prerequisites.length === 0;
  // befores[i][j] means j needs to be finished before i; empty before[i] means i can be taken now
  const befores = new Array(numCourses);
  // afters[i][j] means j needs to be finished after i; finished i will trigger evaluation of j
  const afters = new Array(numCourses);
  const courses = {};
  for (let i = 0; i < numCourses; i++) {
    befores[i] = {};
    afters[i] = {};
    courses[i] = true;
  }
  for (const [ after, before ] of prerequisites) {
    courses[after] = false;
    befores[after][before] = true;
    afters[before][after] = true;
  }
  const q = Object.keys(courses).filter(c => courses[c]);
  while (q.length > 0) {
    const courseToTake = q.shift();
    courses[courseToTake] = true;
    for (let unblockedCourse of Object.keys(afters[courseToTake])) {
      delete befores[unblockedCourse][courseToTake];
      if (Object.keys(befores[unblockedCourse]).length === 0)  {
        q.push(unblockedCourse);
      }
    }
  }

  return Object.keys(courses).every(c => courses[c]);
};

console.log(canFinish(2, [[1, 0], [0, 1]]));


/*
Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.
Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

Example:
Input:
{"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.
Note:

The number of nodes will be between 1 and 100.
The undirected graph is a simple graph, which means no repeated edges and no self-loops in the graph.
Since the graph is undirected, if node p has node q as neighbor, then node q must have node p as neighbor too.
You must return the copy of the given node as a reference to the cloned graph.
*/
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (node === null) return null;
  const mapping = new Map();
  return _cloneGraph(node);

  function _cloneGraph(node) {
    if (node === null) return null;
    if (mapping.has(node)) return mapping.get(node);
    const neighbors = [];
    const copy = new Node(node.val, neighbors);
    mapping.set(node, copy);
    node.neighbors.forEach(neighbor => {
      neighbors.push(_cloneGraph(neighbor));
    });
    
    return copy;
  }
};

/*
Given a directed, acyclic graph of N nodes. Find all possible paths from node 0 to node N-1,
and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1. 
graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
*/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  if (graph.length < 2) return [graph];
  // dfs version
  const target = graph.length - 1;
  function search(node) {
    if (node === target) return [[node]];
    const res = [];
    for (let child of graph[node]) {
      const childPaths = search(child);
      childPaths.forEach(cp => {
        cp.unshift(node);
        res.push(cp);
      });
    }
    return res;
  }

  return search(0);
};

console.log(allPathsSourceTarget([[1,2], [3], [3], []]));

// dikjstra
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

// shortestDistanceAllUndirected(graph);