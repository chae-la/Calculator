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

const result = document.querySelector<HTMLInputElement>(".article__result");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(".article__button--operator");
const numButtons = document.querySelectorAll<HTMLButtonElement>(".article__button--num");

if (!result) {
  throw new Error("Results not found");
}
if (operatorButtons.length === 0 || numButtons.length === 0) {
  throw new Error("Issues with selector");
} 

const handleOperatorButtons = (event:Event) => {
    const clickedButton = event.target as HTMLButtonElement;
    const operatorButtonValue = clickedButton.textContent;
    result.value = operatorButtonValue;
}
operatorButtons.addEventListener("click", handleOperatorButtons);
