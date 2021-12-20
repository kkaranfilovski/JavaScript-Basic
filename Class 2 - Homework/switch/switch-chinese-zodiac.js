let yearBornInput = prompt("To calculate your Chinese Zodiac sign please insert the year you are born (from 1900 - present): ")
console.log("Year Born: " , yearBornInput)

let parsedYearBornInput = parseInt(yearBornInput)
console.log(parsedYearBornInput)

let ChineseZodiac = (parsedYearBornInput - 4) % 12;

if (!Number.isNaN(parsedYearBornInput) && parsedYearBornInput >= 1900 && parsedYearBornInput <= 2022) {
    
    switch (ChineseZodiac) {
        case 0: 
            alert("Your Chinese Zodiac sign is Rat")
            break;
        case 1: 
            alert("Your Chinese Zodiac sign is Ox")
            break;
        case 2: 
            alert("Your Chinese Zodiac sign is Tiger")
            break;
        case 3: 
            alert("Your Chinese Zodiac sign is Rabbit")
            break;
        case 4: 
            alert("Your Chinese Zodiac sign is Dragon")
            break;
        case 5: 
            alert("Your Chinese Zodiac sign is Snake")
            break;
        case 6: 
            alert("Your Chinese Zodiac sign is Horse")
            break;
        case 7: 
            alert("Your Chinese Zodiac sign is Goat")
            break;
        case 8: 
            alert("Your Chinese Zodiac sign is Monkey")
            break;
        case 9: 
            alert("Your Chinese Zodiac sign is Rooster")
            break;
        case 10: 
            alert("Your Chinese Zodiac sign is Dog")
            break;
        case 11: 
            alert("Your Chinese Zodiac sign is Pig")
            break;
    }
    
} else {
    alert("Please insert a valid year (from 1900 to present)")
}   