/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    
    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }

    let need = totalSum % p;

    if (need === 0) {
        return 0;
    }

    let map = new Map();
    map.set(0, -1);

    let prefix = 0;
    let answer = nums.length;

    for (let i = 0; i < nums.length; i++) {

        prefix = (prefix + nums[i]) % p;

        let target = (prefix - need + p) % p;

        if (map.has(target)) {
            answer = Math.min(answer, i - map.get(target));
        }

        map.set(prefix, i);
    }

    return answer === nums.length ? -1 : answer;
};