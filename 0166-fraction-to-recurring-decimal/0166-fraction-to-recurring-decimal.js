/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
      // Exact division
    if (numerator % denominator === 0) {
        return String(numerator / denominator);
    }

    let ans = "";

    // Handle sign
    if ((numerator < 0) !== (denominator < 0)) {
        ans += "-";
    }

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    // Integer part
    ans += Math.floor(numerator / denominator);

    let remainder = numerator % denominator;

    if (remainder === 0) {
        return ans;
    }

    ans += ".";

    let map = {};

    while (remainder !== 0) {

        // Repeating remainder
        if (remainder in map) {

            let index = map[remainder];

            ans =
                ans.slice(0, index) +
                "(" +
                ans.slice(index) +
                ")";

            break;
        }

        // Store current remainder position
        map[remainder] = ans.length;

        remainder *= 10;

        ans += Math.floor(remainder / denominator);

        remainder %= denominator;
    }

    return ans;
};