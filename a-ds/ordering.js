function quickSort(list, l, r) {
  if (l >= r) return;
  const pivot = list[r];
  let newL = l - 1;
  for (let j = l; j < r; j++) {
    if (list[j] <= pivot) {
      newL++;
      _swap(list, newL, j)
    }
  }
  _swap(list, ++newL, r);
  quickSort(list, l, newL - 1);
  quickSort(list, newL + 1, r);
}

function binarySearch(list, target) {
  let l = 0;
  let r = list.length - 1;
  if (target < list[l]) return l;
  if (target > list[r]) return r + 1;
  while (l < r) {
    if (r - l === 1) return r;
    const m = Math.floor((l + r) / 2);
    const mv = list[m];
    if (target === mv) return m;
    if (target < mv) {
      r = m;
    } else {
      l = m;
    }
  }
}

// helpers
function _swap(list, a, b) {
  const tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}

/*
test cases
*/
const list = [9, -2, 3, 4, 6, 2, 1, -4, 5, 9, 6, 14, 15, -1, 10, 3, 8, 12, 3, -4];
quickSort(list, 0, list.length - 1);
console.log('sorted', list);
console.log('searching for 5', binarySearch(list, 5));
console.log('searching for 7', binarySearch(list, 7));
console.log('searching for 11', binarySearch(list, 11));
console.log('searching for 16', binarySearch(list, 16));