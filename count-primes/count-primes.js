/**
 * @param {number} n
 * @return {number}
 */

// count the number of primes less than a non negative number
/*
  I: non negative number
  
  O: integer of primes less than input
  
  C: 0 <= n <= 5000000
  
  E:
  
*/

var countPrimes = function(n) {
  let counter = 0;
  let nonPrimes = [];
  for (let i = 2; i < n; i++) {
    if(nonPrimes[i] === undefined) {
      counter++;
      for(let j = i + i; j < n; j += i) {
        if(nonPrimes[j] === undefined) {
          nonPrimes[j] = 1;
        }
      }
    }
  }
  return counter;
};