/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root, depth = 1, min = 0) {
  if(root === null) return min;
  if(!root.right && !root.left && (depth < min || min === 0)) {
    min = depth;
    return min;
  }
  if(root.left) {
    min = minDepth(root.left, depth + 1, min);
  }
  if(root.right) {
    min = minDepth(root.right, depth + 1, min);
  }
  return min;
};