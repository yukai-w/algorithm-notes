/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。


输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (!numRows) return [];
  if (numRows === 1) return [[1]];
  var list = [[1], [1, 1]];
  if (numRows === 2) return list;
  var i = 3;
  while (i <= numRows) {
    var mlist = list[i - 2];
    var newList = [];
    for (let j = 0; j < mlist.length - 1; j++) {
      newList.push(mlist[j] + mlist[j + 1]);
    }
    newList.push(1);
    newList.unshift(1);
    list.push(newList);
    i++;
  }

  return list;
};
