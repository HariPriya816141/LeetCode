/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    function countTriplets(source, targetArray) {

        let total = 0;

        for (let num of source) {

            let target = num * num;

            let left = 0;
            let right = targetArray.length - 1;

            while (left < right) {

                let product = targetArray[left] * targetArray[right];

                if (product < target) {
                    left++;
                }
                else if (product > target) {
                    right--;
                }
                else {

                    if (targetArray[left] === targetArray[right]) {

                        let count = right - left + 1;
                        total += (count * (count - 1)) / 2;
                        break;
                    }

                    let leftCount = 1;
                    let rightCount = 1;

                    while (
                        left + 1 < right &&
                        targetArray[left] === targetArray[left + 1]
                    ) {
                        leftCount++;
                        left++;
                    }

                    while (
                        right - 1 > left &&
                        targetArray[right] === targetArray[right - 1]
                    ) {
                        rightCount++;
                        right--;
                    }

                    total += leftCount * rightCount;

                    left++;
                    right--;
                }
            }
        }

        return total;
    }

    return countTriplets(nums1, nums2) + countTriplets(nums2, nums1);
};