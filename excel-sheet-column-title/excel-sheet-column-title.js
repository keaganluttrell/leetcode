/**
 * @param {number} columnNumber
 * @return {string}
 */

function convertToTitle(columnNumber) {
  let res = '';
  while(columnNumber > 0) {
    let r = columnNumber % 26;
    res = String.fromCharCode(64 + (r || 26)) + res;
    columnNumber = r ? Math.floor(columnNumber / 26): Math.floor(columnNumber / 26) - 1;
  }
  return res;
};