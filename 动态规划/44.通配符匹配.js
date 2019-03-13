/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 *
 * https://leetcode-cn.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (20.58%)
 * Total Accepted:    3.7K
 * Total Submissions: 17.6K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * 
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 
 * 
 * 两个字符串完全匹配才算匹配成功。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 * 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 * 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 * 
 */

// 状态定义：f(x, y)------字符串s中[0, x - 1]范围内的字符串能否匹配字符串p中[0, y - 1]范围内的字符串
// 状态转移：
// (1) 如果 p(y) == '?', f(x, y) = f(x - 1, y - 1)
// (2) 如果 p(y) == s(x), f(x, y) = f(x - 1, y - 1) 且对应的字符串匹配
// (3) 如果 p(y) == '*'，f(x, y) = f(x, y - 1) || f(x - 1, y - 1) || f(x - 1, y) = f(x, y - 1) || f(x - 1, y)
// 时间复杂度是 O(ns * np) 级别的，其中ns为字符串s的长度，np为字符串p的长度。空间复杂度也是O(ns * np)级别的。

//f(x, y) = f(x, y - 1) || f(x - 1, y) = f(x, y - 1) || f(x - 1, y - 1) || f(x - 2, y)
//        = f(x, y - 1) || f(x - 1, y - 1) || f(x - 2, y - 1) || f(x - 3, y) = ...
//        = f(x, y - 1) || f(x - 1, y - 1) || f(x - 2, y - 1) || ... || f(1, y - 1) || f(0, y)
//        = f(x, y - 1) || f(x - 1, y - 1) || f(x - 2, y - 1) || ... || f(1, y - 1) || f(0, y - 1)

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const dp = [];
  for (let i = 0; i < p.length + 1; i++) { // 一维长度
      dp[i] = []; // 再声明二维
  }
  for (let j = 0; j < s.length + 1; j++) {
    if (j === 0) {
      dp[0][j] = true;
    } else {
      dp[0][j] = false;
    }
  }
  for (let i = 1; i <= p.length; i++) {
      if (p.charAt(i-1) === '*') {
          dp[i][0] = dp[i-1][0]; // 匹配多个字符
          for (let j = 1; j <= s.length; j++) {
              dp[i][j] = dp[i][j-1] || dp[i-1][j];
          }
      } else if (p.charAt(i-1) === '?') {
          dp[i][0] = false; // 匹配单个字符
          for (let j = 1; j <= s.length; j++) {
              dp[i][j] = dp[i-1][j-1];
          }
      } else {
          dp[i][0] = false;
          for (let j = 1; j <= s.length; j++) {
              dp[i][j] = s.charAt(j-1) == p.charAt(i-1) && dp[i-1][j-1];
          }
      }
  }
  return dp[p.length][s.length];
};

