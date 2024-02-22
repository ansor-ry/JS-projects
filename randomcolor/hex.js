const colorText = document.getElementById("color");
const bg = document.querySelector(".container");
const btn = document.getElementById("btn");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[randomNumber()];
  }

  bg.style.backgroundColor = color;
  colorText.innerText = color;
});

const randomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
