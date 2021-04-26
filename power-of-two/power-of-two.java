class Solution {
  public boolean isPowerOfTwo(int n) {
    int p = 0;
    while(Math.pow(2, p) <= n) p++;
    return n == Math.pow(2, p-1);
  }
}