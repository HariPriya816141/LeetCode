/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
        let slow = 0

    for (let fast = 1; fast < arr.length; fast++){
        if (arr[slow] !== arr[fast]){
            slow++
            arr[slow] = arr[fast]
        }
    }
    
    return  slow+1
};