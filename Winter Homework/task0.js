// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.

// Examples
// createArray(5) ➞  [1, 2, 3, 4, 5]
// createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// createArray(-5) ➞  []


function createArray(number) {

    let array = [];
    
    if (Number.isNaN(number)) {
        return "Enter valid number"
    }

    for(let i = 1; i <= number; i++) {
        array.push(i)
    }
    return array
}

let number = parseInt(prompt("Please enter a number:"))

let result = createArray(number)
console.log(result)