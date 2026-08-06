/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
      let map = {};

    // Count frequencies
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    let ans = -1;

    // Find largest lucky number
    for (let num in map) {

        if (Number(num) === map[num]) {
            ans = Math.max(ans, Number(num));
        }
    }

    return ans;
};