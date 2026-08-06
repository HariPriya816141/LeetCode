/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
        function isSubsequence(word) {

        let i = 0;
        let j = 0;

        while (i < s.length && j < word.length) {

            if (s[i] === word[j]) {
                j++;
            }

            i++;
        }

        return j === word.length;
    }

    let answer = "";

    for (let word of dictionary) {

        if (isSubsequence(word)) {

            if (
                word.length > answer.length ||
                (word.length === answer.length && word < answer)
            ) {
                answer = word;
            }
        }
    }

    return answer;
};