function listenToEvents() {
    const CONTACT_FORM = document.getElementById("contactForm");
    const ERROR_MESSAGE = document.getElementById("errorMessage");

    if (CONTACT_FORM) {
        CONTACT_FORM.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                ERROR_MESSAGE.style.display = "block";
            } else {
                ERROR_MESSAGE.style.display = "none";
                alert("Gracias por contactarme, te responderé pronto.");
                CONTACT_FORM.reset();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", listenToEvents);