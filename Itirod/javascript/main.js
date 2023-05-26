const buttonMenu = document.querySelector('.button-menu');
const navList = document.querySelector('.nav-list');

buttonMenu.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const start = document.querySelector('.start');
start.onclick = (e) => {
    e.preventDefault();
    const focus = document.getElementById("whatTimes").value;

    localStorage.setItem("Focus",focus);

    const breaks = document.getElementById("whatBreaks").value;

    localStorage.setItem("Breaks",breaks);

    setTimeout(()=>{
        location.href='./process.html';
        },1000)
};