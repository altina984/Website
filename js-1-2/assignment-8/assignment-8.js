let start= Number(prompt("Enter start year:"));
let end= Number(prompt("Enter and year:"));
let list = "<ul>";
for (let year =start; year <= end; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || 
        year % 400 === 0) {
        list = list + "<li>" + year + "</li>";
        }
}
list= list + "</ul>";
document.body.innerHTML = list;