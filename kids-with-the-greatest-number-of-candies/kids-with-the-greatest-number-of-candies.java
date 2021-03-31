class Solution {
  public List<Boolean> kidsWithCandies(int[] candies, int extra) {
    int max = 0;
    List<Boolean> output = new ArrayList<Boolean>(candies.length);
    for(int val : candies) if(val > max) max = val;
    for(int val : candies) output.add(val + extra >= max);
    return output;
  }
}