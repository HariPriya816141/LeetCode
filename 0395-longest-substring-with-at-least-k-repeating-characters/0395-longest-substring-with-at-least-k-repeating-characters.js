/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
      let answer = 0;

    // Try every possible number of unique characters
    for (let targetUnique = 1; targetUnique <= 26; targetUnique++) {

        let freq = new Array(26).fill(0);

        let left = 0;
        let right = 0;

        let unique = 0;
        let atleastK = 0;

        while (right < s.length) {

            let idx = s.charCodeAt(right) - 97;

            if (freq[idx] === 0) {
                unique++;
            }

            freq[idx]++;

            if (freq[idx] === k) {
                atleastK++;
            }

            right++;

            while (unique > targetUnique) {

                let leftIdx = s.charCodeAt(left) - 97;

                if (freq[leftIdx] === k) {
                    atleastK--;
                }

                freq[leftIdx]--;

                if (freq[leftIdx] === 0) {
                    unique--;
                }

                left++;
            }

            if (unique === targetUnique && unique === atleastK) {
                answer = Math.max(answer, right - left);
            }
        }
    }

    return answer;
};