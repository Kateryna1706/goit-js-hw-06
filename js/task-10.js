function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const input = controls.querySelector('[type="number"]');
const boxes = controls.nextElementSibling;

function createBoxes(amount) {
  const newElements = "<div></div>".repeat(amount);

  boxes.insertAdjacentHTML("afterbegin", newElements);
  let size = 20;
  for (const child of boxes.children) {
    size += 10;

    child.style.width += `${size}px`;
    child.style.height += `${size}px`;
    child.style.backgroundColor = getRandomHexColor();
  }
}

function handleClick() {
  createBoxes(input.value);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", handleClick);

destroyBtn.addEventListener("click", destroyBoxes);
