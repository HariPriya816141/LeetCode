/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    
    let map = {};
    let count = 0;

    for (let [a, b] of dominoes) {

        // Normalize
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }

        let key = a + "," + b;

        // Every previous identical domino forms a pair
        count += (map[key] || 0);

        // Update frequency
        map[key] = (map[key] || 0) + 1;
    }

    return count;
};