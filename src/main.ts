// Code for Theme Changes
const darkMode = document.querySelector<HTMLButtonElement>(
  ".aside__button--dark"
);
const funMode = document.querySelector<HTMLButtonElement>(
  ".aside__button--fun"
);

if (!darkMode || !funMode) {
  throw new Error("Does not exist");
}

const toggleLightMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
};

const toggleFunMode = () => {
  const body = document.body;
  body.classList.toggle("fun-mode");
};
darkMode.addEventListener("click", toggleLightMode);
funMode.addEventListener("click", toggleFunMode);

// Functionality for Calculator

const result = document.querySelector<HTMLInputElement>(".article__result");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(
  ".article__button--operator"
);
const numButtons = document.querySelectorAll<HTMLButtonElement>(
  ".article__button--num"
);
const clearButton = document.querySelector<HTMLButtonElement>(
  ".article__button--clear"
);
const delButton = document.querySelector<HTMLButtonElement>(
  ".article__button--delete"
);
const decimalButton = document.querySelector<HTMLButtonElement>(
  ".article__button--decimal"
);
const bracketButtons = document.querySelectorAll<HTMLButtonElement>(
  ".article__button--bracket"
);
const ansButton = document.querySelector<HTMLButtonElement>(
  ".article__button--ans"
);
const convertButton = document.querySelector<HTMLButtonElement>(
  ".article__button--convert"
);
const equalButton = document.querySelector<HTMLButtonElement>(
  ".article__button--equal"
);
const piButton = document.querySelector<HTMLButtonElement>(
  ".article__button--pi"
);
const squareButton = document.querySelector<HTMLButtonElement>(
  ".article__button--square"
);
const rootButton = document.querySelector<HTMLButtonElement>(
  ".article__button--root"
);
const percentButton = document.querySelector<HTMLButtonElement>(
  ".article__button--percent"
);

if (
  !result ||
  !clearButton ||
  !delButton ||
  !decimalButton ||
  !ansButton ||
  !equalButton ||
  !squareButton ||
  !rootButton ||
  !percentButton
) {
  throw new Error("Results not found");
}
if (
  operatorButtons.length === 0 ||
  numButtons.length === 0 ||
  bracketButtons.length === 0
) {
  throw new Error("Issues with selector");
}

let input: string = "";
let operator: string = "";
let results: number | null = null;
let prevNum: number | null = null;

const handleOperatorButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const operatorButtonValue = clickedButton.textContent;
  return (result.value += operatorButtonValue);
};

const handleNumButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const numButtonValue = clickedButton.textContent;
  return (result.value += numButtonValue);
};

const handleBracketButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const bracketButtonValue = clickedButton.textContent;
  return (result.value += bracketButtonValue);
};

const handleClearButton = () => {
  return (result.value = " ");
};

const handleDelButton = () => {
  result.value = result.value.slice(0, -1);
};

const handleDecimalButton = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const decimalButtonValue = clickedButton.textContent;
  return (result.value += decimalButtonValue);
};

const handlePiButton = () => {
  const piButtonValue = Math.PI.toString();
  result.value += piButtonValue;
};

const handleSquareButton = () => {
  const currentValue = parseFloat(result.value);
  const squared = currentValue * 2;
  result.value = squared.toString();
};

const handleRootButton = () => {
  const currentValue = parseFloat(result.value);
  const root = Math.sqrt(currentValue);
  result.value = root.toString();
};

const handlePercentButton = () => {
  const currentValue = parseFloat(result.value);
  const percent = currentValue / 100;
  result.value = percent.toString();
};
percentButton.addEventListener("click", handlePercentButton);

const handleEqualButton = () => {
  const expression = result.value;
  const matches = expression.match(/([+\-x÷])\s*([\d.]+)/);
  if (!matches) {
    result.value = "Error: Incomplete expression";
    return;
  }

  const operator = matches[1];
  const num1 = parseFloat(result.value.substr(0, matches.index));
  const num2 = parseFloat(matches[2]);

  let calculatedResult: number;
  switch (operator) {
    case "+":
      calculatedResult = num1 + num2;
      break;
    case "-":
      calculatedResult = num1 - num2;
      break;
    case "x":
      calculatedResult = num1 * num2;
      break;
    case "÷":
      if (num2 === 0) {
        result.value = "Error: Division by zero";
        return;
      }
      calculatedResult = num1 / num2;
      break;
    default:
      result.value = "Error: Invalid operator";
      return;
  }
  result.value = calculatedResult.toString();
  prevNum = calculatedResult;
};
const handleAnsButton = () => {
  if (prevNum !== null) {
    result.value += prevNum.toString();
  }
};

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorButtons);
});
equalButton.addEventListener("click", handleEqualButton);
ansButton.addEventListener("click", handleAnsButton);
piButton?.addEventListener("click", handlePiButton);
decimalButton.addEventListener("click", handleDecimalButton);
delButton.addEventListener("click", handleDelButton);
clearButton.addEventListener("click", handleClearButton);
bracketButtons.forEach((button) => {
  button.addEventListener("click", handleBracketButtons);
});
numButtons.forEach((button) => {
  button.addEventListener("click", handleNumButtons);
});
squareButton.addEventListener("click", handleSquareButton);
rootButton.addEventListener("click", handleRootButton);

