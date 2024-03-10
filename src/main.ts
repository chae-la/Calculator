//togglemode for different themes.

// need user to press on buttons
// const multiplyNum = (num1: number, num2: number): number => {
//   return num1 * num2;
// };

// console.log(multiplyNum(2, 2));
// const result = multiplyNum(2,2) // storing the result
//store is in my ANS button.

// const clickButton = document.querySelectorAll<HTMLButtonElement>(".article__button");
// clickButton.forEach(button => {
//   button.addEventListener("click", )
// })

//have to handle user clicks
//event listeners
//functions for operations

//This allows for multiple inputs.
// const addNum= (numArr: number[])=> {
//   let total = 0;
//   for (let index = 0; index < numArr.length; index++) {
//     total += numArr[index];
//   }
//   return total;
// }

// let nums = [3,5,6,4]
// const sum = addNum(nums);
// console.log(sum)

//need an if else? to do multiple operations in one?
// const calculate = (numArr: number[]) => {
//   let total = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     if ()

//   }
// }

// const handleClickButton = (event: Event) => {
//     const clickedButton = event.target as HTMLButtonElement;
//     const buttonValue = clickedButton.textContent;

//     if(buttonValue === "="){
//         result.value = eval(result.value) // change this
//     } else if (buttonValue === "C"){
//         result.value = " "
//     } else if (buttonValue === "DEL"){
//         result.value = result.value.slice(0,-1)
//     } else {
//         result.value += buttonValue;
//     }
// }
// buttons.forEach((button) => {
//     button.addEventListener("click", handleClickButton);
//   });

//   const calculate = (event:Event[]) => {
//     if(buttonNumValue === "+")
//   }

//change classes
//store num 1, operators, num 2,
const lightMode = document.querySelector<HTMLButtonElement>(".aside__button--light")
const funMode = document.querySelector<HTMLButtonElement>(".aside__button--fun")

if (!lightMode || !funMode){
  throw new Error ("Does not exist")
}

const toggleLightMode = () => {
  const body = document.body;
  body.classList.toggle("light-mode")
}
lightMode.addEventListener("click", toggleLightMode)

const toggleFunMode = () => {
  const body = document.body;
  body.classList.toggle("fun-mode")
}

funMode.addEventListener("click", toggleFunMode)

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

if (!result || !clearButton || !delButton || !decimalButton || !ansButton) {
  throw new Error("Results not found");
}
if (
  operatorButtons.length === 0 ||
  numButtons.length === 0 ||
  bracketButtons.length === 0
) {
  throw new Error("Issues with selector");
}

const handleOperatorButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const operatorButtonValue = clickedButton.textContent;
  return (result.value += operatorButtonValue);
};

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorButtons);
});

const handleNumButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const numButtonValue = clickedButton.textContent;
  return (result.value += numButtonValue);
};
numButtons.forEach((button) => {
  button.addEventListener("click", handleNumButtons);
});

const handleBracketButtons = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const bracketButtonValue = clickedButton.textContent;
  return (result.value += bracketButtonValue);
};
bracketButtons.forEach((button) => {
  button.addEventListener("click", handleBracketButtons);
});

const handleClearButton = () => {
  return (result.value = " ");
};

clearButton.addEventListener("click", handleClearButton);

const handleDelButton = () => {
  result.value = result.value.slice(0, -1);
};
delButton.addEventListener("click", handleDelButton);

const handleDecimalButton = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const decimalButtonValue = clickedButton.textContent;
  return (result.value += decimalButtonValue);
};
decimalButton.addEventListener("click", handleDecimalButton);

// add event handlers for ans and convert
