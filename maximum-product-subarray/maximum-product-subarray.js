/**
  INPUT:
 * @param {number[]} nums
 Single value in the array? Count as product? 
 
 OUTPUT:
 * @return {number}
 
 C: 
 1 <= nums.length <= 2 * 10^4
 -10 <= nums[i] <= 10
 */
var maxProduct = function(nums) {
    let maxProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      let currentProduct = nums[i];
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
      }
    for (let j = i + 1; j < nums.length; j++) {
      currentProduct *= nums[j];
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
      }
    }
  }
  return maxProduct
};