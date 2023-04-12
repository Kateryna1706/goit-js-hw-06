let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");
console.dir(nameInput.part);

nameInput.addEventListener("input", (event) => {
  if (
    event.currentTarget.value === "" ||
    event.currentTarget.value.includes(" ")
  ) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value;
  }
});
