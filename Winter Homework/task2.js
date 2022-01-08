// Task 2: Reverse an Array
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
// Notes
// Don't forget to return the result.

function reverseArray(array) {
    let reversedArray = array.reverse()
    return reversedArray;
}

let array = [1, 2, 3, 4, 5]

let result = reverseArray(array);
console.log(result)