/*
Given an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .

Example:
Input: [4, 6, 7, 7]
Output: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
Note:
The length of the given array will not exceed 15.
The range of integer in the given array is [-100,100].
The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {  
};

/*
Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

 

Example 1:

Input: A = [4,5,0,-2,-3,1], K = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 

Note:

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    // we keep a list of prefix sum
    let prefixSums = new Array(A.length + 1).fill(0);
    for (let i = 0; i < A.length; i++) {
      prefixSums[i + 1] = A[i] + prefixSums[i];
    }
    const countByMods = new Array(K).fill(0);
    for (let ps of prefixSums) {
      countByMods[(ps % K + K) % K]++;
    }
    let total = 0;
    for (let mod = 0; mod < K; mod++) {
      total += countByMods[mod] * (countByMods[mod] - 1) / 2;
    }
    return total;
};

// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5));

/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Note:
1 <= k <= len(nums) <= 16.
0 < nums[i] < 10000.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  if (nums.length < k) return false;
  const sum = nums.reduce((p, c) => p + c);
  if (sum % k !== 0) return false;
  nums.sort((a, b) => a - b);
  const target = sum / k;
  if (nums[nums.length - 1] > target) return false;

  const dp = new Array(1 << nums.length).fill(false);
  const total = new Array(1 << nums.length).fill(0);
  dp[0] = true;
  for (let state = 0; state < (1 << nums.length); state++) {
    if (!dp[state]) continue;
    for (let i = 0; i < nums.length; i++) {
      // if ((state & (1 << i)) !== 0) continue; // skip if current state has nums[i]
      const nextState = (state | (1 << i));  // add in nums[i]
      if (nextState !== state && !dp[nextState]) {
        // current state does not include 
        if ((nums[i] + (total[state] % target)) <= target) {
          dp[nextState] = true;
          total[nextState] = total[state] + nums[i];
        } else {
          break;
        }
      }
    }
  }

  return dp[(1 << nums.length) - 1];
};

console.log(canPartitionKSubsets([2,2,2,2,3,4,5], 4));