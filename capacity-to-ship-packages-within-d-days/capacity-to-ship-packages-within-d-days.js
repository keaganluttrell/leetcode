/**
INPUT
     1<=  wieghts[i] <= 500
 * @param {number[]} weights RANGE: Inclusive 1, 50,000
 * @param {number} D Days  1>= D <= weights.length
 
 
 OUPUT
 * @return {number} minimum capacity
 
 
 Edge Cases:
 
 
 */
const canShipWithinDays = (weights, D, capacity) => {
  let boats = 1, currentOnBoat = 0;
  for(const weight of weights) {
    currentOnBoat += weight;
    if (currentOnBoat > capacity) {
      ++boats;
      currentOnBoat = weight;
        if (boats > D) break;
    }
  };
  return boats <= D;
};

const shipWithinDays = (weights, D) => {
  const totalWeights = weights.reduce((prev, el) => prev + el, 0);
  let low = Math.max(...weights)//, Math.ceil(totalWeights / D));
  let high = totalWeights;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canShipWithinDays(weights, D, mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};