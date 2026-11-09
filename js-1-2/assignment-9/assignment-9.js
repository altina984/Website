let number = Number(prompt("Enter a number:"));
let prime = true;
if (number <= 1) {
    prime = false;
}
for (let i = 2; i < number; i ++) {
    if (number % i === 0) {
        prime= false;
        break;
    }
}
if (prime === true) {
    document.body.innerHTML = number + "is a prime number.";
} else {
    document.body.innerHTML= number + " is not a prime number.";
}