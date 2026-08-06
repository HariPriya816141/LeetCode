/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
      let map = {};

    // Count frequencies
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let count = 0;

    if (k == 0) {
        // Numbers appearing at least twice
        for (let num in map) {
            if (map[num] > 1) {
                count++;
            }
        }
    } else {
        // Look for num + k
        for (let num in map) {
            if ((Number(num) + k) in map) {
                count++;
            }
        }
    }

    return count;
};