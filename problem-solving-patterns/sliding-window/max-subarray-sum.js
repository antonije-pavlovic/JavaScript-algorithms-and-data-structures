/**
 Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 The functions should calculate the maximum sum of n consecutive elements in the array

 maxSubarraySum([1,2,5,2,8,1,5], 2)  // 10 (8 + 2)
 */
/**
 *  Bad solution
 *  Time complexity: O(N^2)
 */
function maxSubarraySum(array, num) {
    if (num > array.length) {
        return null;
    }

    let max = -Infinity;
    let arraySize = array.length - num + 1;
    for (let i = 0 ; i < arraySize ; i++) {
        let sum = 0;
        for (let j = 0 ; j < num ; j++) {
            sum += array[i + j]
        }

        if (sum > max) {
            max = sum;
        }
    }
    return max;
}

// const array = [ 2, 6, 9, 2, 1, 8, 5, 6, 3 ];
// console.log(maxSubarraySum(array, 3));

/**
 *
 Better splution
 Time complexity: O(N)
 */
function maxSubarraySumRefactored(array, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (array.length < num) {
        return null;
    }
    for (let i = 0 ; i < num ; i++) {
        maxSum += array[i];
    }

    tempSum = maxSum;
    for(let i = num ; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i];
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}

const array = [ 2, 6, 9, 2, 1, 8, 5, 6, 3 ];
console.log(maxSubarraySumRefactored(array, 3));
