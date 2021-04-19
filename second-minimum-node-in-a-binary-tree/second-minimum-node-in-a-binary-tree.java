/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public int findSecondMinimumValue(TreeNode root) {
    return traverse(root, -1, -1);
  }
  
  public int traverse(TreeNode root, int smallest, int second) {
    if(root.left == null || root.right==null) return second;
    if(smallest==-1) {
      smallest = Math.min(root.left.val, root.right.val);
      second = root.left.val==root.right.val ? -1 : Math.max(root.left.val, root.right.val);
    } else if(second == -1) {
      if(root.left.val > smallest) second = root.left.val;
      if(root.right.val > smallest) second = root.right.val;
    } else{
      if (root.left.val < smallest) {
        second = smallest;
        smallest = root.left.val;
      } 
      if (root.right.val < smallest ) {
        second = smallest;
        smallest = root.right.val;
      } 
      if (root.left.val < second && root.left.val > smallest) {
        second = root.left.val;
      } 
      if (root.right.val < second && root.right.val > smallest) {
        second = root.right.val;
      }
    }
    second = traverse(root.left, smallest, second);
    second = traverse(root.right, smallest, second);
    return second;
  }
  
}