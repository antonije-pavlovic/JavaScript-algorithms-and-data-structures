/**
     Write a function called averagePair. Given a [ SORTED ] array of integers and a target average,
     determine if there is a pair of values in the array where the average of the pair equals the target average.
     There may be more than one pair that matches the average target.
 */

/**
 * CONDITION:
 *  1. Time complexity: O(N)
 *  2. Space complexity: O(1)
 */
function averagePair(array, targetAverage) {
    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        let average = (array[left] + array[right]) / 2;

        if(average === targetAverage) {
            return true;
        } else if(average < targetAverage) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

console.time('averagePair');
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);  // 0.100ms
console.timeEnd('averagePair');
