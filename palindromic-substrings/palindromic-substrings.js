/**
  INPUT:
 * @param {string} s
 OUTPUT: # of plaindromic substrings
 * @return {number} 
 C: 0 <= s.length <= 1000
 E: empty string?? -> Return 0;
 
 TASK: count the number of palindromic substrings
 Questions?
 What constitutes a palindrome? 
  A: string spelled the same forwards and backwards to include single chars
 We counting ALL substrings that are palindromes even if they contain same chars
 The entire string is a sub string
 
 Basic Test Cases:
 "abc" -> 3
 "aaa" -> 6
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length -1;
  while (left < right) {
    if(s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

var countSubstrings = function(s) {
  if(!s.length) return 0;
  if(s.length === 1) return 1;
  
  let counter = s.length;
  for (let i = 0; i < s.length - 1; i++) { 
    let sub = s[i];
    for(let j = i + 1; j < s.length; j++) {
      sub += s[j];
     if(isPalindrome(sub)) counter++;
    }
    sub = '';
  }
  
  return counter;
};