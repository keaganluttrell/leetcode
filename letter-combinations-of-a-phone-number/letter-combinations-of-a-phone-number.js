/**
 * @param {string} digits
 * @return {string[]}
 */

const phoneDigits = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
};


var letterCombinations = function(digits, strings = []) {
    if (digits.length === 0) {
        return strings;
    }
    const digit = digits[0];
    digits = digits.slice(1);
    
    const letters = phoneDigits[digit];
    
    let permutations = [];
    
    for (let i = 0; i < strings.length; i++) {
        for(let j = 0; j < letters.length; j++) {
            permutations.push(strings[i] + letters[j]);
        }
    }
    
        if(permutations.length < 1) {
        permutations = letters;
    }
    
    return letterCombinations(digits, permutations);
};