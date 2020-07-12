function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    let count = 1;

    if (num < 0) {
        num = Math.abs(num);
    }

    while (num / 10 >= 1) {
        num /= 10;
        ++count
    }
    return count;
}

function mostDigits(array) {
    let maxDigits = 0;
    for (let i = 0 ; i < array.length ; i++) {
        const countedDigits = digitCount(array[i]);
        if (countedDigits > maxDigits) {
            maxDigits = countedDigits;
        }
    }
    return maxDigits;
}

function radixSort(array) {
    const maxDigit = mostDigits(array);

    for (let i = 0 ; i < maxDigit ; i++) {
        const digitBuckets = Array.from({ length: 10 }, () => [])
        for (let j = 0 ; j < array.length ; j++) {
            const digitAtPlace = getDigit(array[j], i);
            digitBuckets[digitAtPlace].push(array[j])
        }
        array = [].concat(...digitBuckets)
    }
    return array;
}

console.log(radixSort([234, 1,432,4324324,4234,432,23,667567,434, 1, 23]));
