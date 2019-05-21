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

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1],1));
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
