class Solution {
  public boolean isBoomerang(int[][] points) {
    int[] a = points[0];
    int[] b = points[1];
    int[] c = points[2];
    int slope1 = (a[1] - b[1]) * (c[0] - b[0]);
    int slope2 = (c[1] - b[1]) * (a[0] - b[0]);
    return slope1 != slope2;
    // return (a[1] - b[1]) * (c[0] - b[0]) !=  (c[1] - b[1]) * (a[0] - b[0]);
  }
}