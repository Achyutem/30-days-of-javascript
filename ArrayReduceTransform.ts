/* https://leetcode.com/problems/array-reduce-transformation */

type Fn = (accum: number, curr: number) => number

const reduce = (nums: number[], fn: Fn, init: number): number => {
    let res = init;
    for (let n of nums) {
        res = fn(res, n)
    }

    return res
};
