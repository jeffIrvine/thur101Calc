// import functions and grab DOM elements
const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const sumButton = document.getElementById("sum-button");
const sumSpan = document.getElementById("sum-span");
// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener("click", () => {
     const value1 = sumInput1.valueAsNumber;
     const value2 = sumInput2.valueAsNumber;
console.log()
     const sum = value1 + value2;
     sumSpan.textContent = sum;
});


const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subButton = document.getElementById("sub-button");
const subSpan = document.getElementById("sub-span");
console.log(subInput1)
// initialize state

// set event listeners to update state and DOM
subButton.addEventListener("click", () => {
     const value1 = subInput1.valueAsNumber;
     const value2 = subInput2.valueAsNumber;
console.log()
     const sub = value1 - value2;
     subSpan.textContent = sub
});


const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multButton = document.getElementById("mult-button");
const multSpan = document.getElementById("mult-span");
// initialize state
console.log(multInput1)

// set event listeners to update state and DOM
multButton.addEventListener("click", () => {
     const value1 = multInput1.valueAsNumber;
     const value2 = multInput2.valueAsNumber;
console.log()
     const mult = value1 * value2;
     multSpan.textContent = mult;
});


const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divButton = document.getElementById("div-button");
const divSpan = document.getElementById("div-span");
// initialize state

// set event listeners to update state and DOM
divButton.addEventListener("click", () => {
     const value1 = divInput1.valueAsNumber;
     const value2 = divInput2.valueAsNumber;
console.log()
     const div = value1 / value2;
     divSpan.textContent = div;
});

// const timeInput1 = document.getElementById("time-input-1");
// const timeInput2 = document.getElementById("time-input-2");
// const timeButton = document.getElementById("time-button");
// const timeSpan = document.getElementById("time-span");
// // initialize state

// // set event listeners to update state and DOM
// timeButton.addEventListener("click", () => {
//      const value1 = divInput1.valueAsTime;
//      const value2 = divInput2.valueAsTime;
// console.log()
//      const div = value1 + value2;
//      timeSpan.textContent = time;
// });