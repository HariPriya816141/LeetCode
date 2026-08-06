/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    
    if (valueDiff < 0) return false;

    let buckets = new Map();
    let bucketSize = valueDiff + 1;

    function getBucketId(num) {
      return Math.floor(num / bucketSize);
    }

    for (let i = 0; i < nums.length; i++) {

        let bucketId = getBucketId(nums[i]);

        // Same bucket
        if (buckets.has(bucketId)) {
            return true;
        }

        // Previous bucket
        if (
            buckets.has(bucketId - 1) &&
            Math.abs(nums[i] - buckets.get(bucketId - 1)) <= valueDiff
        ) {
            return true;
        }

        // Next bucket
        if (
            buckets.has(bucketId + 1) &&
            Math.abs(nums[i] - buckets.get(bucketId + 1)) <= valueDiff
        ) {
            return true;
        }

        buckets.set(bucketId, nums[i]);

        // Maintain sliding window of size indexDiff
        if (i >= indexDiff) {
            let oldBucketId = getBucketId(nums[i - indexDiff]);
            buckets.delete(oldBucketId);
        }
    }

    return false;
};