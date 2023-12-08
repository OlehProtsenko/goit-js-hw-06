
const registrationForm = document.querySelector(".login-form");

registrationForm.addEventListener("submit", onVerificationForm);

function onVerificationForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Усі поля повинні бути заповнені!");
  } else {
    const newUser = {
      email: email,
      password: password,
    };
    console.log(newUser);
    form.reset();
  }
}