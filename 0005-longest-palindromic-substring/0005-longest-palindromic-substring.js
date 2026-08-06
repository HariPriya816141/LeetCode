/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
        if (s.length < 2) return s

    let start = 0
    let maxLength = 1

    function expand(left, right){
        while (left >= 0 && right < s.length && s[left] === s[right]){
            left--
            right++
        }

        let length = right - left - 1

        if (length > maxLength){
            maxLength = length
            start = left + 1
        }
    }

    for (let i = 0; i < s.length; i++){
        expand(i, i)
        expand(i, i+1)
    }

    return s.substring(start, start + maxLength)
};