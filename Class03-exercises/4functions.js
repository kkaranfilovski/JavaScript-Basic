function sumsTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtractTwoNumbers (num1, num2) {
    let subtract = num1 - num2;
    return subtract;
}

function multiplTwoNumbers (num1, num2) {
    let multiple = num1 * num2;
    return multiple;
}

function divideTwoNumbers (num1, num2) {
    if(num2 === 0) {
        return "Cannot divide by zero" 
    } 
    let divide = num1 / num2;
    return divide  
}

let sum = sumsTwoNumbers(5, 5)
console.log(sum);

let subtract = subtractTwoNumbers(5, 5)
console.log(subtract);

let multiple= multiplTwoNumbers (5, 0)
console.log(multiple)

let divide = divideTwoNumbers (5, 0)
console.log(divide)