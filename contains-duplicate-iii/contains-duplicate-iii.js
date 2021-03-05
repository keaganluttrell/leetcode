/**
INPUT:
 * @param {number[]} nums ints, expecting only integers
 * @param {number} k
 * @param {number} t
 
 OUTPUT:
 * @return {boolean}
 
 
 CONSTRAINTS:
 0 <= nums.length <= 20,000
 Number.MIN_SAFE <= nums[i] <= Number.MAX_SAFE
 0 <= k <= 10,000
 0 <= t <= Number.MAX_SAFE
 */

// How handle an array length less than 2?
// To find if there are at lease two distinct indices that have
// nums[i], nums[j] abs diff <= t && abs diff <= k


var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;
    while(j <= k + i) {
      const absDiff = Math.abs(nums[i] - nums[j]);
      if(absDiff <= t) return true;
      j++;
    }
  }
  return false;
};