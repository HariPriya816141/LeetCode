/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
      let map = {};

    // Count frequency
    for (let word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    let result = Object.keys(map);

    result.sort((a, b) => {

        // Higher frequency first
        if (map[a] !== map[b]) {
            return map[b] - map[a];
        }

        // Same frequency -> alphabetical order
        return a.localeCompare(b);
    });

    return result.slice(0, k);
};