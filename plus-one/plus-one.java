class Solution {
  public int[] plusOne(int[] digits) {
    int n = digits.length;
    int i = n-1;
    while(i > -1 && digits[i] == 9) {
     digits[i] = 0;
      i--;
    }
    if(i >-1) digits[i]++;
    else {
      int[] nums = new int[n+1];
      nums[0] = 1;
      return nums;
    }
    return digits;
  }
}