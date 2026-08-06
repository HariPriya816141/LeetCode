/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    tokens.sort((a, b) => a - b);

    let left = 0;
    let right = tokens.length - 1;

    let score = 0;
    let maxScore = 0;

    while (left <= right) {

        // Play smallest token face-up
        if (power >= tokens[left]) {

            power -= tokens[left];
            score++;
            maxScore = Math.max(maxScore, score);
            left++;

        }
        // Play largest token face-down
        else if (score > 0) {

            power += tokens[right];
            score--;
            right--;

        }
        // Cannot make any move
        else {
            break;
        }
    }

    return maxScore;
};