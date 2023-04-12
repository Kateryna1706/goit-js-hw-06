const input = document.querySelector("#validation-input");

function handleBlur(event) {
  const lengthValue = event.currentTarget.value.length;

  const dataLength = event.currentTarget.dataset.length;

  if (Number(lengthValue) === Number(dataLength)) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
}

input.addEventListener("blur", handleBlur);
