/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let left = 0, right = arr.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left <= right){
        if (arr[left] <= arr[right]){
            if (arr[left] >= leftMax){
                leftMax = arr[left];
            } else {
                water += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= rightMax){
                rightMax = arr[right];
            } else {
                water += rightMax - arr[right];
            }
            right--;
        }
    }

    return water;
};