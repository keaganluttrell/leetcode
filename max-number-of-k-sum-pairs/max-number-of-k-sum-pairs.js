/**INPUT
 * @param {number[]} nums
 * @param {number} k
 
 pick any pair (i, j) from array whose sum == k, and remove from array
 this constitutes an operation^^^
 
 
 OUTPUT
 * @return {number} -> MAX OPERATIONS
 
 C:
 1 <= nums.length <= 100,000
 1 <=   nums[i]   <= 100,000,000
 1 <=     k       <= 100,000,000
 
 */


var maxOperations = function(nums, k) {
  let counter = 0;
  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === null) continue;
    if(nums[i] >= k) continue;
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] === null) continue;
      if (nums[i] + nums[j] === k){
        nums[i] = null;
        nums[j] = null;
        counter++;
        break;
      }
    }
  }
  return counter;
};

