/**
 Implement a function called countUniqueValues, which accepts a [ SORTED ]. array,
 and counts the unique values in the array.
 There can be negative numbers in the array, but it will always be [ SORTED ].
 */

function countUniqueValues(array) {
    if (!array.length) {
        return false;
    }

    let j = 0;
    for (let i = 1 ; i < array.length ; i++) {
        if(array[j] !== array[i]) {
            j++;
            array[j] = array[i];
        }
    }

    return  ++j;
}
console.time('countUniqueValues');
console.log(countUniqueValues([ 1, 2, 3, 4, 5, 5, 5, 6, 6, 7 ])); // 7, execution time: 4.853ms
console.timeEnd('countUniqueValues');
