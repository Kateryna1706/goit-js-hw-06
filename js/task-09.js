function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.querySelector(".widget");
const button = div.querySelector(".change-color");
const spanColor = div.querySelector(".color");

function handleClick(event) {
  const currentColor = getRandomHexColor();
  div.style.backgroundColor = currentColor;
  spanColor.textContent = currentColor;
}

button.addEventListener("click", handleClick);
