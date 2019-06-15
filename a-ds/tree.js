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

