const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const object = event.currentTarget.elements;
  const { email, password } = object;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
  }
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);
