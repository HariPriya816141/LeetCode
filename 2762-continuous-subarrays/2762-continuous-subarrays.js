/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    
    let maxDeque = [];
    let minDeque = [];

    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        // Maintain decreasing deque (maximum)
        while (
            maxDeque.length > 0 &&
            nums[right] > maxDeque[maxDeque.length - 1]
        ) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);

        // Maintain increasing deque (minimum)
        while (
            minDeque.length > 0 &&
            nums[right] < minDeque[minDeque.length - 1]
        ) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);

        // Shrink window if invalid
        while (maxDeque[0] - minDeque[0] > 2) {

            if (nums[left] === maxDeque[0]) {
                maxDeque.shift();
            }

            if (nums[left] === minDeque[0]) {
                minDeque.shift();
            }

            left++;
        }

        count += right - left + 1;
    }

    return count;
};