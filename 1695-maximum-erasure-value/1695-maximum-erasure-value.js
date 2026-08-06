/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    
    let set = new Set();
    let left = 0;
    let sum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {

        while (set.has(nums[right])) {
            set.delete(nums[left]);
            sum -= nums[left];
            left++;
        }

        set.add(nums[right]);
        sum += nums[right];

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};