// ============================================================================
// CONTACT FORM
// ============================================================================

/**
 * Initializes the contact form
 */
function initContactForm() {
  if (!CONTACT_FORM) return;

  CONTACT_FORM.addEventListener("submit", handleContactSubmit);
}

/**
 * Handles contact form submission
 * @param {Event} e - Submit event
 */
function handleContactSubmit(e) {
  e.preventDefault();

  clearErrors();

  const formData = getFormData();
  const validation = validateFormData(formData);

  if (!validation.isValid) {
    displayErrors(validation.errors);
    return;
  }

  // Valid form → send data to backend
  fetch("/api.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.nombre,
      email: formData.email,
      subject: "Contacto web",
      message: formData.mensaje,
      phone: "", // optional
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message);
        CONTACT_FORM.reset();
      } else {
        alert(data.message || "❌ Ocurrió un error al enviar el mensaje.");
      }
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("❌ No se pudo conectar con el servidor.");
    });
}

/**
 * Gets form data
 * @returns {Object} Form data
 */
function getFormData() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    mensaje: document.getElementById("mensaje").value.trim(),
  };
}

/**
 * Validates form data
 * @param {Object} data - Data to validate
 * @returns {Object} Validation result
 */
function validateFormData(data) {
  const errors = [];

  // Validate name
  if (!data.nombre) {
    errors.push({
      field: "nombre",
      message: ERROR_MESSAGES.nombreVacio,
    });
  }

  // Validate email
  if (!data.email) {
    errors.push({
      field: "email",
      message: ERROR_MESSAGES.emailVacio,
    });
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push({
      field: "email",
      message: ERROR_MESSAGES.emailInvalido,
    });
  }

  // Validate message
  if (!data.mensaje) {
    errors.push({
      field: "mensaje",
      message: ERROR_MESSAGES.mensajeVacio,
    });
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}

/**
 * Displays errors in the form
 * @param {Array} errors - Array of errors
 */
function displayErrors(errors) {
  errors.forEach((error) => {
    showError(error.field, error.message);
  });
}

/**
 * Shows an error on a specific field
 * @param {string} fieldId - Field ID
 * @param {string} message - Error message
 */
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}Error`);

  if (field && errorElement) {
    field.classList.add("error");
    errorElement.textContent = message;
  }
}

/**
 * Clears all form errors
 */
function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  const errorFields = document.querySelectorAll(".error");

  errorMessages.forEach((element) => {
    element.textContent = "";
  });

  errorFields.forEach((element) => {
    element.classList.remove("error");
  });
}
