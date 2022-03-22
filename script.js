"use strict";
let body = document.querySelector("body");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  changeBg();
}

function changeBg() {
  body.style.background = "linear-gradient(45deg, "
    + color1.value
    + ", "
    + color2.value
    + ") no-repeat fixed";
  h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeBg);
color2.addEventListener("input", changeBg);
button.addEventListener("click", setRandomColor);
