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