var indexVal = 0;
function slideShow(){
    setTimeout(slideShow,1000);
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
    let timerId = null;
    //const targetTime = new Date(Date.now() + 600000); // устанавливаем время через 10 минут
    let diff = localStorage.getItem("Focus");
    let start_time = parseInt(diff);
    let start_tree = parseInt(localStorage.getItem("All_tree"));
    let start_times = parseInt(localStorage.getItem("All_time"));
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      diff -= 1000;
      if (diff <= 0) {
        start_tree += 1;
        start_times = start_times + start_time;
        localStorage.setItem("All_time",start_times);
        localStorage.setItem("All_tree",start_tree);
        clearInterval(timerId);
        setTimeout(()=>{
          location.href='./process2.html';
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
  });