/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
      let map = {};

    // Store sums of nums1 and nums2
    for (let num1 of nums1) {
        for (let num2 of nums2) {

            let sum = num1 + num2;

            map[sum] = (map[sum] || 0) + 1;
        }
    }

    let count = 0;

    // Find complementary sums
    for (let num3 of nums3) {
        for (let num4 of nums4) {

            let sum = num3 + num4;

            if (-sum in map) {
                count += map[-sum];
            }
        }
    }

    return count;
};