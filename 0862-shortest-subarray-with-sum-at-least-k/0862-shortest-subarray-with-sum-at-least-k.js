/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
       let n = nums.length;

    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let deque = [];
    let answer = Infinity;

    for (let i = 0; i <= n; i++) {

        // Found a valid subarray
        while (
            deque.length &&
            prefix[i] - prefix[deque[0]] >= k
        ) {
            answer = Math.min(answer, i - deque.shift());
        }

        // Maintain increasing prefix sums
        while (
            deque.length &&
            prefix[i] <= prefix[deque[deque.length - 1]]
        ) {
            deque.pop();
        }

        deque.push(i);
    }

    return answer === Infinity ? -1 : answer;
};