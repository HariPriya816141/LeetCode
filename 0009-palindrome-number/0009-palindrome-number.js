/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
        if (num < 0) return false

    let original = num
    let reversed = 0

    while (num !== 0){
        let lastDigit = num % 10

        num = Math.trunc(num / 10)

        reversed = reversed * 10 + lastDigit
    }

    return original === reversed
};