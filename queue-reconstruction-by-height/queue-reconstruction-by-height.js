/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] < b[1] ? -1 : 1;
        } else {
            return a[0] > b[0] ? -1 : 1
        }
    });
    
    const queue = [];
    
    for (let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i])
    }
    
   return queue;
};