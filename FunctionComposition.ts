/* https://leetcode.com/problems/function-composition */

type F = (x: number) => number;

const compose = (functions: F[]): F => {
    return function(x){
        let result = x
        for (let i=functions.length -1 ;i>=0; i--){
            result = functions[i](result)
        }
        return result
    }
};
