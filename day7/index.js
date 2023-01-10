/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    // split the string into an array of each character
    // for every other character, convert it to upper case
    // merge array back into a string called newStr

    let stringArray = str.split("")
    for (let i = 0; i < stringArray.length; i++) {
        if (i % 2 === 0) {
            stringArray[i] = stringArray[i].toUpperCase()
        }
    }
    let newStr = stringArray.join('')
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));