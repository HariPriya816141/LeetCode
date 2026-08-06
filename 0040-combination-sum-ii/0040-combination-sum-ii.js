/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let result = [];

    function backTrack(start, remaining, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        if (remaining < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates at the same level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            path.push(candidates[i]);

            backTrack(i + 1, remaining - candidates[i], path);

            path.pop();
        }
    }

    backTrack(0, target, []);

    return result;
};