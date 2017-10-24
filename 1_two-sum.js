// Q:
/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/*
  Example:
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
 */

// A:
// 1.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums instanceof Array) return;
  let targetArray = []
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        targetArray.push([i,j])
      }
    }
  }
  return targetArray
};
console.log(twoSum([2, 7, 11, 15], 9))



// Keywords
/*
  1. 两个数只加一次
 */