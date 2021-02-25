/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const table = {};
    
    for (let i = 0; i < words.length; i ++) {
        table[words[i]] ? table[words[i]]++ : table[words[i]] = 1;
    }
    
    const sortedEntries = Object.entries(table).sort((a,b) => {
        if(a[1] === b[1]) {
           return a[0] < b[0] ? -1 : 1
        } else {
          return a[1] > b[1] ? -1 : 1 
        }
    });
    
    return sortedEntries.flat().filter(val => isNaN(val)).slice(0,k);
};

