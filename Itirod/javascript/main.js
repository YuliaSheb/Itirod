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