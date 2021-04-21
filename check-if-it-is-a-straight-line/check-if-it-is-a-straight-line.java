class Solution {
    public boolean checkStraightLine(int[][] coordinates) {
      int x1 = coordinates[0][0];
      int y1 = coordinates[0][1];
      int x2 = coordinates[1][0];
      int y2 = coordinates[1][1];
      
      for(int i=2; i<coordinates.length; i++) {
        int xi = coordinates[i][0];
        int yi = coordinates[i][1];
        if((y2 - y1)*(xi - x1) != (x2 - x1)*(yi - y1))  return false;
      }
      return true;
    }
}