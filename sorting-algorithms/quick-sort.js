function pivot(array, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIndex = start;

    for (let i = start + 1 ; i < array.length ; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array,   start, swapIndex);
    return swapIndex
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
function quickSort(array, left = 0, right = array.length -1) {
    if(left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array
}
console.log(quickSort([ 6,2, 4, 7, 45, 12, 56, 1 ]));
