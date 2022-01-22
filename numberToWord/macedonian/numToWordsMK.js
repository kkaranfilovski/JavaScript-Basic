let edenDoDevet = ['', 'еден', 'два', 'три', 'четири', 'пет', 'шест', 'седум', 'осум', 'девет'];
let desetDoDevetnaeset = ['десет', 'единаесет', 'дванаесет', 'тринаесет', 'четиринаесет', 'петнаесет', 'шестнаесет', 'седумнаесет', 'осумнаесет', 'деветнаесет'];
let dvaesetDoDevedeset = ['', '', 'дваесет', 'триесет', 'четириесет', 'педесет', 'шеесет', 'седумдесет', 'осумдесет', 'деведесет'];
let stoDoDevetstotini = ['', 'сто', 'двесте', 'триста', 'четиристотини', 'петстотини', 'шестотини', 'седумстотини', 'осумстотини', 'деветстотини']

function desetki(num) {
    if (num < 10) {
        return edenDoDevet[num]
    } else if (num >= 10 && num < 20 ) {
        return desetDoDevetnaeset[num - 10];
    } else if (num % 10 == 0) {
        return dvaesetDoDevedeset[num / 10]
    } else {
        return dvaesetDoDevedeset[Math.floor(num / 10)] + ` и ` + edenDoDevet[num % 10]
    }
}

function stotki(num) {
    if (num > 99) {
        return stoDoDevetstotini[Math.floor(num / 100)] + ` ` + desetki(Math.floor(num % 100))
    } else {
        return desetki(num)
    }
}

function iljadarki(num) {  
    if (num == 1000) {
        return `една илјада`
    } else if (num > 1000 && num < 2000) {
        return  `илјада ` + stotki(Math.floor(num % 1000))
    } else if (num >= 2000 && num < 3000) {
        return `две илјади ` + stotki(Math.floor(num % 1000))
    } else if (num >= 3000) {
        return stotki(Math.floor(num / 1000)) + ` илјади ` + stotki(Math.floor(num % 1000))
    } else {
        return stotki(num)
    }
}

function milioni(num) {
    if (num > 999999 && num < 2000000) {
        return iljadarki(Math.floor(num / 1000000)) + ` милион ` + iljadarki(Math.floor(num % 1000000))
    } else if (num >= 2000000) {
        return iljadarki(Math.floor(num / 1000000)) + ` милиони ` + iljadarki(Math.floor(num % 1000000))
    } else {
        return iljadarki(num)
    }
}

function bilioni(num) {
    if (num > 999999999 && num < 2000000000) {
        return milioni(Math.floor(num / 1000000000)) + ` билион ` + milioni(Math.floor(num % 1000000000))
    } else if (num >= 2000000000) {
        return milioni(Math.floor(num / 1000000000)) + ` билиони ` + milioni(Math.floor(num % 1000000000))
    } else {
        return milioni(num)
    }
}

function trilioni(num) {
    if (num > 999999999999 && num < 2000000000000) {
        return bilioni(Math.floor(num / 1000000000000)) + ` трилион ` + bilioni(Math.floor(num % 1000000000000))
    } else if (num >= 2000000000000) {
        return bilioni(Math.floor(num / 1000000000000)) + ` трилиони ` + bilioni(Math.floor(num % 1000000000000))
    } else {
        return bilioni(num)
    }
}

function brojVoTekst(num){

    if (Number.isNaN(num) || num >= 1000000000000000) {
        return "Внеси валиден број"
    } else if (num == 0) {
        return `нула`
    } else if (num < 0) {
        return `минус ${trilioni(num * -1)}`
    } else {
        return trilioni(num)
    }
}

let input = document.getElementById("number")
let button = document.getElementById("convert")
let result = document.getElementById("result")
let reset = document.getElementById("reset")

button.addEventListener('click', function() {
    let num = parseInt(input.value);
    let word = brojVoTekst(num)
    result.innerHTML = word
})

reset.addEventListener('click', function() {
    window.location.reload();
})
