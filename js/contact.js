// ============================================================================
// FORMULARIO DE CONTACTO
// ============================================================================

/**
 * Inicializa el formulario de contacto
 */
function initContactForm() {
  if (!CONTACT_FORM) return;

  CONTACT_FORM.addEventListener("submit", handleContactSubmit);
}

/**
 * Maneja el envío del formulario de contacto
 * @param {Event} e - Evento de submit
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

  // Formulario válido
  // Formulario válido → enviar datos al backend
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
      phone: "", // opcional
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
 * Obtiene los datos del formulario
 * @returns {Object} Datos del formulario
 */
function getFormData() {
  return {
    nombre: document.getElementById("nombre").value.trim(),
    email: document.getElementById("email").value.trim(),
    mensaje: document.getElementById("mensaje").value.trim(),
  };
}

/**
 * Valida los datos del formulario
 * @param {Object} data - Datos a validar
 * @returns {Object} Resultado de la validación
 */
function validateFormData(data) {
  const errors = [];

  // Validar nombre
  if (!data.nombre) {
    errors.push({
      field: "nombre",
      message: ERROR_MESSAGES.nombreVacio,
    });
  }

  // Validar email
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

  // Validar mensaje
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
 * Muestra los errores en el formulario
 * @param {Array} errors - Array de errores
 */
function displayErrors(errors) {
  errors.forEach((error) => {
    showError(error.field, error.message);
  });
}

/**
 * Muestra un error en un campo específico
 * @param {string} fieldId - ID del campo
 * @param {string} message - Mensaje de error
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
 * Limpia todos los errores del formulario
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
