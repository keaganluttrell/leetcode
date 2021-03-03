/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function(nums) {
  let max = nums[0];
  let current = nums[0];
  for(let i = 1 ; i < nums.length; i++) {
    const sum = nums[i] + current;
    current = sum > nums[i] ? sum : nums[i];
    if(current > max ) max = current;
  }
  return max;
};