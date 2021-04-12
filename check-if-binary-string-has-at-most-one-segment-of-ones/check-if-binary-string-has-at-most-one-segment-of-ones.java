class Solution {
  public boolean checkOnesSegment(String s) {
    Boolean ones = true;
    for(int i = 1; i<s.length(); i++) {
      if(s.charAt(i) == '1' && ones) continue;
      if(s.charAt(i) == '0' && ones) ones = false;
      if(s.charAt(i) == '1') return false;
    }
    return true;
  }
}