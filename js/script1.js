// let stopWatch = document.querySelector("/")

//возвращает дату и время - new Date()
//new - это оператор который создает новый экземпляр объекта

// console.dir(new Date());

const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

//либо выполняют либо вычисляет возвращая определенный тип данных
function clock() {
  let time = new Date(),
    hours = time.getHours() * 30,
    minutes = time.getMinutes() * 6,
    seconds = time.getSeconds() * 6;

  hour.style.transform = `rotate(${hours}deg)`;
  min.style.transform = `rotate(${minutes}deg)`;
  sec.style.transform = `rotate(${seconds}deg)`;

  // console.log(hours, minutes, seconds)
  // hoursNumber.innerHTML = `<span>00</span>`;
  hoursNumber.innerHTML =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  minutesNumber.innerHTML =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  setTimeout(() => clock(), 1000);
}
clock();

//recursion - рекурсия - это когда функция перевызывает саму себя

//setInterval(callbackFn, ms) - вызывает задержку вызова работает на постоянной основе
//setTimeout(callbackFn, ms) - вызывает задержку вызова работает 1 раз
const links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem"),
  hoursWatch = document.querySelector(".stopwatch__hours"),
  minutesWatch = document.querySelector(".stopwatch__minutes"),
  secondsWatch = document.querySelector(".stopwatch__seconds"),
  startBtn = document.querySelector(".stopwatch__btn");

//область видимости переменных
//вкладка для переключения на секундомер
links.forEach((link, i, arr) => {
  link.addEventListener("click", () => {
    arr.forEach((link, i) => {
      link.classList.remove("active");
      tabs[i].classList.remove("active");
    });
    link.classList.add("active");
    tabs[i].classList.add("active");
  });
});

//работа секундомера
let totalSeconds = 0;
let timerId = null;

function stopwatch() {
  let hoursStopwatch = Math.floor(totalSeconds / 3600),
    minutesStopwatch = Math.floor((totalSeconds % 3600) / 60),
    secondsStopwatch = totalSeconds % 60;
  totalSeconds++;

  hoursWatch.innerHTML =
    hoursStopwatch < 10 ? "0" + hoursStopwatch : hoursStopwatch;
  minutesWatch.innerHTML =
    minutesStopwatch < 10 ? "0" + minutesStopwatch : minutesStopwatch;
  secondsWatch.innerHTML =
    secondsStopwatch < 10 ? "0" + secondsStopwatch : secondsStopwatch;

  timerId = setTimeout(stopwatch, 50);
}

startBtn.addEventListener("click", () => {
  if (startBtn.innerHTML === "Start") {
    startBtn.innerHTML = "Stop";
    stopwatch();
  } else {
    startBtn.innerHTML = "Start";
    clearTimeout(timerId);
  }
});
