/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
     let map = {};

    // Store rank of each character
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }

    // Compare adjacent words
    for (let i = 0; i < words.length - 1; i++) {

        let word1 = words[i];
        let word2 = words[i + 1];

        let minLength = Math.min(word1.length, word2.length);
        let foundDifference = false;

        for (let j = 0; j < minLength; j++) {

            if (word1[j] !== word2[j]) {

                if (map[word1[j]] > map[word2[j]]) {
                    return false;
                }

                foundDifference = true;
                break;
            }
        }

        // Prefix case
        if (!foundDifference && word1.length > word2.length) {
            return false;
        }
    }

    return true;
};