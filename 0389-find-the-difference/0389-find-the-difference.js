/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
      let map = {};

    // Count characters in s
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    // Remove characters using t
    for (let ch of t) {

        if (!(ch in map) || map[ch] === 0) {
            return ch;
        }

        map[ch]--;
    }
};