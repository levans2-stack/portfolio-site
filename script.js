// ==========================================
// 1. MOBILE NAVIGATION TOGGLE
// ==========================================

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");

    menuButton.setAttribute("aria-expanded", isOpen);
  });
}


// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");
    const successMessage = document.querySelector("#successMessage");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let hasErrors = false;

    // Check name
    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      hasErrors = true;
    }

    // Check email
    if (email.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      hasErrors = true;
    } else if (!email.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      hasErrors = true;
    }

    // Check message
    if (message.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      hasErrors = true;
    }

    // Stop if there are errors
    if (hasErrors) {
      return;
    }

    // Successful validation
    successMessage.textContent =
      "Thank you! Your message has been submitted successfully.";

    contactForm.reset();
  });

  // Clear name error when corrected
  const name = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  name.addEventListener("input", () => {
    if (name.value.trim() !== "") {
      nameError.textContent = "";
    }
  });

  // Clear email error when corrected
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  email.addEventListener("input", () => {
    if (email.value.trim() !== "" && email.validity.valid) {
      emailError.textContent = "";
    }
  });

  // Clear message error when corrected
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#messageError");

  message.addEventListener("input", () => {
    if (message.value.trim() !== "") {
      messageError.textContent = "";
    }
  });
}
