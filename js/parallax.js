// Parallax scroll effect
window.addEventListener('scroll', function() {
    // Take the position of the scroll
    let scrollValue = window.scrollY;
    
    // Take the images
    let bg = document.getElementById('bg');
    let moon = document.getElementById('moon');
    let mountain = document.getElementById('mountain');
    let road = document.getElementById('road');
    
    // bg.jpg - Remains static (no transformation applied)
    // Already fixed by CSS
    
    // moon.png - Starts at the right and moves to the LEFT when scrolling down
    moon.style.right = scrollValue * 0.5 + 'px';
    
    // mountain.png - Hides behind road.png when scrolling down
    // Move upwards to disappear behind road
    mountain.style.top = scrollValue * 0.5 + 'px';
    
    // road.png - Stays at the bottom, can move slightly
    // Move very little to give a sense of depth
    road.style.top = scrollValue * 0.1 + 'px';
});

// Optional: Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply smooth scroll if it's an anchor link (#)
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
