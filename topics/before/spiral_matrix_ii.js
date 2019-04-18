/**
 * 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 1) return [[1]];
  function left(po) {
    return [po[0] - 1, po[1]];
  }
  function right(po) {
    return [po[0] + 1, po[1]];
  }
  function top(po) {
    return [po[0], po[1] - 1];
  }
  function bottom(po) {
    return [po[0], po[1] + 1];
  }
  // 0：右 1：下：2：左 3上
  var poList = [right, bottom, left, top];
  var initPo = 0;
  var initList = new Array(n).fill(1).map(() => []);
  var init = [0, 0];
  var i = 1;
  while (i < n * n) {
    initList[init[1]][init[0]] = i;

    var next = poList[initPo](init) || [];
    if (
      next[0] > n - 1 ||
      next[1] > n - 1 ||
      initList[next[1]][next[0]] ||
      next[0] < 0
    ) {
      initPo = initPo + 1 > 3 ? 0 : initPo + 1;
    } else {
      init = next;
      i++;
    }
    if (i === n * n) {
      initList[next[1]][next[0]] = i;
    }
  }
  return initList;
};
