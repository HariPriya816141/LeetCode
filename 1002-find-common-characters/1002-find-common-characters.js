/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
     // Frequency of first word
    let common = {};

    for (let ch of words[0]) {
        common[ch] = (common[ch] || 0) + 1;
    }

    // Compare with remaining words
    for (let i = 1; i < words.length; i++) {

        let current = {};

        for (let ch of words[i]) {
            current[ch] = (current[ch] || 0) + 1;
        }

        // Update minimum frequencies
        for (let ch in common) {
            common[ch] = Math.min(common[ch], current[ch] || 0);
        }
    }

    let result = [];

    // Build answer
    for (let ch in common) {

        for (let i = 0; i < common[ch]; i++) {
            result.push(ch);
        }
    }

    return result;
};