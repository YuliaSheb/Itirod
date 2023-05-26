const buttonMenu = document.querySelector('.button-menu');
const navList = document.querySelector('.nav-list');

buttonMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const names = localStorage.getItem("Name");
const surname = localStorage.getItem("Surname");
const trees = localStorage.getItem("All_tree");
const times = localStorage.getItem("All_time");
const hours = times > 0 ? Math.floor(times / 1000 / 60 / 60) % 24 : 0;
const minutes = times > 0 ? Math.floor(times / 1000 / 60) % 60 : 0;
const gender = localStorage.getItem("Gender");


document.getElementById("name").textContent = names;
document.getElementById("surname").textContent = surname;
document.getElementById("trees").textContent = trees;
document.getElementById("times_h").textContent = hours;
document.getElementById("times_m").textContent = minutes;

if (gender=="male"){
    const image = document.getElementById("avatar");
    image.src = "images/avatar2.png";
    image.alt = "avatar";
}