/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
      let map = {};

    // Count characters in magazine
    for (let ch of magazine) {
        map[ch] = (map[ch] || 0) + 1;
    }

    // Use characters for ransomNote
    for (let ch of ransomNote) {
        if (!(ch in map) || map[ch] === 0) {
            return false;
        }

        map[ch]--;
    }

    return true;
};