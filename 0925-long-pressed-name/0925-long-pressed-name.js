/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
     let i = 0;
    let j = 0;

    while (i < name.length && j < typed.length) {

        if (name[i] === typed[j]) {
            i++;
            j++;
        }
        else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        }
        else {
            return false;
        }
    }

    // All characters in name should be matched
    if (i !== name.length) {
        return false;
    }

    // Remaining characters in typed must be long presses
    while (j < typed.length) {

        if (typed[j] !== typed[j - 1]) {
            return false;
        }

        j++;
    }

    return true;
};