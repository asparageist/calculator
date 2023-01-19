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
const output = ("Your numbers equal " + add(number1,number2) + " when added, " + subtract(number1,number2) + " when subtracted, " + multiply(number1,number2) + " when multiplied, " + divide(number1,number2) + " when divided.");


window.alert(output);

// window.alert(add("when added equal ",number1,number2));
//  subtract("when subtracted equal ",number1,number2),
//  multiply("when multiplied equal ",number1,number2),
//  divide("when divided equal ",number1,number2));
