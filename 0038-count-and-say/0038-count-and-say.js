/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
       let result = "1";

    for (let i = 2; i <= n; i++) {

        let current = "";
        let count = 1;

        for (let j = 0; j < result.length; j++) {

            if (j + 1 < result.length && result[j] === result[j + 1]) {
                count++;
            } else {
                current += count + result[j];
                count = 1;
            }
        }

        result = current;
    }

    return result;
};