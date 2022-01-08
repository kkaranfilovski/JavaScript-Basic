// EXAMPLE
// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it

let numbersArray = [];

for (let i = 0; i < 10;) {
    let input = parseInt(prompt("Enter a number:"))
    if (Number.isNaN(input)) {
        alert("Invalid number!")
        continue;
    }
        numbersArray.push(input)
        i++
}

console.log(numbersArray)

let max = numbersArray[0]

for (i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {
        max = numbersArray[i]
    }
}

console.log(`max is ${max}`)
alert(`The biggest number from the inputs is: ${max}`);