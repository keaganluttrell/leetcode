class Solution {
    public int[] place = new int[2];
    public char heading = 'N';
    public void setHeading(int x) {
      switch(heading) {
        case 'N': heading = x == -1 ? 'E' : 'W'; break;
        case 'E': heading = x == -1 ? 'S' : 'N'; break;
        case 'S': heading = x == -1 ? 'W' : 'E'; break;
        case 'W': heading = x == -1 ? 'N' : 'S'; break;
      }
    }
    public boolean move() {
      switch(heading) {
        case 'N': place[1] += 1; break;
        case 'E': place[0] += 1; break;
        case 'S': place[1] -= 1; break;
        case 'W': place[0] -= 1; break;
      }
      if(ops.contains(place[0] + " " + place[1])) {
        setHeading(-1);
        setHeading(-1);
        move();
        setHeading(-1);
        setHeading(-1);
        return false;
      } else return true;
    }
    public int findGreatest(int[] A) {
      return (A[0] * A[0] )+(A[1] * A[1]);
    }
    
    Set<String> ops = new HashSet<>();
  
    public int robotSim(int[] commands, int[][] obstacles) {
      int greatest = 0;
      for(int[] op : obstacles) {
        ops.add(op[0] + " " + op[1]);
      }
      for(int c : commands) {
        if(c < 0) {
          setHeading(c);
        } else {
          while(c-- > 0 && move());
          int dist = findGreatest(place);
          if(dist > greatest) greatest = dist;
        }
      }
      return greatest;
    }
}