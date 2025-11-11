/**
 * Main portfolio script
 * Manages hamburger menu and contact form validation
 */

document.addEventListener("DOMContentLoaded", initApp);

// ============================================================================
// CONSTANTS
// ============================================================================

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ERROR_MESSAGES = {
  nombreVacio: "Please enter your name",
  emailVacio: "Please enter your email",
  emailInvalido: "Please enter a valid email",
  mensajeVacio: "Please enter a message",
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================

let HAMBURGER;
let NAV_LINKS;
let CONTACT_FORM;

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initializes the application
 */
function initApp() {
  // Get DOM elements
  HAMBURGER = document.getElementById("hamburger");
  NAV_LINKS = document.getElementById("navLinks");
  CONTACT_FORM = document.getElementById("contactForm");

  // Initialize modules
  initHamburgerMenu();
  initContactForm();
}

// ============================================================================
// HAMBURGER MENU
// ============================================================================

/**
 * Initializes the hamburger menu
 */
function initHamburgerMenu() {
  if (!HAMBURGER || !NAV_LINKS) return;

  HAMBURGER.addEventListener("click", toggleMenu);
  setupMenuLinks();
}

/**
 * Toggles menu visibility
 */
function toggleMenu() {
  HAMBURGER.classList.toggle("active");
  NAV_LINKS.classList.toggle("active");
}

/**
 * Sets up menu links to close on click
 */
function setupMenuLinks() {
  const links = NAV_LINKS.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/**
 * Closes the hamburger menu
 */
function closeMenu() {
  HAMBURGER.classList.remove("active");
  NAV_LINKS.classList.remove("active");
}

