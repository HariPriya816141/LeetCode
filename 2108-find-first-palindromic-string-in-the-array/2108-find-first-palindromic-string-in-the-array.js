/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
       function isPalindrome(word) {

        let left = 0;
        let right = word.length - 1;

        while (left < right) {

            if (word[left] !== word[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    for (let word of words) {

        if (isPalindrome(word)) {
            return word;
        }
    }

    return "";
};