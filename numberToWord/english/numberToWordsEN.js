let oneToNine = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let TwentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function tens(num) {
      if (num < 10) {
        return oneToNine[num]
    } else if (num >= 10 && num < 20) {
        return tenToNineteen[num - 10]   
    } else if (num % 10 === 0) {
        return TwentyToNinety[Math.floor(num / 10) - 2]
    } else {
        return TwentyToNinety[Math.floor(num / 10) - 2] + "-" + oneToNine[(num % 10)]
    }
}

function hundreds(num) {
     if (num > 99) {
        return tens(Math.floor(num / 100)) + " " + "hundred" + " " + tens(num % 100)
    } else {
        return tens(num)
    }
}

function thousands(num) {
    if (num > 999) {
        return hundreds(Math.floor(num / 1000)) + " " + "thousand" + " " + hundreds(num % 1000)
    } else {
        return hundreds(num)
    }
}

function millions(num) {
    if (num > 999999) {
        return thousands(Math.floor(num / 1000000)) + " " + "milion" + " " + thousands(num % 1000000)
    } else {
        return thousands(num)
    }
}

function billions(num) {
    if (num > 999999999) {
        return millions(Math.floor(num / 1000000000)) + " " + "billion" + " " + millions(num % 1000000000)
    } else {
        return millions(num)
    }
}

function trillions(num) {
    if (num > 999999999999) {
        return billions(Math.floor(num / 1000000000000)) + " " + "trillion" + " " + billions(Math.floor(num % 1000000000000))
    } else {
        return billions(num)
    }
}

function numToWords(num) {

    if (Number.isNaN(num) || num >= 1000000000000000) {
        return "Enter valid number"
    }
    if (num == 0) {
        return 'zero' 
    } else if (num < 0) {
        return "minus" + " " + trillions(num * -1)
    } else {
        return trillions(num) 
    }
}

let input = document.getElementById("number")
let button = document.getElementById("convert")
let result = document.getElementById("result")
let reset = document.getElementById("reset")

button.addEventListener('click', function() {
    let number = parseInt(input.value);
    let word = numToWords(number)
    result.innerHTML = word
})

reset.addEventListener('click', function() {
    window.location.reload();
})