/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums, current, max) {
  if(!nums.length) return max;
   const val = nums.pop();
  if (current === undefined || max === undefined) {
    current = val;
    max = val;
    return maxSubArray(nums, current, max);
  }
  current = Math.max(current + val, val);
  max = Math.max(current, max);
  return maxSubArray(nums, current, max);
};