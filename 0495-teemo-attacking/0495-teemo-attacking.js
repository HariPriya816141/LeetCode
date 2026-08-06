/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
      let total = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        total += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }

    // Add the duration of the last attack
    total += duration;

    return total;
};