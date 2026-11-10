let candidates = [];
let count = Number(prompt("Number or candidates:"));
for (let i = 0; i < count; i++) {
    let name = prompt("Name for candidate" + (i + 1));
    candidates.push({name: name, votes: 0});
}
let voters = Number(prompt("Number or voters:"));
for (let i = 0; i < voters; i++) {
    let vote = prompt("Who do you vote for?");
    for (let candidate of candidates) {
        if (candidate.name === vote) {
            candidate.votes++;
        }
    }
}
candidates.sort((a, b)=> b.votes - a.votes);
console.log("The winner is " + candidates[0].name + 
    " with " + candidates[0].votes + " votes.");
    console.log("results:");
    for (let candidate of candidates) {
        console.log(candidate.name + ": " + candidate.votes + " votes ");
    }
