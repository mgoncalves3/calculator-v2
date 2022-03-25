const numberButtons = document.getElementsByClassName("number");

const display = document.getElementById("display");
console.log(display);

let updateVisor = (e) => {
  let currentDisplay = `${display.textContent}`;
  let nextDisplay = `${currentDisplay}${e.target.value}`
  display.textContent = nextDisplay;
}

for (const button of numberButtons) {
  button.addEventListener("click", updateVisor);
}