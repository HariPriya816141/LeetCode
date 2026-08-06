/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0
    let map = {}
    let maxLen = 0

    for (let right = 0; right < fruits.length; right++){

        let fruit = fruits[right]

        map[fruit] = (map[fruit] || 0) + 1

        while (Object.keys(map).length > 2){

            let leftFruit = fruits[left]

            map[leftFruit]--

            if (map[leftFruit] === 0){
                delete map[leftFruit]
            }

            left++
        }

        maxLen = Math.max(maxLen, right-left+1)
    }

    return maxLen
};