/**
  INPUT:
 * @param {number[]} flowerbed filled with 0's and 1's, 0-empty, 1 taked
 
 * @param {number} n, number of new flowers to plant
 
 OUTPUT:
 * @return {boolean} possible to plant n flowers??
 
 */
var canPlaceFlowers = function(flowerbed, n) {
  for(let i = 0; i < flowerbed.length; i++) {
    if(n === 0) return true;
    if(flowerbed[i] === 1) i++;
    if (flowerbed[i] === 0 && (!flowerbed[i - 1] && !flowerbed[i + 1])) {
      flowerbed[i] = 1;
      n--;
      i++;
    };
  };
  return n === 0;
};