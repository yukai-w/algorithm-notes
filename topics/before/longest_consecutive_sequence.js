/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0;
  var sortedNums = nums.sort((a, b) => a - b);

  var i = 1;
  var num = 1;
  var max = 1;
  while (i < sortedNums.length) {
    if (sortedNums[i] - sortedNums[i - 1] === 1) {
      num++;
    } else if (sortedNums[i] === sortedNums[i - 1]) {
      i++;
      continue;
    } else {
      num = 1;
    }
    max = Math.max(max, num);

    i++;
  }

  return max;
};
