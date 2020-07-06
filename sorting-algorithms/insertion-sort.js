function insertionSort(array) {
    const arrayLength = array.length;

    for (let i = 1 ; i < arrayLength ; i++) {
        let current = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = current
    }

    return array;
}

console.log(insertionSort([ 12, 34, 324, 765, 5, -3, 98, 23, 1, -34 ]));
