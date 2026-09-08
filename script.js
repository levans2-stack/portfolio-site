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

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");
    const successMessage = document.querySelector("#successMessage");


    contactForm.addEventListener("submit", (event) => {

        // Prevent the form from submitting/reloading the page
        event.preventDefault();

        // Clear old messages
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


        // Show success message
        successMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

    });


    // Clear name error when user fixes it
    name.addEventListener("input", () => {

        if (name.value.trim() !== "") {
            nameError.textContent = "";
        }

    });


    // Clear email error when user fixes it
    email.addEventListener("input", () => {

        if (email.value.trim() !== "" && email.validity.valid) {
            emailError.textContent = "";
        }

    });


    // Clear message error when user fixes it
    message.addEventListener("input", () => {

        if (message.value.trim() !== "") {
            messageError.textContent = "";
        }

    });

}


// ==========================================
// 3. BONUS API — RANDOM FUN FACT
// ==========================================

const factButton = document.querySelector("#factButton");
const fact = document.querySelector("#fact");

if (factButton && fact) {

    factButton.addEventListener("click", async () => {

        fact.textContent = "Loading a fun fact...";

        try {

            const response = await fetch(
                "https://uselessfacts.jsph.pl/api/v2/facts/random"
            );

            if (!response.ok) {
                throw new Error("Unable to get a fun fact.");
            }

            const data = await response.json();

            fact.textContent = data.text;

        } catch (error) {

            fact.textContent =
                "Sorry! We couldn't load a fun fact right now. Please try again.";

        }

    });

}
