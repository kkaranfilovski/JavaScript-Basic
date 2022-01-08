// BONUS HOMEWORK
// Create a recipe page from inputs

// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let recipeName = document.getElementById("name")
let recipeIngredients = document.getElementById("ingredients")
let tableStyle = document.getElementById("table")

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

    let ingredients = [];

    for (let i = 0; i < input; i++) {
        
        let ingredientsInput = prompt(`Enter ingredient:`);
        while (ingredientsInput === "" || ingredientsInput === null) {
            ingredientsInput = prompt(`Enter ingredient:`);
        }
        ingredients.push(ingredientsInput);

        recipeIngredients.innerHTML += `<li> ${ingredients[i]} </li>`
        tableStyle.innerHTML += `<tr> <td style="border: 1px solid black; width: 200px; text-align: center;"> ${ingredients[i]} </td> </tr>`
    }
    return ingredients
}

let result = recipe(inputName)
console.log(result)
