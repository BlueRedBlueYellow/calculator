const calc = document.querySelector('#calculator');
const calcButtons = document.querySelectorAll('button');
const display = document.querySelectorAll('#display');

let operator;
let firstNumber;
let secondNumber;
let currentDisplay;

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
