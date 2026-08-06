/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
        function atMost(k) {
        let map = new Map();
        let left = 0;
        let count = 0;

        for (let right = 0; right < nums.length; right++) {

            map.set(nums[right], (map.get(nums[right]) || 0) + 1);

            while (map.size > k) {
                map.set(nums[left], map.get(nums[left]) - 1);

                if (map.get(nums[left]) === 0) {
                    map.delete(nums[left]);
                }

                left++;
            }

            count += right - left + 1;
        }

        return count;
    }

    return atMost(k) - atMost(k - 1);
};