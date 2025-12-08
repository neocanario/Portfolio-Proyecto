/**
 * Typing effect for main section
 */

// Text content
const TITLE_TEXT = "Buenas👋, \n Soy Joel";
const SUBTITLE_TEXT = "Desarrollador Web Full Stack";

// Typing speeds (milliseconds)
const TYPING_SPEED = 100;
const PAUSE_BETWEEN_TEXTS = 500;

// DOM elements
let titleElement;
let subtitleElement;

/**
 * Initialize typing effect when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  titleElement = document.getElementById('typing-title');
  subtitleElement = document.getElementById('typing-subtitle');
  
  if (titleElement && subtitleElement) {
    startTypingEffect();
  }
});

/**
 * Start the typing animation sequence
 */
function startTypingEffect() {
  typeText(titleElement, TITLE_TEXT, 0, function() {
    setTimeout(function() {
      typeText(subtitleElement, SUBTITLE_TEXT, 0);
    }, PAUSE_BETWEEN_TEXTS);
  });
}

/**
 * Type text character by character
 * @param {HTMLElement} element - Element where text will be typed
 * @param {string} text - Text to type
 * @param {number} index - Current character index
 * @param {Function} callback - Function to call when finished
 */
function typeText(element, text, index, callback) {
  if (index < text.length) {
    const currentChar = text.charAt(index);
    
    // Handle line breaks
    if (currentChar === '\n') {
      element.innerHTML += '<br>';
    } else {
      // Escape HTML to prevent injection and preserve formatting
      const span = document.createElement('span');
      span.textContent = currentChar;
      element.appendChild(span);
    }
    
    setTimeout(function() {
      typeText(element, text, index + 1, callback);
    }, TYPING_SPEED);
  } else if (callback) {
    callback();
  }
}
