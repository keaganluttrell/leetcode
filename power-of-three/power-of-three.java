class Solution {
  public boolean isPowerOfThree(int n) {
    int p = 0;
    while(Math.pow(3, p++)<n);
    return Math.pow(3, p-1) == n;
  }
}