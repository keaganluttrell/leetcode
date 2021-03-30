class Solution {
  public int[] shuffle(int[] nums, int n) {
    int[] newArr = new int[n * 2];
    for(int i = 0; i < n; i++) {
      newArr[i * 2] = nums[i];
      newArr[(i * 2) + 1] = nums[i + n];
    }
    return newArr;
  }
}