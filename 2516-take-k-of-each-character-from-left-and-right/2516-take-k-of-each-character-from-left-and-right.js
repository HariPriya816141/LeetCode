/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    
    if (k === 0) return 0;

    let count = {
        'a': 0,
        'b': 0,
        'c': 0
    };

    // Count total characters
    for (let ch of s) {
        count[ch]++;
    }

    // Impossible case
    if (count['a'] < k || count['b'] < k || count['c'] < k) {
        return -1;
    }

    let left = 0;
    let maxWindow = 0;

    for (let right = 0; right < s.length; right++) {

        count[s[right]]--;

        while (
            count['a'] < k ||
            count['b'] < k ||
            count['c'] < k
        ) {
            count[s[left]]++;
            left++;
        }

        maxWindow = Math.max(maxWindow, right - left + 1);
    }

    return s.length - maxWindow;
};