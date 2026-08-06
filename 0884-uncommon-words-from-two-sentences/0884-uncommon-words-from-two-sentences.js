/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
       let map = {};

    // Count words from first sentence
    for (let word of s1.split(" ")) {
        map[word] = (map[word] || 0) + 1;
    }

    // Count words from second sentence
    for (let word of s2.split(" ")) {
        map[word] = (map[word] || 0) + 1;
    }

    let result = [];

    // Collect words appearing exactly once
    for (let word in map) {
        if (map[word] === 1) {
            result.push(word);
        }
    }

    return result; 
};