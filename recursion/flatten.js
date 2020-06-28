/**
 *  Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 *
 *  flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 *  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 *  flatten([[1],[2],[3]]) // [1,2,3]
 *  flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
 */

function flatten(arrayOfArrays) {
    let newArr = [];
    for (let i = 0 ; i < arrayOfArrays.length; i++) {
        if (Array.isArray(arrayOfArrays[i])) {
            newArr = newArr.concat(flatten(arrayOfArrays[i]));
        } else {
            newArr.push(arrayOfArrays[i]);
        }
    }
    return newArr;
}

console.log(flatten([ [ [ [ 1 ], [ [ [ 2 ] ] ], [ [ [ [ [ [ [ 3 ] ] ] ] ] ] ] ] ] ]));
