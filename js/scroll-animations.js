/**
 * Scroll animations - Fade in elements on scroll
 */

document.addEventListener("DOMContentLoaded", function () {
  initScrollAnimations();
});

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".scroll-fade");

  // Configuration for Intersection Observer
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // 10% of element visible triggers animation
  };

  // Callback when element enters/exits viewport
  const observerCallback = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element is in viewport, add visible class
        entry.target.classList.add("visible");

        // Optional: Stop observing after animation (comment out to repeat)
        // observer.unobserve(entry.target);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe all elements with scroll-fade class
  elements.forEach(function (element) {
    observer.observe(element);
  });
}
