/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const stack = [];
  
  for (const c of s) {
    if('{[('.includes(c)) {
      stack.push(c);
      continue;
    }
    const top = stack[stack.length - 1];
     console.log(c, top, '--->',stack)
    if(c === ']' && top === '[') stack.pop();
    else if(c === '}' && top === '{') stack.pop();
    else if(c === ')' && top === '(') stack.pop();
    else return false;
  }
  return !stack.length;
};