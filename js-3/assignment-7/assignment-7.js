function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
let sides = Number(prompt("How many sides?"));
let results;
do {
    result = rollDice(sides);
    document.querySelector("#results").innerHTML +=
    "<li>" + result + "</li>";
} while (result !== sides);