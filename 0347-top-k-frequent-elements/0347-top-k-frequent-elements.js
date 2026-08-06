/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
let map = {};

    // Count frequency
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Buckets: index = frequency
    let bucket = Array(nums.length + 1)
        .fill(null)
        .map(() => []);

    // Place numbers into their frequency bucket
    for (let key in map) {
        bucket[map[key]].push(Number(key));
    }

    let result = [];

    // Traverse buckets from highest frequency
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (let num of bucket[i]) {
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }

    return result;

    
};