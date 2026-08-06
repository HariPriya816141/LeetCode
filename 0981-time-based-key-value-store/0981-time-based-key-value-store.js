var TimeMap = function() {
    this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {

    if (!(key in this.map)) {
        this.map[key] = [];
    }

    this.map[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {

    if (!(key in this.map))
        return "";

    let arr = this.map[key];

    let left = 0;
    let right = arr.length - 1;

    let answer = "";

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid][0] <= timestamp) {

            answer = arr[mid][1];
            left = mid + 1;

        } else {

            right = mid - 1;
        }
    }

    return answer;
};