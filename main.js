const form = document.querySelector("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const queryTypes = document.querySelectorAll(".query-type-container div input");
const messageInput = document.getElementById("message-area");
const agreeInput = document.getElementById("agree");
const submitButton = document.getElementById("submit-button");

const errorMessages = document.querySelectorAll(".error-message");

const successMessage = document.querySelector(".success-message");

form.noValidate = true;

function displayError(index) {
  errorMessages.forEach((errorMessage) => {
    if (errorMessage === Array.from(errorMessages)[index]) {
      errorMessage.style.display = "block";
    }
  });
}

function clearErrors() {
  errorMessages.forEach((error) => {
    error.style.display = "none";
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();
  if (firstNameInput.value === "") {
    displayError(0);
  } else if (lastNameInput.value === "") {
    displayError(1);
  } else if (emailInput.value === "" || !emailInput.value.includes("@")) {
    displayError(2);
  } else if (
    !Array.from(queryTypes)[0].checked &&
    !Array.from(queryTypes)[1].checked
  ) {
    displayError(3);
  } else if (messageInput.value === "") {
    displayError(4);
  } else if (!agreeInput.checked) {
    displayError(5);
  } else {
    successMessage.style.display = "block";
    setTimeout(() => (successMessage.style.display = "none"), 3000);
    form.reset();
  }
});
