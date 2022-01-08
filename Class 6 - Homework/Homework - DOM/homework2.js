// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers = document.getElementById("numbers")
let result = document.getElementById("result")
let title = document.getElementById("title")

let message = alert("Enter numbers you want to sum. When you are done enter q or press cancel")

function printNumbers(array) {

    numbers.innerHTML += `<ul>`
    
    for (let i = 0; i < array.length; i++) {
        numbers.innerHTML += `<li> ${array[i]} </li>`
    }
    numbers.innerHTML += `</ul>`
}

function sumNumbers(array) {
    let sum = 0;
    
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    result.innerHTML += `<h3> The sum of the numbers is: ${sum} </h3>`
    result.innerHTML += `The whole mathematical equasion is: ( `
    for (let i = 0; i < array.length - 1; i++) {
        result.innerHTML += ` ${array[i]} +`
    }
    result.innerHTML += ` ${array.slice(-1)} = <b> ${sum} </b> )`
    return sum;
}

function getNumbers(input) { 
    
    let array = [];
    for (let i = 0; i < Infinity;) {
        let input = prompt("Enter a number:")     
        if (input === "q" || input === null) {
            break;
        }
        input = parseInt(input)
        if (Number.isNaN(input)) {
        alert("Invalid number!")
        continue;
        }
        array.push(input)
        i++
    }
    printNumbers(array)
    sumNumbers(array)
}

getNumbers(message)