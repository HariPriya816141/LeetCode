/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    
    let left = 0;
    let sum = 0;
    let answer = 0;

    for (let right = 0; right < fruits.length; right++) {

        sum += fruits[right][1];

        while (left <= right) {

            let L = fruits[left][0];
            let R = fruits[right][0];

            let leftDist = Math.max(0, startPos - L);
            let rightDist = Math.max(0, R - startPos);

            let steps = Math.min(
                2 * leftDist + rightDist,
                leftDist + 2 * rightDist
            );

            if (steps <= k) break;

            sum -= fruits[left][1];
            left++;
        }

        answer = Math.max(answer, sum);
    }

    return answer;
};