/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
       let i = 0, n = s.length

    //ignore leading white spaces
    while (i < n && s[i] === " ") i++

    //handle sign
    let sign = 1

    if (s[i] === "-"){
        sign = -1
        i++
    }else if (s[i] === "+"){
        i++
    }

    let num = 0

    while (i < n && s[i] >= "0" && s[i] <= "9"){
        num = num * 10 + (s[i] - "0")
        i++
    }

    num *= sign

    //32-bit integer
    let min = -(2**31)
    let max = (2**31)-1

    if (num < min) return min
    if (num > max) return max

    return num 
};