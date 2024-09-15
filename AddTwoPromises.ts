/* https://leetcode.com/problems/add-two-promises */

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let pr1 = await promise1
    let pr2 = await promise2

    return pr1 + pr2
};
