function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


// =================================================================

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const added = (add(number1,number2));
const subtracted = (subtract(number1,number2));
const multiplied = (multiply(number1,number2));
const divided = (divide(number1,number2));
const output = (number1 + " + " + number2 + " = " + add(number1,number2) + ", " + number1 + " - " + number2 + " = " + subtract(number1,number2) + ", " + number1 + " * " + number2 + " = " + multiply(number1,number2) + ", " + number1 + " / " + number2 + " = " +  divide(number1,number2));


window.alert(output);
