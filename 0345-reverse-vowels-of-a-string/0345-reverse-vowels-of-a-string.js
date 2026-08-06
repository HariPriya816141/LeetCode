/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
       let chars = s.split("");

    let vowels = new Set([
        'a','e','i','o','u',
        'A','E','I','O','U'
    ]);

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {

        while (left < right && !vowels.has(chars[left])) {
            left++;
        }

        while (left < right && !vowels.has(chars[right])) {
            right--;
        }

        let temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;

        left++;
        right--;
    }

    return chars.join("");
};