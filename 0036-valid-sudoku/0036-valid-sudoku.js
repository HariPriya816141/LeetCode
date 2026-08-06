/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
     let rows = {};
    let cols = {};
    let boxes = {};

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {

            let value = board[r][c];

            if (value === ".") continue;

            let box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            let rowKey = `${r}-${value}`;
            let colKey = `${c}-${value}`;
            let boxKey = `${box}-${value}`;

            if (rows[rowKey] || cols[colKey] || boxes[boxKey]) {
                return false;
            }

            rows[rowKey] = true;
            cols[colKey] = true;
            boxes[boxKey] = true;
        }
    }

    return true;
};