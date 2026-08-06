/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
        function longest(ch) {

        let left = 0;
        let flips = 0;
        let maxLength = 0;

        for (let right = 0; right < answerKey.length; right++) {

            if (answerKey[right] !== ch) {
                flips++;
            }

            while (flips > k) {

                if (answerKey[left] !== ch) {
                    flips--;
                }

                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }

    return Math.max(longest('T'), longest('F'));
};