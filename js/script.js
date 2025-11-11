/**
 * Script principal del portfolio
 * Gestiona el menú hamburguesa y la validación del formulario de contacto
 */

document.addEventListener("DOMContentLoaded", initApp);

// ============================================================================
// CONSTANTES
// ============================================================================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ERROR_MESSAGES = {
  nombreVacio: "Por favor, ingresa tu nombre",
  emailVacio: "Por favor, ingresa tu email",
  emailInvalido: "Por favor, ingresa un email válido",
  mensajeVacio: "Por favor, ingresa un mensaje",
};

// ============================================================================
// ELEMENTOS DOM
// ============================================================================

let HAMBURGER;
let NAV_LINKS;
let CONTACT_FORM;

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

/**
 * Inicializa la aplicación
 */
function initApp() {
  // Obtener elementos del DOM
  HAMBURGER = document.getElementById("hamburger");
  NAV_LINKS = document.getElementById("navLinks");
  CONTACT_FORM = document.getElementById("contactForm");

  // Inicializar módulos
  initHamburgerMenu();
  initContactForm();
}

// ============================================================================
// MENÚ HAMBURGUESA
// ============================================================================

/**
 * Inicializa el menú hamburguesa
 */
function initHamburgerMenu() {
  if (!HAMBURGER || !NAV_LINKS) return;

  HAMBURGER.addEventListener("click", toggleMenu);
  setupMenuLinks();
}

/**
 * Alterna la visibilidad del menú
 */
function toggleMenu() {
  HAMBURGER.classList.toggle("active");
  NAV_LINKS.classList.toggle("active");
}

/**
 * Configura los enlaces del menú para cerrarlo al hacer clic
 */
function setupMenuLinks() {
  const links = NAV_LINKS.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/**
 * Cierra el menú hamburguesa
 */
function closeMenu() {
  HAMBURGER.classList.remove("active");
  NAV_LINKS.classList.remove("active");
}

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
  alert("Mensaje enviado correctamente!");
  CONTACT_FORM.reset();
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
