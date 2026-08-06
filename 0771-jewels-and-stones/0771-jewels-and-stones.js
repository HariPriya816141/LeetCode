/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
     let map = {};

    for (let ch of jewels) {
        map[ch] = true;
    }

    let count = 0;

    for (let ch of stones) {
        if (map[ch]) {
            count++;
        }
    }

    return count;
};