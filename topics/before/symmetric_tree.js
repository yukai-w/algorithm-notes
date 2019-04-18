/**
 * 给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
var isSymmetric = function(root) {
  if (!root) return null;
  function isSame(no1, no2) {
    if (no1 == null && no2 == null) {
      return true;
    } else if ((no1 && no1.val) === (no2 && no2.val)) {
      return isSame(no1.left, no2.right) && isSame(no1.right, no2.left);
    } else {
      return false;
    }
  }
  return isSame(root.left, root.right);
};
