var indexVal = 0;
function slideShow(){
    setTimeout(slideShow,2000);
    var x;
    const img=document.getElementsByClassName("proc-img");
    for(x=0;x<img.length;x++){
        img[x].style.display="none";
    }
    indexVal++
    if(indexVal>img.length){
        indexVal=1;
    }
    img[indexVal-1].style.display = "block";
}
slideShow()

document.addEventListener('DOMContentLoaded', function() {
    // id таймера
    let timerId = null;
    const targetTime = new Date(Date.now() + 600000); // устанавливаем время через 10 минут
    let diff = localStorage.getItem("Breaks");
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      diff -= 1000;
      if (diff <= 0) {
        clearInterval(timerId);
        setTimeout(()=>{
            location.href='./end.html';
            },1000)
      }
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);

    const jokeContainer = document.getElementById("joke");
    const btn = document.getElementById("btn");
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    let getJoke = () => {
        jokeContainer.classList.remove("fade");
        fetch(url)
        .then(data => data.json())
        .then(item =>{
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        });
    }
    btn.addEventListener("click",getJoke);
    getJoke();
    console.log(getJoke);
  });