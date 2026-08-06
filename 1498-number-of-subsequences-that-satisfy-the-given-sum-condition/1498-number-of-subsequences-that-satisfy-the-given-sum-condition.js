/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1000000007;

    nums.sort((a, b) => a - b);

    let n = nums.length;

    let pow = new Array(n);
    pow[0] = 1;

    for (let i = 1; i < n; i++) {
        pow[i] = (pow[i - 1] * 2) % MOD;
    }

    let left = 0;
    let right = n - 1;
    let answer = 0;

    while (left <= right) {

        if (nums[left] + nums[right] <= target) {

            answer = (answer + pow[right - left]) % MOD;
            left++;

        } else {

            right--;
        }
    }

    return answer;
};