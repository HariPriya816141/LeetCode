/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
      let map = {};
    let count = 0;

    for (let ch of sentence) {

        if (!(ch in map)) {
            map[ch] = true;
            count++;
        }
    }

    return count === 26;
};