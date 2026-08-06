/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
      if (p.length > s.length) return [];

    let pMap = {};
    let window = {};

    // Frequency of p
    for (let ch of p) {
        pMap[ch] = (pMap[ch] || 0) + 1;
    }

    let result = [];
    let left = 0;

    for (let right = 0; right < s.length; right++) {

        // Add new character
        window[s[right]] = (window[s[right]] || 0) + 1;

        // Window too large
        if (right - left + 1 > p.length) {

            window[s[left]]--;

            if (window[s[left]] === 0) {
                delete window[s[left]];
            }

            left++;
        }

        // Compare maps
        if (right - left + 1 === p.length) {

            if (isEqual(window, pMap)) {
                result.push(left);
            }
        }
    }

    return result;
};

function isEqual(map1, map2) {

    let keys1 = Object.keys(map1);
    let keys2 = Object.keys(map2);

    if (keys1.length !== keys2.length)
        return false;

    for (let key of keys1) {

        if (map1[key] !== map2[key])
            return false;
    }

    return true;
};