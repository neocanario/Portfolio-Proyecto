// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const HAMBURGER = document.getElementById('hamburger');
    const NAV_LINKS = document.getElementById('navLinks');
    
    if (HAMBURGER) {
        HAMBURGER.addEventListener('click', function() {
            HAMBURGER.classList.toggle('active');
            NAV_LINKS.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const LINKS = NAV_LINKS.querySelectorAll('a');
        LINKS.forEach(function(link) {
            link.addEventListener('click', function() {
                HAMBURGER.classList.remove('active');
                NAV_LINKS.classList.remove('active');
            });
        });
    }

    // Formulario de contacto
    const CONTACT_FORM = document.getElementById('contactForm');
    
    if (CONTACT_FORM) {
        CONTACT_FORM.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Limpiar errores previos
            clearErrors();
            
            // Obtener valores de los campos
            const NOMBRE = document.getElementById('nombre').value.trim();
            const EMAIL = document.getElementById('email').value.trim();
            const MENSAJE = document.getElementById('mensaje').value.trim();
            
            let isValid = true;
            
            // Validar nombre
            if (NOMBRE === '') {
                showError('nombre', 'Por favor, ingresa tu nombre');
                isValid = false;
            }
            
            // Validar email
            if (EMAIL === '') {
                showError('email', 'Por favor, ingresa tu email');
                isValid = false;
            } else {
                // Validar formato de email
                const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!EMAIL_REGEX.test(EMAIL)) {
                    showError('email', 'Por favor, ingresa un email válido');
                    isValid = false;
                }
            }
            
            // Validar mensaje
            if (MENSAJE === '') {
                showError('mensaje', 'Por favor, ingresa un mensaje');
                isValid = false;
            }
            
            // Si todo es válido
            if (isValid) {
                alert('Mensaje enviado correctamente!');
                CONTACT_FORM.reset();
            }
        });
    }
    
    // Función para mostrar error
    function showError(fieldId, message) {
        const FIELD = document.getElementById(fieldId);
        const ERROR_ELEMENT = document.getElementById(fieldId + 'Error');
        
        FIELD.classList.add('error');
        ERROR_ELEMENT.textContent = message;
    }
    
    // Función para limpiar errores
    function clearErrors() {
        const ERROR_MESSAGES = document.querySelectorAll('.error-message');
        const ERROR_FIELDS = document.querySelectorAll('.error');
        
        ERROR_MESSAGES.forEach(function(element) {
            element.textContent = '';
        });
        
        ERROR_FIELDS.forEach(function(element) {
            element.classList.remove('error');
        });
    }
});
