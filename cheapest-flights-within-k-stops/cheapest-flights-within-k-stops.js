/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    
    const flightObj = {};
    for (const flight of flights) {
       const [from, to, price] = flight;
       if (flightObj[from] == null) flightObj[from] = {};
       flightObj[from][to] = price;
   }
    const priorityQueue = [[0, 0, src]];
    
    while (priorityQueue.length) {
       const [price, stop, from] = priorityQueue.shift();
        
       if (stop > k + 1) continue;
       if (from == dst) return price;
        
       const to = flightObj[from];
       for (const key in to) {
           const costToNext = price + to[key];
           priorityQueue.push([costToNext, stop + 1, key]);
       }
       priorityQueue.sort((a, b) => a[0] - b[0]);
   }
   return -1;
}
