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

const SKY = document.getElementById('sky');
const DUNES = document.getElementById('dunes');
const DUNES_PARALLAX_SPEED = 0.5;

let ticking = false;

function updateDunesParallax() {
  const scrolled = window.pageYOffset;
  const windowHeight = window.innerHeight;
  
  // Solo aplicar parallax en la sección hero
  if (scrolled < windowHeight * 0.93) {
    // Dunas - se mueven hacia arriba con el scroll
    const dunesMove = (scrolled * DUNES_PARALLAX_SPEED);
    DUNES.style.transform = `translateY(${dunesMove}px)`;
  }
  
  ticking = false;
}

// Event listener optimizado con requestAnimationFrame
window.addEventListener('scroll', () => {
  if (!ticking && DUNES) {
    window.requestAnimationFrame(updateDunesParallax);
    ticking = true;
  }
});