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

let ChineseZodiac = (parsedYearBornInput - 4) % 12;

if (!Number.isNaN(parsedYearBornInput) && parsedYearBornInput >= 1900 && parsedYearBornInput <= 2022) {
   
    if (ChineseZodiac === 0) {
        alert("Your Chinese Zodiac sign is Rat")
    } else if (ChineseZodiac === 1) {
        alert("Your Chinese Zodiac sign is Ox")
    } else if (ChineseZodiac === 2) {
        alert("Your Chinese Zodiac sign is Tiger")
    } else if (ChineseZodiac === 3) {
        alert("Your Chinese Zodiac sign is Rabbit")
    } else if (ChineseZodiac === 4) {
        alert("Your Chinese Zodiac sign is Dragon")
    } else if (ChineseZodiac === 5) {
        alert("Your Chinese Zodiac sign is Snake")
    } else if (ChineseZodiac === 6) {
        alert("Your Chinese Zodiac sign is Horse")
    } else if (ChineseZodiac === 7) {
        alert("Your Chinese Zodiac sign is Goat")
    } else if (ChineseZodiac === 8) {
        alert("Your Chinese Zodiac sign is Monkey")
    } else if (ChineseZodiac === 9) {
        alert("Your Chinese Zodiac sign is Rooster")
    } else if (ChineseZodiac === 10) {
        alert("Your Chinese Zodiac sign is Dog")
    } else if (ChineseZodiac === 11) {
        alert("Your Chinese Zodiac sign is Pig")
    }
        
} else {
    alert("Please insert a valid year (from 1900 to present)")
}
