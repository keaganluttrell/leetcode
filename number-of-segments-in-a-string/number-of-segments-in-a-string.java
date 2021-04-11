class Solution {
    public int countSegments(String s) {
      String[] words = s.trim().split("\\s+");
      return s.trim().length() > 0 ? words.length : 0;
    }
}