/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(arr, tar) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = tar - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
  return [];
}

twoSum([2, 7, 11, 3], 10)
