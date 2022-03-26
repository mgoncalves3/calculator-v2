let updateDisplay = (e) => {
  let currentDisplay;
  if (result == undefined && defaultState) {
    if (e.target.value === "0") {
      display.textContent = "0";
      return;
    }
    currentDisplay = ``;
  } else {
    currentDisplay = `${display.textContent}`;
  }
  defaultState = false;
  display.textContent = `${currentDisplay}${e.target.value}`;
};

let defaultState = true;

const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const numberButtons = document.getElementsByClassName("number");
const addButton = document.getElementById("add");
const subButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");

for (const button of numberButtons) {
  button.addEventListener("click", updateDisplay);
}

const reset = () => {
  display.textContent = "0";
  (num1 = undefined),
  (num2 = undefined),
  (operation = undefined),
  (result = undefined);
  defaultState = true;
};

clearButton.addEventListener("click", reset);

let num1;
let operation;
let num2;
let result;

// Operations
const add = () => {
  num1 = getCurrentDisplay();
  operation = "+";
  defaultState = true;
};

const subtract = () => {
  num1 = getCurrentDisplay();
  operation = "-";
  defaultState = true;
};

const multiply = () => {
  num1 = getCurrentDisplay();
  operation = "*";
  defaultState = true;
};

const divide = () => {
  num1 = getCurrentDisplay();
  operation = "/";
  defaultState = true;
};

const getCurrentDisplay = () => {
  return parseInt(display.textContent);
};

const updateFinalResult = () => {
  if (result === Infinity) {
    display.textContent = "ERROR";
    num1 = undefined;
  } else {
    display.textContent = result;
    num1 = result;
  }
  (num2 = undefined), (operation = undefined), (result = undefined);
  defaultState = true;
};

const evaluate = () => {
  num2 = getCurrentDisplay();
  switch (operation) {
    case "+":
      result = num1 + num2;
      updateFinalResult();
      break;
    case "-":
      result = num1 - num2;
      updateFinalResult();
      break;
    case "*":
      result = num1 * num2;
      updateFinalResult();
      break;
    case "/":
      result = num1 / num2;
      updateFinalResult();
      break;
  }
};

addButton.addEventListener("click", add);
subButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
equalsButton.addEventListener("click", evaluate);