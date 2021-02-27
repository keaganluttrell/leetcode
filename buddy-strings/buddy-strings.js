/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
  if(a.length !== b.length) return false;
  const different = [];
  
  for (let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      different.push(i);
    }
    if(different.length > 2) return false;
  }
  if(!different.length) {
    return a.length !== [...new Set(a)].length;
  }
  const [i, j] = different;
  return a[i] === b[j] && b[i] === a[j];
};
