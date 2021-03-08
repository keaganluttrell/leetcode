/**
 * @param {string} s
 * @return {string[]}
 
 Return a list of strings representing all possibilities for what our original coord 
 could have been
 
 Original never had extraneous zeroes
 never started with a decimal
 
 4 <= s.length <= 12
 first and last char are parens of s
 
 checks
 cant start or end with a '.'
 cant start with a 0 if length > 1
 cant end with a zero if decimal is present
 */
function ambiguousCoordinates(S) {
  S = S.slice(1, S.length - 1);
  let arr = [];

  for (let i = 1; i < S.length; i++) {
    let p1 = combos(S.slice(0, i));
    let p2 = combos(S.slice(i));

    if (p1.length && p2.length) {
      for (const str1 of p1) {
        for (const str2 of p2) {
          arr.push([str1, str2]);
        }
      }
    }
  }
  return arr.map(e => `(${e[0]}, ${e[1]})`);
}

// get all possible (distinct) numbers that a string can be converted to.
function combos(s) {
  let set = new Set();
  if (String(Number(s)).length === s.length) set.add(Number(s));
    if (s.length === 1) return [...set];

    // Just put a dot in all possible places.
    for (let i = 1; i < s.length; i++) {
      let x = Number(s.slice(0, i) + '.' + s.slice(i));

      // Don't add if some digits were lost during convert (e.g. 0012 --> 12)
      if (String(x).length === (s.length + 1)) set.add(x);
    }
  return [...set];
};