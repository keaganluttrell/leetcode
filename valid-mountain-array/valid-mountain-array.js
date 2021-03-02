/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length < 3) return false;
  let inc = true;
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if(num < prev && i === 1) return false;
    if(num === prev) return false;
    if(inc && num < prev) {
      inc = false; 
      prev = num;
      continue;
    }
    if(!inc && num > prev) return false;
    prev = num;
  }
  return inc ? false : true
};