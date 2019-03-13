/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (21.21%)
 * Total Accepted:    10.7K
 * Total Submissions: 49.9K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 
 * 
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 */

// https://blog.csdn.net/qq_41231926/article/details/82010888

//状态定义：f(x, y)------字符串s中[0, x - 1]范围内的字符串能否匹配字符串p中[0, y - 1]范围内的字符串
// 状态转移：
// （1）如果p(y) == '.', f(x, y) = f(x - 1, y - 1)。
// （2）如果p(y) == s(x), f(x, y) = f(x - 1, y - 1)。
// （3）如果p(y) == '*'，
//    a.如果s(x) == p(y - 1) || p(y - 1) == '.'，
//      a-1：使用'*'号进行匹配——f(x - 1, y)
//      a-2：只使用'*'号前面的那个字符匹配，不使用'*'匹配——f(x, y - 1)
//      a-3：'*'号前面的那个字符在匹配的过程当中一个都不使用——f(x, y - 2)
//          f(x, y) = f(x - 1, y) || f(x, y - 1) || f(x, y - 2)。
//    b.如果s(x) != p(y - 1) && p(y - 1) != '.'
//   *号前面的那个字符在匹配的过程当中一个都不使用，f(x, y) = f(x, y - 2)。

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
};

