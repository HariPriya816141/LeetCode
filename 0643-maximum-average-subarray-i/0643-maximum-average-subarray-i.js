/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
     let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i];         // Add new element
        windowSum -= nums[i - k];     // Remove leftmost element

        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }

    return maxSum / k;
};