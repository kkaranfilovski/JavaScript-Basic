// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// Don't forget to return the result.
// The first element in an array always has an index of 0.
// Thry using the build in function Shift

let array = [1, 2, 3]

function getFirstValueWithIndex(array) {
    let firstElement = array[0];
    return firstElement;
}

function getFirstValueWithShift(array) {
    let firstElement = array.shift();
    return firstElement;
}

console.log("====== WITH FIRST INDEX ======")

let result = getFirstValueWithIndex(array)
console.log(array)
console.log(`First element: ${result}`)

console.log("====== WITH SHIFT ======")

let result2 = getFirstValueWithShift(array)
console.log(array)
console.log(`First element: ${result2}`)