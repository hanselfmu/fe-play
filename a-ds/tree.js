function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*
You are given a perfect binary tree where all leaves are on the same level,
and every parent has two children. The binary tree has the following definition:
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node.
If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) return null;
  
  // we connect at each level, and traverse previous level as linked list
  let curLevelNode = root;
  while (curLevelNode !== null) {
    let prev = null;
    let nextLevelHead = null;
    while (curLevelNode !== null) {
      nextLevelHead = nextLevelHead || curLevelNode.left || curLevelNode.right;
      if (curLevelNode.left && curLevelNode.right) {
        if (prev !== null) prev.next = curLevelNode.left;
        curLevelNode.left.next = curLevelNode.right;
        prev = curLevelNode.right;
      } else if (curLevelNode.left) {
        if (prev !== null) prev.next = curLevelNode.left;
        prev = curLevelNode.left;
      } else if (curLevelNode.right) {
        if (prev !== null) prev.next = curLevelNode.right;
        prev = curLevelNode.right;
      }
      curLevelNode = curLevelNode.next;
    }
    curLevelNode = nextLevelHead;
  }

  return root;
};

/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return;
  // flatten left subtree first
  flatten(root.left);
  flatten(root.right);
  const originalRight = root.right;
  root.right = root.left;
  root.left = null;
  let rightmostParent = root;
  let rightmost = root.right;
  while (rightmost !== null) {
    rightmostParent = rightmost;
    rightmost = rightmost.right;
  }
  rightmostParent.right = originalRight;
};

/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let seq = 0;
  let result = 0;
  const traverse = (node) => {
    if (node === null) return;
    if (seq > k) return;
    traverse(node.left);
    if (seq === k) {
      result = node.val;
    }
    seq++;
    traverse(node.right);
  }

  traverse(root);
  return result;
};

/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Example:
        7
    3         15
            9     20

BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
 
Note:
next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  // basic idea is that to support amortized O(1) next() ops, we need to store some sort of path from root
  // to current leftest node, and if we traverse up to a node that has right subtree, we go down that tree
  // and record its left nodes.
  this.stack = [];
  let n = root;
  while (n !== null) {
    this.stack.push(n);
    n = n.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const nextNode = this.stack.pop();

  if (nextNode.right !== null) {
    let n = nextNode.right;
    while (n !== null) {
      this.stack.push(n);
      n = n.left;
    }
  }
  
  return nextNode.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 /*
 For an undirected graph with tree characteristics, we can choose any node as the root.
 The result graph is then a rooted tree. Among all possible rooted trees,
 those with minimum height are called minimum height trees (MHTs). Given such a graph,
 write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and
a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected,
[0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1 :

Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3 

Output: [1]
Example 2 :

Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
Note:

According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices
are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  // a naive approach would be to BFS from each node, and record its height; and pick the tree with min height
  // obviously this has a lot of duplicate traversals, so will record something like
  // memo[s][t], where it has the height of s going in direction of t.
  // What we can do is traversing reversely from leaves to roots;

  // 0. preprocess the graph into an array of hashmap of edges
  const graph = new Array(n);
  // using Set instead of plain objects to support efficient .size operations
  for (let i = 0; i < n; i++) graph[i] = new Set();
  for (let [ u, v ] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }
  // 1. find all leaves (they are nodes with only one edge)
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].size === 1) leaves.push(i);
  }

  let nodeCount = n;
  // keep cutting down the tree until only 1 or 2 nodes are left
  while (nodeCount > 2) {
    const nextLeaves = [];
    while (leaves.length > 0) {
      const leaf = leaves.shift();
      for (let k of graph[leaf].keys()) {
        graph[k].delete(leaf);
        if (graph[k].size === 1) nextLeaves.push(k);
      }
      graph[leaf] = null;
      nodeCount--;
    }
    leaves = nextLeaves;
  }

  return graph.map((_, k) => k).filter(n => graph[n] !== null);
};

// console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
// console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]));

/*
Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].
*/
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const N = nums.length;
  if (N === 0) return null;
  if (N === 1) return new TreeNode(nums[0]);

  function top(stack) {
    if (stack.length === 0) return [ null, null ];
    return stack[stack.length - 1];
  }

  const nodeMap = {};
  let root = null;
  // the basic idea is to record left and right max values of each element
  const lHighers = new Array(N).fill(null);
  const lHigherStack = [];
  for (let i = 0; i < N; i++) {
    const cur = nums[i];
    let stackTop = top(lHigherStack);
    while (stackTop[0] !== null && stackTop[0] < cur) {
      lHigherStack.pop();
      stackTop = top(lHigherStack);
    }
    lHighers[i] = stackTop;
    lHigherStack.push([cur, i ]);
    nodeMap[i] = new TreeNode(cur);
    if (root === null || cur > root.val) root = nodeMap[i];
  }
  const rHighers = new Array(N).fill(null);
  const rHigherStack = [];
  for (let i = N - 1; i >= 0; i--) {
    const cur = nums[i];
    let stackTop = top(rHigherStack);
    while (stackTop[0] !== null && stackTop[0] < cur) {
      rHigherStack.pop();
      stackTop = top(rHigherStack);
    }
    rHighers[i] = stackTop;
    rHigherStack.push([cur, i ]);
  }

  for (let i = 0; i < N; i++) {
    // find min amoungst left and right higher nodes; and append current node to its bottom
    const curNode = nodeMap[i];
    const [ lHigher, lIdx ] = lHighers[i];
    const [ rHigher, rIdx ] = rHighers[i];
    if (lHigher !== null && (rHigher === null || lHigher < rHigher)) {
      nodeMap[lIdx].right = curNode;

    } else if (rHigher !== null && (lHigher === null || rHigher < lHigher)) {
      nodeMap[rIdx].left = curNode;
    }
  }
  return root;
};

// console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));

/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null;

  function build(inL, inR, postL, postR) {
    if (inL > inR) return null;
    if (inL === inR) return new TreeNode(inorder[inL]);
    // inorder means LC, self, RC
    // postorder means LC, RC, self
    // so the only out-of-place (or the first unequal) element is the root/self node; and to the left
    // is the LC subtree, to the right is the RC subtree
    // Or we can traverse postorder from the end, because the last node is definitely the root/self node
    const rootVal = postorder[postR];
    const root = new TreeNode(rootVal);
    let inRoot = inL;
    while (inorder[inRoot] !== rootVal) inRoot++;
    const lc = build(inL, inRoot - 1, postL, postL + inRoot - inL - 1);
    const rc = build(inRoot + 1, inR, postL + inRoot - inL, postR - 1);
    root.left = lc;
    root.right = rc;
    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};