let updateDisplay = (e) => {
  let currentDisplay;
  if (defaultState) {
    currentDisplay = ``;
  } else {
    currentDisplay = `${display.textContent}`;
  }
  defaultState = false;
  let nextDisplay = `${currentDisplay}${e.target.value}`;
  display.textContent = nextDisplay;
};

let defaultState = true;

const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const numberButtons = document.getElementsByClassName("number");
const addButton = document.getElementById("add");
const equalsButton = document.getElementById("equals");

for (const button of numberButtons) {
  button.addEventListener("click", updateDisplay);
}

const reset = () => {
  display.textContent = "0";
  num1 = "", num2 = "", operation = "", result = "";
  defaultState = true;
};

clearButton.addEventListener("click", reset);

let num1 = "";
let operation = "";
let num2 = "";
let result = "";

// Operations
const add = () => {
  num1 = parseInt(getCurrentDisplay());
  operation = "+";
  defaultState = true;
};

const subtract = () => {
  num1 = parseInt(getCurrentDisplay());
  operation = "-";
  defaultState = true;
};

const multiply = () => {
  num1 = parseInt(getCurrentDisplay());
  operation = "*";
  defaultState = true;
};

const divide = () => {
  num1 = parseInt(getCurrentDisplay());
  operation = "/";
  defaultState = true;
};

const getCurrentDisplay = () => {
  return display.textContent;
};

const updateFinalResult = (val = result) => {
  display.textContent = `${val}`;
  defaultState = true;
};

const evaluate = () => {
  num2 = parseInt(getCurrentDisplay());
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
equalsButton.addEventListener("click", evaluate);