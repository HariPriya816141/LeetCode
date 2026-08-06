/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let n = nums.length
    let total = nums.reduce((a,b) => a+b, 0)
    let target = total - x
    if (target < 0) return -1

    let left = 0
    let maxlen = -1
    let sum = 0

    for (let right = 0; right < n; right++){
        sum += nums[right]

        while (sum > target){
            sum -= nums[left]
            left++
        }

        if (sum === target){
            maxlen = Math.max(maxlen, right - left + 1)
        }
    }
    return maxlen === -1 ? -1 : n - maxlen
};