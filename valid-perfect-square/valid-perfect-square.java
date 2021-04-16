class Solution {
  public boolean isPerfectSquare(int num) {
    double x = Math.sqrt(num);
    int y= (int) x;
    return y*y == num;
  }
}