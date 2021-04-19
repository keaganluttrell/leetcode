class Solution {
  public String licenseKeyFormatting(String s, int k) {
    String output = "";
    for(int i=s.length()-1, j=0; i>-1; i--) {
      if(s.charAt(i)=='-') continue;
      if(j==k) {
        j=0;
      }
      if(j==0 && output.length()>0) {
        output = s.charAt(i) + "-" + output;
      } else {
        output = s.charAt(i) + output;
      }
      j++;
    }
    return output.toUpperCase();
  }
}