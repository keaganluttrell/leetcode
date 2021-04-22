class Solution {
    public int dominantIndex(int[] nums) {
      int largest = nums[0];
      int index = 0;
      for(int i = 1; i<nums.length; i++) {
        if(nums[i]>largest) {
          index = i;
          largest = nums[i];
        }
      }
      for(int n : nums){
        if(n == largest) continue;
        if(n*2 > largest) return -1;
      }
      return index;
    }
}