class Solution {
  public boolean isLongPressedName(String name, String typed) {
    char[] T = typed.toCharArray();
    char[] N = name.toCharArray();
    int t = 0;
    int n = 0;
    while(n < N.length) {
      if(t == T.length) return false;
      System.out.printf("%d:%c %d:%c%n", n, N[n], t, T[t]);
      if (N[n] == T[t]) {
        if (t < T.length) t++;
        if (n < N.length) n++;
      } else if (n > 0 && N[n - 1] == T[t]) {
        t++;
      } else return false;
    }
    while(t < T.length) {
      if (T[t] != N[n - 1]) return false;
      t++;
    }
    System.out.printf("n: %d, t: %d",n, t );
    return true;
  }
}