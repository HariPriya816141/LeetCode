/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
       let vowels = new Set(['a','e','i','o','u']);
    let result = 0;

    for (let i = 0; i < word.length; i++) {

        let freq = {};

        for (let j = i; j < word.length; j++) {

            if (!vowels.has(word[j])) break;

            freq[word[j]] = (freq[word[j]] || 0) + 1;

            if (Object.keys(freq).length === 5) {
                result++;
            }
        }
    }

    return result;

};