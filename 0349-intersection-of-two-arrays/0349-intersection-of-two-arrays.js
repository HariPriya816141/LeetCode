/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setA = new Set(nums1)
    let result = new Set()

    for (let num of nums2){
        if (setA.has(num)){
            result.add(num)
        }
    }
    return [...result]
};