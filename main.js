"use strict";
const letters = "0123456789ABCDEF";
const body = document.querySelector(".main-body");
const btn = document.querySelector(".button");
const a = document.querySelector(".colorcode");
const code = document.querySelector(".code");

const changeColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.trunc(Math.random() * letters.length)];
  }
  console.log(color);
  body.style.background = color;
  code.textContent = color;
};

changeColor();
btn.addEventListener("click", changeColor);
