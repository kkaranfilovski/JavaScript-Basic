// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
// negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
// negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
// negate([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get an empty array, return an empty array: []

let array = [1, 2, 3, 4, 5, -6, 7]

function negateArray(array) {
    let negatetedArray = [];

    for (let number of array) {
        negatetedArray.push(number * -1);
    }
    return negatetedArray;
}

let result = negateArray(array);
console.log(result);
