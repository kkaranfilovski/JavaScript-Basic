// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
// Notes
// Don't forget to return the result.

function checkNumber(array, number) {
    if (array.includes(number)) {
        return true;
    }
        return false;
}

let array = [1, 2, 3, 4, 5, "kiko"]
let result = checkNumber(array, 1)
console.log(result)