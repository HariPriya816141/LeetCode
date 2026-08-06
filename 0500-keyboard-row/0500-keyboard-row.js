/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    
    let row1 = new Set("qwertyuiop");
    let row2 = new Set("asdfghjkl");
    let row3 = new Set("zxcvbnm");

    let result = [];

    for (let word of words) {

        let lower = word.toLowerCase();

        let row;

        if (row1.has(lower[0])) {
            row = row1;
        } else if (row2.has(lower[0])) {
            row = row2;
        } else {
            row = row3;
        }

        let valid = true;

        for (let ch of lower) {
            if (!row.has(ch)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            result.push(word);
        }
    }

    return result;
};