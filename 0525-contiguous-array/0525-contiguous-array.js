/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
      let map = {};

    // Prefix sum 0 before array starts
    map[0] = -1;

    let prefix = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {

        // Convert 0 to -1
        if (nums[i] === 0)
            prefix--;
        else
            prefix++;

        if (prefix in map) {

            maxLength = Math.max(
                maxLength,
                i - map[prefix]
            );

        } else {

            // Store first occurrence only
            map[prefix] = i;
        }
    }

    return maxLength;
};