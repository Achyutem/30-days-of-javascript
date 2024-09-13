/* https://leetcode.com/problems/apply-transform-over-each-element-in-array */

const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
    let res = []
    for (let i=0; i < arr.length; i++){
        res.push(fn(arr[i], i))
    }
    return res
};
