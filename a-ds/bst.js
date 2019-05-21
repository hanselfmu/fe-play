function Node(val, l, r) {
  this.val = val;
  this.count = 1;
  this.l = l;
  this.r = r;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function(v) {
  this.root = _insert(this.root, v);
}

const _insert = (node, v) => {
  if (node === null) return new Node(v, null, null);
  if (node.val === v) {
    node.count++;
  } else if (v > node.val) {
    node.r = _insert(node.r, v);
  } else {
    node.l = _insert(node.l, v);
  }
  return node;
}

BST.prototype.has = function(v) {
  return _has(this.root, v);
}

const _has = (node, v) => {
  if (node === null) return 0;
  if (node.val === v) {
    return node.count;
  } else if (v > node.val) {
    return _has(node.r, v);
  } else {
    return _has(node.l, v);
  }
}

BST.prototype.inorder = function() {
  if (this.root === null) return [];
  let list = [];
  const stack = [{ node: this.root, visited: false }];
  while (stack.length > 0) {
    const { node, visited } = stack[stack.length - 1];
    if (visited) {
      list = list.concat(new Array(node.count).fill(node.val));
      stack.pop();
      if (node.r !== null) {
        stack.push({ node: node.r, visited: false });
      }
    } else {
      stack[stack.length - 1].visited = true;
      if (node.l !== null) {
        stack.push({ node: node.l, visited: false });
      }
    }
  }

  return list;
}

BST.prototype.prev = function(v) {
  let prev = null;
  let node = this.root;
  while (node !== null) {
    if (v > node.val) {
      prev = node.val;
      node = node.r;
    } else {
      node = node.l;
    }
  }
  return prev;
}

BST.prototype.next = function(v) {
  let next = null;
  let node = this.root;
  while (node !== null) {
    if (v < node.val) {
      next = node.val;
      node = node.l;
    } else {
      node = node.r;
    }
  }
  return next;
}

const list = [12, 3, 5, 1, -6, 6, 8, 2, 4, 6, 7, 3, 9, 15, -2, -4, 1];
const bst = new BST();
for (let v of list) bst.insert(v);
console.log(bst.inorder());
console.log(bst.has(99));
console.log(bst.has(6));
console.log(bst.prev(10), bst.next(10));
console.log(bst.prev(-6), bst.next(-6));
console.log(bst.prev(3), bst.next(3));
console.log(bst.prev(0), bst.next(0));

