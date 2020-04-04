var body = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
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