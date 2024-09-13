/* https://leetcode.com/problems/create-hello-world-function */

const createHelloWorld = () => {
    return function(): string {
        return 'Hello World'
    };
};
