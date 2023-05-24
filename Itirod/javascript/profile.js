const names = localStorage.getItem("Name");
const surname = localStorage.getItem("Surname");
const trees = localStorage.getItem("All_tree");
const times = localStorage.getItem("All_time");
const hours = times > 0 ? Math.floor(times / 1000 / 60 / 60) % 24 : 0;
const minutes = times > 0 ? Math.floor(times / 1000 / 60) % 60 : 0;


document.getElementById("name").textContent = names;
document.getElementById("surname").textContent = surname;
document.getElementById("trees").textContent = trees;
document.getElementById("times_h").textContent = hours;
document.getElementById("times_m").textContent = minutes;