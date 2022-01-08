// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

function tellStory(club, country, stadium) {
    
    let i = 0;
    let story = "";

    while (i < club.length && i < country.length && i < stadium.length) {

        story += `${club[i]} is the best club from ${country[i]}. Their stadium is called ${stadium[i]}. \n`
        i += 1
    }

    return story
}

let club = ["Chelsea", "Real Madrid", "Juventus"];
let country = ["England", "Spain", "Italy"];
let stadium = ["Stamford bridge", "Santiago Bernabeu", "Allianz Stadium"]

let result = tellStory(club, country, stadium)
console.log(result)
alert(result)

