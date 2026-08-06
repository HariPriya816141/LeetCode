/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
      // Frequency of chars
    let charsMap = {};

    for (let ch of chars) {
        charsMap[ch] = (charsMap[ch] || 0) + 1;
    }

    let total = 0;

    for (let word of words) {

        let wordMap = {};

        // Frequency of current word
        for (let ch of word) {
            wordMap[ch] = (wordMap[ch] || 0) + 1;
        }

        let good = true;

        // Compare frequencies
        for (let ch in wordMap) {

            if ((charsMap[ch] || 0) < wordMap[ch]) {
                good = false;
                break;
            }
        }

        if (good) {
            total += word.length;
        }
    }

    return total;
};