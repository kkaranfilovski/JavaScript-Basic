// EXAMPLE
// Action: Write a JavaScript program that will read in a number and write out its digits

let number = prompt("Enter a number:")
let digits = []

for (i = 0; i < number.length; i++) {
    digits.push(+number.charAt(i));
}

alert(`The digits of the number ${number} are:\n ${digits}`)
console.log(digits);