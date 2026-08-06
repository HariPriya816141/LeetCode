/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
     let left = 0;
    let cost = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};