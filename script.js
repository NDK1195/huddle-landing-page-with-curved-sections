const form = document.getElementById("form");
const errorText = document.getElementById("error-text");
const emailInput = document.getElementById("email-input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailRegex.test(emailInput.value)) {
    errorText.classList.remove("hidden");
    errorText.classList.add("block");

    emailInput.classList.add("border");
    emailInput.classList.add("border-light-red");
  }
});

emailInput.addEventListener("focus", () => {
  errorText.classList.add("hidden");

  emailInput.classList.remove("border");
  emailInput.classList.remove("border-light-red");
});
