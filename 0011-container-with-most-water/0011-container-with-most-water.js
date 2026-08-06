/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
        let left = 0, right = arr.length-1, maxWater = 0

    while (left < right){
        let height = Math.min(arr[left], arr[right])
        let width = right - left
        let area = height * width

        maxWater = Math.max(maxWater, area)

        if (arr[left] < arr[right]){
            left++
        }else{
            right--
        }
    }
    return maxWater
};