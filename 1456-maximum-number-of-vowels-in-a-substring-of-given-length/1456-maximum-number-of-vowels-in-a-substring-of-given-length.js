/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }

    let maxCount = count;

    // Slide the window
    for (let i = k; i < s.length; i++) {

        // Remove left character
        if (vowels.has(s[i - k])) {
            count--;
        }

        // Add right character
        if (vowels.has(s[i])) {
            count++;
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};