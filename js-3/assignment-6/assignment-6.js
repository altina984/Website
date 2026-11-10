function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
let result;
let rolls = [];
do {
    result = rollDice();
    rolls.push(result);
} while (result !== 6);
let list = document.querySelector("ul");
for (let number of rolls) {
    list.innerHTML += "<li>" + number + "</li>";
}