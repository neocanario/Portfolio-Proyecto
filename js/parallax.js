// Parallax scroll effect
window.addEventListener('scroll', function() {
    // Obtener la posición del scroll
    let scrollValue = window.scrollY;
    
    // Obtener las imágenes
    let bg = document.getElementById('bg');
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let road = document.getElementById('road');
    
    // bg.jpg - Permanece estática (no aplicamos transformación)
    // Ya está fija por CSS
    
    // moon.png - Se mueve a la IZQUIERDA cuando se hace scroll hacia abajo
    // Usamos un valor negativo para moverla a la izquierda
    moon.style.left = -scrollValue * 0.5 + 'px';
    
    // mountain.png - Se esconde detrás de road.png cuando scrolleas
    // Movemos hacia abajo para que desaparezca detrás de road
    mountain.style.top = scrollValue * 0.3 + 'px';
    
    // road.png - Se mantiene en la parte inferior, puede moverse ligeramente
    // Movemos muy poco para dar sensación de profundidad
    road.style.top = scrollValue * 0.1 + 'px';
});

// Opcional: Smooth scroll para los enlaces del nav
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Solo aplicar smooth scroll si es un anchor link (#)
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
