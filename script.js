let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let milliseconds = document.querySelector("#ms");

let hoursNb = 0;
let minutesNb = 0;
let secondsNb = 0;
let millisecondsNb = 0;

let time;
let actualTime;
let nbTour = 1;
let checkLap = document.querySelector("#checkpointLap");
let prevTime =
  hoursNb * 60 * 60 * 1000 + minutesNb * 60 * 1000 + secondsNb * 1000;

console.log(prevTime);

let startChrono = document.querySelector(".start__btn");
let stopChrono = document.querySelector(".stop__btn");
let reinitChrono = document.querySelector(".reinit__btn");
let checkpoint = document.querySelector("#lap");

// TIMER FUNCTION

function timer() {
  millisecondsNb++;
  milliseconds.textContent = millisecondsNb;
  seconds.textContent = secondsNb;
  minutes.textContent = minutesNb;
  hours.textContent = hoursNb;
  // Increment seconds
  if (millisecondsNb === 10) {
    secondsNb++;
    seconds.textContent = secondsNb;
    millisecondsNb = 0;
    milliseconds.textContent = millisecondsNb;
  }
  // Increment min & reset ms + sec
  if (secondsNb === 60) {
    minutesNb++;
    minutes.textContent = minutesNb;
    secondsNb = 0;
    seconds.textContent = secondsNb;
  }
  // Increment hr & reset min + sec + ms
  if (minutesNb === 60) {
    hoursNb++;
    hours.textContent = hoursNb;
    minutesNb = 0;
    minutes.textContent = minutesNb;
    secondsNb = 0;
    seconds.textContent = secondsNb;
  }
  actualTime =
    hoursNb * 60 * 60 * 1000 +
    minutesNb * 60 * 1000 +
    secondsNb * 1000 +
    millisecondsNb;
  return `${hoursNb}h ${minutesNb}m ${secondsNb}s ${millisecondsNb}`;
}

// START CHRONO (START button)

const chronoStart = () => {
  time = setInterval(timer, 100);
};

startChrono.addEventListener("click", () => {
  chronoStart();
});

// STOP CHRONO (STOP button)

const chronoStop = () => {
  clearInterval(time);
};

stopChrono.addEventListener("click", () => {
  chronoStop();
});

// ADD CHECKPOINTS (LAP button)

const addContent = () => {
  let addLap = document.createElement("div");
  addLap.className = "lap";
  addLap.innerHTML =
    "<b>Temps du tour n°" +
    nbTour +
    ":</b> " +
    dhm(actualTime - prevTime) +
    "</br>" +
    "<b>Temps total écoulé :</b> " +
    timer();
  checkLap.prepend(addLap);
};

function dhm(ms) {
  hours = Math.floor(ms / (60 * 60 * 1000));
  hoursms = ms % (60 * 60 * 1000);
  minutes = Math.floor(hoursms / (60 * 1000));
  minutesms = ms % (60 * 1000);
  sec = Math.floor(minutesms / 1000);
  msms = ms % 1000;
  ms = Math.floor(minutesms);
  return `${hours}h ${minutes}m ${sec}s ${msms}`;
}

checkpoint.addEventListener("click", () => {
  addContent();
  prevTime = actualTime;
  nbTour++;
});

// RESET CHRONO (RESET button)

reinitChrono.addEventListener("click", () => {
  hoursNb = 0;
  hours.textContent = hoursNb;
  minutesNb = 0;
  minutes.textContent = minutesNb;
  secondsNb = 0;
  seconds.textContent = secondsNb;
  millisecondsNb = 0;
  milliseconds.textContent = millisecondsNb;

  remove();
  prevTime =
    hoursNb * 60 * 60 * 1000 + minutesNb * 60 * 1000 + secondsNb * 1000;
  nbTour = 1;
  console.log(dhm(actualTime - prevTime));
});

const remove = () => {
  const removeCheckpoints = document.querySelectorAll(".lap");
  removeCheckpoints.forEach((line) => {
    line.remove();
  });
};
