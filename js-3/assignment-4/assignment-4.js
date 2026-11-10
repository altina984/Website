let numbers = [];
let number = Number(prompt("Enter a number:"));
while(number !== 0) {
    numbers.push(number);
    number=Number(prompt("Enter a number:"));
}
numbers.sort(function(a, b) {
    return b-a;
});
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}