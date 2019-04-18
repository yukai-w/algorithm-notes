/*
  将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

  示例：

  输入：1->2->4, 1->3->4
  输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) {
    return null;
  } else if ((l2 && !l1) || (l2 && l1.val > l2.val)) {
    let t = l2;
    l2 = l1;
    l1 = t;
  }
  let left = l1.next;
  let right = l2;
  let result = new ListNode(l1.val);
  let cur = result;

  while (left || right) {
    let ss;
    if (left && right) {
      if (left.val > right.val) {
        ss = new ListNode(right.val);
        cur.next = ss;
        cur = ss;
        right = right.next;
      } else if (left.val < right.val) {
        ss = new ListNode(left.val);
        cur.next = ss;
        cur = ss;
        left = left.next;
      } else {
        ss = new ListNode(right.val);
        cur.next = ss;
        cur = ss;
        right = right.next;
        ss = new ListNode(left.val);
        cur.next = ss;
        cur = ss;
        left = left.next;
      }
    } else if (left) {
      cur.next = left;
      left = null;
    } else if (right) {
      cur.next = right;
      right = null;
    }
  }
  return result;
};
