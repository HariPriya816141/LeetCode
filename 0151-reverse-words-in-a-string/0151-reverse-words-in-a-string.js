/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
       let result = "";
    let i = s.length - 1;

    while (i >= 0) {

        // Skip spaces
        while (i >= 0 && s[i] === " ") {
            i--;
        }

        if (i < 0) {
            break;
        }

        let j = i;

        // Find the beginning of the word
        while (j >= 0 && s[j] !== " ") {
            j--;
        }

        // Add space between words
        if (result.length > 0) {
            result += " ";
        }

        result += s.substring(j + 1, i + 1);

        i = j;
    }

    return result;
};