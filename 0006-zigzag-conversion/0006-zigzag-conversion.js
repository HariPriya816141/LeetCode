/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        // Edge case
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create rows
    let rows = new Array(numRows).fill("");

    let currentRow = 0;

    // Direction tracker
    let goingDown = false;

    for (let char of s) {

        rows[currentRow] += char;

        // Change direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move row
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows
    return rows.join("");
};