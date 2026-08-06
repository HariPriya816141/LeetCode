/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(arr) {
        let n = arr.length
    let result = new Array(n).fill(1)
    
     let prefix = 1
     for (let i = 0; i < n; i++){
        result[i] = prefix
        prefix = prefix * arr[i]
     }

     let suffix = 1
     for (let i = n-1; i >= 0; i--){
        result[i] = suffix * result[i]
        suffix = suffix * arr[i]
     }
     return result
};