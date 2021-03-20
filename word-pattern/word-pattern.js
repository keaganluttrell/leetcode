/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const pSet = [...new Set(pattern.split(''))];
  const sSet = [...new Set(s.split(' '))];
  let hash = {};
  for(let i = 0; i < pSet.length; i++) {
    hash[pSet[i]] = sSet[i];
  }
  let output = '';
  for(const char of pattern) {
    output += hash[char] + ' ';
  }
  return output.trim() === s;
};