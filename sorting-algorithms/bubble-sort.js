function swap(array, j) {
    let swapped = true;
    if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swapped = false;
    }
    return swapped;
}

function bubbleSort(array) {
    const arrayLength = array.length;
    let swapped;
    for (let i = arrayLength ; i > 0 ; i--) {
        for (let j = 0 ; j < i - 1  ; j++) {
            swapped = swap(array, j);
        }
        if(swapped) {
            break;
        }
    }
    return array;
}
console.log(bubbleSort([ 12, 34, 324, 765, 5, -3,98, 23, 1, -34 ]));
console.log(bubbleSort([ 8,1,2,3,4,5,6,7]));
