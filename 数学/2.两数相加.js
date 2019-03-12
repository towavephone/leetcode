/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.80%)
 * Total Accepted:    88.7K
 * Total Submissions: 270.4K
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 示例：
 * 
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let header = new ListNode(0);
    let curr = header;
    let p = l1, q = l2;
    let carry = 0;
    while (p || q) {
      let x = p ? p.val : 0;
      let y = q ? q.val : 0;
      let sum = x + y + carry;
      carry = Number.parseInt(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p) {
        p = p.next;
      }
      if (q) {
        q = q.next;
      }
    }
    if (carry > 0) { // 进位
      curr.next = new ListNode(1);
    }
    return header.next;
};

