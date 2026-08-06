/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
        let n = arr.length;

    // Find longest sorted prefix
    let left = 0;
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }

    // Already sorted
    if (left === n - 1) {
        return 0;
    }

    // Find longest sorted suffix
    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }

    // Remove prefix or suffix
    let answer = Math.min(n - left - 1, right);

    // Merge prefix and suffix
    let i = 0;
    let j = right;

    while (i <= left && j < n) {

        if (arr[i] <= arr[j]) {

            answer = Math.min(answer, j - i - 1);
            i++;

        } else {

            j++;
        }
    }

    return answer;
};