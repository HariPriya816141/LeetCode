/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
     let freq = {};

    // Count normalized remainders
    for (let num of arr) {

        let rem = ((num % k) + k) % k;

        freq[rem] = (freq[rem] || 0) + 1;
    }

    // Remainder 0 must appear even number of times
    if ((freq[0] || 0) % 2 !== 0) {
        return false;
    }

    // Check all remainder pairs
    for (let rem in freq) {

        rem = Number(rem);

        // Skip remainder 0
        if (rem === 0) continue;

        // Special case when rem = k/2
        if (2 * rem === k) {
            if ((freq[rem] || 0) % 2 !== 0)
                return false;
        } else {
            if ((freq[rem] || 0) !== (freq[k - rem] || 0))
                return false;
        }
    }

    return true;
};