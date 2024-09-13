/*https://leetcode.com/problems/filter-elements-from-array */

type Fn = (n: number, i: number) => any

const filter = (arr: number[], fn: Fn): number[] => {
    let output = []

    for (let i=0; i< arr.length; i++) {
        if (fn(arr[i], Number(i))){
            output.push(arr[i])
        }
    }
    return output
};
