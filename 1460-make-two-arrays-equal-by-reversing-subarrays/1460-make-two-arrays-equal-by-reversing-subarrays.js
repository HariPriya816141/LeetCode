/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
        if (target.length !== arr.length) return false;

    let mapA = new Map()

    for (let num of target){
        mapA.set(num, (mapA.get(num) || 0) + 1)
    }

    for (let num of arr){
        if (!mapA.get(num)){
            return false;
        }
        mapA.set(num, mapA.get(num)-1)
    }
    return true;
};