/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let output = '';
  const test = strs[0] || [];
  for(let i = 0; i < test.length; i++) {
    for(let j = 1; j < strs.length; j++) {
      if(test[i] !== strs[j][i]) return output;
    }
    output += test[i];
  }
  return output
};