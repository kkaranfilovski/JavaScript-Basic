// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1, num2) {
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return "Enter valid numbers"
    }
    return `The remainder of ${num1} and ${num2} is ${num1 % num2}`;
}

let num1 = parseInt(prompt("Enter number 1:"))
let num2 = parseInt(prompt("Enter number 2:"))

let result = remainder(num1, num2)
console.log(result)
alert(result)