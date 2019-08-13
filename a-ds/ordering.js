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
  let r = list.length;
  if (target < list[l]) return l;
  if (target > list[r - 1]) return r;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    const mv = list[m];
    if (target === mv) return m;
    if (target < mv) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
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
console.log('searching for 5', list[binarySearch(list, 5)]);
console.log('searching for 7', list[binarySearch(list, 7)]);
console.log('searching for 11', list[binarySearch(list, 11)]);
console.log('searching for 16', binarySearch(list, 16));
console.log('searching for -5', binarySearch(list, -5));

function kthLargest(list, k) {
  if (k >= list.length) return null;

  function swap(i, j) {
    const t = list[i];
    list[i] = list[j];
    list[j] = t;
  }

  function partition(l, r) {
    const pivot = list[r]; // or a randomized index
    let bdry = l;
    for (let cur = l; cur < r; cur++) {
      if (list[cur] <= pivot) {
        swap(bdry, cur);
        bdry++;
      }
    }
    swap(bdry, r);
    return bdry;
  }

  function qselect(l, r, kth) {
    if (l === r) return list[l];
    const part = partition(l, r);
    const numOfSmaller = part - l;
    if (numOfSmaller === kth)
      return list[part];
    else if (numOfSmaller < kth)
      return qselect(part, r, kth - part);
    else
      return qselect(l, part - 1, kth);
  }

  return qselect(0, list.length - 1, k - 1);
}

console.log(kthLargest([3,2,1,5,6,4], 6));

function sortThreeWay(list, l, m, h) {
  if (list.length === 0) return list;

  const swap = (i, j) => {
    const t = list[i];
    list[i] = list[j];
    list[j] = t;
  };

  let firstM = 0;
  let firstH = 0;
  for (let i = 0; i < list.length; i++) {
    const cur = list[i];
    if (cur === l) {
      swap(i, firstH);
      swap(firstH, firstM);
      firstH++;
      firstM++;
    } else if (cur === m) {
      swap(i, firstH);
      firstH++;
    }
  }
  return list;
}

console.log(sortThreeWay([3,5,5,1,3,5,1,3,3,5,1,1,3,1,5,5,1,3,5,3,3,1,1,5,1,5,1], 1, 3, 5));