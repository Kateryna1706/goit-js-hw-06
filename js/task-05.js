let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
});
