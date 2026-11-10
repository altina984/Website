function concat(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result = result + array[i];
    }
    return result;
}
let names= ["Johnny", "DeeDee", "Joey", "Marky"];
document.body.innerHTML = concat(names);