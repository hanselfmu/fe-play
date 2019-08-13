/*
Given an array of 2n integers, your task is to group these integers into
n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn)
which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i + 1 < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to
the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for
the purpose of space complexity analysis.)
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const result = [ 1 ];
  let product = 1;

  for (let i = 0; i + 1 < nums.length; i++) {
    product *= nums[i];
    result.push(product);
  }
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product *= nums[i];
    result[i - 1] *= product;
  }

  return result;
};
// console.log(productExceptSelf([1,2,3,4]));

/*
Given an array nums of n integers and an integer target, find three integers in nums such that
the sum is closest to target. Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example:
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return 0;
  const twoSumMap = {};
  let minDiff = target - (nums[0] + nums[1] + nums[2]);
  twoSumMap[nums[0] + nums[1]] = true;
  twoSumMap[nums[0] + nums[2]] = true;
  twoSumMap[nums[1] + nums[2]] = true;
  for (let i = 3; i < nums.length; i++) {
    const cur = nums[i];
    for (let curDiff = 0; curDiff < Math.abs(minDiff); curDiff++) {
      if (twoSumMap[target - cur - curDiff]) {
        if (curDiff === 0) return target;
        minDiff = curDiff;
        break;
      } else if (twoSumMap[target - cur + curDiff]) {
        if (curDiff === 0) return target;
        minDiff = -curDiff;
        break;
      }
    }
    for (let j = 0; j < i; j++) {
      twoSumMap[nums[j] + cur] = true;
    }
  }
  return target - minDiff;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));

/*
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const N = matrix.length;
    if (N < 2) return;
    for (let r = 0; r < N / 2; r++) {
      for (let c = r; c < N - r - 1; c++) {
        // rotate from top
        const top = matrix[r][c];
        const right = matrix[c][N - r - 1];
        const bottom = matrix[N - r - 1][N - c - 1];
        const left = matrix[N - c - 1][r];
        matrix[r][c] = left;
        matrix[c][N - r - 1] = top;
        matrix[N - r - 1][N - c - 1] = right;
        matrix[N - c - 1][r] = bottom;
      }
    }
};

const matrix = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
rotate(matrix);
// console.log(matrix);

/*
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where
different letters represent different tasks. Tasks could be done without original order.
Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks,
there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.
Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

Note:

The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
*/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function PriorityQueue(priorityFn) {
  this.q = [];
  this.priorityFn = priorityFn; // form of (a, b) => is a higher priority than b
}

PriorityQueue.prototype.size = function() {
  return this.q.length;
}

PriorityQueue.prototype.enqueue = function(v) {
  const q = this.q;
  let i = q.length;
  let parent = Math.floor((i - 1) / 2); // 0 -> 1, 2; 2 -> 5, 6;
  q.push(v);
  // JS does not do integer division, so Math.floor(-1 / 2) = -1;
  // while in other languages that support integer division, we have to check
  // if parent is i itself.
  while (parent >= 0 && this.priorityFn(q[i], q[parent])) {
    _swap(q, i, parent);
    i = parent;
    parent = (i - 1) / 2;
  }
}

PriorityQueue.prototype.dequeue = function() {
  const q = this.q;
  let lastIdx = q.length - 1;
  if (lastIdx < 0) return null;
  _swap(q, 0, lastIdx);
  let i = 0;
  let lc = i * 2 + 1;
  let rc = i * 2 + 2;
  while (lc < lastIdx) {
    let j = i;
    if (this.priorityFn(q[lc], q[i])) {
      j = lc;
    }
    if (rc < lastIdx && this.priorityFn(q[rc], q[j])) {
      j = rc;
    }
    if (i === j) break;
    _swap(q, i, j);
    i = j;
    lc = i * 2 + 1;
    rc = i * 2 + 2;
  }

  return q.pop();
}

function _swap(q, a, b) {
  const tmp = q[a];
  q[a] = q[b];
  q[b] = tmp;
}

var leastInterval = function(tasks, n) {
    const taskCounts = {};
    for (let t of tasks) {
      if (!taskCounts[t]) taskCounts[t] = 0;
      taskCounts[t]++;
    }
    const pq = new PriorityQueue((t1, t2) => t1.c > t2.c);
    console.log(pq.enqueue);
    Object.keys(taskCounts).forEach(t => {
      pq.enqueue({ t, c: taskCounts[t] });
    })

    let intervals = 0;
    let taskInCoolDown = 0;
    const coolDownQueue = new Array(n).fill(null);
    while (pq.size() > 0 || taskInCoolDown > 0) {
      const task = pq.dequeue();
      if (task) task.c--;
      if (task === null || task.c === 0) {
        coolDownQueue.push(null);
      } else {
        coolDownQueue.push(task);
        taskInCoolDown++;
      }
      const cooled = coolDownQueue.shift();
      if (cooled !== null) {
        pq.enqueue(cooled);
        taskInCoolDown--;
      }
      intervals++;
    }

    return intervals;
};

// console.log(leastInterval(["A","A","A","B","B","B","B", 'B', 'C', 'A', 'D', 'E', 'E', 'C', 'C'], 3));

