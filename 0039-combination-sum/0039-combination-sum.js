/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
      let result = []

    function backTrack(start, remaining, path){
        if (remaining === 0){
            result.push([...path])
            return
        }

        if (remaining < 0){
            return
        }

        for (let i = start; i < candidates.length; i++){
            path.push(candidates[i])
            backTrack(i, remaining-candidates[i], path)
            path.pop()
        }
    }
    backTrack(0, target, [])
    return result  
};