/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function(tiles, carpetLen) {
        tiles.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = 0;

    let covered = 0;
    let answer = 0;

    while (left < tiles.length) {

        // Cover completely covered intervals
        while (
            right < tiles.length &&
            tiles[right][1] < tiles[left][0] + carpetLen
        ) {
            covered += tiles[right][1] - tiles[right][0] + 1;
            right++;
        }

        // Current answer = fully covered intervals
        let current = covered;

        // Add partial coverage of the next interval
        if (right < tiles.length) {

            let end = tiles[left][0] + carpetLen - 1;

            if (end >= tiles[right][0]) {
                current += end - tiles[right][0] + 1;
            }
        }

        answer = Math.max(answer, current);

        // Remove left interval before moving left pointer
        covered -= tiles[left][1] - tiles[left][0] + 1;
        left++;
    }

    return answer;
};