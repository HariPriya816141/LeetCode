/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
       let map = new Map();
    map.set(0, -1);

    let mask = 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'a') mask ^= 1 << 0;
        else if (s[i] === 'e') mask ^= 1 << 1;
        else if (s[i] === 'i') mask ^= 1 << 2;
        else if (s[i] === 'o') mask ^= 1 << 3;
        else if (s[i] === 'u') mask ^= 1 << 4;

        if (map.has(mask)) {
            answer = Math.max(answer, i - map.get(mask));
        } else {
            map.set(mask, i);
        }
    }

    return answer;
};