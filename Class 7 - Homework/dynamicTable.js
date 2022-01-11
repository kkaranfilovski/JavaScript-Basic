/* CREATE A DYNAMIC TABLE
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

function createTable(rows, columns) {

    let tableDiv = document.getElementById("tableDiv")
    let table = document.createElement("table")
    table.setAttribute("border", "1")
    table.setAttribute("border-collapse", "collapse")
    let tableBody = document.createElement("tbody")
    tableDiv.appendChild(table)
    table.appendChild(tableBody)

    for (let i=1; i <= rows; i++) {
        let tableRow = document.createElement("tr")
        tableBody.appendChild(tableRow)

        for (let j = 1; j <= columns; j++) {
            let tableData = document.createElement("td")
            tableData.innerHTML += `row ${i} column ${j}`
            tableRow.appendChild(tableData)
        }
    }
}

let button = document.getElementById("createTable")
let rowsInput = document.getElementById("rows")
let columnsInput = document.getElementById("columns")
let reset = document.getElementById("reset")

button.addEventListener('click', function() {
    let rowsValue = parseInt(rowsInput.value);
    let columnsValue = parseInt(columnsInput.value)

    if (Number.isNaN(rowsValue) || Number.isNaN(columnsValue) || rowsValue < 0 || columnsValue < 0) {
        alert("Enter valid numbers")
    } else {
    createTable(rowsValue, columnsValue)
    rowsInput.value = "";
    columnsInput.value = "";
    }

})

reset.addEventListener('click', function() {
    window.location.reload();
})