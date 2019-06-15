/*
Given an array which consists of non-negative integers and an integer m,
you can split the array into m non-empty continuous subarrays.
Write an algorithm to minimize the largest sum among these m subarrays.
Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:
Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    const getSumBetween = (() => {
      const sumUntil = new Array(nums.length);
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sumUntil[i] = sum;
      }
      return (i, j) => sumUntil[j] - sumUntil[i] + nums[i];
    })();

    const dp = new Array(nums.length);
    // dp[i][j] means up to ith element, the min sum of j subarrays
    // trivially, dp[i][0] = 0 and dp[i][1] = total sum until then
    for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(m + 1).fill(-1);
      dp[i][0] = 0;
      dp[i][1] = getSumBetween(0, i);
    }

    function _split(i, j) {
      if (dp[i][j] !== -1) return dp[i][j];
      let min = Number.MAX_SAFE_INTEGER;
      for (let sub = i - 1; sub >= 0; sub--) {
        min = Math.min(min, Math.max(_split(sub, j - 1), getSumBetween(sub + 1, i)));
      }

      dp[i][j] = min;
      return min;
    }

    return _split(nums.length - 1, m);
};

// console.log(splitArray([3,6,10,9,8,15, 6], 4));


/*
This time, we place our chess knight on any numbered key of a phone pad (indicated above),
and the knight makes N-1 hops.  Each hop must be from one key to another numbered key.

Each time it lands on a key (including the initial placement of the knight),
it presses the number of that key, pressing N digits total.

How many distinct numbers can you dial in this manner?
Since the answer may be large, output the answer modulo 10^9 + 7.

  1 2 3
  4 5 6
  7 8 9
    0

Example 1:
Input: 1
Output: 10

Example 2:
Input: 2
Output: 20

Example 3:
Input: 3
Output: 46
*/
/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
  if (N === 0) return 0;
  const mod = 1000000007;
  const moveMappings = [
    [4,6],
    [6,8],
    [7,9],
    [4,8],
    [0,3,9],
    [],
    [0,1,7],
    [2,6],
    [1,3],
    [2,4],
  ]
  let countEndingAt = new Array(10).fill(1);
  for (let i = 1; i < N; i++) {
    const newCountEndingAt = new Array(10).fill(0);
    for (let digit = 0; digit <= 9; digit++) {
      const count = countEndingAt[digit];
      for (let target of moveMappings[digit]) {
        newCountEndingAt[target] += count;
      }
    }
    countEndingAt = newCountEndingAt;
  }

  let total = 0;
  for (let count of countEndingAt) {
    total += count % mod;
  }
  return total % mod;
};
// console.log(knightDialer(4));


/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = new Array(s1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s2.length + 1).fill(0);
  }
  const s1Limit = s1.length;
  const s2Limit = s2.length;

  function _isInterleave(s1i, s2i, s3i) {
    if (s1i === s1Limit) return s2.substring(s2i) === s3.substring(s3i);
    if (s2i === s2Limit) return s1.substring(s1i) === s3.substring(s3i);
    if (dp[s1i][s2i] !== 0) return dp[s1i][s2i] === 1;
  
    if (s1[s1i] === s3[s3i] && s2[s2i] === s3[s3i]) {
      const res = _isInterleave(s1i + 1, s2i, s3i + 1, dp) || _isInterleave(s1i, s2i + 1, s3i + 1, dp);
      dp[s1i][s2i] = res ? 1 : 2;
    } else if (s1[s1i] === s3[s3i]) {
      const res = _isInterleave(s1i + 1, s2i, s3i + 1, dp);
      dp[s1i][s2i] = res ? 1 : 2;
    } else if (s2[s2i] === s3[s3i]) {
      const res = _isInterleave(s1i, s2i + 1, s3i + 1, dp);
      dp[s1i][s2i] = res ? 1 : 2;
    } else {
      dp[s1i][s2i] = 2;
    }
    return dp[s1i][s2i] === 1;
  }

  return _isInterleave(0, 0, 0);
};

// console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'));
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));

