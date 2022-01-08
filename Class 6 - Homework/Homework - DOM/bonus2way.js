let recipeName = document.getElementById("name")
let listDiv = document.getElementById("list")
let tableDiv = document.getElementById("table")

let inputName = prompt("Enter the name of the recipe:")

function recipe(name) {

    while (name === "" || name === null) {
        name = prompt("Enter the name of the recipe:")
    }

    recipeName.innerHTML += `<h2> <i> Recipe: ${name} </i> </h2>`

    let input = parseInt(prompt("How many ingredients do we need for the recipe?"))
    while (isNaN(input) || input === null || input === "") {
        input = prompt("Enter a valid number:")
    }

    listDiv.innerHTML += `<h2> Ingredients in list </h2>`
    let list = document.createElement("ul")
    listDiv.appendChild(list)
    
    tableDiv.innerHTML += `<h2> Ingredients in table </h2>`
    let table = document.createElement("table")
    let tableBody = document.createElement("tbody")
    tableDiv.appendChild(table)
    table.appendChild(tableBody)
    table.setAttribute("border", "2")
    table.setAttribute("width", "200")

    let ingredients = [];

    for (let i = 0; i < input; i++) {
        
        let ingredientsInput = prompt(`Enter ingredient:`);
        while (ingredientsInput === "" || ingredientsInput === null) {
            ingredientsInput = prompt(`Enter ingredient:`);
        }

        ingredients.push(ingredientsInput);

        let listItem = document.createElement("li")
        list.appendChild(listItem)
        listItem.innerHTML += `${ingredients[i]}`

        let tableRow = document.createElement("tr")
        tableBody.appendChild(tableRow);
        let tableData = document.createElement("td")
        tableRow.appendChild(tableData);

        tableData.innerHTML += `${ingredients[i]}`
    }

    return ingredients
}

let result = recipe(inputName)
console.log(result)