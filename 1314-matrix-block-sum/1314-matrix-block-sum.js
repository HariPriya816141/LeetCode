/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    
    let rows = mat.length;
    let cols = mat[0].length;

    let prefix = Array(rows + 1)
        .fill(0)
        .map(() => Array(cols + 1).fill(0));

    // Build prefix matrix
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {

            prefix[i][j] =
                mat[i - 1][j - 1]
                + prefix[i - 1][j]
                + prefix[i][j - 1]
                - prefix[i - 1][j - 1];
        }
    }

    let answer = Array(rows)
        .fill(0)
        .map(() => Array(cols).fill(0));

    // Compute answer for every cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            let r1 = Math.max(0, i - k);
            let c1 = Math.max(0, j - k);

            let r2 = Math.min(rows - 1, i + k);
            let c2 = Math.min(cols - 1, j + k);

            answer[i][j] =
                prefix[r2 + 1][c2 + 1]
                - prefix[r1][c2 + 1]
                - prefix[r2 + 1][c1]
                + prefix[r1][c1];
        }
    }

    return answer;
};