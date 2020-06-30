/**
 * Write a function called linearSearch
 * which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
 */


function linearSearch(array, value) {
    const arraySize = array.length;
    let index = -1;

    for(let i = 0; i < arraySize ; i++) {
        if(array[i] === value) {
            index = i;
            break;
        }
    }

    return index;
}
console.time('linearSearch');
console.log(linearSearch([ 2, 4, 9, 8, 15, 18, 25, 48, 89, 97, 102 ], 18));
console.timeEnd('linearSearch');
