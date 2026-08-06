/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
     let map = {};

    // Store index of each restaurant in list1
    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;
    }

    let minSum = Infinity;
    let result = [];

    // Traverse list2
    for (let j = 0; j < list2.length; j++) {

        if (list2[j] in map) {

            let sum = map[list2[j]] + j;

            if (sum < minSum) {
                minSum = sum;
                result = [list2[j]];
            }
            else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};