/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
        let seen = new Set()
    for (let num of arr){
        if (seen.has(num)){
            return true
        }
        seen.add(num)
    }
    return false
};