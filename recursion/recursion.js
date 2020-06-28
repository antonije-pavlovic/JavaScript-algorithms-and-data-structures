function countDown(number) {
    if(number <= 0) {
        console.log('End of calls');
        return;
    }
    console.log(number);
    countDown(--number);
}

console.time('countDown');
countDown(10);          // countDown: 4.690ms
console.timeEnd('countDown');
