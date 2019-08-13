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

// console.log(canFinish(2, [[1, 0], [0, 1]]));


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

/*
Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name,
and the rest of the elements are emails representing emails of the account.
Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts.
Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have
any number of accounts initially, but all of their accounts definitely have the same name.
After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements
are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input: 
accounts = [
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"]
]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
Note:

The length of accounts will be in the range [1, 1000].
The length of accounts[i] will be in the range [1, 10].
The length of accounts[i][j] will be in the range [1, 30].
*/
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  // we keep an array of accountID and its merged "parent" ID;
  // for each email, we check which user it belongs to; if it belongs to an existing user, we union them
  // in the end, for each email, we 
  const emailToAccountID = new Map();
  const accountParents = new Array(accounts.length).fill(-1);

  function find(i) {
    if (accountParents[i] === -1) return -1;
    if (accountParents[i] !== i) {
      accountParents[i] = find(accountParents[i]);
    }
    return accountParents[i];
  }

  function union(i, j) {
    const pi = find(i);
    const pj = find(j);
    if (pi === -1 && pj === -1) {
      accountParents[i] = j;
      accountParents[j] = j;
    } else if (pi === -1) {
      accountParents[i] = pj;
    } else if (pj === -1) {
      console.log('pj is -1!!')
      accountParents[j] = pi;
    } else {
      accountParents[pi] = pj;
    }
  }

  for (let aid = 0; aid < accounts.length; aid++) {
    const account = accounts[aid];
    const name = account[0];
    for (let ei = 1; ei < account.length; ei++) {
      const email = account[ei];
      if (emailToAccountID.has(email)) {
        const prevAID = emailToAccountID.get(email);
        union(prevAID, aid);
        console.log('union',prevAID, aid)
      } else {
        emailToAccountID.set(email, aid);
        if (accountParents[aid] === -1) accountParents[aid] = aid;
      }
    }
  }

  console.log(emailToAccountID);
  console.log(accountParents);
  const result = {};
  emailToAccountID.forEach((aid, email) => {
    const ancestorID = find(aid);
    if (!result.hasOwnProperty(ancestorID)) result[ancestorID] = [];
    result[ancestorID].push(email);
  });

  return Object.keys(result).map(aid => {
    const list = result[aid];
    list.unshift(accounts[aid][0]);
    return list;
  });
};

// console.log(accountsMerge([
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["John", "johnnybravo@mail.com"],
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["Mary", "mary@mail.com"]
// ]));

/*
There is a box protected by a password. The password is a sequence of n digits where each digit can be one of the first k digits 0, 1, ..., k-1.
While entering a password, the last n digits entered will automatically be matched against the correct password.
For example, assuming the correct password is "345", if you type "012345", the box will open because the correct password matches the suffix of the entered password.
Return any password of minimum length that is guaranteed to open the box at some point of entering it.

Example 1:

Input: n = 1, k = 2
Output: "01"
Note: "10" will be accepted too.
Example 2:

Input: n = 2, k = 2
Output: "00110"
Note: "01100", "10011", "11001" will be accepted too.
Note:
n will be in the range [1, 4].
k will be in the range [1, 10].
k^n will be at most 4096.
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  // 1. build nodes of "000", "001", "010" ...
  // 2. build edges of "0", "1", "2" ...
  // there will be total k^n nodes, which is bound by 4096
  // this is a dense graph, so we use a matrix to represent this
  const nodes = createNodes(n, k);
  console.log(nodes);

  const graph = new Array(nodes.length);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(nodes.length);
    const u = nodes[i];
    for (let j = 0; j < nodes.length; j++) {
      graph[i][j] = lenDiff(u, nodes[j]);
    }
  }

  // now build the min-cost Hamilton path
  return minCostHamilton(graph, nodes);

  function minCostHamilton(G, V) {

  }

  function createNodes(n, k) {
    let list = [''];
    for (let pos = 1; pos <= n; pos++) {
      const curList = [];
      for (let node of list) {
        for (let i = 0; i < k; i++) curList.push(node + i);
      }
      list = curList;
    }
    return list;
  }

  function lenDiff(u, v) {
    let i = 0;
    while (i < u.length && u.substring(i) !== v.substring(0, v.length - i)) {
      i++;
    }
    return i;
  }
};

console.log(crackSafe(2, 3));

/*
Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.
If there isn't any rectangle, return 0.

Example 1:

Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:

Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2

Note:
1 <= points.length <= 500
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.
*/
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function(points) {
  if (points.length < 4) return 0;
  const pointsByX = new Map();
  const pointsByY = new Map();
  for (let [ x, y ] of points) {
    if (!pointsByX.has(x)) pointsByX.set(x, new Set());
    if (!pointsByY.has(y)) pointsByY.set(y, new Set());
    pointsByX.get(x).add(y);
    pointsByY.get(y).add(x);
  }

  let minArea = Number.POSITIVE_INFINITY;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [ x1, y1 ] = points[i];
      const [ x2, y2 ] = points[j];
      const potentialArea = area(x1, y1, x2, y2);
      if (potentialArea === 0 || potentialArea >= minArea) continue;
      if (pointsByX.get(x2).has(y1) && pointsByY.get(y2).has(x1)) minArea = potentialArea;
    }
  }

  return minArea === Number.POSITIVE_INFINITY ? 0 : minArea;

  function area(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) * Math.abs(y1 - y2);
  }
};

// console.log(minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]]));

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    
};