const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${input.value}px`;

function handleInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

input.addEventListener("input", handleInput);
