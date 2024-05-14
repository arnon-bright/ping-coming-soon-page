const emailInput = document.getElementById("email");
const errorMsg = document.querySelector("#errorMsg");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function emailValidation() {
  if (emailInput.value === "") {
    emailInput.style.borderColor = "";
    errorMsg.style.display = "none";
    return true;
  } else if (emailInput.value.match(emailRegex)) {
    emailInput.style.borderColor = "";
    errorMsg.style.display = "none";
    return true;
  } else {
    emailInput.style.borderColor = "red";
    errorMsg.style.display = "block";
    return false;
  }
}

emailInput.addEventListener("keyup", emailValidation);

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!emailValidation()) {
    event.preventDefault();
  }
});
