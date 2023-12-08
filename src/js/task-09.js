function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const showColor = document.querySelector(".color");
const chengeColorBtn = document.querySelector(".change-color");

function onChangeColor() {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  showColor.textContent = bgColor;
}

chengeColorBtn.addEventListener("click", onChangeColor);