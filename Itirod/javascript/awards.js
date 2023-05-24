const trees = localStorage.getItem("All_tree");
const times = localStorage.getItem("All_time");
const hours = times > 0 ? Math.floor(times / 1000 / 60 / 60) % 24 : 0;
const minutes = times > 0 ? Math.floor(times / 1000 / 60) % 60 : 0;


if (minutes >= 30){
    const img = document.getElementById("firsts");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours >=1 && minutes >= 0){
    const img = document.getElementById("second");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=2 && minutes >= 0){
    const img = document.getElementById("fifth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=2 && minutes >= 30){
    const img = document.getElementById("sixth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=3 && minutes >= 0){
    const img = document.getElementById("eighth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=3 && minutes >= 30){
    const img = document.getElementById("nineth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=4 && minutes >= 0){
    const img = document.getElementById("eleventh");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (hours>=4 && minutes >= 30){
    const img = document.getElementById("twelweth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (trees >= 1){
    const img = document.getElementById("third");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (trees >= 2){
    const img = document.getElementById("fourth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (trees >= 10){
    const img = document.getElementById("seventh");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}
if (trees >= 15){
    const img = document.getElementById("tenth");
  
    // изменяем свойство фильтра
     img.style.filter = "grayscale(0%)";
}