/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [6,10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const lisAt = new Array(nums.length);

    let globalMax = 0;
    for (let i = 0; i < nums.length; i++) {
      const cur = nums[i];
      let max = 1;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] < cur) {
          max = Math.max(max, lisAt[j] + 1);
        }
      }
      lisAt[i] = max;
      globalMax = Math.max(globalMax, max);
    }
    return globalMax;
};
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Example 1:

Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
*/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // 1. extract all buy and sell points into { b, s }
    const buySells = [];
    let prev = prices[0] + 1;
    let buy = -1;
    for (let i = 0; i < prices.length - 1; i++) {
      const cur = prices[i];
      if (cur <= prev && cur < prices[i + 1]) {
        buy = cur;
      }
      if (cur >= prev && cur > prices[i + 1]) {
        buySells.push([ buy, cur ]);
      }
      prev = cur;
    }
    if (prices[prices.length - 1] >= prev && buy !== -1) {
      buySells.push([ buy, prices[prices.length - 1] ]);
    }

    if (buySells.length <= k) {} // sum up

    const dp = new Array(buySells.length);
    let minBuy = buySells[0][0];
    let maxSell = buySells[0][1];
    for (let i = 0; i < buySells.length; i++) {
      const [ curBuy, curSell ] = buySells[i];
      minBuy = Math.min(minBuy, curBuy);
      maxSell = Math.max(maxSell, curSell);
      // dp[i][t] means up to the ith buySell pair, the max profit from t transactions
      // so dp[i][0] is 0; dp[i][1] is max sell - min buy so far
      dp[i] = [ 0, maxSell - minBuy ];
    }
    for (let i = 0; i < buySells.length; i++) {
      const [ curBuy, curSell ] = buySells[i];
      for (let t = 2; t <= k; t++) {
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
          max = Math.max(max, dp[j][t - 1] + dp[j + 1][1]);
        }
        dp[i].push(max);
      }
    }
    return dp[dp.length - 1][k];
};

// console.log(maxProfit(2, [3,2,2,6,5,0,4,3,5,1,6,6,4]));


/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.

Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
Note:
The length of the given array is positive and will not exceed 20.
The sum of elements in the given array will not exceed 1000.
Your output answer is guaranteed to be fitted in a 32-bit integer.
*/
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (nums.length === 0) return S === 0;
  if (nums.length === 1) return S === nums[0] || S === -nums[0];
  const sumAt = [];
  let sum = 0;
  for (let n of nums) {
    sum += n;
    sumAt.push(sum);
  }
  if (sum < S || -sum > S) return 0;
  // dp[i][s] means how many ways the subarray ending at i can have a sum of s
  const dp = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = new Array(sum * 2 + 1).fill(-1);
  }
  dp[0][sum + nums[0]] = 1;
  dp[0][sum - nums[0]] = nums[0] === 0 ? 2 : 1;

  const find = (i, s) => {
    if (s > sumAt[i] || s < -sumAt[i]) return 0;
    if (dp[i][sum + s] !== -1) return dp[i][sum + s];
    if (i === 0) return 0;
    const minus = find(i - 1, s - nums[i]);
    const plus = find(i - 1, s + nums[i]);
    dp[i][sum + s] = minus + plus;
    return dp[i][sum + s];
  }

  find(nums.length - 1, S);
  return dp[nums.length - 1][sum + S];
};

