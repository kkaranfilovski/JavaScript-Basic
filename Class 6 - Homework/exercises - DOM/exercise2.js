// STUDENT EXERCISE - #2
// WEIGHT CALCULATOR IN CHICKENS
// Want to know how you wiegh in chikens? No problem!

// Write a function named weightInChickens that:
// Takes an input weigh in kilograms
// Calculates weight in chickens ( 1 chicken = 0.5kg )
// The input should be entered through prompt
// The result should be shown in the HTML of the page
// Note:The html page needs to have title and result paragraph

let paragraph = document.getElementById("calc")

function weightInChickens(kilograms) {
    
    let chickenWeight = kilograms / 0.5;

    if (Number.isNaN(kilograms)) {
        paragraph.innerText += `Invalid input. Please refresh the page and enter valid number`
    } else {
        paragraph.innerText += `If you are ${input}kg, then your weight in chickens is: ${chickenWeight} chickens`
    }
}

let input = parseInt(prompt("Please enter your kilograms:"))

weightInChickens(input)

