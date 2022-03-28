let updateDisplay = (e) => {
  let currentDisplay;
  if (result == undefined && defaultState) {
    // Ignore "0" if no other number was pressed
    if (e.target.value === "0") {
      display.innerText = "0";
      return;
    }
    currentDisplay = ``;
  } else {
    currentDisplay = `${display.innerText}`;
  }
  defaultState = false;
  display.innerText = `${currentDisplay}${e.target.value}`;
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
const signButton = document.getElementById("sign");
const decimalPointButton = document.getElementById("point");
const exponentButton = document.getElementById("exponent");
const sqrootButton = document.getElementById("sqroot");

for (const button of numberButtons) {
  button.addEventListener("click", updateDisplay);
}

const reset = () => {
  display.innerText = "0";
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

const exponent = () => {
  num1 = getCurrentDisplay();
  operation = "**";
  defaultState = true;
}

const sqroot = () => {
  num1 = getCurrentDisplay();
  operation = "sqroot"
  defaultState = true;
}

const getCurrentDisplay = () => {
  return parseFloat(display.innerText);
};

const updateFinalResult = (val) => {
  if (val === undefined) return;
  if (val === Infinity) {
    display.innerText = "ERROR";
    num1 = undefined;
  } else {
    display.innerText = result;
    num1 = result;
  }
  (num2 = undefined), (operation = undefined), (result = undefined);
  defaultState = true;
};

const evaluate = () => {
  num2 = getCurrentDisplay();
  result = operate(num1, num2, operation);
  updateFinalResult(result);
};

const changeSign = () => {
  let current = display.innerText;
  if (current === "0") return;
  if (current.startsWith("-")) {
    display.innerText = current.slice(1);
  } else {
    display.innerText = `-${current}`;
  }
};

const decimalPoint = () => {
  let currentDisplay = display.innerText;

  if (currentDisplay.includes(".")) {
    return;
  }
  display.innerText += ".";
  defaultState = false;
}

addButton.addEventListener("click", add);
subButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
equalsButton.addEventListener("click", evaluate);
signButton.addEventListener("click", changeSign);
decimalPointButton.addEventListener("click", decimalPoint);
exponentButton.addEventListener("click", exponent)
sqrootButton.addEventListener("click", sqroot);

function operate (num1, num2, op) {
  if ([...arguments].some(arg => arg === undefined)) return;

  let mathResult;
  switch (op) {
    case "+":
      mathResult = num1 + num2;
      break;
    case "-":
      mathResult = num1 - num2;
      break;
    case "*":
      mathResult = num1 * num2;
      break;
    case "/":
      mathResult = num1 / num2;
      break;
    case "**":
      mathResult = num1 ** num2;
      break;
    case "sqroot":
      mathResult = Math.sqrt(num1);
      break;
  }
  if (!Number.isInteger(mathResult)) return parseFloat(mathResult.toPrecision(8));
  return mathResult;
}