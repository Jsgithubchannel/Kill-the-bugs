const start = document.querySelector(".start__btn");
const end = document.querySelector(".end__btn");
start.addEventListener("click", (event) => {
  onStart();
  //countdown 10 to 0
  countDownTimer();
  //randomize imgs
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

function randomize() {}
