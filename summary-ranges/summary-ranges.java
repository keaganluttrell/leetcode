class Solution {
  public List<String> summaryRanges(int[] nums) {
    ArrayList<String> str = new ArrayList<>();
    
    for(int i=0; i<nums.length; i++) {
      String temp = nums[i]+"";
      if(i==nums.length-1) {
        str.add(temp);
        break;
      }
      boolean link = false;
      while(i<nums.length-1 && nums[i]+1 == nums[i+1]){
        if(!link) {
          temp = temp + "->";
          link = true;
        }
         i++;
      }
      temp= link ? temp+nums[i] : temp;
      str.add(temp);
    }
    return str;
  }
}