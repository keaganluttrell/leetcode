/**
INPUT:
Card Val Range incl 0, 10,000
deck length range incl 1, 10,000
 * @param {number[]} deck
 
OUTPUT:
 * @return {boolean}
 */

function gcd(a,b) {
  return b > 0 ? gcd(b, a % b) : a;
}

var hasGroupsSizeX = function(deck) {
  const groups = new Map();
  for(const card of deck) {
    const ct = groups.get(card)
    groups.set(card, ct ? ct + 1 : 1);
  }
  let res = 0;
  for(const group of groups.values()) {
    res = gcd(res, group);
  }
  return res > 1;
};