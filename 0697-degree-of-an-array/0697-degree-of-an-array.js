/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
     let freq = {};
    let first = {};
    let last = {};

    // Store frequency, first index and last index
    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];

        freq[num] = (freq[num] || 0) + 1;

        if (!(num in first)) {
            first[num] = i;
        }

        last[num] = i;
    }

    // Find degree
    let degree = 0;

    for (let num in freq) {
        degree = Math.max(degree, freq[num]);
    }

    // Find minimum length
    let minLength = nums.length;

    for (let num in freq) {

        if (freq[num] === degree) {

            minLength = Math.min(
                minLength,
                last[num] - first[num] + 1
            );
        }
    }

    return minLength;
};