// console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1],1));
/*
Given a non-empty array containing only positive integers,
find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
 
Example 1:
Input: [1, 5, 11, 5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
 
Example 2:
Input: [1, 2, 3, 5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  for (let n of nums) sum += n;
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let n of nums) {
    if (n > target) return false;
    if (n === target) return true;
    for (let i = target - n; i >= 0; i--) {
      if (dp[i]) {
        if (i + n === target) return true;
        dp[i + n] = true;
      }
    }
  }
  return dp[target];
};

/*
For now, suppose you are a dominator of m 0s and n 1s respectively.
On the other hand, there is an array with strings consisting of only 0s and 1s.
Now your task is to find the maximum number of strings that you can form with given m 0s and n 1s.
Each 0 and 1 can be used at most once.

Note:
The given numbers of 0s and 1s will both not exceed 100
The size of given string array won't exceed 600.
Example 1:
Input: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
Output: 4
Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”
Example 2:
Input: Array = {"10", "0", "1"}, m = 1, n = 1
Output: 2
Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".
*/
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  if (strs.length === 0) return 0;
  const count0sAnd1s = s => {
    const r = [0, 0];
    for (let c of s) r[Number(c)]++;
    return r;
  }
  const binaryCounts = strs.map(count0sAnd1s);
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let [ curM, curN ] of binaryCounts) {
    // updating from [m,n] to [curM, curN] (top-down) because otherwise we may
    // see using current string more than once, e.g. updating [3,5] using new string;
    // then updating [8, 10] using new string.
    for (let targetM = m; targetM >= curM; targetM--) {
      for (let targetN = n; targetN >= curN; targetN--) {
        dp[targetM][targetN] = Math.max(
          1 + dp[targetM - curM][targetN - curN],
          dp[targetM][targetN]
        )
      }
    }
  }
  return dp[m][n];
};

// console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));

/*
A sequence of numbers is called a wiggle sequence if the differences between successive numbers strictly alternate
between positive and negative. The first difference (if one exists) may be either positive or negative.
A sequence with fewer than two elements is trivially a wiggle sequence.
For example, [1,7,4,9,2,5] is a wiggle sequence because the differences (6,-3,5,-7,3)
are alternately positive and negative.
In contrast, [1,4,7,2,5] and [1,7,4,5,5] are not wiggle sequences,
the first because its first two differences are positive and the second because its last difference is zero.
Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence.
A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence,
leaving the remaining elements in their original order.

Example 1:
Input: [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence.
Example 2:

Input: [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].
Example 3:

Input: [1,2,3,4,5,6,7,8,9]
Output: 2
Follow up:
Can you do it in O(n) time?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length;
    let i = 0;
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
    let e = nums.length - 1;
    while (e >= i && nums[e] === nums[e - 1]) e--;
    if (i > e) return 1;
    let count = 1;
    for (; i < e; i++) {
      if (nums[i] === nums[i + 1]) nums.splice(i, 1);
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        // peak
        count++;
      } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
        // valley
        count++;
      }
    }
    count++;
    return count;
};
// console.log(wiggleMaxLength([245,20,238,238,89,105,66,73]));

/*
You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c.
Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed.
You needn't use up all the given pairs. You can select pairs in any order.

Example 1:
Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]
Note:
The number of given pairs will be in the range [1, 1000].
*/
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  if (pairs.length < 2) return pairs.length;
  const pairsByL = pairs.map((p, i) => ({ i, l: p[0], r: p[1] }));
  pairsByL.sort((a, b) => a.l - b.l);
  const pairsByR = pairs.map((p, i) => ({ i, l: p[0], r: p[1] }));
  pairsByR.sort((a, b) => a.r - b.r);
  const best = new Array(pairs.length).fill(1);
  let globalMax = 1;
  for (let { i, l, r } of pairsByL) {
    // 1. find all pairs with smaller r than current l
    smallerRIdx = findSmallerRIdx(pairsByR, l);
    let max = 1;
    while (smallerRIdx >= 0) {
      const smallerRPair = pairsByR[smallerRIdx];
      max = Math.max(max, 1 + best[smallerRPair.i]);
      smallerRIdx--;
    }
    best[i] = max;
    globalMax = Math.max(globalMax, max);
  }
  return globalMax;
};

function findSmallerRIdx(pairsByR, limit) {
  let l = 0;
  let r = pairsByR.length - 1;
  if (limit <= pairsByR[0].r) return -1;
  if (limit > pairsByR[r].r) return r;
  while (l < r) {
    if (l + 1 === r) return l;
    const m = ~~((l + r) / 2);
    if (limit <= pairsByR[m].r) {
      r = m;
    } else {
      l = m;
    }
  }
  return l;
}

