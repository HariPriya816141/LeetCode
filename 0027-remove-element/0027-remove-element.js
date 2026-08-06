/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, k) {
        let slow = 0

    for (let fast = 0; fast < arr.length; fast++){
        if (arr[fast] !== k){
            arr[slow] = arr[fast]
            slow++
        }
    }
    
    return slow
};