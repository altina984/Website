let dice= Number(prompt("How many dice?"));
let target = Number(prompt("What sum?"));
let correct = 0;
for (let i = 0; i < 10000; i ++) {
    let sum = 0;
    for(let j = 0; j < dice; j++) {
        let number = Math.floor(Math.random() * 6) + 1;
        sum = sum + number;
    }
    if(sum === target) {
        correct = correct + 1;
    }
}
let probability = correct / 10000 * 100;
document.body.innerHTML = " Probability to get sum " +
target + " with " + dice + " dice is " +
probability.toFixed(2) + "%";