const calc = document.querySelector('#calculator');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const calculate = document.querySelector('#calculate');
const display = document.querySelector('#display');

let operator;
let firstNumber;
let secondNumber;
let currentDisplay = "";

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
    currentDisplay = text;
}

function addToDisplay(element) {
    currentDisplay += element.target.innerText;
    display.innerText = currentDisplay;
    console.log(currentDisplay)
}

numberButtons.forEach(button => button.addEventListener('click', addToDisplay));
