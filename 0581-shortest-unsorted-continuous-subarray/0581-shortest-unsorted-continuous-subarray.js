/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
        let n = nums.length;

    let maxSeen = -Infinity;
    let minSeen = Infinity;

    let left = -1;
    let right = -1;

    // Find right boundary
    for (let i = 0; i < n; i++) {

        maxSeen = Math.max(maxSeen, nums[i]);

        if (nums[i] < maxSeen) {
            right = i;
        }
    }

    // Already sorted
    if (right === -1) {
        return 0;
    }

    // Find left boundary
    for (let i = n - 1; i >= 0; i--) {

        minSeen = Math.min(minSeen, nums[i]);

        if (nums[i] > minSeen) {
            left = i;
        }
    }

    return right - left + 1;
};