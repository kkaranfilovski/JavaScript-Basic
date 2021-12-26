// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Maybe you can use some function from previous tasks.



function hrsToSecs(hours) {
    if (Number.isNaN(hours) || hours <= 0) {
        return `Enter valid value`;
    }
    let seconds = hours * 3600;
    return `${hours} hours equals to ${seconds} seconds`;
}

let hours = parseInt(prompt("Enter hours:"))

let result1 = hrsToSecs(hours)
console.log(result1)
alert(result1)





console.log("========== USING PREVIOUS FUNCTION ==============")



function minutesToSeconds(minutes) {
    let seconds = minutes * 60;
    return seconds;
}

function hoursIntoSeconds(hours) {
    if (Number.isNaN(hours) || hours <= 0) {
        return `Enter valid value`;
    }
    let minutes = hours * 60
    let seconds = minutesToSeconds(minutes)
    return `${hours} hours equals to ${minutes} mins or ${seconds} seconds`;
}


let result2 = hoursIntoSeconds(hours)
console.log(result2)
alert(result2)
