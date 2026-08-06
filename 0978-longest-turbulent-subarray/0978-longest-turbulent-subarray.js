/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
      let left = 0;
    let maxLength = 1;

    for (let right = 1; right < arr.length; right++) {

        let cmp = Math.sign(arr[right] - arr[right - 1]);

        if (cmp === 0) {
            left = right;
        }
        else if (
            right === arr.length - 1 ||
            cmp * Math.sign(arr[right + 1] - arr[right]) !== -1
        ) {
            maxLength = Math.max(maxLength, right - left + 1);
            left = right;
        }
    }

    return maxLength;
};