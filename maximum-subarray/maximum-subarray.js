/**
 * @param {number[]} nums ->  input
 * @return {number} -> output
 */

var maxSubArray = function(nums) {
  let max = nums[0];
  let curr = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(curr + nums[i], nums[i]);
    max = Math.max(curr, max);
  }
  
  return max
};
