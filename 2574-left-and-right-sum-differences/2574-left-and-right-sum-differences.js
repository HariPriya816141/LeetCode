/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    let leftSum = 0;
    let answer = [];

    for (let i = 0; i < nums.length; i++) {

        let rightSum = totalSum - leftSum - nums[i];

        answer.push(Math.abs(leftSum - rightSum));

        leftSum += nums[i];
    }

    return answer;

};