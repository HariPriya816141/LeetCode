/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
       let morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",
        ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-","-.--","--.."
    ];

    let set = new Set();

    for (let word of words) {

        let transform = "";

        for (let ch of word) {

            let index = ch.charCodeAt(0) - 97;

            transform += morse[index];
        }

        set.add(transform);
    }

    return set.size;
 
};