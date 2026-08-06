/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
        let map = {};

    // Count frequency
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let maxLength = 0;

    // Check every number
    for (let num in map) {

        let next = Number(num) + 1;

        if (next in map) {
            maxLength = Math.max(
                maxLength,
                map[num] + map[next]
            );
        }
    }

    return maxLength;
};