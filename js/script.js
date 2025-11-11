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

