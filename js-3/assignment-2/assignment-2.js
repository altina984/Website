let count = Number(prompt("How many participants?"));
let participants = [];
for (let i = 0; i < count; i++) {
    let name =prompt("Enter participant name:");
    participants.push(name);
}
participants.sort();
let list = document.createElement("ol");
for (let i = 0; i < participants.length; i++) {
    let item = document.createElement("li");
    item.textContent= participants[i];
    list.appendChild(item);
}
document.body.appendChild(list);