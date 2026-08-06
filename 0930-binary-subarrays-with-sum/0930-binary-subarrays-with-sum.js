/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    
    let map = {};

    // Prefix sum 0 occurs once before array starts
    map[0] = 1;

    let prefix = 0;
    let count = 0;

    for (let num of nums) {

        prefix += num;

        if ((prefix - goal) in map) {
            count += map[prefix - goal];
        }

        map[prefix] = (map[prefix] || 0) + 1;
    }

    return count;
};