function even(numbers) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
let numbers = [2, 7, 4, 9, 6, 3];
let result = even(numbers);
console.log(numbers);
console.log(result);