class Solution {
  public boolean isPowerOfFour(int n) {
    int p = 0;
    while(Math.pow(4,p++)<n);
    return Math.pow(4, p-1) == n;
  }
}