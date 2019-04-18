/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let len = a.length > b.length ? a.length : b.length;
  // 先将两个字符串填充到一样长
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");
  let str = "";
  let carry = 0; // 进位
  for (let i = len - 1; i >= 0; i--) {
    let tem = Number(a[i]) + Number(b[i]) + carry;
    carry = parseInt(tem / 2);
    str += tem % 2;
  }
  // 判断最后还有没有进位
  if (carry !== 0) {
    str += carry;
  }
  // 翻转字符串
  str = str
    .split("")
    .reverse()
    .join("");
  return str;
};
