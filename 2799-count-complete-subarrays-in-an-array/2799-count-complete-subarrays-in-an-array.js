/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let totalDistinct = new Set(nums).size;

    return atMost(nums, totalDistinct) - atMost(nums, totalDistinct - 1);
};

var atMost = function(nums, k){
    let left = 0;
    let count = 0;
    let map = {};

    for (let right = 0; right < nums.length; right++){

        let num = nums[right];
        map[num] = (map[num] || 0) + 1;

        // shrink if distinct > k
        while (Object.keys(map).length > k){
            let leftNum = nums[left];
            map[leftNum]--;

            if (map[leftNum] === 0){
                delete map[leftNum];
            }

            left++;
        }

        // count subarrays
        count += (right - left + 1);
    }

    return count;
}