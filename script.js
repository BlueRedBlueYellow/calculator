const calc = document.querySelector('#calculator');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const backspaceButton = document.querySelector('.backspace');
const calculateButton = document.querySelector('.calculate');
const display = document.querySelector('#display');

let operator;
let firstNumber;
let secondNumber;
let displayValue = "";

function add(addend1, addend2) {
    return parseFloat(addend1) + parseFloat(addend2);
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(factor1, factor2) {
    return factor1 * factor2;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

function remainder(dividend, divisor) {
    return dividend % divisor;
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
        
        if (operator === "/" && secondNumber == 0) {
            updateDisplay("...no.");
            displayValue = "";
        } else {
            updateDisplay(operate(operator, firstNumber, secondNumber));
        }

        firstNumber = displayValue;
        secondNumber = "";
    }
}

digitButtons.forEach(button => button.addEventListener('click', addDigit));
operatorButtons.forEach(button => button.addEventListener('click', setOperator));
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
calculateButton.addEventListener('click', calculate);