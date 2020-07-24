const numbers = document.getElementsByName("numero");
const operations = document.getElementsByName("operacion");
const erase = document.getElementsByName("borrar")[0];
const same = document.getElementsByName("igual")[0];
var result = document.getElementById("input");
var opAnterior = "";
var opActual = "";
var operation = undefined;

numbers.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectNumber(boton.innerText);
    })
})

operations.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectOperation(boton.innerText);
    })
})

same.addEventListener("click", function () {
    calculate();
    update();
})

erase.addEventListener("click", function () {
        clear();
        update();
})

function selectNumber(number) {
    opActual = opActual.toString() + number.toString();
    update();
}

function selectOperation(op) {
    if(op === "")
        return "";
    else {
        calculate();
    }
    operation = op.toString();
    opAnterior = opActual;
    opActual = "";
}

function calculate() {
    var calculo;
    var actualNumber = parseFloat(opActual);
    var previousNumber = parseFloat(opAnterior);
    if(isNaN(actualNumber) || isNaN(previousNumber))
        return 0;
    else{
        switch (operation) {
            case "+":
                calculo = previousNumber + actualNumber;
                break;
            case "-":
                calculo = previousNumber - actualNumber;
                break;
            case "x":
                calculo = previousNumber * actualNumber;
                break;
            case "/":
                calculo = previousNumber / actualNumber;
                break;
            default:
                return 0;
        }
        opActual = calculo;
        operation = undefined;
        opAnterior = "";
    }
}

function clear() {
    opAnterior = "";
    opActual = "";
    operation = undefined;
}

function update() {
    result.value = opActual;
}

clear();