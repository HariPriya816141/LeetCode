/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
       let map = {};
    map[0] = 1;

    let prefix = 0;
    let count = 0;

    for (let num of nums) {

        prefix += num;

        if ((prefix - k) in map) {
            count += map[prefix - k];
        }

        map[prefix] = (map[prefix] || 0) + 1;
    }

    return count;
};