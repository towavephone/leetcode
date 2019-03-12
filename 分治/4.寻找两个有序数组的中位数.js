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
    // 分别找第 (m+n+1) / 2 个，和 (m+n+2) / 2 个，然后求其平均值即可，这对奇偶数均适用
    let l = Number.parseInt((m + n + 1) / 2), r = Number.parseInt((m + n + 2) / 2);
    const findKth = (nums1, i, nums2, j, k) => {
      if (i >= nums1.length) { // nums1 中的所有数字被淘汰，i 代表 nums1 的起始位置
        return nums2[j + k - 1];
      }
      if (j >= nums2.length) { // nums2 中的所有数字被淘汰，j 代表 nums2 的起始位置
        return nums1[i + k - 1];
      }
      if (k == 1) { // K = 1 的话，比较 nums1 和 nums2 的起始位置 i 和 j 上的数字
        return Math.min(nums1[i], nums2[j]);
      }
      let mid = Number.parseInt(k / 2);
      let x1 = i + mid - 1 < nums1.length ? 
        nums1[i + mid - 1] : Number.MAX_VALUE;
      let x2 = j + mid - 1 < nums2.length ? 
        nums2[j + mid - 1] : Number.MAX_VALUE;
      if (x1 < x2) { // 中位数 x1 比较小时，淘汰 nums1 前面 k / 2 个数字，为啥？
          return findKth(nums1, i + mid, nums2, j, k - mid);
      }
      return findKth(nums1, i, nums2, j + mid, k - mid);
    }
    return (findKth(nums1, 0, nums2, 0, l) + findKth(nums1, 0, nums2, 0, r)) / 2;
};

