/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    
    let rows = matrix.length;
    let cols = matrix[0].length;

    let answer = 0;

    for (let top = 0; top < rows; top++) {

        let colSum = new Array(cols).fill(0);

        for (let bottom = top; bottom < rows; bottom++) {

            for (let c = 0; c < cols; c++) {
                colSum[c] += matrix[bottom][c];
            }

            let map = new Map();
            map.set(0, 1);

            let prefix = 0;

            for (let num of colSum) {

                prefix += num;

                if (map.has(prefix - target)) {
                    answer += map.get(prefix - target);
                }

                map.set(prefix, (map.get(prefix) || 0) + 1);
            }
        }
    }

    return answer;
};