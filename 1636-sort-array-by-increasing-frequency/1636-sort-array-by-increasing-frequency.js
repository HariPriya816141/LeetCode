/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
      let map = {};

    // Count frequency
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    nums.sort((a, b) => {

        // Different frequencies
        if (map[a] !== map[b]) {
            return map[a] - map[b];
        }

        // Same frequency -> larger number first
        return b - a;
    });

    return nums;
};