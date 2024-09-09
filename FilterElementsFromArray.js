/*https://leetcode.com/problems/filter-elements-from-array */


const filter = (arr, fn) => {
    result = []

    for (let i=0;i<arr.length;i++){
        if (fn(arr[i], Number(i))) {
            result.push(arr[i])
        }
    }

    return result
};
