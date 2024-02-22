const colorText = document.getElementById("color");
const bg = document.querySelector(".container");
const btn = document.getElementById("btn");
const colors = ["green", "yellow", "rgb(0, 132, 255)", "#191919"];

btn.addEventListener("click", () => {
  const random = randomNumber();
  bg.style.backgroundColor = colors[random];
  colorText.innerText = colors[random];
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
