/**
 * @param {string} s
 * @return {boolean}
 */

function findMid(l, r) {
  return Math.floor((r + l ) / 2);
}

var isPalindrome = function(s) {
  // let x = s.replace(/\W/gm, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  
  while(left <= findMid(left, right + 1)) {
    if(/\W|_/gm.test(s[left])) {
      left++;              
      continue;}
    if(/\W|_/gm.test(s[right])) {
      right--; 
      continue;
    }
    if(s[left].toLowerCase() !== s[right].toLowerCase()) {
      console.log(s[left], s[right])
      return false;
    }
    left++;
    right--;
  }
  
  return true;
};