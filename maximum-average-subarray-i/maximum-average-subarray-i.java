class Solution {
  public double findMaxAverage(int[] nums, int k) {
    double sum = 0.0;
    int j = 0;
    for(int i=0; i<k; i++) {
      sum += nums[i];
    }
    double maxAvg = sum/k;
    while(j+k < nums.length) {
      sum -= nums[j];
      sum += nums[k+j];
      if(sum/k > maxAvg ) maxAvg = sum/k;
      j++;
    }
    return maxAvg;
  }
}