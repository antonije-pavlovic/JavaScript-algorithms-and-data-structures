/**
 *  Write a function called binarySearch  which accepts a sorted
 *  array and a value and returns the index at which the value exists. Otherwise, return -1.
 */

function binarySearch(array, elem) {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor(( left + right ) / 2);

    for (; ;) {
        if (array[middle] === elem || left >= right) {
            break;
        }
        if (elem > array[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

        middle = Math.floor(( left + right ) / 2);
    }

    if (array[middle] === elem) {
        return middle
    } else {
        return -1;
    }
}


console.time('binarySearch');
console.log(binarySearch([ 2, 4, 9, 8, 15, 18, 25, 48, 89, 97, 102 ], 102)); // 6.146ms
console.timeEnd('binarySearch');
