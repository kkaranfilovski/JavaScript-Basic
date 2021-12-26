// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function isSameText(text1, text2) {
    return text1.toLowerCase() === text2.toLowerCase();
}

let text1 = prompt("To see if the texts are the same \n Enter text one:")
let text2 = prompt("Enter text two:")

let result = isSameText(text1, text2)
console.log(result)
alert(result)