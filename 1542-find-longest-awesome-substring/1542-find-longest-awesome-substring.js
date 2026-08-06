/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function(s) {
     let map = new Map();
        map.set(0, -1);

    let mask = 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {

        let digit = Number(s[i]);

        mask ^= (1 << digit);

        // All even counts
        if (map.has(mask)) {
            answer = Math.max(answer, i - map.get(mask));
        }

        // Exactly one odd count
        for (let d = 0; d < 10; d++) {

            let candidate = mask ^ (1 << d);

            if (map.has(candidate)) {
                answer = Math.max(answer, i - map.get(candidate));
            }
        }

        if (!map.has(mask)) {
            map.set(mask, i);
        }
    }

    return answer;
};