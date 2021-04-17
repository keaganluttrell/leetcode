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
  public boolean hasPathSum(TreeNode root, int targetSum) {
    if(root==null) return false;
    boolean ans = DFS(root, 0, targetSum, false);
    return ans;
  }
  public boolean DFS(TreeNode node, int sum, int target, boolean ans) {
    if(node==null) return ans;
    sum+=node.val;
    if(node.left==null && node.right==null) ans=sum==target;
    if(DFS(node.left, sum, target, ans)) ans=true;
    if(DFS(node.right, sum, target, ans)) ans=true;
    return ans;
  }
}