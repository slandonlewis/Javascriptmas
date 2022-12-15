/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// First solution
function panic(str) {
    // change all letters in str to capital
    // split str separated by " "
    // in between each item in the array, add 😱 emoji
    // join array by "" 
    // add ! to the end of the string
    var caps = str.toUpperCase().split(" ")
    for (let i = 0; i < caps.length - 1; i++) {
        caps[i] = `${caps[i]} 😱 `
    }
    return `${caps.join("")}!`
}

// Second solution
function panic(str) {
    let caps = str.toUpperCase().split(" ")
    // storing this last word is important because we want to keep it from being modified on line 35
    let lastWord = caps[caps.length - 1]
    caps.pop()
    // lastWord was removed so we can add 😱 after the rest of the words leading up to it
    let modified = caps.map(word => `${word} 😱 `)
    // added lastWord back
    modified.push(lastWord)
    let joined = modified.join("")
    // added a "!"" at the end of the string
    return `${joined}!`
}

// Test your function
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"))