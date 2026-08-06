/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
      let n = nums.length;

    // Sum of every window of size k
    let windowSum = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        if (i >= k) {
            sum -= nums[i - k];
        }

        if (i >= k - 1) {
            windowSum.push(sum);
        }
    }

    let m = windowSum.length;

    // left[i] = index of max window from 0...i
    let left = new Array(m);
    let best = 0;

    for (let i = 0; i < m; i++) {
        if (windowSum[i] > windowSum[best]) {
            best = i;
        }
        left[i] = best;
    }

    // right[i] = index of max window from i...end
    let right = new Array(m);
    best = m - 1;

    for (let i = m - 1; i >= 0; i--) {

        // >= keeps lexicographically smaller answer
        if (windowSum[i] >= windowSum[best]) {
            best = i;
        }

        right[i] = best;
    }

    let answer = [];
    let maxTotal = 0;

    // Middle window
    for (let mid = k; mid < m - k; mid++) {

        let l = left[mid - k];
        let r = right[mid + k];

        let total =
            windowSum[l] +
            windowSum[mid] +
            windowSum[r];

        if (total > maxTotal) {
            maxTotal = total;
            answer = [l, mid, r];
        }
    }

    return answer;
};