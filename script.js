const calc = document.querySelector('#calculator');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const calculateButton = document.querySelector('#calculate');
const display = document.querySelector('#display');

let operator;
let firstNumber;
let secondNumber;
let displayValue = "";

function add(int1, int2) {
    return parseInt(int1) + parseInt(int2);
}

function subtract(int1, int2) {
    return int1 - int2;
}

function multiply(int1, int2) {
    return int1 * int2;
}

function divide(int1, int2) {
    return int1 / int2;
}

function operate(operator, int1, int2) {
    switch (operator) {
        case "+":
            return add(int1, int2);
        case "-":
            return subtract(int1, int2);
        case "*":
            return multiply(int1, int2);
        case "/":
            return divide(int1, int2);
    }
}

function updateDisplay(text) {
    display.innerText = text;
    displayValue = text;
}

function addDigit(element) {
    updateDisplay(displayValue += element.target.innerText);
}

function setOperator(element) {
    if (!firstNumber) {
        firstNumber = displayValue;
    } else if (!secondNumber) {
        calculate();
    }
    operator = element.target.innerText;
    displayValue = "";
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay("");
}

function calculate() {
    if (firstNumber && displayValue) {
        secondNumber = displayValue;
        updateDisplay(operate(operator, firstNumber, secondNumber));

        firstNumber = displayValue;
        secondNumber = "";
    }
}

numberButtons.forEach(button => button.addEventListener('click', addDigit));
operatorButtons.forEach(button => button.addEventListener('click', setOperator));
clearButton.addEventListener('click', clear);
calculateButton.addEventListener('click', calculate);