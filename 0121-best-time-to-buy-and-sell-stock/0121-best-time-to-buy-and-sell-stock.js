/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(pricesArr) {
        let minPrice = Infinity
    let maxProfit = 0

    for (let price of pricesArr){
        if (price < minPrice){
            minPrice = price
        }else {
            maxProfit = Math.max(maxProfit, price-minPrice)
        }
    }
    return maxProfit
};