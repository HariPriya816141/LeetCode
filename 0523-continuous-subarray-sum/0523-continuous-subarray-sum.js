/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
     let map = {};

    // remainder 0 exists before the array starts
    map[0] = -1;

    let prefix = 0;

    for (let i = 0; i < nums.length; i++) {

        prefix += nums[i];

        let remainder = prefix % k;

        if (remainder in map) {

            // subarray must contain at least 2 elements
            if (i - map[remainder] >= 2) {
                return true;
            }

        } else {

            // store FIRST occurrence only
            map[remainder] = i;
        }
    }

    return false;
};