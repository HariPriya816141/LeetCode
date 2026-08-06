/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
     let map = {};

    // Count frequencies
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let duplicate;
    let missing;

    // Find duplicate
    for (let num in map) {
        if (map[num] === 2) {
            duplicate = Number(num);
            break;
        }
    }

    // Find missing number
    for (let i = 1; i <= nums.length; i++) {
        if (!(i in map)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};