/**
  Write function called 'same', which accepts two arrays.The function
  should return true id every value in the array has it's corresponding value squared
  in the second array. The frequency of values must be the same.
  same([1,2,3],[1,4,9])   // true
  same([1,2,3],[1,9])     // false
  same([1,2,1],[4,4,1])   // false (must be same frequency)
 */

/**

  @param arr1 - is array with length of N
  @param arr2 - is array with length of N

  Time complexity is O(N^2)
  indexOf() in background just use for loop, so basically have two nested for loops
  Good way to improve performance is to remove element if you can, once you find it (line 30: [ arr2.splice(index, 1); ])
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0 ; i < arr1.length ; i++) {
        const index = arr2.indexOf(arr1[i] ** 2);
        if(index === -1) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
}
console.time('same');
same([1,2,3,2], [9,1,4,4]);
console.timeEnd('same');

/**
 *
 * @param arr1 - is array with length of N
 * @param arr2 - is array with length of N
 *
 * Time complexity is O(N)
 */
function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const counter1 = {};
    const counter2 = {};

    const arrayOneSize = arr1.length;
    for(let i= 0; i < arrayOneSize; i++) {
        counter1[arr1[i]] = (counter1[arr1[i]] || 0) + 1;
    }
    const arrayTwoSize = arr2.length;
    for(let i= 0; i < arrayTwoSize; i++) {
        counter2[arr2[i]] = (counter2[arr2[i]] || 0) + 1;
    }

    for(let key in counter1) {
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]){
            return false;
        }
    }
    return true;
}

console.time('sameRefactored');
sameRefactored([1,2,3,2], [9,1,4,4]);
console.timeEnd('sameRefactored');
/**
    End result with 4 elements
    1. same:  0.103ms
    2. sameRefactored: 0.060ms

 */
