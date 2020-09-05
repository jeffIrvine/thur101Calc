// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { addTwoNumbers, subTwoNumbers, multTwoNumbers, divTwoNumbers } from "../mathUtils.js";

const test = QUnit.test;

// Add two numbers. Test:1,2
test("addTwoNumbers should return 5 if passed 2 and 3", (expect) => {
    const expected = 5;
    const firstNumber = 2;
    const secondNumber = 3;

    const actual = addTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});
test("addTwoNumbers should return 10 if passed 7 and 3", (expect) => {
    const expected = 10;
    const firstNumber = 7;
    const secondNumber = 3;

    const actual = addTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});

// Subtract two numbers. Test: 1,2 
test("subTwoNumbers should return 5 if passed 10 and 5", (expect) => {
    const expected = 5;
    const firstNumber = 10;
    const secondNumber = 5;

    const actual = subTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});
test("subTwoNumbers should return 8 if passed 18 and 10", (expect) => {
    const expected = 8;
    const firstNumber = 18;
    const secondNumber = 10;

    const actual = subTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});

// Multiply two numbers. Test: 1,2
test("multTwoNumbers should return 6 if passed 2 and 3", (expect) => {
    const expected = 6;
    const firstNumber = 2;
    const secondNumber = 3;

    const actual = multTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});
test("multTwoNumbers should return 8 if passed 2 and 4", (expect) => {
    const expected = 8;
    const firstNumber = 2;
    const secondNumber = 4;

    const actual = multTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});

// Divede two numbers. Test: 1, 2
test("divTwoNumbers should return 3 if passed 9 and 3", (expect) => {
    const expected = 3;
    const firstNumber = 9;
    const secondNumber = 3;

    const actual = divTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});
test("divTwoNumbers should return 6 if passed 12 and 2", (expect) => {
    const expected = 6;
    const firstNumber = 12;
    const secondNumber = 2;

    const actual = divTwoNumbers(firstNumber, secondNumber);

    expect.equal(actual,expected); 
});