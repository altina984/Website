const number1 = Number(prompt("Enter the first number:"));
const number2 = Number(prompt("Enter the second number:"));
const number3 = Number(prompt("Enter the third number:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.body.innerHTML += "<p>Sum: " + sum + "</p>";
document.body.innerHTML += "<p>Product: " + product + "</p>";
document.body.innerHTML += "<p>Average: " + average + "</p>";