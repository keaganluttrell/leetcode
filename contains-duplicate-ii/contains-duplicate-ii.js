/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j <= k + i && j < nums.length; j++) {
      if(nums[i] === nums[j]) return true;
    }
  }
  return false;
};