/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(sentence) {
    // check for '!' at the end of the passed in sentence
    if (sentence.endsWith('!')) {
        // split the sentence into an array of letters in order to remove the last part, the "!"
        let letters = sentence.split("")
        letters.pop()
        let joined = letters.join("")
        // return lowercase string with ! removed
        return `shh... ${joined.toLowerCase()}`
    } else {
        // return modified string
        return `shh... ${sentence.toLowerCase()}`
    }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));