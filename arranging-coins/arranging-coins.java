class Solution {
  public int arrangeCoins(int n) {
    int c=0;
    while(n>c) {
      c+=1;
      n-=c;
    }
    return c;
  }
}