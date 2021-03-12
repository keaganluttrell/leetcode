/**
INPUT:
 * @param {number[]} nums
OUTPUT
 * @return {number} -> Max Product
 
 Always getting an array of integers with length 3 or greater
 
 Size of numbers?
 smallest to largest?
 
 Does order matter for the three numbers?
 uniques? 
 is mutation of original array acceptable? 
 
 */
const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);
  const smallest = nums[0] * nums[1] * nums[nums.length -1];
  const largest = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3] 
  return Math.max(smallest, largest)
};