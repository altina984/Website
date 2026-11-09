let answer = confirm("Should I calculate the square root?");
if (answer === true) {
    let number = Number(prompt("Enter a number:"));
    if (number < 0) {
        document.body.innerHTML="The square root of a negative number is not defined";
    } else {
        let result = Math.sqrt(number);
        document.body.innerHTML = result;
    }
} else {
    document.body.innerHTML="The square root is not calculated.";
}