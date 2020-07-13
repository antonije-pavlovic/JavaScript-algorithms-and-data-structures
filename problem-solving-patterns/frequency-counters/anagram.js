/**

 Given two strings, write a function yto determine if the second string is anagram of the first.
 An anagram is a word, phrase name formed by rearranging the letters of another,
 such as cinema, formed from iceman

 anagram('anagram', 'nagaram') // true
 anagram('rat', 'car') // false

 */

/**
 [ CONDITION ]: Time complexity O(N)
 */
function anagramFirstSolution(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    const anagram1 = {};
    const anagram2 = {};

    const firstWordArray = Array.from(firstWord);
    const arrayOneSize = firstWord.length;
    for (let i = 0 ; i < arrayOneSize ; i++) {
        anagram1[firstWordArray[i]] = ( anagram1[firstWordArray[i]] || 0 ) + 1
    }

    const secondWordArray = Array.from(secondWord);
    const arrayTwoSize = secondWord.length;
    for (let i = 0 ; i < arrayTwoSize ; i++) {
        anagram2[secondWordArray[i]] = ( anagram2[secondWordArray[i]] || 0 ) + 1
    }

    for (const key in anagram1) {
        if (!( key in anagram2 )) {
            return false;
        }

        if (anagram1[key] !== anagram2[key]) {
            return false;
        }
    }
    return true;

}

anagramFirstSolution('anagram', 'nagara');

/**
 *  MUCH FASTER WAY
 */
function anagramSecondSolution(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    const lookup = {};

    const arrayOneSize = firstWord.length;

    for (let i = 0 ; i < arrayOneSize ; i++) {
        lookup[firstWord[i]] ? lookup[firstWord[i]]++ : lookup[firstWord[i]] = 1;
    }

    const arrayTwoSize = secondWord.length;
    for (let i = 0 ; i < arrayTwoSize ; i++) {
        if (lookup[secondWord[i]]) {
            lookup[i]--;
        } else {
            return false
        }
    }
    return true;
}

anagramSecondSolution('anagram', 'nagara');
