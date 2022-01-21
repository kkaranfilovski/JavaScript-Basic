// HOMEWORK PART 1
// CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

// You must use JQuery to complete the task


// Resenie so promenlivi

// let input = $('#input')
// let button = $('#btn')

// button.on('click', function() {
//     $('h1').last().text(`Hello there ${input.val()}!`)
// })


// Resenie samo so JQuery bez promenlivi

$('#btn').on('click', function() {
    if ($('#input').val() == '') {
        alert('Enter a name')
    } else {
    $('h1').last().text(`Hello there ${$('#input').val()} !`)
    }
})


