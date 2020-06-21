/**
 Write a function called sumZero which accepts a [ SORTED ] array of integers.
 The function should find the first pair where the sum is 0.
 Return an array that includes both values that sum to zero or undefined if a pair doesn’t exis

 sumZero([2, 4, 3, -1, 9, -2]) // [2, -2]
 sumZero([4, 2, 6, -1]) // undefined
 */

/**
    BAD SOLUTION
    Time complexity O(N^2)
 */
function sumZeroBadSolutions(array) {
    const arraySize = array.length;

    for (let i = 0 ; i < arraySize ; i++) {
        for (let j = i + 1 ; j < arraySize ; j++) {
            if (array[i] + array[j] === 0) {
                return [ array[i], array[j] ]
            }
        }
    }

    return false;
}
console.time('sumZeroBadSolutions');
sumZeroBadSolutions([2, 4, 3, -1, 9, -2]); // 0.081ms
console.timeEnd('sumZeroBadSolutions');

/**
 *
 *  GOOD SOLUTION
 *  Time complexity: O(N)
 *  Space complexity: O(1)
 */
function sumZeroGoodSolution(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const sum = array[left] + array[right];
        if(sum === 0) {
            return [array[left], array[right]]
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.time('sumZeroGoodSolution');
sumZeroGoodSolution([2, 4, 3, -1, 9, -2]); // 0.031ms
console.timeEnd('sumZeroGoodSolution');
