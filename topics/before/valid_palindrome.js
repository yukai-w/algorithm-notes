/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let _s = s.replace(/[\W]/g, "").toLowerCase();
  if (_s.length == 0) {
    return true;
  } else {
    for (let i = 0, j = _s.length - 1; i <= j; i++, j--) {
      if (_s[i] !== _s[j]) {
        return false;
      }
    }
  }

  return true;
};
