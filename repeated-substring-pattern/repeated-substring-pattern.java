class Solution {
  public boolean repeatedSubstringPattern(String s) {
    return findReps(s, 1);
  }

  public boolean findReps(String s, int l) {
    if (l>s.length()/2) return false;
    if(s.length() % l != 0) return findReps(s, l+1);
    String p = s.substring(0,l);
    
    for(int i=l; i<s.length(); i+=l) {
      String x = s.substring(i,i+l);
      // System.out.printf("%d %s - %s%n",i, p,x);
      if(!p.equals(x)) {
        return findReps(s, l+1);
      }
    }
    return true;
  }
}