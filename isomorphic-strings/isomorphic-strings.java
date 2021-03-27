class Solution {
  public boolean isIsomorphic(String s, String t) {
    HashMap<Character, Character> map = new HashMap<>();
    
    for(int i=0;i<s.length();i++) {
      char s1 = s.charAt(i);
      char t1 = t.charAt(i);
      // System.out.print(s1);
      // System.out.println(t1);
      if(map.containsKey(s1) && map.get(s1) != t1) return false;
      if(map.containsValue(t1) && !map.containsKey(s1)) return false;
      map.put(s1, t1);
    }
    return true;
  }
}