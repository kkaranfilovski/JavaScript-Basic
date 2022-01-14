// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.

let a;
a = 7;
let b = 8;
let c = a + b;
console.log(c)

// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.

let integer = 5;
let boolean = true;
let string = "Kiko"
console.log(typeof(integer), typeof(boolean), typeof(string))

// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.

let x = 10;
let y = 3;
let division = x / y
let wholePart = Math.floor(division)
let remainder = x % y

// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.

let name;
name = "Kristijan"
let lastName = "Karanfilovski"
console.log(`HELLO ${name} ${lastName}`)

// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console

let num1 = 3;
let num2 = 4;

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!

let num3 = 102;
if (num3 >= 100) {
    console.log(`The number is cool`)
}

// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.

let denars = 120
let euro = denars / 61.5


// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days

let day;
day = "Friday";
switch(day) {
    case "Monday":
    case "Wednesday":
    case "Saturday":
        console.log(`i am in SEDC`)    
        break;
    case "Tuesday":
    case "Thursday":
    case "Friday":
    case "Sunday":
        console.log(`i am free`)
        break;
    default:
        console.log(`no such day`)
}

// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Nikola Trajan Dejan
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?
// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100

let numArr = [1, 2, 102, 108, 5, 6];
let strArr = ["Kristijan", "SEDC", "Chelsea"];
console.log(numArr[0], strArr[0]);
console.log(numArr, strArr);
numArr[0] = 10;
strArr[0] = "Kiko";
numArr[99] = 20;
console.log(numArr)
// 99th element = undefined
numArr.push(5)
strArr.pop()
// 1000th element = undefined

for (let num of numArr) {
    if (num >= 100)
    console.log("Its a cool number")
}

// Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.

for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}

// Task 12
//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 

let numArray = [1, 2, 3, 10, 5, -6, -2];
function sumOfArr(array) {
    let result = 0;
    for (i = 0; i < array.length; i++) {
        result += array[i]
    }
    console.log(result) 
    return result
}
sumOfArr(numArray)

// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.

function positiveNumberSum(array) {
    let result = 0;
    for (let num of array) {
        if (num > 0) {
            result += num
        }
    }
    console.log(result)
    return result;
}
positiveNumberSum(numArray)

// Task 14
//Write javascript program that will take the items from a given array 
//and make new aray with the same items in revers order.

let randomArray = [1, 2, 3, "sedc", null]
function reversedArray (array) {
    let reversedArray = [];
    reversedArray = array.reverse()
    console.log(reversedArray)
    return reversedArray;
}
reversedArray(randomArray)

// Task 15
//Write javascript program that will find the average value 
//from the all the item values in the given array.

let averageArray = [2,4,6,8]
function averageValue (array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    let average = sum / array.length;
    console.log(average)
    return average
}
averageValue(averageArray)

// Task 16
//Write a function that prints your name in the console

function printName(name) {
    console.log(name)
}
printName("Kristijan")

// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"

function greeting(name) {
    console.log(`Hello ${name}`)
    return `Hello ${name}`
}
greeting("kristijan")

// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two

function sumOfTwoNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(result)
    return(result)
}
sumOfTwoNumbers(2,3)

// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even

function oddOrEvenNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`)
        return `${number} is even.`
    } else {
        console.log(`${number} is odd.`)
        return `${number} is odd.`
    }
}
oddOrEvenNumber(2)
oddOrEvenNumber(3)

// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even

let numArr2 = [1,2,3,4,5,6,7,8,10]
function totalEvenNumbers(array) {
    let evenNumbersCounter = 0;
    for (let num of array) {
        if (num % 2 === 0){
            evenNumbersCounter += 1
        }
    }
    console.log(evenNumbersCounter)
    return evenNumbersCounter;
}

totalEvenNumbers(numArr2)

// Task 21
//Write an HTML h1 element and select it in javascript by id

let h1Element = document.getElementById("task21-h1")
h1Element.innerText += "task21"

// Task 22
//Write two p elements and select them by class

let paragraphs = document.getElementsByClassName("task22")
paragraphs[0].innerText += "task 22 paragraph 1"
paragraphs[1].innerText += "task 22 paragraph 2"

// Task 23
//Write two h3 elements and select the first one by tag name

let firsth3Element = document.querySelector("h3");
firsth3Element.innerText += `task 23`
document.getElementsByTagName("h3")[0].innerText += `\ntask 23 first h3 second way`;

// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element 
//Hint: You must select the div element and try to find p from there

document.querySelector('div').lastElementChild.innerText += `task 24 last paragraph in the div`

// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript

document.getElementById('task25-h1').innerText = `changed text`

// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript

for (i = 0; i < 5; i++){
    let list = document.createElement('li')
    document.querySelector('ul').appendChild(list);
    list.innerText += `list item ${i + 1}`
}

