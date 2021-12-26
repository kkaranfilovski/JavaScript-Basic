// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {
    return word.endsWith("s") || word.endsWith("S");
}

let word = prompt("Enter a word to check is it plural:")

let result = isPlural(word)
console.log(result)
alert(result)