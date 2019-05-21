/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  if (s.length === 0) return [''];
  const leftIndices = [];
  const rightIndices = [];
  let score = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      leftIndices.push(i);
      score++;
    } else if (c === ')') {
      if (leftIndices.length === 0) {
        s = s.substring(0, i) + s.substring(i + 1);
        i--;
      } else {
        rightIndices.push(i);
        score--;
      }
    }
  }
  if (score === leftIndices.length) {
    const removedIndices = merge(leftIndices, rightIndices);
    return [restructureString(s, removedIndices)];
  }

  const diff = Math.abs(leftIndices.length - rightIndices.length);
  const hasMoreLeft = leftIndices.length > rightIndices.length;
  for (let removal = 0; removal < Math.max(leftIndices.length, rightIndices.length); removal++) {
    const removedIndices = combineTwoLists(
      combine(leftIndices, hasMoreLeft ? diff + removal : removal),
      combine(rightIndices, !hasMoreLeft ? diff + removal : removal)
    );
    const prunedResults = removedIndices.map(removalList => restructureString(s, removalList));
    const finalResult = {};
    for (let prunedResult of prunedResults) {
      let score = 0;
      for (let c of prunedResult) {
        if (c === '(')
          score++;
        else if (c === ')') {
          score--;
          if (score < 0) {
            break;
          }
        }
      }
      if (score === 0) {
        finalResult[prunedResult] = true;
      }
    }
    const resultList = Object.keys(finalResult);
    if (resultList.length > 0) return resultList;
  }

  return [''];
}

function combineTwoLists(l1, l2) {
  const result = [];
  for (let i1 of l1) {
    for (let i2 of l2) {
      const newList = merge(i1, i2);
      result.push(newList);
    }
  }
  return result;
}

function merge(l1, l2) {
  let i1 = 0;
  let i2 = 0;
  const r = [];
  while (i1 < l1.length && i2 < l2.length) {
    if (l1[i1] < l2[i2]) {
      r.push(l1[i1]);
      i1++;
    } else {
      r.push(l2[i2]);
      i2++;
    }
  }
  if (i1 < l1.length) return r.concat(l1.slice(i1));
  if (i2 < l2.length) return r.concat(l2.slice(i2));
  return r;
}

function combine(list, m) {
  if (m >= list.length) return [list];
  return _combine([], list, 0, m);
}

function _combine(prefix, list, start, limit) {
  if (prefix.length === limit) return [prefix];
  if (start === list.length || limit - prefix.length > list.length - start) return [];
  let result = [];
  while (start < list.length) {
    const cur = prefix.slice();
    cur.push(list[start]);
    result = result.concat(_combine(cur, list, start + 1, limit));
    start++;
  }
  return result;
}

function restructureString(original, removeIdxList) {
  let res = '';
  let l = 0;
  for (let i of removeIdxList) {
    res += original.substring(l, i);
    l = i + 1;
  }
  res += original.substring(l);
  return res;
}

// tests
console.log(removeInvalidParentheses("()())((("));