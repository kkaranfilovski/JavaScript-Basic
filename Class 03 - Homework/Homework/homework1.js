// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

function isType(type) {
    return typeof(type)
}

let obj = isType(null)
console.log(obj)

let blean = isType(2 > 1)
console.log(blean)

let num = isType(8)
console.log(num)

let str = isType("")
console.log(str)

let undef = isType ()
console.log (undef)



