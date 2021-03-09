/**
INPUT:
 * @param {number[][]} points -> 2D array
 OUTPUT: 
 * @return {number} INT of Boomerangs
 
 Boomerang is: [i, j, k] where distance (absDiff) between i - j == i - k 
 return of number of bommerangs in a given point
 */

var numberOfBoomerangs = function(points) {
  let result = 0;
  const length = points.length;
  function getDistance(a, b){
    const j = Math.pow(a[0] - b[0], 2);
    const k = Math.pow(a[1] - b[1], 2);
    return j + k;
  };
  
  for(let i = 0; i < length; i++){
    const map = new Map();
    for(let j = 0; j < length; j++){
      if(i === j) continue;
        const dist = getDistance(points[i], points[j]);
        map.set(dist, (map.get(dist) || 0) + 1);
      }
    map.forEach((value) => {
    result += value * (value - 1);
    });
  }
  return result;
};