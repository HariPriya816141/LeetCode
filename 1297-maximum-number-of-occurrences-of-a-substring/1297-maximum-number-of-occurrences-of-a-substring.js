/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
      let freq = new Map();
    let window = new Map();

    let left = 0;
    let answer = 0;

    for (let right = 0; right < s.length; right++) {

        window.set(s[right], (window.get(s[right]) || 0) + 1);

        // Maintain window of size minSize
        if (right - left + 1 > minSize) {

            let ch = s[left];

            window.set(ch, window.get(ch) - 1);

            if (window.get(ch) === 0) {
                window.delete(ch);
            }

            left++;
        }

        if (right - left + 1 === minSize && window.size <= maxLetters) {

            let sub = s.substring(left, right + 1);

            freq.set(sub, (freq.get(sub) || 0) + 1);

            answer = Math.max(answer, freq.get(sub));
        }
    }

    return answer;
};