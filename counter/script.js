const btns = document.querySelectorAll("button");
const counter = document.getElementById("counter");
let number = 0;
counter.style.color = "blue";

btns[0].addEventListener("click", () => {
  number -= 1;
  counter.innerText = number;
  if (number < 0) {
    counter.style.color = "red";
  }
});
btns[1].addEventListener("click", () => {
  number = 0;
  counter.innerText = number;
  counter.style.color = "blue";
});
btns[2].addEventListener("click", () => {
  number += 1;
  counter.innerText = number;
  if (number > 0) {
    counter.style.color = "green";
  }
});
