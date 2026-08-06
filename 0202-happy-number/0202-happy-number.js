/**
 * @param {number} n
 * @return {boolean}
 */

 function getNext(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function(n) {
      let seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) return false;

    seen.add(n);
    n = getNext(n);
  }
  return true;
};