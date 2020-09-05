import { addTwoNumbers, subTwoNumbers, multTwoNumbers, divTwoNumbers } from "./mathUtils.js";


const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const sumSpan = document.getElementById("sum-span");
// initialize state
export function handleSumClick() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
    const sum = addTwoNumbers(value1, value2);
    sumSpan.textContent = sum;
}


const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subSpan = document.getElementById("sub-span");
// initialize state
export function handleSubClick() {
    const value1 = subInput1.valueAsNumber;
    const value2 = subInput2.valueAsNumber;
    const sub = subTwoNumbers(value1, value2);
    subSpan.textContent = sub;
}


const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multSpan = document.getElementById("mult-span");
// initialize state
export function handleMultClick() {
    const value1 = multInput1.valueAsNumber;
    const value2 = multInput2.valueAsNumber;
    const mult = multTwoNumbers(value1, value2);
    multSpan.textContent = mult;
}


const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divSpan = document.getElementById("div-span");
// initialize state
export function handleDivClick() {
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;
    const div = divTwoNumbers(value1, value2);
    divSpan.textContent = div;
}






























// set event listeners to update state and DOM
// sumButton.addEventListener("click", () => {
//      const value1 = sumInput1.valueAsNumber;
//      const value2 = sumInput2.valueAsNumber;
// console.log()
//      const sum = value1 + value2;
//      sumSpan.textContent = sum;
// });


// const subInput1 = document.getElementById("sub-input-1");
// const subInput2 = document.getElementById("sub-input-2");
// const subButton = document.getElementById("sub-button");
// const subSpan = document.getElementById("sub-span");
// console.log(subInput1)
// // initialize state

// // set event listeners to update state and DOM
// subButton.addEventListener("click", () => {
//      const value1 = subInput1.valueAsNumber;
//      const value2 = subInput2.valueAsNumber;
// console.log()
//      const sub = value1 - value2;
//      subSpan.textContent = sub
// });


// const multInput1 = document.getElementById("mult-input-1");
// const multInput2 = document.getElementById("mult-input-2");
// const multButton = document.getElementById("mult-button");
// const multSpan = document.getElementById("mult-span");
// // initialize state
// console.log(multInput1)

// // set event listeners to update state and DOM
// multButton.addEventListener("click", () => {
//      const value1 = multInput1.valueAsNumber;
//      const value2 = multInput2.valueAsNumber;
// console.log()
//      const mult = value1 * value2;
//      multSpan.textContent = mult;
// });


// const divInput1 = document.getElementById("div-input-1");
// const divInput2 = document.getElementById("div-input-2");
// const divButton = document.getElementById("div-button");
// const divSpan = document.getElementById("div-span");
// // initialize state

// // set event listeners to update state and DOM
// divButton.addEventListener("click", () => {
//      const value1 = divInput1.valueAsNumber;
//      const value2 = divInput2.valueAsNumber;
// console.log()
//      const div = value1 / value2;
//      divSpan.textContent = div;
// });

