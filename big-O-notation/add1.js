/**
 *  number of operations dependence of the number of n ( n additions , n assignments )
 *  Time complexity is: 5n + 2 = n = linear
 */

function addUpTo(n) {
    let total = 0; // 1 assignment
    for (let i = 1 ; i <= n ; i++) { // i ++ is n additions, n assignments, n comparisons, 1 addition
        total += i; // n additions, n assignments
    }
    return total;
}

/**
 *  addUpTo2 is faster because there is only 3 operation, regardless of the size of n
 *  Time complexity is: O(1) constant
 */

function addUpTo2(n) {
    return n * ( n + 1 ) / 2;
}
/**
 *
 *  Time complexity stay the same N as in first function
 */
function countUpAndDown(n) {
    let total = 0; // 1 assignment
    for (let i = 1 ; i <= n ; i++) {
        console.log(i);
    }

    for (let j = n - 1 ; j >= 0 ; j--) {
        console.log(j);
    }
    return total;
}

/**
 *  printAllPairs is faster because there is only 3 operation, regardless of the size of n
 *  Time complexity is: O(n^2)
 */
function printAllPairs(n) {
    for (let i = 0 ; i < n ; i++) {
        for (let j = 0 ; j < n ; j++) {
            // console.log(i,j);
        }
    }
}

/**
 *  Time complexity is N because we loop at least 5 times
 */
function logAtLeastFive(n) {
    for (let i = 0 ; i < Math.max(5, n) ; i++) {
        console.log(i);
    }
}
/**
 *  Time complexity is O(1) because we loop at most 5 times
 */
function logAtMostFive(n) {
    for (let i = 0 ; i < Math.min(5, n) ; i++) {
        console.log(i);
    }
}
console.time('addUpTo');
addUpTo(10000);                 // 0.719ms
console.timeEnd('addUpTo');

console.time('addUpTo2');
addUpTo2(10000);                // 0.047ms
console.timeEnd('addUpTo2');

console.time('countUpAndDown');
countUpAndDown(100);                // 0.047ms
console.timeEnd('countUpAndDown');

console.time('printAllPairs');
printAllPairs(100);
console.timeEnd('printAllPairs');

console.time('logAtLeastFive');
logAtLeastFive(100);
console.timeEnd('logAtLeastFive');

console.time('logAtMostFive');
logAtMostFive(100);
console.timeEnd('logAtMostFive');
