/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return null;
  const l = find(root.left);
  const r = find(root.right);
  console.log(l, r);
  if (l === 0 && r === 0) {
    return true;
  }
  if (l === false || r === false) {
    return false;
  }

  if (Math.abs(l - r) > 1) return false;
  return true;
  function find(map) {
    if (!map) return 0;
    let left = find(map.left);
    let right = find(map.right);
    if (left === false || right === false) {
      return false;
    }
    left++;
    right++;
    if (Math.abs(left - right) > 1) {
      return false;
    }
    const max = Math.max(left, right);
    return max;
  }
};
