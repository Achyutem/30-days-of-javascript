/* https://leetcode.com/problems/allow-one-function-call */


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

const once = (fn: Function): OnceFn  => {
    let called = false
    return function (...args) {
        if (called) {
            return undefined
        }

        called = true
        return fn(...args)
    };
}
