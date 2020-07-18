const start = document.querySelector(".start__btn");
const end = document.querySelector(".end__btn");
const bg = document.querySelector(".background");
const carrot = document.querySelectorAll(".carrot");
const bug = document.querySelectorAll(".bug");
const menu = document.querySelector(".menu__container");

start.addEventListener("click", (event) => {
  onStart();
  countDownTimer();
  setPosition(carrot);
  setPosition(bug);
});

function onStart() {
  const imgs = document.querySelector(".img__container");
  imgs.style.visibility = "visible";
  end.style.visibility = "visible";
  start.style.visibility = "hidden";
}

function countDownTimer() {
  let timeleft = 10;
  let download_timer = setInterval(function () {
    timeleft--;
    document.querySelector(".cntdown__timer").textContent = `0:${timeleft}`;
    if (timeleft <= 0) clearInterval(download_timer);
  }, 1000);
}

function setPosition(e) {
  for (let i = 0; i < e.length; i++) {
    const e_w = e[i].clientWidth;
    const e_h = e[i].clientHeight;
    const max_w = bg.clientWidth - e_w;
    const max_h = bg.clientHeight - menu.clientHeight - e_h;

    e[i].style.left = Math.floor(Math.random() * max_w) + bg.offsetLeft + "px";
    e[i].style.top =
      Math.floor(Math.random() * max_h) +
      menu.clientHeight -
      bg.clientHeight +
      "px";
  }
}
