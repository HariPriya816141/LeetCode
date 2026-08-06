/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(arr, target) {
        arr.sort((a,b) => a-b)

    let closestSum = arr[0] + arr[1] + arr[2]

    for (let i = 0; i < arr.length-2; i++){
        let left = i+1
        let right = arr.length-1

        while (left < right){
            let sum = arr[i] + arr[left] + arr[right]

            if (Math.abs(sum-target) < Math.abs(closestSum-target)) closestSum = sum

            if (sum === target) return sum

            else if (sum < target) left++
            
            else right--
        }
    }
    return closestSum
};