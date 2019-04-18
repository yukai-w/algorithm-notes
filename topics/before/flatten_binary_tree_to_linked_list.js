/**
 * 给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return;
  const { left, right } = root;
  root.left = null;
  root.right = null;
  let _root = root;
  function map(r) {
    if (!r) return;

    _root.right = new TreeNode(r.val);
    _root = _root.right;

    map(r.left);
    map(r.right);
  }
  map(left);
  map(right);
};
