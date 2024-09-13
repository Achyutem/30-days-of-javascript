/* https://leetcode.com/problems/counter-ii */


type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

const createCounter = (init: number): Counter => {
    let val = init
    return{
        increment: () => {
            val++
            return val
        },
        decrement : () => {
            val--
            return val
        },
        reset : () => {
            val = init
            return val
        }
    }
    
};
