/**
 * @param {number[]} arr
 * @return {boolean}
 */
function checkIfExist(arr) {
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  console.log(arr)
  const doubles = {};
  for(let i = 0; i < arr.length; i++) {
      const double = arr[i] * 2
      if (doubles[arr[i]] !== undefined) return true;
    doubles[double] = double;
  }
  return false;
};