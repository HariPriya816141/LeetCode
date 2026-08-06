/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let map = {}
    let maxLength = -1

    for (let i = 0; i < s.length; i++){
        if (!(s[i] in map)){
            map[s[i]] = i //store the first occurence
        }else{
            maxLength = Math.max(maxLength, i-map[s[i]]-1)
        }
    }
    return maxLength
};