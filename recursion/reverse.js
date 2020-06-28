/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 *
 * reverse('awesome') // 'emosewa'
 * reverse('rthmschool') // 'loohcsmhtir'
 */

function reverse(word) {
    if(word.length === 1) {
        return word;
    }
    return reverse(word.slice(1)) + word[0]
}
console.log(reverse('reverse'));
