/* Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */

let yearBornInput = prompt("To calculate your Chinese Zodiac sign please insert the year you are born (from 1900 - present): ")
console.log("Year Born: " , yearBornInput)

let parsedYearBornInput = parseInt(yearBornInput)
console.log(parsedYearBornInput)

if (!Number.isNaN(parsedYearBornInput) && parsedYearBornInput >= 1900 && parsedYearBornInput <= 2022) {
   
    if ((parsedYearBornInput - 4) % 12 === 0) {
        alert("Your Chinese Zodiac sign is Rat")
    } else if ((parsedYearBornInput - 4) % 12 === 1) {
        alert("Your Chinese Zodiac sign is Ox")
    } else if ((parsedYearBornInput - 4) % 12 === 2) {
        alert("Your Chinese Zodiac sign is Tiger")
    } else if ((parsedYearBornInput - 4) % 12 === 3) {
        alert("Your Chinese Zodiac sign is Rabbit")
    } else if ((parsedYearBornInput - 4) % 12 === 4) {
        alert("Your Chinese Zodiac sign is Dragon")
    } else if ((parsedYearBornInput - 4) % 12 === 5) {
        alert("Your Chinese Zodiac sign is Snake")
    } else if ((parsedYearBornInput - 4) % 12 === 6) {
        alert("Your Chinese Zodiac sign is Horse")
    } else if ((parsedYearBornInput - 4) % 12 === 7) {
        alert("Your Chinese Zodiac sign is Goat")
    } else if ((parsedYearBornInput - 4) % 12 === 8) {
        alert("Your Chinese Zodiac sign is Monkey")
    } else if ((parsedYearBornInput - 4) % 12 === 9) {
        alert("Your Chinese Zodiac sign is Rooster")
    } else if ((parsedYearBornInput - 4) % 12 === 10) {
        alert("Your Chinese Zodiac sign is Dog")
    } else if ((parsedYearBornInput - 4) % 12 === 11) {
        alert("Your Chinese Zodiac sign is Pig")
    }
        
} else {
    alert("Please insert a valid year (from 1900 to present)")
}
