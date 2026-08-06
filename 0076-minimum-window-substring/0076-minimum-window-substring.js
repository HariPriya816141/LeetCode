/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, p) {
    let map = {};

    for (let ch of p) {
        map[ch] = (map[ch] || 0) + 1;
    }

    let left = 0;
    let minLen = Infinity;
    let matched = 0;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        if (map[ch] !== undefined) {
            map[ch]--;

            if (map[ch] >= 0) {
                matched++;
            }
        }

        while (matched === p.length) {

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];

            if (map[leftChar] !== undefined) {
                map[leftChar]++;

                if (map[leftChar] > 0) {
                    matched--;
                }
            }

            left++; // <-- outside the if
        }
    }

    return minLen === Infinity
        ? ""
        : s.slice(start, start + minLen);
};