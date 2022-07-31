const slides = [...document.querySelectorAll(".slider__slide")];
const controls = [...document.querySelectorAll(".slider__control")];
const playPause = document.querySelector(".slider__play-pause");
const icon = document.querySelector(".slider__play-pause i");
let playSliderBool = true;
let current = 1;
let interval;

function changeSlide() {
  if (current > slides.length) {
    current = 1;
  } else if (current == 0) {
    current = slides.length;
  }

  slides.forEach((slide) => {
    let number = slide.classList[1].split("--")[1] * 1;

    if (current == number) {
      slide.style.cssText = "visibility:visible; opacity:1";
    } else {
      slide.style.cssText = "visibility:hidden; opacity:0";
    }
  });
}

function playSlider() {
  if (playSliderBool) {
    interval = setInterval(() => {
      current++;
      changeSlide();
    }, 3000);
  }
  playSliderBool = false;
}

function handleArrows(e) {
  clearInterval(interval);
  playSliderBool = true;
  if (e.target.classList[1] == "slider__control--left") {
    current--;
  } else {
    current++;
  }

  if (icon.classList[1] == "fa-play") {
    changeSlide();
  } else {
    changeSlide();
    playSlider();
  }
}

function handlePlayPause() {
  if (playSliderBool) {
    playSlider();
  } else {
    clearInterval(interval);
    playSliderBool = true;
  }

  if (icon.classList[1] == "fa-play") {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}

controls.forEach((control) => {
  control.addEventListener("click", handleArrows);
});

playPause.addEventListener("click", handlePlayPause);

changeSlide();



const burger = document.querySelector(".header__hamburger");

burger.addEventListener("click", () => {
  const header = document.querySelector(".header");

  header.classList.toggle("change")
});
