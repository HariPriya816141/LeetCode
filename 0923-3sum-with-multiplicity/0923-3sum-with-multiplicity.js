/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
       const MOD = 1000000007;

    arr.sort((a, b) => a - b);

    let answer = 0;
    let n = arr.length;

    for (let i = 0; i < n - 2; i++) {

        let left = i + 1;
        let right = n - 1;

        while (left < right) {

            let sum = arr[i] + arr[left] + arr[right];

            if (sum < target) {
                left++;
            }
            else if (sum > target) {
                right--;
            }
            else {

                if (arr[left] === arr[right]) {

                    let count = right - left + 1;

                    answer += (count * (count - 1)) / 2;
                    answer %= MOD;

                    break;
                }

                let leftCount = 1;
                let rightCount = 1;

                while (
                    left + 1 < right &&
                    arr[left] === arr[left + 1]
                ) {
                    leftCount++;
                    left++;
                }

                while (
                    right - 1 > left &&
                    arr[right] === arr[right - 1]
                ) {
                    rightCount++;
                    right--;
                }

                answer += leftCount * rightCount;
                answer %= MOD;

                left++;
                right--;
            }
        }
    }

    return answer;
};