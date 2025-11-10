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
const HERO_SECTION = document.querySelector('.hero-section');

let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const heroHeight = HERO_SECTION ? HERO_SECTION.offsetHeight : window.innerHeight;
  
  // Solo aplicar parallax mientras estamos en la sección hero
  if (scrolled < heroHeight) {
    // Sky permanece fijo (sin movimiento)
    // No aplicamos transform al sky
    
    // Dunes se mueven más rápido (primer plano)
    if (DUNES) {
      const dunesMove = scrolled * 0.6;
      DUNES.style.transform = `translateY(${dunesMove}px)`;
    }
  }
  
  ticking = false;
}

// Event listener optimizado con requestAnimationFrame
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Ejecutar una vez al cargar para posición inicial
updateParallax();