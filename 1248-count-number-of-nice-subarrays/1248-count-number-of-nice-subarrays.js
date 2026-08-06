/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let map = {};

    // Prefix sum 0 occurs once
    map[0] = 1;

    let prefix = 0;
    let count = 0;

    for (let num of nums) {

        // Odd contributes 1, even contributes 0
        prefix += num % 2;

        if ((prefix - k) in map) {
            count += map[prefix - k];
        }

        map[prefix] = (map[prefix] || 0) + 1;
    }

    return count;
};