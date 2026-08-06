/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
      let freq = {
        'a': 0,
        'b': 0,
        'c': 0
    };

    let left = 0;
    let count = 0;
    let n = s.length;

    for (let right = 0; right < n; right++) {

        freq[s[right]]++;

        while (
            freq['a'] > 0 &&
            freq['b'] > 0 &&
            freq['c'] > 0
        ) {

            count += n - right;

            freq[s[left]]--;
            left++;
        }
    }

    return count;
};