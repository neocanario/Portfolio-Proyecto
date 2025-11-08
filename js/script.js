// Mobile Navigation Toggle
const NAV_TOGGLE = document.getElementById("nav-toggle");
const MAIN_NAV = document.getElementById("main-nav");

if (NAV_TOGGLE && MAIN_NAV) {
  const toggleMenu = (open) => {
    const IS_OPEN = open ?? !MAIN_NAV.classList.contains("open");
    MAIN_NAV.classList.toggle("open", IS_OPEN);
    NAV_TOGGLE.setAttribute("aria-expanded", IS_OPEN);
  };

  NAV_TOGGLE.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (e) => {
    if (
      MAIN_NAV.classList.contains("open") &&
      !MAIN_NAV.contains(e.target) &&
      e.target !== NAV_TOGGLE
    ) {
      toggleMenu(false);
    }
  });
}

const HERO_SECTION = document.querySelector(".hero-section");
if (HERO_SECTION) {
  window.addEventListener("scroll", () => {
    const SCROLL_POSITION = window.pageYOffset;
    const Parallax_SPEED = 0.5;
    
    if (window.innerWidth > 768) {
      HERO_SECTION.style.backgroundPositionY = `${SCROLL_POSITION * Parallax_SPEED}px`;
    }
  });
}