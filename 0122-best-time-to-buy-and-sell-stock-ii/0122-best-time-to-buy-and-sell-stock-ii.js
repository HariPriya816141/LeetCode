/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(pricesArr) {
        let profit = 0

    for (let i = 1; i < pricesArr.length; i++){
        if (pricesArr[i] > pricesArr[i-1]){
            profit += pricesArr[i] - pricesArr[i-1]
        }
    }
    return profit
};