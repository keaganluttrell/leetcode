/**
 * @param {number[]} nums
 * @return {number}
 
 
 I: int array
 0: third max number, if array.length < 3 -> Max number
 C: 1 to 10000
 E:
 */

var thirdMax = function(nums) {
  let max = nums[0];
  let sec = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;
  
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if(num > max) {
      third = sec;
      sec = max;
      max = num;
    } 
    if (num > sec && num < max ) {
      third = sec;
      sec = num;
    } 
    if (num > third && num < sec) {
      third = num;
    }
  }
  
  return third === Number.MIN_SAFE_INTEGER ? max : third;
};
