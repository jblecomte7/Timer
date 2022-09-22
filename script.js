let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let milliseconds = document.querySelector("#ms");

let hoursNb = 0;
let minutesNb = 0;
let secondsNb = 0;
let millisecondsNb = 0;

let time;

let startChrono = document.querySelector(".start__btn");
let stopChrono = document.querySelector(".stop__btn");
let reinitChrono = document.querySelector(".reinit__btn");

function timer() {
  millisecondsNb++;
  milliseconds.textContent = millisecondsNb;
  seconds.textContent = secondsNb;
  minutes.textContent = minutesNb;
  hours.textContent = hoursNb;
  if (millisecondsNb === 10) {
    secondsNb++;
    seconds.textContent = secondsNb;
    millisecondsNb = 0;
    milliseconds.textContent = millisecondsNb;
  }
  if (secondsNb === 60) {
    minutesNb++;
    minutes.textContent = minutesNb;
    secondsNb = 0;
    seconds.textContent = secondsNb;
  }
  if (minutesNb === 60) {
    hoursNb++;
    hours.textContent = hoursNb;
    minutesNb = 0;
    minutes.textContent = minutesNb;
    secondsNb = 0;
    seconds.textContent = secondsNb;
  }
}

const chronoStart = () => {
  time = setInterval(timer, 100);
};

const chronoStop = () => {
  clearInterval(time);
};

startChrono.addEventListener("click", () => {
  chronoStart();
});

stopChrono.addEventListener("click", () => {
  chronoStop();
});

reinitChrono.addEventListener("click", () => {
  hoursNb = 0;
  hours.textContent = hoursNb;
  minutesNb = 0;
  minutes.textContent = minutesNb;
  secondsNb = 0;
  seconds.textContent = secondsNb;
  millisecondsNb = 0;
  milliseconds.textContent = millisecondsNb;
});
