/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
     let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {

        let ch1 = s[i];
        let ch2 = t[i];

        // Existing mapping must match
        if (ch1 in mapST) {
            if (mapST[ch1] !== ch2) {
                return false;
            }
        } else {
            mapST[ch1] = ch2;
        }

        // Reverse mapping must also match
        if (ch2 in mapTS) {
            if (mapTS[ch2] !== ch1) {
                return false;
            }
        } else {
            mapTS[ch2] = ch1;
        }
    }

    return true;
};