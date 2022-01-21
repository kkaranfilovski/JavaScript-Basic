// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

function Book(title, author, readingStatus) {
    this.bookTitle = title,
    this.bookAuthor = author,
    this.readingStatus = readingStatus,

    this.returnInfo = function () {
        if (readingStatus === true) {
            document.getElementById('result').innerText = `Already read '${this.bookTitle}' by ${this.bookAuthor}`
        } else if (readingStatus === false) {
            document.getElementById('result').innerText = `You still need to read '${this.bookTitle}' by ${this.bookAuthor}`
        }
    }
}

// potrebni inputi za vnes na nova kniga
let bookInput = document.getElementById('bookName')
let authorInput = document.getElementById('bookAuthor')
let isRead = document.getElementById('isRead')
let button = document.getElementById('addBook')
let readingStatus = false;

let valueIndex = 5;
let mainDiv =document.getElementById('main')

// inputite na vnesenite knigi 
let inputs = document.getElementsByName('book')
let inputsArray = Array.from(inputs)
console.log(inputsArray)

// funckija za koga ke se odbere nekoja kniga da go vrati rezultatot dali e procitana ili ne
let checkBookStatus = function() {
    for (let i = 0; i < inputsArray.length; i++) {
        inputsArray[i].addEventListener('click', function (){
            books[i].returnInfo()
    })
    }  
}

checkBookStatus()

// niza so predefinirani knigi
let books = [ 
    new Book("The Alchemist", "Paulo Coelho", true), 
    new Book("The Four Agreements", "James Altucher", false), 
    new Book("Think and Grow Rich", "Napoleon Hill", true), 
    new Book("Hustle: The Power to Charge Your Life with Money, Meaning, and Momentum", "Neil Patel", true), 
    new Book("Tuesdays with Morrie", "Mitch Albom", false), 
    new Book("Man's Search for Meaning", "Victor E. Fankl", true) 
]

// eventListener za da go menja readingStatus vo true/false vo zavisnost od toa dali e e selektiran checkboxot
isRead.addEventListener('change', function() {
    if (isRead.value === 'false') {
        isRead.setAttribute('value', 'true')
        readingStatus = true;
    } else if (isRead.value === 'true') {
        isRead.setAttribute('value', 'false')
        readingStatus = false;
    }
})

// eventListener na koj:
// 1. se pravi nov objekt Book so vnesenite podatoci vo inputite.
// 2. se sozdava nov input i label od vnesenite podatoci vo inputite so novata Kniga.

button.addEventListener('click', function(){

    if (bookInput.value == "" || authorInput.value == "") {
        alert("Enter Book/Author names")
    } else if (parseInt(authorInput.value) == Number(authorInput.value)) {
        alert('Enter valid author name')
    } else {
    let addBook = new Book(bookInput.value, authorInput.value, readingStatus)
    books.push(addBook)
    console.log(books)
    valueIndex++

    let br = document.createElement('br')
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    
    newLabel.setAttribute('for', 'book')
    newLabel.innerText = ` "${bookInput.value}" by ${authorInput.value}`
   
    newInput.setAttribute('type', 'radio')
    newInput.setAttribute('name', 'book')
    newInput.setAttribute('value', Number(valueIndex))
   
    mainDiv.appendChild(br)
    mainDiv.appendChild(newInput)
    mainDiv.appendChild(newLabel)
    
    inputsArray.push(newInput)
    console.log(inputsArray)

    checkBookStatus()
    }
})



    
