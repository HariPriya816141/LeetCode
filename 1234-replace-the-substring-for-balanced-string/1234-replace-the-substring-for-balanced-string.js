/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {

    let n = s.length;
    let required = n / 4;

    let freq = {
        'Q': 0,
        'W': 0,
        'E': 0,
        'R': 0
    };

    for (let ch of s) {
        freq[ch]++;
    }

    if (
        freq['Q'] === required &&
        freq['W'] === required &&
        freq['E'] === required &&
        freq['R'] === required
    ) {
        return 0;
    }

    let left = 0;
    let answer = n;

    for (let right = 0; right < n; right++) {

        freq[s[right]]--;

        while (
            freq['Q'] <= required &&
            freq['W'] <= required &&
            freq['E'] <= required &&
            freq['R'] <= required
        ) {

            answer = Math.min(answer, right - left + 1);

            freq[s[left]]++;
            left++;
        }
    }

    return answer;
};