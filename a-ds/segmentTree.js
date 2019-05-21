function SegmentTree(list, valueFn) {
  this.st = [];
  this.valueFn = valueFn;
  this.dataSize = list.length;
  buildTree(this.st, list, valueFn, 0, list.length - 1, 0);
}

function buildTree(st, list, valueFn, l, r, i) {
  if (st.length <= i) {
    st.length = i + 1;
  }
  if (l === r) {
    return valueFn(list[l]);
  }
  const m = Math.floor((l + r) / 2);
  st[i * 2 + 1] = buildTree(st, list, valueFn, l, m, i * 2 + 1);
  st[i * 2 + 2] = buildTree(st, list, valueFn, m + 1, r, i * 2 + 2);
  st[i] = valueFn(st[i * 2 + 1], st[i * 2 + 2]);
  return st[i];
}

SegmentTree.prototype.query = function(l, r) {
  return query(this.st, this.valueFn, 0, 0, this.dataSize - 1, l, r);
}

function query(st, valueFn, i, nodeL, nodeR, queryL, queryR) {
  if (nodeL === queryL && nodeR === queryR) {
    console.log(`matched ${nodeL} - ${nodeR}: ${st[i]}`);
    return st[i];
  }
  const m = Math.floor((nodeL + nodeR) / 2);
  let left, right;
  if (m >= queryL) {
    left = query(st, valueFn, i * 2 + 1, nodeL, m, queryL, min(m, queryR));
  }
  if (m + 1 <= queryR) {
    right = query(st, valueFn, i * 2 + 2, m + 1, nodeR, max(m + 1, queryL), queryR);
  }
  return valueFn(left, right);
}

const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;

const list = [5, 7, 3, 6, 5, 7, 8, 4, 9, 6, 8, 12];
const sgSum = new SegmentTree(list, function() {
  let s = 0;
  for (let v of arguments) {
    if (v !== null && v !== undefined && !Number.isNaN(v))
      s += v;
  }
  return s;
});
console.log('result', sgSum.query(5, 9));
const sgMin = new SegmentTree(list, function() {
  let m = Number.MAX_VALUE;
  for (let v of arguments) {
    if (v !== null && v !== undefined && !Number.isNaN(v))
      m = min(m, v);
  }
  return m;
});
console.log('result', sgMin.query(1, 7));


