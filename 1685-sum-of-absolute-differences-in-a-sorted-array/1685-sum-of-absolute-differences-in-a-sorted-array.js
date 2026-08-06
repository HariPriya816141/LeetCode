/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let n = nums.length;

    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    let answer = [];

    for (let i = 0; i < n; i++) {

        let left = nums[i] * i - leftSum;

        let right = (totalSum - leftSum - nums[i]) - nums[i] * (n - i - 1);

        answer.push(left + right);

        leftSum += nums[i];
    }

    return answer;
};