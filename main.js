const start = document.querySelector(".start__btn");
const end = document.querySelector(".end__btn");
const bg = document.querySelector(".background");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const menu = document.querySelector(".menu__container");
const catch_cnt = document.querySelector(".catch__cnt");
const carrot_pull = document.querySelector(".carrot_pull");
const bg_music = document.querySelector(".bg_music");
const try_again = document.querySelector(".try__again");
const ctr = document.querySelector(".ctr");
const lose = document.querySelector(".lose");
const win = document.querySelector(".win");
const timer = document.querySelector(".cntdown__timer");
let timeleft = 0;

start.addEventListener("click", () => {
  onStart();
  countDownTimer();
  setPosition(carrot);
  setPosition(bug);
});

try_again.addEventListener("click", () => {
  reset();
  onStart();
  countDownTimer();
  setPosition(carrot);
  setPosition(bug);
  lose.style.visibility = "hidden";
  win.style.visibility = "hidden";
});

for (let i = 0; i < carrot.length; i++) {
  carrot[i].addEventListener("click", () => {
    carrot[i].style.visibility = "hidden";
    catch_cnt.textContent++;
    carrot_pull.play();
  });
}

function reset() {
  for (let i = 0; i < carrot.length; i++) {
    carrot[i].style.visibility = "visible";
  }
  catch_cnt.textContent = 0;
  timeleft = 10;
  timer.textContent = `0:${timeleft}`;
}

function onStart() {
  const imgs = document.querySelector(".img__container");
  imgs.style.visibility = "visible";
  end.style.visibility = "visible";
  start.style.visibility = "hidden";
  try_again.style.visibility = "hidden";
  // bg_music.play();
}

function countDownTimer() {
  const bug_pull = document.querySelector(".bug_pull");
  timeleft = 10;

  let download_timer = setInterval(function () {
    const game_win = document.querySelector(".game_win");

    timeleft--;
    timer.textContent = `0:${timeleft}`;
    if (timeleft <= 0 && catch_cnt.textContent != carrot.length) {
      clearInterval(download_timer);
      win.style.visibility = "hidden";
      ctr.style.visibility = "visible";
      lose.style.visibility = "visible";
      try_again.style.visibility = "visible";
      bg_music.pause();
      bug_pull.play();
    } else if (catch_cnt.textContent == carrot.length) {
      clearInterval(download_timer);
      ctr.style.visibility = "visible";
      lose.style.visibility = "hidden";
      win.style.visibility = "visible";
      try_again.style.visibility = "visible";
      bg_music.pause();
      // bg_music.currentTime = 0;
      game_win.play();
    }
    for (let i = 0; i < bug.length; i++) {
      bug[i].addEventListener("click", () => {
        // bg_music.pause();
        // bug_pull.play();
        clearInterval(download_timer);
        lose.style.visibility = "visible";
        try_again.style.visibility = "visible";
      });
    }
  }, 1000);
}

function setPosition(e) {
  const body = document.querySelector("body");
  const imgs = document.querySelector(".img__container");
  imgs.style.top = imgs.clientHeight - bg.clientHeight + "px";
  for (let i = 0; i < e.length; i++) {
    //const e_w = e[i].clientWidth;
    const e_h = e[i].clientHeight;
    //const max_w = bg.clientWidth - e_w;
    const max_h = bg.clientHeight - menu.clientHeight - e_h;

    // e[i].style.left = Math.floor(Math.random() * max_w) + bg.offsetLeft + "px";
    // e[i].style.bottom =
    //   Math.floor(Math.random() * max_h) +
    //   menu.clientHeight -
    //   bg.clientHeight +
    //   "px";
    e[i].style.bottom = Math.floor(Math.random() * max_h) + "px";
  }
}
