class Solution {
  public boolean isIsomorphic(String s, String t) {
    HashMap<Character, Integer> m1 = new HashMap<>();
    HashMap<Character, Integer> m2 = new HashMap<>();
    for(Integer i=0;i<s.length();i++) {
      if(m1.put(s.charAt(i), i) != m2.put(t.charAt(i), i)) return false;
    }
    return true;
  }
//   public boolean isIsomorphic(String s1, String s2) {
//         Map<Character, Integer> m1 = new HashMap<>();
//         Map<Character, Integer> m2 = new HashMap<>();
    
//         for(Integer i = 0; i < s1.length(); i++) {

//             if(m1.put(s1.charAt(i), i) != m2.put(s2.charAt(i), i)) {
//                 return false;
//             }
//         }
//         return true;
//     }
}