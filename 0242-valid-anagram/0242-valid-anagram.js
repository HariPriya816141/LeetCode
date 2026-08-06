/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      if (s.length !== t.length) return false;

    let map = {};

    // Count characters from s
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    // Remove characters using t
    for (let ch of t) {
        if (!(ch in map) || map[ch] === 0) {
            return false;
        }

        map[ch]--;
    }

    return true;
};