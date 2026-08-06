/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
      let map = {};

    // Count frequency
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    for (let ch in map) {

        if (map[ch] % 2 === 0) {
            length += map[ch];
        } else {
            length += map[ch] - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length++;
    }

    return length;
};