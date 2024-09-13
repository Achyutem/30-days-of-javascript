/* https://leetcode.com/problems/to-be-or-not-to-be */

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => {
    return {
        toBe : (v) => {
            if (v === val) {
                return true
            }
            throw new Error ("Not Equal")
        },
        notToBe : (v) => {
            if (v !== val) {
                return true
            }
            throw new Error ("Equal")
        }
    }
};
