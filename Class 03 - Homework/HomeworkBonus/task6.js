// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function stringCharCompare(text1, text2) {
    return text1.length === text2.length;
}

let text1 = prompt("To compare if the total number of characters of two texts is equal - enter text one:")
let text2 = prompt("Enter text two")

let result = stringCharCompare(text1, text2)
console.log(result)
alert(result)
