// import functions and grab DOM elements
import { handleSumClick, handleSubClick, handleMultClick, handleDivClick } from "./handlers.js";

const sumButton = document.getElementById("sum-button");
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");

sumButton.addEventListener("click", handleSumClick);
subButton.addEventListener("click", handleSubClick);
multButton.addEventListener("click", handleMultClick);
divButton.addEventListener("click", handleDivClick);