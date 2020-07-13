/**
     Write a function called isSubsequence which takes in two strings and checks whether the characters
     in the first string form a subsequence of the characters in the second string.
     In other words, the function should check whether the characters in the first string appear
     somewhere in the second string, [ without their order changing ]
 */

// Time complexity: O(n+m)
// Space complexity: O(1)

function isSubsequence(subSequent, lookupString) {
    if (!subSequent.length || !lookupString.length) {
        console.log('Empty string')
    }

    let j = 0;
    let subSeqSize = subSequent.length;

    for (let i = 0 ; i < lookupString.length ; i++) {
        if(j === subSeqSize - 1) {
            return true;
        }

        if(subSequent[j] === lookupString[i]) {
            j++;
        } else if(j > 0 && subSequent[j] !== lookupString[i]) {
            j = 0
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hell wrld hello'));
