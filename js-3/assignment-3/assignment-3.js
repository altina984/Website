let dogs = [];
for (let i = 0; i < 6; i++) {
    let name = prompt("Enter dog name:");
    dogs.push(name);
}
dogs.sort();
dogs.reverse();
let list=document.createElement("ul");
for(let i = 0; i < dogs.length; i++) {
    let item = document.createElement("li");
    item.textContent = dogs[i];
    list.appendChild(item);
}
document.body.appendChild(list);