// ==========================================
// 1. MOBILE NAVIGATION TOGGLE
// ==========================================

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.textContent = isOpen ? "✕ Close Menu" : "☰ Menu";
    });
}


// ==========================================
// 2. CONTACT FORM VALIDATION + EMAIL
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

        // Prevent normal form submission
        event.preventDefault();

        // Clear previous messages
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


        // Create the email
        const subject = encodeURIComponent(
            `Portfolio Contact from ${name.value.trim()}`
        );

        const body = encodeURIComponent(
            `Name: ${name.value.trim()}\n` +
            `Email: ${email.value.trim()}\n\n` +
            `Message:\n${message.value.trim()}`
        );


        // Open the visitor's email application
        window.location.href =
            `mailto:lailaniejobs@gmail.com?subject=${subject}&body=${body}`;


        // Show confirmation
        successMessage.textContent =
            "Your email application is opening. Thank you for reaching out! ✨";

    });


    // Clear name error as the user types
    name.addEventListener("input", () => {

        if (name.value.trim() !== "") {
            nameError.textContent = "";
        }

    });


    // Clear email error as the user types
    email.addEventListener("input", () => {

        if (email.value.trim() !== "" && email.validity.valid) {
            emailError.textContent = "";
        }

    });


    // Clear message error as the user types
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
