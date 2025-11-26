const registrationForm = document.getElementById("emailForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Clear all previous errors
  clearErrors();

  let hasError = false;

  if (!firstName.value.trim()) {
    displayError("error-first-name", "✖ First Name is required. ✖");
    hasError = true;
  }

  if (!lastName.value.trim()) {
    displayError("error-last-name", "✖ Last Name is required. ✖");
    hasError = true;
  }
  
  if (!email.value.trim()) {
    displayError("error-email", "✖ Please enter a valid email address. ✖");
    hasError = true;
  } else if (!isValidEmail(email.value)) {
    displayError("error-email", "✖ Please enter a valid email address. ✖");
    hasError = true;
  }

  if (!message.value.trim()) {
    displayError("error-message", "✖ Message is required. ✖");
    hasError = true;
  }

  if (!hasError) {
    alert("Message sent successfully!");
    registrationForm.reset();
  }
});

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
