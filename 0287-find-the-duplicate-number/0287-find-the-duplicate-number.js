/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
        let map = {}

    for (let num of nums){
        map[num] = (map[num] || 0) + 1
    }

    for (let num of nums){
        if (map[num] > 1){
            return num;
        }
    }
};