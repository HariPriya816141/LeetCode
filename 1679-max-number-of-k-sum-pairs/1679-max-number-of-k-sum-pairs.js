/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
      let map = {};
    let count = 0;

    for (let num of nums) {
        let complement = k - num;

        // If complement is available, make a pair
        if (map[complement] > 0) {
            count++;
            map[complement]--;
        } else {
            // Otherwise, store current number
            map[num] = (map[num] || 0) + 1;
        }
    }

    return count;
};