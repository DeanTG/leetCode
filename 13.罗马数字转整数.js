/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  const numeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = s.length - 1; i > -1; i--) {
    if (s[i + 1] && numeralMap[s[i]] < numeralMap[s[i + 1]]) {
      total -= numeralMap[s[i]];
    } else {
      total += numeralMap[s[i]];
    }
  }

  return total;
};
// @lc code=end
