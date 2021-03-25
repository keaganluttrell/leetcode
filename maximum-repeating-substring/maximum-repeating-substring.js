/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
function maxRepeating(s, word) {
  let max = 0;
  let ct = 0;
  for(let i = 0; i < s.length; i++) {
    let w = s.slice(i, i + word.length)
    let j = i;
    while(w === word) {
      ct++;
      j += word.length;
      w = s.slice(j, j + word.length);
    }
    if(ct > max) max = ct;
    ct = 0;
  }
  return max;
};