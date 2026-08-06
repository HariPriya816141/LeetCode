/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let chars = s.split("");

    let left = 0;
    let right = chars.length - 1;

    while (left < right) {

        while (
            left < right &&
            !(
                (chars[left] >= 'a' && chars[left] <= 'z') ||
                (chars[left] >= 'A' && chars[left] <= 'Z')
            )
        ) {
            left++;
        }

        while (
            left < right &&
            !(
                (chars[right] >= 'a' && chars[right] <= 'z') ||
                (chars[right] >= 'A' && chars[right] <= 'Z')
            )
        ) {
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