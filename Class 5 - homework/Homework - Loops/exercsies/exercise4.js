// STUDENT EXERCISE - #1
// FIND NUMBERS IN ARRAY
// How many times is a number contained in an array

// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.
// Time to accomplish: 15 minutes.

function findNumber (number, array) {
    let occurrence = 0;
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            occurrence ++;
        }
    }
    return occurrence
}

let input = parseInt(prompt("Enter a number:"))
let array = [3, 3, 3, 5, 5, 1, 3, 3, 6, 7, 8, 9, 3]

let result = findNumber (input, array);
alert(`There is ${result} occurrences of number ${input} in the array`)
console.log(result)