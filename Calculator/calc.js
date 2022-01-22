let display = document.getElementById("result")
let numbers = document.querySelectorAll(".number")
let operators = document.getElementsByClassName("operator")
let equal = document.getElementById("equal")
let clear = document.querySelector(".clear")

let nums = [];
let num1 = undefined;
let num2 = undefined;
let sign = undefined;
let signEqual = undefined;

function invalidInputReset() {
    display.innerText = 'Invalid input'
    sign = undefined;
    num1 = undefined;
    nums = [];
}

function result(operation) {
    display.innerText = +parseFloat(operation).toFixed(5)
    num1 = operation
    num2 = undefined;
    nums = [];
    sign = undefined;
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (event) {

        display.innerText += event.target.value
        nums.push(event.target.value)

        if (sign === undefined || num1 === undefined) {
            display.innerText = '';
            num1 = parseFloat(nums.join(''))
            display.innerText += num1;
            console.log("num1 =", num1)
        } else {
            num2 = parseFloat(nums.join(''))
            console.log("num2 =", num2)
            if (num1 !== undefined && num2 !== undefined) {
                signEqual = sign
                console.log("signEqual =", signEqual)
            }
        }
    })
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (event) {
        if (sign !== undefined) {
            display.innerText = display.innerText.slice(0, -1)
        }
        display.innerText += event.target.value
        sign = event.target.value
        console.log("sign =", sign)

        if (num2 !== undefined) {
            if (signEqual === '+') {
                num1 = num1 + num2
                num2 = undefined
                display.innerText = `${+parseFloat(num1).toFixed(5)}${sign}`
            } else if (signEqual === '-') {
                num1 = num1 - num2
                num2 = undefined
                display.innerText = `${+parseFloat(num1).toFixed(5)}${sign}`
            } else if (signEqual === '*') {
                num1 = num1 * num2
                num2 = undefined
                display.innerText = `${+parseFloat(num1).toFixed(5)}${sign}`
            } else if (signEqual === '/') {
                if (num2 === 0) {
                    display.innerText = `Cant divide with Zero`
                    sign = undefined;
                    num1 = undefined;
                    num2 = undefined;
                    nums = [];
                } else {
                    num1 = num1 / num2
                    num2 = undefined
                    display.innerText = `${+parseFloat(num1).toFixed(5)}${sign}`
                }
            }
        }
        nums = []
    })
}


equal.addEventListener('click', function () {

    if (sign === '+') {
        let sum = num1 + num2;

        if (num2 === undefined) {
            invalidInputReset()
        } else {
            result(sum)
            console.log("num1 =", num1)
        }

    } else if (sign === '-') {
        let difference = num1 - num2;

        if (num2 === undefined) {
            invalidInputReset()
        } else {
            result(difference)
            console.log("num1 =", num1)
        }

    } else if (sign === '*') {
        let multiply = num1 * num2;

        if (num2 === undefined) {
            invalidInputReset()
        } else {
            result(multiply)
            console.log("num1 =", num1)
        }

    } else if (sign === '/') {
        let divide = num1 / num2;

        if (num2 === undefined) {
            invalidInputReset()
        } else if (num2 === 0) {
            display.innerText = `Cant divide with Zero`
            sign = undefined;
            num1 = undefined;
            num2 = undefined;
            nums = [];
        } else {
            result(divide)
            console.log("num1 =", num1)
        }
    }
})


clear.addEventListener('click', function () {
    display.innerText = ''
    nums = [];
    num1 = undefined;
    num2 = undefined;
    sign = undefined;
})

