let numbers = [];
while (true) {
    let number = Number(prompt("Enter a number:"));
    if (numbers.includes(number)) {
        alert("Number has already been given");
        break;
    }
    numbers.push(number);
}
numbers.sort(function(a, b) {
    return a - b;
});
for (let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
}