var wordPattern = function(pattern, s) {

    let words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    let mapPW = {};
    let mapWP = {};

    for (let i = 0; i < pattern.length; i++) {

        let ch = pattern[i];
        let word = words[i];

        if (Object.hasOwn(mapPW, ch)) {
            if (mapPW[ch] !== word) return false;
        } else {
            mapPW[ch] = word;
        }

        if (Object.hasOwn(mapWP, word)) {
            if (mapWP[word] !== ch) return false;
        } else {
            mapWP[word] = ch;
        }
    }

    return true;
};