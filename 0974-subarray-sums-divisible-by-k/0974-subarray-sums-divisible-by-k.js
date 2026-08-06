/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
     let map = {};

    // Remainder 0 exists once before array starts
    map[0] = 1;

    let prefix = 0;
    let count = 0;

    for (let num of nums) {

        prefix += num;

        // Normalize negative remainder
        let remainder = ((prefix % k) + k) % k;

        if (remainder in map) {
            count += map[remainder];
        }

        map[remainder] = (map[remainder] || 0) + 1;
    }

    return count;
};