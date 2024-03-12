# Calculator

### Language(s) Used
1. Typescript: 5.2.2

### Dev Dependencies
1. SASS: 1.71.1
2. Vite: 5.1.4
3. typescript: 5.2.2

## Table of Contnets
* [Introduction](#introduction)
* [Calculator Preview](#calculator-preview)
* [Code Snippet](#code-snippet)
* [Setup](#setup)

## Introduction
The classic first project of any developer. This calculator has been built entirely in HTML, SCSS and Typescript and is compatible and responsive in most screen sizes. There are also different theme toggles, between light(default), dark, and "fun"**(color warning)**

## Calculator Preview
![An image of the calculator](/calculator-image.png "image of calculator")

## Features
- Basic functions of any calculator; addition, subtraction, division and multiplication
- Additional functions like square-root and squaring a number.
- Further functions, normally found in more scientific calculators; trigonometric functions

## Code Snippet
```const radianToDegree = (): number => {
  const radians = parseFloat(result.value);
  const degrees = radians * (Math.PI / 180);
  return degrees;
};

const handleSinButton = () => {
  const degree = radianToDegree();
  const sinValue = Math.sin(degree);
  result.value = sinValue.toString();
};```

In Typescript, the Math.sin, Math.cos and the Math.tan, generally accept radians as its parameters when called. Although radians is the accepted unit to use in pur mathematics and physics, degrees is easier to comprehend and use. 
## Setup
1. Clone this repository to your local machine.
2. Navigate to the "src" folder to find the Typescript, if changes are desired.
3. Open a new terminal and type "npm run dev"


