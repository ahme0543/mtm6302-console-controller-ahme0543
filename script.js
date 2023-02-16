const title = document.getElementById("title");

const setTitle = function () {
  title.textContent = "Set your own title!";
};

const paragraph = document.getElementById("paragraph");

const setDescription = function () {
  paragraph.textContent = "Do you want to change the context?";
};

const backgroundColor = document.querySelector("body");

const setBackgroundColor = function () {
  backgroundColor.style.backgroundColor = "red";
};

const setFontColor = function () {
  title.style.color = "black";
  paragraph.style.color = "black";
};

const header = document.querySelector("header");
const main = document.querySelector("main");
const mode = document.querySelector(".mode");
const modeText = document.querySelector(".text-theme");

const setTheme = function () {
  backgroundColor.classList.add("darkmode");
  mode.classList.add("mode-dark");
  main.classList.add("main-dark");
  header.style.backgroundColor = "brown";
  title.style.color = "white";
  modeText.textContent = "dark mode";
};

