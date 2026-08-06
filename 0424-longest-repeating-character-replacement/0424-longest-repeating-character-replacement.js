/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
        let left = 0
    let maxlen = 0
    let maxFreq = 0
    let map = {}

    for (let right = 0; right < s.length; right++){
        let ch = s[right]
        map[ch] = (map[ch] || 0) + 1

        maxFreq = Math.max(maxFreq, map[ch])

        while ((right-left+1) - maxFreq > k){
            let leftChar = s[left]
            map[leftChar]--
            left++
        }

      maxlen = Math.max(maxlen, right-left+1)
    }
    return maxlen
};