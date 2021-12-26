// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function nextNumber(num) {
    if (Number.isNaN(num)) {
        return "Enter valid number"
    }
    return ++num;
}

let num = parseInt(prompt("Enter a number to increment by 1:"))

let result = nextNumber(num)
console.log(result);
alert(result);