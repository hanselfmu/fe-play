/*
Given a list of unique words, find all pairs of distinct indices (i, j) in the given list,
so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
*/
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  if (words.length < 2) return [];
  const m = {};
  const resultMap = new Array(words.length);
  for (let i = 0; i < words.length; i++) {
    m[words[i]] = i;
    resultMap[i] = new Array(words.length).fill(false);
  }

  const result = [];
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    const rev = reverse(cur);
    // dbab babd: db babd
    // prefix part of rev to cur
    for (let r = rev.length; r >= 0; r--) {
      if (isPalindrome(cur.substring(0, rev.length - r))) {
        if (m.hasOwnProperty(rev.substring(0, r))) {
          const j = m[rev.substring(0, r)];
          if (i !== j && !resultMap[j][i]) {
            result.push([j, i]);
            resultMap[j][i] = true;
          }
        }
      }
    }

    // suffix part of rev to cur
    for (let r = rev.length; r >= 0; r--) {
      // babd dbab
      if (isPalindrome(cur.substring(r))) {
        if (m.hasOwnProperty(rev.substring(rev.length - r))) {
          const j = m[rev.substring(rev.length - r)];
          if (i !== j && !resultMap[i][j]) {
            result.push([i, j]);
            resultMap[i][j] = true;
          }
        }
      }
    }
  }

  function isPalindrome(s) {
    if (s.length < 2) return true;
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  function reverse(s) {
    if (s.length < 2) return s;
    return s.split('').reverse().join('');
  }

  return result;
};
// console.log(palindromePairs(["a","ab"]));

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const graph = {};
  const q = [];
  const distMap = {};
  for (let t of wordList) {
    if (t === beginWord) continue;
    if (_isOneReplaceDiff(beginWord, t)) {
      if (t === endWord) return [[beginWord, endWord]];
      q.push({ d: 2, n: t, p: beginWord });
    }
  }

  for (let i = 0; i < wordList.length; i++) {
    const s = wordList[i];
    const m = graph[s] = {};
    for (let t of wordList) {
      if (t === beginWord) continue;
      if (_isOneReplaceDiff(s, t)) m[t] = true;
    }
  }
  let minDist = 0;
  while (q.length > 0) {
    const { d, n, p } = q.shift();
    if (minDist !== 0 && d > minDist) break;
    if (distMap[n]) {
      const { dist, parents } = distMap[n];
      if (d === dist) parents.push(p);
    } else {
      distMap[n] = {
        dist: d,
        parents: [p],
      };
      for (let nextNode of Object.keys(graph[n])) {
        if (nextNode === endWord) {
          if (!distMap[endWord]) {
            distMap[endWord] = { dist: d + 1, parents: [] };
          }
          if (distMap[endWord].dist === d + 1)
            distMap[endWord].parents.push(n);
        }
        if (!distMap[nextNode]) q.push({ d: d + 1, n: nextNode, p: n });
      }
    }
  }
  if (!distMap[endWord]) return [];
  const permute = (parents, cur, distMap) => {
    const res = [];
    for (let p of parents) {
      const parentResults = p === beginWord ? [[beginWord]] : permute(distMap[p].parents, p, distMap);
      for (let pr of parentResults) {
        pr.push(cur);
        res.push(pr);
      }
    }
    return res;
  };

  return permute(distMap[endWord].parents, endWord, distMap);
};

function _isOneReplaceDiff(a, b) {
  let ai = 0;
  let bi = 0;
  let hasReplacedOnce = false;
  while (ai < a.length) {
    if (a[ai] !== b[bi] && hasReplacedOnce) {
      return false;
    } else if (a[ai] !== b[bi]) {
      hasReplacedOnce = true;
    }
    ai++;
    bi++;
  }
  return hasReplacedOnce;
}
// console.log(findLadders("hot", "dog", ["hot","cog","dog","tot","hog","hop","pot","dot"]));

