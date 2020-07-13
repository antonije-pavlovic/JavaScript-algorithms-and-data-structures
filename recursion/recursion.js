function countDown(number) {
    if(number <= 0) {
        console.log('End of calls');
        return;
    }
    console.log(number);
    countDown(--number);
}

countDown(10);
