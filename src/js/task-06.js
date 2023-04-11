const input = document.querySelector("#validation-input");

function handleBlur(event) {
  const lengthValue = event.currentTarget.value.length;

  const dataLength = event.currentTarget.dataset.length;

  return Number(lengthValue) === Number(dataLength)
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
}

input.addEventListener("blur", handleBlur);
