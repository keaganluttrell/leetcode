/**
 * @param {number} x
 * @return {number}
 */

const MAX_N = -2147483648;
const MAX_P =  2147483647;

var reverse = function(x) {
    const abs = Math.abs(x);
    const reversed = +String(abs).split('').reverse().join('');
    
    if(Math.sign(x) < 0) {
        if(reversed * -1 < MAX_N ) {
            return 0;
        }
        return reversed * -1;
    } else {
        if(reversed > MAX_P ) {
            return 0;
        }
        return reversed;
    }
};