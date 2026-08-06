/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    
    let maxLength = 0;
    let start = 0;
    let distinct = 1;

    for (let i = 1; i < word.length; i++) {

        if (word[i] < word[i - 1]) {
            // Order broken, start a new substring
            start = i;
            distinct = 1;
        }
        else if (word[i] > word[i - 1]) {
            // New vowel encountered
            distinct++;
        }

        if (distinct === 5) {
            maxLength = Math.max(maxLength, i - start + 1);
        }
    }

    return maxLength;
};