/* https://leetcode.com/problems/to-be-or-not-to-be */


const expect = (val) => {
    return {
        toBe: (v) => {
            if (v === val) return true;
            throw new Error ('Not Equal')
        },
        notToBe: (v) => {
            if (v !== val) return true;
            throw new Error ('Equal')
        }
    }
};