/*
Given two words (beginWord and endWord), and a dictionary's word list,
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const graph = {};
  const beginQ = [];
  const endQ = [];
  const beginDists = {};
  const endDists = {};
  let hasEndWord = false;
  for (let t of wordList) {
    if (t === endWord) hasEndWord = true;
    if (_isOneReplaceDiff(beginWord, t)) {
      if (t === endWord) return 2;
      beginQ.push({ d: 2, n: t });
    }
    if (_isOneReplaceDiff(endWord, t)) {
      if (t === beginWord) return 2;
      endQ.push({ d: 2, n: t });
    }
  }
  if (!hasEndWord) return 0;
  for (let i = 0; i < wordList.length; i++) {
    const s = wordList[i];
    const m = graph[s] = {};
    for (let t of wordList) {
      if (t === beginWord) continue;
      if (_isOneReplaceDiff(s, t)) m[t] = true;
    }
  }
  while (beginQ.length > 0 && endQ.length > 0) {
    let { d, n } = beginQ.shift();
    if (n === endWord) return d;
    if (beginDists[n]) {
      if (endDists[n]) {
        return beginDists[n] + endDists[n] - 1;
      }
    } else {
      beginDists[n] = d;
      for (let nextNode of Object.keys(graph[n])) {
        if (nextNode === endWord) return d + 1;
        if (!beginDists[nextNode]) beginQ.push({ d: d + 1, n: nextNode });
      }
    }
    const curEnd = endQ.shift();
    d = curEnd.d;
    n = curEnd.n;
    if (n === beginWord) return d;
    if (endDists[n]) {
      if (beginDists[n]) {
        return beginDists[n] + endDists[n] - 1;
      }
    } else {
      endDists[n] = d;
      for (let nextNode of Object.keys(graph[n])) {
        if (nextNode === beginWord) return d + 1;
        if (!endDists[nextNode]) endQ.push({ d: d + 1, n : nextNode });
      }
    }
  }
  return 0;
};

/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  if (s.length === 0) return 0;
  const charCounts = {};
  let distinctCount = 0;
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (charCounts[cur] && charCounts[cur] > 0) {
      charCounts[cur]++;
    } else {
      charCounts[cur] = 1;
      distinctCount++;
      if (distinctCount > k) {
        max = Math.max(i - left, max);
        // pop until distinct count <= k
        while (distinctCount > k) {
          charCounts[s[left]]--;
          if (charCounts[s[left]] === 0) {
            distinctCount--;
          }
          left++;
        }
      }
    }
  }
  if (distinctCount <= k) max = Math.max(max, s.length - left);
  return max;
};
// console.log(lengthOfLongestSubstringKDistinct('aabbbcbbbacbddccbbbdc', 3));
/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let term = '1';
  for (let i = 2; i <= n; i++) {
    let newTerm = '';
    let digit = term[0];
    let count = 0;
    for (let t of term) {
      if (t === digit)
        count++;
      else {
        newTerm += '' + count + digit;
        digit = t;
        count = 1;
      }
    }
    newTerm += '' + count + digit;
    term = newTerm;
  }
  return term;
};

// console.log(countAndSay(5));

/*
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:

Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:

Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:

Input:
s = "acdcb"
p = "a*c?b"
Output: false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p === '*') return true;
  if (s.length === 0 || p.length === 0) return s === p;
  const dp = new Array(s.length + 1);
  for (let i = 0; i <= s.length; i++) dp[i] = new Array(p.length + 1).fill(0);

  const _isMatch = (si, pi) => {
    if (dp[si][pi] !== 0) return dp[si][pi] === 1;
    let newSI = si;
    let newPI = pi;
    while (newSI < s.length && newPI < p.length) {
      if (s[newSI] === p[newPI] || p[newPI] === '?') {
        newSI++;
        newPI++;
      } else if (p[newPI] === '*') {
        if (newPI === p.length - 1) {
          dp[si][pi] = 1;
          return true;
        }
        for (; newSI < s.length; newSI++) {
          if (_isMatch(newSI, newPI + 1)) {
            dp[si][pi] = 1;
            return true;
          }
        }
        dp[si][pi] = -1;
        return false;
      } else {
        return false;
      }
    }
    let result;
    if (newSI < s.length) {
      result = false;
    } else {
      while (newPI < p.length && p[newPI] === '*') newPI++;
      result = newPI === p.length;
    }
    dp[si][pi] = result ? 1 : -1;
    return result;
  };

  return _isMatch(0, 0, dp);
};
// console.log(isMatch('a', 'a****'));

/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) return s === '';
  const states = [];

  let prev;
  let curState = '';
  for (let i = 0; i < p.length; i++) {
    const cur = p[i];
    if (cur === '*') {
      if (curState.length > 1)
        states.push(curState.substring(0, curState.length - 1));
      states.push(prev + cur);
      curState = '';
    } else {
      curState += cur;
    }
    prev = cur;
  }
  if (curState.length > 0) states.push(curState);
  const dp = new Array(s.length + 1);
  for (let i = 0; i <= s.length; i++) {
    // 0: not visited; 1: visited and true; -1: visited and false
    dp[i] = new Array(states.length).fill(0);
  }
  return _match(s, states, 0, dp);
};

function _match(s, states, i, dp) {
  // console.log(s, i)
  if (i === states.length)
    return s.length === 0 && i === states.length;
  if (dp[s.length][i] !== 0) return dp[s.length][i] === 1;
  let curState = states[i];
  const isWildcard = curState.length === 2 && curState[1] === '*';
  if (isWildcard) {
    if (curState[0] === '.' && i + 1 === states.length) return true;
    let si = 0;
    while (si < s.length && (s[si] === curState[0] || curState[0] === '.')) {
      if (_match(s.substring(si + 1), states, i + 1, dp)) {
        dp[s.length][i] = 1;
        return true;
      }
      si++;
    }
    const result = _match(s.substring(si), states, i + 1, dp) || _match(s, states, i + 1, dp);
    dp[s.length][i] = result ? 1 : -1;
    return result;
  } else {
    if (s.length < curState.length) return false;
    let stateI = 0;
    let si = 0;
    while (si < s.length && stateI < curState.length) {
      if (s[si] !== curState[stateI] && curState[stateI] !== '.') break;
      si++;
      stateI++;
    }
    const result = stateI === curState.length && _match(s.substring(si), states, i + 1, dp);
    dp[s.length][i] = result ? 1 : -1;
    return result;
  }
}
// console.log(isMatch("mississippi", "mis*is*p*."));
// console.log(isMatch('aaaaabnxcxbcd', 'aaa*ab.*c*bc.'))

/*
Given a nested list of integers represented as a string, implement a parser to deserialize it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Note: You may assume that the string is well-formed:

String is non-empty.
String does not contain white spaces.
String contains only digits 0-9, [, - ,, ].
Example 1:

Given s = "324",

You should return a NestedInteger object which contains a single integer 324.
Example 2:

Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.
*/
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  if (s.length === 0) return null;
  if (s[0] !== '[') {
    const r = new NestedInteger();
    r.setInteger(Number(s));
    return r;
  }
  const addElem = (ni, elem) => {
    const list = ni.getList();
    if (list !== null)
      ni.add(elem);
    else {
      const prev = ni.getInteger();
      if (prev === null)
        ni.add(elem);
      else {
        const newNI = new NestedInteger();
        newNI.setInteger(prev);
        ni.add(newNI);
        ni.add(elem);
      }
    }
  }
  let top;
  const stack = [];
  let digits = '';
  // [1,2,[3,[4,5],6]]]
  for (let c of s) {
    if (c === '[') {
      const newNI = new NestedInteger();
      if (stack.length > 0) {
        addElem(stack[stack.length - 1], newNI);
      }
      stack.push(newNI);
    } else if (c === ']') {
      top = stack.pop();
      if (digits.length > 0) {
        const num = Number(digits);
        digits = '';
        const newNI = new NestedInteger();
        newNI.setInteger(num);
        addElem(top, newNI);
      }
    } else if (c === ',') {
      if (digits.length > 0) {
        const num = Number(digits);
        digits = '';
        const newNI = new NestedInteger();
        newNI.setInteger(num);
        addElem(stack[stack.length - 1], newNI);
      }
    } else {
      digits += c;
    }
  }
  return top;
};


