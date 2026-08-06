/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {

    let seconds = 0;

    while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {

        // Keep the largest values at the front
        amount.sort((a, b) => b - a);

        // Fill two different types if possible
        if (amount[1] > 0) {
            amount[0]--;
            amount[1]--;
        }
        // Otherwise only one type is left
        else {
            amount[0]--;
        }

        seconds++;
    }

    return seconds;
};