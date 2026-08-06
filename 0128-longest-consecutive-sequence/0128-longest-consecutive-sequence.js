/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let maxLen = 0;

    for (let num of set){
        if (!set.has(num-1)){
            let current = num
            let length = 1

            while (set.has(current+1)){
                current++
                length++
            }

            maxLen = Math.max(maxLen, length)
        }
    }
    return maxLen
};