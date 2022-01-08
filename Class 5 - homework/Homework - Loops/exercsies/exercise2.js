// STUDENT EXERCISE
// Decription: The Math object allows you to perform mathematical tasks.
// Math.pow(x,y); - Returns the value of x to the power of y
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
// Time to accomplish: 15 minutes.

let result = 0;
for (let i = 101; i < 151; i++) {
    result += Math.pow(i, 2);
}

console.log(result)
