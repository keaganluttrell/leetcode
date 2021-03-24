/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, skipped = false) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if(s[left] !== s[right] && skipped) return false;
    if(s[left] !== s[right]) {
      const fromLeft = validPalindrome(s.slice(left + 1, right + 1), true);
      const fromRight = validPalindrome(s.slice(left, right), true);
      if(!fromLeft && !fromRight) return false;
      break;
    }
    left++;
    right--;
  }
  return true;
};