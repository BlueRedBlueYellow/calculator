const calc = document.querySelector('#calculator');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const calculateButton = document.querySelector('#calculate');
const display = document.querySelector('#display');

let operator;
let firstNumber;
let secondNumber;
let displayValue = "";

function add(int1, int2) {
    return parseFloat(int1) + parseFloat(int2);
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

function remainder(int1, int2) {
    return int1 % int2;
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
        case "%":
            return remainder(int1, int2);
    }
}

function updateDisplay(text) {
    display.innerText = text;
    displayValue = text;
}

function addDigit(element) {
    digit = element.target.innerText;
    if (digit === ".") {
        if (displayValue.includes(".")) {
            return;
        } else if (displayValue == "") {
            digit = "0."
        }
    }

    updateDisplay(displayValue += digit);
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

function backspace() {
    updateDisplay(displayValue.slice(0, -1));
}

function calculate() {
    if (firstNumber && displayValue) {
        secondNumber = displayValue;
        updateDisplay(operate(operator, firstNumber, secondNumber));

        firstNumber = displayValue;
        secondNumber = "";
    }
}

digitButtons.forEach(button => button.addEventListener('click', addDigit));
operatorButtons.forEach(button => button.addEventListener('click', setOperator));
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
calculateButton.addEventListener('click', calculate);