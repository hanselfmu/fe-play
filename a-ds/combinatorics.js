// in a ordered list of items, produces all combinations of m out of n selections.
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

// a list containing no duplicate elements, produces all permutations of the list items
function permute(list) {
  if (list.length === 0) return [[]];
  const res = [];
  for (let i = 0; i < list.length; i++) {
    const subList = list.slice();
    subList.splice(i, 1);
    const subPermutation = permute(subList);
    subPermutation.forEach(p => {
      p.unshift(list[i]);
      res.push(p);
    });
  }
  return res;
}

// tests
console.log(combine([1, 2, 3, 4, 5], 3));
console.log(permute([1, 2, 3]));

