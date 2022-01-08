// HOMEWORK #3
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

function sumOfMinAndMax (array) {
    
    let min = Infinity;
    let max = -Infinity;

    for ( let i = 0; i < array.length; i++) {

        if(typeof array[i] !== 'number') {
            console.log(`other type: ${i} position: ${array[i]}`)
            continue;
        }
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array [i];
        }
    }
     let sum = min + max;
     return `Max: ${max}, Min: ${min} Sum: ${sum}`;
}

let array = ["asd", "qwe", 2, 3, 5, 7, 11, 623, "kiko", 123, 999, 54, true, false, null, undefined, 1, -999, 1000,]

let result = sumOfMinAndMax(array)
console.log(result)