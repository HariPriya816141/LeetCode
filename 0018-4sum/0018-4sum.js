/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(arr, target) {
        arr.sort((a,b) => a-b)
    let result = []
    let n = arr.length

    for (let i = 0; i < n-3; i++){
        if (i > 0 && arr[i] === arr[i-1]) continue

        for (let j = i+1; j < n-2; j++){
            if (j > i+1 && arr[j] === arr[j-1]) continue

            let left = j+1
            let right = n-1

            while (left < right){
                let sum = arr[i] + arr[j] + arr[left] + arr[right]

                if (sum === target){
                    result.push([arr[i], arr[j], arr[left], arr[right]])

                    left++
                    right--

                    while (left < right && arr[left] === arr[left-1]) left++
                    while (left < right && arr[right] === arr[right+1]) right--
                } else if (sum < target){
                    left++
                }else{
                    right--
                }
            }
        }
    }
    return result
};