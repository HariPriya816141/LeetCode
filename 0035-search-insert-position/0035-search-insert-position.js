/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(arr, k) {
        let left = 0, right = arr.length-1

    while (left <= right){
        let mid = Math.floor((left+right)/2)

        if (arr[mid] === k) return mid
        else if (arr[mid] < k) left = mid + 1
        else right = mid - 1
    }
    return left
};