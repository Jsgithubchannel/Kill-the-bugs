const start = document.querySelector(".start__btn");
const end = document.querySelector(".end__btn");
start.addEventListener("click", (event) => {
  onStart();
  //countdown 10 to 0
  countDownTimer();
  //randomize imgs
  randomize();
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

function randomize() {
  const bg = document.querySelector(".background");
  const carrot = document.querySelectorAll(".carrot");
  //const bug = document.querySelector(".bug");
  const menu = document.querySelector(".menu__container");

  for (let i = 0; i < carrot.length; i++) {
    const carrot_w = carrot[i].clientWidth;
    const carrot_h = carrot[i].clientHeight;
    const max_w = bg.clientWidth - carrot_w;
    const max_h = bg.clientHeight - menu.clientHeight - carrot_h;

    carrot[i].style.left =
      Math.floor(Math.random() * max_w) + bg.offsetLeft + "px";
    carrot[i].style.top =
      Math.floor(Math.random() * max_h) +
      menu.clientHeight -
      bg.clientHeight +
      "px";
  }
}
