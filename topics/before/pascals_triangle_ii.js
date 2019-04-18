/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(numRows) {
  if (numRows === null || numRows === undefined) return [];
  if (numRows === 0) return [1];
  var list = [[1], [1, 1]];
  if (numRows === 1) return list[1];
  var i = 2;
  while (i <= numRows) {
    var mlist = list[i - 1];
    var newList = [];
    for (let j = 0; j < mlist.length - 1; j++) {
      newList.push(mlist[j] + mlist[j + 1]);
    }
    newList.push(1);
    newList.unshift(1);
    list.push(newList);
    i++;
  }

  return list[list.length - 1];
};
