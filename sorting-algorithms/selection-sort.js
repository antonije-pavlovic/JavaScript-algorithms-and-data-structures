function selectionSort(array) {
    const arrayLength = array.length;
    let min;
    for (let i = 0 ; i < arrayLength ; i++) {
        min = i;
        let swapped = false;

        for (let j = i + 1 ; j < arrayLength; j++) {

            if (array[j] < array[min]) {
                min = j;
                swapped = true;
            }
        }
        if (swapped) {
            const temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([ 12, 34, 324, 765, 5, -3,98, 23, 1, -34 ]));
