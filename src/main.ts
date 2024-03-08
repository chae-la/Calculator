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

const result = document.querySelector<HTMLInputElement>(".article__result");
const buttons =
  document.querySelectorAll<HTMLButtonElement>(".article__button");

if (!result) {
  throw new Error("Results not found");
}
if (buttons.length === 0) {
  throw new Error("Issues with selector");
}

const handleClickButton = (event: Event) => {
  const clickedButton = event.target as HTMLButtonElement;
  const buttonValue = clickedButton.textContent;

  if (buttonValue) {
    result.value += buttonValue;
  }
};
buttons.forEach((button) => {
  button.addEventListener("click", handleClickButton);
});


const clickClearValue = (event:Event) => {
    result.value = " "
}

buttons[5].addEventListener("click",clickClearValue)


const clickDelValue = (event: Event) =>{
    result.value = result.value.slice(0,-4);
}
buttons[7].addEventListener("click", clickDelValue)


const clickEqualButton = (event: Event) => {
    result.value = eval(result.value);
}
buttons[24].addEventListener("click", clickEqualButton)

////////////Tidy code///////////////
// const handleClickButton = (event: Event) => {
//     const clickedButton = event.target as HTMLButtonElement;
//     const buttonValue = clickedButton.textContent;

//     if(buttonValue === "="){
//         result.value = calculate(result.value)
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

