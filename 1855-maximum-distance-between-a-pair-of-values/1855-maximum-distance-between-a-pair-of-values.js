/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
        let i = 0;
    let j = 0;
    let answer = 0;

    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] <= nums2[j]) {

            answer = Math.max(answer, j - i);
            j++;

        } else {

            i++;

            if (i > j) {
                j = i;
            }
        }
    }

    return answer;
};