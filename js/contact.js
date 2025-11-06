function listenToEvents() {
    const contactForm = document.getElementById("contactForm");
    const errorMessage = document.getElementById("errorMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                alert("Gracias por contactarme, te responderé pronto.");
                contactForm.reset();
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", listenToEvents);