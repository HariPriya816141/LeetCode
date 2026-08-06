/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    let s1Map = {};
    let window = {};

    // Frequency of s1
    for (let ch of s1) {
        s1Map[ch] = (s1Map[ch] || 0) + 1;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        // Add new character
        window[s2[right]] = (window[s2[right]] || 0) + 1;

        // Window too large
        if (right - left + 1 > s1.length) {

            window[s2[left]]--;

            if (window[s2[left]] === 0) {
                delete window[s2[left]];
            }

            left++;
        }

        // Window size equals s1 length
        if (right - left + 1 === s1.length) {

            if (isEqual(window, s1Map)) {
                return true;
            }
        }
    }

    return false;
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
}