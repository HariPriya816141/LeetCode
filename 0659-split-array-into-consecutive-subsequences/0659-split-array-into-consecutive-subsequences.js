/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {

    let freq = {};
    let need = {};

    // Count frequencies
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of nums) {

        // Already used
        if (freq[num] === 0) continue;

        // Extend an existing sequence
        if ((need[num] || 0) > 0) {

            need[num]--;
            need[num + 1] = (need[num + 1] || 0) + 1;

            freq[num]--;

        }

        // Start a new sequence
        else if (
            (freq[num + 1] || 0) > 0 &&
            (freq[num + 2] || 0) > 0
        ) {

            freq[num]--;
            freq[num + 1]--;
            freq[num + 2]--;

            need[num + 3] = (need[num + 3] || 0) + 1;

        }

        // Impossible
        else {
            return false;
        }
    }

    return true;
};