/*
Given an array of size n, find the majority element. The majority element is the element that
appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (nums.length === 0) return null;
  const occurrence = {};
  const threshold = ~~(nums.length / 2);
  for (let num of nums) {
    if (!occurrence[num]) occurrence[num] = 0;
    occurrence[num]++;
    if (occurrence[num] > threshold) return num;
  }
};

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (nums.length === 0) return null;
  const threshold = ~~(nums.length / 3);
  let c1 = NaN;
  let c1Count = 0;
  let c2 = NaN;
  let c2Count = 0;
  for (let num of nums) {
    if (num === c1) {
      c1Count++;
    } else if (num === c2) {
      c2Count++;
    } else if (c1Count === 0) {
      c1Count = 1;
      c1 = num;
    } else if (c2Count === 0) {
      c2Count = 1;
      c2 = num;
    } else {
      c1Count--;
      c2Count--;
    }
  }
  c1Count = 0;
  c2Count = 0;
  for (let num of nums) {
    if (num === c1) c1Count++;
    if (num === c2) c2Count++;
  }
  const result = [];
  if (c1Count > threshold) {
    result.push(c1);
  }
  if (c2Count > threshold) {
    result.push(c2);
  }

  return result;
};

/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums
such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  const result = [];
  console.log(nums);
  let rightLimit = nums.length - 1;
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length - 1; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        const c1 = nums[i];
        const c2 = nums[j];
        const c3 = nums[k];
        const c4 = target - c1 - c2 - c3;
        const c4Idx = where(nums, k + 1, rightLimit, c4);
        if (c4Idx !== -1) {
          result.push([ c1, c2, c3, c4 ]);
          // rightLimit = c4Idx;
        }
      }
    }
  }

  return result;
};

function where(list, l, r, target) {
  if (l > r) return -1;
  if (list[l] === target) return l;
  if (list[r] === target) return r;
  while (l < r) {
    if (l + 1 === r) {
      if (list[l] === target) return l;
      if (list[r] === target) return r;
      return -1;
    }
    const m = ~~((l + r) / 2);
    if (list[m] < target) {
      l = m;
    } else if (list[m] > target) {
      r = m;
    } else {
      return m;
    }
  }
  return -1;
}
// [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0));

/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
prove that at least one duplicate number must exist. Assume that there is only one duplicate number,
find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
};

/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]];
  if (nums.length === 0) return result;
  for (num of nums) {
    const curRLen = result.length;
    for (let i = 0; i < curRLen; i++) {
      const newSubSet = result[i].slice();
      newSubSet.push(num);
      result.push(newSubSet);
    }
  }
  return result;
};

/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const result = [[]];
  if (nums.length === 0) return result;
  nums.sort((n1, n2) => n1 - n2);
  let lastStart = 0;
  let prev = nums[0];
  for (num of nums) {
    const curRLen = result.length;
    for (let i = prev === num ? lastStart : 0; i < curRLen; i++) {
      const newSubSet = result[i].slice();
      newSubSet.push(num);
      result.push(newSubSet);
    }
    lastStart = curRLen;
    prev = num;
  }
  return result;
};

/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] < nums[r]) return nums[l];
    if (l + 1 === r) return nums[r];
    const m = ~~((l + r) / 2);
    if (nums[l] < nums[m]) {
      l = m;
    } else {
      r = m;
    }
  }
};

/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 3) return 0;
  // basic idea is to travel from start to next higher part, and calculate the rains trapped;
  // if no more higher bar is found, travel reversely.
  const nextHigher = new Array(height.length).fill(-1);
  const prevHigher = new Array(height.length).fill(-1);
  let nh = -1;
  for (let i = height.length - 1; i >= 0; i--) {
    nextHigher[i] = nh > height[i] ? nh : -1;
    nh = Math.max(nh, height[i]);
  }
  let ph = -1;
  for (let i = 0; i < height.length; i++) {
    prevHigher[i] = ph > height[i] ? ph : -1;
    ph = Math.max(ph, height[i]);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const cur = Math.max(0, Math.min(nextHigher[i], prevHigher[i]) - height[i]);
    water += cur;
  }
  return water;
}  

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


/*
Given n non-negative integers representing the histogram's bar height
where the width of each bar is 1, find the area of largest rectangle in the histogram.
Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].

The largest rectangle is shown in the shaded area, which has area = 10 unit.
*/
function RangeNode(val, li, ri, lc, rc) {
  this.val = val;
  this.li = li;
  this.ri = ri;
  this.lc = lc;
  this.rc = rc;
}

function RangeTree(list, valueFn) {
  this.list = list;
  this.valueFn = valueFn;
  this.root = this.build(0, list.length - 1);
}

RangeTree.prototype.build = function(l, r) {
  if (l === r) {
    return new RangeNode(this.valueFn(this.list, l), l, r, null, null);
  }
  const m = ~~((l + r) / 2);
  const lc = this.build(l, m);
  const rc = this.build(m + 1, r);
  const val = this.valueFn(this.list, lc.val, rc.val);
  return new RangeNode(val, l, r, lc, rc);
}

RangeTree.prototype.query = function(l, r) {
  return this._query(this.root, l, r);
}

RangeTree.prototype._query = function(node, l, r) {
  if (node.li === l && node.ri === r) return node.val;
  const mi = ~~((node.li + node.ri) / 2);
  if (r <= mi) {
    return this._query(node.lc, l, r);
  } else if (l > mi) {
    return this._query(node.rc, l, r);
  } else {
    return this.valueFn(
      this.list,
      this._query(node.lc, l, mi),
      this._query(node.rc, mi + 1, r)
    );
  }
}

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  // build a ranged tree that gives min index within a range
  const rtree = new RangeTree(heights, (list, a, b) => {
    if (!b || list[a] <= list[b]) return a;
    return b;
  });

  // recursively find min in current range, use this to get area
  // and split around this min index
  const calc = (l, r) => {
    if (l > r) return 0;
    if (l === r) return heights[l];
    const minIdx = rtree.query(l, r);
    const curArea = heights[minIdx] * (r - l + 1);
    const left = calc(l, minIdx - 1);
    const right = calc(minIdx + 1, r);
    return Math.max(curArea, left, right);
  }

  return calc(0, heights.length - 1);
};

console.log(largestRectangleArea([6, 7, 5, 2, 4, 5, 9, 3]));