/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II.
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII.
Instead, the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (s.length === 0) return 0;
  const MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  if (s.length === 1) return MAP[s[0]];
  let sum = 0;
  let i = 0;
  while (i + 1 < s.length) {
    const cur = MAP[s[i]];
    const nxt = MAP[s[i + 1]];
    if (nxt > cur && nxt <= cur * 10) {
      sum += nxt - cur;
      i += 2;
    } else {
      sum += cur;
      i++;
    }
  }
  if (i < s.length) sum += MAP[s[i]];
  return sum;
};

/*
Find the length of the longest substring T of a given string (consists of lowercase letters only)
such that every character in T appears no less than k times.

Example 1:
Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:
Input:
s = "ababbc", k = 2

Output:
5
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  // basic idea is that we keep a counter of occurrences for each char,
  // and use a prefix-sum-like 2D array to store count info of s[l...r]
  const N = s.length;
  if (N < k) return 0;
  const countsAt = [];
  let counts = new Array(26);
  for (let i = 0; i < N; i++) {
    const offsetCode = s.charCodeAt(i) - 97;
    counts[offsetCode]++;
    countsAt.push(counts.slice());
  }
  let charLessThanKTimes = -1;
  for (let offsetCode = 0; offsetCode < 26; offsetCode++) {
    if (countsAt[offsetCode] < k) {
      charLessThanKTimes = offsetCode;
      break;
    }
  }

  

  const _longest = (l, r) => {

  };
};

console.log(longestSubstring('accbbdec', 2));

