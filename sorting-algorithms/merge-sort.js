function merge(array1, array2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(( array1[i] ));
            i++
        } else {
            result.push(array2[j]);
            j++
        }
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++
    }
    return result;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    return merge(left, right);
}

console.log(mergeSort([ 12, 432, 32, 12, 3, -1, 21, 21 ]));
