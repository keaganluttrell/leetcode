class Solution {
  public int[] findErrorNums(int[] nums) {
    int[] output = new int[2];
    int n = nums.length;
    HashMap<Integer, Integer> map = new HashMap<>();
    for(int i=0; i<n; i++) {
      if(map.get(nums[i]) != null) map.put(nums[i], map.get(nums[i]) + 1);
      else map.put(nums[i],1);
    }
    for(int j=1; j<n + 1; j++) {
      if(map.get(j) == null) output[1] = j;
      else if(map.get(j) == 2) {
        output[0] = j;
      if( map.get(j - 1) == null && j > 0) output[1] = j - 1;
      if( map.get(j + 1) == null) {
        if(output[1] == 0) output[1] = j + 1;
      }
      }
    }
    return output;
  }
}