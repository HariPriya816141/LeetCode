/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num) {
       let rev = 0

   while (num !== 0){
    let lastDigit = num % 10

    num = Math.trunc(num / 10)

    rev = rev * 10 + lastDigit
   }

   let min = - (2 ** 31)
   let max = (2 ** 31) - 1

   if (rev < min || rev > max) return 0

   return rev
};