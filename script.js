// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("show");

        menuButton.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuButton.textContent = "✕ Close Menu";
        } else {
            menuButton.textContent = "☰ Menu";
        }

    });


    // Close menu when a navigation link is selected

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰ Menu";

        });

    });

}


// ==========================================
// CONTACT FORM VALIDATION
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

        event.preventDefault();

        // Clear old errors

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let hasErrors = false;


        // NAME

        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            hasErrors = true;

        }


        // EMAIL

        if (email.value.trim() === "") {

            emailError.textContent =
                "Please enter your email address.";

            hasErrors = true;

        } else if (!email.validity.valid) {

            emailError.textContent =
                "Please enter a valid email address.";

            hasErrors = true;

        }


        // MESSAGE

        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter a message.";

            hasErrors = true;

        }


        // STOP IF THERE ARE ERRORS

        if (hasErrors) {

            return;

        }


        // CREATE EMAIL

        const subject = encodeURIComponent(
            "Portfolio Contact from " + name.value.trim()
        );

        const body = encodeURIComponent(
            "Name: " + name.value.trim() +
            "\nEmail: " + email.value.trim() +
            "\n\nMessage:\n" + message.value.trim()
        );


        // OPEN EMAIL APPLICATION

        window.location.href =
            "mailto:lailaniejobs@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;


        // SHOW SUCCESS MESSAGE

        successMessage.textContent =
            "Your email application is opening. Thank you for reaching out! ✨";

    });


    // CLEAR NAME ERROR

    name.addEventListener("input", () => {

        if (name.value.trim() !== "") {

            nameError.textContent = "";

        }

    });


    // CLEAR EMAIL ERROR

    email.addEventListener("input", () => {

        if (
            email.value.trim() !== "" &&
            email.validity.valid
        ) {

            emailError.textContent = "";

        }

    });


    // CLEAR MESSAGE ERROR

    message.addEventListener("input", () => {

        if (message.value.trim() !== "") {

            messageError.textContent = "";

        }

    });

}


// ==========================================
// BONUS API — RANDOM FUN FACT
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

                throw new Error(
                    "The API request failed."
                );

            }


            const data = await response.json();


            fact.textContent = data.text;

        } catch (error) {

            fact.textContent =
                "Sorry! We couldn't load a fun fact right now. Please try again.";

        }

    });

}
