/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    
    let maxDeque = [];
    let minDeque = [];

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {

        // Maintain decreasing deque
        while (
            maxDeque.length > 0 &&
            nums[right] > maxDeque[maxDeque.length - 1]
        ) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);

        // Maintain increasing deque
        while (
            minDeque.length > 0 &&
            nums[right] < minDeque[minDeque.length - 1]
        ) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);

        // Shrink window
        while (maxDeque[0] - minDeque[0] > limit) {

            if (nums[left] === maxDeque[0]) {
                maxDeque.shift();
            }

            if (nums[left] === minDeque[0]) {
                minDeque.shift();
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};