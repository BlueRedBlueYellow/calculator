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
    return int1 + int2;
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

function operate(operation, int1, int2) {
    return operation(int1, int2)
}

function addToDisplay(element) {
    currentDisplay += element.target.innerText;
    display.innerText = currentDisplay;
    console.log(currentDisplay)
}

numberButtons.forEach(button => button.addEventListener('click', addToDisplay));
