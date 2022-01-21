// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

function Animal(name, kind) {
    this.name = name,
    this.kind = kind,

    this.speak = function (words) {
        document.getElementById('message').innerText = `${name}, the ${kind} says: ${words}`
        console.log(`${name}, the ${kind} says ${words}`)
    }
}

let animalName = document.getElementById('name')
let animalKind = document.getElementById('kind')
let animalMessage = document.getElementById('speak')

document.getElementById('btn').addEventListener('click', function (){
    
    if (animalName.value == '' || animalKind.value == '' || animalMessage.value == '') {
        alert("Enter name/kind/message")
    } else if (parseInt(animalName.value) == Number(animalName.value) || parseInt(animalKind.value) == Number(animalKind.value)) {
        alert('Enter valid values')
    } else {
    let newAnimal = new Animal(animalName.value, animalKind.value)
    newAnimal.speak(animalMessage.value)

    animalName.value = ''
    animalKind.value = ''
    animalMessage.value = ''
    }

})
