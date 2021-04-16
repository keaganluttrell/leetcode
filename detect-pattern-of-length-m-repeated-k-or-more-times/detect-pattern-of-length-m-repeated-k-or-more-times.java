class Solution {
  public boolean containsPattern(int[] arr, int m, int k) {
    if(m*k > arr.length) return false;
    for(int i=0; i<arr.length-m; i++) {
      int[] P = buildPattern(arr, m, i);
      int ct = 1;
      for(int j=i+m; j<arr.length-(m-1); j+=m) {
        int[] T = buildPattern(arr, m, j);
        if(testPattern(P,T,m)) {
          ct++;
          if(ct == k) return true;
        } else {
          break;
        }
      }
    }
    return false;
  }
  
  public int[] buildPattern(int[] arr, int m, int index) {
    int[] pattern = new int[m];
    for(int i=index, j=0; i<m+index; i++, j++) {
      pattern[j] = arr[i];
    }
    return pattern;
  }
  
  public boolean testPattern(int[] a, int[] b, int n) {
    for(int i=0; i<n; i++) {
      if(a[i] != b[i]) return false;
    }
    return true;
  }
}