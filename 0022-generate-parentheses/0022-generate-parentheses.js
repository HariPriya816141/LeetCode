/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
        let result = []

    function backTrack(current, open, close){
        if (current.length === n * 2){  //4
            result.push(current)
            return
        }

        if (open < n){
            backTrack(current + '(', open + 1, close)
        }

        if (close < open){
            backTrack(current + ')', open, close + 1)
        }
    }

    backTrack("", 0, 0)

    return result
};