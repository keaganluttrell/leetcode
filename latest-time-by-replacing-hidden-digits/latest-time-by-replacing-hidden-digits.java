class Solution {
  public String maximumTime(String time) {
    char[] D = time.toCharArray();
    if(D[1] != '?' && D[1] > '3') {
      D[0] = D[0] == '?' ? '1' : D[0];  
    } else {
      D[0] = D[0] == '?' ? '2' : D[0];     
    }

    if(D[0] == '2') {
      D[1] = D[1] == '?' ? '3' : D[1];
    } else {
      D[1] = D[1] == '?' ? '9' : D[1];
    }
    D[3] = D[3] == '?' ? '5' : D[3];
    D[4] = D[4] == '?' ? '9' : D[4];
    
    return String.valueOf(D);
  }
}