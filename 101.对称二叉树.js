/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (45.10%)
 * Total Accepted:    22.3K
 * Total Submissions: 49.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   const isMirror = (t1, t2) => {
//     if (!t1 && !t2) {
//       return true;
//     }
//     if (!t1 || !t2) {
//       return false;
//     }
//     if (t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)) {
//       return true;
//     }
//     return false;
//   }
//   return isMirror(root, root);
// };
var isSymmetric = function(root) {
  const queue = [root, root];
  while (queue.length) {
    const t1 = queue.shift();
    const t2 = queue.shift();
    if (!t1 && !t2) {
      continue;
    }
    if (!t1 || !t2) {
      return false;
    }
    if (t1.val !== t2.val) {
      return false;
    }
    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
};

