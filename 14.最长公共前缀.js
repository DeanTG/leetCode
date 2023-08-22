/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var arr = strs
  var num = strs.length
  var valueMap = new Map()
  var index = -1

  for(var i = 0; i < 200; i ++) {
    for(var j = 0; j < num; j ++) {
      var key = arr[j][i]
      if(!key) continue
      if(!valueMap.get(key)) valueMap.set(key, [arr[j]])
      else valueMap.get(key).push(arr[j])
    }
    var tem = [...valueMap.values()].filter(item => item.length === num)[0]
    valueMap.clear()
    if(tem) {
      arr = tem
      index = i
    } else {
      break
    }
  }

  return index === -1 ? '' : arr[0].slice(0, index + 1)
};
// @lc code=end