// console.log(findLongestChain([[1,2], [7, 9], [4,6], [6,7], [2,8], [3,6], [5,9], [2,3], [3,4]]));

/*
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string
by deleting some (can be none) of the characters without disturbing the relative positions
of the remaining characters.
(ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
Example 1:
Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:
Input: S = "babgbag", T = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)
babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const tMap = {};
  for (let ti = 0; ti < t.length; ti++) {
    tMap[t[ti]] = true;
  }
  const charIdxList = {};
  let newS = '';
  let newSI = 0;
  for (let si = 0; si < s.length; si++) {
    const c = s[si];
    if (tMap[c]) {
      newS = newS + c;
      if (!charIdxList[c]) charIdxList[c] = [];
      charIdxList[c].push(newSI);
      newSI++;
    }
  }
  s = newS;
  console.log('filtered s', s);
  const dp = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(t.length).fill(-1);
  }
  return _numDistinct(s, t, 0, 0, dp, charIdxList);
};

function _numDistinct(s, t, sStart, tStart, dp, charIdxList) {
  if (tStart === t.length) return 1;
  if (sStart === s.length) return 0;
  if (dp[sStart][tStart] !== -1) return dp[sStart][tStart];
  let count = 0;
  const idxList = charIdxList[t[tStart]];
  for (let idxListIdx = idxList.length - 1; idxListIdx >= 0; idxListIdx--) {
    const si = idxList[idxListIdx];
    if (si < sStart) break;
    if (t.length - tStart > s.length - sStart) {
      continue;
    }
    count += (tStart + 1 === t.length ? 1 : _numDistinct(s, t, si + 1, tStart + 1, dp, charIdxList));
  }
  dp[sStart][tStart] = count;
  return count;
}

// console.log(numDistinct('edbabgbag', 'bag'));
// console.log(numDistinct(
//   "xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo",
//   "rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys"));

/*
Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i;
and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

Example 1:
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
Note:

0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.
*/
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  if (prices.length < 2) return 0;
  let profit = 0;
  let hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, hold + prices[i] - fee);
    hold = Math.max(hold, profit - prices[i]);
  }
  return profit;
};

// console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
/*
Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
Example 2:
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
Note:

0 < s1.length, s2.length <= 1000.
All elements of each string will have an ASCII value in [97, 122].
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
  const dp = new Array(s1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s2.length + 1);
  }
  return _minimumDeleteSum(s1, s2, dp);
};

function _minimumDeleteSum(s1, s2, dp) {
  let s1l = s1.length;
  let s2l = s2.length;
  if (s1l === 0) return asciiSum(s2);
  if (s2l === 0) return asciiSum(s1);
  if (dp[s1l][s2l]) return dp[s1l][s2l];
  if (s1[s1l - 1] === s2[s2l - 1])
    return _minimumDeleteSum(s1.substring(0, s1l - 1), s2.substring(0, s2l - 1), dp);
  const r = Math.min(
    s1.charCodeAt(s1l - 1) + _minimumDeleteSum(s1.substring(0, s1l - 1), s2, dp),
    s2.charCodeAt(s2l - 1) + _minimumDeleteSum(s1, s2.substring(0, s2l - 1), dp),
    s1.charCodeAt(s1l - 1) + s2.charCodeAt(s2l - 1) + _minimumDeleteSum(s1.substring(0, s1l - 1), s2.substring(0, s2l - 1), dp)
  );
  dp[s1l][s2l] = r;
  return r;
}

function asciiSum(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s.charCodeAt(i);
  }
  return sum;
}

var canPartitionKSubsets = function(nums, k) {
  if (k < 2) return true;
  let total = 0;
  for (let num of nums) total += num
  if (total % k !== 0) return false;
  target = ~~(total / k);
  console.log(nums, k, target);
  // dp[k][mask] means for masked values, k subsets for target can be formed or not
  const dp = new Array(k + 1);
  for (let i = 1; i <= k; i++) {
    dp[i] = { 0: false };
  }

  // top down
  search(nums, dp, k, target, 0);
}

function search(nums, dp, k, target, selected) {
  // search(nums, dp, k - 1, selected & curSubset);
}

// console.log(canPartitionKSubsets([10, 10, 10, 7, 7, 7, 7, 7, 7, 6, 6, 6], 3));

/*
Given a positive integer n, break it into the sum of at least two positive integers and
maximize the product of those integers. Return the maximum product you can get.

Example 1:

Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
Note: You may assume that n is not less than 2 and not larger than 58.
*/
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  // 10 = f(1) * f(9), f(2) * f(8), f(3) * f(7)
  // the state transition should be: f(n) = max(f(i) * f(j), i+j = n, i = 0...n / 2)
  // bottom-up DP
  if (n <= 3) return n - 1;
  const sumProducts = new Array(n + 1).fill(0);
  sumProducts[0] = 0;
  sumProducts[1] = 1;
  for (let i = 2; i <= n; i++) {
    let max = i;
    for (let j = 1; j <= i / 2; j++) {
      max = Math.max(max, sumProducts[j] * sumProducts[i - j]);
    }
    sumProducts[i] = max;
  }

  return sumProducts[n];
};

