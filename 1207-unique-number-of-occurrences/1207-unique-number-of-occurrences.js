/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
       let map = {};

    // Count frequency
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    let set = new Set();

    // Check frequencies
    for (let num in map) {

        if (set.has(map[num])) {
            return false;
        }

        set.add(map[num]);
    }

    return true;
};