/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  for(let i = 0; i < nums1.length; i++) {
    if(m <= 0) {
      nums1[i] = nums2.shift();
    }
    if(nums2[0] < nums1[i]) {
      nums1.pop();
      nums1.splice(i, 0, nums2.shift())
    } else {
      m--;
    }
  }
};