/*
In a N x N grid representing a field of cherries, each cell is one of three possible integers.

0 means the cell is empty, so you can pass through;
1 means the cell contains a cherry, that you can pick up and pass through;
-1 means the cell contains a thorn that blocks your way.
 
Your task is to collect maximum number of cherries possible by following the rules below:

Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through
valid path cells (cells with value 0 or 1);
After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;
When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);
If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.

Example 1:
Input: grid =
[[0, 1, -1],
 [1, 0, -1],
 [1, 1,  1]]
Output: 5
Explanation: 
The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
 
Note:
grid is an N by N 2D array, with 1 <= N <= 50.
Each grid[i][j] is an integer in the set {-1, 0, 1}.
It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
  // Deceptively, greedy here won't work. We have to use a 3-dimensional DP
  const N = grid.length;
  if (N === 1) return grid[0][0];
  const memo = new Array(N);
  for (let i = 0; i < N; i++) {
    memo[i] = new Array(N);
    for (let j = 0; j < Array(N); j ++) {
      memo[i][j] = new Array(N).fill(-1);
    }
  }

  const dp = (r1, c1, r2) => {
    if (memo[r1][c1][r2] !== -1) return memo[r1][c1][r2];
    c2 = r1 + c1 - r2;

  }
  return Math.max(0, dp(0, 0, 0));
};

// console.log(cherryPickup([
//   [1,1,1,1,0,0,0],
//   [0,0,0,1,0,0,0],
//   [0,0,0,1,0,0,1],
//   [1,0,0,1,0,0,0],
//   [0,0,0,1,0,0,0],
//   [0,0,0,1,0,0,0],
//   [0,0,0,1,1,1,1],
// ]));

/*
Given a set of distinct positive integers, find the largest subset such that
every pair (Si, Sj) of elements in this subset satisfies:
Si % Sj = 0 or Sj % Si = 0.
If there are multiple solutions, return any subset is fine.

Example 1:

Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
Example 2:

Input: [1,2,4,8]
Output: [1,2,4,8]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length < 2) return nums;
  nums.sort((a, b) => a - b);
  
  const maxAt = [[nums[0]]];
  let globalMaxCount = 1;
  let globalMaxIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    let curMaxCount = 1;
    let curMaxIdx = i;
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        if (maxAt[j].length + 1 > curMaxCount) {
          curMaxIdx = j;
          curMaxCount = maxAt[j].length + 1;
        }
      }
    }
    if (curMaxIdx === i) {
      maxAt.push([nums[i]]);
    } else {
      const prefixSubset = maxAt[curMaxIdx].slice();
      prefixSubset.push(nums[i]);
      maxAt.push(prefixSubset);
    }
    if (maxAt[i].length > globalMaxCount) {
      globalMaxIdx = i;
      globalMaxCount = maxAt[i].length;
    }
  }

  return maxAt[globalMaxIdx];
};

/*
Given a string s, find the longest palindromic subsequence's length in s.
You may assume that the maximum length of s is 1000.

Example 1:
Input:

"bbbab"
Output:
4
One possible longest palindromic subsequence is "bbbb".
Example 2:
Input:

"cbbd"
Output:
2
One possible longest palindromic subsequence is "bb".
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const maxBetween = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    maxBetween[i] = new Array(s.length).fill(-1);
    maxBetween[i][i] = 1;
  }

  // top down
  const lps = (l, r) => {
    if (maxBetween(l, r) !== -1) return maxBetween(l, r);
    if (l > r) return 0; 
    let result;
    if (s[l] === s[r]) {
      result = lps(l + 1, r - 1) + 2;
    } else {
      result = Math.max(lps(l + 1, r), lps(l, r - 1));
    }
    maxBetween[l][r] = result;
    return result;
  };

  return lps(0, s.length - 1);

  // bottom up
  // for (let dist = 1; dist < s.length; dist++) {
  //   for (let l = 0; l + dist < s.length; l++) {
  //     const r = l + dist;
  //     const cur = s[l] === s[r] ? 2 : 0;
  //     maxBetween[l][r] = Math.max(cur + maxBetween[l + 1][r - 1], maxBetween[l + 1][r], maxBetween[l][r - 1]);
  //   }
  // }
  // return maxBetween[0][s.length - 1];
};

// console.log(longestPalindromeSubseq('acbbacdcbdac'));

/*
You are given K eggs, and you have access to a building with N floors from 1 to N. 
Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped
at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 
Your goal is to know with certainty what the value of F is.
What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

Example 1:

Input: K = 1, N = 2
Output: 2
Explanation: 
Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
If it didn't break, then we know with certainty F = 2.
Hence, we needed 2 moves in the worst case to know what F is with certainty.

Example 2:
Input: K = 2, N = 6
Output: 3

Example 3:
Input: K = 3, N = 14
Output: 4

1 <= K <= 100
1 <= N <= 10000
*/
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    
};


