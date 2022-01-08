// STUDENT EXERCISE - #2
// FILTER ODD/EVEN NUMBERS FUNCTION
// Write a function named findNumber that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result
// Time to accomplish: 20 minutes.

function findNumber(array, type) {

    let newArray = []

    if (type === "1") {
        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                newArray.push(array[i])
            }
        }
    } else if (type === "2") {
        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                newArray.push(array[i])
            }
        }
    }
    return newArray
}




let array = [1,2,3,4,5,6,7,8,9,10,11];
let type = prompt("Please select \n 1. For even numbers \n 2. For odd numbers");


let result = findNumber(array, type);
console.log(result);
alert(result);