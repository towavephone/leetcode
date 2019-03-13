/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (33.67%)
 * Total Accepted:    39.4K
 * Total Submissions: 116.7K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    // 分别找第 (m+n+1) / 2 个和 (m+n+2) / 2 个，然后求其平均值即可，这对奇偶数均适用
    const l = Number.parseInt((m + n + 1) / 2);
    const r = Number.parseInt((m + n + 2) / 2);
    const findKth = (a1, i, a2, j, k) => {
      if (i > a1.length - 1) { // a1 中的所有数字被淘汰，i 代表 a1 的起始位置
        return a2[j + k - 1];
      }
      if (j > a2.length - 1) {
        return a1[i + k - 1];
      }
      if (k === 1) { // k = 1 的话，比较 a1 和 a2 的起始位置 i 和 j 上的数字
        return Math.min(a1[i], a2[j]);
      }
      let mid = Number.parseInt(k / 2);
      let x1 = i + mid - 1 < a1.length ? a1[i + mid - 1] : Number.MAX_VALUE;
      let x2 = j + mid - 1 < a2.length ? a2[j + mid - 1] : Number.MAX_VALUE;
      if (x1 < x2) { // 中位数 x1 比较小时，淘汰 a1 前面 k / 2 个数字，为啥？
        return findKth(a1, i + mid, a2, j, k - mid);
      }
      return findKth(a1, i, a2, j + mid, k - mid);
    }
    return (findKth(nums1, 0, nums2, 0, l) + findKth(nums1, 0, nums2, 0, r)) / 2;
};