/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:

Input: 2
Output: 91 
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
excluding 11,22,33,44,55,66,77,88,99
*/
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n === 1) return 10;

  let sum = 10;
  let prev = 9;
  let factor = 9;
  for (let i = 2; i <= n; i++) {
    if (factor === 0) return sum;
    prev = prev * factor;
    sum += prev;
    factor--;
  }

  return sum;
};

// console.log(countNumbersWithUniqueDigits(200));

/*
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

Example 1:

Input: s1 = "great", s2 = "rgeat"
Output: true
Example 2:

Input: s1 = "abcde", s2 = "caebd"
Output: false
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  if (s1.length !== s2.length) return false;
  const L = s1.length;
  const memo = new Array(L * L);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(L + 1).fill(0);
  }
  const canScramble = (l1, r1, l2, r2) => {
    const memoIdx = l1 * L + l2;
    const len = r1 - l1 + 1;
    if (memo[memoIdx][len] !== 0) return memo[memoIdx][len] === 1;
    if (len === 1) return s1[l1] === s2[l2];
    if (len === 2) {
      const res = (s1[l1] === s2[l2] && s1[r1] === s2[r2]) || (s1[r1] === s2[l2] && s1[l1] === s2[r2]);
      memo[memoIdx][len] = res ? 1 : 2;
      return res;
    }
    for (let d = 0; d < len - 1; d++) {
      const forward = canScramble(l1, l1 + d, l2, l2 + d) && canScramble(l1 + d + 1, r1, l2 + d + 1, r2);
      if (forward) {
        memo[memoIdx][len] = 1;
        return true;
      }
      const reverse = canScramble(l1, l1 + d, r2 - d, r2) && canScramble(l1 + d + 1, r1, l2, r2 - d - 1);
      if (reverse) {
        memo[memoIdx][len] = 1;
        return true;
      }
    }
    memo[memoIdx][len] = 2;
    return false;
  }
  return canScramble(0, s1.length - 1, 0, s2.length - 1);
};

// console.log(isScramble('great', 'tagre'));
