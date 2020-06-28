/**
 * Write a recursive function called isPalindrome which return true if the strig passed to it is a palindrome(reads same forward and backward).
 * Otherwise returns false
 *   isPalindrome('awesome') // false
 *   isPalindrome('tacocat') // true
 */

function isPalindrome(word) {
    if(word.length === 1) {
        return true;
    }
    if(word[0] === word[word.length - 1]) {
        const firstRemoved = word.substring(1);
        const secondRemoved = firstRemoved.substring(0, firstRemoved.length - 1);
        return isPalindrome(secondRemoved)
    } else {
        return false;
    }
}

console.log(isPalindrome('tacocat'));
