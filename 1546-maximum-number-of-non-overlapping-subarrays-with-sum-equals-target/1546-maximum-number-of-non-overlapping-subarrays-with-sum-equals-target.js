/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
        let set = new Set();
    set.add(0);

    let prefix = 0;
    let answer = 0;

    for (let num of nums) {

        prefix += num;

        if (set.has(prefix - target)) {

            answer++;

            // Restart for the next non-overlapping subarray
            prefix = 0;
            set.clear();
            set.add(0);

        } else {

            set.add(prefix);
        }
    }

    return answer;
};