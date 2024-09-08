/* https://leetcode.com/problems/counter */

const createCounter = (n) => {
    
    return function() {
       return n++
    };
};
