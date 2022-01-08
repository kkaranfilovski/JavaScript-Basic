// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// countdown(1) ➞ [1, 0]
// countdown(0) ➞ [0]
// Notes
// Don't forget to return the result.
// The argument will always be greater than or equal to zero.

function countdown(number) {

    let countdownArray = []

    if (Number.isNaN(input) || input < 0) {
        return "Enter valid number."
    }

    for(number; number >= 0; number--) {
        countdownArray.push(number)
    }
    return countdownArray;
}


let input = parseInt(prompt("Enter a number:"));

let result = countdown(input);
console.log(result);
alert(result);
