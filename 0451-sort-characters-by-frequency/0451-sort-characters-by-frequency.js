/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};

    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let arr = Object.entries(map);

    arr.sort((a, b) => b[1] - a[1]);

    let result = "";

    for (let [ch, freq] of arr) {
        for (let i = 0; i < freq; i++) {
            result += ch;
        }
    }

    return result;
};