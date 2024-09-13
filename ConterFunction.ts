/* https://leetcode.com/problems/counter */

const createCounter = (n: number) => {
    return function () {
        return n ++
    }
}
