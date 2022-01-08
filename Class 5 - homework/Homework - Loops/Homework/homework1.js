// HOMEWORK #1
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function bigString(array) {
    let string = ""
    for (let element of array) {
        string += element + " ";
    }
    return string
}


let array = ["Chelsea", "is", "the", "best", "club", "in", "the", "World"]

let result = bigString(array)
console.log(result)
alert(result)