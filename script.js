
let firstNumber = "";
let secondNumber = "";
let currentOperation = null;
let shouldResetScreen = false;

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

numberButtons.forEach(button => {
    button.addEventListener("click", () => appendNumber(button.textContent));
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => setOperation(button.textContent));
});

equalButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);

function appendNumber(number) {
    if (display.textContent === "0" || shouldResetScreen) resetScreen();
    display.textContent += number;
}

function resetScreen() {
    display.textContent = "";
    shouldResetScreen = false;
}

function clear() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperation = null;
}

function setOperation(operator) {

    if (currentOperation !== null) evaluate();
    firstNumber = display.textContent;
    currentOperation = operator;
    shouldResetScreen = true;

}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return;
    secondNumber = display.textContent;
    display.textContent = operate(currentOperation, firstNumber, secondNumber);
    currentOperation = null;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;

    }
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("You can't divide by 0!");
        return;
    }
    return a / b;
}