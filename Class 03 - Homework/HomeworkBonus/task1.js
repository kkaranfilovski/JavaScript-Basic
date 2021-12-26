// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

function minutesToSeconds(minutes) {
    if (Number.isNaN(minutes) || minutes <= 0) {
        return `Enter valid value`
    } 
    let seconds = minutes * 60;
    return seconds;
}

let minutes = parseInt(prompt("Enter minutes:"))

let result = minutesToSeconds(minutes)
console.log(result)
alert(`${result} seconds`)