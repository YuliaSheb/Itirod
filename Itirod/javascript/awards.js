const trees = localStorage.getItem("All_tree");
const times = localStorage.getItem("All_time");
const hours = times > 0 ? Math.floor(times / 1000 / 60 / 60) % 24 : 0;
const minutes = times > 0 ? Math.floor(times / 1000 / 60) % 60 : 0;


if (minutes >= 30){
    const img = document.getElementById("firsts");
  
     img.style.filter = "grayscale(0%)";
}
if (hours >=1 && minutes >= 0){
    const img = document.getElementById("second");

     img.style.filter = "grayscale(0%)";
}
if (hours>=2 && minutes >= 0){
    const img = document.getElementById("fifth");

     img.style.filter = "grayscale(0%)";
}
if (hours>=2 && minutes >= 30){
    const img = document.getElementById("sixth");

     img.style.filter = "grayscale(0%)";
}
if (hours>=3 && minutes >= 0){
    const img = document.getElementById("eighth");

     img.style.filter = "grayscale(0%)";
}
if (hours>=3 && minutes >= 30){
    const img = document.getElementById("nineth");

     img.style.filter = "grayscale(0%)";
}
if (hours>=4 && minutes >= 0){
    const img = document.getElementById("eleventh");

     img.style.filter = "grayscale(0%)";
}
if (hours>=4 && minutes >= 30){
    const img = document.getElementById("twelweth");

     img.style.filter = "grayscale(0%)";
}
if (trees >= 1){
    const img = document.getElementById("third");

     img.style.filter = "grayscale(0%)";
}
if (trees >= 2){
    const img = document.getElementById("fourth");

     img.style.filter = "grayscale(0%)";
}
if (trees >= 10){
    const img = document.getElementById("seventh");

     img.style.filter = "grayscale(0%)";
}
if (trees >= 15){
    const img = document.getElementById("tenth");

     img.style.filter = "grayscale(0%)";
}