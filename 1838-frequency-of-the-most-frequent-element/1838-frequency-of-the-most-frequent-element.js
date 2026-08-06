/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    
    nums.sort((a, b) => a - b);

    let left = 0;
    let sum = 0;
    let maxFreq = 1;

    for (let right = 0; right < nums.length; right++) {

        sum += nums[right];

        while ((right - left + 1) * nums[right] - sum > k) {
            sum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
};