/**
 * @param {string} s INPUT
 * @return {string} OUTPUT
 
 Clarfication
  reverse chars in each word, while still preserving whitespace     and intitial word order
 
 C: 
 only one whitespace between words
 // 0 -> max string length
 */
var reverseWords = function(s) {
  const words = s.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
};