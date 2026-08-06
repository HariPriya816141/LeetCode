/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
       if (!s || !words.length) return []

    const wordLen = words[0].length
    const totalWords = words.length
    const totalLen = totalWords * wordLen

    const wordMap = {}

    for (let word of words){
        wordMap[word] = (wordMap[word] || 0) + 1
    }

    const result = []

    for (let i = 0; i <= s.length-totalLen; i++){
        const seen = {}
        let j = 0

       while (j < totalWords){
         const start = i + j * wordLen

        const word = s.substring(start, start+wordLen)

        if (!wordMap[word]) break;

        seen[word] = (seen[word] || 0) + 1

        if (seen[word] > wordMap[word]) break;

        j++
       }

       if (j === totalWords) result.push(i)
    }
return result 
};